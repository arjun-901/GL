const journeySteps = [
  {
    number: "01",
    title: "Inquiry & Registration",
    description: "Express your interest through our online portal or at the administrative office to receive your unique application ID.",
  },
  {
    number: "02",
    title: "Form Submission",
    description: "Complete the detailed application form and upload necessary academic transcripts, identity proofs, and recent passport-sized photographs.",
  },
  {
    number: "03",
    title: "Aptitude Assessment",
    description: "Prospective students will undergo a comprehensive test assessing core subjects, logical reasoning, and linguistic proficiency.",
  },
  {
    number: "04",
    title: "Personal Interview",
    description: "A final interaction with the Principal and academic council to understand the student's aspirations and alignment with college values.",
  },
]

export function AdmissionJourney() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">
          Admission Journey
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>
          
          <div className="space-y-8">
            {journeySteps.map((step, index) => (
              <div 
                key={index}
                className="relative flex gap-8 items-start group"
              >
                {/* Step Number */}
                <div className="hidden md:flex w-16 h-16 shrink-0 bg-card rounded-full border-2 border-border items-center justify-center shadow-md group-hover:border-accent group-hover:shadow-lg transition-all duration-300 z-10">
                  <span className="text-sm font-bold text-muted-foreground group-hover:text-accent transition-colors">
                    {step.number}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-border/50 group-hover:-translate-y-1">
                  <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
