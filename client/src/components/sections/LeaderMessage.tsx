import { Quote } from 'lucide-react'
import { LEADER } from '@/content/home'
import { Container } from '@/components/ui/Container'
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder'
import { Reveal } from '@/components/ui/RevealAnimation'

export function LeaderMessage() {
  return (
    <section id="mission" aria-labelledby="leader-title" className="on-light section-y bg-white">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
        {/* Portrait */}
        <Reveal variant="fade-in" className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:col-span-5">
          <div aria-hidden="true" className="absolute -top-3 -left-3 h-2/3 w-2/3 rounded-tl-[1.75rem] border-t-2 border-l-2 border-gold sm:-top-4 sm:-left-4" />
          <figure className="relative pb-6">
            <div className="relative aspect-[4/4.6] max-h-[65svh] overflow-hidden rounded-[1.5rem] rounded-tl-[3.25rem] bg-teal-dark shadow-[0_24px_48px_-24px_rgba(8,63,59,0.5)]">
              <Reveal variant="image" className="h-full w-full">
                {LEADER.portrait ? (
                  <img
                    src={LEADER.portrait.src}
                    width={LEADER.portrait.width}
                    height={LEADER.portrait.height}
                    alt={`Portrait of ${LEADER.name}, ${LEADER.title} of Birasanzwe Initiative`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <MediaPlaceholder label={`Portrait of ${LEADER.name}`} hint="Official photograph coming soon" />
                )}
              </Reveal>
            </div>
            <figcaption className="absolute right-4 bottom-0 left-4 rounded-xl border-l-4 border-gold bg-white px-5 py-3 shadow-[0_16px_32px_-16px_rgba(8,63,59,0.3)] sm:right-auto sm:-left-px sm:min-w-56">
              <span className="block font-display text-xl text-teal-deep">{LEADER.name}</span>
              <span className="mt-0.5 block text-xs font-semibold tracking-wide text-teal">{LEADER.title}</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Message */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-3 text-teal">
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              {LEADER.eyebrow}
            </p>
            <h2 id="leader-title" className="mt-3 font-display text-h2 font-normal text-teal-deep">
              {LEADER.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-4 space-y-3.5 text-lead text-ink-muted">
            {LEADER.message.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.2} as="figure" className="relative mt-6 overflow-hidden rounded-2xl bg-teal-50 p-5 sm:p-6">
            <Quote aria-hidden="true" className="absolute top-4 right-5 size-12 rotate-180 text-gold/30 sm:size-14" strokeWidth={1} />
            <span aria-hidden="true" className="block font-quote text-4xl leading-none text-gold">“</span>
            <blockquote className="relative -mt-3">
              <p className="font-quote text-quote text-teal-deep italic">{LEADER.quote}</p>
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3 text-xs font-bold tracking-wide text-teal">
              <span aria-hidden="true" className="h-0.5 w-6 rounded-full bg-gold" />
              {LEADER.name}, Birasanzwe Initiative
            </figcaption>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
