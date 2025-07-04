import { User } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const AboutSection = () => {
  const about = siteConfig.about;
  const projects = siteConfig.projects?.items || [];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <User className="text-primary" />
            {about.title || "Sobre Mim"}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={
                about.image ||
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              }
              alt={about.title || "Foto profissional"}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              {about.subtitle || "Olá, sou Renan Domingues"}
            </h3>
            <p className="text-muted-foreground">
              {about.paragraph1 ||
                "Desenvolvedor Full Stack com mais de 5 anos de experiência criando aplicações web e móveis. Minha paixão é transformar ideias complexas em interfaces elegantes e funcionais."}
            </p>
            <p className="text-muted-foreground">
              {about.paragraph2 ||
                "Ao longo da minha carreira, trabalhei em diversos projetos, desde aplicações corporativas até startups inovadoras. Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades para oferecer as melhores soluções."}
            </p>
            <p className="text-muted-foreground">
              {about.paragraph3 ||
                "Trabalho com tecnologias modernas como React com TypeScript, Tailwind CSS, Laravel, Node.js, além de possuir experiência com Docker, nginx e automações de build e deploy. Prezo por uma arquitetura limpa, componentes reutilizáveis e foco total na experiência do usuário."}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              {about.values && about.values.length > 0 ? (
                about.values.map((value: any, idx: number) => (
                  <div key={idx} className="px-4 py-2 bg-primary/10 rounded-md">
                    <span className="font-bold">{value.title}</span>
                    <p className="text-xs text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))
              ) : (
                <>
                  <div className="px-4 py-2 bg-primary/10 rounded-md">
                    <span className="font-bold">+ 50</span>
                    <p className="text-xs text-muted-foreground">
                      Projetos Completos
                    </p>
                  </div>
                  <div className="px-4 py-2 bg-primary/10 rounded-md">
                    <span className="font-bold">+ 30</span>
                    <p className="text-xs text-muted-foreground">
                      Clientes Satisfeitos
                    </p>
                  </div>
                  <div className="px-4 py-2 bg-primary/10 rounded-md">
                    <span className="font-bold">+ 5</span>
                    <p className="text-xs text-muted-foreground">
                      Anos de Experiência
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Projetos */}
        {projects.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Projetos em Destaque
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 flex-1 flex flex-col">
                    <h4 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.technologies.map(
                          (tech: string, tIdx: number) => (
                            <span
                              key={tIdx}
                              className="bg-primary/10 text-primary text-xs px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ),
                        )}
                      </div>
                    )}
                    <div className="mt-auto flex gap-2">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline text-xs"
                        >
                          Ver Projeto
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground underline text-xs"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
