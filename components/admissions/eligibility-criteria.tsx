import { GraduationCap, Calendar, Shield, Award, ArrowRight } from "lucide-react"

const criteria = [
  {
    icon: GraduationCap,
    title: "Academic Requirements",
    items: [
      "Minimum 75% aggregate in the previous qualifying examination.",
      "Proficiency in English and core subjects related to the chosen stream.",
    ],
    note: "Applies to Science, Commerce, and Arts streams.",
    highlight: false,
  },
  {
    icon: Calendar,
    title: "Age Guidelines",
    items: [
      "Applicants must meet the age requirements as specified by the state education board for their respective grade entry as of April 1st.",
    ],
    link: { label: "Detailed Chart", href: "/age-guidelines" },
    highlight: true,
  },
]

const additionalCriteria = [
  {
    icon: Shield,
    title: "Conduct Record",
    description: "A clear record of behavior and a character certificate from the previous institution are mandatory for all transfer students.",
  },
  {
    icon: Award,
    title: "Special Considerations",
    description: "We value diversity. Candidates with exceptional achievements in sports, arts, or community service may be eligible for preference and scholarships.",
  },
]

export function EligibilityCriteria() {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-bold mb-4">Eligibility Criteria</h2>
          <p className="text-muted-foreground">
            We seek curious minds with a strong academic foundation and a drive for holistic growth.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {criteria.map((item, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
                item.highlight 
                  ? "bg-accent text-foreground" 
                  : "bg-card border border-border/50"
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                item.highlight ? "bg-foreground/10" : "bg-muted"
              }`}>
                <item.icon className="w-6 h-6" />
              </div>
              
              <h3 className="font-semibold text-xl mb-4">{item.title}</h3>
              
              <ul className="space-y-2 mb-4">
                {item.items.map((text, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                      item.highlight ? "bg-foreground" : "bg-accent"
                    }`}></span>
                    {text}
                  </li>
                ))}
              </ul>
              
              {item.note && (
                <p className="text-xs text-muted-foreground">{item.note}</p>
              )}
              
              {item.link && (
                <a 
                  href={item.link.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300"
                >
                  {item.link.label}
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {additionalCriteria.map((item, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-border/50 flex gap-4"
            >
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-foreground/70" />
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
