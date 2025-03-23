
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageTransition from '@/components/common/PageTransition';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { User, Building, Calendar, Home, Search, Plus, Clock, Map, Share2, MessageSquare, ChevronRight, CreditCard, Edit, Users } from 'lucide-react';
import PremiumLock from '@/components/auth/PremiumLock';
import { useAuth } from '@/contexts/AuthContext';

const properties = [
  {
    id: 1,
    title: "Appartement T3 - Centre-ville",
    type: "Appartement",
    status: "À vendre",
    price: "285 000 €",
    location: "Bordeaux, 33000",
    area: "68 m²",
    rooms: 3,
    createdAt: "10/03/2023",
    views: 156,
    contacts: 4,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Maison 4 chambres avec jardin",
    type: "Maison",
    status: "À vendre",
    price: "425 000 €",
    location: "Pessac, 33600",
    area: "135 m²",
    rooms: 5,
    createdAt: "15/03/2023",
    views: 98,
    contacts: 2,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Loft industriel rénové",
    type: "Loft",
    status: "À louer",
    price: "1 250 €/mois",
    location: "Bordeaux, 33000",
    area: "85 m²",
    rooms: 2,
    createdAt: "20/03/2023",
    views: 72,
    contacts: 3,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop"
  },
];

const appointments = [
  {
    id: 1,
    property: "Appartement T3 - Centre-ville",
    client: "M. Martin",
    date: "27/03/2023",
    time: "14:30",
    status: "Confirmé",
    type: "Visite",
  },
  {
    id: 2,
    property: "Maison 4 chambres avec jardin",
    client: "Famille Dubois",
    date: "28/03/2023",
    time: "10:00",
    status: "Confirmé",
    type: "Visite",
  },
  {
    id: 3,
    property: "Loft industriel rénové",
    client: "Mme Laurent",
    date: "29/03/2023",
    time: "16:15",
    status: "En attente",
    type: "Visite",
  },
  {
    id: 4,
    property: "Appartement T2 - Chartrons",
    client: "M. Garcia",
    date: "30/03/2023",
    time: "11:30",
    status: "En attente",
    type: "Signature",
  },
];

const Agents: React.FC = () => {
  const { hasAccess } = useAuth();
  const hasFullAccess = hasAccess('/agents');

  if (!hasFullAccess) {
    return (
      <MainLayout>
        <PremiumLock 
          title="Module Agents Immobiliers"
          description="Gérez efficacement votre portefeuille de biens, vos clients et vos rendez-vous avec des outils spécialement conçus pour les professionnels de l'immobilier."
          module="/agents"
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
            <h1 className="text-3xl font-bold mb-2">Agents Immobiliers</h1>
            <p className="text-muted-foreground">Gérez votre portefeuille de biens et vos clients</p>
          </div>
          
          <Tabs defaultValue="dashboard" className="mb-8">
            <TabsList>
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span>Tableau de bord</span>
              </TabsTrigger>
              <TabsTrigger value="properties" className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                <span>Biens</span>
              </TabsTrigger>
              <TabsTrigger value="clients" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Clients</span>
              </TabsTrigger>
              <TabsTrigger value="calendar" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Agenda</span>
              </TabsTrigger>
              <TabsTrigger value="simulator" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span>Simulateur</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Biens en portefeuille</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">18</div>
                <div className="flex items-center mt-1 text-muted-foreground text-sm">
                  <span>12 ventes • 6 locations</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Visites programmées</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">7</div>
                <div className="flex items-center mt-1 text-green-500 text-sm">
                  <span>+2</span>
                  <span className="text-muted-foreground ml-1">cette semaine</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Contacts clients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">24</div>
                <div className="flex items-center mt-1 text-amber-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>5 à rappeler</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Taux de conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8.2%</div>
                <div className="flex items-center mt-1 text-green-500 text-sm">
                  <span>+1.5%</span>
                  <span className="text-muted-foreground ml-1">vs. 2022</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Biens récents</CardTitle>
                  <div className="flex gap-2">
                    <div className="relative w-60">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Rechercher un bien..."
                        className="h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                    <Button className="flex items-center">
                      <Plus className="mr-2 h-4 w-4" />
                      Nouveau bien
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {properties.map((property) => (
                    <div key={property.id} className="flex flex-col md:flex-row gap-4 rounded-lg border p-4 hover:bg-muted/20 transition-colors duration-200">
                      <div className="h-48 md:h-auto md:w-48 flex-shrink-0 rounded-md overflow-hidden">
                        <img 
                          src={property.image} 
                          alt={property.title} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-medium">{property.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                              <Map className="h-3.5 w-3.5" />
                              <span>{property.location}</span>
                            </div>
                          </div>
                          <Badge className={property.status === 'À vendre' ? 'bg-blue-500' : 'bg-amber-500'}>
                            {property.status}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <div className="text-xs text-muted-foreground">Prix</div>
                            <div className="font-medium">{property.price}</div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">Surface</div>
                            <div className="font-medium">{property.area}</div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">Pièces</div>
                            <div className="font-medium">{property.rooms}</div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Clock className="h-3.5 w-3.5 mr-1" />
                              <span>Ajouté le {property.createdAt}</span>
                            </div>
                            <div className="flex items-center">
                              <Eye className="h-3.5 w-3.5 mr-1" />
                              <span>{property.views} vues</span>
                            </div>
                            <div className="flex items-center">
                              <MessageSquare className="h-3.5 w-3.5 mr-1" />
                              <span>{property.contacts} contacts</span>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="h-8">
                              <Edit className="h-3.5 w-3.5 mr-1" />
                              Éditer
                            </Button>
                            <Button variant="outline" size="sm" className="h-8">
                              <Share2 className="h-3.5 w-3.5 mr-1" />
                              Partager
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-center">
                  <Button variant="outline">
                    Voir tous les biens
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Rendez-vous à venir</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointments.slice(0, 3).map((appointment) => (
                    <div key={appointment.id} className="p-3 rounded-lg border">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-medium">{appointment.type}</div>
                        <Badge variant="outline" className={
                          appointment.status === 'Confirmé' 
                            ? 'bg-green-500/10 text-green-500 border-green-500/10' 
                            : 'bg-amber-500/10 text-amber-500 border-amber-500/10'
                        }>
                          {appointment.status}
                        </Badge>
                      </div>
                      <p className="text-sm mb-1">{appointment.property}</p>
                      <div className="flex justify-between items-center text-sm mt-2">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          <span>{appointment.date}, {appointment.time}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <User className="h-3.5 w-3.5 mr-1" />
                          <span>{appointment.client}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Voir tous les rendez-vous
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Clients récents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg border hover:bg-muted/20 transition-colors duration-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">M. et Mme Dubois</div>
                        <div className="text-xs text-muted-foreground">Recherche maison 4 chambres, Bordeaux</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/10">
                      Actif
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 rounded-lg border hover:bg-muted/20 transition-colors duration-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Mme Laurent</div>
                        <div className="text-xs text-muted-foreground">Recherche location T2/T3, centre-ville</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/10">
                      Nouveau
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 rounded-lg border hover:bg-muted/20 transition-colors duration-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">M. Garcia</div>
                        <div className="text-xs text-muted-foreground">Achète T2 Chartrons, financement ok</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/10">
                      En cours
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 rounded-lg border hover:bg-muted/20 transition-colors duration-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">SCI Investissements</div>
                        <div className="text-xs text-muted-foreground">Recherche immeubles de rapport</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/10">
                      Actif
                    </Badge>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    <Users className="mr-2 h-4 w-4" />
                    Voir tous les clients
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Simulation de prêt immobilier</CardTitle>
                <CardDescription>
                  Calculez rapidement les mensualités pour vos clients
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Montant du prêt</label>
                    <div className="relative">
                      <input
                        type="text"
                        className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Ex: 250000"
                        defaultValue="250000"
                      />
                      <div className="absolute inset-y-0 right-3 flex items-center text-sm text-muted-foreground">
                        €
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Taux d'intérêt</label>
                      <div className="relative">
                        <input
                          type="text"
                          className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          placeholder="Ex: 3.5"
                          defaultValue="3.5"
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center text-sm text-muted-foreground">
                          %
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-1 block">Durée (années)</label>
                      <input
                        type="text"
                        className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Ex: 25"
                        defaultValue="25"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Apport</label>
                    <div className="relative">
                      <input
                        type="text"
                        className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Ex: 50000"
                        defaultValue="50000"
                      />
                      <div className="absolute inset-y-0 right-3 flex items-center text-sm text-muted-foreground">
                        €
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full">Calculer</Button>
                  
                  <div className="rounded-lg border p-4 mt-4">
                    <h3 className="font-medium mb-3">Résultats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Mensualité</div>
                        <div className="text-xl font-bold">1 252,33 €</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Coût total</div>
                        <div className="text-xl font-bold">375 699 €</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Taux d'endettement</div>
                        <div className="text-xl font-bold">28.4%</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Intérêts totaux</div>
                        <div className="text-xl font-bold">125 699 €</div>
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

export default Agents;
