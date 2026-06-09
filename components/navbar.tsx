"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, Phone, X } from "lucide-react"


const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "admissions" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/50">
      <div className="flex items-center justify-between px-4 md:px-6 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logoguruklu.png"
            alt="Gurukul Academy logo"
            width={72}
            height={72}
            className="h-10 w-auto object-contain md:h-12"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent relative py-1",
                pathname === link.href
                  ? "text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
         <Link href="/contact" className="hidden lg:flex"><Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-2 sm:px-4 md:px-6 text-sm shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Phone color="green" size={20} className="sm:w-6 sm:h-6" />
            <span className="hidden sm:inline ml-2">Admissions Enquiry | Call Now</span>
          </Button>
          </Link> 

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <nav className="px-4 py-4 space-y-1 bg-card border-t border-border/50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-lg text-sm font-medium transition-all",
                pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
         
        </nav>
      </div>
    </header>
  )
}
