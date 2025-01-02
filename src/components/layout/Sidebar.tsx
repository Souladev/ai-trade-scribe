import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Settings,
  List,
  BarChart,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      title: "Strategies",
      icon: List,
      path: "/strategies",
    },
    {
      title: "Analytics",
      icon: BarChart,
      path: "/analytics",
    },
  ];

  const settingsItem = {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  };

  return (
    <aside className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-16 border-r bg-background transition-width duration-300 ease-in-out md:w-64">
      <div className="flex h-full flex-col py-4">
        <nav className="space-y-2 px-2">
          {menuItems.map((item) => (
            <Link to={item.path} key={item.path}>
              <Button
                variant={isActive(item.path) ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-2",
                  "hover:bg-secondary/80"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="hidden md:inline">{item.title}</span>
              </Button>
            </Link>
          ))}
        </nav>
        
        <div className="mt-auto px-2">
          <Link to={settingsItem.path}>
            <Button
              variant={isActive(settingsItem.path) ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                "hover:bg-secondary/80"
              )}
            >
              <settingsItem.icon className="h-5 w-5" />
              <span className="hidden md:inline">{settingsItem.title}</span>
            </Button>
          </Link>
        </div>
      </div>
    </aside>
  );
}