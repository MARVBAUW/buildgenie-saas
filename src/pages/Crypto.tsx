
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageTransition from '@/components/common/PageTransition';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { BarChart2, Clock, DollarSign, CreditCard, ArrowUp, ArrowDown, Plus, Wallet, AreaChart, RefreshCw, Settings } from 'lucide-react';
import { Area, AreaChart as RechartsAreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const cryptoData = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 45879.23,
    change: 2.4,
    marketCap: '876.5B',
    volume: '32.1B',
    balance: 0.42,
    value: 19269.27,
    color: '#F7931A',
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 2456.78,
    change: -1.2,
    marketCap: '286.9B',
    volume: '14.5B',
    balance: 3.5,
    value: 8598.73,
    color: '#627EEA',
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    price: 98.45,
    change: 5.7,
    marketCap: '39.2B',
    volume: '3.8B',
    balance: 25,
    value: 2461.25,
    color: '#00FFA3',
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.52,
    change: -0.8,
    marketCap: '18.1B',
    volume: '1.2B',
    balance: 1500,
    value: 780.00,
    color: '#0033AD',
  },
];

// Chart data
const chartData = [
  { name: 'Jan', btc: 38000, eth: 2200, ada: 0.45, sol: 80 },
  { name: 'Feb', btc: 42000, eth: 2400, ada: 0.48, sol: 85 },
  { name: 'Mar', btc: 40000, eth: 2350, ada: 0.46, sol: 82 },
  { name: 'Apr', btc: 41500, eth: 2500, ada: 0.51, sol: 90 },
  { name: 'May', btc: 43000, eth: 2600, ada: 0.54, sol: 95 },
  { name: 'Jun', btc: 40500, eth: 2300, ada: 0.49, sol: 88 },
  { name: 'Jul', btc: 42500, eth: 2400, ada: 0.52, sol: 92 },
  { name: 'Aug', btc: 44000, eth: 2450, ada: 0.50, sol: 94 },
  { name: 'Sep', btc: 45000, eth: 2400, ada: 0.51, sol: 96 },
  { name: 'Oct', btc: 45500, eth: 2420, ada: 0.52, sol: 97 },
  { name: 'Nov', btc: 45800, eth: 2450, ada: 0.52, sol: 98 },
  { name: 'Dec', btc: 45879, eth: 2456, ada: 0.52, sol: 98.45 },
];

const portfolioDistribution = [
  { name: 'Bitcoin', value: 19269.27, color: '#F7931A' },
  { name: 'Ethereum', value: 8598.73, color: '#627EEA' },
  { name: 'Solana', value: 2461.25, color: '#00FFA3' },
  { name: 'Cardano', value: 780.00, color: '#0033AD' },
];

const Crypto: React.FC = () => {
  // Calculate portfolio total
  const portfolioTotal = portfolioDistribution.reduce((acc, item) => acc + item.value, 0);

  return (
    <MainLayout>
      <PageTransition>
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Crypto</h1>
            <p className="text-muted-foreground">Diversifiez votre stratégie patrimoniale avec les cryptomonnaies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Valeur Portefeuille</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{portfolioTotal.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</div>
                <div className="flex items-center mt-1 text-green-500 text-sm">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>+2.4%</span>
                  <span className="text-muted-foreground ml-1">dernières 24h</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Bitcoin Dominance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">62.1%</div>
                <div className="flex items-center mt-1 text-green-500 text-sm">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>+0.5%</span>
                  <span className="text-muted-foreground ml-1">dernières 24h</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Market Cap Total</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.87T$</div>
                <div className="flex items-center mt-1 text-green-500 text-sm">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>+1.2%</span>
                  <span className="text-muted-foreground ml-1">dernières 24h</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Exposition Crypto/Immo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8.5%</div>
                <div className="flex items-center mt-1 text-amber-500 text-sm">
                  <span>Recommandé: 5-10%</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>Évolution du marché</CardTitle>
                  <Tabs defaultValue="btc" className="w-auto">
                    <TabsList className="h-8">
                      <TabsTrigger value="btc" className="text-xs px-2 py-1">BTC</TabsTrigger>
                      <TabsTrigger value="eth" className="text-xs px-2 py-1">ETH</TabsTrigger>
                      <TabsTrigger value="sol" className="text-xs px-2 py-1">SOL</TabsTrigger>
                      <TabsTrigger value="ada" className="text-xs px-2 py-1">ADA</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsAreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorBtc" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#F7931A" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#F7931A" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                      <Tooltip />
                      <Area type="monotone" dataKey="btc" stroke="#F7931A" fillOpacity={1} fill="url(#colorBtc)" />
                    </RechartsAreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Répartition du portefeuille</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {portfolioDistribution.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div 
                            className="w-3 h-3 rounded-full mr-2" 
                            style={{ backgroundColor: item.color }}
                          />
                          <span>{item.name}</span>
                        </div>
                        <span>{((item.value / portfolioTotal) * 100).toFixed(1)}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full" 
                          style={{ 
                            width: `${(item.value / portfolioTotal) * 100}%`,
                            backgroundColor: item.color 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 space-y-2">
                  <Button variant="outline" className="w-full flex items-center justify-center">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Rebalancer
                  </Button>
                  <Button variant="outline" className="w-full flex items-center justify-center">
                    <Settings className="mr-2 h-4 w-4" />
                    Stratégie
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="portfolio" className="mb-8">
            <TabsList>
              <TabsTrigger value="portfolio">Mon portefeuille</TabsTrigger>
              <TabsTrigger value="market">Marché</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="simulation">Simulation</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>Actifs cryptos</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Plus className="mr-1 h-4 w-4" />
                    Ajouter
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <RefreshCw className="mr-1 h-4 w-4" />
                    Actualiser
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 md:grid-cols-8 text-sm p-3 border-b bg-muted/40">
                  <div className="col-span-2">Actif</div>
                  <div className="text-right">Prix</div>
                  <div className="text-right">24h %</div>
                  <div className="hidden md:block text-right">Capitalisation</div>
                  <div className="hidden md:block text-right">Volume</div>
                  <div className="text-right">Solde</div>
                  <div className="text-right">Valeur</div>
                </div>
                
                {cryptoData.map((crypto) => (
                  <div key={crypto.id} className="grid grid-cols-6 md:grid-cols-8 text-sm p-3 border-b hover:bg-muted/20 transition-colors duration-200">
                    <div className="col-span-2 flex items-center">
                      <div 
                        className="w-8 h-8 mr-2 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${crypto.color}20` }}
                      >
                        <div 
                          className="w-6 h-6 rounded-full"
                          style={{ backgroundColor: crypto.color }}
                        />
                      </div>
                      <div>
                        <div className="font-medium">{crypto.name}</div>
                        <div className="text-xs text-muted-foreground">{crypto.symbol}</div>
                      </div>
                    </div>
                    <div className="text-right">${crypto.price.toLocaleString('fr-FR')}</div>
                    <div className={`text-right ${crypto.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {crypto.change >= 0 ? '+' : ''}{crypto.change}%
                    </div>
                    <div className="hidden md:block text-right">${crypto.marketCap}</div>
                    <div className="hidden md:block text-right">${crypto.volume}</div>
                    <div className="text-right">{crypto.balance} {crypto.symbol}</div>
                    <div className="text-right">${crypto.value.toLocaleString('fr-FR')}</div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Dernière mise à jour: il y a 2 minutes
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Wallet className="mr-1 h-4 w-4" />
                  Connecter Wallet
                </Button>
                <Button variant="outline" size="sm">
                  <AreaChart className="mr-1 h-4 w-4" />
                  Analyser
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </PageTransition>
    </MainLayout>
  );
};

export default Crypto;
