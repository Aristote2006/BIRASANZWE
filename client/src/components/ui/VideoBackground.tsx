import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { usePrefersReducedData } from '@/hooks/usePrefersReducedData'

export interface VideoSources {
  /** Preferred source (smaller, better compression). */
  webm?: string
  /** Fallback source for Safari / older browsers. */
  mp4?: string
  /** Optional lighter sources for small screens (≤ 767px). */
  webmMobile?: string
  mp4Mobile?: string
}

export interface PosterSources {
  /** Fallback JPG/PNG — always required when a poster is used. */
  src: string
  avif?: string
  webp?: string
  alt?: string
  width: number
  height: number
}

interface VideoBackgroundProps {
  video?: VideoSources
  poster?: PosterSources
  /** Gradient / composition rendered when no video/poster is available (or underneath while loading). */
  fallback?: ReactNode
  /** Tailwind object-position classes to control responsive cropping, e.g. "object-[60%_center]". */
  objectPositionClassName?: string
  className?: string
}

/**
 * Decorative full-bleed background video.
 *
 * - WebM first, MP4 fallback; muted, autoplay, loop, playsInline, no controls.
 * - Sources are attached only after mount, so the video never competes with the
 *   LCP (hero heading / poster) during initial load.
 * - Skipped entirely when the user prefers reduced motion or reduced data;
 *   the poster (or the gradient fallback) is shown instead.
 * - object-fit: cover — never stretched; cropping controlled via object-position.
 * - Pauses when off-screen to save CPU/battery.
 */
export function VideoBackground({
  video,
  poster,
  fallback,
  objectPositionClassName = 'object-center',
  className,
}: VideoBackgroundProps) {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const prefersReducedData = usePrefersReducedData()
  const isMobile = useMediaQuery('(max-width: 767px)')
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)
  const [enabled, setEnabled] = useState(false)

  const hasVideo = Boolean(video && (video.webm || video.mp4))
  const allowVideo = hasVideo && !prefersReducedMotion && !prefersReducedData

  // Defer attaching video sources until the browser is idle after first paint.
  useEffect(() => {
    if (!allowVideo) {
      setEnabled(false)
      return
    }
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
      cancelIdleCallback?: (id: number) => void
    }
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setEnabled(true), { timeout: 2000 })
      return () => w.cancelIdleCallback?.(id)
    }
    const t = window.setTimeout(() => setEnabled(true), 1200)
    return () => window.clearTimeout(t)
  }, [allowVideo])

  // Pause when out of view.
  useEffect(() => {
    const el = videoRef.current
    if (!el || !enabled) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => undefined)
        else el.pause()
      },
      { threshold: 0.05 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [enabled])

  const webm = isMobile ? video?.webmMobile ?? video?.webm : video?.webm
  const mp4 = isMobile ? video?.mp4Mobile ?? video?.mp4 : video?.mp4

  return (
    <div aria-hidden="true" className={cn('absolute inset-0 -z-10 overflow-hidden', className)}>
      {fallback}

      {poster && (
        <picture>
          {poster.avif && <source srcSet={poster.avif} type="image/avif" />}
          {poster.webp && <source srcSet={poster.webp} type="image/webp" />}
          <img
            src={poster.src}
            alt=""
            width={poster.width}
            height={poster.height}
            // Critical above-the-fold image: never lazy-loaded.
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className={cn('absolute inset-0 h-full w-full object-cover', objectPositionClassName)}
          />
        </picture>
      )}

      {enabled && (
        <video
          key={`${webm}-${mp4}`}
          ref={videoRef}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-premium',
            objectPositionClassName,
            ready ? 'opacity-100' : 'opacity-0',
          )}
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          tabIndex={-1}
          onLoadedData={() => setReady(true)}
          onPlaying={() => setReady(true)}
        >
          {webm && <source src={webm} type="video/webm" />}
          {mp4 && <source src={mp4} type="video/mp4" />}
        </video>
      )}
    </div>
  )
}
