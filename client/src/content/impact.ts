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
    'Birasanzwe Initiative creates meaningful opportunities, recognizes talents, and promotes inclusion, dignity, and practical support for people with disabilities, people with chronic diseases, and vulnerable communities facing illness, poverty, or exclusion across Rwanda.',
} as const

/* --------------------------------------------------------------------------
 * SECTION 2 — ANIMATED IMPACT STATISTICS
 * ------------------------------------------------------------------------ */
export interface ImpactStatItem {
  id: 'communities' | 'projects' | 'lives'
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
    value: 32000,
    suffix: '+',
    description: 'Community members reached through inclusive advocacy, music showcases, and outreach across Rwanda.',
  },
  {
    id: 'lives',
    label: 'Lives Impacted',
    value: 2600,
    suffix: '+',
    description: 'Individuals and vulnerable community members directly supported and inspired through our initiatives.',
  },
  {
    id: 'projects',
    label: 'Projects Completed',
    value: 1,
    suffix: '',
    description: 'Flagship nationwide initiatives launched, starting with Birasanzwe Rwanda Tour.',
  },
] as const

/* --------------------------------------------------------------------------
 * SECTION 3 — IMPACT MESSAGE
 * ------------------------------------------------------------------------ */
export const IMPACT_MESSAGE = {
  eyebrow: 'OUR CONVICTION',
  quote:
    'Every talent recognized is a new possibility discovered. Every opportunity created is a step toward inclusion.',
  attribution: 'Birasanzwe Initiative · Aspire to Include',
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
