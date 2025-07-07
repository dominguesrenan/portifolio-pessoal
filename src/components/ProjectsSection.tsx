import { siteConfig } from '@/data/site-config';
import Section from './Section';
import '../styles/animations.css';
import { Button } from './ui/button';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
    const { projects } = siteConfig;

    return (
        <Section id="projects" title={projects.title} subtitle={projects.subtitle}>
            <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.items.map((project, index) => (
                    <div key={index} className="group overflow-hidden rounded-lg bg-secondary/30">
                        <div className="relative h-48 w-full overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="animate-scroll absolute inset-0 h-full w-full object-cover transition-transform"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                            <p className="mb-4 text-muted-foreground">{project.description}</p>
                            <div className="mb-4 flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="rounded-full bg-primary/10 px-2 py-1 text-xs font-bold text-primary"
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
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
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
