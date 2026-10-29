import { Tag } from './ui/Tag'

export interface Skill {
  id: number
  name: string
  category: 'frontend' | 'backend' | 'tools'
}

interface SkillBadgeProps {
  skill: Skill
}

export const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return <Tag label={skill.name} />
}