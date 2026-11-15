import { PROJECTS_PHILOSOPHY } from '@/content/projects'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/RevealAnimation'

/**
 * SECTION 4 — PROJECT PHILOSOPHY
 * Deep teal background, golden yellow highlights, DM Serif Display heading,
 * and subtle architectural curves reinforcing "Every Talent Deserves a Platform."
 */
export function ProjectsPhilosophy() {
  return (
    <section
      aria-labelledby="projects-philosophy-heading"
      className="section-y relative isolate overflow-hidden bg-teal-deep text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(130deg,#083F3B_0%,#115E59_50%,#083F3B_100%)]"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-25"
        viewBox="0 0 1200 420"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M-80 360 C 320 140, 880 140, 1280 360" stroke="#F4C430" strokeWidth="1.1" strokeDasharray="4 10" />
        <path d="M-80 70 C 360 280, 840 280, 1280 70" stroke="#FFFFFF" strokeOpacity="0.22" strokeWidth="1" />
      </svg>

      <Container size="narrow" className="text-center">
        <Reveal>
          <p className="eyebrow inline-flex items-center justify-center gap-3 text-gold">
            <span aria-hidden="true" className="h-px w-10 bg-gold" />
            {PROJECTS_PHILOSOPHY.eyebrow}
            <span aria-hidden="true" className="h-px w-10 bg-gold" />
          </p>

          <h2
            id="projects-philosophy-heading"
            className="mt-4 font-display text-[clamp(2rem,1.25rem+3.4vw,3.5rem)] leading-[1.08] font-normal text-white"
          >
            EVERY TALENT DESERVES <span className="text-gold">A PLATFORM.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-5">
          <div aria-hidden="true" className="mx-auto mb-5 h-px w-16 bg-gold/70" />
          <p className="mx-auto max-w-2xl font-quote text-[clamp(1.15rem,1rem+0.7vw,1.5rem)] leading-relaxed text-on-dark-muted italic">
            “{PROJECTS_PHILOSOPHY.supporting}”
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
