import { Link } from 'react-router'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { IMPACT_HERO } from '@/content/impact'
import { Container } from '@/components/ui/Container'

/**
 * SECTION 1 — IMPACT HERO
 * Heading (H1): OUR IMPACT
 * Headline: Creating Impact. Recognizing Ability. Changing Perspectives.
 * Short description about BIRASANZWE INITIATIVE creating opportunities,
 * recognizing talents, and promoting inclusion for persons with disabilities.
 */
export function ImpactHero() {
  return (
    <section
      aria-labelledby="impact-hero-title"
      className="relative isolate flex min-h-[70svh] flex-col justify-between overflow-hidden bg-teal-deep text-white"
    >
      {/* Background photograph */}
      <img
        src="/assets/images/tour6.webp"
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
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,63,59,0.92)_0%,rgba(8,63,59,0.76)_55%,rgba(8,63,59,0.45)_100%),linear-gradient(0deg,rgba(8,63,59,0.94)_0%,transparent_45%)]"
      />

      {/* Abstract concentric ripple artwork — symbolizing expanding community impact */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-28%] -z-10 h-[110vmin] w-[110vmin] -translate-y-1/2 opacity-55 sm:right-[-15%] lg:right-[-6%]"
        viewBox="0 0 740 740"
        fill="none"
      >
        <circle cx="370" cy="370" r="310" stroke="#FFFFFF" strokeOpacity="0.06" />
        <circle
          cx="370"
          cy="370"
          r="245"
          stroke="#F4C430"
          strokeOpacity="0.45"
          strokeWidth="1.25"
          strokeDasharray="3 11"
        />
        <circle cx="370" cy="370" r="180" stroke="#FFFFFF" strokeOpacity="0.1" />
        <circle cx="370" cy="370" r="115" stroke="#F4C430" strokeOpacity="0.22" />
        <circle cx="370" cy="125" r="4.5" fill="#F4C430" />
        <circle cx="615" cy="370" r="3.5" fill="#F4C430" fillOpacity="0.75" />
      </svg>

      {/* Architectural vertical rules */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:calc(100%/6)_100%] lg:block"
      />

      <Container className="flex flex-1 flex-col justify-center pt-[calc(var(--spacing-nav)+2rem)] pb-12 sm:pb-14">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="hero-rise" style={{ animationDelay: '40ms' }}>
          <ol className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold tracking-wide text-on-dark-muted">
            <li>
              <Link to="/" className="transition-colors hover:text-gold">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-gold/75">
              <ChevronRight className="size-3.5" />
            </li>
            <li aria-current="page" className="text-white">
              Our Impact
            </li>
          </ol>
        </nav>

        <div className="mt-6 max-w-4xl">
          <p className="hero-rise eyebrow flex items-center gap-3 text-gold" style={{ animationDelay: '90ms' }}>
            <span aria-hidden="true" className="h-px w-10 bg-gold" />
            BIRASANZWE INITIATIVE
          </p>

          <h1
            id="impact-hero-title"
            className="mt-3 font-display text-[clamp(2.3rem,1.2rem+4.8vw,4.5rem)] leading-[1.02] font-normal tracking-[-0.01em] text-white"
          >
            {IMPACT_HERO.heading}
          </h1>

          <p
            className="hero-rise mt-3 font-quote text-[clamp(1.25rem,1rem+1.25vw,1.9rem)] leading-snug text-gold italic"
            style={{ animationDelay: '150ms' }}
          >
            {IMPACT_HERO.headline}
          </p>

          <div
            className="hero-rise mt-5 flex max-w-2xl gap-5"
            style={{ animationDelay: '210ms' }}
          >
            <span aria-hidden="true" className="mt-1.5 w-0.5 shrink-0 self-stretch rounded-full bg-gold/75" />
            <p className="text-lead text-on-dark-muted">{IMPACT_HERO.description}</p>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex h-14 items-center justify-between gap-6">
          <p className="text-[0.7rem] font-bold tracking-[0.26em] text-white/70 uppercase">
            Communities · Talent · Projects · Lives
          </p>
          <a
            href="#impact-statistics"
            className="group inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-white/75 uppercase transition-colors hover:text-white"
          >
            <span>Explore Metrics</span>
            <span className="grid size-8 place-items-center rounded-full border border-white/25 transition-colors group-hover:border-gold">
              <ChevronDown aria-hidden="true" className="hero-bob size-4 text-gold" />
            </span>
          </a>
        </Container>
      </div>
    </section>
  )
}
