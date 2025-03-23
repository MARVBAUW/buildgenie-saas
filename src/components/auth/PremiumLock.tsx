
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Lock, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PremiumLockProps {
  title?: string;
  description?: string;
  module?: string;
  className?: string;
}

const PremiumLock: React.FC<PremiumLockProps> = ({
  title = "Fonctionnalité Premium",
  description = "Cette fonctionnalité est réservée aux utilisateurs premium.",
  module = "",
  className
}) => {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center p-8 text-center bg-muted/40 border border-dashed rounded-lg",
      className
    )}>
      <div className="bg-primary/10 p-3 rounded-full mb-4">
        <Lock className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6 max-w-md">{description}</p>
      <Button asChild className="group">
        <Link to="/pricing">
          <Sparkles className="mr-2 h-4 w-4 group-hover:animate-pulse" />
          Débloquer avec Premium
        </Link>
      </Button>
    </div>
  );
};

export default PremiumLock;
