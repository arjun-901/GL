import { PageLayout } from "@/components/page-layout"
import { HeroSection } from "@/components/home/hero-section"
import { AnnouncementBar } from "@/components/home/announcement-bar"
import { InstitutionalHighlights } from "@/components/home/institutional-highlights"
import { QuickLinks } from "@/components/home/quick-links"
import { StudentAchievements } from "@/components/home/student-achievements"
import { Testimonials } from "@/components/home/testimonials"

export default function HomePage() {
  return (
    <PageLayout>
      <AnnouncementBar />
      <HeroSection />
      <InstitutionalHighlights />
      <QuickLinks />
      <StudentAchievements />
      <Testimonials />
    </PageLayout>
  )
}
