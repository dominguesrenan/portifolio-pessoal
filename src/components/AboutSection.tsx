import { User } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

const AboutSection = () => {
    const about = siteConfig.about;
    const projects = siteConfig.projects?.items || [];

    return (
        <section id="about" className="bg-secondary/30 px-4 py-20">
            <div className="container mx-auto">
                <div className="mb-10 text-center">
                    <h2 className="mb-4 flex items-center justify-center gap-2 text-3xl font-bold md:text-4xl">
                        <User className="text-primary" />
                        {about.title || 'Sobre Mim'}
                    </h2>
                    <div className="mx-auto h-1 w-20 bg-primary"></div>
                </div>

                <div className="grid items-center gap-10 md:grid-cols-2">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={
                                about.image ||
                                'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
                            }
                            alt={about.title || 'Foto profissional'}
                            className="h-auto w-full object-cover"
                        />
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">
                            {about.subtitle || 'Olá, sou Renan Domingues'}
                        </h3>
                        <p className="text-justify text-muted-foreground">
                            {about.paragraph1 ||
                                'Desenvolvedor Full Stack com mais de 5 anos de experiência criando aplicações web e móveis. Minha paixão é transformar ideias complexas em interfaces elegantes e funcionais.'}
                        </p>
                        <p className="text-justify text-muted-foreground">
                            {about.paragraph2 ||
                                'Ao longo da minha carreira, trabalhei em diversos projetos, desde aplicações corporativas até startups inovadoras. Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades para oferecer as melhores soluções.'}
                        </p>
                        <p className="text-justify text-muted-foreground">
                            {about.paragraph3 ||
                                'Trabalho com tecnologias modernas como React com TypeScript, Tailwind CSS, Laravel, Node.js, além de possuir experiência com Docker, nginx e automações de build e deploy. Prezo por uma arquitetura limpa, componentes reutilizáveis e foco total na experiência do usuário.'}
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            {about.values && about.values.length > 0 ? (
                                about.values.map((value: any, idx: number) => (
                                    <div key={idx} className="rounded-md bg-primary/10 px-4 py-2">
                                        <span className="font-bold">{value.title}</span>
                                        <p className="text-xs text-muted-foreground">
                                            {value.description}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <>
                                    <div className="rounded-md bg-primary/10 px-4 py-2">
                                        <span className="font-bold">+ 50</span>
                                        <p className="text-xs text-muted-foreground">
                                            Projetos Completos
                                        </p>
                                    </div>
                                    <div className="rounded-md bg-primary/10 px-4 py-2">
                                        <span className="font-bold">+ 30</span>
                                        <p className="text-xs text-muted-foreground">
                                            Clientes Satisfeitos
                                        </p>
                                    </div>
                                    <div className="rounded-md bg-primary/10 px-4 py-2">
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
            </div>
        </section>
    );
};

export default AboutSection;
