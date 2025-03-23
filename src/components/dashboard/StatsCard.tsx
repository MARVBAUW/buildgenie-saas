
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: {
    value: number;
    positive: boolean;
  };
  icon?: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  description,
  trend,
  icon,
  className,
  footer
}) => {
  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 hover:shadow-card",
      className
    )}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
          {icon && <div className="text-muted-foreground">{icon}</div>}
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-baseline space-x-2">
          <div className="text-2xl font-bold">{value}</div>
          
          {trend && (
            <div className={cn(
              "text-xs font-medium",
              trend.positive ? "text-green-500" : "text-red-500"
            )}>
              {trend.positive ? "+" : "-"}{Math.abs(trend.value)}%
            </div>
          )}
        </div>
        
        {description && (
          <CardDescription className="mt-1">
            {description}
          </CardDescription>
        )}
      </CardContent>
      
      {footer && (
        <CardFooter className="pt-0 pb-3">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};

export default StatsCard;
