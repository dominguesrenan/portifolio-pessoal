
import { useState, useEffect } from "react";
import { Project } from "@/components/ProjectsSection";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Layout, Image, Link as LinkIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Lista expandida de projetos para a galeria
const allProjects: Project[] = [
  {
    id: 1,
    title: "E-commerce Responsivo",
    description: "Plataforma de e-commerce completa com carrinho, checkout e sistema de pagamento.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "web",
    link: "#"
  },
  {
    id: 2,
    title: "Aplicativo Móvel",
    description: "Aplicativo iOS e Android desenvolvido com React Native para gestão de tarefas.",
    image: "https://images.unsplash.com/photo-1481887328591-3e277530862e",
    category: "mobile",
    link: "#"
  },
  {
    id: 3,
    title: "Dashboard Analítico",
    description: "Painel administrativo com gráficos e relatórios para análise de dados em tempo real.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "web",
    link: "#"
  },
  {
    id: 4,
    title: "Sistema de Gestão",
    description: "Sistema completo para gerenciamento de estoque, vendas e clientes.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    category: "web",
    link: "#"
  },
  {
    id: 5,
    title: "Aplicativo de Delivery",
    description: "Aplicativo de entrega de comida com rastreamento em tempo real.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    category: "mobile",
    link: "#"
  },
  {
    id: 6,
    title: "Site Institucional",
    description: "Site corporativo com múltiplas páginas e formulário de contato.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    category: "web",
    link: "#"
  },
  {
    id: 7,
    title: "Aplicativo de Finanças",
    description: "Aplicativo para controle de finanças pessoais com gráficos e relatórios.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    category: "mobile",
    link: "#"
  },
  {
    id: 8,
    title: "Blog Responsivo",
    description: "Blog com sistema de gerenciamento de conteúdo e comentários.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    category: "web",
    link: "#"
  },
  {
    id: 9,
    title: "Rede Social",
    description: "Aplicativo de rede social com perfis, postagens e mensagens.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0",
    category: "web",
    link: "#"
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);
  const [isViewGrid, setIsViewGrid] = useState<boolean>(true);
  
  useEffect(() => {
    setFilteredProjects(
      activeCategory === "all" 
      ? allProjects 
      : allProjects.filter(project => project.category === activeCategory)
    );
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
                <Image className="text-primary" />
                Galeria de Projetos
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore todos os projetos que desenvolvi, desde aplicações web até aplicativos móveis.
              </p>
              <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={activeCategory === "all" ? "default" : "outline"}
                  onClick={() => setActiveCategory("all")}
                  className="capitalize"
                >
                  Todos
                </Button>
                <Button
                  variant={activeCategory === "web" ? "default" : "outline"}
                  onClick={() => setActiveCategory("web")}
                  className="capitalize"
                >
                  Web
                </Button>
                <Button
                  variant={activeCategory === "mobile" ? "default" : "outline"}
                  onClick={() => setActiveCategory("mobile")}
                  className="capitalize"
                >
                  Mobile
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant={isViewGrid ? "default" : "outline"}
                  size="icon"
                  onClick={() => setIsViewGrid(true)}
                >
                  <Layout size={18} />
                </Button>
                <Button 
                  variant={!isViewGrid ? "default" : "outline"}
                  size="icon"
                  onClick={() => setIsViewGrid(false)}
                >
                  <Image size={18} />
                </Button>
              </div>
            </div>

            {isViewGrid ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                          <LinkIcon size={16} />
                          Ver Projeto
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/projects/${project.id}`}>Detalhes</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="md:col-span-1">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                          <p className="text-muted-foreground mb-4">{project.description}</p>
                          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-sm">
                            {project.category === "web" ? "Desenvolvimento Web" : "Desenvolvimento Mobile"}
                          </div>
                        </div>
                        <div className="flex gap-4 mt-4">
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                              <LinkIcon size={16} />
                              Ver Projeto
                            </a>
                          </Button>
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/projects/${project.id}`}>Detalhes</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
            
            <div className="text-center mt-10">
              <Button asChild>
                <Link to="/">Voltar para Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
