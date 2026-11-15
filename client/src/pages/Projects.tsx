import { useMemo } from 'react'
import { PROJECTS_LIST, PROJECTS_SEO } from '@/content/projects'
import { SITE } from '@/lib/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { ProjectsHero } from '@/components/sections/projects/ProjectsHero'
import { FeaturedProjectShowcase } from '@/components/sections/projects/FeaturedProjectShowcase'
import { ProjectsOverviewGrid } from '@/components/sections/projects/ProjectsOverviewGrid'
import { ProjectsPhilosophy } from '@/components/sections/projects/ProjectsPhilosophy'
import { ProjectsCTA } from '@/components/sections/projects/ProjectsCTA'

export default function Projects() {
  const jsonLd = useMemo(() => {
    const baseUrl = SITE.url.replace(/\/$/, '')
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          '@id': `${baseUrl}/projects#webpage`,
          url: `${baseUrl}/projects`,
          name: PROJECTS_SEO.title,
          description: PROJECTS_SEO.description,
          inLanguage: 'en',
          isPartOf: { '@id': `${baseUrl}/#website` },
          about: { '@id': `${baseUrl}/#organization` },
          breadcrumb: { '@id': `${baseUrl}/projects#breadcrumb` },
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: PROJECTS_LIST.map((project, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: `${project.title}${project.edition ? ` — ${project.edition}` : ''}`,
              description: project.description,
              url: `${baseUrl}${project.to}`,
            })),
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${baseUrl}/projects#breadcrumb`,
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
          ],
        },
      ],
    }
  }, [])

  usePageMeta({
    title: PROJECTS_SEO.title,
    description: PROJECTS_SEO.description,
    path: PROJECTS_SEO.path,
    robots: 'index, follow, max-image-preview:large',
    ogImage: PROJECTS_SEO.ogImage,
    jsonLd,
  })

  return (
    <>
      <ProjectsHero />
      <FeaturedProjectShowcase />
      <ProjectsOverviewGrid />
      <ProjectsPhilosophy />
      <ProjectsCTA />
    </>
  )
}
