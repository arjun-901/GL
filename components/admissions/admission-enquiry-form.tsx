"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function AdmissionEnquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
  }

  const classes = ["Play", "Nursery", "LKG", "UKG", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="bg-card border border-border/50 rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Admission Enquiry</h2>
            <p className="text-muted-foreground">Fill out the form below and our team will get in touch with you shortly.</p>
          </div>

          {isSubmitted ? (
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="text-muted-foreground">We have received your enquiry. Our team will connect with you in a few hours.</p>
              <Button 
                variant="outline" 
                className="mt-6"
                onClick={() => setIsSubmitted(false)}
              >
                Submit Another Enquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Student Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    placeholder="Enter student's full name"
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact" className="text-sm font-medium">Contact Number <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    id="contact"
                    required
                    placeholder="Enter 10-digit mobile number"
                    pattern="[0-9]{10}"
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="class" className="text-sm font-medium">Class <span className="text-red-500">*</span></label>
                  <select 
                    id="class"
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                  >
                    <option value="" disabled selected>Select Class</option>
                    {classes.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="board" className="text-sm font-medium">Preferred Board <span className="text-red-500">*</span></label>
                  <select 
                    id="board"
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                  >
                    <option value="" disabled selected>Select Board</option>
                    <option value="UP Board">UP Board</option>
                    <option value="CBSE Board">CBSE Board</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Enquiry
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
