import Link from "next/link"
import Image from "next/image"
import { Mail, Share2, MapPin, Phone } from "lucide-react"

const quickLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/campus-map", label: "Campus Map" },
  { href: "/alumni", label: "Alumni" },
]

export function Footer() {
  return (
    <footer className="bg-[#3E2723] text-white/90">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-2xl font-bold text-accent">Gurukul Academy</h3>
            </div>
            <p className="text-xs md:text-sm text-white/70 max-w-xs">
              Cultivating excellence, character, and heritage since 20xx. Your gateway to a brighter intellectual future.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button className="p-2 rounded-full bg-white/10 hover:bg-accent hover:text-foreground transition-all duration-300">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full bg-white/10 hover:bg-accent hover:text-foreground transition-all duration-300">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h4 className="text-xs uppercase tracking-wider text-white/50 mb-3 md:mb-4">Explore</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-white/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/50 mb-3 md:mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p>Harraiya, Basti District, Uttar Pradesh - 272155</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <p>+91 98891 26447</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/50 mb-3 md:mb-4">Newsletter</h4>
            <div className="flex items-center gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-accent transition-colors w-full"
              />
              <button className="bg-accent hover:bg-accent/90 text-foreground p-2 rounded-lg transition-colors duration-300 flex-shrink-0">
                <Mail className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-white/50 mt-2">Subscribe for updates</p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <p className="text-center text-xs text-white/50">
            &copy; 2026 Digisoch . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
