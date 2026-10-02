import { useState } from 'react';
import type { Skill } from './SkillBadge';
import { SkillBadge } from './SkillBadge';

interface ProfileCardProps {
  fullName: string;
  specialization: string;
  university: string;
  summary: string;
  avatarUrl?: string;
  skills: Skill[];
}

export const ProfileCard = ({
  fullName,
  specialization,
  university,
  summary,
  avatarUrl,
  skills,
}: ProfileCardProps) => {
  const [likeCount, setLikeCount] = useState<number>(0);

  const handleLike = () => {
    setLikeCount((prev) => prev + 1);
  };

  return (
    <article className="bg-white rounded-xl shadow-md border border-slate-200 p-6 max-w-sm w-full text-center transition-all hover:shadow-lg">
      <div className="flex flex-col items-center">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={fullName}
            className="w-[120] h-[120] rounded-full object-cover mb-4 ring-2 ring-emerald-500 shadow-sm"
          />
        ) : (
          <div className="w-1 h-1 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xl mb-4">
            {fullName.charAt(0)}
          </div>
        )}

        <h2 className="text-xl font-bold text-slate-800">{fullName}</h2>
        <p className="text-sm font-medium text-emerald-600 mb-1">{specialization}</p>
        <p className="text-xs text-slate-400 mb-3">{university}</p>

        <p className="text-sm text-slate-600 mb-5 leading-relaxed">{summary}</p>

        <div className="w-full mb-5">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Technologies & Skills
          </h3>
          {skills.length > 0 ? (
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill) => (
                <SkillBadge key={skill.id} skill={skill} />
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-400 italic">No skills added yet.</p>
          )}
        </div>


        <button
          type="button"
          onClick={handleLike}
          className="w-full py-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <span>🔥 Support Profile</span>
          <span className="bg-emerald-800 text-white text-xs px-2 py-0.5 rounded-full">
            {likeCount}
          </span>
        </button>
      </div>
    </article>
  );
};