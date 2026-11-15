import { MessageCircle } from 'lucide-react'
import { JOIN_OUR_MOVEMENT } from '@/content/getInvolved'
import { SITE } from '@/lib/site'
import { buildDirectWhatsAppUrl } from '@/lib/whatsapp'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/RevealAnimation'

/**
 * SECTION 3 — JOIN OUR MOVEMENT
 * Heading: Together, We Make Inclusion Possible.
 * Short paragraph encouraging visitors to take the first step.
 * Button: Get Involved on WhatsApp — opens WhatsApp with pre-filled message:
 * "Hello BIRASANZWE INITIATIVE! I would love to get involved and contribute to your mission. Please tell me how I can participate."
 */
export function JoinMovementCTA() {
  const whatsappUrl = buildDirectWhatsAppUrl(JOIN_OUR_MOVEMENT.prefilledMessage)

  return (
    <section
      id="join-our-movement"
      aria-labelledby="join-movement-heading"
      className="on-light section-y bg-white"
    >
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-teal-deep px-6 py-10 text-center text-white shadow-[0_28px_60px_-30px_rgba(8,63,59,0.55)] sm:px-12 sm:py-14">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_15%_15%,rgba(15,118,110,0.6),transparent_70%),radial-gradient(50%_50%_at_90%_90%,rgba(244,196,48,0.14),transparent_70%)]"
          />

          <Reveal>
            <p className="eyebrow inline-flex items-center justify-center gap-3 text-gold">
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              {JOIN_OUR_MOVEMENT.eyebrow}
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
            </p>

            <h2
              id="join-movement-heading"
              className="mx-auto mt-3 max-w-2xl font-display text-h2 font-normal text-white"
            >
              {JOIN_OUR_MOVEMENT.heading}
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-lead text-on-dark-muted">
              {JOIN_OUR_MOVEMENT.description}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-8">
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
              <span>{JOIN_OUR_MOVEMENT.buttonLabel}</span>
            </a>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-4 text-xs font-semibold tracking-wider text-on-dark-muted">
              Official WhatsApp Line: <span className="text-gold">{SITE.phoneDisplay}</span>
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
