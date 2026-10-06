import { ProfileCard } from '../components/ProfileCard'

export default function HomePage() {
  const mySkills = [
    { id: 1, name: 'React', category: 'frontend' as const },
    { id: 2, name: 'TypeScript', category: 'frontend' as const },
  ]

  return (
    <div className="flex justify-center items-center py-8">
      <ProfileCard 
        fullName="Мое Имя"
        specialization="Frontend Developer"
        university="Мой Университет"
        summary="Привет! Я изучаю React и TypeScript."
        skills={mySkills}
      />
    </div>
  )
}