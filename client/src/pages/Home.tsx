import { HeroSection } from '@/components/sections/HeroSection'
import { LeaderMessage } from '@/components/sections/LeaderMessage'
import { FeaturedProject } from '@/components/sections/FeaturedProject'
import { ImpactPreview } from '@/components/sections/ImpactPreview'
import { PartnersMarquee } from '@/components/sections/PartnersMarquee'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function Home() {
  usePageMeta({
    title: 'Birasanzwe Initiative | Disability Is Not Inability',
    description:
      'Birasanzwe Initiative promotes inclusion, talent, dignity, and opportunities for people with disabilities in Rwanda. Every talent deserves a platform.',
    path: '/',
    robots: 'index, follow, max-image-preview:large',
  })

  return (
    <>
      <HeroSection />
      <LeaderMessage />
      <FeaturedProject />
      <ImpactPreview />
      <PartnersMarquee />
      <FAQAccordion />
      <ContactCTA />
    </>
  )
}
