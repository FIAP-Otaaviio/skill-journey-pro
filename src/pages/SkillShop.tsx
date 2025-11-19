import { Coins, Sparkles, Shield, User, Trophy, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";

const SkillShop = () => {
  const userCoins = 850;

  const shopItems = [
    {
      category: "Avatar",
      items: [
        { name: "Tema Cyberpunk", price: 150, icon: User, description: "Fundo futurista com neon" },
        { name: "Roupa Profissional", price: 100, icon: User, description: "Visual executivo" },
        { name: "Badge Especial", price: 200, icon: Trophy, description: "Mostre sua conquista" },
      ],
    },
    {
      category: "Boosts",
      items: [
        { name: "Seguro de Ofensiva", price: 300, icon: Shield, description: "Protege seu streak por 3 dias" },
        { name: "XP Duplo", price: 400, icon: Zap, description: "2x XP por 24 horas" },
        { name: "Acesso Antecipado", price: 500, icon: Sparkles, description: "Novos módulos antes de todos" },
      ],
    },
    {
      category: "Mentoria",
      items: [
        { name: "Sessão 30min", price: 600, icon: User, description: "Mentoria individual" },
        { name: "Revisão de Código", price: 400, icon: User, description: "Expert revisa seu projeto" },
      ],
    },
  ];

  const handlePurchase = (itemName: string, price: number) => {
    if (userCoins >= price) {
      toast.success("Compra realizada!", {
        description: `Você adquiriu ${itemName}`,
      });
    } else {
      toast.error("Skill Coins insuficientes", {
        description: "Complete mais módulos para ganhar coins!",
      });
    }
  };

  return (
    <div className="container max-w-7xl px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Skill Shop</h1>
          <p className="text-muted-foreground">Troque seus Skill Coins por recompensas</p>
        </div>
        <Card className="bg-gradient-primary text-white shadow-card">
          <CardContent className="p-4 flex items-center gap-3">
            <Coins className="h-8 w-8" />
            <div>
              <p className="text-sm opacity-90">Seus Skill Coins</p>
              <p className="text-2xl font-bold">{userCoins}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Item */}
      <Card className="bg-gradient-glass backdrop-blur-glass border-primary/30 shadow-glass">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-accent" />
            <Badge className="bg-accent text-accent-foreground">Destaque da Semana</Badge>
          </div>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Pacote Premium de Avatar</h2>
              <p className="text-muted-foreground mb-4">
                5 temas exclusivos + 10 acessórios + frame especial
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Coins className="h-5 w-5 text-accent" />
                  <span className="text-xl font-bold text-foreground">500</span>
                </div>
                <Button className="bg-gradient-warm hover:opacity-90 text-slate-900 font-bold">Comprar Agora</Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Avatar className="h-32 w-32 border-4 border-primary shadow-card">
                  <AvatarImage src="https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg" />
                  <AvatarFallback>PR</AvatarFallback>
                </Avatar>
                <div className="absolute -top-2 -right-2 bg-accent rounded-full p-2">
                  <Sparkles className="h-6 w-6 text-accent-foreground" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Shop Categories */}
      {shopItems.map((category) => (
        <div key={category.category}>
          <h2 className="text-2xl font-bold text-foreground mb-4">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.items.map((item, index) => (
              <Card key={index} className="hover:shadow-card transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="rounded-xl bg-gradient-primary p-3">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center gap-1">
                      <Coins className="h-4 w-4 text-accent" />
                      <span className="font-bold text-foreground">{item.price}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg mt-3">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handlePurchase(item.name, item.price)}
                  >
                    Comprar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* How to Earn */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Como Ganhar Skill Coins?</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          {[
            { icon: Trophy, text: "Complete módulos", coins: "+50" },
            { icon: Zap, text: "Faça quizzes perfeitos", coins: "+20" },
            { icon: Shield, text: "Mantenha seu streak", coins: "+10/dia" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <item.icon className="h-6 w-6 text-primary flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{item.text}</p>
                <p className="text-xs text-accent font-bold">{item.coins}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillShop;
