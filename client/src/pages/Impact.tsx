import { useMemo } from 'react'
import { IMPACT_SEO } from '@/content/impact'
import { SITE } from '@/lib/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { ImpactHero } from '@/components/sections/impact/ImpactHero'
import { ImpactStatsSection } from '@/components/sections/impact/ImpactStatsSection'
import { ImpactMessage } from '@/components/sections/impact/ImpactMessage'
import { ImpactCTA } from '@/components/sections/impact/ImpactCTA'

export default function Impact() {
  const jsonLd = useMemo(() => {
    const baseUrl = SITE.url.replace(/\/$/, '')
    const pageUrl = `${baseUrl}${IMPACT_SEO.path}`
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
          url: pageUrl,
          name: IMPACT_SEO.title,
          description: IMPACT_SEO.description,
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
              name: 'Our Impact',
              item: pageUrl,
            },
          ],
        },
      ],
    }
  }, [])

  usePageMeta({
    title: IMPACT_SEO.title,
    description: IMPACT_SEO.description,
    path: IMPACT_SEO.path,
    robots: 'index, follow, max-image-preview:large',
    ogImage: IMPACT_SEO.ogImage,
    jsonLd,
  })

  return (
    <>
      <ImpactHero />
      <ImpactStatsSection />
      <ImpactMessage />
      <ImpactCTA />
    </>
  )
}
