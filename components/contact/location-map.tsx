import { ExternalLink, MapPin } from "lucide-react"
import Link from "next/link"

export function LocationMap() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif text-2xl font-bold">Locate our Atelier</h2>
            <p className="text-muted-foreground">Explore our campus grounds in the heart of the educational hub.</p>
          </div>
          
          <Link 
            href="https://maps.google.com"
            target="_blank"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Open in Google Maps
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
        
        {/* Map Placeholder */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-96 bg-stone-400">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <p className="text-white font-medium z-10 relative">Gurukul Academy</p>
              <p className="text-white/90 text-sm z-10 relative">Harraiya Basti</p>
            </div>
          </div>
          
          {/* Map Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-stone-500/80 to-stone-600/80"></div>
        </div>
      </div>
    </section>
  )
}
