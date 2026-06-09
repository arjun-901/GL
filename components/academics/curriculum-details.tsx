export function CurriculumDetails() {
  return (
    <section className="py-8 md:py-16 px-4 md:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 animate-slideInLeft">Our Curriculum</h2>
        
        <div className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-12 shadow-lg border border-border/50 hover:shadow-xl transition-shadow duration-500 animate-slideInRight">
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
            Our academic structure is designed to ensure clarity, discipline, and consistent progress. We follow a balanced approach that includes classroom learning, regular tests, and concept-based teaching.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            <div className="flex items-start gap-3 p-3 md:p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 transform hover:translate-x-1 animate-fadeIn">
              <span className="w-2 h-2 rounded-full bg-accent mt-1 md:mt-2 shrink-0" />
              <div>
                <p className="font-semibold text-accent text-sm md:text-base">Playway to Class 12</p>
                <p className="text-xs md:text-sm text-muted-foreground">(Hindi & English Medium)</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 md:p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 transform hover:translate-x-1 animate-fadeIn animation-delay-100">
              <span className="w-2 h-2 rounded-full bg-accent mt-1 md:mt-2 shrink-0" />
              <div>
                <p className="font-semibold text-accent text-sm md:text-base">Science and Arts Streams</p>
                <p className="text-xs md:text-sm text-muted-foreground">Specialized paths available</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 md:p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 transform hover:translate-x-1 animate-fadeIn animation-delay-200">
              <span className="w-2 h-2 rounded-full bg-accent mt-1 md:mt-2 shrink-0" />
              <div>
                <p className="font-semibold text-accent text-sm md:text-base">Conceptual Understanding</p>
                <p className="text-xs md:text-sm text-muted-foreground">Core focus of teaching</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 md:p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 transform hover:translate-x-1 animate-fadeIn animation-delay-300">
              <span className="w-2 h-2 rounded-full bg-accent mt-1 md:mt-2 shrink-0" />
              <div>
                <p className="font-semibold text-accent text-sm md:text-base">Regular Class Tests</p>
                <p className="text-xs md:text-sm text-muted-foreground">Frequent assessments</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 md:p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 transform hover:translate-x-1 animate-fadeIn animation-delay-400">
              <span className="w-2 h-2 rounded-full bg-accent mt-1 md:mt-2 shrink-0" />
              <div>
                <p className="font-semibold text-accent text-sm md:text-base">Individual Attention</p>
                <p className="text-xs md:text-sm text-muted-foreground">Every student matters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
