import React from 'react';
import { LayoutDashboard, Calendar, BarChart3, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidenavbarProps {
  className?: string;
}

const Sidenavbar: React.FC<SidenavbarProps> = ({ className }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "insights", label: "Insights", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className={cn(
      "w-[250px] h-full bg-card border-r border-border flex flex-col shadow-sm",
      className
    )}>
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-bold text-foreground">Task Manager</h2>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 group"
                >
                  <Icon className="mr-3 h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground">
          © 2024 Task Manager
        </div>
      </div>
    </div>
  );
};

export default Sidenavbar;