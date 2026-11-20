/**
 * Central site configuration.
 * Values marked TODO must be replaced with official information when available.
 */

export const SITE = {
  name: 'Birasanzwe Initiative',
  shortName: 'Birasanzwe',
  slogan: 'Aspire to Include.',
  supporting: ['Every talent deserves a platform.', 'Every ability deserves recognition.'],
  mission:
    'Promoting inclusion, dignity, talent, and equal participation for people with disabilities, people living with chronic diseases, and vulnerable people facing illness, poverty, or other circumstances that can lead to exclusion.',
  /** Official production URL. Can be overridden via VITE_SITE_URL. */
  url: (import.meta.env.VITE_SITE_URL as string | undefined) || 'https://birasanzweinitiative.com',
  /** Official phone / WhatsApp number for Birasanzwe Initiative (+250 790 378 355). */
  phoneDisplay: '+250 790 378 355',
  whatsappNumber: (
    (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) || '250790378355'
  ).replace(/\D/g, ''),
  /** Official email & physical address (centralised so Footer & Contact page share the exact same details). */
  email: (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) || 'birasanzweinitiative@gmail.com',
  emailFallbackLabel: 'birasanzweinitiative@gmail.com',
  address: 'KG 17 Ave, Kigali',
} as const

/**
 * Official social media links — replace each URL below with your platform link.
 */
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/',
  instagram: 'https://www.instagram.com/hirya_yejo?cnvx=ZXRpeG9hNjJ0czdv',
  x: 'https://x.com/',
  youtube: ' https://youtube.com/@birasanzweinitiative?si=EnkVYwHvosDOsUbJ',
  linkedin: 'https://linkedin.com/',
} as const

export interface NavChild {
  label: string
  to: string
  description?: string
}

export interface NavItem {
  label: string
  to: string
  children?: NavChild[]
}

/**
 * Primary navigation. Routes other than "/" point to future pages, which
 * currently render a lightweight "coming soon" placeholder.
 */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Projects',
    to: '/projects',
    children: [
      {
        label: 'Birasanzwe Rwanda Tour',
        to: '/projects/birasanzwe-rwanda-tour-edition-1',
        description: 'Edition 1 — our featured project',
      },
      { label: 'All Projects', to: '/projects', description: 'Explore every initiative' },
    ],
  },
  { label: 'Impact', to: '/impact' },
  {
    label: 'Get Involved',
    to: '/get-involved',
    children: [
      { label: 'Become a Partner', to: '/get-involved/partner', description: 'Collaborate with us' },
      { label: 'Volunteer', to: '/get-involved/volunteer', description: 'Share your time and skills' },
      { label: 'Contact Us', to: '/contact', description: 'Start a conversation' },
    ],
  },
  { label: 'Contact Us', to: '/contact' },
]

export const SUPPORT_LINK = { label: 'Support Us', to: '/support-us' } as const
