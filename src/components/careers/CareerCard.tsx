import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface CareerCardProps {
  title: string;
  icon: LucideIcon;
  compatibility: number;
  salary: string;
  demand: "Alta" | "Média" | "Baixa";
  onClick: () => void;
}

const CareerCard = ({ title, icon: Icon, compatibility, salary, demand, onClick }: CareerCardProps) => {
  const demandColor = {
    Alta: "bg-secondary text-secondary-foreground",
    Média: "bg-highlight text-highlight-foreground",
    Baixa: "bg-muted text-muted-foreground",
  };

  return (
    <Card className="group hover:shadow-card transition-all hover:scale-105 cursor-pointer" onClick={onClick}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="rounded-xl bg-gradient-primary p-3 group-hover:scale-110 transition-transform">
            <Icon className="h-8 w-8 text-primary-foreground" />
          </div>
          <Badge className={demandColor[demand]}>
            {demand} demanda
          </Badge>
        </div>
        <CardTitle className="mt-4 text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">Compatibilidade</span>
            <span className="text-sm font-bold text-secondary">{compatibility}%</span>
          </div>
          <Progress value={compatibility} className="h-2" />
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-sm text-muted-foreground">Média Salarial</span>
          <span className="font-semibold text-foreground">{salary}</span>
        </div>

        <Button className="w-full" variant="outline">
          Ver Detalhes
        </Button>
      </CardContent>
    </Card>
  );
};

export default CareerCard;
