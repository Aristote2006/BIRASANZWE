import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { CONTACT_INFO_SECTION, DEFAULT_CONTACT_WHATSAPP_MESSAGE } from '@/content/contact'
import { SITE } from '@/lib/site'
import { buildDirectWhatsAppUrl } from '@/lib/whatsapp'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/RevealAnimation'

/**
 * SECTION 2 — CONTACT INFORMATION & WHATSAPP BUTTON
 * Reuses the exact contact details from `SITE` (`@/lib/site`):
 * - Existing phone number (`SITE.phoneDisplay`)
 * - Existing email address (`SITE.email || SITE.emailFallbackLabel`)
 * - Existing physical address (`SITE.address`)
 * - Direct WhatsApp contact button
 */
export function ContactInfoSection() {
  const whatsappUrl = buildDirectWhatsAppUrl(DEFAULT_CONTACT_WHATSAPP_MESSAGE)

  return (
    <section
      id="contact-details"
      aria-labelledby="contact-details-heading"
      className="on-light section-y bg-mist"
    >
      <Container>
        <SectionHeading
          id="contact-details-heading"
          align="center"
          eyebrow={CONTACT_INFO_SECTION.eyebrow}
          title={CONTACT_INFO_SECTION.heading}
        />

        <RevealGroup
          as="ul"
          stagger={0.08}
          className="mt-9 grid gap-5 sm:grid-cols-3"
        >
          {/* Phone Number */}
          <RevealItem as="li">
            <article className="flex h-full flex-col justify-between rounded-3xl border border-teal-100 bg-white p-6 shadow-[0_16px_36px_-26px_rgba(8,63,59,0.28)] sm:p-7">
              <div>
                <span className="grid size-12 place-items-center rounded-2xl bg-teal-deep text-gold shadow-xs">
                  <Phone aria-hidden="true" className="size-5" strokeWidth={1.85} />
                </span>
                <h3 className="mt-5 font-display text-[1.35rem] leading-snug font-normal text-teal-deep">
                  Phone &amp; WhatsApp
                </h3>
                <p className="mt-2 text-base font-bold text-charcoal">
                  <a
                    href={`tel:${SITE.phoneDisplay.replace(/\s+/g, '')}`}
                    className="transition-colors hover:text-teal"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </p>
              </div>
            </article>
          </RevealItem>

          {/* Email Address */}
          <RevealItem as="li">
            <article className="flex h-full flex-col justify-between rounded-3xl border border-teal-100 bg-white p-6 shadow-[0_16px_36px_-26px_rgba(8,63,59,0.28)] sm:p-7">
              <div>
                <span className="grid size-12 place-items-center rounded-2xl bg-teal-deep text-gold shadow-xs">
                  <Mail aria-hidden="true" className="size-5" strokeWidth={1.85} />
                </span>
                <h3 className="mt-5 font-display text-[1.35rem] leading-snug font-normal text-teal-deep">
                  Email Address
                </h3>
                <p className="mt-2 text-[0.95rem] font-semibold text-ink-muted">
                  {SITE.email ? (
                    <a
                      href={`mailto:${SITE.email}`}
                      className="font-bold text-charcoal transition-colors hover:text-teal"
                    >
                      {SITE.email}
                    </a>
                  ) : (
                    SITE.emailFallbackLabel
                  )}
                </p>
              </div>
            </article>
          </RevealItem>

          {/* Physical Address */}
          <RevealItem as="li">
            <article className="flex h-full flex-col justify-between rounded-3xl border border-teal-100 bg-white p-6 shadow-[0_16px_36px_-26px_rgba(8,63,59,0.28)] sm:p-7">
              <div>
                <span className="grid size-12 place-items-center rounded-2xl bg-teal-deep text-gold shadow-xs">
                  <MapPin aria-hidden="true" className="size-5" strokeWidth={1.85} />
                </span>
                <h3 className="mt-5 font-display text-[1.35rem] leading-snug font-normal text-teal-deep">
                  Location
                </h3>
                <p className="mt-2 text-base font-bold text-charcoal">{SITE.address}</p>
              </div>
            </article>
          </RevealItem>
        </RevealGroup>

        <Reveal delay={0.12} className="mt-8 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-gold px-8 py-3.5 font-sans text-base font-bold text-teal-deep shadow-[0_10px_28px_-10px_rgba(244,196,48,0.85)] transition-[background-color,transform,box-shadow] duration-300 ease-premium hover:-translate-y-0.5 hover:bg-[#ffd451] active:scale-[0.98]"
          >
            <MessageCircle
              aria-hidden="true"
              className="size-5 fill-teal-deep transition-transform duration-300 group-hover:-rotate-6"
            />
            <span>{CONTACT_INFO_SECTION.whatsappButtonLabel}</span>
          </a>
        </Reveal>
      </Container>
    </section>
  )
}
