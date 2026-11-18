/**
 * Dedicated project page content: BIRASANZWE RWANDA TOUR 2026 — EDITION 1.
 * Sourced directly from the official BIRASANZWE RWANDA TOUR 2026 Concept Note.
 */

export const RWANDA_TOUR_SEO = {
  title: 'Birasanzwe Rwanda Tour 2026 | Birasanzwe Initiative',
  description:
    'BIRASANZWE Rwanda Tour 2026 is a nationwide advocacy and community engagement initiative led by Aubea Mugaara across Musanze, Rubavu, Nyanza, Bugesera, and Kigali City using music, storytelling, and cultural expression to challenge stigma around disability, illness, and poverty.',
  path: '/projects/birasanzwe-rwanda-tour-edition-1',
  ogImage: '/assets/images/tour.webp',
} as const

/* --------------------------------------------------------------------------
 * SECTION 1 — PROJECT HERO
 * ------------------------------------------------------------------------ */
export const RWANDA_TOUR_HERO = {
  breadcrumb: [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Birasanzwe Rwanda Tour 2026', to: '/projects/birasanzwe-rwanda-tour-edition-1' },
  ] as const,
  badge: 'EDITION 01 · AUGUST 2026',
  heading: 'BIRASANZWE RWANDA TOUR 2026',
  supportingLines: ['ASPIRE TO INCLUDE.', 'CHALLENGING STIGMA THROUGH MUSIC & STORYTELLING.'] as const,
  description:
    'A nationwide advocacy and community engagement initiative led by Rwandan artist and inclusion advocate Aubea Mugaara — using music, storytelling, and cultural expression to challenge stigma associated with disability, illness, and poverty across Rwanda.',
  ctaLabel: 'EXPLORE THE CONCEPT NOTE',
  ctaHref: '#project-story',
} as const

/* --------------------------------------------------------------------------
 * SECTION 2 — CONCEPT NOTE, GOAL, OBJECTIVES & KEY ACTIVITIES
 * ------------------------------------------------------------------------ */
export const RWANDA_TOUR_STORY = {
  eyebrow: 'CONCEPT NOTE · LED BY AUBEA MUGAARA',
  heading: 'COMBINING ARTISTIC ADVOCACY WITH COMMUNITY SUPPORT.',
  paragraph:
    'BIRASANZWE Rwanda Tour is a nationwide advocacy and community engagement initiative that uses music, storytelling, and cultural expression to challenge stigma associated with disability, illness, and poverty. The project promotes the message that these are normal human conditions that should never result in exclusion or discrimination.',
  secondParagraph:
    'Led by Rwandan artist and inclusion advocate Aubea Mugaara, the tour seeks to inspire compassion, social responsibility, and equal participation in society while providing practical support to vulnerable communities.',
  goalLabel: 'OVERARCHING GOAL',
  quotation:
    'To promote an inclusive and compassionate society by combining artistic advocacy with community support initiatives across Rwanda.',
  quotationSubtext:
    'Disability, illness, and poverty are normal human conditions that should never result in exclusion or discrimination.',
  objectives: [
    'Raise awareness about disability inclusion and social equality.',
    'Encourage positive attitudes toward vulnerable and marginalized groups.',
    'Use music and cultural expression as tools for social change.',
    'Support communities through the distribution of essential items and charitable initiatives.',
  ] as const,
  keyActivities: [
    'Live music performances and advocacy concerts.',
    'Community engagement and awareness sessions.',
    'Distribution of hygiene kits and essential support materials.',
    'Collaboration with local leaders, organizations, and community groups.',
  ] as const,
} as const

/* --------------------------------------------------------------------------
 * SECTION 3 — PROJECT IMAGE SLIDESHOW
 * ------------------------------------------------------------------------ */
export interface TourSlide {
  id: string
  title: string
  caption: string
  tag: string
  image?: {
    src: string
    width: number
    height: number
    alt: string
  }
}

export const RWANDA_TOUR_SLIDES: readonly TourSlide[] = [
  {
    id: 'tour-slide-01',
    title: 'Birasanzwe Rwanda Tour — Frame 01',
    caption: 'Using music, storytelling, and cultural expression to challenge stigma around disability, illness, and poverty.',
    tag: 'Birasanzwe Tour · Photograph 01',
    image: {
      src: '/assets/images/tour1.webp',
      width: 1600,
      height: 1280,
      alt: 'Birasanzwe Rwanda Tour — photograph 1 celebrating talent and ability',
    },
  },
  {
    id: 'tour-slide-02',
    title: 'Birasanzwe Rwanda Tour — Frame 02',
    caption: 'Standing together in solidarity, compassion, and equal participation across Rwanda.',
    tag: 'Birasanzwe Tour · Photograph 02',
    image: {
      src: '/assets/images/tour2.webp',
      width: 1600,
      height: 1066,
      alt: 'Birasanzwe Rwanda Tour — photograph 2 showing participants and partners standing hand in hand',
    },
  },
  {
    id: 'tour-slide-03',
    title: 'Birasanzwe Rwanda Tour — Frame 03',
    caption: 'Live music performances and advocacy concerts inspiring positive social change.',
    tag: 'Birasanzwe Tour · Photograph 03',
    image: {
      src: '/assets/images/tour3.webp',
      width: 1600,
      height: 1066,
      alt: 'Birasanzwe Rwanda Tour — photograph 3 showcasing talent and community participation',
    },
  },
  {
    id: 'tour-slide-04',
    title: 'Birasanzwe Rwanda Tour — Frame 04',
    caption: 'Moments of artistic expression, empowerment, and inclusive participation.',
    tag: 'Birasanzwe Tour · Photograph 04',
    image: {
      src: '/assets/images/tour4.webp',
      width: 1600,
      height: 1280,
      alt: 'Birasanzwe Rwanda Tour — photograph 4 highlighting artistic expression and inclusion',
    },
  },
  {
    id: 'tour-slide-05',
    title: 'Birasanzwe Rwanda Tour — Frame 05',
    caption: 'Community engagement and awareness sessions with local leaders and communities.',
    tag: 'Birasanzwe Tour · Photograph 05',
    image: {
      src: '/assets/images/tour5.webp',
      width: 1600,
      height: 1066,
      alt: 'Birasanzwe Rwanda Tour — photograph 5 capturing community engagement',
    },
  },
  {
    id: 'tour-slide-06',
    title: 'Birasanzwe Rwanda Tour — Frame 06',
    caption: 'Aspire to Include — every talent deserves a platform and every person belongs.',
    tag: 'Birasanzwe Tour · Photograph 06',
    image: {
      src: '/assets/images/tour6.webp',
      width: 1600,
      height: 1280,
      alt: 'Birasanzwe Rwanda Tour — photograph 6 celebrating skills and human potential',
    },
  },
  {
    id: 'tour-slide-07',
    title: 'Birasanzwe Rwanda Tour — Frame 07',
    caption: 'Challenging stigma and encouraging positive attitudes toward vulnerable groups.',
    tag: 'Birasanzwe Tour · Photograph 07',
    image: {
      src: '/assets/images/tour7.webp',
      width: 1600,
      height: 1280,
      alt: 'Birasanzwe Rwanda Tour — photograph 7 from the tour showcase',
    },
  },
  {
    id: 'tour-slide-08',
    title: 'Birasanzwe Rwanda Tour — Frame 08',
    caption: 'Connecting artists, communities, and partners for social equality.',
    tag: 'Birasanzwe Tour · Photograph 08',
    image: {
      src: '/assets/images/tour8.webp',
      width: 1600,
      height: 1280,
      alt: 'Birasanzwe Rwanda Tour — photograph 8 showing participants and audience connection',
    },
  },
  {
    id: 'tour-slide-09',
    title: 'Birasanzwe Rwanda Tour — Frame 09',
    caption: 'Promoting dignity, respect, and equal participation across community life.',
    tag: 'Birasanzwe Tour · Photograph 09',
    image: {
      src: '/assets/images/tour9.webp',
      width: 1600,
      height: 1280,
      alt: 'Birasanzwe Rwanda Tour — photograph 9 highlighting inclusive participation',
    },
  },
  {
    id: 'tour-slide-10',
    title: 'Birasanzwe Rwanda Tour — Frame 10',
    caption: 'Combining artistic advocacy with practical community support across Rwanda.',
    tag: 'Birasanzwe Tour · Photograph 10',
    image: {
      src: '/assets/images/tour10.webp',
      width: 1600,
      height: 1280,
      alt: 'Birasanzwe Rwanda Tour — photograph 10 celebrating ability and leadership',
    },
  },
  {
    id: 'tour-slide-11',
    title: 'Birasanzwe Rwanda Tour — Frame 11',
    caption: 'Shared moments of pride, creativity, and collaboration with partner organizations.',
    tag: 'Birasanzwe Tour · Photograph 11',
    image: {
      src: '/assets/images/tour11.webp',
      width: 1600,
      height: 1066,
      alt: 'Birasanzwe Rwanda Tour — photograph 11 capturing collaboration and joy',
    },
  },
  {
    id: 'tour-slide-12',
    title: 'Birasanzwe Rwanda Tour — Frame 12',
    caption: 'Building a more inclusive, equitable, and empowered Rwanda together.',
    tag: 'Birasanzwe Tour · Photograph 12',
    image: {
      src: '/assets/images/tour12.webp',
      width: 1600,
      height: 1280,
      alt: 'Birasanzwe Rwanda Tour — photograph 12 concluding the visual gallery',
    },
  },
] as const

/* --------------------------------------------------------------------------
 * SECTION 4 — GEOGRAPHIC COVERAGE, EXPECTED IMPACT & PARTNERSHIPS
 * ------------------------------------------------------------------------ */
export const RWANDA_TOUR_GEOGRAPHIC_COVERAGE = {
  eyebrow: 'GEOGRAPHIC COVERAGE · NATIONWIDE ROUTE',
  heading: '5 TOUR STOPS ACROSS RWANDA.',
  description: 'The tour will take place across all provinces of Rwanda, culminating in a Grand Finale Concert in Kigali City:',
  stops: [
    { step: '01', city: 'Musanze', region: 'Northern Province', highlight: 'Regional Advocacy Concert & Outreach', isFinale: false },
    { step: '02', city: 'Rubavu', region: 'Western Province', highlight: 'Regional Advocacy Concert & Outreach', isFinale: false },
    { step: '03', city: 'Nyanza', region: 'Southern Province', highlight: 'Regional Advocacy Concert & Outreach', isFinale: false },
    { step: '04', city: 'Bugesera', region: 'Eastern Province', highlight: 'Regional Advocacy Concert & Outreach', isFinale: false },
    { step: '05', city: 'Kigali City', region: 'Grand Finale Concert', highlight: 'National Grand Finale Concert', isFinale: true },
  ] as const,
} as const

export const RWANDA_TOUR_IMPACT = {
  eyebrow: 'EXPECTED IMPACT',
  heading: 'TRANSFORMING COMMUNITIES THROUGH INCLUSION.',
  cards: [
    {
      key: 'awareness',
      title: 'Awareness & Acceptance',
      description:
        'Increased awareness and acceptance of people living with disabilities, chronic illnesses, and other vulnerable groups.',
    },
    {
      key: 'engagement',
      title: 'Community Engagement',
      description:
        'Stronger community engagement around inclusion, compassion, and shared social responsibility.',
    },
    {
      key: 'support',
      title: 'Charitable Community Support',
      description:
        'Enhanced practical support for underserved populations through hygiene kits, essential items, and charitable actions.',
    },
    {
      key: 'culture',
      title: 'Arts for Social Change',
      description:
        'Promotion of arts, music, and culture as effective tools for advocacy and positive social transformation.',
    },
  ] as const,
} as const

export const RWANDA_TOUR_PARTNERSHIPS = {
  eyebrow: 'PARTNERSHIP OPPORTUNITIES',
  heading: 'PARTNER WITH BIRASANZWE RWANDA TOUR 2026.',
  description:
    'By supporting BIRASANZWE Rwanda Tour, partners contribute to building a more inclusive, equitable, and empowered Rwanda. We welcome partnerships through:',
  opportunities: [
    'Financial support',
    'Venue provision',
    'Production support',
    'Equipment sponsorship',
    'Media and communication partnerships',
    'Community outreach collaboration',
  ] as const,
  contactLead: {
    name: 'Aubea Mugaara',
    role: 'Artist / Project Lead',
    phone: '+250 790 378 355',
    email: 'nezerwa4@gmail.com',
  },
} as const

/* --------------------------------------------------------------------------
 * SECTION 5 — FINAL CTA
 * ------------------------------------------------------------------------ */
export const RWANDA_TOUR_CTA = {
  eyebrow: 'JOIN THE MOVEMENT',
  heading: "LET'S BUILD A MORE INCLUSIVE RWANDA TOGETHER.",
  supporting:
    'Partner with BIRASANZWE Rwanda Tour 2026 to champion inclusion, support vulnerable communities, and celebrate human dignity across Rwanda.',
  primaryCta: { label: 'Support Our Projects', to: '/support-us' },
  secondaryCta: { label: 'Become a Partner', to: '/get-involved/partner' },
} as const
