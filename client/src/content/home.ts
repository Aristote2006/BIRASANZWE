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
  eyebrow: 'Birasanzwe Initiative · Rwanda',
  titleLines: ['DISABILITY IS', 'NOT INABILITY.'] as const,
  supporting: ['Every talent deserves a platform.', 'Every ability deserves recognition.'] as const,
  primaryCta: { label: 'Explore Our Projects', to: '#featured-project' },
  secondaryCta: { label: 'Discover Our Mission', to: '#mission' },
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
  name: 'Mugara',
  /** PLACEHOLDER — confirm the official leadership title. */
  title: 'Initiative Leader',
  /** Official portrait of Mugara. */
  portrait: {
    src: '/assets/images/Mugara.webp',
    width: 742,
    height: 852,
  },
  heading: 'Building a Rwanda where every ability is seen.',
  /**
   * PLACEHOLDER — introductory message drafted from the initiative's stated values.
   * Replace with Mugara's official message.
   */
  message: [
    'Birasanzwe Initiative stands on a simple conviction: a disability does not define what a person can achieve. Across Rwanda, there are artists, performers, athletes, creators and entrepreneurs whose abilities deserve to be seen, celebrated and given room to grow.',
    'Our work is about creating that room — platforms where talent is recognised on its own merit, where dignity comes first, and where opportunity is open to everyone. We warmly invite you to walk this journey with us.',
  ],
  /** Uses the initiative's official slogan and supporting message. */
  quote:
    'Disability is not inability. Every talent deserves a platform, and every ability deserves recognition.',
}

/* --------------------------------------------------------------------------
 * FEATURED PROJECT
 * ------------------------------------------------------------------------ */
export const FEATURED_PROJECT = {
  eyebrow: 'Featured Project',
  title: 'Birasanzwe Rwanda Tour',
  edition: 'Edition 1',
  to: '/projects/birasanzwe-rwanda-tour-edition-1',
  /** Official featured project image. */
  image: {
    src: '/assets/images/tour.webp',
    width: 1600,
    height: 1066,
    alt: 'Birasanzwe Rwanda Tour — Edition 1',
  },
  /** PLACEHOLDER — official project description. */
  description:
    'The Birasanzwe Rwanda Tour is our flagship journey to celebrate talent and ability. Full details of the first edition — locations, dates and programme — will be shared here soon.',
  /** PLACEHOLDER — qualitative highlights, to be confirmed with the project team. */
  highlights: [
    { title: 'Showcasing talent', text: 'Creating stages where people with disabilities lead and shine.' },
    { title: 'Across Rwanda', text: 'Bringing the message of ability closer to communities.' },
    { title: 'Recognising ability', text: 'Celebrating achievement on its own merit — never out of pity.' },
    { title: 'Building connections', text: 'Linking talent with audiences, partners and opportunity.' },
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
    a: 'Birasanzwe Initiative is a Rwandan initiative that promotes inclusion, talent, dignity and opportunities for people with disabilities. We believe every talent deserves a platform and every ability deserves recognition.',
  },
  {
    q: 'What does “Disability Is Not Inability” mean?',
    a: 'It means that a disability does not define what a person is capable of. Our message puts talent, ability and potential first — celebrating people for what they can do and create, rather than viewing them through pity or limitation.',
  },
  {
    q: 'Who can participate in Birasanzwe projects?',
    // PLACEHOLDER — confirm official participation criteria.
    a: 'Our projects are designed to give people with disabilities a platform to share their talents. Participation details for each project will be announced on this website. In the meantime, please contact us to express your interest.',
  },
  {
    q: 'How can I become a partner or volunteer?',
    // PLACEHOLDER — confirm official partnership / volunteer process.
    a: 'We welcome organisations and individuals who share our values. Use the contact form below and select “Become a Partner” or “Volunteer” — your message will be sent to our team via WhatsApp.',
  },
  {
    q: 'How can I support Birasanzwe Initiative?',
    // PLACEHOLDER — official donation / support channels to be added.
    a: 'You can support a project, volunteer your time and skills, become a partner or help spread our message. Official support and donation channels will be published soon — for now, reach out through the contact form below.',
  },
]
