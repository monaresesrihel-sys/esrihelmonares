import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

const pages = { home: Home, about: About, projects: Projects, resume: Resume, contact: Contact }

export default function App() {
  const [page, setPage] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem('theme') === 'dark'
    } catch {
      return false
    }
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {
      /* storage unavailable, ignore */
    }
  }, [dark])

  const go = (id) => {
    setPage(id)
    setMenuOpen(false)
    window.scrollTo({ top: 0 })
  }

  const Page = pages[page]

  return (
    <div className="min-h-screen lg:pl-64">
      <Sidebar
        page={page}
        go={go}
        open={menuOpen}
        setOpen={setMenuOpen}
        dark={dark}
        toggleDark={() => setDark((d) => !d)}
      />
      <main key={page} className="mx-auto max-w-4xl animate-rise px-5 py-10 motion-reduce:animate-none sm:px-8 lg:py-16">
        <Page go={go} />
      </main>
    </div>
  )
}
