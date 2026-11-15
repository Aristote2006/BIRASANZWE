import { RWANDA_TOUR_CTA } from '@/content/rwandaTour'
import { Container } from '@/components/ui/Container'
import { PrimaryButton, SecondaryButton } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/RevealAnimation'
import { SmartLink } from '@/components/ui/SmartLink'

/**
 * SECTION 5 — FINAL CTA
 * Heading: LET'S CREATE MORE OPPORTUNITIES TOGETHER.
 * Buttons: Support Our Projects, Become a Partner.
 */
export function TourCTA() {
  return (
    <section
      aria-labelledby="tour-cta-heading"
      className="section-y relative isolate overflow-hidden bg-teal-deep text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_65%_at_15%_15%,rgba(15,118,110,0.58),transparent_70%),radial-gradient(50%_50%_at_90%_90%,rgba(244,196,48,0.12),transparent_70%)]"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-24 -z-10 size-96 opacity-25"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="185" stroke="#F4C430" strokeDasharray="3 10" />
        <circle cx="200" cy="200" r="130" stroke="#FFFFFF" strokeOpacity="0.3" />
      </svg>

      <Container size="narrow" className="text-center">
        <Reveal>
          <p className="eyebrow inline-flex items-center justify-center gap-3 text-gold">
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
            {RWANDA_TOUR_CTA.eyebrow}
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
          </p>

          <h2 id="tour-cta-heading" className="mt-3 font-display text-h2 font-normal text-white">
            {RWANDA_TOUR_CTA.heading}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lead text-on-dark-muted">
            {RWANDA_TOUR_CTA.supporting}
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-8 flex flex-col items-center justify-center gap-3.5 min-[440px]:flex-row sm:gap-4"
        >
          <PrimaryButton to={RWANDA_TOUR_CTA.primaryCta.to}>{RWANDA_TOUR_CTA.primaryCta.label}</PrimaryButton>
          <SecondaryButton to={RWANDA_TOUR_CTA.secondaryCta.to} variant="light">
            {RWANDA_TOUR_CTA.secondaryCta.label}
          </SecondaryButton>
        </Reveal>

        <Reveal delay={0.16} className="mt-6 text-xs text-on-dark-muted">
          <SmartLink
            to="/projects"
            className="font-bold text-gold underline decoration-gold/60 underline-offset-4 transition-colors hover:text-white"
          >
            ← Back to All Projects
          </SmartLink>
        </Reveal>
      </Container>
    </section>
  )
}
