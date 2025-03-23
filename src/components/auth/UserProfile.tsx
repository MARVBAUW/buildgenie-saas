
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Loader2, LogOut, Settings, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserProfile: React.FC = () => {
  const { user, logout, isLoading } = useAuth();

  if (isLoading) {
    return (
      <Button variant="ghost" size="sm" disabled className="w-10 h-10 rounded-full p-0">
        <Loader2 className="h-4 w-4 animate-spin" />
      </Button>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Button asChild variant="outline" size="sm">
          <Link to="/sign-in">Connexion</Link>
        </Button>
        <Button asChild size="sm">
          <Link to="/sign-up">S'inscrire</Link>
        </Button>
      </div>
    );
  }

  // Get initials from name or use email
  const getInitials = () => {
    if (user.firstName && user.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    }
    return user.email.substring(0, 2).toUpperCase();
  };

  // Get subscription label
  const getSubscriptionLabel = () => {
    switch (user.subscription) {
      case 'premium':
        return '👑 Premium';
      case 'business':
        return '💼 Business';
      case 'starter':
        return '🚀 Starter';
      default:
        return 'Gratuit';
    }
  };

  // Get trial info if applicable
  const getTrialInfo = () => {
    if (user.trialEndsAt) {
      const now = new Date();
      const trialEnd = new Date(user.trialEndsAt);
      
      if (now < trialEnd) {
        const daysLeft = Math.ceil((trialEnd.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
        return `Essai : ${daysLeft} jour${daysLeft > 1 ? 's' : ''} restant${daysLeft > 1 ? 's' : ''}`;
      }
    }
    return null;
  };

  const trialInfo = getTrialInfo();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-10 h-10 rounded-full p-0">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-primary/10 text-primary">
              {getInitials()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.firstName} {user.lastName}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex justify-between items-center w-full">
            <span>{getSubscriptionLabel()}</span>
            {user.subscription !== 'premium' && (
              <Button variant="outline" asChild size="sm" className="h-7 text-xs">
                <Link to="/pricing">Upgrade</Link>
              </Button>
            )}
          </div>
        </DropdownMenuItem>
        {trialInfo && (
          <DropdownMenuItem>
            <span className="text-xs text-amber-500">{trialInfo}</span>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/settings" className="cursor-pointer flex items-center w-full">
            <Settings className="mr-2 h-4 w-4" />
            <span>Paramètres</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/workspace" className="cursor-pointer flex items-center w-full">
            <User className="mr-2 h-4 w-4" />
            <span>Mon espace</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout} className="cursor-pointer text-destructive focus:text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Déconnexion</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
