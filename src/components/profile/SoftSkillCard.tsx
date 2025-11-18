import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SoftSkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SoftSkillCard = ({ icon: Icon, title, description }: SoftSkillCardProps) => {
  return (
    <Card className="transition-all hover:shadow-card hover:scale-105">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-gradient-primary p-3">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SoftSkillCard;
