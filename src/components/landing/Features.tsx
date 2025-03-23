
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Building2, Users, Brain, Coins, BarChart3, Lightbulb } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <div className="bg-muted/30">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Modules intelligents</h2>
          <p className="text-lg text-muted-foreground">
            Notre plateforme SaaS modulaire s'adapte à tous les acteurs de l'écosystème immobilier et construction.
          </p>
        </div>
        
        <div className="feature-grid">
          <FeatureCard
            title="Maître d'Œuvre (MOE)"
            description="Gérez efficacement vos projets, suivez les chantiers, et automatisez la documentation technique grâce à l'IA."
            icon={<Building2 className="h-6 w-6" />}
          />
          
          <FeatureCard
            title="Maître d'Ouvrage (MOA)"
            description="Supervisez tous vos projets, validez les livrables, et analysez la performance de vos investissements."
            icon={<Building2 className="h-6 w-6" />}
          />
          
          <FeatureCard
            title="Entreprises & Fournisseurs"
            description="Optimisez la gestion de vos chantiers, automatisez vos devis, et développez votre réseau professionnel."
            icon={<Users className="h-6 w-6" />}
          />
          
          <FeatureCard
            title="Agents Immobiliers"
            description="Créez des fiches de biens, faites correspondre les projets avec vos clients, et simplifiez vos démarches administratives."
            icon={<Building2 className="h-6 w-6" />}
          />
          
          <FeatureCard
            title="Particuliers"
            description="Soumettez votre projet, trouvez le terrain idéal, et suivez l'avancement de votre construction en temps réel."
            icon={<Users className="h-6 w-6" />}
          />
          
          <FeatureCard
            title="Intelligence Artificielle"
            description="Notre IA vous assiste dans la rédaction de documents, l'analyse de données, et l'optimisation de vos processus."
            icon={<Brain className="h-6 w-6" />}
          />
          
          <FeatureCard
            title="Marketplace"
            description="Explorez des projets immobiliers analysés par notre IA pour identifier les meilleures opportunités."
            icon={<BarChart3 className="h-6 w-6" />}
          />
          
          <FeatureCard
            title="Venture"
            description="Découvrez des projets innovants, votez pour vos favoris, et investissez dans l'écosystème construction du futur."
            icon={<Lightbulb className="h-6 w-6" />}
          />
          
          <FeatureCard
            title="Crypto"
            description="Diversifiez vos investissements avec notre module de suivi et d'analyse d'actifs cryptographiques."
            icon={<Coins className="h-6 w-6" />}
          />
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="bg-card/90 backdrop-blur-sm transition-all duration-300 hover:shadow-card-hover border-border/50 overflow-hidden">
      <CardHeader>
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default Features;
