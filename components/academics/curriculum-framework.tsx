import { BookOpen, GraduationCap, Users } from "lucide-react"
import Image from "next/image"

export function CurriculumFramework() {
  return (
    <section className="py-10 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 md:mb-12">Curriculum Framework</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Primary Wing Card */}
          <div className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-border/50 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            </div>
            
            <h3 className="font-semibold text-lg md:text-xl mb-3 md:mb-4">Primary Wing</h3>
            
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              Focusing on foundational literacy and experiential learning through play and inquiry.
            </p>
            
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Grades I - V
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Inquiry-Based Pedagogy
              </li>
            </ul>
            
            {/* Decorative Image */}
            <div className="mt-4 md:mt-6 rounded-xl overflow-hidden relative h-24 md:h-32">
              <Image 
                src="/images/classroom.jpg"
                alt="Primary Wing Students"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          {/* Secondary School Card */}
          <div className="bg-primary text-primary-foreground rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            
            <h3 className="font-semibold text-lg md:text-xl mb-3 md:mb-4 text-accent">Secondary School</h3>
            
            <p className="text-sm md:text-base text-primary-foreground/80 mb-4 md:mb-6 leading-relaxed">
              A rigorous academic program designed to transition students from foundational knowledge to specialized disciplines.
            </p>
            
            <div className="grid grid-cols-2 gap-3 md:gap-4 pt-3 md:pt-4 border-t border-white/20">
              <div>
                <p className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider">Focus</p>
                <p className="font-medium text-sm md:text-base text-accent">Core Disciplines</p>
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider">Board</p>
                <p className="font-medium text-sm md:text-base text-accent">CBSE Standard</p>
              </div>
            </div>
            
            {/* Student Image */}
            <div className="mt-4 md:mt-6 rounded-xl overflow-hidden relative h-28 md:h-40">
              <Image 
                src="/images/students-studying.jpg"
                alt="Secondary School Student"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          {/* Science Labs Card */}
          <div className="bg-muted rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group md:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-card rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            
            <h3 className="font-semibold text-lg md:text-xl mb-3 md:mb-4">Science & Labs</h3>
            
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              State-of-the-art laboratories for Physics, Chemistry, Biology, and Computer Science.
            </p>
            
            <div className="mt-4 md:mt-6 rounded-xl overflow-hidden relative h-28 md:h-40">
              <Image 
                src="https://res.cloudinary.com/dsxldaodx/image/upload/v1780999136/ChatGPT_Image_Jun_9_2026_03_28_32_PM_pyrnkh.png"
                alt="Science Labs"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
