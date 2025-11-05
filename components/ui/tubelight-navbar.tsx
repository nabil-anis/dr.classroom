import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LucideIcon, Sun, Moon, Youtube, Star } from "lucide-react";
import { cn } from "../../lib/utils";
import { YOUTUBE_CHANNEL_URL } from "../../constants";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  theme: string;
  toggleTheme: () => void;
  className?: string;
}

export function NavBar({ items, theme, toggleTheme, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  
  // Effect to update active tab on scroll
  useEffect(() => {
    const sections = items.map(item => document.querySelector(item.url));
    
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && scrollPosition >= section.offsetTop) {
          setActiveTab(items[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [items]);

  return (
    <motion.nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50",
        className
      )}
    >
      <div className="flex items-center gap-1 bg-card/80 border border-border/80 backdrop-blur-lg py-2 px-3 rounded-full shadow-lg shadow-background/50">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
                isActive ? "text-accent-2" : "text-muted-foreground hover:text-foreground"
              )}
              aria-label={item.name}
            >
              {isActive && (
                <motion.div
                  layoutId="navbar-pill"
                  className="absolute inset-0 bg-accent-2/10 rounded-full"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <div className="relative z-10 flex items-center gap-2">
                <Icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                <span className="hidden md:inline">{item.name}</span>
              </div>
            </a>
          );
        })}
        <div className="w-px h-6 bg-border mx-2"></div>
        <div className="flex items-center">
             <button
                onClick={toggleTheme}
                className="w-9 h-9 p-2 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-border/50 transition-colors"
                aria-label="Toggle theme"
            >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
             <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 p-2 rounded-full flex items-center justify-center text-muted-foreground hover:text-brand-red transition-colors"
              aria-label="YouTube Channel"
            >
              <Youtube size={20} />
            </a>
        </div>
      </div>
    </motion.nav>
  );
}