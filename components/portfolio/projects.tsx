import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "API de Usuários (CRUD + Autenticação JWT)",
    description: [
      "Implementou CRUD e autenticação com JWT (cadastro/login, geração/validação de token, rotas públicas e protegidas).",
      "Persistência com Spring Data JPA/Hibernate e PostgreSQL, com organização em camadas (Controller/Service/Repository).",
      "Uso de DTOs + conversores (DTO <-> Entidade), tratamento de exceções (400/404) com classes customizadas e senhas criptografadas com BCrypt.",
    ],
    technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA/Hibernate", "PostgreSQL", "Gradle"],
    github: "https://github.com/AlanF-Oliveira/usuario",
  },
  {
    title: "Agendador de Tarefas",
    description: [
      "API REST para gerenciamento e agendamento de tarefas, integrada ao microsserviço de usuários via OpenFeign para autenticação JWT.",
      "Persistência com Spring Data MongoDB, com consultas por período (dataEvento) e por e-mail do usuário.",
      "Controle de status de notificação por tarefa (PENDENTE / NOTIFICADO / CANCELADO) e mapeamento de entidades com MapStruct.",
    ],
    technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "MongoDB", "MapStruct", "OpenFeign", "Gradle"],
    github: "https://github.com/AlanF-Oliveira/agendador-tarefas",
  },
]

export function Projects() {
  return (
    <section id="projetos" className="py-20 px-6 lg:px-20">
      <div className="max-w-4xl">
        <h2 className="text-sm uppercase tracking-wide text-muted-foreground mb-12 flex items-center gap-4">
          <span className="w-12 h-px bg-primary" />
          Projetos
        </h2>

        <div className="space-y-12">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Ver Repositório
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </Button>
              </div>

              <ul className="space-y-3 text-muted-foreground mb-6">
                {project.description.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}