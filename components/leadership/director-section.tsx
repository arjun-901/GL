import Image from "next/image"

export function DirectorSection() {
  return (
    <section className="py-10 md:py-16 px-4 md:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content - Left Side */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1 text-center lg:text-left">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Director&apos;s Message
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold">Mr. Sandeep Singh</h2>
            </div>
            
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              The core of institutional longevity lies in its ability to adapt without losing its soul. As the Director of CBS, my focus is on integrating global standards of technology and infrastructure while preserving our cultural identity.
            </p>
            
            <blockquote className="border-l-4 border-accent pl-4 md:pl-6 py-2 bg-card rounded-r-lg text-left">
              <p className="font-serif italic text-sm md:text-base text-foreground/80">
                &ldquo;Every child is a unique artisan of their own destiny; our role is to provide the finest tools and the most inspiring studio.&rdquo;
              </p>
            </blockquote>
            
            {/* Stats */}
            <div className="flex items-center gap-8 md:gap-12 pt-2 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-bold text-primary">20+</p>
                <p className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground">Years of Legacy</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-bold text-primary">5k+</p>
                <p className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground">Students Graduated</p>
              </div>
            </div>
          </div>
          
          {/* Director Image - Right Side */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://res.cloudinary.com/dsxldaodx/image/upload/v1775572886/Confident_portrait_of_a_professional_man_cinciw.png"
                  alt="Mr. Sandeep Singh"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
