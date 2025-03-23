
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import AICard from '@/components/dashboard/AICard';
import StatsCard from '@/components/dashboard/StatsCard';
import { ArrowRight, Building2, Calendar, CreditCard, FileText, Loader2, Plus, Users } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
            <p className="text-muted-foreground mt-1">Bienvenue dans votre espace de travail intelligent.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              <span>Nouveau projet</span>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Projets actifs"
            value="12"
            trend={{ value: 8, positive: true }}
            icon={<Building2 className="h-5 w-5" />}
          />
          <StatsCard
            title="Factures en attente"
            value="4 500 €"
            description="6 factures à traiter"
            icon={<CreditCard className="h-5 w-5" />}
          />
          <StatsCard
            title="Rendez-vous à venir"
            value="8"
            description="Cette semaine"
            icon={<Calendar className="h-5 w-5" />}
          />
          <StatsCard
            title="Collaborateurs"
            value="24"
            trend={{ value: 12, positive: true }}
            icon={<Users className="h-5 w-5" />}
          />
        </div>

        {/* AI Assistance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AICard
            title="Rédaction assistée"
            description="Créez rapidement des documents professionnels grâce à notre IA"
            action={{ label: "Créer un document", onClick: () => {} }}
          />
          <AICard
            title="Analyse de projet"
            description="Obtenez des insights détaillés sur l'avancement de vos projets"
            action={{ label: "Analyser un projet", onClick: () => {} }}
          />
          <AICard
            title="Suggestions IA"
            description="Découvrez des recommandations personnalisées pour optimiser votre travail"
            action={{ label: "Voir les suggestions", onClick: () => {} }}
          />
        </div>

        {/* Active Projects */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Projets récents</h2>
            <Button variant="ghost" className="flex items-center gap-1 text-sm">
              <span>Voir tous les projets</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Résidence Les Oliviers"
              type="Construction neuve"
              progress={75}
              budget="1 250 000 €"
              deadline="15 octobre 2023"
            />
            <ProjectCard
              title="Rénovation Immeuble Haussmann"
              type="Rénovation"
              progress={30}
              budget="850 000 €"
              deadline="3 décembre 2023"
            />
            <ProjectCard
              title="Bureaux Greentech"
              type="Aménagement"
              progress={90}
              budget="450 000 €"
              deadline="30 août 2023"
              alert="Retard de livraison"
            />
          </div>
        </div>

        {/* Documents */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Documents récents</h2>
            <Button variant="ghost" className="flex items-center gap-1 text-sm">
              <span>Voir tous les documents</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Documents à traiter</CardTitle>
              <CardDescription>Documents nécessitant votre attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <DocumentRow
                  title="CCTP Lot Gros Œuvre"
                  type="PDF"
                  project="Résidence Les Oliviers"
                  date="Modifié il y a 2 jours"
                />
                <DocumentRow
                  title="Devis Entreprise Maçonnerie"
                  type="PDF"
                  project="Rénovation Immeuble Haussmann"
                  date="Modifié hier"
                  alert="Validation requise"
                />
                <DocumentRow
                  title="Planning Phase 2"
                  type="Excel"
                  project="Bureaux Greentech"
                  date="Modifié il y a 3 jours"
                />
                <DocumentRow
                  title="CR Réunion de chantier #8"
                  type="Word"
                  project="Résidence Les Oliviers"
                  date="Créé aujourd'hui"
                  new={true}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Tous les documents</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

interface ProjectCardProps {
  title: string;
  type: string;
  progress: number;
  budget: string;
  deadline: string;
  alert?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  type,
  progress,
  budget,
  deadline,
  alert,
}) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-base">{title}</CardTitle>
            <CardDescription>{type}</CardDescription>
          </div>
          {alert && (
            <div className="px-2 py-1 bg-destructive/10 text-destructive text-xs rounded-full">
              {alert}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Avancement</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-muted-foreground">Budget</div>
            <div>{budget}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Échéance</div>
            <div>{deadline}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full text-sm">Voir le projet</Button>
      </CardFooter>
    </Card>
  );
};

interface DocumentRowProps {
  title: string;
  type: string;
  project: string;
  date: string;
  alert?: string;
  new?: boolean;
}

const DocumentRow: React.FC<DocumentRowProps> = ({
  title,
  type,
  project,
  date,
  alert,
  new: isNew,
}) => {
  return (
    <div className="flex items-center p-3 rounded-lg border border-border/50 hover:bg-muted/40 transition-colors">
      <div className="p-2 rounded-lg bg-primary/10 text-primary mr-4">
        <FileText className="h-5 w-5" />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center">
          <h4 className="text-sm font-medium truncate">{title}</h4>
          {isNew && (
            <span className="ml-2 px-1.5 py-0.5 rounded-full text-[10px] bg-primary text-primary-foreground">
              Nouveau
            </span>
          )}
        </div>
        <div className="flex items-center text-xs text-muted-foreground mt-1">
          <span>{type}</span>
          <span className="mx-2">•</span>
          <span className="truncate">{project}</span>
        </div>
      </div>
      
      <div className="ml-4 flex-shrink-0 flex items-center">
        {alert && (
          <span className="px-2 py-1 bg-destructive/10 text-destructive text-xs rounded-full mr-3">
            {alert}
          </span>
        )}
        <span className="text-xs text-muted-foreground">{date}</span>
      </div>
    </div>
  );
};

export default Dashboard;
