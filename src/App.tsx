
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";

import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import Settings from "./pages/Settings";
import Marketplace from "./pages/Marketplace";
import Venture from "./pages/Venture";
import Crypto from "./pages/Crypto";
import MaitreOeuvre from "./pages/MaitreOeuvre";
import MaitreOuvrage from "./pages/MaitreOuvrage";
import Entreprise from "./pages/Entreprise";
import Agents from "./pages/Agents";
import Particuliers from "./pages/Particuliers";

import ProtectedRoute from "./components/auth/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Index />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/pricing" element={<Pricing />} />
              
              {/* Protected routes - require authentication */}
              <Route path="/workspace" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              
              <Route path="/settings" element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              } />
              
              <Route path="/marketplace" element={
                <ProtectedRoute>
                  <Marketplace />
                </ProtectedRoute>
              } />
              
              <Route path="/venture" element={
                <ProtectedRoute>
                  <Venture />
                </ProtectedRoute>
              } />
              
              {/* Premium routes - require premium subscription */}
              <Route path="/crypto/*" element={
                <ProtectedRoute module="/crypto">
                  <Crypto />
                </ProtectedRoute>
              } />
              
              <Route path="/maitreoeuvre/*" element={
                <ProtectedRoute module="/maitreoeuvre">
                  <MaitreOeuvre />
                </ProtectedRoute>
              } />
              
              <Route path="/maitreouvrage/*" element={
                <ProtectedRoute module="/maitreouvrage">
                  <MaitreOuvrage />
                </ProtectedRoute>
              } />
              
              <Route path="/entreprise/*" element={
                <ProtectedRoute module="/entreprise">
                  <Entreprise />
                </ProtectedRoute>
              } />
              
              <Route path="/agents/*" element={
                <ProtectedRoute module="/agents">
                  <Agents />
                </ProtectedRoute>
              } />
              
              <Route path="/particuliers/*" element={
                <ProtectedRoute module="/particuliers">
                  <Particuliers />
                </ProtectedRoute>
              } />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
