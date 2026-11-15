import { Sparkles } from 'lucide-react'
import { ABOUT_VISION } from '@/content/about'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/RevealAnimation'

/**
 * SECTION 4 — OUR VISION
 * Deep teal contrasting section, golden yellow accents, and an
 * inspirational quotation-style presentation communicating the future we seek.
 */
export function OurVision() {
  return (
    <section
      id="our-vision"
      aria-labelledby="vision-heading"
      className="section-y relative isolate overflow-hidden bg-teal-deep text-white"
    >
      {/* Subtle radial glow & geometric rings */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_60%_at_50%_50%,rgba(15,118,110,0.45),transparent_75%)]"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-[46rem] -translate-x-1/2 -translate-y-1/2 opacity-20"
        viewBox="0 0 600 600"
        fill="none"
      >
        <circle cx="300" cy="300" r="280" stroke="#F4C430" strokeDasharray="2 10" />
        <circle cx="300" cy="300" r="210" stroke="#FFFFFF" strokeOpacity="0.4" />
      </svg>

      <Container size="narrow" className="text-center">
        <Reveal>
          <p className="eyebrow inline-flex items-center justify-center gap-3 text-gold">
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
            <Sparkles aria-hidden="true" className="size-3.5 text-gold" />
            {ABOUT_VISION.eyebrow}
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
          </p>

          <h2 id="vision-heading" className="mt-3 font-display text-h2 font-normal text-white">
            {ABOUT_VISION.heading}
          </h2>
        </Reveal>

        <Reveal
          delay={0.1}
          as="figure"
          className="relative mt-7 rounded-3xl border border-gold/30 bg-white/[0.04] px-6 py-8 backdrop-blur-xs sm:px-12 sm:py-10"
        >
          <span aria-hidden="true" className="block font-quote text-5xl leading-none text-gold">
            “
          </span>
          <blockquote className="-mt-3">
            <p className="font-quote text-[clamp(1.3rem,1.05rem+1.1vw,2rem)] leading-[1.45] text-white italic">
              {ABOUT_VISION.statement}
            </p>
          </blockquote>
          <figcaption className="mt-6 inline-flex items-center gap-3 text-xs font-semibold tracking-wider text-gold uppercase">
            <span aria-hidden="true" className="h-px w-6 bg-gold" />
            Our Horizon for Inclusion in Rwanda
            <span aria-hidden="true" className="h-px w-6 bg-gold" />
          </figcaption>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mx-auto mt-6 max-w-xl text-sm text-on-dark-muted">{ABOUT_VISION.distinction}</p>
        </Reveal>
      </Container>
    </section>
  )
}
