"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const categories = [
  { id: "all", label: "All Collections" },
]
const galleryImages = [
  { src: "https://res.cloudinary.com/dsxldaodx/image/upload/v1780998150/632469951_3841285869500979_68354138578218663_n_e0ne3c.jpg", alt: "Campus Event", category: "all", size: "large" },
  { src: "https://res.cloudinary.com/dsxldaodx/image/upload/v1780998150/632875441_3841285732834326_2534705375510648130_n_rxy5nq.jpg", alt: "School Celebration", category: "all", size: "medium" },
  { src: "https://res.cloudinary.com/dsxldaodx/image/upload/v1780998150/634112766_3841285776167655_2906749918792437324_n_kpbmet.jpg", alt: "Student Gathering", category: "all", size: "medium" },
  { src: "https://res.cloudinary.com/dsxldaodx/image/upload/v1780998149/652981240_3870346946594871_1699036915653908256_n_sa0ba2.jpg", alt: "Awards Ceremony", category: "all", size: "large" },
  { src: "https://res.cloudinary.com/dsxldaodx/image/upload/v1780998149/633404279_3841368982826001_6096205687743607813_n_knn4u4.jpg", alt: "Cultural Event", category: "all", size: "medium" },
  { src: "https://res.cloudinary.com/dsxldaodx/image/upload/v1780998147/631833582_3839349569694609_5320436502262596006_n_tfjacb.jpg", alt: "Academic Success", category: "all", size: "medium" },
  { src: "https://res.cloudinary.com/dsxldaodx/image/upload/v1780998147/627651218_3833999783562921_5433991552950311392_n_fhbfat.jpg", alt: "Students Interaction", category: "all", size: "medium" },
  { src: "https://res.cloudinary.com/dsxldaodx/image/upload/v1780998147/631746085_3839349519694614_4861705527801308731_n_lcbzm9.jpg", alt: "Extracurricular Activity", category: "all", size: "medium" },
  { src: "https://res.cloudinary.com/dsxldaodx/image/upload/v1780998146/627781709_3833999396896293_1228198853335949549_n_axntp4.jpg", alt: "Sports Day", category: "all", size: "small" },
  { src: "https://res.cloudinary.com/dsxldaodx/image/upload/v1780998146/627011903_3831173320512234_3414154060526561900_n_t9aiwf.jpg", alt: "Morning Assembly", category: "all", size: "large" },
  { src: "https://res.cloudinary.com/dsxldaodx/image/upload/v1780998145/626442177_3831173103845589_7752723375706944272_n_dniwss.jpg", alt: "Classroom Session", category: "all", size: "medium" },
  { src: "https://res.cloudinary.com/dsxldaodx/image/upload/v1780998145/582277760_3764745260488374_6292927440006392263_n_emmhua.jpg", alt: "Lab Experiment", category: "all", size: "medium" },
  { src: "https://res.cloudinary.com/dsxldaodx/image/upload/v1780998145/626474698_3831173370512229_1204063953333232947_n_uctbnc.jpg", alt: "Library Reading", category: "all", size: "medium" },
  { src: "https://res.cloudinary.com/dsxldaodx/image/upload/v1780998144/571514336_3747619498867617_1195155737775913479_n_y0wbks.jpg", alt: "Annual Day", category: "all", size: "large" },
  { src: "https://res.cloudinary.com/dsxldaodx/image/upload/v1780998143/621855041_3825651057731127_1013116153542178876_n_tyrs0p.jpg", alt: "Student Project", category: "all", size: "medium" },
  { src: "https://res.cloudinary.com/dsxldaodx/image/upload/v1780998142/571267769_3744581682504732_3179489975568887326_n_j8hxa9.jpg", alt: "Group Study", category: "all", size: "medium" },
  { src: "https://res.cloudinary.com/dsxldaodx/image/upload/v1780998142/487161387_3555392588090310_3273036644083379075_n_g70xug.jpg", alt: "Campus Tour", category: "all", size: "small" },
  
]

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <section className="py-6 md:py-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6 md:mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-accent text-foreground shadow-md"
                  : "bg-card border border-border text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={cn(
                "group relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500",
                image.size === "large" && "row-span-2",
                image.size === "medium" && "aspect-[4/3]",
                image.size === "small" && "aspect-square"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                  <p className="font-medium text-sm md:text-base">{image.alt}</p>
                  <p className="text-xs opacity-80 capitalize">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
