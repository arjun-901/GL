export function ContactHero() {
  return (
    <section className="relative">
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 overflow-hidden">
        <img 
          src="https://res.cloudinary.com/dsxldaodx/image/upload/v1781001464/ChatGPT_Image_Jun_9_2026_04_07_22_PM_u4jfx3.png"
          alt="Gurukul Academy Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <span className="px-4 py-1 bg-accent text-foreground rounded-full text-xs font-semibold mb-4">
            INQUIRY
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold italic">
            Connect with Heritage
          </h1>
        </div>
      </div>
    </section>
  )
}
