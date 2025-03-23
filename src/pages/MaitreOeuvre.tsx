
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageTransition from '@/components/common/PageTransition';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { HomeIcon, Plus, Calendar, Briefcase, BarChart3, FileText, Clock, Users, Building, AlarmClock, CheckCircle2, CircleDashed } from 'lucide-react';
import PremiumLock from '@/components/auth/PremiumLock';
import { useAuth } from '@/contexts/AuthContext';

const projects = [
  {
    id: 1,
    name: "Résidence Les Oliviers",
    client: "SCI Méditerranée",
    type: "Résidentiel",
    location: "Marseille",
    budget: "2 850 000 €",
    progress: 65,
    deadline: "15/08/2023",
    status: "En cours",
    tasks: 24,
    completedTasks: 15,
  },
  {
    id: 2,
    name: "Rénovation Hôtel du Port",
    client: "SARL Hospitalité",
    type: "Hôtellerie",
    location: "La Rochelle",
    budget: "1 250 000 €",
    progress: 30,
    deadline: "22/11/2023",
    status: "En cours",
    tasks: 18,
    completedTasks: 5,
  },
  {
    id: 3,
    name: "Centre Commercial Horizon",
    client: "Groupe Retail Plus",
    type: "Commercial",
    location: "Lyon",
    budget: "5 400 000 €",
    progress: 15,
    deadline: "10/04/2024",
    status: "Planification",
    tasks: 32,
    completedTasks: 4,
  },
];

const MaitreOeuvre: React.FC = () => {
  const { hasAccess } = useAuth();
  const hasFullAccess = hasAccess('/maitreoeuvre');

  if (!hasFullAccess) {
    return (
      <MainLayout>
        <PremiumLock 
          title="Module Maître d'Œuvre"
          description="Accédez à des outils avancés pour la gestion de vos projets de construction : estimation, CCTP, planning, facturation et bien plus encore."
          module="/maitreoeuvre"
          className="min-h-[60vh] flex items-center justify-center"
        />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <PageTransition>
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Maître d'Œuvre</h1>
            <p className="text-muted-foreground">Gérez vos projets de construction et suivez leur avancement</p>
          </div>
          
          <Tabs defaultValue="dashboard" className="mb-8">
            <TabsList>
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <HomeIcon className="h-4 w-4" />
                <span>Tableau de bord</span>
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                <span>Projets</span>
              </TabsTrigger>
              <TabsTrigger value="planning" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Planning</span>
              </TabsTrigger>
              <TabsTrigger value="finances" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                <span>Finances</span>
              </TabsTrigger>
              <TabsTrigger value="documents" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Documents</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Projets actifs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">3</div>
                <div className="flex items-center mt-1 text-muted-foreground text-sm">
                  <span>sur 5 projets au total</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Budget total géré</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">9.5M€</div>
                <div className="flex items-center mt-1 text-green-500 text-sm">
                  <span>+12.5%</span>
                  <span className="text-muted-foreground ml-1">vs. 2022</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Tâches à venir</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
                <div className="flex items-center mt-1 text-amber-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>3 urgentes</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Performance globale</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">87%</div>
                <div className="flex items-center mt-1 text-green-500 text-sm">
                  <span>+2.3%</span>
                  <span className="text-muted-foreground ml-1">ce mois</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <div className="w-full lg:w-2/3">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Projets en cours</CardTitle>
                    <Button className="flex items-center">
                      <Plus className="mr-2 h-4 w-4" />
                      Nouveau projet
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-5 md:grid-cols-7 text-sm p-3 border-b bg-muted/40">
                      <div className="col-span-2">Nom du projet</div>
                      <div className="hidden md:block">Client</div>
                      <div className="hidden md:block">Budget</div>
                      <div>Avancement</div>
                      <div>Échéance</div>
                      <div>Actions</div>
                    </div>
                    
                    {projects.map((project) => (
                      <div key={project.id} className="grid grid-cols-5 md:grid-cols-7 text-sm p-3 border-b hover:bg-muted/20 transition-colors duration-200">
                        <div className="col-span-2">
                          <div className="font-medium">{project.name}</div>
                          <div className="text-xs text-muted-foreground flex items-center gap-1">
                            <Badge variant="outline" className="text-xs py-0">
                              {project.type}
                            </Badge>
                            <span>{project.location}</span>
                          </div>
                        </div>
                        <div className="hidden md:block">{project.client}</div>
                        <div className="hidden md:block">{project.budget}</div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <div className="w-full h-2 bg-secondary rounded-full">
                              <div
                                className="h-full bg-primary rounded-full"
                                style={{ width: `${project.progress}%` }}
                              />
                            </div>
                            <span className="text-xs">{project.progress}%</span>
                          </div>
                        </div>
                        <div>{project.deadline}</div>
                        <div>
                          <Button variant="ghost" size="sm">
                            Détails
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="w-full lg:w-1/3">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Tâches prioritaires</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg border border-destructive/20 bg-destructive/5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-destructive">Validation DPGF Horizon</h3>
                          <p className="text-xs text-muted-foreground mt-1">Échéance: aujourd'hui</p>
                        </div>
                        <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/10">
                          Urgent
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg border border-amber-500/20 bg-amber-500/5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-amber-500">Réunion chantier Les Oliviers</h3>
                          <p className="text-xs text-muted-foreground mt-1">Échéance: demain, 10:00</p>
                        </div>
                        <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/10">
                          Important
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg border">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Plans électricité Hôtel du Port</h3>
                          <p className="text-xs text-muted-foreground mt-1">Échéance: 25/03/2023</p>
                        </div>
                        <Badge variant="outline">
                          Normal
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg border">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Demande PC Horizon</h3>
                          <p className="text-xs text-muted-foreground mt-1">Échéance: 30/03/2023</p>
                        </div>
                        <Badge variant="outline">
                          Normal
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button variant="outline" className="w-full">
                      Voir toutes les tâches
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Activité récente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative pl-6 border-l space-y-6">
                  <div className="relative pb-6">
                    <div className="absolute -left-[31px] h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <div className="font-medium">Soumission des plans RDC</div>
                    <p className="text-sm text-muted-foreground mt-1">Projet Les Oliviers</p>
                    <p className="text-xs text-muted-foreground mt-1">Aujourd'hui, 14:32</p>
                  </div>
                  
                  <div className="relative pb-6">
                    <div className="absolute -left-[31px] h-6 w-6 rounded-full border-2 bg-background flex items-center justify-center">
                      <Users className="h-3 w-3 text-primary" />
                    </div>
                    <div className="font-medium">Réunion avec le client</div>
                    <p className="text-sm text-muted-foreground mt-1">Projet Hôtel du Port</p>
                    <p className="text-xs text-muted-foreground mt-1">Hier, 10:15</p>
                  </div>
                  
                  <div className="relative pb-6">
                    <div className="absolute -left-[31px] h-6 w-6 rounded-full border-2 bg-background flex items-center justify-center">
                      <FileText className="h-3 w-3 text-primary" />
                    </div>
                    <div className="font-medium">Mise à jour DPGF</div>
                    <p className="text-sm text-muted-foreground mt-1">Projet Horizon</p>
                    <p className="text-xs text-muted-foreground mt-1">22/03/2023, 16:45</p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[31px] h-6 w-6 rounded-full border-2 bg-background flex items-center justify-center">
                      <Building className="h-3 w-3 text-primary" />
                    </div>
                    <div className="font-medium">Nouveau projet ajouté</div>
                    <p className="text-sm text-muted-foreground mt-1">Projet Horizon</p>
                    <p className="text-xs text-muted-foreground mt-1">20/03/2023, 09:20</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Vue d'ensemble des projets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Projets par statut</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>En cours</span>
                        <span>2</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: '40%' }} />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Planification</span>
                        <span>1</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: '20%' }} />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Terminés</span>
                        <span>2</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '40%' }} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t mt-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Projets par type</span>
                    </div>
                    
                    <div className="space-y-3 mt-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Résidentiel</span>
                          <span>1</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500 rounded-full" style={{ width: '20%' }} />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Hôtellerie</span>
                          <span>1</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500 rounded-full" style={{ width: '20%' }} />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Commercial</span>
                          <span>2</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-pink-500 rounded-full" style={{ width: '40%' }} />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Industriel</span>
                          <span>1</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-cyan-500 rounded-full" style={{ width: '20%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </MainLayout>
  );
};

export default MaitreOeuvre;
