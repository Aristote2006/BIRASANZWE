import { CONTACT_MAP_SECTION } from '@/content/contact'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/RevealAnimation'

/**
 * SECTION 3 — FIND US ON THE MAP
 * Responsive Google Maps iframe inside a clean, rounded container.
 */
export function ContactMapSection() {
  return (
    <section
      id="find-us-on-the-map"
      aria-labelledby="contact-map-heading"
      className="on-light section-y bg-white"
    >
      <Container>
        <SectionHeading
          id="contact-map-heading"
          align="center"
          eyebrow={CONTACT_MAP_SECTION.eyebrow}
          title={CONTACT_MAP_SECTION.heading}
        />

        <Reveal delay={0.08} className="mt-8">
          <div className="overflow-hidden rounded-3xl border border-teal-100 bg-mist p-2 shadow-[0_24px_52px_-28px_rgba(8,63,59,0.32)] sm:p-3">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-teal-50 sm:aspect-[16/8]">
              <iframe
                src={CONTACT_MAP_SECTION.iframeSrc}
                title={CONTACT_MAP_SECTION.iframeTitle}
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
