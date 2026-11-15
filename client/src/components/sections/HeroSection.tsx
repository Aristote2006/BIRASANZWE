import { ChevronDown } from 'lucide-react'
import { HERO, HERO_MEDIA } from '@/content/home'
import { Container } from '@/components/ui/Container'
import { PrimaryButton, SecondaryButton } from '@/components/ui/Button'
import { VideoBackground } from '@/components/ui/VideoBackground'

/**
 * Designed background composition used when no hero video/poster is available
 * (and underneath the video while it loads). Pure CSS + inline SVG: ~1 KB, no requests.
 */
function HeroBackdrop() {
  return (
    <div className="absolute inset-0 bg-teal-deep">
      {/* Soft light sources */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_85%_15%,rgba(15,118,110,0.65),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_5%_100%,rgba(244,196,48,0.10),transparent_70%)]" />

      {/* Concentric arcs — an abstract "platform / stage" motif */}
      <svg
        className="absolute top-1/2 right-[-38%] h-[130vmin] w-[130vmin] -translate-y-1/2 opacity-60 sm:right-[-22%] lg:right-[-12%]"
        viewBox="0 0 800 800"
        fill="none"
      >
        {[380, 320, 260, 200, 140].map((r, i) => (
          <circle
            key={r}
            cx="400"
            cy="400"
            r={r}
            stroke={i === 2 ? '#F4C430' : '#FFFFFF'}
            strokeOpacity={i === 2 ? 0.45 : 0.07 + i * 0.015}
            strokeWidth={i === 2 ? 1.25 : 1}
            strokeDasharray={i === 2 ? '2 10' : undefined}
          />
        ))}
        <circle cx="400" cy="140" r="5" fill="#F4C430" />
      </svg>

      {/* Fine vertical rules for an architectural, editorial feel */}
      <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:calc(100%/6)_100%] lg:block" />
    </div>
  )
}

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-teal-deep text-white"
    >
      <VideoBackground
        video={HERO_MEDIA.video}
        poster={HERO_MEDIA.poster}
        fallback={<HeroBackdrop />}
        objectPositionClassName="object-[65%_center] md:object-center"
      />

      {/* Legibility overlay (also keeps real video subdued and on-brand) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,63,59,0.92)_0%,rgba(8,63,59,0.55)_55%,rgba(8,63,59,0.2)_100%),linear-gradient(0deg,rgba(8,63,59,0.95)_0%,transparent_45%)]"
      />

      <Container className="flex flex-1 flex-col justify-center pt-[calc(var(--spacing-nav)+1.75rem)] pb-10 sm:pb-12 [@media(max-height:620px)]:pt-[calc(var(--spacing-nav)+1rem)] [@media(max-height:620px)]:pb-6">
        <div className="max-w-4xl">
          <p className="hero-rise eyebrow flex items-center gap-3 text-gold" style={{ animationDelay: '80ms' }}>
            <span aria-hidden="true" className="h-px w-10 bg-gold" />
            {HERO.eyebrow}
          </p>

          {/* LCP element: rendered immediately, never hidden behind JS animation. */}
          <h1
            id="hero-title"
            className="mt-5 font-display font-normal tracking-[-0.01em] text-[length:min(var(--text-hero),13.5svh)] leading-[0.98] [@media(max-height:620px)]:mt-3"
          >
            <span className="block">{HERO.titleLines[0]}</span>
            <span className="block text-gold">
              {HERO.titleLines[1].replace(/\.$/, '')}
              <span className="text-white">.</span>
            </span>
          </h1>

          <div
            className="hero-rise mt-6 flex max-w-xl gap-5 [@media(max-height:620px)]:mt-4"
            style={{ animationDelay: '200ms' }}
          >
            <span aria-hidden="true" className="mt-2 w-0.5 shrink-0 self-stretch rounded-full bg-gold/70" />
            <p className="text-lead text-on-dark-muted">
              {HERO.supporting[0]}
              <br />
              {HERO.supporting[1]}
            </p>
          </div>

          <div
            className="hero-rise mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:gap-4 [@media(max-height:620px)]:mt-5"
            style={{ animationDelay: '320ms' }}
          >
            <PrimaryButton to={HERO.primaryCta.to}>{HERO.primaryCta.label}</PrimaryButton>
            <SecondaryButton to={HERO.secondaryCta.to} variant="light" withArrow={false}>
              {HERO.secondaryCta.label}
            </SecondaryButton>
          </div>
        </div>
      </Container>

      {/* Bottom rail: brand pillars + scroll cue (hidden on short viewports) */}
      <div className="border-t border-white/10 [@media(max-height:680px)]:hidden">
        <Container className="flex h-16 items-center justify-between gap-6">
          <ul className="flex items-center gap-4 text-[0.7rem] font-bold tracking-[0.28em] text-white/75 uppercase sm:gap-8">
            {HERO.pillars.map((p, i) => (
              <li key={p} className="flex items-center gap-4 sm:gap-8">
                {i > 0 && <span aria-hidden="true" className="size-1 rounded-full bg-gold" />}
                {p}
              </li>
            ))}
          </ul>
          <a
            href="#mission"
            className="group hidden items-center gap-3 text-xs font-semibold tracking-[0.2em] text-white/75 uppercase transition-colors hover:text-white sm:inline-flex"
          >
            Scroll
            <span className="grid size-9 place-items-center rounded-full border border-white/25 transition-colors group-hover:border-gold">
              <ChevronDown aria-hidden="true" className="hero-bob size-4" />
            </span>
          </a>
        </Container>
      </div>
    </section>
  )
}
