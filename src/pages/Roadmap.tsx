import { Code, BookOpen, Video, FileText, Trophy, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import RoadmapNode from "@/components/roadmap/RoadmapNode";
import BadgeItem from "@/components/roadmap/BadgeItem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";

const Roadmap = () => {
  const overallProgress = 45;

  const modules = [
    { title: "Introdução", icon: BookOpen, status: "completed" as const, position: { x: 15, y: 20 } },
    { title: "Lógica de Programação", icon: Code, status: "completed" as const, position: { x: 30, y: 35 } },
    { title: "Banco de Dados", icon: FileText, status: "current" as const, position: { x: 50, y: 30 } },
    { title: "Python Básico", icon: Code, status: "locked" as const, position: { x: 65, y: 45 } },
    { title: "Análise de Dados", icon: Video, status: "locked" as const, position: { x: 75, y: 25 } },
    { title: "Visualização", icon: Trophy, status: "locked" as const, position: { x: 85, y: 40 } },
  ];

  const badges = [
    { title: "Primeiro Passo", description: "Completou o primeiro módulo", earned: true, position: { x: 20, y: 60 } },
    { title: "Persistente", description: "5 dias consecutivos", earned: true, position: { x: 40, y: 70 } },
    { title: "Explorador", description: "Explorou 3 carreiras", earned: false, position: { x: 60, y: 65 } },
    { title: "Mestre", description: "Completou uma jornada", earned: false, position: { x: 80, y: 70 } },
  ];

  const handleModuleClick = (module: typeof modules[0]) => {
    if (module.status === "current") {
      toast.info("Abrindo módulo", {
        description: `Carregando conteúdo de ${module.title}...`,
      });
    } else if (module.status === "completed") {
      toast.success("Módulo concluído!", {
        description: "Você já completou este módulo. Quer revisar?",
      });
    }
  };

  return (
    <div className="container max-w-7xl px-4 py-8 space-y-8">
      {/* Header with Progress */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-4 border-secondary">
            <AvatarImage src="https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg" />
            <AvatarFallback>JN</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground">Minha Jornada Gamificada</h1>
            <p className="text-muted-foreground">Carreira: Analista de Dados</p>
          </div>
        </div>

        <Card className="p-6 bg-gradient-primary">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-primary-foreground">Progresso Geral</span>
            <span className="text-2xl font-bold text-primary-foreground">{overallProgress}%</span>
          </div>
          <Progress value={overallProgress} className="h-3 bg-primary-foreground/20" />
          <p className="text-sm text-primary-foreground/80 mt-2">3 de 6 módulos concluídos</p>
        </Card>
      </div>

      {/* Roadmap Trail */}
      <Card className="p-8 min-h-[600px] bg-muted/30 relative overflow-hidden">
        {/* Trail Path SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--secondary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
          <path
            d="M 15 20 Q 30 35, 50 30 T 75 25 T 85 40"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="4"
            strokeDasharray="8,4"
            opacity="0.5"
            transform="translate(0, 0) scale(1, 1)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Modules */}
        {modules.map((module) => (
          <RoadmapNode
            key={module.title}
            title={module.title}
            icon={module.icon}
            status={module.status}
            position={module.position}
            onClick={() => handleModuleClick(module)}
          />
        ))}

        {/* Badges */}
        {badges.map((badge) => (
          <BadgeItem
            key={badge.title}
            title={badge.title}
            description={badge.description}
            earned={badge.earned}
            position={badge.position}
          />
        ))}

        {/* Legend */}
        <div className="absolute bottom-4 right-4 bg-card border border-border rounded-lg p-4 shadow-card">
          <h3 className="font-semibold text-sm mb-2 text-foreground">Legenda</h3>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <span className="text-muted-foreground">Concluído</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-warm" />
              <span className="text-muted-foreground">Em andamento</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-muted" />
              <span className="text-muted-foreground">Bloqueado</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-3 h-3 text-accent" />
              <span className="text-muted-foreground">Badge conquistado</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 text-center">
          <Trophy className="h-8 w-8 mx-auto mb-2 text-accent" />
          <p className="text-2xl font-bold text-foreground">12</p>
          <p className="text-sm text-muted-foreground">Conquistas</p>
        </Card>
        <Card className="p-6 text-center">
          <Video className="h-8 w-8 mx-auto mb-2 text-secondary" />
          <p className="text-2xl font-bold text-foreground">28h</p>
          <p className="text-sm text-muted-foreground">Tempo de estudo</p>
        </Card>
        <Card className="p-6 text-center">
          <Award className="h-8 w-8 mx-auto mb-2 text-highlight" />
          <p className="text-2xl font-bold text-foreground">2</p>
          <p className="text-sm text-muted-foreground">Badges ganhos</p>
        </Card>
      </div>
    </div>
  );
};

export default Roadmap;
