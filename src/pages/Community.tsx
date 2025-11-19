import { MessageSquare, Users, HelpCircle, TrendingUp, Coins } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Community = () => {
  const handleRequestHelp = () => {
    toast.info("Solicitação enviada", {
      description: "Um mentor será notificado em breve!",
    });
  };

  const discussions = [
    {
      id: 1,
      user: "Ana Silva",
      avatar: "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg",
      module: "Python Básico",
      question: "Como funciona o conceito de list comprehension?",
      replies: 5,
      coins: 20,
      trending: true,
    },
    {
      id: 2,
      user: "Carlos Santos",
      avatar: "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg",
      module: "Análise de Dados",
      question: "Qual biblioteca usar para visualização: Matplotlib ou Seaborn?",
      replies: 12,
      coins: 0,
      trending: true,
    },
    {
      id: 3,
      user: "Maria Costa",
      avatar: "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg",
      module: "Banco de Dados",
      question: "Diferença entre SQL e NoSQL na prática?",
      replies: 8,
      coins: 15,
      trending: false,
    },
  ];

  const topMentors = [
    { name: "João Mentor", helped: 156, avatar: "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg" },
    { name: "Patricia Expert", helped: 142, avatar: "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg" },
    { name: "Ricardo Pro", helped: 128, avatar: "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg" },
  ];

  return (
    <div className="container max-w-7xl px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Comunidade</h1>
          <p className="text-muted-foreground">Aprenda e colabore com outros profissionais</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90">
          <MessageSquare className="mr-2 h-4 w-4" />
          Nova Pergunta
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-card">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="rounded-xl bg-primary/10 p-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">2,847</p>
              <p className="text-sm text-muted-foreground">Membros Ativos</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="rounded-xl bg-accent/10 p-3">
              <MessageSquare className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">1,523</p>
              <p className="text-sm text-muted-foreground">Discussões</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="rounded-xl bg-secondary/10 p-3">
              <HelpCircle className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">892</p>
              <p className="text-sm text-muted-foreground">Perguntas Resolvidas</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search */}
          <Card className="shadow-card">
            <CardContent className="p-4">
              <Input placeholder="Buscar discussões..." className="w-full" />
            </CardContent>
          </Card>

          {/* Discussions */}
          <div className="space-y-4">
            {discussions.map((discussion) => (
              <Card key={discussion.id} className="hover:shadow-card transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage src={discussion.avatar} />
                      <AvatarFallback>{discussion.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold text-foreground">{discussion.user}</p>
                            {discussion.trending && (
                              <Badge variant="secondary" className="bg-accent/10 text-accent border-0">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                Trending
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{discussion.module}</p>
                        </div>
                        {discussion.coins > 0 && (
                          <div className="flex items-center gap-1 bg-accent/10 px-2 py-1 rounded-full">
                            <Coins className="h-4 w-4 text-accent" />
                            <span className="text-sm font-bold text-accent">{discussion.coins}</span>
                          </div>
                        )}
                      </div>
                      <h3 className="font-medium text-foreground mb-3">{discussion.question}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {discussion.replies} respostas
                        </span>
                        <Button variant="link" className="h-auto p-0 text-primary">
                          Ver discussão
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Request Help */}
          <Card className="bg-gradient-warm text-white shadow-card">
            <CardHeader>
              <CardTitle className="text-white">Precisa de Ajuda Urgente?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm opacity-90 mb-4">
                Gaste coins para obter ajuda prioritária de um mentor especializado.
              </p>
              <Button
                variant="secondary"
                className="w-full"
                onClick={handleRequestHelp}
              >
                <Coins className="mr-2 h-4 w-4" />
                Pedir Reforço (50 coins)
              </Button>
            </CardContent>
          </Card>

          {/* Top Mentors */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Top Mentores</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {topMentors.map((mentor, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex items-center gap-3 flex-1">
                    <Avatar className="h-10 w-10 border-2 border-primary/20">
                      <AvatarImage src={mentor.avatar} />
                      <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">{mentor.name}</p>
                      <p className="text-xs text-muted-foreground">{mentor.helped} pessoas ajudadas</p>
                    </div>
                  </div>
                  <Badge className="bg-primary text-white">#{index + 1}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* How it Works */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Como Funciona</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>💬 Faça perguntas relacionadas aos módulos</p>
              <p>🎁 Ofereça coins para respostas prioritárias</p>
              <p>⭐ Ajude outros e ganhe reputação</p>
              <p>🏆 Torne-se um Top Mentor</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;
