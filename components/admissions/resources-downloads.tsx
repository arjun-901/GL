"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileText, Download, ChevronDown } from "lucide-react"

const documents = [
  {
    title: "Institutional Prospectus",
    type: "PDF",
    size: "12.4 MB",
  },
  {
    title: "Offline Admission Form",
    type: "PDF",
    size: "2.1 MB",
  },
]

export function ResourcesDownloads() {
  const [formData, setFormData] = useState({
    name: "",
    grade: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-10 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Downloads */}
          <div>
            <h2 className="font-serif text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Resources & Downloads
            </h2>
            
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
              Everything you need to get started with your application. Download the documents below to review our academic curriculum, campus facilities, and fee structure.
            </p>
            
            <div className="space-y-3 md:space-y-4">
              {documents.map((doc, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 md:p-4 bg-card rounded-xl border border-border/50 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-9 h-9 md:w-10 md:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base group-hover:text-primary transition-colors">{doc.title}</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground">{doc.type} | {doc.size}</p>
                    </div>
                  </div>
                  
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                    <Download className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Apply Form */}
          <div className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg border border-border/50">
            <h3 className="font-semibold text-lg md:text-xl mb-4 md:mb-6">Quick Apply</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs md:text-sm font-medium mb-2">Full Name</label>
                <input 
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm"
                />
              </div>
              
              <div>
                <label className="block text-xs md:text-sm font-medium mb-2">Applying for Grade</label>
                <div className="relative">
                  <select 
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent appearance-none transition-all text-sm"
                  >
                    <option value="">Select Grade</option>
                    <option value="6">Grade VI</option>
                    <option value="7">Grade VII</option>
                    <option value="8">Grade VIII</option>
                    <option value="9">Grade IX</option>
                    <option value="10">Grade X</option>
                    <option value="11">Grade XI</option>
                    <option value="12">Grade XII</option>
                  </select>
                  <ChevronDown className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs md:text-sm font-medium mb-2">Mobile Number</label>
                <input 
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 rounded-lg py-5 md:py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2"
              >
                Request Call Back
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
