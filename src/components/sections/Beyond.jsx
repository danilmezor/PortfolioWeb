import Reveal from '../Reveal'
import ShinyText from '../reactbits/ShinyText'
import { links } from '../../data/content'

export default function Beyond() {
  return (
    <section className="mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-28">
      <Reveal>
        <span className="label">Beyond code</span>
      </Reveal>
      <Reveal delay={0.05}>
        <a
          href={links.photography}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 block max-w-3xl"
        >
          <p className="font-display text-2xl leading-snug text-silver transition-colors group-hover:text-cloud sm:text-3xl">
            Off the clock I shoot photography and build the sites to show it —{' '}
            <ShinyText
              text="danilzanozin.com"
              speed={3}
              color="#A1A1AA"
              shineColor="#FAFAFA"
              className="font-display"
            />
            <span className="ml-2 inline-block text-silver transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </p>
        </a>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 max-w-xl font-mono text-xs text-steel">
          Photography keeps my eye sharp for the details that make good software.
        </p>
      </Reveal>
    </section>
  )
}
