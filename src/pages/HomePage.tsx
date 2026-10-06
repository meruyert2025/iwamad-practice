import { ProfileCard } from '../components/ProfileCard'
import type { Skill } from '../components/SkillBadge'
import meruAvatar from '../assets/Meru.jpeg'

export function HomePage() {
  const studentSkills: Skill[] = [
    { id: 1, name: 'TypeScript', category: 'frontend' },
    { id: 2, name: 'React', category: 'frontend' },
    { id: 3, name: 'Node.js', category: 'backend' },
    { id: 4, name: 'PostgreSQL', category: 'backend' },
    { id: 5, name: 'Git', category: 'tools' },
  ]

  return (
    <div className="flex justify-center items-center p-6">
      <ProfileCard
        fullName="Meruyert Abdigaliyeva"
        specialization="IT Management Student"
        university="Kazakh-British Technical University"
        summary="Interested in distributed systems, web architectures, and cloud services. Currently mastering full-stack web development with TypeScript."
        avatarUrl={meruAvatar}
        skills={studentSkills}
      />
    </div>
  )
}