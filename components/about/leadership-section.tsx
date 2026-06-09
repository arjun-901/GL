import Image from "next/image"

const leaders = [
  {
    name: "Yogesh Kasera",
    role: "Director",
    image: "https://ui-avatars.com/api/?name=Yogesh+Kasera&background=f0fdf4&color=16a34a&size=300",
  },
  {
    name: "Mr. Shubedar Verma",
    role: "Principal",
    image: "https://ui-avatars.com/api/?name=Shubedar+Verma&background=f0fdf4&color=16a34a&size=300",
  },
  {
    name: "Mr. Shyam Mohamab",
    role: "Management",
    image: "https://ui-avatars.com/api/?name=Shyam+Mohamab&background=f0fdf4&color=16a34a&size=300",
  },
]

export function LeadershipSection() {
  return (
    <section className="py-10 md:py-16 lg:py-24 px-4 md:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Our Leadership
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl mx-auto">
          Guided by visionaries dedicated to excellence in education and holistic student development.
        </p>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {leaders.map((leader, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden mb-4 shadow-xl border-4 border-background group-hover:border-primary/20 transition-all duration-500 group-hover:scale-105">
                <Image 
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                {leader.name}
              </h3>
              <p className="text-accent font-medium tracking-wide uppercase text-xs md:text-sm">
                {leader.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
