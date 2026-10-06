import { Outlet } from 'react-router'
import  Header  from './Header'
import { Footer } from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <Footer year={2026} contactEmail="example@gmail.com" />
    </div>
  )
}