import { useMemo } from 'react'
import { CONTACT_SEO } from '@/content/contact'
import { SITE } from '@/lib/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { ContactHero } from '@/components/sections/contact/ContactHero'
import { ContactInfoSection } from '@/components/sections/contact/ContactInfoSection'
import { ContactMapSection } from '@/components/sections/contact/ContactMapSection'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function Contact() {
  const jsonLd = useMemo(() => {
    const baseUrl = SITE.url.replace(/\/$/, '')
    const pageUrl = `${baseUrl}${CONTACT_SEO.path}`
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ContactPage',
          '@id': `${pageUrl}#webpage`,
          url: pageUrl,
          name: CONTACT_SEO.title,
          description: CONTACT_SEO.description,
          inLanguage: 'en',
          isPartOf: { '@id': `${baseUrl}/#website` },
          about: { '@id': `${baseUrl}/#organization` },
          breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${pageUrl}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${baseUrl}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Contact Us',
              item: pageUrl,
            },
          ],
        },
      ],
    }
  }, [])

  usePageMeta({
    title: CONTACT_SEO.title,
    description: CONTACT_SEO.description,
    path: CONTACT_SEO.path,
    robots: 'index, follow, max-image-preview:large',
    ogImage: CONTACT_SEO.ogImage,
    jsonLd,
  })

  return (
    <>
      <ContactHero />
      <ContactInfoSection />
      <ContactMapSection />
      <ContactCTA />
    </>
  )
}
