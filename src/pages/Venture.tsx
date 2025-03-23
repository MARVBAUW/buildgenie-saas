
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageTransition from '@/components/common/PageTransition';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Heart, Star, ThumbsUp, ThumbsDown, Plus, Lightbulb, Users, DollarSign, Clock, Briefcase } from 'lucide-react';

const ventureProjects = [
  {
    id: 1,
    title: 'SmartBuild - Construction modulaire éco-responsable',
    description: 'Système de construction modulaire à base de matériaux recyclés permettant des assemblages rapides et personnalisables',
    category: 'Construction',
    budget: '250 000 €',
    duration: '18 mois',
    votes: 127,
    status: 'Recherche financement',
    tags: ['Écologie', 'Innovation', 'Rentabilité']
  },
  {
    id: 2,
    title: 'HeatBlock - Isolant nouvelle génération',
    description: 'Isolant thermique ultra-performant à base de fibres naturelles avec un coefficient d\'isolation inégalé',
    category: 'Matériaux',
    budget: '180 000 €',
    duration: '12 mois',
    votes: 89,
    status: 'Prototype',
    tags: ['Écologie', 'Brevet déposé']
  },
  {
    id: 3,
    title: 'CommunaScale - Générateur communautaire',
    description: 'Plateforme de production électrique décentralisée pour les copropriétés et quartiers résidentiels',
    category: 'Énergie',
    budget: '320 000 €',
    duration: '24 mois',
    votes: 156,
    status: 'Recherche partenaires',
    tags: ['Autonomie', 'Communauté', 'Économie d\'énergie']
  },
  {
    id: 4,
    title: 'ArtisanLink - Marketplace pour artisans',
    description: 'Plateforme connectant les artisans du bâtiment avec une clientèle ciblée et qualifiée',
    category: 'Plateforme',
    budget: '150 000 €',
    duration: '9 mois',
    votes: 94,
    status: 'Bêta',
    tags: ['Digital', 'Service']
  }
];

const Venture: React.FC = () => {
  const [activeProject, setActiveProject] = React.useState(0);
  
  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % ventureProjects.length);
  };
  
  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + ventureProjects.length) % ventureProjects.length);
  };

  return (
    <MainLayout>
      <PageTransition>
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Venture</h1>
            <p className="text-muted-foreground">Découvrez et soutenez des projets innovants dans l'immobilier et la construction</p>
          </div>
          
          <Tabs defaultValue="discover" className="mb-8">
            <TabsList>
              <TabsTrigger value="discover">Découvrir</TabsTrigger>
              <TabsTrigger value="popular">Populaires</TabsTrigger>
              <TabsTrigger value="my-votes">Mes votes</TabsTrigger>
              <TabsTrigger value="my-projects">Mes projets</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="w-full lg:w-2/3">
              <div className="relative">
                <Card className="relative overflow-hidden">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl mb-1">{ventureProjects[activeProject].title}</CardTitle>
                        <CardDescription className="flex items-center">
                          <Badge variant="outline" className="mr-2">
                            {ventureProjects[activeProject].category}
                          </Badge>
                          <Badge variant="secondary">
                            {ventureProjects[activeProject].status}
                          </Badge>
                        </CardDescription>
                      </div>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {ventureProjects[activeProject].description}
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex flex-col items-center p-3 rounded-lg bg-muted/40">
                        <DollarSign className="h-5 w-5 mb-1 text-primary" />
                        <span className="text-sm font-medium">Budget</span>
                        <span className="text-sm text-muted-foreground">{ventureProjects[activeProject].budget}</span>
                      </div>
                      
                      <div className="flex flex-col items-center p-3 rounded-lg bg-muted/40">
                        <Clock className="h-5 w-5 mb-1 text-primary" />
                        <span className="text-sm font-medium">Durée</span>
                        <span className="text-sm text-muted-foreground">{ventureProjects[activeProject].duration}</span>
                      </div>
                      
                      <div className="flex flex-col items-center p-3 rounded-lg bg-muted/40">
                        <ThumbsUp className="h-5 w-5 mb-1 text-primary" />
                        <span className="text-sm font-medium">Votes</span>
                        <span className="text-sm text-muted-foreground">{ventureProjects[activeProject].votes}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {ventureProjects[activeProject].tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between">
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        <Star className="mr-1 h-4 w-4" />
                        Favoris
                      </Button>
                      <Button variant="outline" size="sm">
                        <Users className="mr-1 h-4 w-4" />
                        Contacter
                      </Button>
                    </div>
                    
                    <div className="space-x-2">
                      <Button variant="outline" size="icon" className="rounded-full" onClick={() => {}}>
                        <ThumbsDown className="h-4 w-4" />
                      </Button>
                      <Button variant="default" size="icon" className="rounded-full" onClick={() => {}}>
                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
                
                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 bg-background" onClick={prevProject}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 bg-background" onClick={nextProject}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Créer un projet</CardTitle>
                  <CardDescription>
                    Présentez votre idée innovante à la communauté
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="rounded-lg p-4 bg-muted/30 flex gap-3">
                    <Lightbulb className="h-10 w-10 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Avez-vous une idée innovante ?</h4>
                      <p className="text-sm text-muted-foreground">
                        Partagez-la avec notre communauté d'investisseurs et d'experts
                      </p>
                    </div>
                  </div>
                  
                  <div className="rounded-lg p-4 bg-muted/30 flex gap-3">
                    <Briefcase className="h-10 w-10 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Recherchez des partenaires</h4>
                      <p className="text-sm text-muted-foreground">
                        Trouvez des collaborateurs, financeurs ou mentors pour votre projet
                      </p>
                    </div>
                  </div>
                  
                  <div className="rounded-lg p-4 bg-muted/30 flex gap-3">
                    <DollarSign className="h-10 w-10 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Financement communautaire</h4>
                      <p className="text-sm text-muted-foreground">
                        Accédez à des opportunités de financement adaptées à votre projet
                      </p>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Créer un projet
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Projets populaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ventureProjects.map((project) => (
                <Card key={project.id} className="h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pb-2 flex-1">
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex justify-between text-sm mb-4">
                      <div>
                        <span className="text-muted-foreground">Budget:</span>
                        <span className="ml-1 font-medium">{project.budget}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Votes:</span>
                        <span className="ml-1 font-medium">{project.votes}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-2">
                    <Button variant="outline" className="w-full">
                      Découvrir
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </PageTransition>
    </MainLayout>
  );
};

export default Venture;
