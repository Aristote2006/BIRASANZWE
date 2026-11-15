import { MessageCircle } from 'lucide-react'
import { buildDirectWhatsAppUrl, DEFAULT_SUPPORT_WHATSAPP_MESSAGE } from '@/lib/whatsapp'

/**
 * Global floating WhatsApp button fixed at the bottom-right of all pages.
 * - Opens WhatsApp directly with the pre-filled support message.
 * - Mobile and desktop responsive with an accessible label and hover/focus tooltip.
 * - Subtle, non-distracting transition that respects reduced-motion preferences.
 */
export function FloatingWhatsAppButton() {
  const href = buildDirectWhatsAppUrl(DEFAULT_SUPPORT_WHATSAPP_MESSAGE)

  return (
    <div className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Birasanzwe Initiative on WhatsApp"
        className="group relative flex items-center gap-2.5 rounded-full border border-gold/60 bg-teal-deep p-3.5 text-white shadow-[0_14px_34px_-10px_rgba(8,63,59,0.75)] transition-[background-color,border-color,transform,box-shadow] duration-300 ease-premium hover:-translate-y-0.5 hover:border-gold hover:bg-teal hover:shadow-[0_18px_40px_-10px_rgba(8,63,59,0.9)] sm:px-4 sm:py-3"
      >
        {/* Accessible tooltip on hover / keyboard focus */}
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-xl border border-gold/40 bg-teal-deep px-3.5 py-2 text-xs font-bold tracking-wide text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-x-0.5 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block"
        >
          Chat with us on WhatsApp
        </span>

        <span className="grid size-7 place-items-center rounded-full bg-gold text-teal-deep transition-transform duration-300 ease-premium group-hover:scale-105">
          <MessageCircle aria-hidden="true" className="size-4 fill-teal-deep" strokeWidth={2.2} />
        </span>

        <span className="hidden pr-1 text-xs font-extrabold tracking-wide text-white sm:inline">
          WhatsApp
        </span>
      </a>
    </div>
  )
}
