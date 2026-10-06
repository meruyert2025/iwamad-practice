import { SkillBadge } from '../components/SkillBadge'

export default function SkillsPage() {
  const skills = [
    { id: 1, name: 'React', category: 'frontend' as const },
    { id: 2, name: 'TypeScript', category: 'frontend' as const },
    { id: 3, name: 'Tailwind CSS', category: 'frontend' as const },
    { id: 4, name: 'Git & GitHub', category: 'tools' as const },
  ]

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  )
}