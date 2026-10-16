import { Card } from './ui/Card'
import { LikeButton } from './LikeButton'
import type { Skill } from './SkillBadge'
import { SkillBadge } from './SkillBadge'

export interface ProfileCardProps {
  fullName: string
  specialization: string
  university: string
  summary: string
  avatarUrl: string
  skills: Skill[]
}

export function ProfileCard({
  fullName,
  specialization,
  university,
  summary,
  avatarUrl,
  skills,
}: ProfileCardProps) {
  return (
    <Card className="max-w-sm mx-auto text-center shadow-lg">
      <img
        className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-emerald-500 mb-4"
        src={avatarUrl}
        alt={fullName}
      />
      <h2 className="text-xl font-bold">{fullName}</h2>
      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1">{specialization}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{university}</p>
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{summary}</p>

      <div className="flex flex-wrap justify-center gap-1.5 mb-6">
        {skills.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>

      <LikeButton />
    </Card>
  )
}