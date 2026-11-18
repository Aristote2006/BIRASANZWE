import {
  Award,
  CheckCircle2,
  Handshake,
  HeartHandshake,
  Mail,
  MapPin,
  Music,
  Phone,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react'
import {
  RWANDA_TOUR_GEOGRAPHIC_COVERAGE,
  RWANDA_TOUR_IMPACT,
  RWANDA_TOUR_PARTNERSHIPS,
} from '@/content/rwandaTour'
import { buildDirectWhatsAppUrl } from '@/lib/whatsapp'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/RevealAnimation'

const IMPACT_ICONS: Record<string, LucideIcon> = {
  awareness: Award,
  engagement: Users,
  support: HeartHandshake,
  culture: Music,
}

/**
 * SECTION 4 — GEOGRAPHIC COVERAGE, EXPECTED IMPACT & PARTNERSHIP OPPORTUNITIES
 * Sourced directly from the BIRASANZWE RWANDA TOUR 2026 Concept Note.
 */
export function TourWhyItMatters() {
  const partnerWhatsappUrl = buildDirectWhatsAppUrl(
    'Hello Aubea Mugaara & BIRASANZWE INITIATIVE! We would like to partner with BIRASANZWE Rwanda Tour 2026.',
  )

  return (
    <section aria-labelledby="tour-impact-heading" className="on-light section-y bg-white">
      <Container>
        {/* 1. Geographic Coverage */}
        <div>
          <SectionHeading
            id="tour-coverage-heading"
            align="center"
            eyebrow={RWANDA_TOUR_GEOGRAPHIC_COVERAGE.eyebrow}
            title={RWANDA_TOUR_GEOGRAPHIC_COVERAGE.heading}
            description={RWANDA_TOUR_GEOGRAPHIC_COVERAGE.description}
          />

          <RevealGroup
            as="ol"
            stagger={0.08}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            {RWANDA_TOUR_GEOGRAPHIC_COVERAGE.stops.map((stop) => (
              <RevealItem as="li" key={stop.city}>
                <article
                  className={
                    stop.isFinale
                      ? 'flex h-full flex-col justify-between rounded-2xl border border-gold bg-teal-deep p-5 text-white shadow-[0_18px_36px_-22px_rgba(8,63,59,0.55)]'
                      : 'flex h-full flex-col justify-between rounded-2xl border border-teal-100 bg-mist/50 p-5 transition-colors hover:border-gold/75 hover:bg-white'
                  }
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={
                          stop.isFinale
                            ? 'grid size-10 place-items-center rounded-xl bg-gold text-teal-deep'
                            : 'grid size-10 place-items-center rounded-xl bg-teal-deep text-gold'
                        }
                      >
                        {stop.isFinale ? (
                          <Sparkles aria-hidden="true" className="size-4.5" />
                        ) : (
                          <MapPin aria-hidden="true" className="size-4.5" />
                        )}
                      </span>
                      <span
                        className={
                          stop.isFinale
                            ? 'font-sans text-xs font-extrabold tracking-[0.2em] text-gold'
                            : 'font-sans text-xs font-extrabold tracking-[0.2em] text-teal/65'
                        }
                      >
                        STOP {stop.step}
                      </span>
                    </div>

                    <h3
                      className={
                        stop.isFinale
                          ? 'mt-4 font-display text-2xl font-normal text-gold'
                          : 'mt-4 font-display text-2xl font-normal text-teal-deep'
                      }
                    >
                      {stop.city}
                    </h3>
                    <p
                      className={
                        stop.isFinale
                          ? 'mt-1 text-sm font-bold text-white'
                          : 'mt-1 text-sm font-bold text-teal'
                      }
                    >
                      {stop.region}
                    </p>
                  </div>

                  <p
                    className={
                      stop.isFinale
                        ? 'mt-3 text-xs text-on-dark-muted'
                        : 'mt-3 text-xs text-ink-muted'
                    }
                  >
                    {stop.highlight}
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* 2. Expected Impact */}
        <div className="mt-14 sm:mt-16">
          <SectionHeading
            id="tour-impact-heading"
            align="center"
            eyebrow={RWANDA_TOUR_IMPACT.eyebrow}
            title={RWANDA_TOUR_IMPACT.heading}
          />

          <RevealGroup
            as="ul"
            stagger={0.08}
            className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {RWANDA_TOUR_IMPACT.cards.map((card, index) => {
              const Icon = IMPACT_ICONS[card.key] ?? Award
              return (
                <RevealItem as="li" key={card.key}>
                  <article className="group flex h-full flex-col rounded-2xl border border-teal-100 bg-mist/45 p-6 transition-[border-color,background-color,box-shadow,transform] duration-400 ease-premium hover:-translate-y-0.5 hover:border-gold/70 hover:bg-white hover:shadow-[0_18px_36px_-24px_rgba(8,63,59,0.28)]">
                    <div className="flex items-center justify-between">
                      <span className="grid size-11 place-items-center rounded-xl bg-teal text-gold shadow-xs">
                        <Icon aria-hidden="true" className="size-5" strokeWidth={1.85} />
                      </span>
                      <span aria-hidden="true" className="font-display text-lg text-teal/30">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-[1.35rem] leading-tight font-normal text-teal-deep">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-[0.93rem] leading-relaxed text-ink-muted">{card.description}</p>

                    <div aria-hidden="true" className="mt-auto pt-5">
                      <span className="block h-0.5 w-8 origin-left rounded-full bg-gold transition-transform duration-400 ease-premium group-hover:scale-x-[2.2]" />
                    </div>
                  </article>
                </RevealItem>
              )
            })}
          </RevealGroup>
        </div>

        {/* 3. Partnership Opportunities & Project Lead Contact */}
        <Reveal className="mt-14 sm:mt-16">
          <div className="grid items-center gap-8 rounded-3xl border border-teal-100 bg-mist/60 p-6 sm:p-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow inline-flex items-center gap-3 text-teal">
                <span aria-hidden="true" className="h-px w-8 bg-gold" />
                {RWANDA_TOUR_PARTNERSHIPS.eyebrow}
              </p>
              <h3 className="mt-2 font-display text-h3 font-normal text-teal-deep">
                {RWANDA_TOUR_PARTNERSHIPS.heading}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
                {RWANDA_TOUR_PARTNERSHIPS.description}
              </p>

              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {RWANDA_TOUR_PARTNERSHIPS.opportunities.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-teal-100 bg-white px-4 py-2.5 text-sm font-bold text-teal-deep"
                  >
                    <CheckCircle2 aria-hidden="true" className="size-4 shrink-0 text-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-teal-deep p-6 text-white shadow-lg sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-gold text-teal-deep">
                    <Handshake aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <p className="eyebrow text-gold">PROJECT LEAD CONTACT</p>
                    <h4 className="font-display text-xl font-normal text-white">
                      {RWANDA_TOUR_PARTNERSHIPS.contactLead.name}
                    </h4>
                    <p className="text-xs text-on-dark-muted">{RWANDA_TOUR_PARTNERSHIPS.contactLead.role}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5 text-sm text-on-dark-muted">
                  <li className="flex items-center gap-3">
                    <Phone aria-hidden="true" className="size-4 text-gold" />
                    <a
                      href={`tel:${RWANDA_TOUR_PARTNERSHIPS.contactLead.phone.replace(/\s+/g, '')}`}
                      className="font-semibold text-white transition-colors hover:text-gold"
                    >
                      {RWANDA_TOUR_PARTNERSHIPS.contactLead.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail aria-hidden="true" className="size-4 text-gold" />
                    <a
                      href={`mailto:${RWANDA_TOUR_PARTNERSHIPS.contactLead.email}`}
                      className="font-semibold text-white transition-colors hover:text-gold"
                    >
                      {RWANDA_TOUR_PARTNERSHIPS.contactLead.email}
                    </a>
                  </li>
                </ul>

                <a
                  href={partnerWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-teal-deep transition-colors hover:bg-[#ffd451]"
                >
                  Partner With the Tour on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
