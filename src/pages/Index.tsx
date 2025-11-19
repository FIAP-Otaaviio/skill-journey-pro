import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, TrendingUp, Trophy, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container max-w-7xl px-4 py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-foreground">
          Bem-vindo ao <span className="bg-gradient-primary bg-clip-text text-transparent">Skill Swap</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Requalifique-se para o futuro. Descubra seu DNA de habilidades e construa uma carreira à prova do tempo.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/profile">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white font-semibold">
              Começar Agora
            </Button>
          </Link>
          <Link to="/careers">
            <Button size="lg" variant="outline">
              Explorar Carreiras
            </Button>
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Sparkles, title: "Skill DNA", desc: "Análise profunda de suas habilidades" },
          { icon: TrendingUp, title: "Match Inteligente", desc: "Carreiras personalizadas para você" },
          { icon: Zap, title: "Gamificação", desc: "Aprenda de forma divertida e eficaz" },
          { icon: Trophy, title: "Oportunidades", desc: "Vagas exclusivas para você" },
        ].map((feature, i) => (
          <Card key={i} className="hover:shadow-card transition-all">
            <CardContent className="p-6 text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;
