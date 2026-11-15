import { useId, useState } from 'react'
import { Plus } from 'lucide-react'
import { FAQS } from '@/content/home'
import { cn } from '@/lib/cn'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/RevealAnimation'
import { SmartLink } from '@/components/ui/SmartLink'

/**
 * Accessible accordion (WAI-ARIA Accordion pattern):
 * heading > button[aria-expanded][aria-controls] + region[aria-labelledby].
 * Smooth height animation via CSS grid-template-rows (no layout measurement in JS).
 * Collapsed panels are `inert`, so hidden content is never focusable.
 */
export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section id="faq" aria-labelledby="faq-title" className="on-light section-y bg-mist">
      <Container className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--spacing-nav)+1.5rem)]">
            <SectionHeading
              id="faq-title"
              eyebrow="Questions & Answers"
              title="Frequently asked questions"
              description="Everything you need to know about Birasanzwe Initiative and how to get involved."
            />
            <Reveal delay={0.1} className="mt-5">
              <SmartLink
                to="#contact"
                className="inline-flex min-h-11 items-center font-bold text-teal underline decoration-gold decoration-2 underline-offset-8 hover:text-teal-deep"
              >
                Still have a question? Contact us
              </SmartLink>
            </Reveal>
          </div>
        </div>

        <RevealGroup className="lg:col-span-8" stagger={0.08}>
          {FAQS.map((item, i) => {
            const open = openIndex === i
            const buttonId = `${baseId}-btn-${i}`
            const panelId = `${baseId}-panel-${i}`
            return (
              <RevealItem
                key={item.q}
                className={cn(
                  'relative mb-3 overflow-hidden rounded-2xl border bg-white transition-[border-color,box-shadow] duration-300',
                  open
                    ? 'border-gold/60 shadow-[0_16px_32px_-24px_rgba(8,63,59,0.4)]'
                    : 'border-teal-100 hover:border-teal/30',
                )}
              >
                {/* Golden active indicator */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute inset-y-0 left-0 w-1 origin-top bg-gold transition-transform duration-500 ease-premium',
                    open ? 'scale-y-100' : 'scale-y-0',
                  )}
                />
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex min-h-14 w-full items-center gap-4 px-5 py-3.5 text-left sm:px-6"
                  >
                    <span aria-hidden="true" className="hidden font-display text-base text-teal/40 sm:inline">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 text-[1rem] font-bold text-teal-deep sm:text-[1.06rem]">{item.q}</span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        'grid size-8 shrink-0 place-items-center rounded-full transition-[background-color,color,transform] duration-300 ease-premium',
                        open ? 'rotate-45 bg-gold text-teal-deep' : 'bg-teal-50 text-teal',
                      )}
                    >
                      <Plus className="size-4" strokeWidth={2.5} />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  inert={!open}
                  className={cn(
                    'grid transition-[grid-template-rows] duration-400 ease-premium',
                    open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[0.95rem] leading-relaxed text-ink-muted sm:pr-16 sm:pl-[3.6rem]">{item.a}</p>
                  </div>
                </div>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </Container>
    </section>
  )
}
