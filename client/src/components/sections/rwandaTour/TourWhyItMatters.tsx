import { Award, Compass, HeartHandshake, type LucideIcon } from 'lucide-react'
import { RWANDA_TOUR_IMPACT } from '@/content/rwandaTour'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealGroup, RevealItem } from '@/components/ui/RevealAnimation'

const IMPACT_ICONS: Record<string, LucideIcon> = {
  recognition: Award,
  inclusion: HeartHandshake,
  opportunity: Compass,
}

/**
 * SECTION 4 — WHY IT MATTERS
 * Heading: EVERY TALENT DESERVES A PLATFORM.
 * Three qualitative cards: Talent Recognition, Inclusion, Opportunity.
 */
export function TourWhyItMatters() {
  return (
    <section aria-labelledby="tour-impact-heading" className="on-light section-y bg-white">
      <Container>
        <SectionHeading
          id="tour-impact-heading"
          align="center"
          eyebrow={RWANDA_TOUR_IMPACT.eyebrow}
          title={RWANDA_TOUR_IMPACT.heading}
        />

        <RevealGroup
          as="ul"
          stagger={0.1}
          className="mt-10 grid gap-5 sm:grid-cols-3"
        >
          {RWANDA_TOUR_IMPACT.cards.map((card, index) => {
            const Icon = IMPACT_ICONS[card.key] ?? Award
            return (
              <RevealItem as="li" key={card.key}>
                <article className="group flex h-full flex-col rounded-2xl border border-teal-100 bg-mist/45 p-6 transition-[border-color,background-color,box-shadow,transform] duration-400 ease-premium hover:-translate-y-0.5 hover:border-gold/70 hover:bg-white hover:shadow-[0_18px_36px_-24px_rgba(8,63,59,0.28)] sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-xl bg-teal text-gold shadow-xs">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.85} />
                    </span>
                    <span aria-hidden="true" className="font-display text-lg text-teal/30">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-[1.45rem] leading-tight font-normal text-teal-deep">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-muted">{card.description}</p>

                  <div aria-hidden="true" className="mt-auto pt-5">
                    <span className="block h-0.5 w-8 origin-left rounded-full bg-gold transition-transform duration-400 ease-premium group-hover:scale-x-[2.2]" />
                  </div>
                </article>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </Container>
    </section>
  )
}
