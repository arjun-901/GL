"use client"

import Link from "next/link"
import Image from "next/image"
import { Sparkles, Calendar, ArrowRight, CreditCard, Download, Images, Building } from "lucide-react"

const noticeItems = [
  // { icon: Sparkles, label: "Latest Notices", href: "/notices", highlight: true },
  // { icon: Calendar, label: "Academic Calendar", href: "/calendar" },
  { icon: ArrowRight, label: "Admission Portal", href: "/admissions" },
  { icon: Images, label: "School Gallery", href: "/gallery" },
  { icon: Building, label: "School Facilities", href: "/academics" },
  // { icon: CreditCard, label: "Fee Structure", href: "/fees" },
  // { icon: Download, label: "Downloads", href: "/downloads" },
]

const quickLinkCards = [
  {
    title: "Admissions 2026",
    description: "Secure your seat for the upcoming academic session.",
    image: "https://res.cloudinary.com/dsxldaodx/image/upload/v1780999035/ChatGPT_Image_Jun_9_2026_03_26_04_PM_l5ni20.png",
    href: "/admissions",
  },
  {
    title: "School Facilities",
    description: "Explore our classrooms, laboratories, library, and modern learning environment.",
    image: "/images/classroom.jpg",
    href: "/academics",
  },
  {
    title: "Campus Gallery",
    description: "Visual journey through our heritage campus.",
    image: "https://res.cloudinary.com/dsxldaodx/image/upload/v1780998150/632469951_3841285869500979_68354138578218663_n_e0ne3c.jpg",
    href: "/gallery",
  },
]

export function QuickLinks() {
  return (
    <section className="py-10 md:py-16 xl:py-20 2xl:py-24 px-4 md:px-6 xl:px-8">
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-12 2xl:gap-16">
          {/* Notice Board Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">Notice Board</h3>
                <p className="text-xs text-accent uppercase tracking-wider">Institutional Updates</p>
              </div>

              <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                {noticeItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-lg text-xs lg:text-sm font-medium transition-all duration-300 ${
                      item.highlight
                        ? "bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:scale-[1.02]"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <item.icon className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                ))}
              </nav>
              
              {/* Annual Convocation Card - Hidden on mobile */}
              {/* <div className="hidden lg:block mt-6 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group">
                <div className="aspect-square relative">
                  <Image 
                    src="/images/events-celebration.jpg" 
                    alt="Annual Convocation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-sm">Annual Convocation</p>
                    <p className="text-xs opacity-80">OCT 24, 2024</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          
          {/* Quick Links Grid */}
          <div className="lg:col-span-3">
            <h3 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-semibold mb-4 md:mb-6">Quick Links</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 xl:gap-8 2xl:gap-10">
              {quickLinkCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group block"
                >
                  <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image 
                        src={card.image} 
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3 md:p-4 bg-card">
                      <h4 className="font-semibold text-sm md:text-base mb-1 group-hover:text-primary transition-colors">{card.title}</h4>
                      <p className="text-xs text-muted-foreground">{card.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
