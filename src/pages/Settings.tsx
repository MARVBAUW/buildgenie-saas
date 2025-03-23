
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageTransition from '@/components/common/PageTransition';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Loader2, Save, User, Bell, Shield, CreditCard } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from "sonner";

const profileFormSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email(),
  company: z.string().optional(),
});

const notificationsFormSchema = z.object({
  emailNotifications: z.boolean().default(true),
  pushNotifications: z.boolean().default(true),
  projectUpdates: z.boolean().default(true),
  marketplaceAlerts: z.boolean().default(false),
  securityAlerts: z.boolean().default(true),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;
type NotificationsFormValues = z.infer<typeof notificationsFormSchema>;

const Settings = () => {
  const { user } = useAuth();
  
  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
      company: user?.company || '',
    },
  });
  
  const notificationsForm = useForm<NotificationsFormValues>({
    resolver: zodResolver(notificationsFormSchema),
    defaultValues: {
      emailNotifications: true,
      pushNotifications: true,
      projectUpdates: true,
      marketplaceAlerts: false,
      securityAlerts: true,
    },
  });
  
  const [profileLoading, setProfileLoading] = React.useState(false);
  const [notificationsLoading, setNotificationsLoading] = React.useState(false);

  const onProfileSubmit = async (data: ProfileFormValues) => {
    setProfileLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Profil mis à jour avec succès");
    setProfileLoading(false);
  };
  
  const onNotificationsSubmit = async (data: NotificationsFormValues) => {
    setNotificationsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Préférences de notifications mises à jour");
    setNotificationsLoading(false);
  };

  return (
    <MainLayout>
      <PageTransition>
        <div className="container mx-auto py-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Paramètres</h1>
            <p className="text-muted-foreground">Gérez votre profil et vos préférences</p>
          </div>
          
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Profil</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Sécurité</span>
              </TabsTrigger>
              <TabsTrigger value="billing" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span>Abonnement</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Informations personnelles</CardTitle>
                  <CardDescription>
                    Modifiez vos informations personnelles et professionnelles
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Form {...profileForm}>
                    <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={profileForm.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Prénom</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={profileForm.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nom</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={profileForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={profileForm.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Entreprise</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormDescription>
                              Votre entreprise ou organisation
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" disabled={profileLoading}>
                        {profileLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Enregistrement...
                          </>
                        ) : (
                          <>
                            <Save className="mr-2 h-4 w-4" />
                            Enregistrer les modifications
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Préférences de notifications</CardTitle>
                  <CardDescription>
                    Configurez comment et quand vous souhaitez être notifié
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Form {...notificationsForm}>
                    <form onSubmit={notificationsForm.handleSubmit(onNotificationsSubmit)} className="space-y-6">
                      <div className="space-y-4">
                        <FormField
                          control={notificationsForm.control}
                          name="emailNotifications"
                          render={({ field }) => (
                            <FormItem className="flex items-center justify-between rounded-lg border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">Notifications par email</FormLabel>
                                <FormDescription>
                                  Recevez des notifications par email
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={notificationsForm.control}
                          name="pushNotifications"
                          render={({ field }) => (
                            <FormItem className="flex items-center justify-between rounded-lg border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">Notifications push</FormLabel>
                                <FormDescription>
                                  Recevez des notifications dans votre navigateur
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={notificationsForm.control}
                          name="projectUpdates"
                          render={({ field }) => (
                            <FormItem className="flex items-center justify-between rounded-lg border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">Mises à jour de projets</FormLabel>
                                <FormDescription>
                                  Soyez notifié des mises à jour sur vos projets
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={notificationsForm.control}
                          name="marketplaceAlerts"
                          render={({ field }) => (
                            <FormItem className="flex items-center justify-between rounded-lg border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">Alertes Marketplace</FormLabel>
                                <FormDescription>
                                  Recevez des alertes sur les nouveaux projets immobiliers
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={notificationsForm.control}
                          name="securityAlerts"
                          render={({ field }) => (
                            <FormItem className="flex items-center justify-between rounded-lg border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">Alertes de sécurité</FormLabel>
                                <FormDescription>
                                  Soyez alerté des activités suspectes sur votre compte
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <Button type="submit" disabled={notificationsLoading}>
                        {notificationsLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Enregistrement...
                          </>
                        ) : (
                          <>
                            <Save className="mr-2 h-4 w-4" />
                            Enregistrer les préférences
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Sécurité du compte</CardTitle>
                  <CardDescription>
                    Gérez la sécurité de votre compte et vos préférences de connexion
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <h3 className="text-base font-medium">Changer le mot de passe</h3>
                        <p className="text-sm text-muted-foreground">
                          Mettez à jour votre mot de passe pour sécuriser votre compte
                        </p>
                      </div>
                      <Button variant="outline">Modifier</Button>
                    </div>
                    
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <h3 className="text-base font-medium">Authentification à deux facteurs</h3>
                        <p className="text-sm text-muted-foreground">
                          Ajoutez une couche de sécurité supplémentaire à votre compte
                        </p>
                      </div>
                      <Button variant="outline">Configurer</Button>
                    </div>
                    
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <h3 className="text-base font-medium">Sessions actives</h3>
                        <p className="text-sm text-muted-foreground">
                          Gérez les appareils connectés à votre compte
                        </p>
                      </div>
                      <Button variant="outline">Afficher</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="billing">
              <Card>
                <CardHeader>
                  <CardTitle>Abonnement et facturation</CardTitle>
                  <CardDescription>
                    Gérez votre abonnement, votre facturation et vos moyens de paiement
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="text-lg font-medium">
                          {user?.subscription ? (
                            <>
                              Plan {user.subscription.charAt(0).toUpperCase() + user.subscription.slice(1)}
                            </>
                          ) : (
                            "Plan Gratuit"
                          )}
                        </h3>
                        {user?.trialEndsAt && new Date() < new Date(user.trialEndsAt) && (
                          <p className="text-sm text-amber-500">
                            Période d'essai - se termine le {new Date(user.trialEndsAt).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                      <Button asChild>
                        <a href="/pricing">
                          {user?.subscription === 'premium' ? "Gérer" : "Mettre à niveau"}
                        </a>
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Prochain renouvellement</span>
                        <span>{new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Moyen de paiement</span>
                        <span>Visa ****4242</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Historique de facturation</h3>
                    <div className="rounded-lg border divide-y">
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Abonnement Premium</p>
                          <p className="text-sm text-muted-foreground">25 mars 2023</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">99,00 €</p>
                          <Button variant="ghost" size="sm" className="h-8 text-xs">
                            Télécharger
                          </Button>
                        </div>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Abonnement Premium</p>
                          <p className="text-sm text-muted-foreground">25 février 2023</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">99,00 €</p>
                          <Button variant="ghost" size="sm" className="h-8 text-xs">
                            Télécharger
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </PageTransition>
    </MainLayout>
  );
};

export default Settings;
