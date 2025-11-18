import { useState } from "react";
import { Database, Truck, Code, LineChart, Palette, Stethoscope } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import CareerCard from "@/components/careers/CareerCard";
import CareerDetailModal from "@/components/careers/CareerDetailModal";

interface Career {
  title: string;
  icon: any;
  compatibility: number;
  salary: string;
  demand: "Alta" | "Média" | "Baixa";
  description: string;
  requiredSkills: string[];
  growthRate: string;
  averageTime: string;
}

const Careers = () => {
  const navigate = useNavigate();
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const careers: Career[] = [
    {
      title: "Analista de Dados",
      icon: Database,
      compatibility: 85,
      salary: "R$ 6.500 - 12.000",
      demand: "Alta",
      description: "Profissional responsável por coletar, processar e analisar grandes volumes de dados para gerar insights estratégicos que apoiam a tomada de decisões empresariais.",
      requiredSkills: ["SQL", "Python", "Excel Avançado", "Análise Estatística", "Power BI"],
      growthRate: "+23% ao ano",
      averageTime: "8-12 meses",
    },
    {
      title: "Especialista em Logística Digital",
      icon: Truck,
      compatibility: 78,
      salary: "R$ 5.800 - 10.500",
      demand: "Alta",
      description: "Gerencia e otimiza cadeias de suprimento utilizando tecnologias digitais, garantindo eficiência operacional e redução de custos.",
      requiredSkills: ["Gestão de Supply Chain", "ERP Systems", "Análise de Processos", "Excel", "Power BI"],
      growthRate: "+18% ao ano",
      averageTime: "6-10 meses",
    },
    {
      title: "Desenvolvedor Full Stack",
      icon: Code,
      compatibility: 72,
      salary: "R$ 7.000 - 15.000",
      demand: "Alta",
      description: "Desenvolve aplicações web completas, dominando tanto o frontend quanto o backend, criando soluções digitais escaláveis.",
      requiredSkills: ["JavaScript", "React", "Node.js", "Banco de Dados", "Git"],
      growthRate: "+25% ao ano",
      averageTime: "12-18 meses",
    },
    {
      title: "Analista de Marketing Digital",
      icon: LineChart,
      compatibility: 80,
      salary: "R$ 5.000 - 9.500",
      demand: "Alta",
      description: "Planeja e executa estratégias de marketing digital, analisando métricas e otimizando campanhas para maximizar resultados.",
      requiredSkills: ["Google Analytics", "SEO/SEM", "Mídias Sociais", "Copywriting", "Google Ads"],
      growthRate: "+20% ao ano",
      averageTime: "6-9 meses",
    },
    {
      title: "Designer UX/UI",
      icon: Palette,
      compatibility: 75,
      salary: "R$ 6.000 - 12.000",
      demand: "Média",
      description: "Cria experiências digitais intuitivas e visualmente atraentes, focando na satisfação e usabilidade do usuário.",
      requiredSkills: ["Figma", "Adobe XD", "Design Thinking", "Prototipagem", "User Research"],
      growthRate: "+17% ao ano",
      averageTime: "8-12 meses",
    },
    {
      title: "Gestor de Saúde Digital",
      icon: Stethoscope,
      compatibility: 68,
      salary: "R$ 8.000 - 14.000",
      demand: "Média",
      description: "Lidera a implementação de soluções tecnológicas na área da saúde, integrando sistemas e melhorando o atendimento ao paciente.",
      requiredSkills: ["Gestão Hospitalar", "Sistemas de Saúde", "Regulamentação", "Análise de Dados", "Liderança"],
      growthRate: "+15% ao ano",
      averageTime: "10-15 meses",
    },
  ];

  const handleCareerClick = (career: Career) => {
    setSelectedCareer(career);
    setModalOpen(true);
  };

  const handleStartJourney = () => {
    toast.success("Jornada iniciada!", {
      description: `Preparamos um roadmap personalizado para ${selectedCareer?.title}`,
    });
    setModalOpen(false);
    setTimeout(() => navigate("/roadmap"), 500);
  };

  return (
    <div className="container max-w-7xl px-4 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Carreiras do Futuro</h1>
        <p className="text-lg text-muted-foreground">
          Descubra oportunidades que combinam com seu perfil de habilidades
        </p>
      </div>

      {/* Career Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {careers.map((career) => (
          <CareerCard
            key={career.title}
            title={career.title}
            icon={career.icon}
            compatibility={career.compatibility}
            salary={career.salary}
            demand={career.demand}
            onClick={() => handleCareerClick(career)}
          />
        ))}
      </div>

      {/* Career Detail Modal */}
      <CareerDetailModal
        career={selectedCareer}
        open={modalOpen}
        onOpenChange={setModalOpen}
        onStartJourney={handleStartJourney}
      />
    </div>
  );
};

export default Careers;
