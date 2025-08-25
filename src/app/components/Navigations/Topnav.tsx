"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Search,
  Settings,
  Lightbulb,
  Bell,
  User,
  Menu,
  X,
} from "lucide-react";


interface NavBarProps {
  className?: string;
  onMenuClick?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ className, onMenuClick }) => {
  const [showAITip, setShowAITip] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dismissAITip = () => {
    setShowAITip(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={cn(
          "bg-background/95 backdrop-blur-sm border-b border-border text-foreground px-6 py-3 shadow-sm w-full flex-shrink-0",
          className
        )}
      >
  

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center">
          {/* Left Section - Search */}
          <div className="flex items-center space-x-4 w-1/3 min-w-0">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search tasks, projects, or insights..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>
          </div>

          {/* Center Section - Efficiency & AI Tip */}
          <div className="flex items-center justify-center space-x-4 w-1/3 px-4">
            {showAITip && (
              <div className="relative bg-gradient-to-r from-card to-card/80 border border-border/60 rounded-lg px-4 py-2 max-w-sm shadow-sm backdrop-blur-sm">
                <button
                  onClick={dismissAITip}
                  className="absolute top-1 right-2 text-muted-foreground hover:text-foreground text-xs"
                >
                  ×
                </button>
                <div className="flex items-start space-x-2">
                  <Lightbulb className="w-4 h-4 text-orange-500 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                  <div className="text-xs">
                    <span className="text-orange-500 dark:text-orange-400 font-medium">
                      AI Tip:
                    </span>
                    <span className="text-muted-foreground">
                      {" "}
                      Use the 2-minute rule: if a task takes less than 2
                      minutes, do it immediately instead of adding it to your
                      list.
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Section - Controls */}
          <div className="flex items-center justify-end space-x-3 w-1/3">

            <button className="relative p-2 rounded-lg bg-secondary/60 hover:bg-secondary/80 transition-all duration-200 shadow-sm hover:shadow-md">
              <Bell className="w-4 h-4 text-muted-foreground" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-xs text-primary-foreground font-bold">
                  1
                </span>
              </span>
            </button>

            <button className="p-2 rounded-lg bg-secondary/60 hover:bg-secondary/80 transition-all duration-200 shadow-sm hover:shadow-md">
              <User className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:flex lg:hidden items-center justify-between">
          {/* Search */}
          <div className="flex-1 max-w-xs mr-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>
          </div>

          {/* Center - Efficiency only */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-secondary/70 to-secondary/50 rounded-lg px-3 py-2 shadow-sm border border-border/30">
              <Settings className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Efficiency
              </span>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-2 ml-4">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-2 py-1 rounded text-xs font-medium transition-all duration-200 shadow-sm hover:shadow-md">
              Demo
            </button>

            <button className="relative p-2 rounded-lg bg-secondary/60 hover:bg-secondary/80 transition-all duration-200 shadow-sm hover:shadow-md">
              <Bell className="w-4 h-4 text-muted-foreground" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-primary to-primary/80 rounded-full shadow-sm">
                <span className="text-xs text-primary-foreground font-bold flex items-center justify-center h-full">
                  1
                </span>
              </span>
            </button>
            <button className="p-2 rounded-lg bg-secondary/60 hover:bg-secondary/80 transition-all duration-200 shadow-sm hover:shadow-md">
              <User className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between">
          {/* Left - Menu button */}

          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 mr-2 rounded-md hover:bg-accent"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Center  */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-secondary/60 hover:bg-secondary/80 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-muted-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
          </div>

          {/* Right - Essential controls */}
          <div className="flex items-center space-x-1">
            <button className="relative p-2 rounded-lg bg-secondary/60 hover:bg-secondary/80 transition-all duration-200 shadow-sm hover:shadow-md">
              <Bell className="w-4 h-4 text-muted-foreground" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-primary to-primary/80 rounded-full shadow-sm">
                <span className="text-xs text-primary-foreground font-bold flex items-center justify-center h-full">
                  1
                </span>
              </span>
            </button>
            <button className="p-2 rounded-lg bg-secondary/60 hover:bg-secondary/80 transition-all duration-200 shadow-sm hover:shadow-md">
              <User className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 py-3 space-y-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search tasks, projects..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
            </div>
          </div>

          {/* AI Tip - Mobile */}
          {showAITip && (
            <div className="relative bg-secondary rounded-lg px-4 py-3">
              <button
                onClick={dismissAITip}
                className="absolute top-2 right-2 text-muted-foreground hover:text-foreground text-lg"
              >
                ×
              </button>
              <div className="flex items-start space-x-2 pr-6">
                <Lightbulb className="w-4 h-4 text-orange-500 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <span className="text-orange-500 dark:text-orange-400 font-medium">
                    AI Tip:
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    Use the 2-minute rule: if a task takes less than 2 minutes,
                    do it immediately instead of adding it to your list.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default NavBar;
