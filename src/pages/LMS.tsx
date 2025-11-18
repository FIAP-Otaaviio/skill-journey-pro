import { Play, CheckCircle, BookOpen, Code, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const LMS = () => {
  const moduleProgress = 65;

  return (
    <div className="container max-w-7xl px-4 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Módulo: Lógica de Programação</h1>
            <p className="text-muted-foreground mt-1">Capítulo 3: Estruturas de Controle</p>
          </div>
          <Badge className="bg-gradient-primary text-white">Em Progresso</Badge>
        </div>

        <Card className="p-4 bg-gradient-glass backdrop-blur-glass border-primary/20">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-foreground">Progresso do Módulo</span>
            <span className="text-2xl font-bold text-primary">{moduleProgress}%</span>
          </div>
          <Progress value={moduleProgress} className="h-2" />
        </Card>
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Video Player */}
          <Card className="overflow-hidden shadow-glass">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Button size="lg" className="relative z-10 bg-primary hover:bg-primary/90 rounded-full h-16 w-16">
                  <Play className="h-8 w-8" />
                </Button>
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <Progress value={45} className="h-1 mb-2" />
                  <p className="text-sm text-white">12:34 / 28:00</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="transcript" className="w-full">
            <TabsList className="w-full bg-card">
              <TabsTrigger value="transcript" className="flex-1">
                <FileText className="h-4 w-4 mr-2" />
                Transcrição
              </TabsTrigger>
              <TabsTrigger value="practice" className="flex-1">
                <Code className="h-4 w-4 mr-2" />
                Praticar
              </TabsTrigger>
              <TabsTrigger value="notes" className="flex-1">
                <BookOpen className="h-4 w-4 mr-2" />
                Notas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="transcript" className="mt-4">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">[00:12]</p>
                    <p className="text-foreground">Estruturas de controle são fundamentais na programação...</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">[00:45]</p>
                    <p className="text-foreground">Existem três tipos principais: if/else, switch e loops...</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="practice" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="bg-muted rounded-lg p-4 font-mono text-sm mb-4">
                    <code className="text-foreground">
                      {'// Escreva um código que verifica se um número é par ou ímpar\n'}
                      {'function verificarParidade(numero) {\n'}
                      {'  // Seu código aqui\n'}
                      {'}'}
                    </code>
                  </div>
                  <Button className="w-full bg-gradient-primary">Executar Código</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notes" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-center py-8">
                    Nenhuma nota ainda. Adicione suas anotações durante o vídeo!
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Module Navigation */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Conteúdo do Módulo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                { title: "Introdução", duration: "5:20", completed: true },
                { title: "O que são estruturas?", duration: "8:45", completed: true },
                { title: "Estruturas de Controle", duration: "15:30", current: true },
                { title: "Loops e Iterações", duration: "12:00", completed: false },
                { title: "Quiz Final", duration: "10 perguntas", completed: false },
              ].map((item, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    item.current
                      ? "bg-primary/10 border-l-4 border-primary"
                      : "hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.completed ? (
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.duration}</p>
                    </div>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Next Module */}
          <Card className="bg-gradient-warm text-white shadow-card">
            <CardContent className="p-6">
              <p className="text-sm opacity-90 mb-2">Próximo Módulo</p>
              <h3 className="font-bold text-lg mb-4">Python Básico</h3>
              <Button variant="secondary" className="w-full">
                Visualizar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LMS;
