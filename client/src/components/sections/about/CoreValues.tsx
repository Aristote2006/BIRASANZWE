import {
  Award,
  Flame,
  Handshake,
  HeartHandshake,
  Scale,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { ABOUT_VALUES } from '@/content/about'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealGroup, RevealItem } from '@/components/ui/RevealAnimation'

const VALUE_ICONS: Record<string, LucideIcon> = {
  dignity: HeartHandshake,
  inclusion: Users,
  ability: Award,
  equality: Scale,
  empowerment: Flame,
  collaboration: Handshake,
}

/**
 * SECTION 5 — OUR CORE VALUES
 * Six value cards in a responsive 3-column grid on a light gray background,
 * featuring Lucide icons, teal and gold accents, and subtle hover transitions.
 */
export function CoreValues() {
  return (
    <section id="core-values" aria-labelledby="values-heading" className="on-light section-y bg-mist">
      <Container>
        <SectionHeading
          id="values-heading"
          align="center"
          eyebrow={ABOUT_VALUES.eyebrow}
          title={ABOUT_VALUES.heading}
          description={ABOUT_VALUES.description}
        />

        <RevealGroup
          as="ul"
          stagger={0.08}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ABOUT_VALUES.items.map((item, index) => {
            const Icon = VALUE_ICONS[item.key] ?? Award
            return (
              <RevealItem as="li" key={item.key}>
                <article className="group relative flex h-full flex-col rounded-2xl border border-teal-100 bg-white p-6 transition-[border-color,box-shadow,transform] duration-400 ease-premium hover:-translate-y-0.5 hover:border-gold/70 hover:shadow-[0_18px_36px_-24px_rgba(8,63,59,0.28)] sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-xl bg-teal-50 text-teal ring-1 ring-teal-100 transition-colors duration-300 group-hover:bg-teal group-hover:text-gold">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.85} />
                    </span>
                    <span aria-hidden="true" className="font-display text-lg text-teal/30">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-[1.4rem] leading-tight font-normal text-teal-deep">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">{item.description}</p>

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
