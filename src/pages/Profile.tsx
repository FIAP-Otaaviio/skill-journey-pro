import { MessageSquare, Target, Lightbulb, Users, Brain, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SkillRadarChart from "@/components/profile/SkillRadarChart";
import SoftSkillCard from "@/components/profile/SoftSkillCard";

const Profile = () => {
  const skillData = [
    { skill: "Atendimento", value: 85, fullMark: 100 },
    { skill: "Organização", value: 75, fullMark: 100 },
    { skill: "Análise Lógica", value: 70, fullMark: 100 },
    { skill: "Resiliência", value: 90, fullMark: 100 },
    { skill: "Criatividade", value: 80, fullMark: 100 },
    { skill: "Liderança", value: 65, fullMark: 100 },
  ];

  const softSkills = [
    {
      icon: MessageSquare,
      title: "Comunicação Eficaz",
      description: "Capacidade excepcional de transmitir ideias claramente e criar conexões significativas.",
    },
    {
      icon: Target,
      title: "Resolução de Problemas",
      description: "Abordagem analítica e criativa para enfrentar desafios complexos.",
    },
    {
      icon: Lightbulb,
      title: "Pensamento Criativo",
      description: "Habilidade de gerar soluções inovadoras e pensar fora da caixa.",
    },
    {
      icon: Users,
      title: "Trabalho em Equipe",
      description: "Colaboração efetiva e capacidade de construir relacionamentos sólidos.",
    },
    {
      icon: Brain,
      title: "Adaptabilidade",
      description: "Flexibilidade mental para se ajustar rapidamente a novas situações.",
    },
    {
      icon: Heart,
      title: "Inteligência Emocional",
      description: "Consciência e gestão eficaz de emoções próprias e alheias.",
    },
  ];

  return (
    <div className="container max-w-7xl px-4 py-8 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <Avatar className="h-28 w-28 border-4 border-primary shadow-card">
          <AvatarImage src="https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-foreground mb-3 tracking-tight">Meu Skill DNA</h1>
          <p className="text-lg text-muted-foreground font-medium">
            Seu perfil único de habilidades e competências profissionais
          </p>
        </div>
        <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-bold text-base px-8 text-white">
          Editar Skill DNA
        </Button>
      </div>

      {/* Radar Chart Section */}
      <Card className="shadow-card border-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-3xl font-extrabold">Mapeamento de Habilidades</CardTitle>
          <p className="text-base text-muted-foreground mt-2">
            Visualização completa do seu perfil de competências
          </p>
        </CardHeader>
        <CardContent className="pt-6">
          <SkillRadarChart data={skillData} />
          <p className="text-center text-sm text-muted-foreground mt-6 italic">
            Baseado em suas experiências profissionais e avaliações
          </p>
        </CardContent>
      </Card>

      {/* Soft Skills Section */}
      <div>
        <h2 className="text-3xl font-extrabold text-foreground mb-8 tracking-tight">Minhas Soft Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((skill) => (
            <SoftSkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
