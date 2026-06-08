import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-slate/60 bg-night/70 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-base font-semibold uppercase tracking-[0.04em] text-cloud sm:text-xl"
        >
          DANIL<span className="font-light text-silver">.ZANOZIN</span>
        </a>
        <ul className="hidden items-center gap-1 sm:flex sm:gap-2">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="relative block px-3 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-silver transition-colors hover:text-cloud"
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-cloud"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
