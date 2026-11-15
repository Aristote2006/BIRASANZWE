/**
 * Our Impact page content & official statistics data for BIRASANZWE INITIATIVE.
 */

export const IMPACT_SEO = {
  title: 'Our Impact | BIRASANZWE INITIATIVE',
  description:
    'Discover the impact of BIRASANZWE INITIATIVE through communities reached, talents recognized, projects completed, and opportunities created.',
  path: '/impact',
  ogImage: '/assets/images/tour.webp',
} as const

/* --------------------------------------------------------------------------
 * SECTION 1 — IMPACT HERO
 * ------------------------------------------------------------------------ */
export const IMPACT_HERO = {
  breadcrumb: [
    { label: 'Home', to: '/' },
    { label: 'Our Impact', to: '/impact' },
  ] as const,
  heading: 'OUR IMPACT',
  headline: 'Creating Impact. Recognizing Ability. Changing Perspectives.',
  description:
    'Birasanzwe Initiative creates meaningful opportunities, recognizes extraordinary talents, and promotes lasting inclusion and dignity for persons with disabilities across Rwanda.',
} as const

/* --------------------------------------------------------------------------
 * SECTION 2 — ANIMATED IMPACT STATISTICS
 * ------------------------------------------------------------------------ */
export interface ImpactStatItem {
  id: 'communities' | 'talents' | 'projects' | 'lives'
  label: string
  value: number
  suffix?: string
  description: string
}

export const IMPACT_STATS_HEADER = {
  eyebrow: 'IMPACT IN FOCUS',
  heading: 'Measuring What Matters.',
} as const

export const IMPACT_STATS: readonly ImpactStatItem[] = [
  {
    id: 'communities',
    label: 'Communities Reached',
    value: 12,
    suffix: '+',
    description: 'Communities engaged through inclusive dialogues, showcases, and outreach.',
  },
  {
    id: 'talents',
    label: 'Talents Discovered',
    value: 45,
    suffix: '+',
    description: 'Artists, performers, and creators given a platform to share their abilities.',
  },
  {
    id: 'projects',
    label: 'Projects Completed',
    value: 1,
    suffix: '',
    description: 'Flagship initiatives launched, starting with Birasanzwe Rwanda Tour — Edition 1.',
  },
  {
    id: 'lives',
    label: 'Lives Impacted',
    value: 500,
    suffix: '+',
    description: 'Participants, families, and audience members inspired to see ability first.',
  },
] as const

/* --------------------------------------------------------------------------
 * SECTION 3 — IMPACT MESSAGE
 * ------------------------------------------------------------------------ */
export const IMPACT_MESSAGE = {
  eyebrow: 'OUR CONVICTION',
  quote:
    'Every talent recognized is a new possibility discovered. Every opportunity created is a step toward inclusion.',
  attribution: 'Birasanzwe Initiative · Disability Is Not Inability',
} as const

/* --------------------------------------------------------------------------
 * SECTION 4 — FINAL CTA
 * ------------------------------------------------------------------------ */
export const IMPACT_CTA = {
  eyebrow: 'PARTNER FOR INCLUSION',
  heading: 'Help Us Create More Impact.',
  supporting:
    'Stand with us as we expand platforms for talent recognition, dignity, and inclusive opportunity across Rwanda.',
  primaryCta: { label: 'Support Our Mission', to: '/support-us' },
  secondaryCta: { label: 'Become a Partner', to: '/get-involved/partner' },
} as const
