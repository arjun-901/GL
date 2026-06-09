import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}
