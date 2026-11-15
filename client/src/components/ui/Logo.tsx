import { cn } from '@/lib/cn'
import { SITE } from '@/lib/site'

interface LogoProps {
  className?: string
  imgClassName?: string
  /** Path to the official logo image. Defaults to `/assets/logos/logo6.webp`. */
  src?: string
}

/**
 * Official BIRASANZWE INITIATIVE logo (`/assets/logos/logo6.webp`).
 * The logo image includes both the emblem and the "BIRASANZWE Initiative" wordmark.
 */
export function Logo({
  className,
  imgClassName,
  src = '/assets/logos/logo6.webp',
}: LogoProps) {
  return (
    <span className={cn('inline-flex items-center', className)}>
      <img
        src={src}
        alt={SITE.name}
        width={220}
        height={110}
        decoding="async"
        className={cn('h-12 w-auto object-contain sm:h-14', imgClassName)}
      />
    </span>
  )
}
