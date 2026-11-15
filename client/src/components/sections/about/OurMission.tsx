import { Compass } from 'lucide-react'
import { ABOUT_MISSION } from '@/content/about'
import { Container } from '@/components/ui/Container'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/RevealAnimation'

/**
 * SECTION 3 — OUR MISSION
 * Light gray background, deep teal heading, golden yellow accents,
 * and a distinctive editorial mission statement panel.
 */
export function OurMission() {
  return (
    <section id="our-mission" aria-labelledby="mission-heading" className="on-light section-y bg-mist">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Heading column */}
          <Reveal className="lg:col-span-5">
            <p className="eyebrow inline-flex items-center gap-3 text-teal">
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              {ABOUT_MISSION.eyebrow}
            </p>
            <h2 id="mission-heading" className="mt-3 font-display text-h2 font-normal text-teal-deep">
              <span className="block">{ABOUT_MISSION.headingLines[0]}</span>
              <span className="block text-teal">{ABOUT_MISSION.headingLines[1]}</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Our mission defines our everyday commitment to persons with disabilities across Rwanda — turning belief
              into visible platforms for talent and participation.
            </p>
          </Reveal>

          {/* Distinctive mission statement panel */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-teal-100 bg-white p-7 shadow-[0_24px_50px_-28px_rgba(8,63,59,0.28)] sm:p-10">
              {/* Top gold accent bar */}
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-gold" />

              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] text-teal uppercase">
                  <Compass aria-hidden="true" className="size-4 text-gold" />
                  Mission Mandate
                </span>
                <span aria-hidden="true" className="font-display text-2xl text-teal/25">
                  01
                </span>
              </div>

              <blockquote className="mt-5">
                <p className="font-display text-[clamp(1.35rem,1.1rem+1vw,1.95rem)] leading-[1.35] text-teal-deep">
                  “{ABOUT_MISSION.statement}”
                </p>
              </blockquote>

              <RevealGroup
                as="ul"
                className="mt-7 grid gap-4 border-t border-teal-100 pt-6 sm:grid-cols-3"
              >
                {ABOUT_MISSION.pillars.map((item) => (
                  <RevealItem as="li" key={item.label}>
                    <span className="block text-xs font-extrabold tracking-[0.16em] text-teal uppercase">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-ink-muted">{item.detail}</span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
