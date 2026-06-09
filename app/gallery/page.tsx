import { PageLayout } from "@/components/page-layout"
import { GalleryHero } from "@/components/gallery/gallery-hero"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { UpcomingExhibition } from "@/components/gallery/upcoming-exhibition"

export default function GalleryPage() {
  return (
    <PageLayout>
      <GalleryHero />
      <GalleryGrid />
      {/* <UpcomingExhibition /> */}
    </PageLayout>
  )
}
