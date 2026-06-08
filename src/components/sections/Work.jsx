import Reveal from '../Reveal'
import SpotlightCard from '../reactbits/SpotlightCard'
import { projects } from '../../data/content'

const FEATURED = new Set(['traciora', 'pii'])

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Card({ p }) {
  const clickable = Boolean(p.href)
  const Wrapper = clickable ? 'a' : 'div'
  const wrapperProps = clickable
    ? { href: p.href, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper {...wrapperProps} className={`group block h-full ${FEATURED.has(p.id) ? 'md:col-span-2' : ''}`}>
      <SpotlightCard className="flex h-full flex-col rounded-card border border-slate bg-graphite/60 p-6 transition-colors duration-300 group-hover:border-silver/40 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <span className="label">{p.kind}</span>
          {p.tag && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-silver/25 bg-silver/10 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-wider text-ash">
              <span className="h-1.5 w-1.5 rounded-full bg-ash" />
              {p.tag}
            </span>
          )}
        </div>

        <h3 className="mt-3 flex items-center gap-2 font-display text-2xl text-cloud sm:text-[1.7rem]">
          {p.name}
          {clickable && <span className="text-silver group-hover:text-cloud"><Arrow /></span>}
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-silver">{p.blurb}</p>

        {p.metrics && (
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {p.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-mono text-xl text-cloud">{m.value}</div>
                <div className="font-mono text-[0.65rem] uppercase tracking-wider text-silver">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto" />

        {p.status && (
          <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ash/80">
            {p.status}
          </p>
        )}

        {p.stack && (
          <div className="mt-5 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-slate bg-night/50 px-2 py-1 font-mono text-[0.65rem] text-silver"
              >
                {s}
              </span>
            ))}
          </div>
        )}
      </SpotlightCard>
    </Wrapper>
  )
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-28">
      <Reveal>
        <span className="label">Selected work</span>
        <h2 className="mt-3 font-display text-3xl text-cloud sm:text-4xl">
          Things I've built &amp; researched
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 0.08} className={FEATURED.has(p.id) ? 'md:col-span-2' : ''}>
            <Card p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
