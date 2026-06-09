import Image from "next/image"

const leaders = [
  {
    name: "MR. Yogesh Kasera",
    role: "Director",
    image: "/images/director.png",
  },
  {
    name: "Mr. Subedar Verma",
    role: "Principal",
    image: "/images/principal.png",
  },
  {
    name: "MR. Shyam Mohammad",
    role: "Management",
    image: "/images/management.png",
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
        
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10 lg:gap-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group mx-auto flex w-full max-w-[18rem] flex-col items-center"
            >
              <div className="relative mb-4 aspect-square w-40 overflow-hidden rounded-full border-4 border-background shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:border-primary/20 sm:w-44 lg:w-52">
                <Image 
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 176px, 208px"
                  className="object-cover object-top"
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
