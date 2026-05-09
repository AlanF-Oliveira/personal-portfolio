import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Back-end",
    skills: ["Java", "POO", "Spring Boot", "Spring Web (MVC)", "APIs REST", "Spring Security", "JWT"],
  },
  {
    title: "Front-end",
    skills: ["HTML", "CSS", "JavaScript", "React (Aprendendo)"],
  },
  {
    title: "Dados",
    skills: ["Spring Data JPA", "Hibernate", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Arquitetura",
    skills: ["Controller/Service/Repository", "DTOs", "Converter/Mapper", "Tratamento de Exceções"],
  },
  {
    title: "Ferramentas",
    skills: ["Maven", "Gradle", "Git/GitHub", "Postman", "IntelliJ IDEA", "Lombok", "GitHub Actions"],
  },
  {
    title: "Em Evolução",
    skills: ["JUnit 5", "Mockito", "Swagger/OpenAPI", "Docker"],
  },
  {
    title: "Idiomas",
    skills: ["Português (Nativo)", "Inglês (Intermediário)"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 lg:px-20">
      <div className="max-w-5xl rounded-2xl border border-border/70 bg-card/50 p-8 shadow-xs backdrop-blur-sm lg:p-10 animate-in fade-in slide-in-from-bottom-3 duration-700">
        <h2 className="mb-12 flex items-center gap-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">
          <span className="w-12 h-px bg-primary" />
          Competências
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4 rounded-xl border border-transparent p-4 transition-colors hover:border-primary/20">
              <h3 className="text-base font-semibold text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="bg-secondary/85 text-secondary-foreground hover:scale-[1.02]"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
