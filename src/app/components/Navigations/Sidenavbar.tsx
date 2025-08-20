import React from 'react';
import { LayoutDashboard, Calendar, BarChart3, Settings, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidenavbarProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidenavbar: React.FC<SidenavbarProps> = ({ className, isOpen = true, onClose }) => {
  const pathname = usePathname();
  
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/Dashboard" },
    { id: "calendar", label: "Calendar", icon: Calendar, href: "/calender" },
    { id: "insights", label: "Insights", icon: BarChart3, href: "/Insights" },
    { id: "settings", label: "Settings", icon: Settings, href: "/settings" },
  ];

  return (
    <div className={cn(
      "fixed lg:sticky top-0 left-0 z-40 w-[250px] h-full bg-card border-r border-border flex flex-col shadow-sm transition-transform duration-300 ease-in-out",
      !isOpen && "-translate-x-full lg:translate-x-0",
      className
    )}>
      {/* Mobile close button */}
      <button 
        onClick={onClose}
        className="lg:hidden absolute top-4 right-4 p-1 rounded-md hover:bg-accent"
        aria-label="Close menu"
      >
        <X className="h-5 w-5" />
      </button>
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-bold text-foreground">Task Manager</h2>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || 
                          (pathname === '/' && item.href === '/dashboard');
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group",
                    isActive 
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icon 
                    className={cn(
                      "mr-3 h-5 w-5 transition-colors",
                      isActive 
                        ? "text-accent-foreground" 
                        : "text-muted-foreground group-hover:text-accent-foreground"
                    )} 
                  />
                  <span>{item.label}</span>
                </Link>
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