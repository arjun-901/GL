"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Sparkles } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"

export function HeroSection() {
  const heroImageRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const heroImage = heroImageRef.current
    if (!heroImage) return

    // Initial load animation
    gsap.fromTo(heroImage, 
      { 
        y: 120, 
        opacity: 0, 
        scale: 0.9, 
        rotateX: 5 
      },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        rotateX: 0,
        duration: 1.2, 
        ease: "power4.out" 
      }
    )

    // Shadow animation
    gsap.fromTo(heroImage,
      { boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
      {
        boxShadow: "0px 30px 80px rgba(0,0,0,0.2)",
        duration: 1.2,
        ease: "power2.out"
      }
    )

    // Floating effect after load
    gsap.to(heroImage, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
      delay: 1.2
    })

    // Mouse 3D tilt effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroImage) return
      const rect = heroImage.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const rotateX = (y / rect.height - 0.5) * 10
      const rotateY = (x / rect.width - 0.5) * -10

      gsap.to(heroImage, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.3
      })
    }

    const handleMouseLeave = () => {
      gsap.to(heroImage, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5
      })
    }

    heroImage.addEventListener("mousemove", handleMouseMove)
    heroImage.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      heroImage.removeEventListener("mousemove", handleMouseMove)
      heroImage.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section className="py-8 md:py-12 xl:py-16 2xl:py-24 px-4 md:px-6 xl:px-8">
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1">
            <p className="text-xs uppercase tracking-widest text-accent font-medium">
              Excellence in Education
            </p>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight text-balance">
              Welcome to{" "}
              <span className="text-primary"> Gurukul Academy</span>
            </h1>
            
            <div className="text-muted-foreground text-base md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed max-w-md xl:max-w-lg 2xl:max-w-xl mx-auto lg:mx-0 text-pretty">
              <hr className="mb-4" />
              Providing quality education from <span className="font-bold">Playway</span> to  <span className="font-bold">Class 12th</span> with strong academic and moral foundation.
            </div>
            
            <div className="flex flex-wrap gap-3 pt-2 justify-center lg:justify-start">
              <Button 
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 md:px-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <Link href="/about">
                  Explore More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                className="rounded-full px-5 md:px-6 border-foreground/20 hover:bg-muted hover:scale-105 transition-all duration-300"
              >
                <Link href="/academics">
                  View Academics
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Right Content - School Image with 3D Effect */}
          <div 
            ref={containerRef}
            className="relative order-1 lg:order-2"
            style={{ perspective: "1200px" }}
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-gradient-radial from-accent/30 to-transparent blur-3xl -z-10" />
            
            {/* ISO Badge */}
            <div className="absolute -top-2 md:-top-4 right-4 md:right-1/4 z-10 bg-primary text-primary-foreground px-3 md:px-4 py-2 md:py-3 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 md:w-5 md:h-5" />
                <div>
                  <p className="text-[10px] md:text-xs font-semibold">Accredited</p>
                  <p className="text-[8px] md:text-[10px] opacity-80">Institution</p>
                </div>
              </div>
            </div>
            
            {/* Hero Image Container */}
            <div 
              ref={heroImageRef}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden"
              style={{ transformStyle: "preserve3d" }}
            >
              <Image 
                src="https://res.cloudinary.com/dsxldaodx/image/upload/v1780994123/ChatGPT_Image_Jun_9_2026_01_56_38_PM_cfqbvv.png"
                alt="Gurukul Academy hero image"
                width={600}
                height={400}
                className="w-full h-48 sm:h-56 md:h-72 lg:h-80 xl:h-[450px] 2xl:h-[600px] object-cover rounded-2xl md:rounded-3xl"
                priority
              />
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-4 -left-2 md:-left-4 bg-card rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl border border-border">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-primary">98.8%</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground leading-tight">Board Exam Success<br />privious Batch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
