import { Award, HeartHandshake, Users, UsersRound, type LucideIcon } from 'lucide-react'
import { IMPACT } from '@/content/home'
import { Container } from '@/components/ui/Container'
import { PrimaryButton } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/RevealAnimation'

const ICONS: Record<string, LucideIcon> = {
  participation: Users,
  recognition: Award,
  inclusion: HeartHandshake,
  community: UsersRound,
}

export function ImpactPreview() {
  return (
    <section aria-labelledby="impact-title" className="section-y relative isolate overflow-hidden bg-teal-deep text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_100%_0%,rgba(15,118,110,0.55),transparent_70%),radial-gradient(40%_40%_at_0%_100%,rgba(244,196,48,0.07),transparent_70%)]"
      />
      <Container>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading id="impact-title" tone="dark" eyebrow={IMPACT.eyebrow} title={IMPACT.title} description={IMPACT.description} />
          <Reveal delay={0.1} className="shrink-0">
            <PrimaryButton to={IMPACT.cta.to}>{IMPACT.cta.label}</PrimaryButton>
          </Reveal>
        </div>

        <RevealGroup as="ul" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT.cards.map((card, i) => {
            const Icon = ICONS[card.key] ?? Users
            return (
              <RevealItem as="li" key={card.key}>
                <article className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-[border-color,background-color,transform] duration-500 ease-premium hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.07]">
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-xl bg-gold/12 text-gold ring-1 ring-gold/30">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                    </span>
                    <span aria-hidden="true" className="font-display text-xl text-white/25">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-[1.4rem] leading-tight font-normal">{card.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-on-dark-muted">{card.text}</p>
                  <div aria-hidden="true" className="mt-auto pt-5">
                    <span className="block h-0.5 w-10 origin-left rounded-full bg-gold transition-transform duration-500 ease-premium group-hover:scale-x-[2.5]" />
                  </div>
                </article>
              </RevealItem>
            )
          })}
        </RevealGroup>

        <Reveal variant="fade-in">
          <p className="mt-8 text-center text-sm text-on-dark-muted">{IMPACT.note}</p>
        </Reveal>
      </Container>
    </section>
  )
}
