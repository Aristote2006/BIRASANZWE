import { PARTNERS, type Partner } from '@/content/home'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/RevealAnimation'
import { SmartLink } from '@/components/ui/SmartLink'

/** Neutral abstract marks used only for placeholder tiles (not real logos). */
const PLACEHOLDER_MARKS = [
  <circle key="c" cx="16" cy="16" r="10" />,
  <rect key="r" x="7" y="7" width="18" height="18" rx="4" />,
  <path key="t" d="M16 6 27 25H5Z" />,
  <path key="d" d="M16 5 27 16 16 27 5 16Z" />,
]

function PartnerTile({ partner, index, hidden }: { partner: Partner; index: number; hidden?: boolean }) {
  const inner = partner.logo ? (
    <span className="flex items-center gap-5">
      <span className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-white p-2 ring-1 ring-teal-100/80 sm:h-32 sm:w-32">
        <img
          src={partner.logo}
          alt={hidden ? '' : `${partner.name} logo`}
          loading="lazy"
          decoding="async"
          className="max-h-full max-w-full rounded-lg object-contain transition-transform duration-500 ease-premium group-hover:scale-[1.03]"
        />
      </span>
      <span className="flex flex-col text-left leading-snug">
        <span className="font-display text-xl text-teal-deep sm:text-2xl">{partner.name}</span>
        {partner.subtitle && (
          <span className="mt-1 max-w-[13.5rem] text-xs leading-relaxed font-medium text-ink-muted sm:text-[0.82rem]">
            {partner.subtitle}
          </span>
        )}
      </span>
    </span>
  ) : (
    <span className="flex items-center gap-3" data-placeholder="partner-logo">
      <svg aria-hidden="true" viewBox="0 0 32 32" className="size-8 shrink-0 fill-none stroke-teal" strokeWidth="1.5">
        {PLACEHOLDER_MARKS[index % PLACEHOLDER_MARKS.length]}
      </svg>
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[0.95rem] font-bold text-teal-deep">{partner.name}</span>
        <span className="text-[0.68rem] font-semibold tracking-[0.18em] text-ink-muted uppercase">Placeholder</span>
      </span>
    </span>
  )

  const tileClass =
    'group flex min-w-80 shrink-0 items-center rounded-3xl border border-teal-100 bg-white px-5 py-4 shadow-[0_10px_28px_-18px_rgba(8,63,59,0.22)] transition-[border-color,box-shadow,transform] duration-500 ease-premium hover:-translate-y-0.5 hover:border-gold/70 hover:shadow-[0_20px_40px_-20px_rgba(8,63,59,0.38)] sm:min-w-[23.5rem] sm:px-6 sm:py-5'

  if (partner.url) {
    return (
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={hidden ? -1 : undefined}
        aria-label={hidden ? undefined : `${partner.name} (opens in a new tab)`}
        className={tileClass}
      >
        {inner}
      </a>
    )
  }
  return <div className={tileClass}>{inner}</div>
}

/**
 * Infinite right-to-left marquee.
 * Two identical halves, each padded so it spans the full viewport even when there
 * are only a few partners, translate by -50% → seamless loop with no visible jump.
 * Pauses on hover/focus; becomes a static wrapped grid when reduced motion is requested.
 */
export function PartnersMarquee() {
  // Repeat small partner lists inside each half so the marquee fills wide screens seamlessly.
  const repeatCount = PARTNERS.length > 0 && PARTNERS.length < 6 ? Math.ceil(6 / PARTNERS.length) : 1

  const list = (duplicateHalf: boolean) => (
    <ul
      className="flex shrink-0 items-center gap-6 pr-6"
      aria-hidden={duplicateHalf || undefined}
      data-duplicate={duplicateHalf || undefined}
    >
      {Array.from({ length: repeatCount }).flatMap((_, copyIndex) =>
        PARTNERS.map((p, i) => {
          const isExtraCopy = duplicateHalf || copyIndex > 0
          return (
            <li
              key={`${p.name}-${duplicateHalf ? 'b' : 'a'}-${copyIndex}`}
              aria-hidden={isExtraCopy || undefined}
              data-duplicate={isExtraCopy || undefined}
            >
              <PartnerTile partner={p} index={i} hidden={isExtraCopy} />
            </li>
          )
        }),
      )}
    </ul>
  )

  return (
    <section aria-labelledby="partners-title" className="on-light section-y overflow-hidden bg-white">
      <Container>
        <SectionHeading
          id="partners-title"
          align="center"
          eyebrow="Partners & Supporters"
          title="Together, we open more doors."
          description="We are grateful to the organisations that stand with Birasanzwe Initiative in promoting inclusion, talent, and dignity."
        />
      </Container>

      <Reveal variant="fade-in" className="mt-9">
        <div className="marquee-mask mx-auto max-w-[96rem] overflow-hidden py-2">
          <div className="marquee-track flex w-max animate-marquee gap-y-5" style={{ ['--marquee-duration' as string]: '36s' }}>
            {list(false)}
            {list(true)}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-8 text-center">
        <SmartLink
          to="#contact"
          className="inline-flex min-h-11 items-center font-bold text-teal underline decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-teal-deep"
        >
          Interested in partnering with us?
        </SmartLink>
      </Reveal>
    </section>
  )
}
