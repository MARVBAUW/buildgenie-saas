
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AICardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

const AICard: React.FC<AICardProps> = ({
  title,
  description,
  icon = <Sparkles className="h-5 w-5" />,
  action,
  className
}) => {
  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 hover:shadow-card-hover border-border/60 group",
      className
    )}>
      <div className="absolute inset-0 ai-assistant-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="relative z-10">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <CardDescription className="text-base text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
      
      {action && (
        <CardFooter className="relative z-10">
          <Button 
            variant="ghost" 
            className="pl-0 hover:pl-2 transition-all duration-300 group/btn"
            onClick={action.onClick}
          >
            {action.label}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default AICard;
