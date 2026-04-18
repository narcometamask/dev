import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Process', path: '/process' },
  { label: 'Materials', path: '/materials' },
  { label: 'Contact', path: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'h-16 shadow-md' : 'h-20'
        }`}
      >
        <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 shrink-0">
            <span className="text-amber-500 font-heading font-bold text-xl tracking-tight">A2Z</span>
            <span className="text-navy font-heading font-medium text-xl tracking-tight">BuildCare</span>
            <span className="text-grey-500 font-heading text-[10px] font-medium ml-0.5 self-start mt-1">LTD</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-heading text-[13px] font-medium uppercase tracking-wider transition-colors duration-200 hover:text-navy ${
                  location.pathname === link.path ? 'text-navy' : 'text-charcoal'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all duration-200 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-heading text-sm font-medium uppercase tracking-wider px-6 py-3 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/25"
            >
              <Phone className="w-4 h-4" />
              Get Quote
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-navy"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-navy/40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-16 right-0 w-80 max-w-full bg-white shadow-xl h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col p-6 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-3 px-4 font-heading text-sm font-medium uppercase tracking-wider rounded transition-colors ${
                    location.pathname === link.path
                      ? 'text-navy bg-amber-50'
                      : 'text-charcoal hover:bg-grey-100 hover:text-navy'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-heading text-sm font-medium uppercase tracking-wider px-6 py-3 rounded transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                Get Quote
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
