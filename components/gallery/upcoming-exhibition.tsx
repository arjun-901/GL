import { Button } from "@/components/ui/button"

export function UpcomingExhibition() {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q0wG4CEIEBVzDVP7s0NousSEondGFm.png"
              alt="Upcoming Exhibition"
              className="w-full h-80 object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary">
              Upcoming Exhibition: Legacy 75
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Celebrating seventy-five years of academic excellence. Join us for a curated exhibition of historical photographs and student art installations this December.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90 rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300">
                Register Attendance
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-6 border-foreground/20 hover:bg-card transition-all duration-300"
              >
                View Program
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
