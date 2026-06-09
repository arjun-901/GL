import { Brain, Globe, Users } from "lucide-react"

export function FacultyResearch() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold">
              Distinguished Faculty & Research
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Our educators are not just teachers; they are mentors and researchers. With an average of 15+ years of experience, they bring real-world insights into the classroom.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-muted rounded-xl hover:bg-muted/80 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Critical Thinking Labs</h4>
                  <p className="text-sm text-muted-foreground">
                    Dedicated hours for philosophical inquiry and logic development across all grades.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-muted rounded-xl hover:bg-muted/80 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Global Exchange Programs</h4>
                  <p className="text-sm text-muted-foreground">
                    Virtual and physical cultural exchanges with partner institutions worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Card */}
          <div className="relative">
            <div className="bg-card rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://res.cloudinary.com/dsxldaodx/image/upload/v1780999136/ChatGPT_Image_Jun_9_2026_03_28_32_PM_pyrnkh.png"
                alt="Faculty in Action"
                className="w-full h-64 object-cover"
              />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center gap-4 text-white">
                  <div className="text-center">
                    <p className="text-4xl font-bold">98%</p>
                    <p className="text-xs opacity-80">Board Examination Pass Rate (Last 5 Years)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
