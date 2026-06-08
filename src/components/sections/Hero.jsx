import { Suspense, lazy, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import BlurText from '../reactbits/BlurText'
import ErrorBoundary from '../ErrorBoundary'
import { profile, links } from '../../data/content'

// Lazy-load the WebGL aurora so it never blocks first paint.
const Aurora = lazy(() => import('../reactbits/Aurora'))

function RotatingFacet({ facets }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % facets.length), 2600)
    return () => clearInterval(t)
  }, [facets.length])
  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-ash"
        >
          {facets[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const nameClass =
    'font-display text-5xl font-medium leading-[1.05] tracking-tight text-cloud sm:text-7xl'
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Ambient aurora — neutral silver smoke, low amplitude, faded into the page */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50">
        <ErrorBoundary>
          <Suspense fallback={null}>
            <Aurora colorStops={['#3F3F46', '#A1A1AA', '#52525B']} amplitude={0.8} blend={0.6} speed={0.6} />
          </Suspense>
        </ErrorBoundary>
        <div className="absolute inset-0 bg-gradient-to-b from-night/40 via-night/30 to-night" />
      </div>

      <div className="mx-auto grid w-full max-w-content items-center gap-12 px-5 sm:px-8 md:grid-cols-[1fr_290px] md:gap-16 lg:grid-cols-[1fr_330px]">
        <div className="order-2 md:order-1">
          {reduce ? (
            <h1 className={nameClass}>{profile.name}</h1>
          ) : (
            <BlurText text={profile.name} animateBy="words" delay={120} className={nameClass} />
          )}

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-xl text-lg text-silver sm:text-xl"
          >
            {profile.role} — <RotatingFacet facets={profile.facets} />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-cloud px-6 py-3 text-sm font-medium text-night transition-colors hover:bg-mist"
            >
              Get in touch
            </a>
            {profile.resume && (
              <a
                href={profile.resume}
                className="rounded-full border border-slate px-6 py-3 text-sm font-medium text-cloud transition-colors hover:border-silver/60"
              >
                Résumé
              </a>
            )}
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate px-6 py-3 text-sm font-medium text-cloud transition-colors hover:border-silver/60"
            >
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Portrait — grayscale → color on hover, echoing the photography site */}
        <motion.figure
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="group relative order-1 mx-auto w-full max-w-[230px] overflow-hidden rounded-card border border-slate md:order-2 md:mx-0 md:max-w-none"
        >
          <img
            src={profile.portrait}
            alt="Danil Zanozin"
            className="aspect-[2/3] w-full object-cover grayscale transition-all duration-700 ease-editorial group-hover:scale-[1.02] group-hover:grayscale-0"
          />
        </motion.figure>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-10 w-px overflow-hidden bg-slate">
          <motion.div
            className="h-1/2 w-full bg-silver"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  )
}
