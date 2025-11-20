import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  experience: z.string().min(1, "Selecione uma opção"),
  goal: z.string().min(1, "Selecione uma opção"),
  learningStyle: z.string().min(1, "Selecione uma opção"),
  availability: z.string().min(1, "Selecione uma opção"),
  motivation: z.string().min(1, "Selecione uma opção"),
  techInterest: z.string().min(1, "Selecione uma opção"),
  conflictManagement: z.string().min(1, "Selecione uma opção"),
  teamwork: z.string().min(1, "Selecione uma opção"),
  deadlinePressure: z.string().min(1, "Selecione uma opção"),
  feedbackReaction: z.string().min(1, "Selecione uma opção"),
  taskPriority: z.string().min(1, "Selecione uma opção"),
});

const Assessment = () => {
  const [step, setStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const { toast } = useToast();
  const totalSteps = 11;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      experience: "",
      goal: "",
      learningStyle: "",
      availability: "",
      motivation: "",
      techInterest: "",
      conflictManagement: "",
      teamwork: "",
      deadlinePressure: "",
      feedbackReaction: "",
      taskPriority: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setIsComplete(true);
    toast({
      title: "Diagnóstico concluído!",
      description: "Seu perfil foi analisado com sucesso.",
    });
  };

  const questions = [
    {
      id: "experience",
      title: "Qual é o seu nível de experiência em programação?",
      options: [
        { value: "beginner", label: "Iniciante - Nunca programei antes" },
        { value: "basic", label: "Básico - Já fiz alguns cursos introdutórios" },
        { value: "intermediate", label: "Intermediário - Tenho alguns projetos pessoais" },
        { value: "advanced", label: "Avançado - Trabalho profissionalmente na área" },
      ],
    },
    {
      id: "goal",
      title: "Qual é o seu principal objetivo?",
      options: [
        { value: "career-change", label: "Mudar de carreira" },
        { value: "improve-skills", label: "Aprimorar habilidades atuais" },
        { value: "side-projects", label: "Desenvolver projetos pessoais" },
        { value: "freelance", label: "Trabalhar como freelancer" },
      ],
    },
    {
      id: "learningStyle",
      title: "Como você prefere aprender?",
      options: [
        { value: "visual", label: "Visual - Vídeos e diagramas" },
        { value: "reading", label: "Leitura - Documentação e artigos" },
        { value: "hands-on", label: "Prática - Codando e fazendo projetos" },
        { value: "interactive", label: "Interativo - Comunidade e discussões" },
      ],
    },
    {
      id: "availability",
      title: "Quanto tempo você pode dedicar por semana?",
      options: [
        { value: "1-5", label: "1-5 horas" },
        { value: "5-10", label: "5-10 horas" },
        { value: "10-20", label: "10-20 horas" },
        { value: "20+", label: "Mais de 20 horas" },
      ],
    },
    {
      id: "motivation",
      title: "O que mais te motiva a aprender?",
      options: [
        { value: "salary", label: "Aumentar minha renda" },
        { value: "passion", label: "Paixão por tecnologia" },
        { value: "flexibility", label: "Flexibilidade de trabalho" },
        { value: "impact", label: "Criar impacto positivo" },
      ],
    },
    {
      id: "techInterest",
      title: "Qual área de tecnologia mais te interessa?",
      options: [
        { value: "web", label: "Desenvolvimento Web" },
        { value: "mobile", label: "Aplicativos Mobile" },
        { value: "data", label: "Ciência de Dados" },
        { value: "ai", label: "Inteligência Artificial" },
      ],
    },
    {
      id: "conflictManagement",
      title: "Um cliente (ou colega de outro setor) está muito irritado reclamando de um erro que não foi culpa sua. Como você reage?",
      options: [
        { value: "firm", label: "A) Explico firmemente que o erro não é meu e digo para ele falar com o responsável." },
        { value: "empathetic", label: "B) Escuto a reclamação até o fim, peço desculpas pelo transtorno (mesmo não sendo culpa minha) e ajudo a encontrar quem resolve." },
        { value: "ignore", label: "C) Ignoro a reclamação para não me estressar e continuo meu trabalho." },
      ],
    },
    {
      id: "teamwork",
      title: "Em um projeto em equipe, como você prefere trabalhar?",
      options: [
        { value: "leader", label: "Gosto de liderar e coordenar as atividades do grupo" },
        { value: "collaborative", label: "Prefiro colaborar igualmente e compartilhar responsabilidades" },
        { value: "independent", label: "Trabalho melhor sozinho, fazendo minha parte separadamente" },
        { value: "support", label: "Gosto de apoiar os outros e ajudar onde for necessário" },
      ],
    },
    {
      id: "deadlinePressure",
      title: "Você tem um prazo apertado e percebe que não vai conseguir entregar tudo. O que faz?",
      options: [
        { value: "communicate", label: "Comunico imediatamente e negocio prioridades ou prazos" },
        { value: "overtime", label: "Trabalho horas extras para tentar cumprir o prazo original" },
        { value: "partial", label: "Entrego o que consegui fazer e explico o motivo depois" },
        { value: "help", label: "Peço ajuda à equipe para dividir as tarefas" },
      ],
    },
    {
      id: "feedbackReaction",
      title: "Você recebe um feedback negativo sobre seu trabalho. Como reage?",
      options: [
        { value: "defensive", label: "Fico na defensiva e justifico minhas escolhas" },
        { value: "receptive", label: "Escuto com atenção, agradeço e busco melhorar" },
        { value: "demotivated", label: "Me sinto desmotivado e levo para o lado pessoal" },
        { value: "clarify", label: "Peço exemplos específicos para entender melhor o que melhorar" },
      ],
    },
    {
      id: "taskPriority",
      title: "Você tem várias tarefas urgentes ao mesmo tempo. Como decide o que fazer primeiro?",
      options: [
        { value: "impact", label: "Priorizo o que tem maior impacto no resultado final" },
        { value: "easy", label: "Faço primeiro as tarefas mais rápidas para diminuir a lista" },
        { value: "deadline", label: "Organizo por prazo, fazendo primeiro o que vence mais cedo" },
        { value: "ask", label: "Consulto meu líder ou equipe para definir prioridades juntos" },
      ],
    },
  ];

  const currentQuestion = questions[step - 1];
  const progress = (step / totalSteps) * 100;

  if (isComplete) {
    return (
      <div className="container py-8 px-4 max-w-4xl mx-auto">
        <Card className="border-2 border-primary">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-16 w-16 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold">Diagnóstico Concluído!</CardTitle>
            <CardDescription className="text-lg mt-4">
              Com base nas suas respostas, identificamos seu perfil de aprendizado.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-primary/10 rounded-lg p-6 space-y-4">
              <h3 className="font-semibold text-xl">Seu Perfil:</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Baseado nas suas respostas, recomendamos um caminho personalizado focado em aprendizado prático com recursos visuais e interativos.
                </p>
                <p className="text-muted-foreground">
                  Acesse a aba <span className="font-semibold text-foreground">Jornada</span> para ver seu roadmap personalizado.
                </p>
              </div>
            </div>
            <Button 
              onClick={() => {
                setIsComplete(false);
                setStep(1);
                form.reset();
              }}
              className="w-full bg-gradient-primary text-white font-semibold"
            >
              Refazer Diagnóstico
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-8 px-4 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 tracking-tight">Diagnóstico de Perfil</h1>
        <p className="text-muted-foreground text-lg">
          Responda algumas perguntas para personalizarmos sua experiência
        </p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-muted-foreground">Progresso</span>
          <span className="text-sm font-medium">
            {step} de {totalSteps}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{currentQuestion.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name={currentQuestion.id as any}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="space-y-3"
                      >
                        {currentQuestion.options.map((option) => (
                          <div
                            key={option.value}
                            className="flex items-center space-x-3 rounded-lg border border-border p-4 hover:bg-accent transition-colors"
                          >
                            <RadioGroupItem value={option.value} id={option.value} />
                            <FormLabel
                              htmlFor={option.value}
                              className="flex-1 cursor-pointer font-normal"
                            >
                              {option.label}
                            </FormLabel>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-4">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="flex-1"
                  >
                    Anterior
                  </Button>
                )}
                {step < totalSteps ? (
                  <Button
                    type="button"
                    onClick={() => {
                      const fieldName = currentQuestion.id as keyof z.infer<typeof formSchema>;
                      const value = form.getValues(fieldName);
                      if (value) {
                        setStep(step + 1);
                      } else {
                        form.setError(fieldName, { message: "Selecione uma opção" });
                      }
                    }}
                    className="flex-1 bg-gradient-primary text-white font-semibold"
                  >
                    Próxima
                  </Button>
                ) : (
                  <Button type="submit" className="flex-1 bg-gradient-primary text-white font-semibold">
                    Finalizar
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Assessment;
