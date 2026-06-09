import { PageLayout } from "@/components/page-layout"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactSection } from "@/components/contact/contact-section"
import { LocationMap } from "@/components/contact/location-map"
import { JoinCommunity } from "@/components/contact/join-community"

export default function ContactPage() {
  return (
    <PageLayout showSidebar={false}>
      <ContactHero />
      <ContactSection />
      <LocationMap />
      <JoinCommunity />
    </PageLayout>
  )
}
