import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  module?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAuth = true,
  module = ''
}) => {
  const { isAuthenticated, isLoading, hasAccess } = useAuth();
  const location = useLocation();

  // Show loading state while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="mt-4 text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }
  
  // Handle authentication check
  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }
  
  // Handle premium module access check if a module is specified
  if (module && !hasAccess(module)) {
    return <Navigate to="/pricing" state={{ from: location, module }} replace />;
  }
  
  // Otherwise, render the children
  return <>{children}</>;
};

export default ProtectedRoute;
