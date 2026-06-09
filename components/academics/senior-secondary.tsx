import { FlaskConical, Briefcase, Palette } from "lucide-react"

const streams = [
  {
    icon: FlaskConical,
    title: "Science",
    description: "MPC & BiPC branches with state-of-the-art lab access.",
  },
  {
    icon: Briefcase,
    title: "Commerce",
    description: "Economics, Accountancy, and Business Studies.",
  },
  {
    icon: Palette,
    title: "Humanities",
    description: "Sociology, Political Science, and Advanced Arts.",
  },
]

export function SeniorSecondary() {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Header */}
          <div className="lg:col-span-1">
            <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center mb-4 shadow-md">
              <FlaskConical className="w-6 h-6 text-accent" />
            </div>
            
            <h2 className="font-serif text-2xl font-bold mb-4">
              Senior Secondary
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Specialized streams catering to career aspirations in Science, Commerce, and Humanities.
            </p>
          </div>
          
          {/* Stream Cards */}
          {streams.map((stream, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-border/50 group hover:-translate-y-1"
            >
              <h3 className="font-semibold text-primary mb-2">{stream.title}</h3>
              <p className="text-sm text-muted-foreground">{stream.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
