import { useId, useState, type FormEvent } from 'react'
import { AlertCircle, CheckCircle2, MessageCircle } from 'lucide-react'
import { CONTACT_INTENTS, buildWhatsAppUrl, formatWhatsAppMessage, type ContactPayload } from '@/lib/whatsapp'
import { cn } from '@/lib/cn'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/RevealAnimation'

type Errors = Partial<Record<keyof ContactPayload, string>>
type Status = { type: 'idle' } | { type: 'sent' } | { type: 'not-configured'; preview: string }

const EMPTY: ContactPayload = { fullName: '', phone: '', intent: '', message: '' }
const PHONE_RE = /^\+?[\d\s().-]{7,20}$/

function validate(v: ContactPayload): Errors {
  const e: Errors = {}
  if (v.fullName.trim().length < 2) e.fullName = 'Please enter your full name.'
  if (!v.phone.trim()) e.phone = 'Please enter your phone number.'
  else if (!PHONE_RE.test(v.phone.trim())) e.phone = 'Please enter a valid phone number, e.g. +250 7XX XXX XXX.'
  if (!v.intent) e.intent = 'Please choose what you would like to do.'
  if (v.message.trim().length < 10) e.message = 'Please write a short message (at least 10 characters).'
  return e
}

const inputBase =
  'mt-1.5 block w-full rounded-xl border bg-white px-3.5 py-2.5 text-[0.95rem] text-charcoal placeholder:text-ink-muted/70 ' +
  'transition-[border-color,box-shadow] duration-200 focus:border-teal focus:ring-4 focus:ring-teal/15 focus:outline-none'

export function ContactCTA() {
  const id = useId()
  const [values, setValues] = useState<ContactPayload>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>({ type: 'idle' })

  const set = <K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    const firstInvalid = (Object.keys(found) as Array<keyof ContactPayload>)[0]
    if (firstInvalid) {
      const target =
        firstInvalid === 'intent'
          ? document.querySelector<HTMLInputElement>(`input[name="${id}-intent"]`)
          : document.getElementById(`${id}-${firstInvalid}`)
      target?.focus()
      setStatus({ type: 'idle' })
      return
    }

    const url = buildWhatsAppUrl(values)
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
      setStatus({ type: 'sent' })
    } else {
      // Official WhatsApp number not configured yet (see .env.example).
      setStatus({ type: 'not-configured', preview: formatWhatsAppMessage(values) })
    }
  }

  const fieldError = (key: keyof ContactPayload) =>
    errors[key] ? (
      <p id={`${id}-${key}-error`} className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-[#B42318]">
        <AlertCircle aria-hidden="true" className="size-4 shrink-0" />
        {errors[key]}
      </p>
    ) : null

  const a11y = (key: keyof ContactPayload) => ({
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `${id}-${key}-error` : undefined,
  })

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y relative isolate overflow-hidden bg-teal text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#0F766E_0%,#115E59_45%,#083F3B_100%)]"
      />
      <svg aria-hidden="true" className="absolute -bottom-40 -left-40 -z-10 size-[36rem] opacity-30" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="190" stroke="#F4C430" strokeOpacity="0.5" strokeDasharray="2 10" />
        <circle cx="200" cy="200" r="140" stroke="#fff" strokeOpacity="0.15" />
      </svg>

      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow inline-flex items-center gap-3 text-gold">
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
            Get in Touch
          </p>
          <h2 id="contact-title" className="mt-3 font-display text-h2 font-normal">
            YOUR SUPPORT CAN MAKE A DIFFERENCE.
          </h2>
          <p className="mt-4 text-lead text-white/85">
            Whether you want to collaborate, volunteer, support a project, or learn more, we would love to hear from
            you.
          </p>
          <ul className="mt-7 space-y-3">
            {['Fill in the short form', 'Continue on WhatsApp with your message ready', 'Our team gets back to you'].map(
              (step, i) => (
                <li key={step} className="flex items-center gap-3.5 text-[0.95rem] text-white/90">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-gold/60 font-display text-sm text-gold">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ),
            )}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <form
            noValidate
            onSubmit={onSubmit}
            aria-labelledby="contact-title"
            className="on-light rounded-[1.5rem] bg-white p-5 text-charcoal shadow-[0_32px_64px_-32px_rgba(0,0,0,0.5)] sm:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor={`${id}-fullName`} className="text-sm font-bold text-teal-deep">
                  Full Name <span aria-hidden="true" className="text-teal">*</span>
                </label>
                <input
                  id={`${id}-fullName`}
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  value={values.fullName}
                  onChange={(e) => set('fullName', e.target.value)}
                  placeholder="Your full name"
                  className={cn(inputBase, errors.fullName ? 'border-[#B42318]' : 'border-teal-100')}
                  {...a11y('fullName')}
                />
                {fieldError('fullName')}
              </div>
              <div>
                <label htmlFor={`${id}-phone`} className="text-sm font-bold text-teal-deep">
                  Phone Number <span aria-hidden="true" className="text-teal">*</span>
                </label>
                <input
                  id={`${id}-phone`}
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  value={values.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  placeholder="+250 7XX XXX XXX"
                  className={cn(inputBase, errors.phone ? 'border-[#B42318]' : 'border-teal-100')}
                  {...a11y('phone')}
                />
                {fieldError('phone')}
              </div>
            </div>

            <fieldset className="mt-5" aria-describedby={errors.intent ? `${id}-intent-error` : undefined}>
              <legend className="text-sm font-bold text-teal-deep">
                What would you like to do? <span aria-hidden="true" className="text-teal">*</span>
              </legend>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {CONTACT_INTENTS.map((intent) => {
                  const checked = values.intent === intent
                  return (
                    <label
                      key={intent}
                      className={cn(
                        'relative inline-flex min-h-10 cursor-pointer items-center rounded-full border px-3.5 text-sm font-semibold transition-colors duration-200',
                        'has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-teal',
                        checked
                          ? 'border-teal bg-teal text-white'
                          : 'border-teal-100 bg-white text-teal-deep hover:border-teal/50',
                      )}
                    >
                      <input
                        type="radio"
                        name={`${id}-intent`}
                        value={intent}
                        checked={checked}
                        onChange={() => set('intent', intent)}
                        aria-invalid={errors.intent ? true : undefined}
                        className="sr-only"
                      />
                      {checked && <span aria-hidden="true" className="mr-2 size-1.5 rounded-full bg-gold" />}
                      {intent}
                    </label>
                  )
                })}
              </div>
              {fieldError('intent')}
            </fieldset>

            <div className="mt-5">
              <label htmlFor={`${id}-message`} className="text-sm font-bold text-teal-deep">
                Message <span aria-hidden="true" className="text-teal">*</span>
              </label>
              <textarea
                id={`${id}-message`}
                name="message"
                rows={3}
                required
                value={values.message}
                onChange={(e) => set('message', e.target.value)}
                placeholder="Tell us a little about how you would like to get involved…"
                className={cn(inputBase, 'resize-y', errors.message ? 'border-[#B42318]' : 'border-teal-100')}
                {...a11y('message')}
              />
              {fieldError('message')}
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-ink-muted sm:max-w-xs">
                <span aria-hidden="true">* </span>Required. Your message opens in WhatsApp — nothing is stored on this
                website.
              </p>
              <button
                type="submit"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-7 text-[0.95rem] font-bold text-teal-deep shadow-[0_10px_28px_-12px_rgba(244,196,48,0.9)] transition-[background-color,transform] duration-300 ease-premium hover:bg-[#ffd451] active:scale-[0.98]"
              >
                <MessageCircle aria-hidden="true" className="size-4.5 transition-transform duration-300 group-hover:-rotate-6" />
                Continue on WhatsApp
              </button>
            </div>

            <div role="status" aria-live="polite" className="empty:hidden">
              {status.type === 'sent' && (
                <p className="mt-6 flex items-start gap-3 rounded-xl bg-teal-50 p-4 text-sm text-teal-deep">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-teal" />
                  WhatsApp has opened in a new tab with your message ready. Just press send.
                </p>
              )}
              {status.type === 'not-configured' && (
                <div className="mt-6 rounded-xl border border-gold/60 bg-[#FFF9E6] p-4 text-sm text-charcoal">
                  <p className="font-bold text-teal-deep">Your message is ready.</p>
                  <p className="mt-1">
                    Our official WhatsApp line is being set up. Please check back soon — here is the message that will
                    be sent:
                  </p>
                  <pre className="mt-3 font-sans text-[0.85rem] whitespace-pre-wrap text-ink-muted">{status.preview}</pre>
                </div>
              )}
            </div>
          </form>
        </Reveal>
      </Container>
    </section>
  )
}
