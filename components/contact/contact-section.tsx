"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Send, ChevronDown } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Campus",
    lines: [
      "Gurukul Academy",
      "Harraiya, Basti District",
      "Uttar Pradesh - 272155"
    ],
  },
  {
    icon: Phone,
    title: "Voice Call",
    lines: [
      "+91 98891 26447",
      "Mon - Sat, 9:00 AM - 4:00 PM",
    ],
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section className="py-10 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="flex gap-3 md:gap-4 p-3 md:p-4 bg-card rounded-xl border-l-4 border-accent hover:shadow-md transition-all duration-300"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                  <info.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base mb-1">{info.title}</h3>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-xs md:text-sm text-muted-foreground">{line}</p>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Quote */}
            <div className="bg-muted/50 rounded-xl p-4 md:p-6 mt-4 md:mt-6">
              <p className="font-serif italic text-sm md:text-base text-foreground/80 mb-3 md:mb-4">
                &ldquo;The foundation of every state is the education of its youth.&rdquo;
              </p>
              <p className="text-xs md:text-sm text-primary font-medium">— DIOGENES</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-xl md:text-2xl font-bold mb-2">Send a Message</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
              Have a specific question about admissions or school life? Our administrative team is here to assist you.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className="block text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Your Full Name
                  </label>
                  <input 
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Subject of Inquiry
                </label>
                <div className="relative">
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent appearance-none transition-all text-sm"
                  >
                    <option value="">Select Subject</option>
                    <option value="admissions">Admissions 2026-27</option>
                    <option value="academics">Academic Programs</option>
                    <option value="fees">Fee Structure</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                  <ChevronDown className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Message
                </label>
                <textarea 
                  placeholder="How can we help you today?"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none transition-all text-sm"
                />
              </div>
              
              <Button 
                type="submit"
                className="bg-primary hover:bg-primary/90 rounded-lg px-6 md:px-8 py-5 md:py-6 shadow-md hover:shadow-lg transition-all duration-300 group text-sm"
              >
                Dispatch Message
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
            
            {isSubmitted && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">Thank you for your message!</p>
                <p className="text-green-600 text-sm mt-1">I will reply back within 72 hours.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
