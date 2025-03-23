
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageTransition from '@/components/common/PageTransition';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MapPin, Building, Home, MapPinned, Banknote, BarChart2 } from 'lucide-react';

const marketplaceItems = [
  {
    id: 1,
    title: 'Appartement T3 - Quartier Saint-Pierre',
    type: 'Appartement',
    price: '285 000 €',
    location: 'Bordeaux, 33000',
    size: '68 m²',
    return: '4.2%',
    tags: ['Eligible MaPrimeRénov\'', 'Rendement > 4%'],
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Maison 4 pièces avec jardin',
    type: 'Maison',
    price: '359 000 €',
    location: 'Pessac, 33600',
    size: '92 m²',
    return: '3.8%',
    tags: ['Jardin', 'Garage'],
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Terrain constructible 600m²',
    type: 'Terrain',
    price: '185 000 €',
    location: 'Mérignac, 33700',
    size: '600 m²',
    return: '5.5%',
    tags: ['Projet construction', 'CU positif'],
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Local commercial centre-ville',
    type: 'Commercial',
    price: '450 000 €',
    location: 'Bordeaux, 33000',
    size: '120 m²',
    return: '7.2%',
    tags: ['Rendement > 7%', 'Centre-ville'],
    imageUrl: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const Marketplace: React.FC = () => {
  return (
    <MainLayout>
      <PageTransition>
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Marketplace</h1>
            <p className="text-muted-foreground">Découvrez des projets immobiliers analysés par notre IA</p>
          </div>
          
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Rechercher par ville, type de bien, budget..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filtres
            </Button>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all">Tous</TabsTrigger>
              <TabsTrigger value="appartement">Appartements</TabsTrigger>
              <TabsTrigger value="maison">Maisons</TabsTrigger>
              <TabsTrigger value="terrain">Terrains</TabsTrigger>
              <TabsTrigger value="commercial">Commerces</TabsTrigger>
              <TabsTrigger value="investissement">Investissements</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {marketplaceItems.map((item) => (
              <Card key={item.id} className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {item.type}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <MapPin className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                    {item.location}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pb-2 flex-1">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                      <Banknote className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{item.price}</span>
                    </div>
                    <div className="flex items-center">
                      <Home className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{item.size}</span>
                    </div>
                    <div className="flex items-center">
                      <BarChart2 className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Rendement: {item.return}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-2">
                  <Button className="w-full">Analyser ce bien</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </PageTransition>
    </MainLayout>
  );
};

export default Marketplace;
