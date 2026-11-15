import { Check, MapPin } from 'lucide-react'
import { FEATURED_PROJECT as P } from '@/content/home'
import { Container } from '@/components/ui/Container'
import { PrimaryButton } from '@/components/ui/Button'
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/RevealAnimation'
import { SmartLink } from '@/components/ui/SmartLink'

export function FeaturedProject() {
  return (
    <section id="featured-project" aria-labelledby="featured-title" className="on-light section-y relative overflow-hidden bg-mist">
      {/* Oversized edition numeral — quiet editorial texture */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-[-2rem] font-display text-[clamp(10rem,22vw,22rem)] leading-none text-teal/[0.05] select-none"
      >
        01
      </span>

      <Container className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
        {/* Media */}
        <Reveal variant="fade-in" className="relative order-last mx-auto w-full max-w-lg lg:order-first lg:col-span-5 lg:max-w-none">
          <div className="relative aspect-[4/3.6] max-h-[62svh] overflow-hidden rounded-[1.5rem] bg-teal-dark shadow-[0_24px_48px_-24px_rgba(8,63,59,0.5)]">
            <Reveal variant="image" className="h-full w-full">
              {P.image ? (
                <img
                  src={P.image.src}
                  width={P.image.width}
                  height={P.image.height}
                  alt={P.image.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              ) : (
                <MediaPlaceholder label="Rwanda Tour imagery" hint="Official project photos & video coming soon" />
              )}
            </Reveal>
            <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-gold px-3.5 py-1.5 text-xs font-extrabold tracking-[0.16em] text-teal-deep uppercase">
              {P.edition}
            </span>
          </div>
          <div className="absolute -right-3 -bottom-4 hidden items-center gap-2.5 rounded-xl bg-teal-deep px-4 py-3 text-white shadow-xl sm:flex lg:-right-5">
            <MapPin aria-hidden="true" className="size-4 text-gold" />
            <span className="text-xs font-semibold">Across Rwanda</span>
          </div>
        </Reveal>

        {/* Content */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-3 text-teal">
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              {P.eyebrow}
            </p>
            <h2 id="featured-title" className="mt-3 font-display text-h2 font-normal text-teal-deep">
              {P.title}
            </h2>
            <p className="mt-3 inline-flex items-center gap-3">
              <span className="rounded-full border border-teal/30 px-3.5 py-1 text-xs font-extrabold tracking-[0.18em] text-teal uppercase">
                {P.edition}
              </span>
              <span aria-hidden="true" className="h-px w-10 bg-gold" />
            </p>
            <p className="mt-4 max-w-xl text-lead text-ink-muted">{P.description}</p>
          </Reveal>

          <RevealGroup as="ul" className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
            {P.highlights.map((h) => (
              <RevealItem as="li" key={h.title} className="flex gap-3.5">
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-teal text-white">
                  <Check aria-hidden="true" className="size-3.5" strokeWidth={2.5} />
                </span>
                <span>
                  <span className="block text-[0.95rem] font-bold text-teal-deep">{h.title}</span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-ink-muted">{h.text}</span>
                </span>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.15} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
            <PrimaryButton to={P.to}>Discover the Project</PrimaryButton>
            <SmartLink
              to="#contact"
              className="group inline-flex min-h-11 items-center gap-2 font-bold text-teal underline decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-teal-deep"
            >
              Partner with this project
            </SmartLink>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
