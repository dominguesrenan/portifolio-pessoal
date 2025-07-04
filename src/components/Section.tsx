import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  className?: string;
}

const Section = ({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionProps) => {
  return (
    <section id={id} className={cn("py-20 px-4", className)}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-6"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
