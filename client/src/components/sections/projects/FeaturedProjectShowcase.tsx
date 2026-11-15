import {
  Compass,
  HeartHandshake,
  Palette,
  Quote,
  Sparkles,
  Star,
  type LucideIcon,
} from 'lucide-react'
import { RWANDA_TOUR_SHOWCASE as S } from '@/content/projects'
import { Container } from '@/components/ui/Container'
import { PrimaryButton } from '@/components/ui/Button'
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/RevealAnimation'
import { SmartLink } from '@/components/ui/SmartLink'

const HIGHLIGHT_ICONS: Record<string, LucideIcon> = {
  discovery: Sparkles,
  expression: Palette,
  inclusion: HeartHandshake,
  opportunity: Compass,
}

/**
 * SECTION 2 — FEATURED PROJECT: BIRASANZWE RWANDA TOUR — EDITION 1
 * Editorial flagship showcase with large media container (supports official photo
 * and future video), edition badge, provisional project introduction, editorial
 * quotation, 4 thematic highlight cards, and prominent DISCOVER THE PROJECT button.
 */
export function FeaturedProjectShowcase() {
  const hasVideo = Boolean(S.media.videoWebm || S.media.videoMp4)

  return (
    <section
      id="featured-rwanda-tour"
      aria-labelledby="featured-tour-heading"
      className="on-light section-y relative overflow-hidden bg-white"
    >
      {/* Subtle oversized background numeral */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-4 right-[-1rem] font-display text-[clamp(8rem,18vw,16rem)] leading-none text-teal/[0.045] select-none"
      >
        01
      </span>

      <Container className="relative">
        {/* Top editorial header */}
        <Reveal className="flex flex-col gap-4 border-b border-teal-100 pb-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="eyebrow inline-flex items-center gap-2.5 text-teal">
                <span aria-hidden="true" className="h-px w-8 bg-gold" />
                {S.label}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3.5 py-1 text-[0.7rem] font-extrabold tracking-[0.18em] text-teal-deep uppercase">
                <Star aria-hidden="true" className="size-3 fill-teal-deep" />
                {S.edition}
              </span>
            </div>

            <h2
              id="featured-tour-heading"
              className="mt-3 font-display text-[clamp(2rem,1.4rem+2.2vw,3.15rem)] leading-[1.08] font-normal text-teal-deep"
            >
              {S.title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full border border-teal/25 bg-teal-50 px-3.5 py-1.5 text-xs font-bold text-teal-deep">
              Category: {S.category}
            </span>
          </div>
        </Reveal>

        {/* Main showcase grid: dominant visual frame + narrative & quote */}
        <div className="mt-9 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Dominant media frame */}
          <Reveal variant="fade-in" className="relative lg:col-span-7">
            <div
              aria-hidden="true"
              className="absolute -top-3 -left-3 hidden h-28 w-28 rounded-tl-3xl border-t-2 border-l-2 border-gold sm:block"
            />
            <figure className="relative overflow-hidden rounded-3xl bg-teal-dark shadow-[0_28px_56px_-28px_rgba(8,63,59,0.5)]">
              <div className="relative aspect-[16/10] max-h-[60svh] w-full overflow-hidden">
                <Reveal variant="image" className="h-full w-full">
                  {hasVideo ? (
                    <video
                      className="h-full w-full object-cover"
                      poster={S.media.image?.src}
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="metadata"
                    >
                      {S.media.videoWebm && <source src={S.media.videoWebm} type="video/webm" />}
                      {S.media.videoMp4 && <source src={S.media.videoMp4} type="video/mp4" />}
                    </video>
                  ) : S.media.image ? (
                    <img
                      src={S.media.image.src}
                      width={S.media.image.width}
                      height={S.media.image.height}
                      alt={S.media.image.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-premium hover:scale-[1.02]"
                    />
                  ) : (
                    <MediaPlaceholder
                      label={`${S.title} — ${S.edition}`}
                      hint="Official project photography & video"
                    />
                  )}
                </Reveal>

                {/* Subtle bottom gradient for caption legibility */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-teal-deep/85 via-teal-deep/30 to-transparent"
                />
              </div>

              <figcaption className="flex flex-wrap items-center justify-between gap-3 bg-teal-deep px-5 py-3.5 text-xs text-on-dark-muted sm:px-6">
                <span className="font-semibold text-white">
                  {S.title} · <span className="text-gold">{S.edition}</span>
                </span>
                <span>Flagship Platform for Talent & Inclusion in Rwanda</span>
              </figcaption>
            </figure>
          </Reveal>

          {/* Editorial narrative + quotation + CTA */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="inline-block rounded-md bg-teal-50 px-2.5 py-1 text-[0.68rem] font-bold tracking-wider text-teal uppercase">
                Project Overview
              </span>
              <p className="mt-3.5 text-lead leading-relaxed text-charcoal">{S.introduction}</p>
            </Reveal>

            <Reveal
              delay={0.08}
              as="figure"
              className="relative mt-6 overflow-hidden rounded-2xl border-l-4 border-gold bg-mist/80 p-5 sm:p-6"
            >
              <Quote
                aria-hidden="true"
                className="absolute top-3 right-4 size-10 rotate-180 text-gold/35"
                strokeWidth={1.25}
              />
              <blockquote>
                <p className="font-quote text-[1.18rem] leading-snug text-teal-deep italic">“{S.quote.text}”</p>
              </blockquote>
              <figcaption className="mt-3 text-xs font-bold tracking-wider text-teal uppercase">
                — {S.quote.caption}
              </figcaption>
            </Reveal>

            <Reveal delay={0.14} className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-6">
              <PrimaryButton to={S.detailRoute}>{S.ctaLabel}</PrimaryButton>
              <SmartLink
                to="/get-involved"
                className="inline-flex min-h-11 items-center font-bold text-teal underline decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-teal-deep"
              >
                Partner on this Tour
              </SmartLink>
            </Reveal>
          </div>
        </div>

        {/* Four thematic project highlights */}
        <div className="mt-10">
          <Reveal>
            <p className="text-xs font-extrabold tracking-[0.2em] text-teal uppercase">Key Thematic Pillars</p>
          </Reveal>
          <RevealGroup
            as="ul"
            stagger={0.08}
            className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {S.highlights.map((item, idx) => {
              const Icon = HIGHLIGHT_ICONS[item.key] ?? Sparkles
              return (
                <RevealItem as="li" key={item.key}>
                  <article className="group flex h-full flex-col rounded-2xl border border-teal-100 bg-mist/55 p-5 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-gold/70 hover:bg-white">
                    <div className="flex items-center justify-between">
                      <span className="grid size-10 place-items-center rounded-xl bg-teal text-gold shadow-xs">
                        <Icon aria-hidden="true" className="size-4.5" strokeWidth={1.9} />
                      </span>
                      <span aria-hidden="true" className="font-display text-base text-teal/35">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-[1.28rem] leading-tight font-normal text-teal-deep">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                  </article>
                </RevealItem>
              )
            })}
          </RevealGroup>
        </div>
      </Container>
    </section>
  )
}
