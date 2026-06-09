import { Button } from "@/components/ui/button"
import Image from "next/image"

export function PrincipalSection() {
  return (
    <section className="py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Principal Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/"
                  alt="Mr. Jay Prakash Verma - Principal of CBS Inter College"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative Border */}
              <div className="absolute -inset-3 md:-inset-4 border-2 border-accent/30 rounded-2xl -z-10" />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Principal&apos;s Office
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold">Mr. Jay Prakash Verma</h2>
            </div>
            
            <blockquote className="border-l-4 border-accent pl-4 md:pl-6 py-2 text-left">
              <p className="font-serif italic text-base md:text-lg text-foreground/80 leading-relaxed">
                &ldquo;Education is not the filling of a bucket, but the lighting of a fire. At CBS Inter College, we ignite the latent potential within every student.&rdquo;
              </p>
            </blockquote>
            
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Our vision is to provide a holistic ecosystem that transcends textbooks. We are dedicated to building character, resilience, and a deep sense of responsibility toward the community.
            </p>
            
          
          </div>
        </div>
      </div>
    </section>
  )
}
