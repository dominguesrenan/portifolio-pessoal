
export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  percentage: number;
  category: 'frontend' | 'backend' | 'design' | 'infraestructure' | 'other';
}

export const skills: Skill[] = [
  {
    name: "HTML",
    level: "expert",
    percentage: 95,
    category: "frontend"
  },
  {
    name: "CSS",
    level: "advanced",
    percentage: 85,
    category: "frontend"
  },
  {
    name: "Sass/Scss",
    level: "advanced",
    percentage: 85,
    category: "frontend"
  },
  {
    name: "JavaScript",
    level: "advanced",
    percentage: 80,
    category: "frontend"
  },
  {
    name: "Vue.js",
    level: "intermediate",
    percentage: 75,
    category: "frontend"
  },
  {
    name: "React",
    level: "intermediate",
    percentage: 75,
    category: "frontend"
  },
  {
    name: "TypeScript",
    level: "intermediate",
    percentage: 70,
    category: "frontend"
  },
  {
    name: "Node.js",
    level: "intermediate",
    percentage: 65,
    category: "backend"
  },
  {
    name: "Express",
    level: "beginner",
    percentage: 60,
    category: "backend"
  },
  {
    name: "PHP 8",
    level: "beginner",
    percentage: 60,
    category: "backend"
  },
  {
    name: "Laravel",
    level: "beginner",
    percentage: 60,
    category: "backend"
  },
  {
    name: "MongoDB",
    level: "beginner",
    percentage: 55,
    category: "backend"
  },
  {
    name: "MySQL",
    level: "beginner",
    percentage: 55,
    category: "backend"
  },
  {
    name: "Python",
    level: "intermediate",
    percentage: 70,
    category: "backend"
  },
  {
    name: "Docker",
    level: "intermediate",
    percentage: 70,
    category: "infraestructure"
  },
  {
    name: "Apache",
    level: "intermediate",
    percentage: 70,
    category: "infraestructure"
  },
  {
    name: "Nginx",
    level: "intermediate",
    percentage: 70,
    category: "infraestructure"
  },
  {
    name: "UI/UX Design",
    level: "advanced",
    percentage: 80,
    category: "design"
  },
  {
    name: "Figma",
    level: "intermediate",
    percentage: 65,
    category: "design"
  },
  {
    name: "Git",
    level: "advanced",
    percentage: 80,
    category: "other"
  }
];
