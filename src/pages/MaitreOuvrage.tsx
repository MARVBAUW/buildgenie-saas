
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageTransition from '@/components/common/PageTransition';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { HomeIcon, Plus, Calendar, Briefcase, BarChart3, FileText, Clock, Search, Check, Building, ArrowUpDown, Eye, FileCheck, User } from 'lucide-react';
import PremiumLock from '@/components/auth/PremiumLock';
import { useAuth } from '@/contexts/AuthContext';

const MaitreOuvrage: React.FC = () => {
  const { hasAccess } = useAuth();
  const hasFullAccess = hasAccess('/maitreouvrage');

  if (!hasFullAccess) {
    return (
      <MainLayout>
        <PremiumLock 
          title="Module Maître d'Ouvrage"
          description="Prenez le contrôle de vos projets immobiliers avec des outils spécialisés : validation des livrables, analyses financières, et gestion des prestataires."
          module="/maitreouvrage"
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
            <h1 className="text-3xl font-bold mb-2">Maître d'Ouvrage</h1>
            <p className="text-muted-foreground">Pilotez vos projets immobiliers et suivez les performances de vos investissements</p>
          </div>
          
          <Tabs defaultValue="overview" className="mb-8">
            <TabsList>
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <HomeIcon className="h-4 w-4" />
                <span>Vue d'ensemble</span>
              </TabsTrigger>
              <TabsTrigger value="investments" className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                <span>Investissements</span>
              </TabsTrigger>
              <TabsTrigger value="deliverables" className="flex items-center gap-2">
                <FileCheck className="h-4 w-4" />
                <span>Livrables</span>
              </TabsTrigger>
              <TabsTrigger value="providers" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Prestataires</span>
              </TabsTrigger>
              <TabsTrigger value="finances" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                <span>Finances</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Investissements actifs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">4</div>
                <div className="flex items-center mt-1 text-green-500 text-sm">
                  <span>+1</span>
                  <span className="text-muted-foreground ml-1">ce trimestre</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Capitaux engagés</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12.8M€</div>
                <div className="flex items-center mt-1 text-green-500 text-sm">
                  <span>+18.5%</span>
                  <span className="text-muted-foreground ml-1">vs. 2022</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Rendement moyen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">6.2%</div>
                <div className="flex items-center mt-1 text-amber-500 text-sm">
                  <ArrowUpDown className="h-4 w-4 mr-1" />
                  <span>Stable</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Livrables en attente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">7</div>
                <div className="flex items-center mt-1 text-destructive text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>2 urgents</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Portefeuille d'investissements</CardTitle>
                  <Button className="flex items-center">
                    <Plus className="mr-2 h-4 w-4" />
                    Nouvel investissement
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-6 text-sm p-3 border-b bg-muted/40">
                    <div className="col-span-2">Projet</div>
                    <div>Type</div>
                    <div>Capitale</div>
                    <div>Rendement</div>
                    <div>Actions</div>
                  </div>
                  
                  <div className="grid grid-cols-6 text-sm p-3 border-b hover:bg-muted/20 transition-colors duration-200">
                    <div className="col-span-2">
                      <div className="font-medium">Résidence Grand Large</div>
                      <div className="text-xs text-muted-foreground">La Rochelle, France</div>
                    </div>
                    <div>Résidentiel</div>
                    <div>4.2M€</div>
                    <div className="text-green-500">7.1%</div>
                    <div>
                      <Button variant="ghost" size="sm" className="h-8">
                        <Eye className="h-4 w-4 mr-1" />
                        Détails
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-6 text-sm p-3 border-b hover:bg-muted/20 transition-colors duration-200">
                    <div className="col-span-2">
                      <div className="font-medium">Bureaux Confluence</div>
                      <div className="text-xs text-muted-foreground">Lyon, France</div>
                    </div>
                    <div>Bureaux</div>
                    <div>3.5M€</div>
                    <div className="text-green-500">5.8%</div>
                    <div>
                      <Button variant="ghost" size="sm" className="h-8">
                        <Eye className="h-4 w-4 mr-1" />
                        Détails
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-6 text-sm p-3 border-b hover:bg-muted/20 transition-colors duration-200">
                    <div className="col-span-2">
                      <div className="font-medium">Centre Commercial Nord</div>
                      <div className="text-xs text-muted-foreground">Lille, France</div>
                    </div>
                    <div>Commercial</div>
                    <div>2.8M€</div>
                    <div className="text-amber-500">4.9%</div>
                    <div>
                      <Button variant="ghost" size="sm" className="h-8">
                        <Eye className="h-4 w-4 mr-1" />
                        Détails
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-6 text-sm p-3 hover:bg-muted/20 transition-colors duration-200">
                    <div className="col-span-2">
                      <div className="font-medium">Hôtel Mer & Soleil</div>
                      <div className="text-xs text-muted-foreground">Nice, France</div>
                    </div>
                    <div>Hôtellerie</div>
                    <div>2.3M€</div>
                    <div className="text-green-500">6.8%</div>
                    <div>
                      <Button variant="ghost" size="sm" className="h-8">
                        <Eye className="h-4 w-4 mr-1" />
                        Détails
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Livrables à valider</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg border border-destructive/20 bg-destructive/5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-destructive">Plans définitifs Résidence Grand Large</h3>
                        <p className="text-xs text-muted-foreground mt-1">Échéance: aujourd'hui</p>
                      </div>
                      <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/10">
                        Urgent
                      </Badge>
                    </div>
                    <div className="flex justify-end mt-3">
                      <Button variant="ghost" size="sm" className="h-7">
                        <Check className="h-3.5 w-3.5 mr-1" />
                        Valider
                      </Button>
                      <Button variant="ghost" size="sm" className="h-7">
                        <Eye className="h-3.5 w-3.5 mr-1" />
                        Voir
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg border border-amber-500/20 bg-amber-500/5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-amber-500">Budget révisé Bureaux Confluence</h3>
                        <p className="text-xs text-muted-foreground mt-1">Échéance: demain</p>
                      </div>
                      <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/10">
                        Important
                      </Badge>
                    </div>
                    <div className="flex justify-end mt-3">
                      <Button variant="ghost" size="sm" className="h-7">
                        <Check className="h-3.5 w-3.5 mr-1" />
                        Valider
                      </Button>
                      <Button variant="ghost" size="sm" className="h-7">
                        <Eye className="h-3.5 w-3.5 mr-1" />
                        Voir
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg border">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Contrats fournisseurs Hôtel Mer & Soleil</h3>
                        <p className="text-xs text-muted-foreground mt-1">Échéance: 29/03/2023</p>
                      </div>
                      <Badge variant="outline">
                        Normal
                      </Badge>
                    </div>
                    <div className="flex justify-end mt-3">
                      <Button variant="ghost" size="sm" className="h-7">
                        <Check className="h-3.5 w-3.5 mr-1" />
                        Valider
                      </Button>
                      <Button variant="ghost" size="sm" className="h-7">
                        <Eye className="h-3.5 w-3.5 mr-1" />
                        Voir
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    Voir tous les livrables
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Prestataires par projet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">Résidence Grand Large</h3>
                      <Badge>8 prestataires</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm p-2 rounded-md bg-muted/30">
                        <span>Archimède Architectes</span>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          MOE
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm p-2 rounded-md bg-muted/30">
                        <span>Constructions Atlantiques</span>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          Entrepreneur
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm p-2 rounded-md bg-muted/30">
                        <span>Bureau Veritas</span>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          Bureau contrôle
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="mt-2 w-full">
                      <Plus className="h-3.5 w-3.5 mr-1" />
                      Afficher plus
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">Bureaux Confluence</h3>
                      <Badge>6 prestataires</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm p-2 rounded-md bg-muted/30">
                        <span>Studio Garnier</span>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          MOE
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm p-2 rounded-md bg-muted/30">
                        <span>Rhône Construction</span>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          Entrepreneur
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="mt-2 w-full">
                      <Plus className="h-3.5 w-3.5 mr-1" />
                      Afficher plus
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Calendrier de paiements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg border border-destructive/20 bg-destructive/5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-destructive">Appel de fonds T2 - Grand Large</h3>
                        <p className="text-xs text-muted-foreground mt-1">1 250 000 € • Échéance: 05/04/2023</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg border">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Facture MOE - Bureaux Confluence</h3>
                        <p className="text-xs text-muted-foreground mt-1">85 000 € • Échéance: 15/04/2023</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg border">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Règlement études - Centre Commercial Nord</h3>
                        <p className="text-xs text-muted-foreground mt-1">45 000 € • Échéance: 22/04/2023</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg border">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Facture entrepreneur - Hôtel Mer & Soleil</h3>
                        <p className="text-xs text-muted-foreground mt-1">320 000 € • Échéance: 30/04/2023</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    Voir tout le calendrier
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Analyse financière</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-3">ROI par projet</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Résidence Grand Large</span>
                          <span className="text-green-500">7.1%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: '71%' }} />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Bureaux Confluence</span>
                          <span className="text-green-500">5.8%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: '58%' }} />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Centre Commercial Nord</span>
                          <span className="text-amber-500">4.9%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full" style={{ width: '49%' }} />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Hôtel Mer & Soleil</span>
                          <span className="text-green-500">6.8%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: '68%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="text-sm font-medium mb-3">Indicateurs clés</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-muted/30 text-center">
                        <div className="text-xs text-muted-foreground mb-1">TRI moyen</div>
                        <div className="text-lg font-medium">8.3%</div>
                      </div>
                      
                      <div className="p-3 rounded-lg bg-muted/30 text-center">
                        <div className="text-xs text-muted-foreground mb-1">Pay-back moyen</div>
                        <div className="text-lg font-medium">9.2 ans</div>
                      </div>
                      
                      <div className="p-3 rounded-lg bg-muted/30 text-center">
                        <div className="text-xs text-muted-foreground mb-1">LTV</div>
                        <div className="text-lg font-medium">45%</div>
                      </div>
                      
                      <div className="p-3 rounded-lg bg-muted/30 text-center">
                        <div className="text-xs text-muted-foreground mb-1">DSCR</div>
                        <div className="text-lg font-medium">1.38</div>
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

export default MaitreOuvrage;
