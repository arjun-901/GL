import { Button } from "@/components/ui/button"
import { Download, Calendar } from "lucide-react"

export function AcademicsDownloads() {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl font-bold mb-4">Ready to Explore?</h2>
        
        <p className="text-muted-foreground mb-8">
          Download our comprehensive syllabus and academic planners for the current session.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button className="bg-primary hover:bg-primary/90 rounded-full px-8 shadow-md hover:shadow-lg transition-all duration-300 group">
            <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Download 2024-25 Syllabus
          </Button>
          
          <Button 
            variant="outline" 
            className="rounded-full px-8 border-foreground/20 hover:bg-card transition-all duration-300"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Academic Planner
          </Button>
        </div>
      </div>
    </section>
  )
}
