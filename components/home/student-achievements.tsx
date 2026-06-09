import { Trophy, Star, Users } from "lucide-react"

const achievements = [
  {
    tag: "🎓 Class 10th Toppers",
    tagColor: "bg-green-600",
    title: "Class 10th Toppers List",
    description: "Outstanding academic performance by our Class 10th students, securing top ranks in the district.",
    list: [
      "Kirti Mishra: 95% (2nd Rank in Basti District)",
      "Priyanka Verma: 88.33%",
      "Saurabh Gupta: 87.2%"
    ],
    student: {
      name: "Batch Toppers",
      role: "Class 10th",
    },
  },
  {
    tag: "🎓 Class 12th Toppers",
    tagColor: "bg-blue-600",
    title: "Class 12th Toppers List",
    description: "Exceptional results delivered by our Class 12th school topper.",
    list: [
      "Gangesh Mishra: 82% (School Topper)"
    ],
    student: {
      name: "Batch Toppers",
      role: "Class 12th",
    },
  }
]

export function StudentAchievements() {
  return (
    <section className="py-10 md:py-16 xl:py-20 2xl:py-24 px-4 md:px-6 xl:px-8 bg-muted/30">
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-6 md:mb-10 text-center">
          Student Achievements
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 xl:gap-8 2xl:gap-10 max-w-3xl xl:max-w-4xl 2xl:max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-border/50 group hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <span className={`px-2 md:px-3 py-1 ${achievement.tagColor} text-white text-[10px] md:text-xs font-semibold rounded-full uppercase tracking-wider`}>
                  {achievement.tag}
                </span>
                {achievement.icon && (
                  <achievement.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                )}
                {!achievement.icon && (
                  <Trophy className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                )}
              </div>
              
              <h3 className="font-semibold text-base md:text-lg mb-2 group-hover:text-primary transition-colors">
                {achievement.title}
              </h3>
              
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 flex-grow">
                {achievement.description}
              </p>

              {achievement.list && (
                <ul className="mb-4 space-y-1.5 flex-grow">
                  {achievement.list.map((item, i) => (
                    <li key={i} className="text-xs md:text-sm font-medium text-foreground flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="flex items-center gap-2 md:gap-3 pt-3 md:pt-4 border-t border-border">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted flex items-center justify-center">
                  <Users className="w-4 h-4 md:w-5 md:h-5 text-foreground/50" />
                </div>
                <div>
                  <p className="font-medium text-xs md:text-sm">{achievement.student.name}</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">{achievement.student.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
