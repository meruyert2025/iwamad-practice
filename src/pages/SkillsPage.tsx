import { SkillBadge } from '../components/SkillBadge'
import type { Skill } from '../components/SkillBadge'

export function SkillsPage() {
  const studentSkills: Skill[] = [
    { id: 1, name: 'TypeScript', category: 'frontend' },
    { id: 2, name: 'React', category: 'frontend' },
    { id: 3, name: 'Node.js', category: 'backend' },
    { id: 4, name: 'PostgreSQL', category: 'backend' },
    { id: 5, name: 'Git', category: 'tools' },
  ]

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Technologies & Skills</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {studentSkills.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  )
}