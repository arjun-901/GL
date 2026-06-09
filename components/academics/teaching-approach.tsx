import { Lightbulb, Users, RefreshCw, Zap, TrendingUp } from "lucide-react"

const approaches = [
  {
    icon: Lightbulb,
    title: "Concept-based Teaching",
    description: "Focus on deep understanding rather than rote learning"
  },
  {
    icon: Users,
    title: "Doubt-Clearing Sessions",
    description: "Dedicated time for individual student queries"
  },
  {
    icon: RefreshCw,
    title: "Regular Revision Classes",
    description: "Systematic reinforcement of concepts"
  },
  {
    icon: Zap,
    title: "Practical & Activity-Based Learning",
    description: "Experiential education through hands-on activities"
  },
  {
    icon: TrendingUp,
    title: "Continuous Performance Monitoring",
    description: "Real-time tracking of student progress"
  }
]

export function TeachingApproach() {
  return (
    <section className="py-8 md:py-16 px-4 md:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* Left Content */}
          <div className="animate-slideInLeft">
            <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6">Our Teaching Approach</h2>
            
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
              We focus on a student-centered learning method that encourages understanding, discipline, and active participation. Our teachers ensure that every student is guided properly according to their learning pace.
            </p>
          </div>
          
          {/* Right Cards */}
          <div className="space-y-2 md:space-y-4">
            {approaches.map((approach, index) => {
              const Icon = approach.icon
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-card rounded-lg md:rounded-xl hover:shadow-lg transition-all duration-300 group transform hover:translate-x-1 animate-slideInRight"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className="w-8 md:w-10 h-8 md:h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 md:w-5 h-4 md:h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base mb-1">{approach.title}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">{approach.description}</p>
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
