import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Download } from 'lucide-react'
import Logo from './Logo.jsx'
import { useTheme } from './ThemeContext.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/download', label: 'Download' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg shadow-purple-500/5 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center hover:scale-105 transition-transform">
          <Logo size={64} withText={false} />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? 'text-brand-purple-dark dark:text-brand-purple-light'
                    : 'text-gray-700 dark:text-gray-300 hover:text-brand-purple'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full gradient-bg-purple"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2.5 rounded-full glass hover:scale-110 transition-transform"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun className="w-4 h-4 text-brand-purple-light" />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon className="w-4 h-4 text-brand-purple-dark" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <Link
            to="/download"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white text-sm gradient-bg-purple shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60 hover:scale-105 transition-all"
          >
            <Download className="w-4 h-4" />
            Get App
          </Link>

          <button
            onClick={() => setOpen(v => !v)}
            className="lg:hidden p-2.5 rounded-full glass"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden glass mt-2 mx-4 rounded-2xl"
          >
            <div className="p-4 flex flex-col gap-1">
              {links.map(l => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg font-medium transition-all ${
                      isActive
                        ? 'bg-brand-purple/15 text-brand-purple-dark dark:text-brand-purple-light'
                        : 'hover:bg-brand-purple/10'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
