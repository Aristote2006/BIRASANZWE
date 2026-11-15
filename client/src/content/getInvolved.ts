/**
 * Get Involved page content for BIRASANZWE INITIATIVE.
 */

export const GET_INVOLVED_SEO = {
  title: 'Get Involved | BIRASANZWE INITIATIVE',
  description:
    'Join BIRASANZWE INITIATIVE as a volunteer, partner, supporter, or advocate to promote inclusion and celebrate the talents and abilities of persons with disabilities in Rwanda.',
  path: '/get-involved',
  ogImage: '/assets/images/tour.webp',
} as const

export const DEFAULT_GET_INVOLVED_WHATSAPP_MESSAGE =
  'Hello BIRASANZWE INITIATIVE! I would love to get involved and contribute to your mission. Please tell me how I can participate.'

/* --------------------------------------------------------------------------
 * SECTION 1 — HERO
 * ------------------------------------------------------------------------ */
export const GET_INVOLVED_HERO = {
  breadcrumb: [
    { label: 'Home', to: '/' },
    { label: 'Get Involved', to: '/get-involved' },
  ] as const,
  heading: 'GET INVOLVED',
  headline: 'Your Participation Can Change a Life.',
  description:
    'We invite individuals, organizations, and communities across Rwanda and beyond to join BIRASANZWE INITIATIVE in promoting inclusion, celebrating ability, and recognizing extraordinary talents.',
} as const

/* --------------------------------------------------------------------------
 * SECTION 2 — WAYS TO GET INVOLVED (4 CARDS)
 * ------------------------------------------------------------------------ */
export interface InvolvementWay {
  id: 'volunteer' | 'partner' | 'support' | 'awareness'
  title: string
  description: string
  ctaLabel: string
  whatsappMessage: string
}

export const WAYS_TO_GET_INVOLVED_HEADER = {
  eyebrow: 'WAYS TO GET INVOLVED',
  heading: 'Choose How You Would Like to Participate.',
} as const

export const WAYS_TO_GET_INVOLVED: readonly InvolvementWay[] = [
  {
    id: 'volunteer',
    title: 'Volunteer',
    description: 'Share your time, talents, and skills.',
    ctaLabel: 'Join as a Volunteer',
    whatsappMessage:
      'Hello BIRASANZWE INITIATIVE! I would love to get involved as a Volunteer and share my time, talents, and skills.',
  },
  {
    id: 'partner',
    title: 'Become a Partner',
    description: 'Collaborate with us to create meaningful opportunities.',
    ctaLabel: 'Partner With Us',
    whatsappMessage:
      'Hello BIRASANZWE INITIATIVE! We would love to Become a Partner and collaborate to create meaningful opportunities.',
  },
  {
    id: 'support',
    title: 'Support Our Mission',
    description: 'Contribute resources to support our initiatives.',
    ctaLabel: 'Support Our Mission',
    whatsappMessage:
      'Hello BIRASANZWE INITIATIVE! I would like to Support Our Mission and contribute resources to your initiatives.',
  },
  {
    id: 'awareness',
    title: 'Spread Awareness',
    description: 'Help share our message of inclusion and ability.',
    ctaLabel: 'Become an Advocate',
    whatsappMessage:
      'Hello BIRASANZWE INITIATIVE! I would love to help Spread Awareness and share your message of inclusion and ability.',
  },
] as const

/* --------------------------------------------------------------------------
 * SECTION 3 — JOIN OUR MOVEMENT
 * ------------------------------------------------------------------------ */
export const JOIN_OUR_MOVEMENT = {
  eyebrow: 'JOIN OUR MOVEMENT',
  heading: 'Together, We Make Inclusion Possible.',
  description:
    'Every inclusive stage, every recognized talent, and every changed perspective begins with people who choose to take action. Take the first step today and connect with our team.',
  buttonLabel: 'Get Involved on WhatsApp',
  prefilledMessage: DEFAULT_GET_INVOLVED_WHATSAPP_MESSAGE,
} as const
