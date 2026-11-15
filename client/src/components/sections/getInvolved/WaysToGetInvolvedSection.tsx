import {
  ArrowRight,
  Handshake,
  HeartHandshake,
  Megaphone,
  Users,
  type LucideIcon,
} from 'lucide-react'
import {
  WAYS_TO_GET_INVOLVED,
  WAYS_TO_GET_INVOLVED_HEADER,
  type InvolvementWay,
} from '@/content/getInvolved'
import { buildDirectWhatsAppUrl } from '@/lib/whatsapp'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealGroup, RevealItem } from '@/components/ui/RevealAnimation'

const WAY_ICONS: Record<InvolvementWay['id'], LucideIcon> = {
  volunteer: Users,
  partner: Handshake,
  support: HeartHandshake,
  awareness: Megaphone,
}

/**
 * SECTION 2 — WAYS TO GET INVOLVED
 * Four cards:
 * - Volunteer — Share your time, talents, and skills.
 * - Become a Partner — Collaborate with us to create meaningful opportunities.
 * - Support Our Mission — Contribute resources to support our initiatives.
 * - Spread Awareness — Help share our message of inclusion and ability.
 */
export function WaysToGetInvolvedSection() {
  return (
    <section
      id="ways-to-get-involved"
      aria-labelledby="ways-to-get-involved-heading"
      className="on-light section-y bg-mist"
    >
      <Container>
        <SectionHeading
          id="ways-to-get-involved-heading"
          align="center"
          eyebrow={WAYS_TO_GET_INVOLVED_HEADER.eyebrow}
          title={WAYS_TO_GET_INVOLVED_HEADER.heading}
        />

        <RevealGroup
          as="ul"
          stagger={0.08}
          className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {WAYS_TO_GET_INVOLVED.map((item, idx) => {
            const Icon = WAY_ICONS[item.id] ?? Users
            const href = buildDirectWhatsAppUrl(item.whatsappMessage)

            return (
              <RevealItem as="li" key={item.id}>
                <article
                  id={item.id}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-teal-100 bg-white p-6 shadow-[0_16px_36px_-26px_rgba(8,63,59,0.28)] transition-[border-color,box-shadow,transform] duration-300 ease-premium hover:-translate-y-0.5 hover:border-gold/75 hover:shadow-[0_22px_44px_-22px_rgba(8,63,59,0.38)] sm:p-7"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal via-gold to-teal opacity-85"
                  />

                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="grid size-12 place-items-center rounded-2xl bg-teal-deep text-gold shadow-xs">
                        <Icon aria-hidden="true" className="size-5" strokeWidth={1.85} />
                      </span>
                      <span
                        aria-hidden="true"
                        className="font-sans text-xs font-extrabold tracking-[0.2em] text-teal/65"
                      >
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-[1.4rem] leading-snug font-normal text-teal-deep">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-2">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.ctaLabel} — ${item.title}`}
                      className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-teal/25 bg-teal-50 px-5 py-2.5 text-sm font-bold text-teal-deep transition-colors duration-200 hover:border-teal-deep hover:bg-teal-deep hover:text-gold"
                    >
                      <span>{item.ctaLabel}</span>
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </a>
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
