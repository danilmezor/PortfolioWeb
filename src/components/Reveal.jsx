import { motion, useReducedMotion } from 'motion/react'

// Shared scroll-reveal: fade + translateY, matching the motion language of
// both Traciora and PhotoWeb (once:true, slow editorial ease). Under
// prefers-reduced-motion the content renders immediately, never animated —
// so it can never get stuck hidden.
export default function Reveal({ children, delay = 0, y = 20, className = '' }) {
  const reduce = useReducedMotion()

  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
