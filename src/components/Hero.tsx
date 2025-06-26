import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroData = siteConfig.hero || {};
  const siteData = siteConfig.site || {};
  
  return (
    <section className="min-h-screen flex items-center pt-16 px-4 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
              {heroData.title || "Desenvolvedor Full Stack"}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
              {heroData.description || "Transformando ideias em experiências digitais impressionantes com foco em design e funcionalidade."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
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
            <div className="mt-16 hidden md:block animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full animate-bounce"
                onClick={() => scrollToSection('about')}
              >
                <ArrowDown />
              </Button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-end animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/20 blur-lg"></div>
              <img 
                src={heroData.image || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"} 
                alt={heroData.title || "Developer working"} 
                className="rounded-lg relative z-10 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
