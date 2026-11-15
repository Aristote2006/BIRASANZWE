import { Link } from 'react-router'
import { Mail, MapPin, Phone } from 'lucide-react'
import { NAV_ITEMS, SITE, SUPPORT_LINK } from '@/lib/site'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { SmartLink } from '@/components/ui/SmartLink'
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon, YouTubeIcon } from '@/components/ui/SocialIcons'

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Impact', to: '/impact' },
  { label: 'FAQ', to: '/#faq' },
]

const INVOLVED_LINKS = [
  ...(NAV_ITEMS.find((i) => i.label === 'Get Involved')?.children ?? []).map(({ label, to }) => ({ label, to })),
  { label: SUPPORT_LINK.label, to: SUPPORT_LINK.to },
]

/** TODO(content): add official profile URLs; empty href = placeholder (rendered as non-link). */
const SOCIALS = [
  { label: 'Facebook', href: '', Icon: FacebookIcon },
  { label: 'Instagram', href: '', Icon: InstagramIcon },
  { label: 'X (Twitter)', href: '', Icon: XIcon },
  { label: 'YouTube', href: '', Icon: YouTubeIcon },
  { label: 'LinkedIn', href: '', Icon: LinkedInIcon },
]

function FooterHeading({ children, id }: { children: string; id?: string }) {
  return (
    <h2 id={id} className="eyebrow flex items-center gap-3 text-gold">
      {children}
    </h2>
  )
}

const linkClass =
  'group inline-flex min-h-9 items-center gap-2 text-[0.95rem] text-on-dark-muted transition-colors duration-300 hover:text-white'

function FooterLink({ to, label }: { to: string; label: string }) {
  return (
    <SmartLink to={to} className={linkClass}>
      <span aria-hidden="true" className="h-px w-0 bg-gold transition-[width] duration-300 ease-premium group-hover:w-3" />
      {label}
    </SmartLink>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-teal-dark text-white">
      <div aria-hidden="true" className="h-px bg-[linear-gradient(90deg,transparent,#F4C430_20%,#F4C430_80%,transparent)] opacity-70" />

      <Container className="grid gap-10 py-11 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-14">
        <div className="sm:col-span-2 lg:col-span-4">
          <Link to="/" aria-label={`${SITE.name} — Home`} className="inline-block rounded-lg">
            <Logo imgClassName="h-14 sm:h-16" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-on-dark-muted">{SITE.mission}</p>
          <p className="mt-4 font-quote text-lg text-white italic">“{SITE.slogan.replace(/^./, (c) => c.toUpperCase())}”</p>
        </div>

        <nav aria-labelledby="footer-quick" className="lg:col-span-2 lg:col-start-6">
          <FooterHeading id="footer-quick">Quick Links</FooterHeading>
          <ul className="mt-4 space-y-0.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <FooterLink {...l} />
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-involved" className="lg:col-span-2">
          <FooterHeading id="footer-involved">Get Involved</FooterHeading>
          <ul className="mt-4 space-y-0.5">
            {INVOLVED_LINKS.map((l) => (
              <li key={l.label}>
                <FooterLink {...l} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="sm:col-span-2 lg:col-span-3">
          <FooterHeading>Contact</FooterHeading>
          {/* TODO(content): replace with official contact details. */}
          <ul className="mt-4 space-y-2.5 text-sm text-on-dark-muted">
            <li className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" />
              {SITE.address}
            </li>
            <li className="flex items-start gap-3">
              <Mail aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" />
              {SITE.email ? (
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-white">
                  {SITE.email}
                </a>
              ) : (
                <span>{SITE.emailFallbackLabel}</span>
              )}
            </li>
            <li className="flex items-start gap-3">
              <Phone aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" />
              <a
                href={`https://wa.me/${SITE.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {SITE.phoneDisplay}
              </a>
            </li>
          </ul>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Social media (coming soon)">
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (opens in a new tab)`}
                    className="grid size-11 place-items-center rounded-full border border-white/20 text-white/80 transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-teal-deep"
                  >
                    <Icon className="size-4" />
                  </a>
                ) : (
                  <span
                    title={`${label} — coming soon`}
                    className="grid size-11 place-items-center rounded-full border border-white/15 text-white/60"
                  >
                    <Icon className="size-4" />
                    <span className="sr-only">{label} — coming soon</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-gold/20">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-sm text-on-dark-muted sm:flex-row">
          <p>© {year} Birasanzwe Initiative. All rights reserved.</p>

          <a
            href="https://aristote.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-satisfy inline-block text-sm tracking-wide text-on-dark-muted/85 transition-colors duration-300 hover:text-gold"
          >
            Developed by Aristote
          </a>

          <ul className="flex items-center gap-6">
            <li>
              <Link to="/privacy-policy" className="inline-flex min-h-9 items-center transition-colors hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li aria-hidden="true" className="size-1 rounded-full bg-gold/70" />
            <li>
              <Link to="/terms-of-use" className="inline-flex min-h-9 items-center transition-colors hover:text-white">
                Terms of Use
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  )
}
