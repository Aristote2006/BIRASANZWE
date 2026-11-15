/**
 * Contact Us page content for BIRASANZWE INITIATIVE.
 * All official contact details (phone, email, address, WhatsApp) are read directly
 * from `SITE` in `@/lib/site` so they are never duplicated or invented.
 */

export const CONTACT_SEO = {
  title: 'Contact Us | BIRASANZWE INITIATIVE',
  description:
    'Get in touch with BIRASANZWE INITIATIVE in Rwanda. Reach us by phone, WhatsApp, or visit us on the map to collaborate, volunteer, or support disability inclusion.',
  path: '/contact',
  ogImage: '/assets/images/tour.webp',
} as const

export const DEFAULT_CONTACT_WHATSAPP_MESSAGE =
  'Hello BIRASANZWE INITIATIVE! I would like to get in touch with your team.'

export const CONTACT_HERO = {
  breadcrumb: [
    { label: 'Home', to: '/' },
    { label: 'Contact Us', to: '/contact' },
  ] as const,
  heading: 'CONTACT US',
  title: "We'd Love to Hear From You.",
  description:
    'Whether you have a question, wish to partner with us, or want to learn more about how BIRASANZWE INITIATIVE promotes inclusion and celebrates ability, our team is ready to connect with you.',
} as const

export const CONTACT_INFO_SECTION = {
  eyebrow: 'DIRECT CHANNELS',
  heading: 'Contact Information.',
  whatsappButtonLabel: 'Contact Us on WhatsApp',
} as const

export const CONTACT_MAP_SECTION = {
  eyebrow: 'OUR LOCATION',
  heading: 'Find Us on the Map',
  iframeSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4992173836417!2d30.110162574050452!3d-1.953629136717727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7c856e298a1%3A0x8a410a67246add20!2sUMUGAARA%20DCH!5e0!3m2!1sen!2srw!4v1794742096417!5m2!1sen!2srw',
  iframeTitle: 'BIRASANZWE INITIATIVE Location on Google Maps — UMUGAARA DCH',
} as const
