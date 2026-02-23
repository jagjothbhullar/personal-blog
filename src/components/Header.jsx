import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        mixBlendMode: isHome && !scrolled && !menuOpen ? 'difference' : 'normal',
        background: scrolled || !isHome || menuOpen ? '#0a1628' : 'transparent',
      }}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-16 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="font-serif text-2xl font-bold text-white tracking-tight hover:opacity-70 transition-opacity"
        >
          JB
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/projects', label: 'Projects' },
            { to: '/blog', label: 'Insights' },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className="text-white text-[0.8rem] font-medium tracking-[0.1em] uppercase hover:opacity-60 transition-opacity"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="mailto:jagjothbhullar@gmail.com"
              className="text-gold text-[0.8rem] font-medium tracking-[0.1em] uppercase hover:opacity-60 transition-opacity"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy px-6 pb-6">
          <ul className="flex flex-col gap-4">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/projects', label: 'Projects' },
              { to: '/blog', label: 'Insights' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-white text-sm font-medium tracking-[0.1em] uppercase hover:opacity-60 transition-opacity"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="mailto:jagjothbhullar@gmail.com"
                className="text-gold text-sm font-medium tracking-[0.1em] uppercase hover:opacity-60 transition-opacity"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
