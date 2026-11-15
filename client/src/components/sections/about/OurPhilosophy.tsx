import { ABOUT_PHILOSOPHY } from '@/content/about'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/RevealAnimation'

/**
 * SECTION 7 — OUR PHILOSOPHY
 * Deep teal background, large DM Serif Display statement, golden yellow emphasis,
 * Playfair Display supporting lines, and abstract architectural lines.
 */
export function OurPhilosophy() {
  return (
    <section
      id="our-philosophy"
      aria-labelledby="philosophy-heading"
      className="section-y relative isolate overflow-hidden bg-teal-deep text-white"
    >
      {/* Abstract architectural lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(125deg,#083F3B_0%,#115E59_50%,#083F3B_100%)]"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-25"
        viewBox="0 0 1200 500"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M-100 420 C 300 180, 900 180, 1300 420" stroke="#F4C430" strokeWidth="1" strokeDasharray="4 10" />
        <path d="M-100 80 C 350 320, 850 320, 1300 80" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="1" />
      </svg>

      <Container size="narrow" className="text-center">
        <Reveal>
          <p className="eyebrow inline-flex items-center justify-center gap-3 text-gold">
            <span aria-hidden="true" className="h-px w-10 bg-gold" />
            {ABOUT_PHILOSOPHY.eyebrow}
            <span aria-hidden="true" className="h-px w-10 bg-gold" />
          </p>

          <h2
            id="philosophy-heading"
            className="mt-5 font-display text-[clamp(2.15rem,1.2rem+4.2vw,4.25rem)] leading-[1.04] font-normal tracking-[-0.01em]"
          >
            DISABILITY IS <span className="text-gold">NOT INABILITY</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.12} className="mt-7">
          <div aria-hidden="true" className="mx-auto mb-6 h-px w-20 bg-gold/70" />
          <blockquote className="space-y-2 font-quote text-[clamp(1.2rem,1rem+0.9vw,1.7rem)] leading-relaxed text-on-dark-muted italic">
            {ABOUT_PHILOSOPHY.supportingLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </blockquote>
        </Reveal>
      </Container>
    </section>
  )
}
