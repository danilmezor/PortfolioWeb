import Reveal from '../Reveal'
import CountUp from '../reactbits/CountUp'
import { highlights, awards } from '../../data/content'

export default function Highlights() {
  return (
    <section id="highlights" className="border-y border-slate/60 bg-graphite/30">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <span className="label">By the numbers</span>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.06}>
              <div>
                <div className={`font-mono text-3xl sm:text-4xl ${h.emphasis ? 'text-cloud' : 'text-silver'}`}>
                  {h.prefix || ''}
                  <CountUp to={h.to} duration={1.6} className="tabular-nums" />
                  {h.suffix || ''}
                </div>
                <div className="mt-2 font-mono text-[0.68rem] uppercase tracking-wider text-silver">
                  {h.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <ul className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate/60 pt-8">
            {awards.map((a) => (
              <li key={a} className="font-mono text-xs text-silver">
                <span className="mr-2 text-silver">★</span>
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
