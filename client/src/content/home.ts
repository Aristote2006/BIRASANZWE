/**
 * Homepage content.
 *
 * ⚠️  Everything marked PLACEHOLDER must be replaced with official, verified
 *     content from Birasanzwe Initiative before launch. Nothing here should be
 *     read as an official statement, statistic, partnership or biography.
 */
import type { PosterSources, VideoSources } from '@/components/ui/VideoBackground'

/* --------------------------------------------------------------------------
 * HERO
 * ------------------------------------------------------------------------ */
export const HERO = {
  eyebrow: 'Birasanzwe Initiative',
  empoweredBy: 'Empowered by BAHO AFRICA',
  titleLines: ['ASPIRE', 'TO INCLUDE.'] as const,
  supporting: ['Every talent deserves a platform.', 'Every ability deserves recognition.'] as const,
  primaryCta: { label: 'Explore Our Projects', to: '/projects' },
  secondaryCta: { label: 'Discover Our Mission', to: '/about' },
  pillars: ['Talent', 'Dignity', 'Opportunity'] as const,
}

/**
 * Hero media. No official video/poster exists yet, so both are undefined and the
 * designed gradient composition is shown. When official media is available:
 *   1. Put files in /public/assets/videos and /public/assets/images (see READMEs there).
 *   2. Fill in the paths below — no component changes are needed.
 */
export const HERO_MEDIA: { video?: VideoSources; poster?: PosterSources } = {
  video: {
    webm: '/assets/videos/hero.webm',
  },
  poster: undefined,
}

/* --------------------------------------------------------------------------
 * LEADER MESSAGE
 * ------------------------------------------------------------------------ */
export const LEADER = {
  eyebrow: 'A Message from Our Leadership',
  name: 'AUBEA MUGAARA (NEZERWA UKWISHATSE)',
  title: 'Artist & Initiative Leader',
  /** Official portrait of Mugara. */
  portrait: {
    src: '/assets/images/Mugara.webp',
    width: 742,
    height: 852,
  },
  heading: 'Building an inclusive Rwanda where every person belongs.',
  message: [
    'Birasanzwe Initiative stands on a simple conviction: disability, chronic illness, poverty, or any vulnerable circumstance are normal human conditions that should never result in exclusion or discrimination. Across Rwanda, people with disabilities, people living with chronic diseases, and vulnerable communities hold extraordinary talents and dignity that deserve recognition, compassion, and equal participation.',
  ],
  /** Uses the initiative's official slogan and supporting message. */
  quote:
    'If you can practice something than someone, They can also practice something than you, The nature is balanced nothing abnormal!',
}

/* --------------------------------------------------------------------------
 * FEATURED PROJECT
 * ------------------------------------------------------------------------ */
export const FEATURED_PROJECT = {
  eyebrow: 'Featured Project · August 2026',
  title: 'Birasanzwe Rwanda Tour 2026',
  edition: 'Edition 1',
  to: '/projects/birasanzwe-rwanda-tour-edition-1',
  /** Official featured project image. */
  image: {
    src: '/assets/images/tour.webp',
    width: 1600,
    height: 1066,
    alt: 'Birasanzwe Rwanda Tour 2026 — Edition 1',
  },
  description:
    'Led by Rwandan artist and inclusion advocate Aubea Mugaara, BIRASANZWE Rwanda Tour is a nationwide advocacy and community engagement initiative using music, storytelling, and cultural expression across Musanze, Rubavu, Nyanza, Bugesera, and Kigali City to challenge stigma around disability, chronic illness, and poverty.',
  highlights: [
    {
      title: 'Artistic Advocacy',
      text: 'Live music performances, storytelling, and advocacy concerts challenging stigma and exclusion.',
    },
    {
      title: '5 Stops Across Rwanda',
      text: 'Reaching Musanze, Rubavu, Nyanza, Bugesera, and concluding with a Grand Finale Concert in Kigali City.',
    },
    {
      title: 'Community Support',
      text: 'Supporting vulnerable communities through distribution of hygiene kits and essential items.',
    },
    {
      title: 'Equal Participation',
      text: 'Inspiring compassion, social responsibility, and inclusion for people with disabilities, chronic illnesses, and vulnerable groups.',
    },
  ],
}

/* --------------------------------------------------------------------------
 * IMPACT (qualitative — no statistics are shown until verified figures exist)
 * ------------------------------------------------------------------------ */
export const IMPACT = {
  eyebrow: 'Our Impact',
  title: 'Impact rooted in dignity and opportunity.',
  description:
    'We measure progress by the doors that open: stages offered, talents recognised and communities that see ability first.',
  cards: [
    {
      key: 'participation',
      title: 'Project Participation',
      text: 'People with disabilities take part as performers, creators and leaders — at the centre of every project.',
    },
    {
      key: 'recognition',
      title: 'Talent Recognition',
      text: 'Giving visibility and credit to skills and achievements that deserve a wider audience.',
    },
    {
      key: 'inclusion',
      title: 'Inclusion',
      text: 'Encouraging spaces, events and opportunities that are open and accessible to everyone.',
    },
    {
      key: 'community',
      title: 'Community Engagement',
      text: 'Inviting families, partners and the public to change perceptions together.',
    },
  ],
  note: 'Verified figures will be published here as our projects progress.',
  cta: { label: 'View Our Impact', to: '/impact' },
}

/* --------------------------------------------------------------------------
 * PARTNERS — Official partner logos.
 * ------------------------------------------------------------------------ */
export interface Partner {
  name: string
  subtitle?: string
  logo?: string
  url?: string
}

export const PARTNERS: Partner[] = [
  {
    name: 'HIHD',
    subtitle: 'HAND IN HAND FOR DEVELOPMENT',
    logo: '/assets/logos/logo1.webp',
  },
    {
    name: 'UBUMWE COMMUNITY CENTER',
    subtitle: 'OUR PARTNER',
    logo: '/assets/logos/logo5.webp',
  },
      {
    name: 'UMUGAARA DIGITAL CREATIVE HUB',
    subtitle: 'OUR PARTNER',
    logo: '/assets/logos/logo4.webp',
  },
  {
    name: 'BAHO AFRICA',
    subtitle: 'Official Partner',
    logo: '/assets/logos/logo2.webp',
  },
  {
    name: 'OIPPA RWANDA',
    subtitle: 'Integration & Promotion of People with Albinism',
    logo: '/assets/logos/logo3.webp',
  },
]

/* --------------------------------------------------------------------------
 * FAQ
 * ------------------------------------------------------------------------ */
export const FAQS = [
  {
    q: 'What is Birasanzwe Initiative?',
    a: 'Birasanzwe Initiative is a Rwandan advocacy and community engagement initiative that promotes inclusion, dignity, talent recognition, and practical support for people with disabilities, people living with chronic diseases, and vulnerable people facing illness, poverty, or other circumstances that can lead to exclusion.',
  },
  {
    q: 'What does “Aspire to Include” mean?',
    a: '“Aspire to Include” is our call to recognize that disability, chronic illness, and poverty are normal human conditions that should never result in stigma, exclusion, or discrimination. We champion equal participation, compassion, and platforms where every person’s talent and dignity are respected.',
  },
  {
    q: 'Who does Birasanzwe Initiative serve and include?',
    a: 'We serve and stand alongside people with disabilities, people living with chronic diseases, and vulnerable individuals or communities facing illness, poverty, and other circumstances that can lead to social exclusion.',
  },
  {
    q: 'What is the Birasanzwe Rwanda Tour 2026?',
    a: 'Led by Rwandan artist and inclusion advocate Aubea Mugaara, Birasanzwe Rwanda Tour 2026 is a nationwide initiative combining live music, storytelling, awareness sessions, and distribution of hygiene kits and essential items across Musanze, Rubavu, Nyanza, Bugesera, and a Grand Finale Concert in Kigali City.',
  },
  {
    q: 'How can I become a partner, volunteer, or supporter?',
    a: 'We welcome partners through financial support, venue provision, production support, equipment sponsorship, media partnerships, and community outreach collaboration. Use the contact form below or reach us directly on WhatsApp at +250 790 378 355.',
  },
]
