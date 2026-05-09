import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Comunicação API",
    description: [
      "API REST para agendamento de comunicações com documentação de endpoints via Swagger (OpenAPI).",
      "Integração com API externa de e-mails, conversão DTO-Entity com MapStruct, GlobalExceptionHandler, Docker e testes unitários (Controller/Service).",
    ],
    technologies: ["Java", "Spring Boot", "Swagger/OpenAPI", "MapStruct", "Docker", "JUnit", "Gradle"],
    github: "https://github.com/AlanF-Oliveira/comunicacao_api",
  },
  {
    title: "Estoque",
    description: [
      "API REST para gerenciamento de produtos e categorias com operações de cadastro, consulta, atualização e remoção.",
      "Back-end em Spring Boot com persistência em PostgreSQL e modelagem focada em organização de catálogo.",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JPA/Hibernate", "Gradle"],
    github: "https://github.com/AlanF-Oliveira/estoque",
  },
  {
    title: "API SMS",
    description: [
      "API REST para gerenciamento do ciclo de status de mensagens SMS, com endpoints para consulta e atualização.",
      "Projeto focado em fluxo de mensagens e padronização de respostas em uma arquitetura back-end com Spring Boot.",
    ],
    technologies: ["Java", "Spring Boot", "REST API", "Gradle"],
    github: "https://github.com/AlanF-Oliveira/api-sms",
  },
  {
    title: "Testes Unitários (Cadastro de Usuário)",
    description: [
      "Projeto dedicado ao aprendizado prático de testes unitários em uma base de código já existente.",
      "Implementação e evolução de testes para melhorar cobertura e confiança em regras de negócio de cadastro de usuários.",
    ],
    technologies: ["Java", "JUnit", "Mockito", "Testes Unitários", "Gradle"],
    github: "https://github.com/AlanF-Oliveira/cadastro-usuario-testes-unitarios",
  },
  {
    title: "Ecossistema de Microserviços — BFF Agendador de Tarefas",
    description: [
      "Experiência prática na construção de um BFF para centralizar o acesso do front-end aos serviços de usuários, tarefas e notificações.",
      "Orquestração de chamadas entre APIs com OpenFeign e endpoints unificados para reduzir acoplamento no cliente.",
    ],
    technologies: ["Java", "Spring Boot", "OpenFeign", "JWT", "Maven"],
    github: "https://github.com/AlanF-Oliveira/bff-agendador-tarefas",
  },
  {
    title: "Ecossistema de Microserviços — Usuário",
    description: [
      "API REST responsável pelo gerenciamento de usuários, autenticação e emissão/validação de JWT no ecossistema.",
      "Separação de responsabilidades para concentrar regras de identidade e acesso em um serviço dedicado.",
    ],
    technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Gradle"],
    github: "https://github.com/AlanF-Oliveira/usuario",
  },
  {
    title: "Ecossistema de Microserviços — Agendador de Tarefas",
    description: [
      "API REST para gerenciamento e agendamento de tarefas pessoais, com regras de status e consultas por período.",
      "Serviço separado para concentrar a lógica de tarefas e integrar com os demais componentes do ecossistema.",
    ],
    technologies: ["Java", "Spring Boot", "MongoDB", "MapStruct", "OpenFeign", "Gradle"],
    github: "https://github.com/AlanF-Oliveira/agendador-tarefas",
  },
  {
    title: "Ecossistema de Microserviços — Notificação",
    description: [
      "Microsserviço de envio de e-mails com templates HTML para comunicar eventos do sistema de tarefas.",
      "Integração com serviços do ecossistema para disparo de notificações e atualização de status de comunicação.",
    ],
    technologies: ["Java", "Spring Boot", "JavaMailSender", "Thymeleaf", "OpenFeign", "Gradle"],
    github: "https://github.com/AlanF-Oliveira/notificacao",
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
