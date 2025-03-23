
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
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
    name: "Pro",
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
      { text: "1 module premium au choix", included: true },
      { text: "Analyses IA personnalisées", included: false },
    ],
    buttonText: "Commencer l'essai gratuit",
  },
  {
    name: "Enterprise",
    description: "Solutions sur mesure pour les grandes organisations",
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
  return (
    <div className="max-w-7xl mx-auto section-padding">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Tarification simple et transparente</h2>
        <p className="text-lg text-muted-foreground">
          Choisissez le forfait qui correspond à vos besoins, évoluez à votre rythme.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card 
            key={plan.name} 
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
              >
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
