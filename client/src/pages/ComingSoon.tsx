import { useLocation } from 'react-router'
import { Container } from '@/components/ui/Container'
import { PrimaryButton, SecondaryButton } from '@/components/ui/Button'
import { usePageMeta } from '@/hooks/usePageMeta'

/**
 * Temporary placeholder for routes that will be developed in later stages
 * (About, Projects, Impact, Get Involved, Support Us, legal pages).
 * Marked noindex so search engines never index unfinished pages.
 */
export default function ComingSoon() {
  const { pathname } = useLocation()
  const name = pathname
    .split('/')
    .filter(Boolean)
    .pop()
    ?.replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())

  usePageMeta({ title: `${name ?? 'Page'} — Coming Soon | Birasanzwe Initiative`, robots: 'noindex, follow' })

  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-teal-deep pt-nav text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_80%_20%,rgba(15,118,110,0.6),transparent_70%)]"
      />
      <Container className="py-24">
        <p className="eyebrow flex items-center gap-3 text-gold">
          <span aria-hidden="true" className="h-px w-10 bg-gold" />
          Coming soon
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-h2 font-normal">
          {name ?? 'This page'} is being carefully prepared.
        </h1>
        <p className="mt-6 max-w-xl text-lead text-on-dark-muted">
          We are building this part of the Birasanzwe Initiative website. In the meantime, explore our homepage or get
          in touch with us.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <PrimaryButton to="/">Back to Home</PrimaryButton>
          <SecondaryButton to="/#contact" withArrow={false}>
            Contact Us
          </SecondaryButton>
        </div>
      </Container>
    </section>
  )
}
