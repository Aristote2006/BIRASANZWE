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
 * SECTION 2 — FEATURED PROJECT: BIRASANZWE RWANDA TOUR — EDITION 1
 * ------------------------------------------------------------------------ */
export const RWANDA_TOUR_SHOWCASE = {
  label: 'FEATURED PROJECT',
  title: 'BIRASANZWE RWANDA TOUR',
  edition: 'EDITION 1',
  status: 'Featured' as const,
  category: 'Talent & Creativity' as const,
  detailRoute: '/projects/birasanzwe-rwanda-tour-edition-1',
  ctaLabel: 'DISCOVER THE PROJECT',
  /**
   * PROVISIONAL COPY — Official project description placeholder.
   * Easy to replace once the official project brief is finalized.
   */
  introduction:
    '“Birasanzwe Rwanda Tour is a platform designed to showcase the talents, creativity, and abilities of persons with disabilities. Through artistic expression and meaningful participation, the project celebrates potential, challenges limiting perceptions, and promotes a more inclusive society.”',
  quote: {
    text: 'When talent is given a stage, assumptions give way to recognition.',
    caption: 'Birasanzwe Rwanda Tour · Edition 1',
  },
  media: {
    image: {
      src: '/assets/images/tour.webp',
      width: 1600,
      height: 1066,
      alt: 'Participants and community members celebrating ability during Birasanzwe Rwanda Tour Edition 1',
    },
    /** Optional future project video — set path (e.g. '/assets/videos/rwanda-tour.webm') when available. */
    videoWebm: undefined as string | undefined,
    videoMp4: undefined as string | undefined,
  },
  /**
   * Provisional thematic highlights (not claims about confirmed event schedules).
   */
  highlights: [
    {
      key: 'discovery',
      title: 'Talent Discovery',
      description: 'Recognizing talents, creativity, and abilities.',
    },
    {
      key: 'expression',
      title: 'Artistic Expression',
      description: 'Creating opportunities for people to express their skills and creativity.',
    },
    {
      key: 'inclusion',
      title: 'Inclusion',
      description: 'Promoting meaningful participation and recognition.',
    },
    {
      key: 'opportunity',
      title: 'Opportunity',
      description: 'Creating platforms where talent can be seen and appreciated.',
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
    title: 'Birasanzwe Rwanda Tour',
    edition: 'Edition 1',
    description:
      'Our flagship platform showcasing the talents, artistic expression, and abilities of persons with disabilities while fostering inclusive participation across communities.',
    status: 'Featured',
    categories: ['Talent & Creativity', 'Inclusion'],
    to: '/projects/birasanzwe-rwanda-tour-edition-1',
    image: {
      src: '/assets/images/tour.webp',
      width: 1600,
      height: 1066,
      alt: 'Birasanzwe Rwanda Tour Edition 1 — celebrating talent and inclusion in Rwanda',
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
