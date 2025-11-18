import { LucideIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, DollarSign, Users, Clock } from "lucide-react";

interface CareerDetail {
  title: string;
  icon: LucideIcon;
  compatibility: number;
  salary: string;
  demand: "Alta" | "Média" | "Baixa";
  description: string;
  requiredSkills: string[];
  growthRate: string;
  averageTime: string;
}

interface CareerDetailModalProps {
  career: CareerDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStartJourney: () => void;
}

const CareerDetailModal = ({ career, open, onOpenChange, onStartJourney }: CareerDetailModalProps) => {
  if (!career) return null;

  const Icon = career.icon;
  const demandColor = {
    Alta: "bg-secondary text-secondary-foreground",
    Média: "bg-highlight text-highlight-foreground",
    Baixa: "bg-muted text-muted-foreground",
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4 mb-4">
            <div className="rounded-xl bg-gradient-primary p-4">
              <Icon className="h-10 w-10 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl mb-2">{career.title}</DialogTitle>
              <Badge className={demandColor[career.demand]}>
                {career.demand} demanda
              </Badge>
            </div>
          </div>
          <DialogDescription className="text-base">
            {career.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Compatibilidade */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-foreground">Compatibilidade de Skills</span>
              <span className="text-lg font-bold text-secondary">{career.compatibility}%</span>
            </div>
            <Progress value={career.compatibility} className="h-3" />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
              <DollarSign className="h-5 w-5 text-accent" />
              <div>
                <p className="text-xs text-muted-foreground">Média Salarial</p>
                <p className="font-semibold text-foreground">{career.salary}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
              <TrendingUp className="h-5 w-5 text-secondary" />
              <div>
                <p className="text-xs text-muted-foreground">Crescimento</p>
                <p className="font-semibold text-foreground">{career.growthRate}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
              <Clock className="h-5 w-5 text-highlight" />
              <div>
                <p className="text-xs text-muted-foreground">Tempo Médio</p>
                <p className="font-semibold text-foreground">{career.averageTime}</p>
              </div>
            </div>
          </div>

          {/* Required Skills */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Users className="h-4 w-4" />
              Habilidades Necessárias
            </h3>
            <div className="flex flex-wrap gap-2">
              {career.requiredSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <Button 
            onClick={onStartJourney} 
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
            size="lg"
          >
            Iniciar Jornada
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CareerDetailModal;
