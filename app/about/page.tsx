import { PageLayout } from "@/components/page-layout"
import { AboutHero } from "@/components/about/about-hero"
import { LegacySection } from "@/components/about/legacy-section"
import { LeadershipSection } from "@/components/about/leadership-section"
import { PhilosophicalCore } from "@/components/about/philosophical-core"

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutHero />
      <LegacySection />
      <LeadershipSection />
      <PhilosophicalCore />
    </PageLayout>
  )
}
