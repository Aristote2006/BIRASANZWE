import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { Link, useLocation } from 'react-router'
import { AnimatePresence, m } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import type { NavItem } from '@/lib/site'
import { cn } from '@/lib/cn'

interface NavDropdownProps {
  item: NavItem
  active: boolean
}

/**
 * Accessible disclosure-style dropdown (WAI-ARIA "disclosure navigation" pattern):
 * - Button with aria-expanded / aria-controls.
 * - Opens on click, Enter/Space, ArrowDown, and on mouse hover (desktop).
 * - Arrow keys / Home / End move between links; Escape closes and restores focus.
 * - Closes on outside click, focus leaving, or route change.
 */
export function NavDropdown({ item, active }: NavDropdownProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLLIElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const linksRef = useRef<Array<HTMLAnchorElement | null>>([])
  const hoverTimer = useRef<number | undefined>(undefined)
  const menuId = useId()
  const location = useLocation()
  const children = item.children ?? []

  const close = useCallback((restoreFocus = false) => {
    setOpen(false)
    if (restoreFocus) buttonRef.current?.focus()
  }, [])

  // Close when the route changes.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  // Outside click.
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  useEffect(() => () => window.clearTimeout(hoverTimer.current), [])

  const focusLink = (index: number) => {
    const count = children.length
    linksRef.current[(index + count) % count]?.focus()
  }

  const onButtonKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setOpen(true)
      requestAnimationFrame(() => focusLink(0))
    } else if (e.key === 'Escape' && open) {
      e.preventDefault()
      close(true)
    }
  }

  const onMenuKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    const current = linksRef.current.findIndex((el) => el === document.activeElement)
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        focusLink(current + 1)
        break
      case 'ArrowUp':
        e.preventDefault()
        focusLink(current - 1)
        break
      case 'Home':
        e.preventDefault()
        focusLink(0)
        break
      case 'End':
        e.preventDefault()
        focusLink(children.length - 1)
        break
      case 'Escape':
        e.preventDefault()
        close(true)
        break
    }
  }

  const onPointerEnter = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return
    window.clearTimeout(hoverTimer.current)
    setOpen(true)
  }

  const onPointerLeave = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return
    window.clearTimeout(hoverTimer.current)
    hoverTimer.current = window.setTimeout(() => setOpen(false), 160)
  }

  return (
    <li
      ref={rootRef}
      className="relative"
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onBlur={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget as Node | null)) setOpen(false)
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onButtonKeyDown}
        className={cn(
          'group relative inline-flex min-h-11 items-center gap-1.5 px-3 text-[0.92rem] font-semibold transition-colors duration-300',
          active || open ? 'text-white' : 'text-white/80 hover:text-white',
        )}
      >
        {item.label}
        <ChevronDown
          aria-hidden="true"
          className={cn('size-4 transition-transform duration-300 ease-premium', open && 'rotate-180')}
          strokeWidth={2.25}
        />
        <span
          aria-hidden="true"
          className={cn(
            'absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-gold transition-transform duration-300 ease-premium',
            active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50',
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-1/2 z-50 w-76 -translate-x-1/2 pt-4"
          >
            <ul
              id={menuId}
              onKeyDown={onMenuKeyDown}
              className="on-light overflow-hidden rounded-2xl border border-teal-100 bg-white p-2 shadow-[0_24px_60px_-20px_rgba(8,63,59,0.45)]"
            >
              {children.map((child, i) => (
                <li key={child.to + child.label}>
                  <Link
                    ref={(el) => {
                      linksRef.current[i] = el
                    }}
                    to={child.to}
                    onClick={() => setOpen(false)}
                    className="group/item flex flex-col rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-teal-50 focus-visible:bg-teal-50"
                  >
                    <span className="flex items-center gap-2 text-[0.95rem] font-bold text-teal-deep">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-gold opacity-0 transition-opacity group-hover/item:opacity-100"
                      />
                      {child.label}
                    </span>
                    {child.description && (
                      <span className="mt-0.5 text-sm text-ink-muted">{child.description}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </li>
  )
}
