import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { Link, NavLink } from 'react-router'
import { AnimatePresence, m } from 'motion/react'
import { ChevronDown, X } from 'lucide-react'
import { NAV_ITEMS, SUPPORT_LINK, SITE } from '@/lib/site'
import { cn } from '@/lib/cn'
import { Logo } from '@/components/ui/Logo'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  /** Element that should regain focus once the menu closes. */
  returnFocusRef: React.RefObject<HTMLButtonElement | null>
}

const EASE = [0.22, 1, 0.36, 1] as const

/** Full-screen mobile navigation dialog with focus trap, Escape to close and scroll lock. */
export function MobileMenu({ open, onClose, returnFocusRef }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [expanded, setExpanded] = useState<string | null>(null)
  const baseId = useId()

  // Scroll lock + initial focus + focus restoration.
  useEffect(() => {
    if (!open) return
    const returnTarget = returnFocusRef.current
    const { overflow } = document.documentElement.style
    document.documentElement.style.overflow = 'hidden'
    const t = window.setTimeout(() => closeRef.current?.focus(), 50)
    return () => {
      window.clearTimeout(t)
      document.documentElement.style.overflow = overflow
      returnTarget?.focus()
    }
  }, [open, returnFocusRef])

  // Close automatically when resizing up to desktop.
  useEffect(() => {
    if (!open) return
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => mq.matches && onClose()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [open, onClose])

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.stopPropagation()
      onClose()
      return
    }
    if (e.key !== 'Tab' || !panelRef.current) return
    const focusables = panelRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )
    if (!focusables.length) return
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'flex min-h-14 items-center justify-between border-b border-white/10 font-display text-[1.75rem] leading-tight transition-colors',
      isActive ? 'text-gold' : 'text-white hover:text-gold',
    )

  return (
    <AnimatePresence>
      {open && (
        <m.div
          key="mobile-menu"
          className="fixed inset-0 z-[60] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-teal-deep/60 backdrop-blur-sm"
          />
          <m.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            onKeyDown={onKeyDown}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: EASE }}
            className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col overflow-y-auto bg-teal-deep px-6 pt-5 pb-8 shadow-2xl sm:px-8"
          >
            <div className="flex h-14 items-center justify-between">
              <Link to="/" onClick={onClose} aria-label={`${SITE.name} — Home`}>
                <Logo />
              </Link>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid size-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <nav aria-label="Mobile" className="mt-10 flex-1">
              <ul>
                {NAV_ITEMS.map((item, i) => {
                  const panelId = `${baseId}-${i}`
                  const isOpen = expanded === item.label
                  return (
                    <m.li
                      key={item.label}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45, ease: EASE, delay: 0.12 + i * 0.05 }}
                    >
                      {item.children ? (
                        <>
                          <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => setExpanded(isOpen ? null : item.label)}
                            className="flex min-h-14 w-full items-center justify-between border-b border-white/10 text-left font-display text-[1.75rem] leading-tight text-white transition-colors hover:text-gold"
                          >
                            {item.label}
                            <ChevronDown
                              aria-hidden="true"
                              className={cn(
                                'size-5 text-gold transition-transform duration-300',
                                isOpen && 'rotate-180',
                              )}
                            />
                          </button>
                          <div
                            id={panelId}
                            className={cn(
                              'grid transition-[grid-template-rows] duration-300 ease-premium',
                              isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                            )}
                            inert={!isOpen}
                          >
                            <ul className="overflow-hidden">
                              {item.children.map((child) => (
                                <li key={child.to + child.label}>
                                  <Link
                                    to={child.to}
                                    onClick={onClose}
                                    className="flex min-h-12 items-center gap-3 pl-1 text-base font-semibold text-on-dark-muted transition-colors hover:text-white"
                                  >
                                    <span aria-hidden="true" className="h-px w-4 bg-gold" />
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <NavLink to={item.to} end={item.to === '/'} onClick={onClose} className={linkClass}>
                          {item.label}
                        </NavLink>
                      )}
                    </m.li>
                  )
                })}
              </ul>
            </nav>

            <div className="mt-10">
              <Link
                to={SUPPORT_LINK.to}
                onClick={onClose}
                className="flex min-h-14 w-full items-center justify-center rounded-full bg-gold px-6 font-bold text-teal-deep transition-colors hover:bg-[#ffd451]"
              >
                {SUPPORT_LINK.label}
              </Link>
              <p className="mt-6 text-center text-sm text-on-dark-muted">{SITE.slogan.toUpperCase()}</p>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
