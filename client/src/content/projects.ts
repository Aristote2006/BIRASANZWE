/**
 * Projects overview page content for BIRASANZWE INITIATIVE.
 *
 * ⚠️  No unverified project statistics, dates, schedules, locations, or
 *     unconfirmed initiatives have been invented. Provisional descriptions are
 *     clearly marked so they can be replaced with official copy later.
 */

export const PROJECTS_SEO = {
  title: 'Birasanzwe Initiative Projects | Inclusion & Talent',
  description:
    'Explore Birasanzwe Initiative projects in Rwanda, including Birasanzwe Rwanda Tour Edition 1, celebrating talent, creativity, disability inclusion, and opportunity.',
  path: '/projects',
  ogImage: '/assets/images/tour.webp',
} as const

/* --------------------------------------------------------------------------
 * SECTION 1 — PROJECTS HERO
 * ------------------------------------------------------------------------ */
export const PROJECTS_HERO = {
  breadcrumb: [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
  ] as const,
  eyebrow: 'OUR PROJECTS',
  titleLines: ['CREATING PLATFORMS.', 'CELEBRATING ABILITY.'] as const,
  supporting:
    'Through our projects, we create opportunities for talent to be recognized, abilities to be celebrated, and inclusion to become a meaningful experience.',
} as const

/* --------------------------------------------------------------------------
 * SECTION 2 — FEATURED PROJECT: BIRASANZWE RWANDA TOUR 2026 — EDITION 1
 * ------------------------------------------------------------------------ */
export const RWANDA_TOUR_SHOWCASE = {
  label: 'FEATURED PROJECT · AUGUST 2026',
  title: 'BIRASANZWE RWANDA TOUR 2026',
  edition: 'EDITION 1',
  status: 'Featured' as const,
  category: 'Talent & Creativity' as const,
  detailRoute: '/projects/birasanzwe-rwanda-tour-edition-1',
  ctaLabel: 'DISCOVER THE PROJECT',
  introduction:
    '“BIRASANZWE Rwanda Tour is a nationwide advocacy and community engagement initiative led by Rwandan artist and inclusion advocate Aubea Mugaara. Using music, storytelling, and cultural expression across Musanze, Rubavu, Nyanza, Bugesera, and Kigali City, the tour challenges stigma associated with disability, chronic illness, and poverty while providing practical support to vulnerable communities.”',
  quote: {
    text: 'Disability, illness, and poverty are normal human conditions that should never result in exclusion or discrimination.',
    caption: 'Birasanzwe Rwanda Tour 2026 · Concept Note',
  },
  media: {
    image: {
      src: '/assets/images/tour.webp',
      width: 1600,
      height: 1066,
      alt: 'Participants and community members during Birasanzwe Rwanda Tour Edition 1',
    },
    videoWebm: undefined as string | undefined,
    videoMp4: undefined as string | undefined,
  },
  highlights: [
    {
      key: 'discovery',
      title: 'Live Music & Advocacy Concerts',
      description: 'Using music, storytelling, and cultural expression across 5 districts to inspire social change.',
    },
    {
      key: 'expression',
      title: 'Awareness & Inclusion Dialogues',
      description: 'Challenging stigma around people with disabilities, chronic diseases, illness, and poverty.',
    },
    {
      key: 'inclusion',
      title: 'Essential Community Support',
      description: 'Distributing hygiene kits and essential support materials to vulnerable communities.',
    },
    {
      key: 'opportunity',
      title: 'Nationwide Coverage',
      description: 'Musanze, Rubavu, Nyanza, Bugesera, and the Grand Finale Concert in Kigali City.',
    },
  ] as const,
} as const

/* --------------------------------------------------------------------------
 * SECTION 3 — PROJECTS OVERVIEW & FILTERING
 * ------------------------------------------------------------------------ */
export type ProjectStatus = 'Featured' | 'Ongoing' | 'Upcoming' | 'Completed'

export type ProjectCategory =
  | 'All Projects'
  | 'Inclusion'
  | 'Talent & Creativity'
  | 'Community'
  | 'Empowerment'

export const PROJECT_CATEGORIES: readonly ProjectCategory[] = [
  'All Projects',
  'Talent & Creativity',
  'Inclusion',
  'Community',
  'Empowerment',
] as const

export interface ProjectItem {
  id: string
  title: string
  edition?: string
  description: string
  status: ProjectStatus
  categories: readonly Exclude<ProjectCategory, 'All Projects'>[]
  to: string
  image?: {
    src: string
    width: number
    height: number
    alt: string
  }
}

/**
 * Verified initiatives directory.
 * Currently contains only our confirmed flagship initiative: Birasanzwe Rwanda Tour — Edition 1.
 * Add future verified projects here as they are officially announced.
 */
export const PROJECTS_LIST: readonly ProjectItem[] = [
  {
    id: 'birasanzwe-rwanda-tour-edition-1',
    title: 'Birasanzwe Rwanda Tour 2026',
    edition: 'Edition 1 · August 2026',
    description:
      'A nationwide advocacy and community engagement tour led by Aubea Mugaara across Musanze, Rubavu, Nyanza, Bugesera, and Kigali City — using music, storytelling, and charitable support to challenge stigma around disability, chronic illness, and poverty.',
    status: 'Featured',
    categories: ['Talent & Creativity', 'Inclusion', 'Community', 'Empowerment'],
    to: '/projects/birasanzwe-rwanda-tour-edition-1',
    image: {
      src: '/assets/images/tour.webp',
      width: 1600,
      height: 1066,
      alt: 'Birasanzwe Rwanda Tour 2026 — celebrating talent and inclusion in Rwanda',
    },
  },
] as const

export const PROJECTS_OVERVIEW = {
  eyebrow: 'INITIATIVES DIRECTORY',
  heading: 'EXPLORE OUR INITIATIVES.',
  supporting:
    'Discover the projects through which Birasanzwe Initiative works toward inclusion, talent recognition, and opportunity.',
  emptyFutureNotice: {
    label: 'Future Initiatives',
    title: 'More initiatives are on the way.',
    message:
      'More initiatives are on the way. We look forward to sharing new opportunities and projects with you.',
    ctaLabel: 'Propose a Partnership',
    ctaTo: '/#contact',
  },
} as const

/* --------------------------------------------------------------------------
 * SECTION 4 — PROJECT PHILOSOPHY
 * ------------------------------------------------------------------------ */
export const PROJECTS_PHILOSOPHY = {
  eyebrow: 'OUR PROJECT PHILOSOPHY',
  heading: 'EVERY TALENT DESERVES A PLATFORM.',
  supporting:
    'We believe meaningful projects do more than organize activities. They create spaces where abilities can be recognized, creativity can flourish, and people can participate with dignity.',
} as const

/* --------------------------------------------------------------------------
 * SECTION 5 — PROJECT CTA
 * ------------------------------------------------------------------------ */
export const PROJECTS_CTA = {
  eyebrow: 'PARTNER WITH US',
  heading: "LET'S CREATE MORE OPPORTUNITIES TOGETHER.",
  supporting:
    'Whether you want to collaborate, support a project, or become part of our work, your involvement can help create meaningful opportunities.',
  primaryCta: { label: 'Get Involved', to: '/get-involved' },
  secondaryCta: { label: 'Support Our Projects', to: '/support-us' },
} as const
