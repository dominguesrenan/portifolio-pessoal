// Este arquivo será substituído automaticamente durante o build do site
// com os dados do content.json específicos de cada site

export const siteConfig = {
    site: {
        name: 'Meu Portifólio Pessoal',
        title: 'Portfolio Pessoal',
        description: 'Portfolio profissional criado com React e TypeScript',
        author: 'Desenvolvedor',
        keywords: 'portfolio, react, typescript, developer, frontend',
        logo: '/placeholder.svg',
        favicon: '/favicon.ico',
    },
    menu: [
        { label: 'Home', link: '/', type: 'internal' },
        { label: 'Sobre', link: '#about', type: 'anchor' },
        { label: 'Habilidades', link: '#skills', type: 'anchor' },
        { label: 'Projetos', link: '/projects', type: 'internal' },
        { label: 'Contato', link: '#contact', type: 'anchor' },
    ],
    hero: {
        title: 'Desenvolvedor Full Stack',
        subtitle: 'Criando experiências digitais incríveis',
        description:
            'Sou um desenvolvedor Full Stack focado em criar interfaces modernas, responsivas e soluções eficientes. Tenho experiência sólida em React, TypeScript, Laravel, Node.js e Docker, com domínio tanto no frontend quanto no backend e infraestrutura.',
        image: '/src/assets/images/hero.jpeg',
        buttons: [
            {
                text: 'Ver Projetos',
                link: '#projects',
                type: 'primary',
            },
            {
                text: 'Entre em Contato',
                link: '#contact',
                type: 'secondary',
            },
        ],
    },
    about: {
        title: 'Sobre Mim',
        subtitle: 'Olá, sou Renan Domingues',
        paragraph1:
            'Desenvolvedor Full Stack com mais de 5 anos de experiência em desenvolvimento web moderno.',
        paragraph2:
            'Minha especialidade é transformar ideias em aplicações robustas e visualmente atraentes. Com um perfil autodidata e focado em resultados, já atuei em projetos de e-commerce, sistemas administrativos e aplicações corporativas, sempre aplicando boas práticas, performance e design responsivo.',
        paragraph3:
            'Trabalho com tecnologias modernas como React com TypeScript, Tailwind CSS, Laravel, Node.js, além de possuir experiência com Docker, nginx e automações de build e deploy. Prezo por uma arquitetura limpa, componentes reutilizáveis e foco total na experiência do usuário.',
        image: '/src/assets/images/sobre_mim.jpeg',
        values: [
            {
                title: '+25',
                description: 'Clientes Satisfeitos',
            },
            {
                title: '+2',
                description: 'Projetos Completos',
            },
            {
                title: '+6',
                description: 'Anos de Experiência',
            },
            {
                title: '+25',
                description: 'Integrações',
            },
        ],
    },
    skills: {
        title: 'Minhas Habilidades',
        subtitle:
            'Estas são as tecnologias e ferramentas com as quais tenho trabalhado. Estou constantemente aprendendo e aprimorando minhas habilidades.',
        categories: ['frontend', 'backend', 'design', 'infraestructure', 'other'],
    },
    projects: {
        title: 'Projetos',
        subtitle: 'Alguns dos meus trabalhos',
        items: [
            {
                title: 'Portifólio Pessoal',
                description: 'Portifólio pessoal criado com React e TypeScript',
                image: '/src/assets/images/thumbnail_portifolio.png',
                technologies: [
                    'React',
                    'TypeScript',
                    'Tailwind CSS',
                    'Shadcn UI',
                    'Vite',
                    'Next-themes',
                    'TanStack Query',
                    'React Hook Form',
                    'Date-fns',
                    'Embla Carousel',
                    'Radix UI',
                    'Lucide React',
                    'Sonner',
                    'Input OTP',
                    'Docker',
                    'Nginx',
                    'ESLint',
                    'Prettier',
                ],
                link: 'https://github.com/dominguesrenan/portifolio-pessoal',
                github: 'https://github.com/dominguesrenan/portifolio-pessoal',
            },
            {
                title: 'Aplicativo Móvel',
                description:
                    'Aplicativo iOS e Android desenvolvido com React Native para gestão de tarefas.',
                image: '/src/assets/images/thumbnail_aplicativo.png',
                technologies: ['React Native', 'TypeScript', 'Firebase'],
                link: '#',
                github: '#',
            },
        ],
    },
    contact: {
        title: 'Entre em Contato',
        subtitle: 'Vamos trabalhar juntos',
        description:
            'Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato para conversarmos!',
        info: {
            email: 'renandomingues678.rd@gmail.com',
            phone: '(11) 99999-9999',
            location: 'Londrina, PR',
        },
        social: {
            github: 'https://github.com/dominguesrenan',
            twitter: 'https://x.com/pilacotv',
            linkedin: 'https://www.linkedin.com/in/renan-domingues-4808b2172/',
        },
    },
    footer: {
        description:
            'Sou um desenvolvedor Full Stack focado em criar interfaces modernas, responsivas e soluções eficientes. Tenho experiência sólida em React, TypeScript, Laravel, Node.js e Docker, com domínio tanto no frontend quanto no backend e infraestrutura.',
        links: [
            { label: 'Home', link: '/' },
            { label: 'Sobre', link: '#about' },
            { label: 'Projetos', link: '/projects' },
            { label: 'Contato', link: '#contact' },
        ],
    },
};
