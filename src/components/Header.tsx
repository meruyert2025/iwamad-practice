import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'
import logo from '../assets/logo.svg'

interface HeaderProps {
  title?: string
  subtitle?: string
}

export function Header({ title = 'Student Portfolio', subtitle = 'IwAMaD Course - Week 05' }: HeaderProps) {
  const { likes } = useLikes()

  return (
    <header className="p-4 bg-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="" width={32} height={32} />
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
          {subtitle && <p className="text-xs text-slate-400">{subtitle}</p>}
        </div>
      </div>
      <nav className="flex gap-4 items-center flex-wrap justify-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'active-nav-link font-bold underline' : 'hover:underline text-slate-200'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? 'active-nav-link font-bold underline' : 'hover:underline text-slate-200'
          }
        >
          Skills
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'active-nav-link font-bold underline' : 'hover:underline text-slate-200'
          }
        >
          Contact
        </NavLink>
        <span className="ml-2 bg-slate-700 px-2 py-1 rounded text-sm text-pink-400 font-semibold">
          ♥ {likes}
        </span>
      </nav>
    </header>
  )
}