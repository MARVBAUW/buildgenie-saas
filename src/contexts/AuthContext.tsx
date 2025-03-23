
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { toast } from "sonner";

export type UserRole = 'user' | 'admin';

export type UserSubscription = 'starter' | 'business' | 'premium' | null;

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  role: UserRole;
  subscription: UserSubscription;
  trialEndsAt?: Date | null;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, firstName?: string, lastName?: string, company?: string) => Promise<boolean>;
  logout: () => void;
  resetPassword: (email: string) => Promise<boolean>;
  hasAccess: (module: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Admin user to be pre-configured
const ADMIN_USER: User = {
  id: 'admin-1',
  email: 'marvinbauwens@gmail.com',
  firstName: 'Marvin',
  lastName: 'Bauwens',
  role: 'admin',
  subscription: 'premium',
  trialEndsAt: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000) // 15 days from now
};

// Premium modules that require subscription
const PREMIUM_MODULES = [
  '/maitreoeuvre', 
  '/maitreouvrage', 
  '/entreprise', 
  '/agents', 
  '/particuliers',
  '/crypto'
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const { toast: uiToast } = useToast();

  // Initialize auth state from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('novaesta_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        // Handle date conversion for trial end date
        if (parsedUser.trialEndsAt) {
          parsedUser.trialEndsAt = new Date(parsedUser.trialEndsAt);
        }
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('novaesta_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Simulated authentication - in a real app, this would be a server call
      await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API delay
      
      // Check for admin user
      if (email === ADMIN_USER.email && password === 'Lucmarine0711') {
        setUser(ADMIN_USER);
        localStorage.setItem('novaesta_user', JSON.stringify(ADMIN_USER));
        toast.success("Connexion réussie en tant qu'administrateur");
        setIsLoading(false);
        return true;
      }
      
      // For regular users in a demo, we'll accept any valid email/password combination
      if (email && password.length >= 6) {
        const newUser: User = {
          id: `user-${Date.now()}`,
          email,
          role: 'user',
          subscription: 'starter',
          trialEndsAt: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000) // 15 days trial
        };
        
        setUser(newUser);
        localStorage.setItem('novaesta_user', JSON.stringify(newUser));
        toast.success("Connexion réussie");
        setIsLoading(false);
        return true;
      }
      
      throw new Error("Identifiants invalides");
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = error instanceof Error ? error.message : "Une erreur est survenue";
      toast.error(`Échec de la connexion: ${errorMessage}`);
      setIsLoading(false);
      return false;
    }
  };

  const signup = async (
    email: string, 
    password: string, 
    firstName?: string, 
    lastName?: string, 
    company?: string
  ): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Simulated registration - in a real app, this would be a server call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      
      // Validate inputs for demo
      if (!email || !password || password.length < 6) {
        throw new Error("Email et mot de passe (6 caractères minimum) requis");
      }
      
      // Create a new user
      const newUser: User = {
        id: `user-${Date.now()}`,
        email,
        firstName,
        lastName,
        company,
        role: 'user',
        subscription: 'starter',
        trialEndsAt: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000) // 15 days trial
      };
      
      setUser(newUser);
      localStorage.setItem('novaesta_user', JSON.stringify(newUser));
      toast.success("Compte créé avec succès ! Vous avez 15 jours d'essai gratuit.");
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      const errorMessage = error instanceof Error ? error.message : "Une erreur est survenue";
      toast.error(`Échec de l'inscription: ${errorMessage}`);
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('novaesta_user');
    toast.info("Vous avez été déconnecté");
    navigate('/');
  };

  const resetPassword = async (email: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Simulated password reset - in a real app, this would be a server call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      
      if (!email) {
        throw new Error("Email requis");
      }
      
      // In a real app, this would trigger an email with a reset link
      uiToast({
        title: "Lien de réinitialisation envoyé",
        description: `Un email a été envoyé à ${email} avec les instructions pour réinitialiser votre mot de passe.`,
      });
      
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error('Reset password error:', error);
      const errorMessage = error instanceof Error ? error.message : "Une erreur est survenue";
      toast.error(`Échec de la réinitialisation: ${errorMessage}`);
      setIsLoading(false);
      return false;
    }
  };

  const hasAccess = (module: string): boolean => {
    // Check if user is authenticated
    if (!user) return false;
    
    // Admin has access to everything
    if (user.role === 'admin') return true;
    
    // If it's not a premium module, allow access
    if (!PREMIUM_MODULES.some(path => module.startsWith(path))) return true;
    
    // Check subscription for premium modules
    if (user.subscription === 'premium' || user.subscription === 'business') {
      return true;
    }
    
    // Check if user is in trial period
    if (user.trialEndsAt && new Date() < user.trialEndsAt) {
      return true;
    }
    
    return false;
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      isAuthenticated: !!user,
      login,
      signup,
      logout,
      resetPassword,
      hasAccess
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
