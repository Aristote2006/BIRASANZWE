import { Quote } from 'lucide-react'
import { RWANDA_TOUR_STORY } from '@/content/rwandaTour'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/RevealAnimation'
import { SmartLink } from '@/components/ui/SmartLink'

/**
 * SECTION 2 — PROJECT STORY
 * Concise editorial section introducing Birasanzwe Rwanda Tour — Edition 1
 * alongside the highlighted quotation "Disability Is Not Inability."
 */
export function TourStory() {
  return (
    <section id="project-story" aria-labelledby="tour-story-heading" className="on-light section-y bg-white">
      <Container>
        <div className="grid items-center gap-9 lg:grid-cols-12 lg:gap-12">
          {/* Editorial introduction */}
          <Reveal className="lg:col-span-7">
            <p className="eyebrow inline-flex items-center gap-3 text-teal">
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              {RWANDA_TOUR_STORY.eyebrow}
            </p>
            <h2
              id="tour-story-heading"
              className="mt-3 font-display text-h2 font-normal text-teal-deep"
            >
              {RWANDA_TOUR_STORY.heading}
            </h2>
            <p className="mt-4 text-lead leading-relaxed text-ink-muted">
              {RWANDA_TOUR_STORY.paragraph}
            </p>
            <p className="mt-4 text-sm text-ink-muted">
              Grounded in the values of{' '}
              <SmartLink
                to="/about"
                className="font-bold text-teal underline decoration-gold decoration-2 underline-offset-4 hover:text-teal-deep"
              >
                Birasanzwe Initiative
              </SmartLink>
              , this flagship tour opens doors for lasting recognition and community inclusion.
            </p>
          </Reveal>

          {/* Highlighted quotation card */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <figure className="relative overflow-hidden rounded-3xl border border-teal-100 bg-teal-deep p-7 text-white shadow-[0_24px_48px_-28px_rgba(8,63,59,0.5)] sm:p-9">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-gold" />
              <Quote
                aria-hidden="true"
                className="absolute top-5 right-5 size-12 rotate-180 text-gold/25"
                strokeWidth={1.2}
              />
              <span aria-hidden="true" className="block font-quote text-5xl leading-none text-gold">
                “
              </span>
              <blockquote className="-mt-3">
                <p className="font-quote text-[clamp(1.5rem,1.2rem+1.1vw,2.15rem)] leading-tight text-white italic">
                  {RWANDA_TOUR_STORY.quotation}
                </p>
              </blockquote>
              <p className="mt-3 text-sm leading-relaxed text-on-dark-muted">
                {RWANDA_TOUR_STORY.quotationSubtext}
              </p>
              <figcaption className="mt-5 flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-gold uppercase">
                <span aria-hidden="true" className="h-0.5 w-7 rounded-full bg-gold" />
                Birasanzwe Rwanda Tour · Edition 01
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
