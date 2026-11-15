import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import { AnimatePresence, m } from 'motion/react'
import { ChevronLeft, ChevronRight, Expand, ImageIcon, X } from 'lucide-react'
import { RWANDA_TOUR_SLIDES, type TourSlide } from '@/content/rwandaTour'
import { cn } from '@/lib/cn'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder'
import { Reveal } from '@/components/ui/RevealAnimation'

const EASE = [0.22, 1, 0.36, 1] as const

/**
 * SECTION 3 — PROJECT IMAGE SLIDESHOW
 * Cinematic slideshow featuring:
 * - Large featured photograph with fixed 16:10 frame (zero CLS)
 * - Smooth crossfade + subtle scale transition
 * - Previous and Next buttons
 * - Elegant slide indicators & numeric counter (01 / 04)
 * - Interactive thumbnail strip
 * - Fullscreen accessible lightbox modal
 * - Keyboard navigation (ArrowLeft / ArrowRight / Escape)
 * - Touch / pointer swipe support
 */
export function TourSlideshow() {
  const slides = RWANDA_TOUR_SLIDES
  const total = slides.length
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const swipeStartX = useRef<number | null>(null)
  const openLightboxBtnRef = useRef<HTMLButtonElement>(null)
  const closeLightboxBtnRef = useRef<HTMLButtonElement>(null)
  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([])

  const current: TourSlide = slides[activeIndex] ?? slides[0]

  const goTo = useCallback(
    (index: number) => {
      const next = ((index % total) + total) % total
      setActiveIndex(next)
      thumbRefs.current[next]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    },
    [total],
  )

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])

  // Manage lightbox focus & body scroll lock + global keyboard navigation when lightbox is open.
  useEffect(() => {
    if (!lightboxOpen) return
    const returnTarget = openLightboxBtnRef.current
    const prevOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    const timer = window.setTimeout(() => closeLightboxBtnRef.current?.focus(), 40)

    const onWindowKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setLightboxOpen(false)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goNext()
      }
    }
    window.addEventListener('keydown', onWindowKeyDown)

    return () => {
      window.clearTimeout(timer)
      document.documentElement.style.overflow = prevOverflow
      window.removeEventListener('keydown', onWindowKeyDown)
      returnTarget?.focus()
    }
  }, [lightboxOpen, goPrev, goNext])

  const onCarouselKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goPrev()
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      goNext()
    }
  }

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    swipeStartX.current = e.clientX
  }

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (swipeStartX.current === null) return
    const delta = e.clientX - swipeStartX.current
    swipeStartX.current = null
    if (Math.abs(delta) > 44) {
      if (delta < 0) goNext()
      else goPrev()
    }
  }

  const formattedCurrent = String(activeIndex + 1).padStart(2, '0')
  const formattedTotal = String(total).padStart(2, '0')

  return (
    <section
      id="tour-gallery"
      aria-labelledby="tour-gallery-heading"
      aria-roledescription="carousel"
      onKeyDown={onCarouselKeyDown}
      className="on-light section-y bg-mist"
    >
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="tour-gallery-heading"
            eyebrow="VISUAL GALLERY"
            title="Moments from Edition 01."
            description="Explore photographs and visual frames from Birasanzwe Rwanda Tour — Edition 1."
          />

          {/* Slide counter + Prev/Next controls */}
          <Reveal delay={0.08} className="flex items-center gap-4 self-start sm:self-auto">
            <div
              aria-live="polite"
              aria-atomic="true"
              className="font-display text-lg tracking-wider text-teal-deep"
            >
              <span className="text-2xl text-teal">{formattedCurrent}</span>
              <span className="mx-1.5 text-teal/40">/</span>
              <span className="text-ink-muted">{formattedTotal}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous slide"
                className="grid size-11 place-items-center rounded-full border border-teal/25 bg-white text-teal-deep transition-colors hover:border-gold hover:bg-teal-deep hover:text-gold"
              >
                <ChevronLeft aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next slide"
                className="grid size-11 place-items-center rounded-full border border-teal/25 bg-white text-teal-deep transition-colors hover:border-gold hover:bg-teal-deep hover:text-gold"
              >
                <ChevronRight aria-hidden="true" className="size-5" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Main featured slide frame */}
        <Reveal variant="fade-in" className="mt-7">
          <div className="overflow-hidden rounded-3xl border border-teal-100 bg-teal-deep shadow-[0_28px_60px_-30px_rgba(8,63,59,0.5)]">
            <div
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              className="relative aspect-[16/10] max-h-[64svh] w-full touch-pan-y overflow-hidden select-none"
            >
              <AnimatePresence mode="wait">
                <m.figure
                  key={current.id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="relative h-full w-full"
                >
                  {current.image ? (
                    <img
                      src={current.image.src}
                      width={current.image.width}
                      height={current.image.height}
                      alt={current.image.alt}
                      loading={activeIndex === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      className={cn(
                        'h-full w-full',
                        current.image.height > current.image.width
                          ? 'bg-teal-deep object-contain'
                          : 'object-cover object-center',
                      )}
                    />
                  ) : (
                    <MediaPlaceholder
                      label={current.title}
                      hint="Official Edition 01 photograph slot — ready for upcoming media"
                    />
                  )}
                </m.figure>
              </AnimatePresence>

              {/* Top badge & Fullscreen trigger */}
              <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-4 sm:p-5">
                <span className="rounded-full bg-teal-deep/85 px-3.5 py-1.5 text-[0.7rem] font-extrabold tracking-[0.16em] text-gold uppercase backdrop-blur-xs">
                  {current.tag}
                </span>

                <button
                  ref={openLightboxBtnRef}
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  aria-label={`Open "${current.title}" in fullscreen view`}
                  className="pointer-events-auto inline-flex min-h-10 items-center gap-2 rounded-full border border-white/25 bg-teal-deep/85 px-4 py-2 text-xs font-bold text-white backdrop-blur-xs transition-colors hover:border-gold hover:text-gold"
                >
                  <Expand aria-hidden="true" className="size-3.5" />
                  <span className="hidden sm:inline">Fullscreen</span>
                </button>
              </div>
            </div>

            {/* Caption bar + slide dot indicators */}
            <div className="flex flex-col gap-4 border-t border-white/10 bg-teal-deep px-5 py-4 text-white sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <div>
                <h3 className="font-display text-lg font-normal text-white sm:text-xl">{current.title}</h3>
                <p className="mt-0.5 text-xs leading-relaxed text-on-dark-muted sm:text-sm">{current.caption}</p>
              </div>

              {/* Elegant slide dot indicators */}
              <div role="tablist" aria-label="Slide indicators" className="flex flex-wrap items-center gap-1.5">
                {slides.map((slide, idx) => {
                  const isActive = idx === activeIndex
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                      onClick={() => goTo(idx)}
                      className={cn(
                        'h-2 rounded-full transition-all duration-300',
                        isActive ? 'w-7 bg-gold' : 'w-2 bg-white/30 hover:bg-white/60',
                      )}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Horizontal scrollable thumbnail strip for 12 photographs */}
        <div
          role="group"
          aria-label="Gallery thumbnails"
          className="mt-4 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:thin]"
        >
          {slides.map((slide, idx) => {
            const isActive = idx === activeIndex
            const num = String(idx + 1).padStart(2, '0')
            return (
              <button
                key={slide.id}
                ref={(el) => {
                  thumbRefs.current[idx] = el
                }}
                type="button"
                onClick={() => goTo(idx)}
                aria-label={`Select photograph ${num}`}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'group relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl border bg-teal-dark transition-all duration-200 sm:h-22 sm:w-32',
                  isActive
                    ? 'border-gold ring-2 ring-gold shadow-md'
                    : 'border-teal-100 opacity-70 hover:opacity-100',
                )}
              >
                {slide.image ? (
                  <img
                    src={slide.image.src}
                    width={128}
                    height={88}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <ImageIcon aria-hidden="true" className="mx-auto size-5 text-gold" />
                )}
                <span
                  className={cn(
                    'absolute bottom-1.5 left-1.5 rounded-md px-1.5 py-0.5 text-[0.65rem] font-extrabold tracking-wider',
                    isActive ? 'bg-gold text-teal-deep' : 'bg-teal-deep/80 text-white',
                  )}
                >
                  {num}
                </span>
              </button>
            )
          })}
        </div>
      </Container>

      {/* Fullscreen Lightbox Dialog */}
      <AnimatePresence>
        {lightboxOpen && (
          <m.div
            key="tour-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Fullscreen gallery: ${current.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] flex flex-col justify-between bg-teal-deep/95 p-4 text-white backdrop-blur-md sm:p-8"
          >
            {/* Top bar */}
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-extrabold tracking-widest text-teal-deep uppercase">
                  {formattedCurrent} / {formattedTotal}
                </span>
                <span className="hidden text-sm font-semibold text-on-dark-muted sm:inline">
                  {current.title}
                </span>
              </div>

              <button
                ref={closeLightboxBtnRef}
                type="button"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close fullscreen gallery"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs font-bold text-white transition-colors hover:border-gold hover:text-gold"
              >
                <span>Close</span>
                <X aria-hidden="true" className="size-4" />
              </button>
            </div>

            {/* Center image + Prev/Next */}
            <div className="relative mx-auto my-4 flex w-full max-w-6xl flex-1 items-center justify-center overflow-hidden">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous photograph"
                className="absolute left-2 z-10 grid size-12 place-items-center rounded-full border border-white/25 bg-teal-deep/80 text-white transition-colors hover:border-gold hover:text-gold sm:left-4"
              >
                <ChevronLeft aria-hidden="true" className="size-6" />
              </button>

              <div className="flex h-full max-h-[75svh] w-full items-center justify-center px-14 sm:px-20">
                {current.image ? (
                  <img
                    src={current.image.src}
                    width={current.image.width}
                    height={current.image.height}
                    alt={current.image.alt}
                    className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
                  />
                ) : (
                  <div className="aspect-[16/10] w-full max-w-3xl overflow-hidden rounded-2xl border border-white/15">
                    <MediaPlaceholder
                      label={current.title}
                      hint="Official Edition 01 photograph slot"
                    />
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next photograph"
                className="absolute right-2 z-10 grid size-12 place-items-center rounded-full border border-white/25 bg-teal-deep/80 text-white transition-colors hover:border-gold hover:text-gold sm:right-4"
              >
                <ChevronRight aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Bottom caption */}
            <div className="mx-auto w-full max-w-3xl text-center">
              <p className="font-display text-lg text-white">{current.title}</p>
              <p className="mt-1 text-xs text-on-dark-muted sm:text-sm">{current.caption}</p>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  )
}
