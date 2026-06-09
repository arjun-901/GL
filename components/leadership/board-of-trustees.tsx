import { Mail, Linkedin, Users } from "lucide-react"

const trustees = [
  {
    name: "Neme.",
    role: "Academic Dean",
  },
  {
    name: "Dr.XYZ",
    role: "Head of Innovation",
  },
  {
    name: "Mr. XYZ",
    role: "Operations Director",
  },
  {
    name: "Ms.XYZ",
    role: "Cultural Dean",
  },
]

export function BoardOfTrustees() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Board of Trustees & Leadership
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A collective of distinguished academics and industry veterans guiding our strategic growth.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustees.map((trustee, index) => (
            <div 
              key={index}
              className="group text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-primary/10 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="w-full h-full flex items-center justify-center">
                  <Users className="w-12 h-12 text-primary/40" />
                </div>
              </div>
              
              <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                {trustee.name}
              </h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                {trustee.role}
              </p>
              
              <div className="flex items-center justify-center gap-2">
                <button className="p-2 rounded-full bg-muted hover:bg-accent hover:text-foreground transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full bg-muted hover:bg-accent hover:text-foreground transition-all duration-300">
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
