"use client"

import Link from "next/link"
import { Sparkles, Calendar, ArrowRight, CreditCard, Download } from "lucide-react"
import { cn } from "@/lib/utils"

const noticeItems = [
  { icon: Sparkles, label: "Latest Notices", href: "/notices" },
  { icon: Calendar, label: "Academic Calendar", href: "/calendar" },
  { icon: ArrowRight, label: "Admission Portal", href: "/admissions", highlight: true },
  { icon: CreditCard, label: "Fee Structure", href: "/fees" },
  { icon: Download, label: "Downloads", href: "/downloads" },
]

export function NoticeSidebar() {
  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-24 space-y-6">
        <div>
          <h3 className="font-semibold text-foreground">Notice Board</h3>
          <p className="text-xs text-accent uppercase tracking-wider">Institutional Updates</p>
        </div>

        <nav className="space-y-2">
          {noticeItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                item.highlight
                  ? "bg-accent text-foreground shadow-md hover:shadow-lg hover:scale-[1.02]"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}
