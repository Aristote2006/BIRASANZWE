import { ABOUT_FUTURE } from '@/content/about'
import { Container } from '@/components/ui/Container'
import { PrimaryButton } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/RevealAnimation'
import { SmartLink } from '@/components/ui/SmartLink'

/**
 * SECTION 8 — OUR FUTURE
 * Forward-looking editorial section with a link to Projects and internal links.
 */
export function OurFuture() {
  return (
    <section id="our-future" aria-labelledby="future-heading" className="on-light section-y bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-teal-100 bg-mist/75 p-7 sm:p-10 lg:p-12">
          {/* Decorative corner accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full border border-gold/40"
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-8">
              <p className="eyebrow inline-flex items-center gap-3 text-teal">
                <span aria-hidden="true" className="h-px w-8 bg-gold" />
                {ABOUT_FUTURE.eyebrow}
              </p>
              <h2 id="future-heading" className="mt-3 font-display text-h2 font-normal text-teal-deep">
                {ABOUT_FUTURE.heading}
              </h2>
              <p className="mt-4 max-w-2xl text-lead text-ink-muted">{ABOUT_FUTURE.message}</p>
              <p className="mt-3 text-sm text-ink-muted">
                Learn more about how we turn this vision into action across our{' '}
                <SmartLink
                  to="/projects"
                  className="font-bold text-teal underline decoration-gold decoration-2 underline-offset-4 hover:text-teal-deep"
                >
                  featured initiatives
                </SmartLink>{' '}
                and{' '}
                <SmartLink
                  to="/impact"
                  className="font-bold text-teal underline decoration-gold decoration-2 underline-offset-4 hover:text-teal-deep"
                >
                  community impact
                </SmartLink>
                .
              </p>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-4 lg:flex lg:justify-end">
              <PrimaryButton to={ABOUT_FUTURE.cta.to}>{ABOUT_FUTURE.cta.label}</PrimaryButton>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
