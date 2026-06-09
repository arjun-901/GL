import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function JoinCommunity() {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Decorative elements */}
        <div className="absolute -top-8 left-1/4 w-24 h-24 bg-accent/10 rounded-2xl -rotate-12 hidden lg:block"></div>
        <div className="absolute -bottom-8 right-1/4 w-32 h-32 bg-primary/5 rounded-2xl rotate-12 hidden lg:block"></div>
        
        <div className="relative z-10">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Ready to join our community?
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Admission portals for the next academic session are now open. Secure your seat in the legacy of excellence.
          </p>
          
          <Button 
            asChild
            variant="outline"
            className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          >
            <Link href="/admissions">
              Admission Portal
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
