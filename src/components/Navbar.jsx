import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/websites', label: 'Websites' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 pt-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none"
    >
      {/* Floating Rounded Navbar Container */}
      <div
        className={`pointer-events-auto transition-all duration-300 rounded-2xl sm:rounded-3xl px-4 sm:px-6 py-2.5 sm:py-3 border flex items-center justify-between ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-slate-200/80 shadow-[0_10px_35px_rgba(15,23,42,0.1)]'
            : 'bg-white/85 backdrop-blur-lg border-slate-200/60 shadow-[0_4px_20px_rgba(15,23,42,0.05)]'
        }`}
      >
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3.5 group">
          <img
            src="/image.png"
            alt="Autofy.ai"
            className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div>
            <h1 className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 leading-none mb-1">
              AUTOFY AI
            </h1>
            <p className="text-xs text-slate-500 font-medium tracking-wide">
              Web Development Agency
            </p>
          </div>
        </Link>

        {/* Center Desktop Nav Bar - Capsule / Pill Tab Wrapper */}
        <nav className="hidden md:flex items-center bg-slate-100/80 p-1.5 rounded-full border border-slate-200/50 shadow-inner">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-5 py-2 rounded-full font-semibold text-base transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-md border border-slate-100 font-bold scale-[1.02]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/919392472134"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full font-semibold text-sm text-white transition-all duration-300 bg-slate-900 hover:bg-slate-800 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Let's Talk</span>
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-11 h-11 flex items-center justify-center rounded-2xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto md:hidden mt-2 bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-3xl p-5 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `py-3 px-5 rounded-2xl font-semibold text-base transition-all cursor-pointer ${
                      isActive
                        ? 'bg-teal-50 text-teal-700 font-bold border border-teal-100'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <a
                href="https://wa.me/919392472134"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-between py-3 px-5 rounded-2xl font-semibold text-base text-white bg-slate-900 shadow-md"
              >
                <span>Let's Talk</span>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
