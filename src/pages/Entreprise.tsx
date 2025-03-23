
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageTransition from '@/components/common/PageTransition';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, BarChart3, Package, Truck, Calendar, Tool, FileText, Settings, Users, FileSearch, Building2, Plus, Search } from 'lucide-react';
import PremiumLock from '@/components/auth/PremiumLock';
import { useAuth } from '@/contexts/AuthContext';

const Entreprise: React.FC = () => {
  const { hasAccess } = useAuth();
  const hasFullAccess = hasAccess('/entreprise');

  if (!hasFullAccess) {
    return (
      <MainLayout>
        <PremiumLock 
          title="Module Entreprise"
          description="Optimisez la gestion de vos chantiers, main d'œuvre, devis et facturation avec des outils spécialement conçus pour les entreprises du BTP."
          module="/entreprise"
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
            <h1 className="text-3xl font-bold mb-2">Entreprise</h1>
            <p className="text-muted-foreground">Gérez vos chantiers, équipes et approvisionnements</p>
          </div>
          
          <Tabs defaultValue="dashboard" className="mb-8">
            <TabsList>
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span>Tableau de bord</span>
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <Tool className="h-4 w-4" />
                <span>Chantiers</span>
              </TabsTrigger>
              <TabsTrigger value="quotes" className="flex items-center gap-2">
                <FileSearch className="h-4 w-4" />
                <span>Devis</span>
              </TabsTrigger>
              <TabsTrigger value="supplies" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                <span>Matériaux</span>
              </TabsTrigger>
              <TabsTrigger value="planning" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Planning</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Chantiers actifs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">6</div>
                <div className="flex items-center mt-1 text-green-500 text-sm">
                  <span>+2</span>
                  <span className="text-muted-foreground ml-1">ce mois</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">CA en cours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">458K€</div>
                <div className="flex items-center mt-1 text-green-500 text-sm">
                  <span>+15.3%</span>
                  <span className="text-muted-foreground ml-1">vs. 2022</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Devis en attente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8</div>
                <div className="flex items-center mt-1 text-amber-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>2 expirés</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Commandes en cours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
                <div className="flex items-center mt-1 text-destructive text-sm">
                  <Truck className="h-4 w-4 mr-1" />
                  <span>4 retards</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Chantiers en cours</CardTitle>
                  <div className="flex gap-2">
                    <div className="relative w-60">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Rechercher un chantier..."
                        className="h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                    <Button className="flex items-center">
                      <Plus className="mr-2 h-4 w-4" />
                      Nouveau chantier
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-6 text-sm p-3 border-b bg-muted/40">
                    <div className="col-span-2">Nom du chantier</div>
                    <div>Client</div>
                    <div>Budget</div>
                    <div>Échéance</div>
                    <div>Actions</div>
                  </div>
                  
                  <div className="grid grid-cols-6 text-sm p-3 border-b hover:bg-muted/20 transition-colors duration-200">
                    <div className="col-span-2">
                      <div className="font-medium">Rénovation appartements Haussmann</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Badge variant="outline" className="text-xs py-0">
                          Rénovation
                        </Badge>
                        <span>Paris</span>
                      </div>
                    </div>
                    <div>SCI Parinama</div>
                    <div>285K€</div>
                    <div>15/06/2023</div>
                    <div>
                      <Button variant="ghost" size="sm">
                        Détails
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-6 text-sm p-3 border-b hover:bg-muted/20 transition-colors duration-200">
                    <div className="col-span-2">
                      <div className="font-medium">Construction maison individuelle</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Badge variant="outline" className="text-xs py-0">
                          Construction
                        </Badge>
                        <span>Bordeaux</span>
                      </div>
                    </div>
                    <div>M. et Mme Dupont</div>
                    <div>320K€</div>
                    <div>30/08/2023</div>
                    <div>
                      <Button variant="ghost" size="sm">
                        Détails
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-6 text-sm p-3 border-b hover:bg-muted/20 transition-colors duration-200">
                    <div className="col-span-2">
                      <div className="font-medium">Restaurant Le Central</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Badge variant="outline" className="text-xs py-0">
                          ERP
                        </Badge>
                        <span>Lyon</span>
                      </div>
                    </div>
                    <div>SARL Gastro</div>
                    <div>195K€</div>
                    <div>10/05/2023</div>
                    <div>
                      <Button variant="ghost" size="sm">
                        Détails
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-6 text-sm p-3 hover:bg-muted/20 transition-colors duration-200">
                    <div className="col-span-2">
                      <div className="font-medium">Entrepôt logistique</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Badge variant="outline" className="text-xs py-0">
                          Industriel
                        </Badge>
                        <span>Marseille</span>
                      </div>
                    </div>
                    <div>LogiSud SAS</div>
                    <div>850K€</div>
                    <div>20/09/2023</div>
                    <div>
                      <Button variant="ghost" size="sm">
                        Détails
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Planning de la semaine</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-3">
                    <div className="font-medium mb-1">Lundi 27/03</div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm p-2 rounded bg-muted/30">
                        <div className="w-1 h-full rounded-full bg-blue-500"></div>
                        <div>
                          <div className="font-medium">Maison Dupont - Fondations</div>
                          <div className="text-xs text-muted-foreground">Équipe A - 4 personnes</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-sm p-2 rounded bg-muted/30">
                        <div className="w-1 h-full rounded-full bg-purple-500"></div>
                        <div>
                          <div className="font-medium">Appartements Haussmann - Plomberie</div>
                          <div className="text-xs text-muted-foreground">Équipe B - 2 personnes</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border p-3">
                    <div className="font-medium mb-1">Mardi 28/03</div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm p-2 rounded bg-muted/30">
                        <div className="w-1 h-full rounded-full bg-blue-500"></div>
                        <div>
                          <div className="font-medium">Maison Dupont - Fondations</div>
                          <div className="text-xs text-muted-foreground">Équipe A - 4 personnes</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-sm p-2 rounded bg-amber-500/20">
                        <div className="w-1 h-full rounded-full bg-amber-500"></div>
                        <div>
                          <div className="font-medium">Le Central - Cloisons</div>
                          <div className="text-xs text-muted-foreground">Équipe C - 3 personnes</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border p-3">
                    <div className="font-medium mb-1">Mercredi 29/03</div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm p-2 rounded bg-muted/30">
                        <div className="w-1 h-full rounded-full bg-blue-500"></div>
                        <div>
                          <div className="font-medium">Maison Dupont - Fondations</div>
                          <div className="text-xs text-muted-foreground">Équipe A - 4 personnes</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-sm p-2 rounded bg-muted/30">
                        <div className="w-1 h-full rounded-full bg-purple-500"></div>
                        <div>
                          <div className="font-medium">Appartements Haussmann - Électricité</div>
                          <div className="text-xs text-muted-foreground">Équipe B - 2 personnes</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Voir planning complet
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Devis récents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg border hover:bg-muted/20 transition-colors duration-200">
                    <div>
                      <div className="font-medium">Villa Les Pins</div>
                      <div className="text-xs text-muted-foreground mt-1">Envoyé le 24/03/2023</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">185 K€</div>
                      <Badge variant="outline" className="mt-1">En attente</Badge>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 rounded-lg border hover:bg-muted/20 transition-colors duration-200">
                    <div>
                      <div className="font-medium">Bureaux Étoile</div>
                      <div className="text-xs text-muted-foreground mt-1">Envoyé le 20/03/2023</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">240 K€</div>
                      <Badge variant="outline" className="mt-1">En attente</Badge>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 rounded-lg border hover:bg-muted/20 transition-colors duration-200">
                    <div>
                      <div className="font-medium">Boutique Mode & Style</div>
                      <div className="text-xs text-muted-foreground mt-1">Envoyé le 15/03/2023</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">85 K€</div>
                      <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/10 mt-1">Expiré</Badge>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 rounded-lg border hover:bg-muted/20 transition-colors duration-200">
                    <div>
                      <div className="font-medium">Rénovation Loft</div>
                      <div className="text-xs text-muted-foreground mt-1">Envoyé le 10/03/2023</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">125 K€</div>
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/10 mt-1">Accepté</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    <FileSearch className="mr-2 h-4 w-4" />
                    Voir tous les devis
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Commandes matériaux</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg border border-destructive/20 bg-destructive/5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-destructive">Bois ossature Maison Dupont</h3>
                        <p className="text-xs text-muted-foreground mt-1">Livraison prévue: 25/03/2023</p>
                        <p className="text-xs text-destructive mt-1">Retard: 2 jours</p>
                      </div>
                      <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/10">
                        Retard
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg border">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Carrelage Appartements Haussmann</h3>
                        <p className="text-xs text-muted-foreground mt-1">Livraison prévue: 30/03/2023</p>
                      </div>
                      <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/10">
                        En cours
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg border">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Isolation Restaurant Le Central</h3>
                        <p className="text-xs text-muted-foreground mt-1">Livraison prévue: 02/04/2023</p>
                      </div>
                      <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/10">
                        En cours
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg border">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Béton Entrepôt Logistique</h3>
                        <p className="text-xs text-muted-foreground mt-1">Livraison prévue: 05/04/2023</p>
                      </div>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/10">
                        Confirmé
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    <Package className="mr-2 h-4 w-4" />
                    Voir toutes les commandes
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Équipes et ressources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-3">Personnel par chantier</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Maison Dupont</span>
                          <span>4 personnes</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: '40%' }} />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Appartements Haussmann</span>
                          <span>2 personnes</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500 rounded-full" style={{ width: '20%' }} />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Restaurant Le Central</span>
                          <span>3 personnes</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full" style={{ width: '30%' }} />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Entrepôt Logistique</span>
                          <span>1 personne</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: '10%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="text-sm font-medium mb-3">Équipements disponibles</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm p-2 rounded-md bg-muted/30">
                        <span>Bétonnière industrielle</span>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/10">
                          Disponible
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between text-sm p-2 rounded-md bg-muted/30">
                        <span>Échafaudage 100m²</span>
                        <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/10">
                          Utilisé: Maison Dupont
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between text-sm p-2 rounded-md bg-muted/30">
                        <span>Mini-pelle</span>
                        <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/10">
                          Utilisé: Entrepôt
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    <Users className="mr-2 h-4 w-4" />
                    Gérer les équipes
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

export default Entreprise;
