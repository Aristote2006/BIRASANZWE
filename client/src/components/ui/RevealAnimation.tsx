import type { ReactNode } from 'react'
import { m, type Variants } from 'motion/react'
import { cn } from '@/lib/cn'

const EASE = [0.22, 1, 0.36, 1] as const

const variants: Record<'fade-up' | 'fade-in' | 'image', Variants> = {
  'fade-up': {
    hidden: { opacity: 0, y: 28 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: EASE, delay },
    }),
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: (delay: number = 0) => ({ opacity: 1, transition: { duration: 0.9, ease: EASE, delay } }),
  },
  /** Subtle image reveal: gentle scale-down + fade (transform/opacity only). */
  image: {
    hidden: { opacity: 0, scale: 1.04 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 1.1, ease: EASE, delay },
    }),
  },
}

interface RevealProps {
  children: ReactNode
  className?: string
  variant?: keyof typeof variants
  delay?: number
  as?: 'div' | 'li' | 'figure' | 'article' | 'header'
}

/** Scroll-triggered reveal. Animates once, using only transform and opacity. */
export function Reveal({ children, className, variant = 'fade-up', delay = 0, as = 'div' }: RevealProps) {
  const Component = m[as]
  return (
    <Component
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -8% 0px' }}
      custom={delay}
    >
      {children}
    </Component>
  )
}

interface RevealGroupProps {
  children: ReactNode
  className?: string
  stagger?: number
  as?: 'div' | 'ul' | 'ol'
}

/** Parent that staggers its <RevealItem> children as they enter the viewport. */
export function RevealGroup({ children, className, stagger = 0.12, as = 'div' }: RevealGroupProps) {
  const Component = m[as]
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </Component>
  )
}

export function RevealItem({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'li' | 'article'
}) {
  const Component = m[as]
  return (
    <Component className={cn(className)} variants={variants['fade-up']}>
      {children}
    </Component>
  )
}
