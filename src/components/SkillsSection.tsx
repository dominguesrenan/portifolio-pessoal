import { useState } from 'react';
import { skills } from '@/data/skills';
import SkillCard from './SkillCard';
import { Button } from '@/components/ui/button';
import Section from './Section';
import { siteConfig } from '@/data/site-config';

const SkillsSection = () => {
    const categories = [...new Set(skills.map((skill) => skill.category))];
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredSkills =
        activeCategory === 'all'
            ? skills
            : skills.filter((skill) => skill.category === activeCategory);

    return (
        <Section id="skills" title={siteConfig.skills.title} subtitle={siteConfig.skills.subtitle}>
            <div className="container mx-auto">
                <div className="mb-10 flex flex-wrap justify-center gap-2">
                    <Button
                        variant={activeCategory === 'all' ? 'default' : 'outline'}
                        onClick={() => setActiveCategory('all')}
                        className="capitalize"
                    >
                        Todos
                    </Button>
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={activeCategory === category ? 'default' : 'outline'}
                            onClick={() => setActiveCategory(category)}
                            className="capitalize"
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredSkills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default SkillsSection;
