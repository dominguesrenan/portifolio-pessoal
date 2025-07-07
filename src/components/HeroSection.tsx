import { siteConfig } from '@/data/site-config';
import { Button, buttonVariants } from './ui/button';
import { MoveRight, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import Section from './Section';

const HeroSection = () => {
    const { hero } = siteConfig;

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleButtonClick = (button: any) => {
        if (button.link?.startsWith('#')) {
            scrollToSection(button.link.substring(1));
        } else if (button.link) {
            window.open(button.link, '_blank');
        }
    };

    return (
        <Section id="home" className="-mt-20 pb-20 pt-28">
            <div className="container mx-auto grid items-center gap-12 md:grid-cols-2">
                <div className="text-center md:text-left">
                    <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-6xl">
                        {hero.title}
                    </h1>
                    <p className="mb-8 text-lg text-muted-foreground">{hero.subtitle}</p>
                    <p className="mb-8">{hero.description}</p>
                    <div className="flex justify-center gap-4 md:justify-start">
                        {hero.buttons?.map((button, index) => (
                            <Button
                                key={index}
                                variant={button.type === 'primary' ? 'default' : 'outline'}
                                onClick={() => handleButtonClick(button)}
                            >
                                {button.text}
                                {button.type === 'primary' && <MoveRight className="ml-2" />}
                                {button.type === 'secondary' && <Download className="mr-2" />}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <img
                        src={hero.image}
                        alt={hero.title}
                        className="w-full rounded-lg shadow-2xl"
                    />
                </div>
            </div>
        </Section>
    );
};

export default HeroSection;
