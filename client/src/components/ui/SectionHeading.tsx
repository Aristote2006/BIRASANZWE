import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Reveal } from './RevealAnimation'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  id?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

/**
 * Consistent section header: small uppercase label with a gold rule,
 * a DM Serif Display H2 and optional supporting copy.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = 'left',
  tone = 'light',
  className,
}: SectionHeadingProps) {
  const onDark = tone === 'dark'
  return (
    <Reveal
      as="header"
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <p
        className={cn(
          'eyebrow inline-flex items-center gap-3',
          onDark ? 'text-gold' : 'text-teal',
          align === 'center' && 'justify-center',
        )}
      >
        <span aria-hidden="true" className="h-px w-8 bg-gold" />
        {eyebrow}
        {align === 'center' && <span aria-hidden="true" className="h-px w-8 bg-gold" />}
      </p>
      <h2
        id={id}
        className={cn(
          'mt-3 font-display text-h2 font-normal',
          onDark ? 'text-white' : 'text-teal-deep',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-3.5 text-lead',
            onDark ? 'text-on-dark-muted' : 'text-ink-muted',
            align === 'center' && 'mx-auto max-w-2xl',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
