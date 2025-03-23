
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Users, BarChart3, Lightbulb, Coins } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 md:pt-28 md:pb-40 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6 animate-fade-in">
              <span className="animate-pulse-slow">Intelligence Artificielle intégrée</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-in-bottom" style={{ animationDelay: '0.1s' }}>
              <span className="text-gradient">SaaS intelligent</span> pour l'écosystème construction
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6 animate-slide-in-bottom" style={{ animationDelay: '0.2s' }}>
              Une plateforme modulaire qui révolutionne la collaboration entre maîtres d'œuvre, maîtres d'ouvrage, entreprises et particuliers.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-slide-in-bottom" style={{ animationDelay: '0.3s' }}>
            <Button asChild size="lg" className="rounded-full px-8 group">
              <Link to="/sign-up">
                Démarrer gratuitement
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/pricing">
                Voir les forfaits
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Module cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mt-20 max-w-6xl mx-auto animate-slide-in-bottom" style={{ animationDelay: '0.4s' }}>
          <ModuleCard
            title="Maître d'Œuvre"
            icon={<Building2 className="h-6 w-6" />}
            delay={0}
          />
          <ModuleCard
            title="Maître d'Ouvrage"
            icon={<Building2 className="h-6 w-6" />}
            delay={100}
          />
          <ModuleCard
            title="Entreprises"
            icon={<Users className="h-6 w-6" />}
            delay={200}
          />
          <ModuleCard
            title="Marketplace"
            icon={<BarChart3 className="h-6 w-6" />}
            delay={300}
          />
          <ModuleCard
            title="Venture"
            icon={<Lightbulb className="h-6 w-6" />}
            delay={400}
          />
        </div>
      </div>
    </div>
  );
};

interface ModuleCardProps {
  title: string;
  icon: React.ReactNode;
  delay: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ title, icon, delay }) => {
  return (
    <div 
      className="glass-card rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-glass-hover hover:-translate-y-1 overflow-hidden group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-3 rounded-full bg-primary/10 text-primary mb-3">
        {icon}
      </div>
      <h3 className="font-medium">{title}</h3>
    </div>
  );
};

export default Hero;
