import { siteConfig } from "@/data/site-config";
import Section from "./Section";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const { projects } = siteConfig;

  return (
    <Section id="projects" title={projects.title} subtitle={projects.subtitle}>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.items.map((project, index) => (
          <div
            key={index}
            className="bg-secondary/30 rounded-lg overflow-hidden group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Projeto
                  </Button>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
