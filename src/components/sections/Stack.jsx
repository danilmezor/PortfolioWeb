import Reveal from '../Reveal'
import { stack } from '../../data/content'

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-28">
      <Reveal>
        <span className="label">Stack</span>
        <h2 className="mt-3 font-display text-3xl text-cloud sm:text-4xl">What I work with</h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-slate bg-slate sm:grid-cols-2">
        {stack.map((g, i) => (
          <Reveal key={g.group} delay={(i % 2) * 0.06}>
            <div className="h-full bg-night p-6 sm:p-7">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-ash">{g.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-slate bg-graphite/50 px-2.5 py-1 font-mono text-[0.72rem] text-ash"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
