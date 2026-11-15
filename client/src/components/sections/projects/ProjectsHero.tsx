import { Link } from 'react-router'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { PROJECTS_HERO } from '@/content/projects'
import { Container } from '@/components/ui/Container'

/**
 * SECTION 1 — PROJECTS HERO
 * Deep teal background, Home / Projects breadcrumb, DM Serif Display H1,
 * golden yellow accents, abstract architectural stage lines, and scroll cue.
 */
export function ProjectsHero() {
  return (
    <section
      aria-labelledby="projects-hero-title"
      className="relative isolate flex min-h-[82svh] flex-col justify-between overflow-hidden bg-teal-deep text-white"
    >
      {/* Subtle radial illumination */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(65%_55%_at_82%_18%,rgba(15,118,110,0.62),transparent_70%),radial-gradient(45%_45%_at_8%_95%,rgba(244,196,48,0.10),transparent_70%)]"
      />

      {/* Abstract geometric stage/platform artwork — decorative */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-28%] -z-10 h-[115vmin] w-[115vmin] -translate-y-1/2 opacity-55 sm:right-[-15%] lg:right-[-6%]"
        viewBox="0 0 760 760"
        fill="none"
      >
        <circle cx="380" cy="380" r="320" stroke="#FFFFFF" strokeOpacity="0.06" />
        <circle
          cx="380"
          cy="380"
          r="260"
          stroke="#F4C430"
          strokeOpacity="0.42"
          strokeWidth="1.25"
          strokeDasharray="3 11"
        />
        <circle cx="380" cy="380" r="200" stroke="#FFFFFF" strokeOpacity="0.1" />
        <rect
          x="220"
          y="220"
          width="320"
          height="320"
          rx="32"
          transform="rotate(15 380 380)"
          stroke="#F4C430"
          strokeOpacity="0.22"
        />
        <circle cx="380" cy="120" r="4.5" fill="#F4C430" />
        <circle cx="640" cy="380" r="4" fill="#F4C430" fillOpacity="0.7" />
      </svg>

      {/* Architectural vertical rules */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:calc(100%/6)_100%] lg:block"
      />

      <Container className="flex flex-1 flex-col justify-center pt-[calc(var(--spacing-nav)+2.25rem)] pb-12 sm:pb-16">
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
              Projects
            </li>
          </ol>
        </nav>

        <div className="mt-7 max-w-4xl">
          <p className="hero-rise eyebrow flex items-center gap-3 text-gold" style={{ animationDelay: '100ms' }}>
            <span aria-hidden="true" className="h-px w-10 bg-gold" />
            {PROJECTS_HERO.eyebrow}
          </p>

          <h1
            id="projects-hero-title"
            className="mt-4 font-display text-[clamp(2.15rem,1rem+4.8vw,4.5rem)] leading-[1.03] font-normal tracking-[-0.01em]"
          >
            <span className="block">{PROJECTS_HERO.titleLines[0]}</span>
            <span className="block text-gold">{PROJECTS_HERO.titleLines[1]}</span>
          </h1>

          <div
            className="hero-rise mt-6 flex max-w-2xl gap-5"
            style={{ animationDelay: '200ms' }}
          >
            <span aria-hidden="true" className="mt-1.5 w-0.5 shrink-0 self-stretch rounded-full bg-gold/75" />
            <p className="text-lead text-on-dark-muted">{PROJECTS_HERO.supporting}</p>
          </div>
        </div>
      </Container>

      {/* Bottom rail with scroll cue */}
      <div className="border-t border-white/10">
        <Container className="flex h-15 items-center justify-between gap-6">
          <p className="text-[0.7rem] font-bold tracking-[0.26em] text-white/70 uppercase">
            Platforms · Creativity · Recognition · Inclusion
          </p>
          <a
            href="#featured-rwanda-tour"
            className="group inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-white/75 uppercase transition-colors hover:text-white"
          >
            <span>Featured Flagship</span>
            <span className="grid size-8 place-items-center rounded-full border border-white/25 transition-colors group-hover:border-gold">
              <ChevronDown aria-hidden="true" className="hero-bob size-4 text-gold" />
            </span>
          </a>
        </Container>
      </div>
    </section>
  )
}
