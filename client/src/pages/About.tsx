import { useMemo } from 'react'
import { ABOUT_SEO } from '@/content/about'
import { SITE } from '@/lib/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { OurStory } from '@/components/sections/about/OurStory'
import { OurMission } from '@/components/sections/about/OurMission'
import { OurVision } from '@/components/sections/about/OurVision'
import { CoreValues } from '@/components/sections/about/CoreValues'
import { OurApproach } from '@/components/sections/about/OurApproach'
import { OurPhilosophy } from '@/components/sections/about/OurPhilosophy'
import { OurFuture } from '@/components/sections/about/OurFuture'
import { AboutCTA } from '@/components/sections/about/AboutCTA'

export default function About() {
  const jsonLd = useMemo(() => {
    const baseUrl = SITE.url.replace(/\/$/, '')
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AboutPage',
          '@id': `${baseUrl}/about#webpage`,
          url: `${baseUrl}/about`,
          name: ABOUT_SEO.title,
          description: ABOUT_SEO.description,
          inLanguage: 'en',
          isPartOf: { '@id': `${baseUrl}/#website` },
          about: { '@id': `${baseUrl}/#organization` },
          breadcrumb: { '@id': `${baseUrl}/about#breadcrumb` },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${baseUrl}/about#breadcrumb`,
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
              name: 'About Us',
              item: `${baseUrl}/about`,
            },
          ],
        },
      ],
    }
  }, [])

  usePageMeta({
    title: ABOUT_SEO.title,
    description: ABOUT_SEO.description,
    path: ABOUT_SEO.path,
    robots: 'index, follow, max-image-preview:large',
    ogImage: ABOUT_SEO.ogImage,
    jsonLd,
  })

  return (
    <>
      <AboutHero />
      <OurStory />
      <OurMission />
      <OurVision />
      <CoreValues />
      <OurApproach />
      <OurPhilosophy />
      <OurFuture />
      <AboutCTA />
    </>
  )
}
