import { ArrowRight, Handshake, HeartHandshake, Share2, Users, type LucideIcon } from 'lucide-react'
import { SUPPORT_OPTIONS, SUPPORT_OPTIONS_HEADER, type SupportOption } from '@/content/support'
import { buildDirectWhatsAppUrl } from '@/lib/whatsapp'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealGroup, RevealItem } from '@/components/ui/RevealAnimation'

const SUPPORT_ICONS: Record<SupportOption['id'], LucideIcon> = {
  financial: HeartHandshake,
  volunteer: Users,
  partner: Handshake,
  share: Share2,
}

/**
 * SECTION 2 — HOW YOU CAN SUPPORT US
 * Four simple, clear cards:
 * - Financial Support
 * - Volunteer With Us
 * - Become a Partner
 * - Share Our Mission
 * Each card includes a short description and a clear "Contact Us" button.
 */
export function SupportOptionsSection() {
  return (
    <section
      id="ways-to-support"
      aria-labelledby="support-options-heading"
      className="on-light section-y bg-mist"
    >
      <Container>
        <SectionHeading
          id="support-options-heading"
          align="center"
          eyebrow={SUPPORT_OPTIONS_HEADER.eyebrow}
          title={SUPPORT_OPTIONS_HEADER.heading}
        />

        <RevealGroup
          as="ul"
          stagger={0.08}
          className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SUPPORT_OPTIONS.map((item) => {
            const Icon = SUPPORT_ICONS[item.id] ?? HeartHandshake
            const href = buildDirectWhatsAppUrl(item.whatsappMessage)

            return (
              <RevealItem as="li" key={item.id}>
                <article className="group flex h-full flex-col justify-between rounded-3xl border border-teal-100 bg-white p-6 shadow-[0_16px_36px_-26px_rgba(8,63,59,0.28)] transition-[border-color,box-shadow,transform] duration-300 ease-premium hover:-translate-y-0.5 hover:border-gold/75 hover:shadow-[0_22px_44px_-22px_rgba(8,63,59,0.38)] sm:p-7">
                  <div>
                    <span className="grid size-12 place-items-center rounded-2xl bg-teal-deep text-gold shadow-xs">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.85} />
                    </span>

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
                      aria-label={`${item.buttonLabel} about ${item.title}`}
                      className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-teal/25 bg-teal-50 px-5 py-2.5 text-sm font-bold text-teal-deep transition-colors duration-200 hover:border-teal-deep hover:bg-teal-deep hover:text-gold"
                    >
                      <span>{item.buttonLabel}</span>
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
