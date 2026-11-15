import { useMemo } from 'react'
import { SUPPORT_SEO } from '@/content/support'
import { SITE } from '@/lib/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { SupportHero } from '@/components/sections/support/SupportHero'
import { SupportOptionsSection } from '@/components/sections/support/SupportOptionsSection'
import { SupportWhatsAppCTA } from '@/components/sections/support/SupportWhatsAppCTA'

export default function SupportUs() {
  const jsonLd = useMemo(() => {
    const baseUrl = SITE.url.replace(/\/$/, '')
    const pageUrl = `${baseUrl}${SUPPORT_SEO.path}`
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
          url: pageUrl,
          name: SUPPORT_SEO.title,
          description: SUPPORT_SEO.description,
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
              name: 'Support Us',
              item: pageUrl,
            },
          ],
        },
      ],
    }
  }, [])

  usePageMeta({
    title: SUPPORT_SEO.title,
    description: SUPPORT_SEO.description,
    path: SUPPORT_SEO.path,
    robots: 'index, follow, max-image-preview:large',
    ogImage: SUPPORT_SEO.ogImage,
    jsonLd,
  })

  return (
    <>
      <SupportHero />
      <SupportOptionsSection />
      <SupportWhatsAppCTA />
    </>
  )
}
