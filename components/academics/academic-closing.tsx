export function AcademicClosing() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-16 border border-primary/20 text-center animate-scaleIn hover:shadow-lg transition-all duration-500">
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight animate-slideUp">
            Building Strong Foundations for the Future
          </h2>
          
          <p className="text-xs md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-slideUp animation-delay-200">
            At Gurukul Academy, our academic system is focused on building a strong foundation of knowledge, discipline, and confidence, preparing students for higher education and future challenges.
          </p>
          
          <div className="mt-6 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 animate-slideUp animation-delay-400">
            <a 
              href="/admissions" 
              className="w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
            >
              Start Your Journey
            </a>
            <a 
              href="/contact" 
              className="w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
