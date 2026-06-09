import { Beaker, Computer, BookOpen, Monitor, Shield, Camera } from "lucide-react"

const facilities = [
  {
    icon: Beaker,
    title: "Science Laboratory",
    description: "Physics, Chemistry, and Biology"
  },
  {
    icon: Computer,
    title: "Computer Lab",
    description: "Modern computing and programming"
  },
  {
    icon: BookOpen,
    title: "Library",
    description: "Extensive academic resources"
  },
  {
    icon: Monitor,
    title: "Smart Classrooms",
    description: "Modern teaching aids and technology"
  },
  {
    icon: Shield,
    title: "Safe Campus",
    description: "Disciplined and secure environment"
  },
  {
    icon: Camera,
    title: "CCTV Surveillance",
    description: "24/7 security coverage"
  }
]

export function AcademicFacilities() {
  return (
    <section className="py-8 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-12 animate-slideInLeft">Academic Facilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {facilities.map((facility, index) => {
            const Icon = facility.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg md:rounded-xl lg:rounded-2xl p-4 md:p-6 lg:p-8 border border-primary/10 hover:border-accent/30 transition-all duration-300 group transform hover:scale-105 animate-fadeIn"
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <div className="w-10 md:w-12 lg:w-14 h-10 md:h-12 lg:h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 md:w-6 lg:w-7 h-5 md:h-6 lg:h-7 text-primary" />
                </div>
                
                <h3 className="font-semibold text-base md:text-lg">{facility.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm mt-1 md:mt-2">{facility.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

