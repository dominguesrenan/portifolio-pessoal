export interface Skill {
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    percentage: number;
    category: 'frontend' | 'backend' | 'design' | 'infraestructure' | 'other';
}

export const skills: Skill[] = [
    {
        name: 'HTML',
        level: 'Avançado',
        percentage: 95,
        category: 'frontend',
    },
    {
        name: 'CSS',
        level: 'Avançado',
        percentage: 85,
        category: 'frontend',
    },
    {
        name: 'Sass/Scss',
        level: 'Avançado',
        percentage: 85,
        category: 'frontend',
    },
    {
        name: 'JavaScript (ES6+)',
        level: 'Avançado',
        percentage: 80,
        category: 'frontend',
    },
    {
        name: 'TypeScript',
        level: 'Avançado',
        percentage: 80,
        category: 'frontend',
    },
    {
        name: 'React',
        level: 'Intermediário',
        percentage: 75,
        category: 'frontend',
    },
    {
        name: 'Vue.js',
        level: 'Intermediário',
        percentage: 75,
        category: 'frontend',
    },
    {
        name: 'Tailwind CSS',
        level: 'Intermediário',
        percentage: 75,
        category: 'frontend',
    },
    {
        name: 'Shadcn UI',
        level: 'Intermediário',
        percentage: 75,
        category: 'frontend',
    },
    {
        name: 'Vite',
        level: 'Intermediário',
        percentage: 75,
        category: 'frontend',
    },
    {
        name: 'Responsividade (Mobile First)',
        level: 'Avançado',
        percentage: 75,
        category: 'frontend',
    },
    {
        name: 'PHP 8+',
        level: 'Avançado',
        percentage: 60,
        category: 'backend',
    },
    {
        name: 'Laravel 10+',
        level: 'Avançado',
        percentage: 60,
        category: 'backend',
    },
    {
        name: 'Node.js',
        level: 'Avançado',
        percentage: 65,
        category: 'backend',
    },
    {
        name: 'Express.js',
        level: 'Intermediário',
        percentage: 60,
        category: 'backend',
    },
    {
        name: 'MySQL',
        level: 'Avançado',
        percentage: 55,
        category: 'backend',
    },
    {
        name: 'PostgreSQL',
        level: 'Intermediário',
        percentage: 55,
        category: 'backend',
    },
    {
        name: 'MongoDB',
        level: 'Avançado',
        percentage: 55,
        category: 'backend',
    },
    {
        name: 'REST APIs',
        level: 'Avançado',
        percentage: 70,
        category: 'backend',
    },
    {
        name: 'Docker',
        level: 'Avançado',
        percentage: 70,
        category: 'infraestructure',
    },
    {
        name: 'Docker Compose',
        level: 'Avançado',
        percentage: 70,
        category: 'infraestructure',
    },
    {
        name: 'Nginx',
        level: 'Avançado',
        percentage: 70,
        category: 'infraestructure',
    },
    {
        name: 'Apache',
        level: 'Intermediário',
        percentage: 70,
        category: 'infraestructure',
    },
    {
        name: 'Kubernetes (k8s)',
        level: 'Iniciante',
        percentage: 70,
        category: 'infraestructure',
    },
    {
        name: 'CI/CD (Deploy Automatizado)',
        level: 'Intermediário',
        percentage: 70,
        category: 'infraestructure',
    },
    {
        name: 'UI/UX Design',
        level: 'Intermediário',
        percentage: 80,
        category: 'design',
    },
    {
        name: 'Figma',
        level: 'Intermediário',
        percentage: 65,
        category: 'design',
    },
    {
        name: 'Git',
        level: 'Avançado',
        percentage: 80,
        category: 'other',
    },
    {
        name: 'ESLint / Prettier',
        level: 'Avançado',
        percentage: 80,
        category: 'other',
    },
    {
        name: 'Webpack / Vite',
        level: 'Avançado',
        percentage: 80,
        category: 'other',
    },
    {
        name: 'Jira / Trello',
        level: 'Avançado',
        percentage: 80,
        category: 'other',
    },
    {
        name: 'Integração com APIs REST/GraphQL',
        level: 'Avançado',
        percentage: 80,
        category: 'other',
    },
    {
        name: 'Testes (Vitest / Jest)',
        level: 'Intermediário',
        percentage: 80,
        category: 'other',
    },
];
