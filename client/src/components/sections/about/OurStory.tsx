import { Quote } from 'lucide-react'
import { ABOUT_STORY } from '@/content/about'
import { Container } from '@/components/ui/Container'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/RevealAnimation'
import { SmartLink } from '@/components/ui/SmartLink'

/**
 * SECTION 2 — OUR STORY
 * Editorial narrative layout with provisional copy, pull quotation,
 * and a non-fabricated conceptual journey timeline.
 */
export function OurStory() {
  return (
    <section id="our-story" aria-labelledby="story-title" className="on-light section-y bg-white">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left column: Editorial narrative & pull quote */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow inline-flex items-center gap-3 text-teal">
                <span aria-hidden="true" className="h-px w-8 bg-gold" />
                {ABOUT_STORY.eyebrow}
              </p>
              <h2 id="story-title" className="mt-3 font-display text-h2 font-normal text-teal-deep">
                {ABOUT_STORY.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.08} className="mt-5 space-y-4">
              {/* Provisional introductory statement */}
              <p className="border-l-2 border-gold pl-5 text-lead font-medium text-teal-deep">
                {ABOUT_STORY.provisionalLead}
              </p>

              {ABOUT_STORY.body.map((paragraph) => (
                <p key={paragraph.slice(0, 28)} className="text-[1rem] leading-relaxed text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            {/* Pull quotation */}
            <Reveal
              delay={0.16}
              as="figure"
              className="relative mt-7 overflow-hidden rounded-2xl border border-teal-100 bg-teal-50/70 p-6 sm:p-7"
            >
              <Quote
                aria-hidden="true"
                className="absolute top-4 right-5 size-12 rotate-180 text-gold/35"
                strokeWidth={1.2}
              />
              <blockquote className="relative">
                <p className="font-quote text-quote text-teal-deep italic">“{ABOUT_STORY.pullQuote.text}”</p>
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 text-xs font-bold tracking-wider text-teal uppercase">
                <span aria-hidden="true" className="h-0.5 w-7 rounded-full bg-gold" />
                {ABOUT_STORY.pullQuote.attribution}
              </figcaption>
            </Reveal>
          </div>

          {/* Right column: Conceptual storytelling timeline */}
          <div className="lg:col-span-5">
            <Reveal className="rounded-3xl border border-teal-100 bg-mist/60 p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-teal-100 pb-4">
                <span className="eyebrow text-teal">How Purpose Takes Shape</span>
                <span className="rounded-full bg-gold/25 px-3 py-1 text-[0.68rem] font-bold tracking-wider text-teal-deep uppercase">
                  Living Story
                </span>
              </div>

              <RevealGroup as="ol" className="relative mt-6 space-y-6 before:absolute before:top-3 before:bottom-3 before:left-4 before:w-px before:bg-teal/20">
                {ABOUT_STORY.journey.map((stage) => (
                  <RevealItem as="li" key={stage.step} className="relative pl-12">
                    <span
                      aria-hidden="true"
                      className="absolute top-0.5 left-0 grid size-8 place-items-center rounded-full border-2 border-gold bg-teal-deep font-display text-xs text-white"
                    >
                      {stage.step}
                    </span>
                    <span className="text-[0.7rem] font-extrabold tracking-[0.18em] text-teal uppercase">
                      {stage.phase}
                    </span>
                    <h3 className="mt-1 font-display text-xl text-teal-deep">{stage.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{stage.description}</p>
                  </RevealItem>
                ))}
              </RevealGroup>

              <div className="mt-7 border-t border-teal-100 pt-4 text-xs text-ink-muted">
                Want to see how our story unfolds in communities?{' '}
                <SmartLink
                  to="/projects"
                  className="font-bold text-teal underline decoration-gold decoration-2 underline-offset-4 hover:text-teal-deep"
                >
                  Explore our projects
                </SmartLink>{' '}
                or{' '}
                <SmartLink
                  to="/impact"
                  className="font-bold text-teal underline decoration-gold decoration-2 underline-offset-4 hover:text-teal-deep"
                >
                  view our impact
                </SmartLink>
                .
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
