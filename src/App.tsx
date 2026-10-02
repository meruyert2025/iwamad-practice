import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import { Footer } from './components/Footer';
import type { Skill } from './components/SkillBadge';
import meruAvatar from './assets/Meru.jpeg';

function App() {
  const studentSkills: Skill[] = [
    { id: 1, name: 'TypeScript', category: 'frontend' },
    { id: 2, name: 'React', category: 'frontend' },
    { id: 3, name: 'Node.js', category: 'backend' },
    { id: 4, name: 'PostgreSQL', category: 'backend' },
    { id: 5, name: 'Git', category: 'tools' },
  ];

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col justify-between items-center text-slate-900 font-sans">
      <Header
        title="Student Portfolio"
        subtitle="IWaMAD Course — Week 03 Practice"
      />

      <main className="flex-grow flex items-center justify-center p-6 w-full">
        <ProfileCard
          fullName="Meruyert Abdigaliyeva"
          specialization="IT Management Student"
          university="Kazakh-British Technical University"
          summary="Interested in distributed systems, web architectures, and cloud services. Currently mastering full-stack web development with TypeScript."
          avatarUrl={meruAvatar}
          skills={studentSkills}
        />
      </main>

      <Footer year={2026} contactEmail="m_abdigaliyeva@kbtu.kz" />
    </div>
  );
}

export default App;