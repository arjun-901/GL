import { PageLayout } from "@/components/page-layout"
import { AdmissionsHero } from "@/components/admissions/admissions-hero"
import { AdmissionEnquiryForm } from "@/components/admissions/admission-enquiry-form"
import { AdmissionJourney } from "@/components/admissions/admission-journey"
import { EligibilityCriteria } from "@/components/admissions/eligibility-criteria"
import { ResourcesDownloads } from "@/components/admissions/resources-downloads"

export default function AdmissionsPage() {
  return (
    <PageLayout>
      <AdmissionsHero />
      <AdmissionEnquiryForm />
      <AdmissionJourney />
      <EligibilityCriteria />
      {/* <ResourcesDownloads /> */}
    </PageLayout>
  )
}
