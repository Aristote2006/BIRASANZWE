import { Handshake, Layers, Megaphone, Sparkles, type LucideIcon } from 'lucide-react'
import { ABOUT_APPROACH } from '@/content/about'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealGroup, RevealItem } from '@/components/ui/RevealAnimation'

const APPROACH_ICONS: Record<string, LucideIcon> = {
  talent: Sparkles,
  platforms: Layers,
  inclusion: Megaphone,
  partnerships: Handshake,
}

/**
 * SECTION 6 — OUR APPROACH
 * Four pillars displayed in a horizontal 4-column layout on desktop
 * and a vertical stacked layout on mobile.
 */
export function OurApproach() {
  return (
    <section id="our-approach" aria-labelledby="approach-heading" className="on-light section-y bg-white">
      <Container>
        <SectionHeading
          id="approach-heading"
          eyebrow={ABOUT_APPROACH.eyebrow}
          title={ABOUT_APPROACH.heading}
          description={ABOUT_APPROACH.description}
        />

        <RevealGroup
          as="ol"
          stagger={0.1}
          className="relative mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {ABOUT_APPROACH.pillars.map((pillar, idx) => {
            const Icon = APPROACH_ICONS[pillar.key] ?? Sparkles
            return (
              <RevealItem as="li" key={pillar.key} className="relative">
                {/* Subtle desktop connector line between pillars */}
                {idx < ABOUT_APPROACH.pillars.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-11 right-[-1.25rem] z-10 hidden h-px w-5 bg-gold/70 lg:block"
                  />
                )}

                <article className="group flex h-full flex-col rounded-2xl border border-teal-100 bg-mist/45 p-6 transition-[border-color,background-color] duration-300 hover:border-teal/40 hover:bg-teal-50/50">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full bg-teal-deep px-3 py-1 font-display text-xs tracking-wider text-gold">
                      Pillar {pillar.step}
                    </span>
                    <span className="grid size-10 place-items-center rounded-xl bg-white text-teal shadow-xs ring-1 ring-teal-100">
                      <Icon aria-hidden="true" className="size-4.5" strokeWidth={1.85} />
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-[1.35rem] leading-tight font-normal text-teal-deep">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{pillar.description}</p>
                </article>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </Container>
    </section>
  )
}
