import { Button } from "@/components/ui/button"

export function AdmissionsHero() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold leading-tight">
              Begin Your{" "}
              <span className="text-primary">Academic Journey.</span>
            </h1>
            
            <p className="text-muted-foreground leading-relaxed">
              Where traditional values meet modern admission process is designed to identify the brilliant minds of tomorrow.
            </p>
            

          </div>
          
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl w-full">
            <img 
              src="https://res.cloudinary.com/dsxldaodx/image/upload/v1781000688/ChatGPT_Image_Jun_9_2026_03_53_45_PM_getdkk.png"
              alt="Gurukul Academy Campus"
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
