import { Card } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Strategies = () => {
  const strategies = [
    { id: 1, name: "Moving Average Crossover", status: "Active", performance: "+12.5%" },
    { id: 2, name: "RSI Divergence", status: "Inactive", performance: "+8.2%" },
    { id: 3, name: "Breakout Strategy", status: "Active", performance: "+15.7%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      
      <main className="ml-16 mt-16 md:ml-64">
        <div className="container p-4">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Strategies</h1>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Strategy
            </Button>
          </div>
          
          <div className="grid gap-4">
            {strategies.map((strategy) => (
              <Card key={strategy.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{strategy.name}</h3>
                    <p className="text-sm text-muted-foreground">Status: {strategy.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-primary">{strategy.performance}</p>
                    <p className="text-sm text-muted-foreground">Performance</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Strategies;