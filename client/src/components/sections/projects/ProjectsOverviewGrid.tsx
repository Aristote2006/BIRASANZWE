import { useState } from 'react'
import { ArrowRight, CheckCircle2, Clock, Sparkles, Star } from 'lucide-react'
import {
  PROJECTS_LIST,
  PROJECTS_OVERVIEW,
  PROJECT_CATEGORIES,
  type ProjectCategory,
  type ProjectItem,
  type ProjectStatus,
} from '@/content/projects'
import { cn } from '@/lib/cn'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/RevealAnimation'
import { SmartLink } from '@/components/ui/SmartLink'

const STATUS_BADGE: Record<
  ProjectStatus,
  { label: string; classes: string; Icon: typeof Star }
> = {
  Featured: {
    label: 'Featured Initiative',
    classes: 'bg-gold text-teal-deep',
    Icon: Star,
  },
  Ongoing: {
    label: 'Ongoing',
    classes: 'bg-teal text-white',
    Icon: Sparkles,
  },
  Upcoming: {
    label: 'Upcoming',
    classes: 'bg-teal-50 text-teal-deep ring-1 ring-teal/30',
    Icon: Clock,
  },
  Completed: {
    label: 'Completed',
    classes: 'bg-white text-teal-deep ring-1 ring-teal-100',
    Icon: CheckCircle2,
  },
}

function ProjectCard({ project }: { project: ProjectItem }) {
  const badge = STATUS_BADGE[project.status]
  const BadgeIcon = badge.Icon

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-teal-100 bg-white shadow-[0_18px_40px_-28px_rgba(8,63,59,0.3)] transition-[border-color,box-shadow,transform] duration-400 ease-premium hover:-translate-y-0.5 hover:border-gold/70 hover:shadow-[0_24px_48px_-24px_rgba(8,63,59,0.42)]">
      {/* Card media */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-teal-dark">
        {project.image ? (
          <img
            src={project.image.src}
            width={project.image.width}
            height={project.image.height}
            alt={project.image.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
          />
        ) : (
          <MediaPlaceholder label={project.title} />
        )}

        {/* Accessible status badge (icon + text — never relies on color alone) */}
        <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[0.7rem] font-extrabold tracking-[0.14em] uppercase shadow-sm',
              badge.classes,
            )}
          >
            <BadgeIcon aria-hidden="true" className="size-3.5" />
            {badge.label}
          </span>
          {project.edition && (
            <span className="rounded-full bg-teal-deep/90 px-3 py-1 text-[0.7rem] font-bold tracking-wider text-gold uppercase backdrop-blur-xs">
              {project.edition}
            </span>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap gap-2">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="rounded-md bg-teal-50 px-2.5 py-1 text-[0.7rem] font-bold tracking-wide text-teal"
            >
              {cat}
            </span>
          ))}
        </div>

        <h3 className="mt-3.5 font-display text-2xl leading-snug font-normal text-teal-deep">
          <SmartLink to={project.to} className="hover:text-teal focus-visible:outline-none">
            {project.title}
            {project.edition ? ` — ${project.edition}` : ''}
          </SmartLink>
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{project.description}</p>

        <div className="mt-auto pt-6">
          <SmartLink
            to={project.to}
            aria-label={`Learn more about ${project.title}${project.edition ? ` ${project.edition}` : ''}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-teal transition-colors group-hover:text-teal-deep"
          >
            <span>Learn More</span>
            <ArrowRight
              aria-hidden="true"
              className="size-4 text-gold transition-transform duration-300 group-hover:translate-x-1"
            />
          </SmartLink>
        </div>
      </div>
    </article>
  )
}

/**
 * SECTION 3 — PROJECTS OVERVIEW & FILTERING
 * Accessible category filter bar (categories without verified projects are clearly
 * marked and disabled so no empty tabs are shown), responsive project grid, and
 * an intentional card for upcoming initiatives.
 */
export function ProjectsOverviewGrid() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Projects')

  const countForCategory = (category: ProjectCategory) =>
    category === 'All Projects'
      ? PROJECTS_LIST.length
      : PROJECTS_LIST.filter((p) => p.categories.includes(category)).length

  const filteredProjects =
    activeCategory === 'All Projects'
      ? PROJECTS_LIST
      : PROJECTS_LIST.filter((p) => p.categories.includes(activeCategory))

  return (
    <section
      id="projects-directory"
      aria-labelledby="projects-directory-heading"
      className="on-light section-y bg-mist"
    >
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="projects-directory-heading"
            eyebrow={PROJECTS_OVERVIEW.eyebrow}
            title={PROJECTS_OVERVIEW.heading}
            description={PROJECTS_OVERVIEW.supporting}
          />

          {/* Accessible category filtering controls */}
          <Reveal delay={0.08}>
            <div
              role="group"
              aria-label="Filter projects by category"
              className="flex flex-wrap items-center gap-2"
            >
              {PROJECT_CATEGORIES.map((category) => {
                const count = countForCategory(category)
                const isActive = activeCategory === category
                const isDisabled = count === 0

                return (
                  <button
                    key={category}
                    type="button"
                    disabled={isDisabled}
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(category)}
                    title={isDisabled ? `${category} — upcoming initiatives` : `Show ${category}`}
                    className={cn(
                      'inline-flex min-h-10 items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold tracking-wide transition-all duration-200',
                      isActive
                        ? 'border-teal-deep bg-teal-deep text-white shadow-xs'
                        : isDisabled
                          ? 'cursor-not-allowed border-teal-100/80 bg-white/60 text-ink-muted/55'
                          : 'border-teal-100 bg-white text-teal-deep hover:border-gold hover:bg-teal-50',
                    )}
                  >
                    { isActive && <span aria-hidden="true" className="size-1.5 rounded-full bg-gold" /> }
                    <span>{category}</span>
                    <span
                      className={cn(
                        'rounded-full px-1.5 py-0.5 text-[0.65rem]',
                        isActive ? 'bg-white/15 text-gold' : 'bg-teal-50 text-teal',
                      )}
                    >
                      {count > 0 ? count : 'Soon'}
                    </span>
                  </button>
                )
              })}
            </div>
          </Reveal>
        </div>

        {/* Responsive project grid: verified flagship card + intentional future-initiatives card */}
        <RevealGroup
          key={activeCategory}
          as="ul"
          stagger={0.1}
          className="mt-9 grid gap-6 lg:grid-cols-12"
        >
          {filteredProjects.map((project) => (
            <RevealItem as="li" key={project.id} className="lg:col-span-7">
              <ProjectCard project={project} />
            </RevealItem>
          ))}

          {/* Intentional, editorial empty-state / future initiatives panel */}
          <RevealItem as="li" className="lg:col-span-5">
            <aside
              aria-label="Future initiatives announcement"
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-teal-100 bg-teal-deep p-7 text-white shadow-[0_18px_40px_-28px_rgba(8,63,59,0.45)] sm:p-8"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-16 size-56 rounded-full border border-gold/25"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-teal/35 blur-2xl"
              />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-[0.7rem] font-extrabold tracking-[0.18em] text-gold uppercase">
                  <Sparkles aria-hidden="true" className="size-3.5" />
                  {PROJECTS_OVERVIEW.emptyFutureNotice.label}
                </span>

                <h3 className="mt-5 font-display text-2xl leading-snug font-normal text-white sm:text-[1.7rem]">
                  {PROJECTS_OVERVIEW.emptyFutureNotice.title}
                </h3>

                <p className="mt-3 text-[0.95rem] leading-relaxed text-on-dark-muted">
                  “{PROJECTS_OVERVIEW.emptyFutureNotice.message}”
                </p>

                <p className="mt-4 text-xs leading-relaxed text-on-dark-muted/85">
                  Every new initiative is designed around our core mission —{' '}
                  <SmartLink
                    to="/about"
                    className="font-semibold text-gold underline decoration-gold/60 underline-offset-4 hover:text-white"
                  >
                    learn about our approach
                  </SmartLink>{' '}
                  or explore how we measure{' '}
                  <SmartLink
                    to="/impact"
                    className="font-semibold text-gold underline decoration-gold/60 underline-offset-4 hover:text-white"
                  >
                    community impact
                  </SmartLink>
                  .
                </p>
              </div>

              <div className="relative mt-7 border-t border-white/15 pt-5">
                <SmartLink
                  to={PROJECTS_OVERVIEW.emptyFutureNotice.ctaTo}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-gold transition-colors hover:text-white"
                >
                  <span>{PROJECTS_OVERVIEW.emptyFutureNotice.ctaLabel}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </SmartLink>
              </div>
            </aside>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  )
}
