import { Briefcase, MapPin, DollarSign, Clock, Star, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Analista de Dados Junior",
      company: "Tech Solutions",
      location: "São Paulo, SP",
      salary: "R$ 4.000 - R$ 6.000",
      type: "CLT",
      match: 85,
      unlocked: true,
      trending: true,
      posted: "2 dias atrás",
    },
    {
      id: 2,
      title: "Desenvolvedor Python",
      company: "StartupX",
      location: "Remoto",
      salary: "R$ 5.000 - R$ 8.000",
      type: "PJ",
      match: 78,
      unlocked: true,
      trending: true,
      posted: "5 dias atrás",
    },
    {
      id: 3,
      title: "Especialista em BI",
      company: "DataCorp",
      location: "Rio de Janeiro, RJ",
      salary: "R$ 7.000 - R$ 10.000",
      type: "CLT",
      match: 92,
      unlocked: true,
      trending: false,
      posted: "1 semana atrás",
    },
    {
      id: 4,
      title: "Cientista de Dados",
      company: "AI Labs",
      location: "Remoto",
      salary: "R$ 9.000 - R$ 14.000",
      type: "PJ",
      match: 65,
      unlocked: false,
      trending: false,
      posted: "3 dias atrás",
    },
  ];

  const handleApply = (jobTitle: string, unlocked: boolean) => {
    if (unlocked) {
      toast.success("Candidatura enviada!", {
        description: `Sua aplicação para ${jobTitle} foi enviada com sucesso.`,
      });
    } else {
      toast.error("Vaga bloqueada", {
        description: "Complete mais módulos para desbloquear esta vaga.",
      });
    }
  };

  return (
    <div className="container max-w-7xl px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Oportunidades</h1>
          <p className="text-muted-foreground">Vagas personalizadas para seu Skill DNA</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90">
          <Briefcase className="mr-2 h-4 w-4" />
          Meu Perfil Profissional
        </Button>
      </div>

      {/* Career Progress Alert */}
      <Card className="bg-gradient-glass backdrop-blur-glass border-primary/30 shadow-glass">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-primary/20 p-3">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-foreground mb-2">Continue Progredindo!</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Complete mais 15% da jornada "Analista de Dados" para desbloquear 3 novas vagas premium.
              </p>
              <Progress value={75} className="h-2 mb-2" />
              <p className="text-xs text-muted-foreground">75% concluído</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Vagas Disponíveis", value: "24", icon: Briefcase, color: "primary" },
          { label: "Match Médio", value: "82%", icon: Star, color: "accent" },
          { label: "Aplicações", value: "7", icon: TrendingUp, color: "secondary" },
          { label: "Vagas Bloqueadas", value: "8", icon: Clock, color: "muted" },
        ].map((stat, index) => (
          <Card key={index} className="shadow-card">
            <CardContent className="p-4 flex items-center gap-3">
              <div className={`rounded-lg bg-${stat.color}/10 p-2`}>
                <stat.icon className={`h-5 w-5 text-${stat.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 gap-4">
        {jobs.map((job) => (
          <Card
            key={job.id}
            className={`hover:shadow-card transition-all ${
              !job.unlocked ? "opacity-60" : ""
            }`}
          >
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Company Avatar */}
                <Avatar className="h-16 w-16 rounded-xl border-2 border-primary/20">
                  <AvatarFallback className="rounded-xl bg-gradient-primary text-white">
                    {job.company.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>

                {/* Job Info */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg text-foreground">{job.title}</h3>
                        {job.trending && (
                          <Badge variant="secondary" className="bg-accent/10 text-accent border-0">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Em Alta
                          </Badge>
                        )}
                        {!job.unlocked && (
                          <Badge variant="secondary" className="bg-muted">
                            Bloqueada
                          </Badge>
                        )}
                      </div>
                      <p className="text-foreground font-medium">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="h-5 w-5 text-primary fill-primary" />
                        <span className="text-xl font-bold text-primary">{job.match}%</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Match</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {job.salary}
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.posted}
                    </div>
                  </div>

                  {!job.unlocked && (
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-sm text-muted-foreground">
                        Complete mais 25% da jornada para desbloquear esta vaga
                      </p>
                      <Progress value={75} className="h-1 mt-2" />
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button
                      className="bg-gradient-primary hover:opacity-90"
                      disabled={!job.unlocked}
                      onClick={() => handleApply(job.title, job.unlocked)}
                    >
                      Aplicar com Skill DNA
                    </Button>
                    <Button variant="outline">Ver Detalhes</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Help Card */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Como funciona o Match Inteligente?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>✨ Analisamos seu Skill DNA e comparamos com os requisitos da vaga</p>
          <p>🎯 Vagas com +70% de match são desbloqueadas automaticamente</p>
          <p>📊 Seu portfólio de projetos da plataforma é enviado junto com a candidatura</p>
          <p>🚀 Empresas parceiras priorizam candidatos da Skill Swap</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Jobs;
