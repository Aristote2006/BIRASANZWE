import { useId, type ReactNode } from 'react'
import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

interface MediaPlaceholderProps {
  label: string
  hint?: string
  className?: string
  tone?: 'teal' | 'light'
  icon?: ReactNode
}

/**
 * Clearly-labelled placeholder for future official photography/video.
 * Fixed aspect ratios are applied by the parent to prevent layout shift.
 */
export function MediaPlaceholder({ label, hint, className, tone = 'teal', icon }: MediaPlaceholderProps) {
  const dark = tone === 'teal'
  const patternId = useId()
  return (
    <div
      role="img"
      aria-label={`${label} (placeholder — official media coming soon)`}
      data-placeholder="media"
      className={cn(
        'relative isolate flex h-full w-full flex-col items-center justify-center overflow-hidden text-center',
        dark ? 'bg-teal-dark text-white' : 'bg-mist text-teal-deep',
        className,
      )}
    >
      {/* Quiet architectural pattern */}
      <svg
        aria-hidden="true"
        className={cn('absolute inset-0 -z-10 h-full w-full', dark ? 'opacity-[0.14]' : 'opacity-[0.5]')}
      >
        <defs>
          <pattern id={patternId} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke={dark ? '#F4C430' : '#d3ebe8'} strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 -z-10',
          dark
            ? 'bg-[radial-gradient(ellipse_at_30%_20%,rgba(15,118,110,0.9),transparent_60%),linear-gradient(160deg,transparent_40%,rgba(8,63,59,0.85))]'
            : 'bg-[radial-gradient(ellipse_at_50%_40%,#fff,transparent_70%)]',
        )}
      />
      <span
        className={cn(
          'grid size-14 place-items-center rounded-full border',
          dark ? 'border-gold/50 text-gold' : 'border-teal/30 text-teal',
        )}
      >
        {icon ?? <ImageIcon aria-hidden="true" className="size-6" strokeWidth={1.5} />}
      </span>
      <span className="eyebrow mt-5 px-6">{label}</span>
      {hint && (
        <span className={cn('mt-2 px-6 text-sm', dark ? 'text-on-dark-muted' : 'text-ink-muted')}>{hint}</span>
      )}
    </div>
  )
}
