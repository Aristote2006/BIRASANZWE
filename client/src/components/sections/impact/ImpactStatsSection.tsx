import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'
import { FolderCheck, Globe2, HeartHandshake, type LucideIcon } from 'lucide-react'
import { IMPACT_STATS, IMPACT_STATS_HEADER, type ImpactStatItem } from '@/content/impact'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealGroup, RevealItem } from '@/components/ui/RevealAnimation'

const STAT_ICONS: Record<ImpactStatItem['id'], LucideIcon> = {
  communities: Globe2,
  projects: FolderCheck,
  lives: HeartHandshake,
}

/**
 * Smoothly animates a number from 0 to `target` using requestAnimationFrame
 * with a cubic ease-out curve when `active` becomes true.
 * Respects `prefers-reduced-motion` by jumping immediately to the final value.
 */
function AnimatedCounter({
  target,
  suffix = '',
  active,
}: {
  target: number
  suffix?: string
  active: boolean
}) {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    if (prefersReducedMotion) {
      setCount(target)
      return
    }

    const duration = 1700
    const startTime = performance.now()
    let frameId = 0

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Cubic ease-out: 1 - (1 - t)^3
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [active, target, prefersReducedMotion])

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}
      {suffix && <span className="text-gold">{suffix}</span>}
    </span>
  )
}

/**
 * SECTION 2 — ANIMATED IMPACT STATISTICS
 * Four large animated counters triggered when entering the viewport:
 * - Communities Reached
 * - Talents Discovered
 * - Projects Completed
 * - Lives Impacted
 */
export function ImpactStatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.25 })

  return (
    <section
      id="impact-statistics"
      aria-labelledby="impact-stats-heading"
      className="on-light section-y bg-mist"
    >
      <Container>
        <SectionHeading
          id="impact-stats-heading"
          eyebrow={IMPACT_STATS_HEADER.eyebrow}
          title={IMPACT_STATS_HEADER.heading}
        />

        <div ref={sectionRef} className="mt-9">
          <RevealGroup
            as="ul"
            stagger={0.1}
            className="grid gap-5 sm:grid-cols-3"
          >
            {IMPACT_STATS.map((stat, index) => {
              const Icon = STAT_ICONS[stat.id] ?? Globe2
              return (
                <RevealItem as="li" key={stat.id}>
                  <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-teal-100 bg-white p-6 shadow-[0_18px_40px_-28px_rgba(8,63,59,0.28)] transition-[border-color,box-shadow,transform] duration-400 ease-premium hover:-translate-y-1 hover:border-gold/75 hover:shadow-[0_24px_48px_-24px_rgba(8,63,59,0.4)] sm:p-7">
                    {/* Top accent bar */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal via-gold to-teal opacity-80"
                    />

                    <div>
                      <div className="flex items-center justify-between">
                        <span className="grid size-11 place-items-center rounded-2xl bg-teal-deep text-gold shadow-xs">
                          <Icon aria-hidden="true" className="size-5" strokeWidth={1.85} />
                        </span>

                        <span aria-hidden="true" className="font-display text-lg text-teal/30">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Visually dominant animated counter */}
                      <p
                        aria-label={`${stat.value}${stat.suffix ?? ''} ${stat.label}`}
                        className="mt-6 font-display text-[clamp(2.75rem,2.1rem+2.5vw,4rem)] leading-none font-normal tracking-tight text-teal-deep"
                      >
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} active={inView} />
                      </p>

                      <h3 className="mt-3 font-display text-xl leading-snug font-normal text-teal">
                        {stat.label}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{stat.description}</p>
                    </div>

                    <div aria-hidden="true" className="mt-6 pt-2">
                      <span className="block h-0.5 w-10 origin-left rounded-full bg-gold transition-transform duration-500 ease-premium group-hover:scale-x-[2.4]" />
                    </div>
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
