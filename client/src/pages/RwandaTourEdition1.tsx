import { useMemo } from 'react'
import { RWANDA_TOUR_SEO } from '@/content/rwandaTour'
import { SITE } from '@/lib/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { TourHero } from '@/components/sections/rwandaTour/TourHero'
import { TourStory } from '@/components/sections/rwandaTour/TourStory'
import { TourSlideshow } from '@/components/sections/rwandaTour/TourSlideshow'
import { TourWhyItMatters } from '@/components/sections/rwandaTour/TourWhyItMatters'
import { TourCTA } from '@/components/sections/rwandaTour/TourCTA'

export default function RwandaTourEdition1() {
  const jsonLd = useMemo(() => {
    const baseUrl = SITE.url.replace(/\/$/, '')
    const pageUrl = `${baseUrl}${RWANDA_TOUR_SEO.path}`
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
          url: pageUrl,
          name: RWANDA_TOUR_SEO.title,
          description: RWANDA_TOUR_SEO.description,
          inLanguage: 'en',
          isPartOf: { '@id': `${baseUrl}/#website` },
          about: { '@id': `${baseUrl}/#organization` },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: `${baseUrl}${RWANDA_TOUR_SEO.ogImage}`,
            width: 1600,
            height: 1066,
          },
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
              name: 'Projects',
              item: `${baseUrl}/projects`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Birasanzwe Rwanda Tour — Edition 1',
              item: pageUrl,
            },
          ],
        },
      ],
    }
  }, [])

  usePageMeta({
    title: RWANDA_TOUR_SEO.title,
    description: RWANDA_TOUR_SEO.description,
    path: RWANDA_TOUR_SEO.path,
    robots: 'index, follow, max-image-preview:large',
    ogImage: RWANDA_TOUR_SEO.ogImage,
    jsonLd,
  })

  return (
    <>
      <TourHero />
      <TourStory />
      <TourSlideshow />
      <TourWhyItMatters />
      <TourCTA />
    </>
  )
}
