import Image from "next/image"
import { ShieldCheck, BookOpen, Users } from "lucide-react"

export function LegacySection() {
  return (
    <section className="py-10 md:py-16 lg:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Side with Decorative Elements */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50 group">
              <Image 
                src="https://res.cloudinary.com/dsxldaodx/image/upload/v1780994126/ChatGPT_Image_Jun_9_2026_02_04_20_PM_jlowji.png" 
                alt="Gurukul Academy Campus"
                width={800}
                height={600}
                className="w-full h-64 md:h-96 lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/20 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary p-3 rounded-xl">
                      <ShieldCheck className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold">20+</p>
                      <p className="text-sm uppercase tracking-widest opacity-90">Years of Legacy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">Our History</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                A Legacy of <br className="hidden lg:block" />
                <span className="italic font-light text-primary">Learning</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Established with the vision of delivering quality education, <strong className="text-foreground font-semibold">Gurukul Academy</strong> has been nurturing young minds with discipline, values, and academic excellence since its inception.
              </p>
              <p>
                Our institution continues to grow as a trusted center of learning and student development, integrating modern pedagogy with deep-rooted cultural values to shape the leaders of tomorrow.
              </p>
            </div>
            
            {/* Quick Stats/Features */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border/50">
              <div className="flex gap-4 items-start">
                <div className="mt-1 p-2 bg-accent/10 rounded-lg text-accent">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Quality Education</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive and modern curriculum.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 p-2 bg-primary/10 rounded-lg text-primary">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Expert Faculty</h4>
                  <p className="text-sm text-muted-foreground">Dedicated and highly experienced educators.</p>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  )
}
