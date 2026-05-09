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
 {
  title: "Serviço de Notificações por E-mail",
  description: [
    "Microsserviço responsável pelo envio automático de notificações por e-mail para tarefas agendadas.",
    "Consulta diariamente tarefas com status PENDENTE no Agendador de Tarefas e realiza o disparo das notificações.",
    "Após o envio do e-mail, o serviço atualiza o status da tarefa para NOTIFICADO.",
    "Comunicação entre serviços realizada via OpenFeign e agendamento com @Scheduled do Spring.",
    "E-mails enviados em HTML utilizando JavaMailSender (SMTP) e templates com Thymeleaf."
  ],
  technologies: ["Java", "Spring Boot", "OpenFeign", "JavaMailSender", "Thymeleaf", "Gradle"],
  github: "https://github.com/AlanF-Oliveira/notificacao",
},
  {
  title: "BFF — Agendador de Tarefas",
  description: [
    "Camada BFF (Backend for Frontend) responsável por centralizar e orquestrar as chamadas aos microsserviços de usuários e tarefas.",
    "Integração entre serviços realizada via OpenFeign, com propagação do token JWT do usuário autenticado nas requisições internas.",
    "Disponibiliza endpoints unificados para autenticação, cadastro de usuários e gerenciamento de tarefas.",
    "Reduz o acoplamento do frontend com os microsserviços e simplifica o consumo das APIs."
  ],
  technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "OpenFeign", "Maven"],
  github: "https://github.com/AlanF-Oliveira/bff-agendador-tarefas",
},
]

export function Projects() {
  return (
    <section id="projetos" className="px-6 py-24 lg:px-20">
      <div className="max-w-5xl animate-in fade-in slide-in-from-bottom-3 duration-700">
        <h2 className="mb-12 flex items-center gap-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">
          <span className="w-12 h-px bg-primary" />
          Projetos
        </h2>

        <div className="space-y-12">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative rounded-2xl border border-border/70 bg-card/60 p-7 shadow-xs backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                </div>

                <Button variant="outline" size="sm" asChild className="bg-background/70">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Ver Repositório
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </Button>
              </div>

              <ul className="mb-6 space-y-3 text-muted-foreground">
                {project.description.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs hover:scale-[1.02]"
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
