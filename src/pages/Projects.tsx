import { useState, useEffect } from "react";
import { Project } from "@/components/ProjectsSection";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layout, Image, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

// Lista de projetos importada do arquivo projects.ts

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] =
    useState<Project[]>(projects);
  const [isViewGrid, setIsViewGrid] = useState<boolean>(true);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory, projects]);

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
                Explore todos os projetos que desenvolvi, desde aplicações web
                até aplicativos móveis.
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
                  <Card
                    key={project.id}
                    className="overflow-hidden group hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink size={16} />
                          Ver Projeto
                        </a>
                      </Button>
                      {/* <Button variant="ghost" size="sm" asChild>
                        <a
                          href={`/projects/${project.id}`}
                          className="flex items-center gap-1"
                        >
                          <ExternalLink size={16} />
                          Detalhes
                        </a>
                      </Button>
                      */}
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
                          <h3 className="text-2xl font-bold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {project.description}
                          </p>
                          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-sm">
                            {project.category === "web"
                              ? "Desenvolvimento Web"
                              : "Desenvolvimento Mobile"}
                          </div>
                        </div>
                        <div className="flex gap-4 mt-4">
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              <ExternalLink size={16} />
                              Ver Projeto
                            </a>
                          </Button>
                          <Button variant="ghost" size="sm" asChild>
                            <a
                              href={`/projects/${project.id}`}
                              className="flex items-center gap-1"
                            >
                              <ExternalLink size={16} />
                              Detalhes
                            </a>
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
                <a href="/" className="flex items-center gap-1">
                  <ExternalLink size={16} />
                  Voltar para Home
                </a>
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
