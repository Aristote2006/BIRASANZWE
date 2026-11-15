import { SITE } from './site'

export const CONTACT_INTENTS = [
  'Become a Partner',
  'Support a Project',
  'Volunteer',
  'Donate',
  'General Inquiry',
] as const

export type ContactIntent = (typeof CONTACT_INTENTS)[number]

export interface ContactPayload {
  fullName: string
  phone: string
  intent: ContactIntent | ''
  message: string
}

/** Builds a clean, readable WhatsApp message from the contact form values. */
export function formatWhatsAppMessage({ fullName, phone, intent, message }: ContactPayload): string {
  const lines = [
    'Hello Birasanzwe Initiative,',
    '',
    `*Name:* ${fullName.trim()}`,
    phone.trim() ? `*Phone:* ${phone.trim()}` : null,
    `*I would like to:* ${intent || 'General Inquiry'}`,
    '',
    '*Message:*',
    message.trim(),
  ]
  return lines.filter((l): l is string => l !== null).join('\n')
}

export const DEFAULT_SUPPORT_WHATSAPP_MESSAGE =
  'Hello BIRASANZWE INITIATIVE! I would like to know how I can support your mission.'

/** Returns the wa.me URL for a structured contact form payload, or null when the official number is not configured yet. */
export function buildWhatsAppUrl(payload: ContactPayload, number: string = SITE.whatsappNumber) {
  if (!number) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(formatWhatsAppMessage(payload))}`
}

/**
 * Returns a direct WhatsApp chat URL with a pre-filled text message.
 * When the official WhatsApp number is configured in `SITE.whatsappNumber`, it opens
 * `https://wa.me/<number>?text=...`; otherwise it falls back to `https://wa.me/?text=...`
 * so WhatsApp still opens with the pre-filled message without inventing a number.
 */
export function buildDirectWhatsAppUrl(
  message: string = DEFAULT_SUPPORT_WHATSAPP_MESSAGE,
  number: string = SITE.whatsappNumber,
): string {
  const encoded = encodeURIComponent(message)
  return number ? `https://wa.me/${number}?text=${encoded}` : `https://wa.me/?text=${encoded}`
}
