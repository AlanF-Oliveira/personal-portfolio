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
    <section id="skills" className="py-20 px-6 lg:px-20 bg-card/50">
      <div className="max-w-4xl">
        <h2 className="text-sm uppercase tracking-wide text-muted-foreground mb-12 flex items-center gap-4">
          <span className="w-12 h-px bg-primary" />
          Competências
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-foreground font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="bg-secondary/80 hover:bg-secondary text-secondary-foreground"
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
