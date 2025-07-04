import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skill } from "@/data/skills";
import { useState, useEffect } from "react";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const bgColorClass = `bg-skill-${skill.level}`;

  useEffect(() => {
    // Delayed animation when the component is mounted
    const timeout = setTimeout(
      () => {
        setIsVisible(true);
      },
      100 * (index % 4),
    );

    return () => clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    // Animate the percentage when visible
    if (isVisible) {
      const timeout = setTimeout(() => {
        setAnimatedPercentage(skill.percentage);
      }, 200);

      return () => clearTimeout(timeout);
    }

    return undefined;
  }, [isVisible, skill.percentage]);

  return (
    <Card
      className={`border hover:shadow-md transition-all duration-300 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between items-center text-lg">
          <span>{skill.name}</span>
          {/* <span className="text-sm text-muted-foreground">{animatedPercentage}%</span> */}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* <div className="skill-bar">
          <div 
            className={`skill-progress ${bgColorClass}`}
            style={{ width: `${animatedPercentage}%` }}
          />
        </div> */}
        <p className="mt-2 text-sm text-muted-foreground capitalize">
          {skill.level}
        </p>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
