import Reveal from '../Reveal'
import { profile, links } from '../../data/content'

const SOCIALS = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'GitHub', href: links.github },
  { label: 'LinkedIn', href: links.linkedin },
  { label: 'TradingView', href: links.tradingview },
  { label: 'Instagram', href: links.instagram },
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate/60">
      <div className="mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-28">
        <Reveal>
          <span className="label">Contact</span>
          <h2 className="mt-4 font-display text-4xl text-cloud sm:text-6xl">
            Let's build something.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block font-mono text-lg text-ash underline decoration-silver/40 underline-offset-4 transition-colors hover:text-cloud"
          >
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={0.12}>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.14em] text-silver transition-colors hover:text-cloud"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-16 border-t border-slate/40 pt-6">
          <p className="font-mono text-[0.68rem] text-steel">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
