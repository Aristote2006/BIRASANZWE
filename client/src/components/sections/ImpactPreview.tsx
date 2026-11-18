import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { useInView } from 'motion/react'
import { ArrowUpRight, FolderCheck, Globe2, HeartHandshake, type LucideIcon } from 'lucide-react'
import { IMPACT_STATS, type ImpactStatItem } from '@/content/impact'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { Container } from '@/components/ui/Container'
import { RevealGroup, RevealItem } from '@/components/ui/RevealAnimation'

const STAT_ICONS: Record<ImpactStatItem['id'], LucideIcon> = {
  communities: Globe2,
  projects: FolderCheck,
  lives: HeartHandshake,
}

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

    const duration = 1600
    const startTime = performance.now()
    let frameId = 0

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
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
 * Compact homepage impact section featuring only the official animated counters.
 */
export function ImpactPreview() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.25 })

  return (
    <section
      id="impact"
      aria-labelledby="impact-title"
      className="relative isolate overflow-hidden bg-teal-deep py-9 text-white sm:py-12"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_100%_0%,rgba(15,118,110,0.55),transparent_70%),radial-gradient(40%_40%_at_0%_100%,rgba(244,196,48,0.08),transparent_70%)]"
      />

      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
            <h2 id="impact-title" className="eyebrow text-gold">
              Our Impact
            </h2>
          </div>

          <Link
            to="/impact"
            className="group inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-on-dark-muted uppercase transition-colors hover:text-gold"
          >
            <span>Explore Full Impact</span>
            <ArrowUpRight
              aria-hidden="true"
              className="size-3.5 text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <div ref={sectionRef} className="mt-5">
          <RevealGroup
            as="ul"
            stagger={0.08}
            className="grid gap-3.5 sm:grid-cols-3 sm:gap-5"
          >
            {IMPACT_STATS.map((stat) => {
              const Icon = STAT_ICONS[stat.id] ?? Globe2
              return (
                <RevealItem as="li" key={stat.id}>
                  <article className="group relative flex h-full items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-4 backdrop-blur-xs transition-[border-color,background-color,transform] duration-300 ease-premium hover:-translate-y-0.5 hover:border-gold/50 hover:bg-white/[0.08] sm:px-5 sm:py-5">
                    <span className="hidden size-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/30 sm:grid">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.85} />
                    </span>

                    <div>
                      <p
                        aria-label={`${stat.value}${stat.suffix ?? ''} ${stat.label}`}
                        className="font-display text-[clamp(1.9rem,1.45rem+1.8vw,2.75rem)] leading-none font-normal tracking-tight text-white"
                      >
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} active={inView} />
                      </p>
                      <h3 className="mt-1.5 font-sans text-xs font-bold tracking-wide text-on-dark-muted uppercase sm:text-[0.8rem]">
                        {stat.label}
                      </h3>
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
