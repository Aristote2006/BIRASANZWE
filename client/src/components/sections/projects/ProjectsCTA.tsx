import { PROJECTS_CTA } from '@/content/projects'
import { Container } from '@/components/ui/Container'
import { PrimaryButton, SecondaryButton } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/RevealAnimation'
import { SmartLink } from '@/components/ui/SmartLink'

/**
 * SECTION 5 — PROJECT CTA
 * Premium call-to-action section inviting visitors to Get Involved or Support Our Projects.
 */
export function ProjectsCTA() {
  return (
    <section
      aria-labelledby="projects-cta-heading"
      className="on-light section-y relative isolate overflow-hidden bg-white"
    >
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-teal-deep px-6 py-10 text-center text-white shadow-[0_28px_60px_-30px_rgba(8,63,59,0.55)] sm:px-12 sm:py-14">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_15%_15%,rgba(15,118,110,0.6),transparent_70%),radial-gradient(50%_50%_at_90%_90%,rgba(244,196,48,0.14),transparent_70%)]"
          />
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 -z-10 size-80 opacity-25"
            viewBox="0 0 360 360"
            fill="none"
          >
            <circle cx="180" cy="180" r="165" stroke="#F4C430" strokeDasharray="3 10" />
            <circle cx="180" cy="180" r="115" stroke="#FFFFFF" strokeOpacity="0.3" />
          </svg>

          <Reveal>
            <p className="eyebrow inline-flex items-center justify-center gap-3 text-gold">
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              {PROJECTS_CTA.eyebrow}
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
            </p>

            <h2
              id="projects-cta-heading"
              className="mx-auto mt-3 max-w-3xl font-display text-h2 font-normal text-white"
            >
              {PROJECTS_CTA.heading}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lead text-on-dark-muted">
              {PROJECTS_CTA.supporting}
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="mt-8 flex flex-col items-center justify-center gap-3.5 min-[440px]:flex-row sm:gap-4"
          >
            <PrimaryButton to={PROJECTS_CTA.primaryCta.to}>{PROJECTS_CTA.primaryCta.label}</PrimaryButton>
            <SecondaryButton to={PROJECTS_CTA.secondaryCta.to} variant="light">
              {PROJECTS_CTA.secondaryCta.label}
            </SecondaryButton>
          </Reveal>

          <Reveal delay={0.16} className="mt-6 text-xs text-on-dark-muted">
            Have a specific collaboration idea?{' '}
            <SmartLink
              to="/#contact"
              className="font-bold text-gold underline decoration-gold/60 underline-offset-4 transition-colors hover:text-white"
            >
              Send us a message on WhatsApp
            </SmartLink>
            .
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
