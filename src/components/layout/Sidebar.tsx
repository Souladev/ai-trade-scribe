import { Button } from "@/components/ui/button";
import {
  BarChart3,
  ChartCandlestick,
  MessageSquare,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-16 border-r bg-background md:w-64">
      <div className="flex h-full flex-col py-4">
        <nav className="space-y-2 px-2">
          <Link to="/dashboard">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
            >
              <ChartCandlestick className="h-5 w-5" />
              <span className="hidden md:inline">Charts</span>
            </Button>
          </Link>
          
          <Link to="/strategies">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
            >
              <MessageSquare className="h-5 w-5" />
              <span className="hidden md:inline">Strategies</span>
            </Button>
          </Link>
          
          <Link to="/analytics">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
            >
              <BarChart3 className="h-5 w-5" />
              <span className="hidden md:inline">Analytics</span>
            </Button>
          </Link>
        </nav>
        
        <div className="mt-auto px-2">
          <Link to="/settings">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
            >
              <Settings className="h-5 w-5" />
              <span className="hidden md:inline">Settings</span>
            </Button>
          </Link>
        </div>
      </div>
    </aside>
  );
}