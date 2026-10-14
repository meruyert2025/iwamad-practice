import { useLikes } from '../context/LikesContext'
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
  // Используем глобальное состояние лайков
  const { likes, addLike } = useLikes()

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-slate-800 p-6 text-center border border-slate-200 dark:border-slate-700">
      <img
        className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-emerald-500 mb-4"
        src={avatarUrl}
        alt={fullName}
      />
      <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">{fullName}</h2>
      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1">{specialization}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{university}</p>
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{summary}</p>

      <div className="flex flex-wrap justify-center gap-1.5 mb-6">
        {skills.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>

      <button
        onClick={addLike}
        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-xl transition duration-200 flex items-center justify-center gap-2"
      >
        <span>♥ Like</span>
        <span className="bg-pink-700 px-2 py-0.5 rounded-full text-xs">{likes}</span>
      </button>
    </div>
  )
}