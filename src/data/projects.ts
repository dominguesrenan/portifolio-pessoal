export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  technologies?: string[];
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portifólio Pessoal",
    description: "Portifólio pessoal criado com React e TypeScript",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "web",
    link: "https://github.com/dominguesrenan/portifolio-pessoal",
    technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Vite",
        "Next-themes",
        "TanStack Query",
        "React Hook Form",
        "Date-fns",
        "Embla Carousel",
        "Radix UI",
        "Lucide React",
        "Sonner",
        "Input OTP",
        "Docker",
        "Nginx",
        "ESLint",
        "Prettier",
    ],
    github: "https://github.com/dominguesrenan/portifolio-pessoal"
  },
  {
    id: 2,
    title: "Aplicativo Móvel",
    description: "Aplicativo iOS e Android desenvolvido com React Native para gestão de tarefas.",
    image: "https://images.unsplash.com/photo-1481887328591-3e277530862e",
    category: "mobile",
    link: "#",
    technologies: ["React Native", "TypeScript", "Firebase"],
    github: "https://github.com/dominguesrenan/mobile-app"
  }
];