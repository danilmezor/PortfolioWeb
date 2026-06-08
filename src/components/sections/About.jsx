import Reveal from '../Reveal'
import { about } from '../../data/content'

export default function About() {
  return (
    <section className="mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <span className="label">About</span>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="mt-6 max-w-3xl font-display text-2xl leading-snug text-cloud sm:text-3xl">
          {about.lead}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl text-silver">{about.body}</p>
      </Reveal>
      <Reveal delay={0.15}>
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
          {about.facts.map((f) => (
            <li key={f} className="font-mono text-xs text-silver">
              <span className="mr-2 text-silver">/</span>
              {f}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
