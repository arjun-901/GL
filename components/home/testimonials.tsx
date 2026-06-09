"use client"

import { useState } from "react"
import { Quote, Users } from "lucide-react"

const testimonials = [
  {
    quote: "The holistic approach to education at Gurukul Academy is truly commendable. My daughter has grown not just academically, but also as a compassionate individual with strong values.",
    name: "Mrs. Shanti Iyer",
    role: "Parent of Class X Student",
  },
  {
    quote: "Gurukul Academy provided me with the foundation to pursue my dreams. The teachers here are not just educators but mentors who guide you through every step.",
    name: "Dr. Rahul Sharma",
    role: "Alumni, Batch of 2015",
  },
  {
    quote: "The infrastructure and teaching methodology at Gurukul Academy is unmatched. My son has developed critical thinking skills that will serve him well throughout his life.",
    name: "Mr. Vikram Patel",
    role: "Parent of Class XII Student",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="py-12 md:py-20 xl:py-24 2xl:py-32 px-4 md:px-6 xl:px-8">
      <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto text-center">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold italic mb-6 md:mb-12">
          Words from our Community
        </h2>
        
        <div className="relative bg-muted/50 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-16 xl:p-20 2xl:p-24">
          <Quote className="w-8 h-8 md:w-12 md:h-12 text-accent/30 absolute top-4 left-4 md:top-8 md:left-8" />
          
          <div className="relative z-10">
            <p className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl italic text-foreground/90 leading-relaxed mb-6 md:mb-8">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </p>
            
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-base md:text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-6 md:w-8 bg-primary" 
                    : "w-2 bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
