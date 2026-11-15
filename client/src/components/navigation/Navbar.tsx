import { useCallback, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Menu } from 'lucide-react'
import { NAV_ITEMS, SUPPORT_LINK, SITE } from '@/lib/site'
import { cn } from '@/lib/cn'
import { useScrolled } from '@/hooks/useScrolled'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { NavDropdown } from './NavDropdown'
import { MobileMenu } from './MobileMenu'

/**
 * Sticky primary navigation.
 * Transparent over the homepage hero, transitions to solid dark teal on scroll.
 * Height stays constant to avoid any layout shift.
 */
export function Navbar() {
  const scrolled = useScrolled(32)
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const solid = scrolled || pathname !== '/'

  return (
    <>
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ease-premium',
        'border-b',
        solid
          ? 'border-gold/15 bg-teal-dark/95 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.6)] backdrop-blur-md supports-[backdrop-filter]:bg-teal-dark/85'
          : 'border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-nav items-center justify-between gap-6">
        <Link to="/" aria-label={`${SITE.name} — Home`} className="shrink-0 rounded-lg">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-3">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <NavDropdown key={item.label} item={item} active={pathname.startsWith(item.to)} />
              ) : (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      cn(
                        'group relative inline-flex min-h-11 items-center px-3 text-[0.92rem] font-semibold transition-colors duration-300',
                        isActive ? 'text-white' : 'text-white/80 hover:text-white',
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <span
                          aria-hidden="true"
                          className={cn(
                            'absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-gold transition-transform duration-300 ease-premium',
                            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50',
                          )}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to={SUPPORT_LINK.to}
            className="hidden min-h-11 items-center rounded-full bg-gold px-6 text-[0.92rem] font-bold text-teal-deep shadow-[0_8px_24px_-12px_rgba(244,196,48,0.8)] transition-[background-color,transform] duration-300 ease-premium hover:-translate-y-px hover:bg-[#ffd451] sm:inline-flex"
          >
            {SUPPORT_LINK.label}
          </Link>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-haspopup="dialog"
            className="grid size-12 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            <Menu aria-hidden="true" className="size-5" />
          </button>
        </div>
      </Container>
    </header>

    {/* Rendered outside <header>: backdrop-filter would otherwise contain the fixed dialog. */}
    <MobileMenu open={menuOpen} onClose={closeMenu} returnFocusRef={toggleRef} />
    </>
  )
}
