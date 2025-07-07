import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
    id: string;
    title: string;
    subtitle: string;
    children: ReactNode;
    className?: string;
}

const Section = ({ id, title, subtitle, children, className }: SectionProps) => {
    return (
        <section id={id} className={cn('px-4 py-20', className)}>
            <div className="container mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
                    <div className="mx-auto mt-6 h-1 w-20 bg-primary"></div>
                </div>
                {children}
            </div>
        </section>
    );
};

export default Section;
