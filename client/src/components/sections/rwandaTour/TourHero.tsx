import { Link } from 'react-router'
import { ArrowDown, ChevronRight, Star } from 'lucide-react'
import { RWANDA_TOUR_HERO } from '@/content/rwandaTour'
import { Container } from '@/components/ui/Container'

/**
 * SECTION 1 — PROJECT HERO
 * Breadcrumb: Home / Projects / Birasanzwe Rwanda Tour
 * Badge: EDITION 01
 * H1: BIRASANZWE RWANDA TOUR
 * Supporting headline: CELEBRATING TALENT. REDEFINING POSSIBILITY.
 * Button: EXPLORE THE PROJECT ↓
 */
export function TourHero() {
  return (
    <section
      aria-labelledby="tour-hero-heading"
      className="relative isolate flex min-h-[72svh] flex-col justify-between overflow-hidden bg-teal-deep text-white"
    >
      {/* Background photograph */}
      <img
        src="/assets/images/tour.webp"
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      {/* Editorial deep-teal gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,63,59,0.92)_0%,rgba(8,63,59,0.75)_55%,rgba(8,63,59,0.42)_100%),linear-gradient(0deg,rgba(8,63,59,0.94)_0%,transparent_45%)]"
      />

      {/* Decorative edition rings */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-28%] -z-10 h-[115vmin] w-[115vmin] -translate-y-1/2 opacity-55 sm:right-[-14%] lg:right-[-6%]"
        viewBox="0 0 760 760"
        fill="none"
      >
        <circle cx="380" cy="380" r="320" stroke="#FFFFFF" strokeOpacity="0.06" />
        <circle
          cx="380"
          cy="380"
          r="255"
          stroke="#F4C430"
          strokeOpacity="0.45"
          strokeWidth="1.25"
          strokeDasharray="3 11"
        />
        <circle cx="380" cy="380" r="190" stroke="#FFFFFF" strokeOpacity="0.1" />
        <circle cx="380" cy="380" r="125" stroke="#FFFFFF" strokeOpacity="0.14" />
        <circle cx="380" cy="125" r="5" fill="#F4C430" />
      </svg>

      {/* Architectural vertical rules */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:calc(100%/6)_100%] lg:block"
      />

      <Container className="flex flex-1 flex-col justify-center pt-[calc(var(--spacing-nav)+2.25rem)] pb-12 sm:pb-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="hero-rise" style={{ animationDelay: '40ms' }}>
          <ol className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold tracking-wide text-on-dark-muted">
            <li>
              <Link to="/" className="transition-colors hover:text-gold">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-gold/75">
              <ChevronRight className="size-3.5" />
            </li>
            <li>
              <Link to="/projects" className="transition-colors hover:text-gold">
                Projects
              </Link>
            </li>
            <li aria-hidden="true" className="text-gold/75">
              <ChevronRight className="size-3.5" />
            </li>
            <li aria-current="page" className="text-white">
              Birasanzwe Rwanda Tour
            </li>
          </ol>
        </nav>

        <div className="mt-6 max-w-4xl">
          {/* Project badge */}
          <div className="hero-rise flex items-center gap-3" style={{ animationDelay: '90ms' }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-xs font-extrabold tracking-[0.2em] text-teal-deep uppercase shadow-sm">
              <Star aria-hidden="true" className="size-3.5 fill-teal-deep" />
              {RWANDA_TOUR_HERO.badge}
            </span>
            <span aria-hidden="true" className="h-px w-10 bg-gold/60" />
          </div>

          {/* Main H1 */}
          <h1
            id="tour-hero-heading"
            className="mt-4 font-display text-[clamp(2.2rem,1.1rem+4.8vw,4.65rem)] leading-[1.02] font-normal tracking-[-0.01em] text-white"
          >
            {RWANDA_TOUR_HERO.heading}
          </h1>

          {/* Supporting headline */}
          <p
            className="hero-rise mt-3 font-display text-[clamp(1.25rem,0.95rem+1.6vw,2rem)] leading-[1.18] text-gold"
            style={{ animationDelay: '150ms' }}
          >
            <span>{RWANDA_TOUR_HERO.supportingLines[0]}</span>{' '}
            <span className="text-white/95">{RWANDA_TOUR_HERO.supportingLines[1]}</span>
          </p>

          {/* Short description */}
          <div
            className="hero-rise mt-5 flex max-w-2xl gap-5"
            style={{ animationDelay: '210ms' }}
          >
            <span aria-hidden="true" className="mt-1.5 w-0.5 shrink-0 self-stretch rounded-full bg-gold/75" />
            <p className="text-lead text-on-dark-muted">{RWANDA_TOUR_HERO.description}</p>
          </div>

          {/* EXPLORE THE PROJECT ↓ button */}
          <div className="hero-rise mt-8" style={{ animationDelay: '280ms' }}>
            <a
              href={RWANDA_TOUR_HERO.ctaHref}
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-3 font-sans text-[0.95rem] font-bold tracking-[0.01em] text-teal-deep shadow-[0_8px_24px_-12px_rgba(244,196,48,0.75)] transition-[background-color,box-shadow,transform] duration-300 ease-premium hover:bg-[#ffd451] hover:shadow-[0_12px_30px_-12px_rgba(244,196,48,0.9)] active:scale-[0.98]"
            >
              <span>{RWANDA_TOUR_HERO.ctaLabel}</span>
              <ArrowDown
                aria-hidden="true"
                className="size-4 transition-transform duration-300 ease-premium group-hover:translate-y-0.5"
                strokeWidth={2.25}
              />
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex h-14 items-center justify-between gap-6">
          <p className="text-[0.7rem] font-bold tracking-[0.26em] text-white/70 uppercase">
            Birasanzwe Initiative · Flagship Tour
          </p>
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">Rwanda</span>
        </Container>
      </div>
    </section>
  )
}
