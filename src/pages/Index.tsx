
import React from 'react';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Pricing from '@/components/landing/Pricing';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Users, Brain, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-display font-bold text-xl text-gradient">Smart</span>
              <span className="text-foreground font-medium">Construct</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Tarifs
            </Link>
            <Link to="/venture" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Venture
            </Link>
            <Link to="/marketplace" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Marketplace
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/sign-in" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Connexion
            </Link>
            <Button asChild size="sm">
              <Link to="/sign-up">S'inscrire</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero section */}
        <Hero />
        
        {/* Features section */}
        <Features />
        
        {/* Pricing section */}
        <Pricing />
        
        {/* AI Benefits section */}
        <section className="bg-gradient-to-b from-background to-muted/30 section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">L'intelligence artificielle au service de vos projets</h2>
              <p className="text-lg text-muted-foreground">
                Notre IA intégrée analyse vos données, automatise vos tâches, et vous fournit des insights précieux pour optimiser vos projets.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AIBenefitCard
                title="Documents automatisés"
                description="Générez des documents techniques, des contrats, et des rapports en quelques clics."
                icon={<Brain className="h-6 w-6" />}
              />
              
              <AIBenefitCard
                title="Analyses prédictives"
                description="Anticipez les tendances du marché et optimisez vos investissements immobiliers."
                icon={<Building2 className="h-6 w-6" />}
              />
              
              <AIBenefitCard
                title="Assistance personnalisée"
                description="Bénéficiez d'un assistant IA qui apprend de vos habitudes et vous propose des solutions adaptées."
                icon={<Users className="h-6 w-6" />}
              />
              
              <AIBenefitCard
                title="Sécurité des données"
                description="Vos données sont protégées et restent confidentielles, conformément aux normes les plus strictes."
                icon={<Shield className="h-6 w-6" />}
              />
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="section-padding bg-card">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre façon de travailler ?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Rejoignez notre plateforme et bénéficiez dès aujourd'hui de la puissance de l'IA pour optimiser vos projets de construction.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 group">
                <Link to="/sign-up">
                  Démarrer gratuitement
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/sign-in">
                  J'ai déjà un compte
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-4">Produit</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Fonctionnalités</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Tarifs</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Intégrations</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Témoignages</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">À propos</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Nous rejoindre</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Partenaires</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-4">Ressources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Guides</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Support</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-4">Légal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Confidentialité</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Conditions</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">CGU</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="font-display font-bold text-xl text-gradient">Smart</span>
              <span className="text-foreground font-medium">Construct</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Smart Construct SaaS. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface AIBenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AIBenefitCard: React.FC<AIBenefitCardProps> = ({ title, description, icon }) => {
  return (
    <div className="p-6 rounded-xl bg-card border border-border/50 transition-all duration-300 hover:shadow-card-hover">
      <div className="p-3 rounded-full bg-primary/10 text-primary inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Index;
