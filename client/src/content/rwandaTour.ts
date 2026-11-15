/**
 * Dedicated project page content: BIRASANZWE RWANDA TOUR — EDITION 1.
 *
 * ⚠️  No unverified dates, locations, statistics, or historical claims have been
 *     invented. Additional official photographs can be added to `RWANDA_TOUR_SLIDES`
 *     as they are placed in `public/assets/images/`.
 */

export const RWANDA_TOUR_SEO = {
  title: 'Birasanzwe Rwanda Tour Edition 1 | Birasanzwe Initiative',
  description:
    'Discover Birasanzwe Rwanda Tour Edition 1, celebrating the talents, creativity, and abilities of persons with disabilities in Rwanda.',
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
    { label: 'Birasanzwe Rwanda Tour', to: '/projects/birasanzwe-rwanda-tour-edition-1' },
  ] as const,
  badge: 'EDITION 01',
  heading: 'BIRASANZWE RWANDA TOUR',
  supportingLines: ['CELEBRATING TALENT.', 'REDEFINING POSSIBILITY.'] as const,
  description:
    'A platform celebrating the talents, creativity, and abilities of persons with disabilities while promoting inclusion and recognition.',
  ctaLabel: 'EXPLORE THE PROJECT',
  ctaHref: '#project-story',
} as const

/* --------------------------------------------------------------------------
 * SECTION 2 — PROJECT STORY
 * ------------------------------------------------------------------------ */
export const RWANDA_TOUR_STORY = {
  eyebrow: 'ABOUT THE PROJECT',
  heading: 'A PLATFORM WHERE TALENT TAKES THE SPOTLIGHT.',
  paragraph:
    'Birasanzwe Rwanda Tour — Edition 1 was created to celebrate the talents, creativity, artistic expression, and abilities of persons with disabilities across Rwanda. By bringing artists, creators, and communities together in an atmosphere of dignity and shared purpose, the tour challenges limiting assumptions and turns inclusion into a visible, lived experience.',
  quotation: 'Disability Is Not Inability.',
  quotationSubtext: 'Every talent deserves a platform. Every ability deserves recognition.',
} as const

/* --------------------------------------------------------------------------
 * SECTION 3 — PROJECT IMAGE SLIDESHOW
 * ------------------------------------------------------------------------ */
export interface TourSlide {
  id: string
  title: string
  caption: string
  tag: string
  /** Real project photograph when available; omit to render a brand-colored architectural placeholder slide. */
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
    title: 'Birasanzwe Rwanda Tour — Edition 01 (Frame 01)',
    caption: 'Celebrating talent, dignity, and inclusion during Birasanzwe Rwanda Tour — Edition 1.',
    tag: 'Edition 01 · Photograph 01',
    image: {
      src: '/assets/images/tour1.webp',
      width: 1600,
      height: 1280,
      alt: 'Birasanzwe Rwanda Tour Edition 1 — photograph 1 celebrating talent and ability',
    },
  },
  {
    id: 'tour-slide-02',
    title: 'Birasanzwe Rwanda Tour — Edition 01 (Frame 02)',
    caption: 'Standing together in solidarity and recognition of every ability across Rwanda.',
    tag: 'Edition 01 · Photograph 02',
    image: {
      src: '/assets/images/tour2.webp',
      width: 1600,
      height: 1066,
      alt: 'Birasanzwe Rwanda Tour Edition 1 — photograph 2 showing participants and partners standing hand in hand',
    },
  },
  {
    id: 'tour-slide-03',
    title: 'Birasanzwe Rwanda Tour — Edition 01 (Frame 03)',
    caption: 'Creating visible platforms where creativity and talent take center stage.',
    tag: 'Edition 01 · Photograph 03',
    image: {
      src: '/assets/images/tour3.webp',
      width: 1600,
      height: 1066,
      alt: 'Birasanzwe Rwanda Tour Edition 1 — photograph 3 showcasing talent and community participation',
    },
  },
  {
    id: 'tour-slide-04',
    title: 'Birasanzwe Rwanda Tour — Edition 01 (Frame 04)',
    caption: 'Moments of artistic expression, empowerment, and inclusive participation.',
    tag: 'Edition 01 · Photograph 04',
    image: {
      src: '/assets/images/tour4.webp',
      width: 1600,
      height: 1280,
      alt: 'Birasanzwe Rwanda Tour Edition 1 — photograph 4 highlighting artistic expression and inclusion',
    },
  },
  {
    id: 'tour-slide-05',
    title: 'Birasanzwe Rwanda Tour — Edition 01 (Frame 05)',
    caption: 'Recognizing ability on its own merit and bringing communities together.',
    tag: 'Edition 01 · Photograph 05',
    image: {
      src: '/assets/images/tour5.webp',
      width: 1600,
      height: 1066,
      alt: 'Birasanzwe Rwanda Tour Edition 1 — photograph 5 capturing community engagement',
    },
  },
  {
    id: 'tour-slide-06',
    title: 'Birasanzwe Rwanda Tour — Edition 01 (Frame 06)',
    caption: 'Every talent deserves a platform and every ability deserves recognition.',
    tag: 'Edition 01 · Photograph 06',
    image: {
      src: '/assets/images/tour6.webp',
      width: 1600,
      height: 1280,
      alt: 'Birasanzwe Rwanda Tour Edition 1 — photograph 6 celebrating skills and human potential',
    },
  },
  {
    id: 'tour-slide-07',
    title: 'Birasanzwe Rwanda Tour — Edition 01 (Frame 07)',
    caption: 'Challenging assumptions and celebrating potential through shared experiences.',
    tag: 'Edition 01 · Photograph 07',
    image: {
      src: '/assets/images/tour7.webp',
      width: 1600,
      height: 1280,
      alt: 'Birasanzwe Rwanda Tour Edition 1 — photograph 7 from the tour showcase',
    },
  },
  {
    id: 'tour-slide-08',
    title: 'Birasanzwe Rwanda Tour — Edition 01 (Frame 08)',
    caption: 'Connecting talent with audiences, supporters, and meaningful opportunities.',
    tag: 'Edition 01 · Photograph 08',
    image: {
      src: '/assets/images/tour8.webp',
      width: 1600,
      height: 1280,
      alt: 'Birasanzwe Rwanda Tour Edition 1 — photograph 8 showing participants and audience connection',
    },
  },
  {
    id: 'tour-slide-09',
    title: 'Birasanzwe Rwanda Tour — Edition 01 (Frame 09)',
    caption: 'Promoting dignity, respect, and equal participation across community life.',
    tag: 'Edition 01 · Photograph 09',
    image: {
      src: '/assets/images/tour9.webp',
      width: 1600,
      height: 1280,
      alt: 'Birasanzwe Rwanda Tour Edition 1 — photograph 9 highlighting inclusive participation',
    },
  },
  {
    id: 'tour-slide-10',
    title: 'Birasanzwe Rwanda Tour — Edition 01 (Frame 10)',
    caption: 'Building a movement of possibility where abilities are seen and celebrated.',
    tag: 'Edition 01 · Photograph 10',
    image: {
      src: '/assets/images/tour10.webp',
      width: 1600,
      height: 1280,
      alt: 'Birasanzwe Rwanda Tour Edition 1 — photograph 10 celebrating ability and leadership',
    },
  },
  {
    id: 'tour-slide-11',
    title: 'Birasanzwe Rwanda Tour — Edition 01 (Frame 11)',
    caption: 'Shared moments of pride, creativity, and collaboration during Edition 01.',
    tag: 'Edition 01 · Photograph 11',
    image: {
      src: '/assets/images/tour11.webp',
      width: 1600,
      height: 1066,
      alt: 'Birasanzwe Rwanda Tour Edition 1 — photograph 11 capturing collaboration and joy',
    },
  },
  {
    id: 'tour-slide-12',
    title: 'Birasanzwe Rwanda Tour — Edition 01 (Frame 12)',
    caption: 'Advancing inclusion, talent recognition, and opportunity across Rwanda.',
    tag: 'Edition 01 · Photograph 12',
    image: {
      src: '/assets/images/tour12.webp',
      width: 1600,
      height: 1280,
      alt: 'Birasanzwe Rwanda Tour Edition 1 — photograph 12 concluding the Edition 1 visual gallery',
    },
  },
] as const

/* --------------------------------------------------------------------------
 * SECTION 4 — WHY IT MATTERS
 * ------------------------------------------------------------------------ */
export const RWANDA_TOUR_IMPACT = {
  eyebrow: 'WHY IT MATTERS',
  heading: 'EVERY TALENT DESERVES A PLATFORM.',
  cards: [
    {
      key: 'recognition',
      title: 'Talent Recognition',
      description: 'Celebrating the skills, creativity, and abilities of persons with disabilities.',
    },
    {
      key: 'inclusion',
      title: 'Inclusion',
      description: 'Encouraging meaningful participation and recognition.',
    },
    {
      key: 'opportunity',
      title: 'Opportunity',
      description: 'Creating spaces where talents can be expressed and appreciated.',
    },
  ] as const,
} as const

/* --------------------------------------------------------------------------
 * SECTION 5 — FINAL CTA
 * ------------------------------------------------------------------------ */
export const RWANDA_TOUR_CTA = {
  eyebrow: 'JOIN THE MOVEMENT',
  heading: "LET'S CREATE MORE OPPORTUNITIES TOGETHER.",
  supporting:
    'Join us in promoting inclusion, celebrating talent, and building a society where every ability deserves recognition.',
  primaryCta: { label: 'Support Our Projects', to: '/support-us' },
  secondaryCta: { label: 'Become a Partner', to: '/get-involved/partner' },
} as const
