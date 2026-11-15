import { Link } from 'react-router'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { ABOUT_HERO } from '@/content/about'
import { Container } from '@/components/ui/Container'

/**
 * SECTION 1 — ABOUT HERO
 * Deep teal background, breadcrumb navigation, DM Serif Display H1,
 * golden yellow accents, subtle abstract geometric artwork, and scroll cue.
 */
export function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-title"
      className="relative isolate flex min-h-[82svh] flex-col justify-between overflow-hidden bg-teal-deep text-white"
    >
      {/* Subtle ambient illumination */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(65%_55%_at_85%_20%,rgba(15,118,110,0.6),transparent_70%),radial-gradient(45%_45%_at_10%_95%,rgba(244,196,48,0.09),transparent_70%)]"
      />

      {/* Abstract geometric composition — decorative */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-30%] -z-10 h-[115vmin] w-[115vmin] -translate-y-1/2 opacity-55 sm:right-[-16%] lg:right-[-8%]"
        viewBox="0 0 720 720"
        fill="none"
      >
        <circle cx="360" cy="360" r="310" stroke="#FFFFFF" strokeOpacity="0.06" />
        <circle
          cx="360"
          cy="360"
          r="250"
          stroke="#F4C430"
          strokeOpacity="0.4"
          strokeWidth="1.25"
          strokeDasharray="3 11"
        />
        <circle cx="360" cy="360" r="190" stroke="#FFFFFF" strokeOpacity="0.09" />
        <circle cx="360" cy="360" r="130" stroke="#FFFFFF" strokeOpacity="0.12" />
        <path d="M50 360H670" stroke="#F4C430" strokeOpacity="0.18" />
        <path d="M360 50V670" stroke="#FFFFFF" strokeOpacity="0.06" />
        <circle cx="360" cy="110" r="4.5" fill="#F4C430" />
        <circle cx="610" cy="360" r="3.5" fill="#F4C430" fillOpacity="0.7" />
      </svg>

      {/* Architectural vertical rules */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:calc(100%/6)_100%] lg:block"
      />

      <Container className="flex flex-1 flex-col justify-center pt-[calc(var(--spacing-nav)+2.25rem)] pb-12 sm:pb-16">
        {/* Breadcrumb navigation */}
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
              About Us
            </li>
          </ol>
        </nav>

        <div className="mt-7 max-w-4xl">
          <p className="hero-rise eyebrow flex items-center gap-3 text-gold" style={{ animationDelay: '100ms' }}>
            <span aria-hidden="true" className="h-px w-10 bg-gold" />
            {ABOUT_HERO.eyebrow}
          </p>

          <h1
            id="about-hero-title"
            className="mt-4 font-display text-[clamp(2.1rem,1rem+4.8vw,4.5rem)] leading-[1.03] font-normal tracking-[-0.01em]"
          >
            <span className="block">{ABOUT_HERO.titleLines[0]}</span>
            <span className="block text-gold">{ABOUT_HERO.titleLines[1]}</span>
          </h1>

          <div
            className="hero-rise mt-6 flex max-w-2xl gap-5"
            style={{ animationDelay: '200ms' }}
          >
            <span aria-hidden="true" className="mt-1.5 w-0.5 shrink-0 self-stretch rounded-full bg-gold/75" />
            <p className="text-lead text-on-dark-muted">{ABOUT_HERO.supporting}</p>
          </div>
        </div>
      </Container>

      {/* Bottom bar with subtle scroll indicator */}
      <div className="border-t border-white/10">
        <Container className="flex h-15 items-center justify-between gap-6">
          <p className="text-[0.7rem] font-bold tracking-[0.26em] text-white/70 uppercase">
            Dignity · Ability · Inclusion · Opportunity
          </p>
          <a
            href="#our-story"
            className="group inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-white/75 uppercase transition-colors hover:text-white"
          >
            <span>Explore Our Story</span>
            <span className="grid size-8 place-items-center rounded-full border border-white/25 transition-colors group-hover:border-gold">
              <ChevronDown aria-hidden="true" className="hero-bob size-4 text-gold" />
            </span>
          </a>
        </Container>
      </div>
    </section>
  )
}
