import { Award } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface BadgeItemProps {
  title: string;
  description: string;
  earned: boolean;
  position: { x: number; y: number };
}

const BadgeItem = ({ title, description, earned, position }: BadgeItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="absolute cursor-pointer"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all",
                earned
                  ? "bg-gradient-warm border-accent shadow-lg animate-pulse"
                  : "bg-muted border-muted-foreground/20 grayscale"
              )}
            >
              <Award className={cn("h-6 w-6", earned ? "text-accent-foreground" : "text-muted-foreground")} />
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-center">
            <p className="font-semibold">{title}</p>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default BadgeItem;
