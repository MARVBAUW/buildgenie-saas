
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import PageTransition from '@/components/common/PageTransition';
import { useAuth } from '@/contexts/AuthContext';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: PlanFeature[];
  buttonText: string;
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Idéal pour les indépendants et les petites entreprises",
    price: "0€",
    period: "pour toujours",
    features: [
      { text: "Tableau de bord personnel", included: true },
      { text: "Accès limité à la Marketplace", included: true },
      { text: "Module Venture (consultation)", included: true },
      { text: "Assistance IA basique", included: true },
      { text: "1 projet actif", included: true },
      { text: "Accès aux modules premium", included: false },
      { text: "Assistance IA avancée", included: false },
    ],
    buttonText: "Démarrer gratuitement",
  },
  {
    id: "business",
    name: "Business",
    description: "Pour les professionnels qui ont besoin d'outils avancés",
    price: "29€",
    period: "par mois",
    popular: true,
    features: [
      { text: "Tableau de bord personnel", included: true },
      { text: "Accès complet à la Marketplace", included: true },
      { text: "Module Venture (participation)", included: true },
      { text: "Assistance IA avancée", included: true },
      { text: "Projets illimités", included: true },
      { text: "Accès à tous les modules premium", included: true },
      { text: "Analyses IA personnalisées", included: false },
    ],
    buttonText: "Commencer l'essai gratuit",
  },
  {
    id: "premium",
    name: "Premium",
    description: "Solutions sur mesure pour les organisations exigeantes",
    price: "99€",
    period: "par mois",
    features: [
      { text: "Tableau de bord personnel", included: true },
      { text: "Accès complet à la Marketplace", included: true },
      { text: "Module Venture (création)", included: true },
      { text: "Assistance IA premium", included: true },
      { text: "Projets illimités", included: true },
      { text: "Tous les modules premium", included: true },
      { text: "Analyses IA personnalisées", included: true },
    ],
    buttonText: "Contacter les ventes",
  },
];

const Pricing: React.FC = () => {
  const location = useLocation();
  const { user, isAuthenticated } = useAuth();
  
  // Check if user was redirected from a premium feature
  const fromModule = location.state?.module;
  const redirectMessage = fromModule 
    ? "Cette fonctionnalité nécessite un abonnement premium. Choisissez un plan pour continuer."
    : "";

  const getCurrentPlan = () => {
    if (!user) return null;
    return user.subscription || 'starter';
  };

  const currentPlan = getCurrentPlan();

  const handleSubscribe = (planId: string) => {
    // In a real app, this would redirect to Stripe or other payment processor
    console.log(`Subscribing to ${planId} plan`);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à l'accueil
              </Link>
              
              {isAuthenticated && (
                <Link to="/workspace" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Mon espace
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              )}
            </div>
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl font-bold mb-4">Tarification simple et transparente</h1>
              <p className="text-xl text-muted-foreground">
                Choisissez le forfait qui correspond à vos besoins, évoluez à votre rythme.
              </p>
              
              {redirectMessage && (
                <div className="mt-6 p-4 bg-primary/10 rounded-lg text-center">
                  <p className="text-sm flex items-center justify-center">
                    <Sparkles className="mr-2 h-4 w-4 text-primary" />
                    <span>{redirectMessage}</span>
                  </p>
                </div>
              )}
            </div>
            
            {currentPlan && (
              <div className="mb-10 p-4 border border-border rounded-lg bg-muted/30">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium mb-1">Votre plan actuel : <span className="text-primary">{currentPlan.charAt(0).toUpperCase() + currentPlan.slice(1)}</span></h3>
                    {user?.trialEndsAt && new Date() < new Date(user.trialEndsAt) && (
                      <p className="text-sm text-amber-500">
                        Période d'essai - se termine le {new Date(user.trialEndsAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  {currentPlan !== 'premium' && (
                    <Button className="mt-4 md:mt-0">
                      Mettre à niveau
                    </Button>
                  )}
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <Card 
                  key={plan.id} 
                  className={cn(
                    "flex flex-col transition-all duration-300 relative overflow-hidden",
                    plan.popular && "border-primary/50 shadow-glass-strong"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                      Populaire
                    </div>
                  )}
                  
                  <CardHeader className={cn(
                    "pb-8",
                    plan.popular && "bg-primary/5"
                  )}>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription className="pt-1.5">{plan.description}</CardDescription>
                    <div className="pt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={cn(
                            "rounded-full p-1",
                            feature.included ? "text-green-500 bg-green-500/10" : "text-muted-foreground/50 bg-muted/50"
                          )}>
                            <Check className="h-4 w-4" />
                          </div>
                          <span className={feature.included ? "" : "text-muted-foreground"}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter className="pt-6">
                    <Button 
                      className={cn(
                        "w-full rounded-lg", 
                        plan.popular ? "bg-primary" : ""
                      )}
                      variant={plan.popular ? "default" : "outline"}
                      disabled={currentPlan === plan.id}
                      onClick={() => handleSubscribe(plan.id)}
                    >
                      {currentPlan === plan.id 
                        ? "Plan actuel" 
                        : plan.buttonText}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Questions fréquentes</h2>
              
              <div className="space-y-6">
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-2">Puis-je changer de plan à tout moment ?</h3>
                  <p className="text-muted-foreground">Oui, vous pouvez passer à un forfait supérieur à tout moment. Si vous passez à un forfait inférieur, le changement prendra effet à la fin de votre cycle de facturation actuel.</p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-2">Comment fonctionne l'essai gratuit ?</h3>
                  <p className="text-muted-foreground">Tous les nouveaux comptes bénéficient automatiquement d'un essai gratuit de 15 jours avec accès à toutes les fonctionnalités premium. Aucune carte de crédit n'est requise pour commencer.</p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-2">Quels moyens de paiement acceptez-vous ?</h3>
                  <p className="text-muted-foreground">Nous acceptons toutes les cartes de crédit principales (Visa, Mastercard, American Express) ainsi que PayPal et les virements bancaires pour les abonnements annuels.</p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-2">Existe-t-il des réductions pour les abonnements annuels ?</h3>
                  <p className="text-muted-foreground">Oui, nous offrons une réduction de 20% pour les abonnements annuels sur tous nos forfaits payants. Contactez notre équipe commerciale pour plus d'informations.</p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-lg font-medium mb-4">Vous avez d'autres questions ?</h3>
                <Button variant="outline" className="mr-4">Contacter le support</Button>
                <Button variant="default">Planifier une démo</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Pricing;
