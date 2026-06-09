"use client"

import { useEffect, useState } from "react"
import { Phone } from "lucide-react"
import Link from "next/link"

const announcements = [
  "Admissions Open | Limited Seats | Academic Session 2026-27 "
]

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (announcements.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-primary text-primary-foreground py-2">
      <div className="relative px-3">

        {/* TEXT */}
        <div className="flex items-center justify-center text-center">
          <span className="
        text-[11px] md:text-sm font-semibold tracking-wide
        text-white
        drop-shadow-[0_0_6px_rgba(255,215,0,0.7)]
        animate-[pulse_2.5s_ease-in-out_infinite]
      ">
            {announcements[currentIndex]}
          </span>
        </div>

        {/* CALL BUTTON */}
        <Link
          href="/contact"
          className="
        mt-1 flex justify-center items-center gap-1
        text-green-400 md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2
      "
        >
          <Phone size={14} className="animate-pulse" />
          <span className="text-[10px] md:text-xs font-medium">
            Call Now
          </span>
        </Link>

      </div>
    </div>
  )
}