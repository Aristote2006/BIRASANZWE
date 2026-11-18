import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'
import { GET_INVOLVED_HERO } from '@/content/getInvolved'
import { Container } from '@/components/ui/Container'

/**
 * SECTION 1 — GET INVOLVED HERO
 * Heading (H1): GET INVOLVED
 * Headline: Your Participation Can Change a Life.
 * Short description inviting individuals, organizations, and communities
 * to join BIRASANZWE INITIATIVE in promoting inclusion and recognizing talents.
 */
export function GetInvolvedHero() {
  return (
    <section
      aria-labelledby="get-involved-hero-title"
      className="relative isolate flex min-h-[66svh] flex-col justify-center overflow-hidden bg-teal-deep pt-[calc(var(--spacing-nav)+2rem)] pb-12 text-white sm:pb-16"
    >
      {/* Background photograph */}
      <img
        src="/assets/images/tour8.webp"
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

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-25%] -z-10 h-[100vmin] w-[100vmin] -translate-y-1/2 opacity-50 sm:right-[-12%] lg:right-[-5%]"
        viewBox="0 0 700 700"
        fill="none"
      >
        <circle cx="350" cy="350" r="280" stroke="#FFFFFF" strokeOpacity="0.07" />
        <circle
          cx="350"
          cy="350"
          r="210"
          stroke="#F4C430"
          strokeOpacity="0.42"
          strokeWidth="1.25"
          strokeDasharray="3 11"
        />
        <circle cx="350" cy="350" r="140" stroke="#FFFFFF" strokeOpacity="0.12" />
      </svg>

      <Container>
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
              Get Involved
            </li>
          </ol>
        </nav>

        <div className="mt-6 max-w-3xl">
          <p className="hero-rise eyebrow flex items-center gap-3 text-gold" style={{ animationDelay: '90ms' }}>
            <span aria-hidden="true" className="h-px w-10 bg-gold" />
            BIRASANZWE INITIATIVE
          </p>

          <h1
            id="get-involved-hero-title"
            className="mt-3 font-display text-[clamp(2.2rem,1.2rem+4.5vw,4.25rem)] leading-[1.03] font-normal tracking-[-0.01em] text-white"
          >
            {GET_INVOLVED_HERO.heading}
          </h1>

          <p
            className="hero-rise mt-3 font-quote text-[clamp(1.25rem,1rem+1.2vw,1.85rem)] leading-snug text-gold italic"
            style={{ animationDelay: '150ms' }}
          >
            {GET_INVOLVED_HERO.headline}
          </p>

          <div
            className="hero-rise mt-5 flex max-w-2xl gap-5"
            style={{ animationDelay: '210ms' }}
          >
            <span aria-hidden="true" className="mt-1.5 w-0.5 shrink-0 self-stretch rounded-full bg-gold/75" />
            <p className="text-lead text-on-dark-muted">{GET_INVOLVED_HERO.description}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
