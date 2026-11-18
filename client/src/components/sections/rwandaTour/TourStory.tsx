import { CheckCircle2, Music, Quote, Target } from 'lucide-react'
import { RWANDA_TOUR_STORY } from '@/content/rwandaTour'
import { Container } from '@/components/ui/Container'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/RevealAnimation'
import { SmartLink } from '@/components/ui/SmartLink'

/**
 * SECTION 2 — CONCEPT NOTE, GOAL, OBJECTIVES & KEY ACTIVITIES
 * Sourced directly from the official BIRASANZWE RWANDA TOUR 2026 Concept Note.
 */
export function TourStory() {
  return (
    <section id="project-story" aria-labelledby="tour-story-heading" className="on-light section-y bg-white">
      <Container>
        <div className="grid items-center gap-9 lg:grid-cols-12 lg:gap-12">
          {/* Concept Note narrative */}
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
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              {RWANDA_TOUR_STORY.secondParagraph}
            </p>
            <p className="mt-4 text-sm text-ink-muted">
              Grounded in the values of{' '}
              <SmartLink
                to="/about"
                className="font-bold text-teal underline decoration-gold decoration-2 underline-offset-4 hover:text-teal-deep"
              >
                Birasanzwe Initiative
              </SmartLink>
              , this flagship tour unites artistic expression with practical support for vulnerable communities.
            </p>
          </Reveal>

          {/* Highlighted Goal card */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <figure className="relative overflow-hidden rounded-3xl border border-teal-100 bg-teal-deep p-7 text-white shadow-[0_24px_48px_-28px_rgba(8,63,59,0.5)] sm:p-9">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-gold" />
              <Quote
                aria-hidden="true"
                className="absolute top-5 right-5 size-12 rotate-180 text-gold/25"
                strokeWidth={1.2}
              />
              <p className="eyebrow text-gold">{RWANDA_TOUR_STORY.goalLabel}</p>
              <blockquote className="mt-3">
                <p className="font-quote text-[clamp(1.35rem,1.1rem+0.9vw,1.85rem)] leading-snug text-white italic">
                  “{RWANDA_TOUR_STORY.quotation}”
                </p>
              </blockquote>
              <p className="mt-4 text-sm leading-relaxed text-on-dark-muted">
                {RWANDA_TOUR_STORY.quotationSubtext}
              </p>
              <figcaption className="mt-5 flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-gold uppercase">
                <span aria-hidden="true" className="h-0.5 w-7 rounded-full bg-gold" />
                Aubea Mugaara · Artist &amp; Project Lead
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Objectives & Key Activities */}
        <RevealGroup className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Objectives */}
          <RevealItem>
            <article className="h-full rounded-3xl border border-teal-100 bg-mist/55 p-6 sm:p-8">
              <div className="flex items-center gap-3.5">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-teal-deep text-gold">
                  <Target aria-hidden="true" className="size-5" strokeWidth={1.85} />
                </span>
                <div>
                  <p className="eyebrow text-teal">PROJECT OBJECTIVES</p>
                  <h3 className="font-display text-2xl font-normal text-teal-deep">Objectives</h3>
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {RWANDA_TOUR_STORY.objectives.map((obj) => (
                  <li key={obj} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-charcoal">
                    <CheckCircle2 aria-hidden="true" className="mt-1 size-4.5 shrink-0 text-teal" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </article>
          </RevealItem>

          {/* Key Activities */}
          <RevealItem>
            <article className="h-full rounded-3xl border border-teal-100 bg-mist/55 p-6 sm:p-8">
              <div className="flex items-center gap-3.5">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-teal-deep text-gold">
                  <Music aria-hidden="true" className="size-5" strokeWidth={1.85} />
                </span>
                <div>
                  <p className="eyebrow text-teal">PROGRAMME PILLARS</p>
                  <h3 className="font-display text-2xl font-normal text-teal-deep">Key Activities</h3>
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {RWANDA_TOUR_STORY.keyActivities.map((act) => (
                  <li key={act} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-charcoal">
                    <CheckCircle2 aria-hidden="true" className="mt-1 size-4.5 shrink-0 text-teal" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </article>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  )
}
