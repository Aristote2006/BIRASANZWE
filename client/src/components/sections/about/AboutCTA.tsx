import { ABOUT_CTA } from '@/content/about'
import { Container } from '@/components/ui/Container'
import { PrimaryButton, SecondaryButton } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/RevealAnimation'
import { SmartLink } from '@/components/ui/SmartLink'

/**
 * SECTION 9 — CALL TO ACTION
 * Closing CTA section on deep teal with golden yellow primary button,
 * secondary mission support button, and internal navigation links.
 */
export function AboutCTA() {
  return (
    <section
      aria-labelledby="about-cta-heading"
      className="section-y relative isolate overflow-hidden bg-teal-deep text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_65%_at_15%_15%,rgba(15,118,110,0.55),transparent_70%),radial-gradient(50%_50%_at_90%_90%,rgba(244,196,48,0.12),transparent_70%)]"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -bottom-28 -z-10 size-96 opacity-25"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="185" stroke="#F4C430" strokeDasharray="3 10" />
        <circle cx="200" cy="200" r="135" stroke="#FFFFFF" strokeOpacity="0.3" />
      </svg>

      <Container size="narrow" className="text-center">
        <Reveal>
          <p className="eyebrow inline-flex items-center justify-center gap-3 text-gold">
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
            {ABOUT_CTA.eyebrow}
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
          </p>

          <h2 id="about-cta-heading" className="mt-3 font-display text-h2 font-normal text-white">
            {ABOUT_CTA.heading}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lead text-on-dark-muted">{ABOUT_CTA.supporting}</p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-8 flex flex-col items-center justify-center gap-3.5 min-[440px]:flex-row sm:gap-4"
        >
          <PrimaryButton to={ABOUT_CTA.primaryCta.to}>{ABOUT_CTA.primaryCta.label}</PrimaryButton>
          <SecondaryButton to={ABOUT_CTA.secondaryCta.to} variant="light">
            {ABOUT_CTA.secondaryCta.label}
          </SecondaryButton>
        </Reveal>

        <Reveal delay={0.16} className="mt-7 text-xs text-on-dark-muted">
          Prefer to message our team directly?{' '}
          <SmartLink
            to="/#contact"
            className="font-bold text-gold underline decoration-gold/60 underline-offset-4 transition-colors hover:text-white"
          >
            Reach out via our homepage contact form
          </SmartLink>
          .
        </Reveal>
      </Container>
    </section>
  )
}
