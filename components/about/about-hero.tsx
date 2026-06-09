"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Sparkles } from "lucide-react"

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-element", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24 px-4 md:px-6" ref={containerRef}>
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background -z-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="hero-element inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 md:mb-8 border border-accent/20">
          <Sparkles className="w-4 h-4" />
          <span>Founded in 20XX</span>
        </div>
        
        <h1 className="hero-element font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 text-balance">
          Nurturing Minds, <br className="hidden md:block" />
          <span className="text-primary relative inline-block">
            Shaping Futures.
            <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-4 text-accent/40" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,10 Q50,20 100,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </span>
        </h1>
        
        <p className="hero-element text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
          <span className="font-bold text-foreground">Gurukul Academy</span> is committed to academic excellence and character development, combining strong values with a modern approach to education to prepare students for a dynamic world.
        </p>
      </div>
    </section>
  )
}
