import { Eye, Sparkles, BookOpenCheck } from "lucide-react"

export function PhilosophicalCore() {
  return (
    <section className="py-10 md:py-16 lg:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">Our Values</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Philosophical Core
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 md:gap-10 xl:gap-12">
          {/* Vision Card */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
            
            <div className="w-14 h-14 bg-background shadow-md rounded-2xl flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-transform duration-500">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors">Our Vision</h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              To be a globally recognized center of academic distinction that nurtures inquisitive minds, fosters creative expression, and cultivates ethical leaders prepared for the complexities of the 21st century.
            </p>
          </div>
          
          {/* Mission Card */}
          <div className="bg-primary text-primary-foreground rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group relative overflow-hidden lg:-translate-y-4">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
            
            <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-transform duration-500 border border-white/10">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-4 text-white">Our Mission</h3>
            
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              To provide a rigorous yet inclusive educational environment where traditional values meet modern innovation, empowering every student to achieve their full potential through personalized mentorship.
            </p>
          </div>
          
          {/* Principal's Desk */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
            
            <div className="w-14 h-14 bg-background shadow-md rounded-2xl flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-transform duration-500">
              <BookOpenCheck className="w-7 h-7 text-accent" />
            </div>
            
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Principal&apos;s Desk
            </p>
            
            <p className="font-serif italic text-foreground text-xl md:text-2xl leading-relaxed">
              &ldquo;Education is not the filling of a pail, but the lighting of a fire.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
