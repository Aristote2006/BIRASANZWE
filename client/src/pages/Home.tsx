import { HeroSection } from '@/components/sections/HeroSection'
import { LeaderMessage } from '@/components/sections/LeaderMessage'
import { ImpactPreview } from '@/components/sections/ImpactPreview'
import { PartnersMarquee } from '@/components/sections/PartnersMarquee'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function Home() {
  usePageMeta({
    title: 'Birasanzwe Initiative | Aspire to Include',
    description:
      'Birasanzwe Initiative promotes inclusion, talent, dignity, and opportunities for people with disabilities, people with chronic diseases, and vulnerable communities in Rwanda.',
    path: '/',
    robots: 'index, follow, max-image-preview:large',
  })

  return (
    <>
      <HeroSection />
      <LeaderMessage />
      <ImpactPreview />
      <PartnersMarquee />
      <FAQAccordion />
      <ContactCTA />
    </>
  )
}
