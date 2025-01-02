import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: number;
  content: string;
  type: "user" | "system";
}

export function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Welcome to BackTester! Describe your trading strategy and I'll help you test it.",
      type: "system",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const callWebhook = async (strategy: string) => {
    console.log("Calling Make.com webhook with strategy:", strategy);
    
    try {
      const response = await fetch('https://hook.eu2.make.com/5g416ks32396xppci6xcgsdvf7tc67ea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          strategy,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to process strategy');
      }

      console.log("Webhook response:", response);
      return true;
    } catch (error) {
      console.error("Webhook error:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    console.log("Submitting message:", input);

    const newMessage: Message = {
      id: messages.length + 1,
      content: input,
      type: "user",
    };

    setMessages((prevMessages) => {
      console.log("Previous messages:", prevMessages);
      const validMessages = Array.isArray(prevMessages) ? prevMessages : [];
      return [...validMessages, newMessage];
    });
    
    try {
      await callWebhook(input);
      
      // Add system response after successful webhook call
      const response: Message = {
        id: messages.length + 2,
        content: "I'll analyze your strategy and run a backtest simulation. Please wait a moment...",
        type: "system",
      };
      
      setMessages((prevMessages) => {
        console.log("Adding system response:", response);
        const validMessages = Array.isArray(prevMessages) ? prevMessages : [];
        return [...validMessages, response];
      });

      toast({
        title: "Strategy Submitted",
        description: "Your trading strategy has been sent for analysis.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process your strategy. Please try again.",
        variant: "destructive",
      });
    } finally {
      setInput("");
      setIsLoading(false);
    }
  };

  return (
    <Card className="flex h-[calc(100vh-5rem)] flex-col">
      <div className="border-b p-4">
        <h2 className="text-lg font-semibold">Strategy Chat</h2>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {(messages || []).map((message) => {
            if (!message || typeof message !== 'object') {
              console.warn("Invalid message in chat:", message);
              return null;
            }

            return (
              <div
                key={message.id}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-lg px-4 py-2 ${
                    message.type === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
      
      <form onSubmit={handleSubmit} className="border-t p-4">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your trading strategy..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </Card>
  );
}