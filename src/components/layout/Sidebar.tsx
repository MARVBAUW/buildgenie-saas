
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Building2, Briefcase, BarChart3, Home, Settings, CreditCard, Users, Lightbulb, LayoutDashboard, Coins } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/ui/ThemeToggle';

type SidebarItem = {
  title: string;
  path: string;
  icon: React.ElementType;
  isPremium?: boolean;
};

const sidebarItems: SidebarItem[] = [
  { title: 'Accueil', path: '/', icon: Home },
  { title: 'Tableau de bord', path: '/workspace', icon: LayoutDashboard },
  { title: 'Maître d\'Œuvre', path: '/maitreoeuvre', icon: Building2, isPremium: true },
  { title: 'Maître d\'Ouvrage', path: '/maitreouvrage', icon: Briefcase, isPremium: true },
  { title: 'Entreprises', path: '/entreprise', icon: Users, isPremium: true },
  { title: 'Agents Immobiliers', path: '/agents', icon: Building2, isPremium: true },
  { title: 'Particuliers', path: '/particuliers', icon: Users, isPremium: true },
  { title: 'Venture', path: '/venture', icon: Lightbulb },
  { title: 'Marketplace', path: '/marketplace', icon: BarChart3 },
  { title: 'Crypto', path: '/crypto', icon: Coins, isPremium: true },
  { title: 'Abonnements', path: '/pricing', icon: CreditCard },
  { title: 'Paramètres', path: '/settings', icon: Settings },
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={cn(
        'h-screen fixed top-0 left-0 z-40 flex flex-col border-r border-border bg-sidebar transition-all duration-300 ease-in-out',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-border">
        {!collapsed && (
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-display font-bold text-xl text-gradient">Smart</span>
            <span className="text-foreground font-medium">Construct</span>
          </Link>
        )}
        <button
          onClick={toggleSidebar}
          className="p-1.5 rounded-md hover:bg-sidebar-accent text-sidebar-foreground"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-none py-4">
        <ul className="space-y-1 px-2">
          {sidebarItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  'flex items-center gap-x-3 px-3 py-2.5 rounded-lg group transition-all duration-200',
                  location.pathname === item.path
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground',
                  collapsed && 'justify-center px-0'
                )}
              >
                <item.icon className={cn("h-5 w-5 flex-shrink-0", item.isPremium && "text-sidebar-primary")} />
                {!collapsed && (
                  <div className="flex items-center gap-2 truncate">
                    <span className="truncate">{item.title}</span>
                    {item.isPremium && (
                      <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-sidebar-primary text-sidebar-primary-foreground">
                        Premium
                      </span>
                    )}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-border p-4 flex justify-center">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Sidebar;
