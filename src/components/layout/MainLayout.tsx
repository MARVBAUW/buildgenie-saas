
import React from 'react';
import Sidebar from './Sidebar';
import AIAssistant from './AIAssistant';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  className,
  fullWidth = false
}) => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className={cn(
        "flex-1 transition-all duration-300 ml-16 md:ml-64",
        fullWidth ? "p-0" : "p-4 md:p-6 lg:p-8",
        className
      )}>
        {children}
      </main>
      
      <AIAssistant />
    </div>
  );
};

export default MainLayout;
