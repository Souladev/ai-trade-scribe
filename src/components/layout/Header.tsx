import { Button } from "@/components/ui/button";
import { ChartLine, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-full items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <ChartLine className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">BackTester</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors ${
              isActive('/') ? 'text-primary' : 'hover:text-primary'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className={`text-sm font-medium transition-colors ${
              isActive('/features') ? 'text-primary' : 'hover:text-primary'
            }`}
          >
            Features
          </Link>
          <Link 
            to="/pricing" 
            className={`text-sm font-medium transition-colors ${
              isActive('/pricing') ? 'text-primary' : 'hover:text-primary'
            }`}
          >
            Pricing
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors ${
              isActive('/about') ? 'text-primary' : 'hover:text-primary'
            }`}
          >
            About
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            Log in
          </Button>
          <Button size="sm">Sign up</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}