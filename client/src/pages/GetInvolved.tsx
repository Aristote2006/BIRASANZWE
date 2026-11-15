import { useMemo } from 'react'
import { GET_INVOLVED_SEO } from '@/content/getInvolved'
import { SITE } from '@/lib/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { GetInvolvedHero } from '@/components/sections/getInvolved/GetInvolvedHero'
import { WaysToGetInvolvedSection } from '@/components/sections/getInvolved/WaysToGetInvolvedSection'
import { JoinMovementCTA } from '@/components/sections/getInvolved/JoinMovementCTA'

export default function GetInvolved() {
  const jsonLd = useMemo(() => {
    const baseUrl = SITE.url.replace(/\/$/, '')
    const pageUrl = `${baseUrl}${GET_INVOLVED_SEO.path}`
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
          url: pageUrl,
          name: GET_INVOLVED_SEO.title,
          description: GET_INVOLVED_SEO.description,
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
              name: 'Get Involved',
              item: pageUrl,
            },
          ],
        },
      ],
    }
  }, [])

  usePageMeta({
    title: GET_INVOLVED_SEO.title,
    description: GET_INVOLVED_SEO.description,
    path: GET_INVOLVED_SEO.path,
    robots: 'index, follow, max-image-preview:large',
    ogImage: GET_INVOLVED_SEO.ogImage,
    jsonLd,
  })

  return (
    <>
      <GetInvolvedHero />
      <WaysToGetInvolvedSection />
      <JoinMovementCTA />
    </>
  )
}
