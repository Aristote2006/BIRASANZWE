/**
 * Support Us page content for BIRASANZWE INITIATIVE.
 */
import { DEFAULT_SUPPORT_WHATSAPP_MESSAGE } from '@/lib/whatsapp'

export const SUPPORT_SEO = {
  title: 'Support Us | BIRASANZWE INITIATIVE',
  description:
    'Support BIRASANZWE INITIATIVE in promoting inclusion, recognizing talents, and creating opportunities for persons with disabilities in Rwanda.',
  path: '/support-us',
  ogImage: '/assets/images/tour.webp',
} as const

/* --------------------------------------------------------------------------
 * SECTION 1 — HERO
 * ------------------------------------------------------------------------ */
export const SUPPORT_HERO = {
  breadcrumb: [
    { label: 'Home', to: '/' },
    { label: 'Support Us', to: '/support-us' },
  ] as const,
  heading: 'SUPPORT OUR MISSION',
  headline: 'Together, We Create Opportunities.',
  description:
    'Everyone can help promote inclusion, recognize talents, and create meaningful opportunities for persons with disabilities across Rwanda.',
} as const

/* --------------------------------------------------------------------------
 * SECTION 2 — HOW YOU CAN SUPPORT US (4 SIMPLE CARDS)
 * ------------------------------------------------------------------------ */
export interface SupportOption {
  id: 'financial' | 'volunteer' | 'partner' | 'share'
  title: string
  description: string
  buttonLabel: string
  whatsappMessage: string
}

export const SUPPORT_OPTIONS_HEADER = {
  eyebrow: 'WAYS TO CONTRIBUTE',
  heading: 'How You Can Support Us.',
} as const

export const SUPPORT_OPTIONS: readonly SupportOption[] = [
  {
    id: 'financial',
    title: 'Financial Support',
    description: 'Help fund our activities and initiatives.',
    buttonLabel: 'Contact Us',
    whatsappMessage:
      'Hello BIRASANZWE INITIATIVE! I would like to provide Financial Support for your activities and initiatives.',
  },
  {
    id: 'volunteer',
    title: 'Volunteer With Us',
    description: 'Give your time, skills, and energy.',
    buttonLabel: 'Contact Us',
    whatsappMessage:
      'Hello BIRASANZWE INITIATIVE! I would like to Volunteer With Us and share my time and skills.',
  },
  {
    id: 'partner',
    title: 'Become a Partner',
    description: 'Collaborate with us to create greater impact.',
    buttonLabel: 'Contact Us',
    whatsappMessage:
      'Hello BIRASANZWE INITIATIVE! I would like to Become a Partner and collaborate with your initiative.',
  },
  {
    id: 'share',
    title: 'Share Our Mission',
    description: 'Help spread awareness and inspire others.',
    buttonLabel: 'Contact Us',
    whatsappMessage:
      'Hello BIRASANZWE INITIATIVE! I would like to help Share Our Mission and spread awareness.',
  },
] as const

/* --------------------------------------------------------------------------
 * SECTION 3 — WHATSAPP SUPPORT CTA
 * ------------------------------------------------------------------------ */
export const SUPPORT_WHATSAPP_CTA = {
  eyebrow: 'DIRECT CONVERSATION',
  heading: "Want to Support Us? Let's Talk on WhatsApp!",
  supporting:
    'Reach our team directly on WhatsApp and we will guide you on the simplest way to support our mission.',
  buttonLabel: 'Contact Us on WhatsApp',
  prefilledMessage: DEFAULT_SUPPORT_WHATSAPP_MESSAGE,
} as const
