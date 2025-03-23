
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import PageTransition from '@/components/common/PageTransition';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const success = await resetPassword(email);
      if (success) {
        setIsSubmitted(true);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-muted/30">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <Link to="/sign-in" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à la connexion
            </Link>
          </div>
          
          <Card className="w-full shadow-card">
            <form onSubmit={handleSubmit}>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Réinitialiser le mot de passe</CardTitle>
                <CardDescription>
                  Entrez votre email pour recevoir un lien de réinitialisation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {isSubmitted ? (
                  <div className="p-4 bg-primary/10 rounded-lg text-center">
                    <p className="text-sm mb-2">
                      Si un compte existe avec l'adresse <span className="font-medium">{email}</span>, 
                      vous recevrez un email avec les instructions pour réinitialiser votre mot de passe.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Vérifiez votre boîte de réception et vos spams.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="exemple@domaine.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                {!isSubmitted && (
                  <Button className="w-full" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      "Envoyer le lien de réinitialisation"
                    )}
                  </Button>
                )}
                <div className="text-center text-sm text-muted-foreground">
                  <Link to="/sign-in" className="font-medium text-primary hover:text-primary/90 transition-colors">
                    Retour à la connexion
                  </Link>
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </PageTransition>
  );
};

export default ResetPassword;
