import { BarChart3, ClipboardList, TrendingUp, MessageSquare } from "lucide-react"

const assessments = [
  {
    icon: ClipboardList,
    title: "Weekly & Monthly Tests",
    description: "Frequent evaluations to monitor learning progress"
  },
  {
    icon: BarChart3,
    title: "Pre-Board Examinations",
    description: "Practice exams to prepare for board assessments"
  },
  {
    icon: TrendingUp,
    title: "Performance Reports",
    description: "Detailed feedback on student progress and growth"
  },
  {
    icon: MessageSquare,
    title: "Parent-Teacher Interaction",
    description: "Regular communication and collaborative feedback"
  }
]

export function AssessmentSystem() {
  return (
    <section className="py-8 md:py-16 px-4 md:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Header */}
          <div className="lg:col-span-1 animate-slideInLeft">
            <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Assessment & Evaluation</h2>
            
            <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
              We conduct regular assessments to track student progress and improve performance. Our evaluation system ensures that students stay consistent in their studies.
            </p>
          </div>
          
          {/* Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {assessments.map((assessment, index) => {
              const Icon = assessment.icon
              return (
                <div
                  key={index}
                  className="bg-card rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-border/50 group hover:-translate-y-1 animate-slideInRight"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-8 md:w-10 h-8 md:h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 md:w-5 h-4 md:h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm md:text-base mb-1">{assessment.title}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">{assessment.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
