'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Approach', href: '#approach' },
  { label: 'Selected Outcomes', href: '#outcomes' },
  { label: 'Design Principles', href: '#principles' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B1628]/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
          aria-label="Back to top"
        >
          {/* Paper plane icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white opacity-80 group-hover:opacity-100 transition-opacity"
          >
            <path
              d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-white text-sm leading-tight">
            <div className="font-semibold font-heading">Christian</div>
            <div className="font-normal opacity-80">Cabanillas</div>
          </div>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleNav(item.href)}
                className="relative text-white/80 hover:text-white text-sm font-body transition-colors duration-200 group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300 ease-out" />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0B1628]/98 backdrop-blur-sm border-t border-white/10"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className="text-white/80 hover:text-white text-base font-body transition-colors w-full text-left py-2"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
