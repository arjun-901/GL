import { Users, BookOpen, Beaker, Clock, Eye, BookMarked } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Limited Class Size",
    description: "30–40 students per class for better attention"
  },
  {
    icon: BookOpen,
    title: "Experienced Faculty",
    description: "Qualified teaching staff with proven expertise"
  },
  {
    icon: Beaker,
    title: "Science Laboratories",
    description: "Well-equipped facilities for practical learning"
  },
  {
    icon: BookMarked,
    title: "Homework & Revision",
    description: "Regular system for reinforcement"
  },
  {
    icon: Clock,
    title: "Performance Tracking",
    description: "Monthly tests and progress monitoring"
  },
  {
    icon: Eye,
    title: "Academic Excellence",
    description: "Focus on discipline and achievement"
  }
]

export function KeyAcademicFeatures() {
  return (
    <section className="py-8 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-12 animate-slideInLeft">Key Academic Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-card rounded-lg md:rounded-xl lg:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-border/50 group hover:-translate-y-1 animate-fadeIn"
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <div className="w-10 md:w-12 h-10 md:h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 md:w-6 h-5 md:h-6 text-accent" />
                </div>
                
                <h3 className="font-semibold text-base md:text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
        
        {/* Additional Features */}
        <div className="mt-8 md:mt-12 bg-muted/50 rounded-lg md:rounded-2xl p-5 md:p-8 lg:p-10 hover:bg-muted/70 transition-all duration-300 animate-slideInUp">
          <p className="text-muted-foreground text-sm md:text-base mb-3 md:mb-4 font-semibold">Additional offerings include:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="flex items-center gap-3 p-2 rounded hover:bg-background/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
              <p className="text-xs md:text-sm">Guidance for competitive exams (NEET, IIT basics)</p>
            </div>
            <div className="flex items-center gap-3 p-2 rounded hover:bg-background/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
              <p className="text-xs md:text-sm">Computer and digital learning support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
