import { PageLayout } from "@/components/page-layout"
import { AcademicExcellenceHero } from "@/components/academics/academic-excellence-hero"
import { CurriculumDetails } from "@/components/academics/curriculum-details"
import { KeyAcademicFeatures } from "@/components/academics/key-academic-features"
import { TeachingApproach } from "@/components/academics/teaching-approach"
import { AcademicFacilities } from "@/components/academics/academic-facilities"
import { AssessmentSystem } from "@/components/academics/assessment-system"
import { AcademicClosing } from "@/components/academics/academic-closing"
import { CurriculumFramework } from "@/components/academics/curriculum-framework"
import { SeniorSecondary } from "@/components/academics/senior-secondary"
import { FacultyResearch } from "@/components/academics/faculty-research"
import { AcademicsDownloads } from "@/components/academics/academics-downloads"

export default function AcademicsPage() {
  return (
    <PageLayout>
      <AcademicExcellenceHero />
      <CurriculumDetails />
      <KeyAcademicFeatures />
      <TeachingApproach />
      <AcademicFacilities />
      <AssessmentSystem />
      <AcademicClosing />
      {/* <CurriculumFramework /> */}
      {/* <SeniorSecondary /> */}
      <FacultyResearch />
      {/* <AcademicsDownloads /> */}
    </PageLayout>
  )
}
