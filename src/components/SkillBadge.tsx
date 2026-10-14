export interface Skill {
  id: number;
  name: string;
  category: 'frontend' | 'backend' | 'tools';
}

interface SkillBadgeProps {
  skill: Skill;
}

export const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
      {skill.name}
    </span>
  );
};