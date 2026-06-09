const milestones = [
  {
    year: "20XX",
    title: "The Foundation Stone",
    description: "Gurukul Academy was officially inaugurated, beginning its journey with a single wing and a dream of academic liberation.",
    side: "right",
  },
  {
    year: "20XX",
    title: "Scientific Expansion",
    description: "Inauguration of the state-of-the-art Science Laboratories, marking our shift towards advanced technological education.",
    side: "left",
  },
  {
    year: "20XX",
    title: "Regional Excellence Award",
    description: "Honored as the 'Best Secondary Institution' for maintaining a 100% success rate for ten consecutive years.",
    side: "right",
  },
]

export function Milestones() {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-8 bg-accent"></div>
          <h2 className="font-serif text-3xl font-bold">Milestones of Excellence</h2>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex items-center gap-8 ${
                  milestone.side === "left" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${milestone.side === "left" ? "md:text-right" : ""}`}>
                  <p className="text-4xl font-serif text-muted-foreground/50 mb-2">{milestone.year}</p>
                  <h3 className="font-semibold text-xl text-primary mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
                
                {/* Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-md"></div>
                
                {/* Empty space for other side */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
