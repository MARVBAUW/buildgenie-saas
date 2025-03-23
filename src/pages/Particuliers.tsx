
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageTransition from '@/components/common/PageTransition';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { HomeIcon, FileText, Search, Plus, Clock, Map, CreditCard, Calendar, HelpCircle, Check, Building, Lightbulb, Construction, ChevronRight, AlertTriangle } from 'lucide-react';
import PremiumLock from '@/components/auth/PremiumLock';
import { useAuth } from '@/contexts/AuthContext';

const Particuliers: React.FC = () => {
  const { hasAccess } = useAuth();
  const hasFullAccess = hasAccess('/particuliers');

  if (!hasFullAccess) {
    return (
      <MainLayout>
        <PremiumLock 
          title="Module Particuliers"
          description="Planifiez et suivez vos projets de construction ou rénovation avec des outils adaptés aux particuliers, des guides étape par étape et des modèles de documents."
          module="/particuliers"
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
            <h1 className="text-3xl font-bold mb-2">Espace Particuliers</h1>
            <p className="text-muted-foreground">Planifiez et suivez vos projets immobiliers</p>
          </div>
          
          <Tabs defaultValue="dashboard" className="mb-8">
            <TabsList>
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <HomeIcon className="h-4 w-4" />
                <span>Tableau de bord</span>
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                <span>Mes projets</span>
              </TabsTrigger>
              <TabsTrigger value="simulation" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span>Simulation</span>
              </TabsTrigger>
              <TabsTrigger value="documents" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Documents</span>
              </TabsTrigger>
              <TabsTrigger value="guide" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                <span>Guide</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="mb-10 rounded-xl border p-6 bg-muted/30">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-2">Bienvenue dans votre espace particulier</h2>
                <p className="text-muted-foreground mb-4">
                  Suivez l'avancement de vos projets immobiliers, gérez vos documents et simulez vos financements en toute simplicité.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button className="flex items-center">
                    <Plus className="mr-2 h-4 w-4" />
                    Créer un projet
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <Map className="mr-2 h-4 w-4" />
                    Explorer les terrains
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Simuler un prêt
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="rounded-lg bg-primary/10 p-4 w-full max-w-xs">
                  <h3 className="font-medium flex items-center mb-2">
                    <Lightbulb className="h-4 w-4 mr-2 text-primary" />
                    Conseil IA personnalisé
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Pour un projet de maison individuelle, pensez à vérifier les règles d'urbanisme et à budgétiser les frais annexes.
                  </p>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Plus de conseils
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            <Card className="col-span-1 md:col-span-3 lg:col-span-4">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>Vue d'ensemble de vos projets</CardTitle>
                  <Button className="flex items-center">
                    <Plus className="mr-2 h-4 w-4" />
                    Nouveau projet
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="border-2 border-primary/50">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">Maison à Bordeaux</CardTitle>
                        <Badge>En cours</Badge>
                      </div>
                      <CardDescription>Construction - Maison individuelle</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="space-y-3 mb-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Progression</span>
                            <span>35%</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: '35%' }} />
                          </div>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Budget</span>
                          <span>320 000 €</span>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Surface</span>
                          <span>135 m²</span>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Délai estimé</span>
                          <span>10 mois</span>
                        </div>
                      </div>
                      
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <h4 className="text-sm font-medium mb-2 flex items-center">
                          <AlertTriangle className="h-4 w-4 mr-1 text-amber-500" />
                          Prochaine étape
                        </h4>
                        <p className="text-sm">Validation des plans architecte</p>
                        <p className="text-xs text-muted-foreground mt-1">Échéance: 05/04/2023</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Voir les détails
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">Appartement Paris 15</CardTitle>
                        <Badge variant="outline">Planification</Badge>
                      </div>
                      <CardDescription>Rénovation - Appartement</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="space-y-3 mb-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Progression</span>
                            <span>12%</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: '12%' }} />
                          </div>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Budget</span>
                          <span>85 000 €</span>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Surface</span>
                          <span>68 m²</span>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Délai estimé</span>
                          <span>4 mois</span>
                        </div>
                      </div>
                      
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <h4 className="text-sm font-medium mb-2 flex items-center">
                          <AlertTriangle className="h-4 w-4 mr-1 text-amber-500" />
                          Prochaine étape
                        </h4>
                        <p className="text-sm">Recherche d'entreprises</p>
                        <p className="text-xs text-muted-foreground mt-1">Échéance: 10/04/2023</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Voir les détails
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card className="border border-dashed flex flex-col items-center justify-center p-6">
                    <div className="rounded-full bg-muted/50 p-4 mb-4">
                      <Plus className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="font-medium text-center mb-2">Ajouter un nouveau projet</h3>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      Construction, rénovation ou achat immobilier
                    </p>
                    <Button>Créer un projet</Button>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Suivi de projet</CardTitle>
                <CardDescription>Maison à Bordeaux - Avancement détaillé</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative pl-6 border-l">
                  <div className="relative pb-8">
                    <div className="absolute -left-[11px] h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <div className="mb-1">
                      <div className="font-medium">Acquisition du terrain</div>
                      <p className="text-sm text-muted-foreground">Acte notarié signé</p>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Complété le 10/02/2023</span>
                      <span>Budget: 120 000 €</span>
                    </div>
                  </div>
                  
                  <div className="relative pb-8">
                    <div className="absolute -left-[11px] h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <div className="mb-1">
                      <div className="font-medium">Conception des plans</div>
                      <p className="text-sm text-muted-foreground">Plans architecte livrés</p>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Complété le 15/03/2023</span>
                      <span>Budget: 8 000 €</span>
                    </div>
                  </div>
                  
                  <div className="relative pb-8">
                    <div className="absolute -left-[11px] h-6 w-6 rounded-full bg-amber-500 flex items-center justify-center">
                      <Clock className="h-3 w-3 text-white" />
                    </div>
                    <div className="mb-1">
                      <div className="font-medium">Dépôt du permis de construire</div>
                      <p className="text-sm text-muted-foreground">En attente de validation</p>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Déposé le 20/03/2023</span>
                      <span>Délai estimé: 2 mois</span>
                    </div>
                  </div>
                  
                  <div className="relative pb-8">
                    <div className="absolute -left-[11px] h-6 w-6 rounded-full border-2 border-muted-foreground/50 bg-background"></div>
                    <div className="mb-1">
                      <div className="font-medium text-muted-foreground">Choix des entreprises</div>
                      <p className="text-sm text-muted-foreground">À programmer</p>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Prévu pour mai 2023</span>
                      <span></span>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[11px] h-6 w-6 rounded-full border-2 border-muted-foreground/50 bg-background"></div>
                    <div className="mb-1">
                      <div className="font-medium text-muted-foreground">Démarrage des travaux</div>
                      <p className="text-sm text-muted-foreground">À programmer</p>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Prévu pour juin 2023</span>
                      <span></span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Construction className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Conseil de votre assistant IA</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Le délai d'instruction du permis de construire est habituellement de 2 mois pour une maison individuelle. Pensez à anticiper les éventuelles demandes de pièces complémentaires qui pourraient rallonger ce délai.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Documents importants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg border flex justify-between items-center">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <div className="font-medium">Compromis de vente</div>
                        <div className="text-xs text-muted-foreground">Signé le 15/01/2023</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Voir
                    </Button>
                  </div>
                  
                  <div className="p-3 rounded-lg border flex justify-between items-center">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <div className="font-medium">Acte de vente</div>
                        <div className="text-xs text-muted-foreground">Signé le 10/02/2023</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Voir
                    </Button>
                  </div>
                  
                  <div className="p-3 rounded-lg border flex justify-between items-center">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <div className="font-medium">Plans architecte</div>
                        <div className="text-xs text-muted-foreground">Mis à jour le 15/03/2023</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Voir
                    </Button>
                  </div>
                  
                  <div className="p-3 rounded-lg border flex justify-between items-center">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <div className="font-medium">Permis de construire</div>
                        <div className="text-xs text-muted-foreground">Déposé le 20/03/2023</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Voir
                    </Button>
                  </div>
                  
                  <div className="p-3 rounded-lg border flex justify-between items-center">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <div className="font-medium">Offre de prêt</div>
                        <div className="text-xs text-muted-foreground">Signé le 05/03/2023</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Voir
                    </Button>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Gérer mes documents
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Simulation de financement</CardTitle>
                <CardDescription>Maison à Bordeaux</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Coût total</div>
                        <div className="text-lg font-bold">320 000 €</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Apport</div>
                        <div className="text-lg font-bold">64 000 €</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Montant emprunté</div>
                        <div className="text-lg font-bold">256 000 €</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Mensualité</div>
                        <div className="text-lg font-bold">1 285 €</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Durée du prêt</span>
                      <span>25 ans</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Taux d'intérêt</span>
                      <span>3.4%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Assurance mensuelle</span>
                      <span>85 €</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Coût total du crédit</span>
                      <span>129 500 €</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Taux d'endettement</span>
                      <span>32%</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="text-sm font-medium mb-3">Aides financières potentielles</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm p-2 rounded-md bg-muted/30">
                        <span>Prêt à taux zéro (PTZ)</span>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/10">
                          Éligible
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between text-sm p-2 rounded-md bg-muted/30">
                        <span>Action Logement</span>
                        <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/10">
                          À vérifier
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Modifier la simulation
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Agenda & rendez-vous</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg border border-primary/20 bg-primary/5">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium text-primary">Rendez-vous architecte</div>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/10">
                        Aujourd'hui
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      <span>14:30 - 16:00</span>
                    </div>
                    <p className="text-sm">Validation des modifications plans RDC</p>
                  </div>
                  
                  <div className="p-3 rounded-lg border">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium">Appel banque</div>
                      <Badge variant="outline">
                        05/04/2023
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      <span>11:00 - 11:30</span>
                    </div>
                    <p className="text-sm">Point débloquage fonds travaux</p>
                  </div>
                  
                  <div className="p-3 rounded-lg border">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium">Visite terrain</div>
                      <Badge variant="outline">
                        10/04/2023
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      <span>09:30 - 11:00</span>
                    </div>
                    <p className="text-sm">Rendez-vous géomètre pour bornage</p>
                  </div>
                  
                  <div className="p-3 rounded-lg border">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium">Réunion MOE</div>
                      <Badge variant="outline">
                        15/04/2023
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      <span>14:00 - 15:30</span>
                    </div>
                    <p className="text-sm">Présentation entreprises sélectionnées</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Voir agenda complet
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </MainLayout>
  );
};

export default Particuliers;
