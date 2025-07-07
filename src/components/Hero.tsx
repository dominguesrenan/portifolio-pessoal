import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

const Hero = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const heroData = siteConfig.hero || {};
    const siteData = siteConfig.site || {};

    return (
        <section className="flex min-h-screen items-center bg-gradient-to-br from-background to-secondary/30 px-4 pt-16">
            <div className="container mx-auto">
                <div className="grid items-center gap-10 md:grid-cols-2">
                    <div className="text-center md:text-left">
                        <h1
                            className="mb-6 animate-fade-in text-4xl font-bold leading-tight opacity-0 md:text-6xl"
                            style={{ animationDelay: '0.2s' }}
                        >
                            {heroData.title || 'Desenvolvedor Full Stack'}
                        </h1>
                        <p
                            className="mb-8 animate-fade-in text-lg text-muted-foreground opacity-0 md:text-xl"
                            style={{ animationDelay: '0.4s' }}
                        >
                            {heroData.description ||
                                'Transformando ideias em experiências digitais impressionantes com foco em design e funcionalidade.'}
                        </p>
                        <div
                            className="flex animate-fade-in flex-col justify-center gap-4 opacity-0 sm:flex-row md:justify-start"
                            style={{ animationDelay: '0.6s' }}
                        >
                            {heroData.buttons?.map((button: any, index: number) => (
                                <Button
                                    key={index}
                                    size="lg"
                                    variant={button.type === 'primary' ? 'default' : 'outline'}
                                    onClick={() => {
                                        if (button.link?.startsWith('#')) {
                                            scrollToSection(button.link.substring(1));
                                        } else if (button.link) {
                                            window.open(button.link, '_blank');
                                        }
                                    }}
                                >
                                    {button.text}
                                </Button>
                            )) || (
                                <>
                                    <Button size="lg" onClick={() => scrollToSection('projects')}>
                                        Ver Projetos
                                    </Button>
                                    <Button variant="outline" size="lg">
                                        <Download className="mr-2 h-4 w-4" />
                                        Download CV
                                    </Button>
                                </>
                            )}
                        </div>
                        <div
                            className="mt-16 hidden animate-fade-in opacity-0 md:block"
                            style={{ animationDelay: '0.8s' }}
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                className="animate-bounce rounded-full"
                                onClick={() => scrollToSection('about')}
                            >
                                <ArrowDown />
                            </Button>
                        </div>
                    </div>

                    <div
                        className="hidden animate-fade-in justify-end opacity-0 md:flex"
                        style={{ animationDelay: '0.6s' }}
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 rounded-full bg-primary/20 blur-lg"></div>
                            <img
                                src={
                                    heroData.image ||
                                    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
                                }
                                alt={heroData.title || 'Developer working'}
                                className="relative z-10 rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
