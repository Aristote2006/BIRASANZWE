import { Quote } from 'lucide-react'
import { IMPACT_MESSAGE } from '@/content/impact'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/RevealAnimation'

/**
 * SECTION 3 — IMPACT MESSAGE
 * Displays the inspirational statement prominently:
 * “Every talent recognized is a new possibility discovered. Every opportunity created is a step toward inclusion.”
 */
export function ImpactMessage() {
  return (
    <section
      aria-labelledby="impact-message-heading"
      className="section-y relative isolate overflow-hidden bg-teal-deep text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(125deg,#083F3B_0%,#115E59_50%,#083F3B_100%)]"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-25"
        viewBox="0 0 1200 420"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M-80 350 C 320 130, 880 130, 1280 350" stroke="#F4C430" strokeWidth="1.1" strokeDasharray="4 10" />
        <path d="M-80 70 C 360 280, 840 280, 1280 70" stroke="#FFFFFF" strokeOpacity="0.22" strokeWidth="1" />
      </svg>

      <Container size="narrow" className="text-center">
        <Reveal>
          <p
            id="impact-message-heading"
            className="eyebrow inline-flex items-center justify-center gap-3 text-gold"
          >
            <span aria-hidden="true" className="h-px w-10 bg-gold" />
            {IMPACT_MESSAGE.eyebrow}
            <span aria-hidden="true" className="h-px w-10 bg-gold" />
          </p>
        </Reveal>

        <Reveal delay={0.08} as="figure" className="relative mt-6">
          <Quote
            aria-hidden="true"
            className="mx-auto mb-3 size-10 text-gold/75"
            strokeWidth={1.5}
          />
          <blockquote>
            <p className="font-quote text-[clamp(1.45rem,1.1rem+1.5vw,2.35rem)] leading-[1.38] text-white italic">
              “{IMPACT_MESSAGE.quote}”
            </p>
          </blockquote>
          <figcaption className="mt-6 inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-gold uppercase">
            <span aria-hidden="true" className="h-px w-7 bg-gold" />
            {IMPACT_MESSAGE.attribution}
            <span aria-hidden="true" className="h-px w-7 bg-gold" />
          </figcaption>
        </Reveal>
      </Container>
    </section>
  )
}
