"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, GraduationCap, Trophy, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export function InstitutionalHighlights() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="py-10 md:py-16 xl:py-20 2xl:py-24 px-4 md:px-6 xl:px-8 bg-muted/30">
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-10 xl:mb-14">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold italic mb-2 text-balance">
              Institutional Highlights
            </h2>
            <p className="text-sm md:text-base xl:text-lg 2xl:text-xl text-muted-foreground max-w-lg xl:max-w-2xl 2xl:max-w-3xl text-pretty">
              We provide <span className="font-bold">quality education</span> with a focus on <span className="font-bold">discipline</span> and overall growth.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full border-foreground/20 hover:bg-card hover:shadow-md transition-all duration-300 w-9 h-9 md:w-10 md:h-10"
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button 
              size="icon"
              className="rounded-full bg-accent text-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-all duration-300 w-9 h-9 md:w-10 md:h-10"
              onClick={() => setCurrentSlide(Math.min(1, currentSlide + 1))}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 xl:gap-10 2xl:gap-16">
          {/* Rankings Card */}
          <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group border border-border/50">
            <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-[10px] md:text-xs font-semibold rounded-full mb-3 md:mb-4 uppercase tracking-wider">
              Academics
            </span>
            
            <h3 className="font-serif text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors">
              Empowering Academic & Personal Growth
            </h3>
            
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
              Delivering consistent academic quality with a focus on holistic growth.
            </p>
            
            <div className="flex items-center gap-2 md:gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent/30 border-2 border-card flex items-center justify-center"
                  >
                    <Users className="w-3 h-3 md:w-4 md:h-4 text-foreground/50" />
                  </div>
                ))}
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary text-primary-foreground border-2 border-card flex items-center justify-center text-[10px] md:text-xs font-semibold">
                  +2k
                </div>
              </div>
              <p className="text-[10px] md:text-xs text-muted-foreground">Join our growing alumni community</p>
            </div>
          </div>
          
          {/* Facilities Card */}
          <div className="bg-muted rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group border border-border/50">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-card rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
              <Trophy className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            
            <h3 className="font-serif text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors">
             Modern Facilities
            </h3>
            
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
              Advanced computer labs, science centers, and an expansive digital library.
            </p>
            
            <Link 
              href="/academics"
              className="inline-flex items-center gap-2 text-accent font-medium text-sm md:text-base hover:gap-3 transition-all duration-300"
            >
              Learn more
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
