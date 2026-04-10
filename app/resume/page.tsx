import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Currículo | Alan Ferreira de Oliveira",
  description:
    "Currículo de Alan Ferreira de Oliveira — Desenvolvedor Back-end Java (Júnior) com foco em Spring Boot, APIs REST e microsserviços.",
}

const projects = [
  {
    title: "BFF Agendador de Tarefas",
    href: "https://github.com/AlanF-Oliveira/bff-agendador-tarefas",
    stack: "Java, Spring Boot, OpenFeign, Docker Compose",
    items: [
      "Desenvolvi um BFF para centralizar as requisições do front-end e integrar os microsserviços de Usuários, Agendador de Tarefas e Notificação.",
      "Implementei a comunicação entre serviços com OpenFeign e a documentação dos endpoints com Swagger/OpenAPI.",
      "Configurei o ambiente local com Docker Compose para subir BFF, microsserviços e bancos de dados.",
    ],
  },
  {
    title: "Microsserviço de Usuários (Autenticação)",
    href: "https://github.com/AlanF-Oliveira/usuario",
    stack: "Spring Security, JWT, PostgreSQL",
    items: [
      "Desenvolvi uma API para cadastro, autenticação e gestão de usuários.",
      "Implementei autenticação com JWT e criptografia de senhas com BCrypt.",
      "Utilizei PostgreSQL com Spring Data JPA para persistência de usuários, endereços e telefones.",
    ],
  },
  {
    title: "Microsserviço Agendador de Tarefas",
    href: "https://github.com/AlanF-Oliveira/agendador-tarefas",
    stack: "Java, Spring Boot, MongoDB",
    items: [
      "Desenvolvi uma API para criar, consultar, atualizar e remover tarefas com agendamento por data e hora.",
      "Implementei consultas por intervalo de datas e controle de status (PENDENTE, NOTIFICADO, CANCELADO).",
      "Integrei autenticação via JWT e comunicação com o microsserviço de usuários.",
    ],
  },
  {
    title: "Microsserviço de Notificações",
    href: "https://github.com/AlanF-Oliveira/notificacao",
    stack: "Spring Boot Mail, HTML",
    items: [
      "Implementei envio de notificações por e-mail com templates HTML utilizando Spring Boot Mail.",
    ],
  },
  {
    title: "Site / Portfólio",
    href: "https://alanfo.dev",
    stack: "Next.js, TypeScript, Tailwind CSS, Vercel",
    items: [
      "Desenvolvi e publiquei meu site pessoal para apresentação profissional e exibição de projetos.",
    ],
  },
]

const skillGroups = [
  {
    label: "Linguagens & Frameworks",
    value: "Java, Spring Boot, Spring Security, Spring Data JPA, Spring Data MongoDB",
  },
  {
    label: "Arquitetura & APIs",
    value: "Microsserviços, API REST, BFF (Backend for Frontend), OpenFeign, DTOs, JWT",
  },
  {
    label: "Banco de Dados",
    value: "PostgreSQL, MongoDB",
  },
  {
    label: "DevOps & Ferramentas",
    value: "Docker, Docker Compose, Git/GitHub, Swagger/OpenAPI, Maven, Gradle, Postman, IntelliJ IDEA",
  },
]

const education = [
  {
    degree: "Bacharelado em Engenharia de Software",
    institution: "UniAméricas Descomplica",
    period: "Jan/2026 — Cursando",
  },
  {
    degree: "Combo Fullstack Java",
    institution: "Javanauta Academy",
    period: "Em andamento",
  },
]

const additionalInfo = [
  "Disponibilidade imediata para início.",
  "Flexibilidade para modelos de trabalho presencial (Fortaleza/CE), híbrido ou remoto.",
  "Inglês intermediário (leitura, escrita e conversação).",
]

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h2 className="text-xs font-bold uppercase tracking-widest text-foreground pb-1 border-b border-border">
        {children}
      </h2>
    </div>
  )
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background py-10 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground -ml-2">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Voltar ao Portfólio
            </Link>
          </Button>
        </div>

        {/* Resume card */}
        <div className="bg-card border border-border rounded-xl p-8 sm:p-10 shadow-sm space-y-8">

          {/* ===== HEADER ===== */}
          <header className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wide uppercase text-foreground">
              Alan Ferreira de Oliveira
            </h1>
            <p className="text-sm font-semibold text-muted-foreground">
              Desenvolvedor Back-end Java (Júnior)
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Fortaleza, CE
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                (85) 98643-7817
              </span>
              <a
                href="mailto:alanf.olive@gmail.com"
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                alanf.olive@gmail.com
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
              <a
                href="https://linkedin.com/in/alanfo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:underline"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/AlanF-Oliveira"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:underline"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
              <a
                href="https://alanfo.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:underline"
              >
                <Globe className="w-3.5 h-3.5" />
                alanfo.dev
              </a>
            </div>
          </header>

          {/* ===== RESUMO ===== */}
          <section>
            <SectionHeading>Resumo</SectionHeading>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Desenvolvedor Back-end Java (Júnior) com foco em APIs REST e microsserviços com Spring Boot. Tenho
              experiência prática em autenticação e autorização com Spring Security + JWT, comunicação entre serviços
              com OpenFeign e persistência com PostgreSQL e MongoDB. Tenho como objetivo contribuir com equipes ágeis,
              evoluir tecnicamente e entregar soluções bem estruturadas, seguras e de fácil manutenção.
            </p>
          </section>

          {/* ===== HABILIDADES TÉCNICAS ===== */}
          <section>
            <SectionHeading>Habilidades Técnicas</SectionHeading>
            <div className="space-y-2 text-sm">
              {skillGroups.map((group) => (
                <p key={group.label}>
                  <span className="font-semibold text-foreground">{group.label}:</span>{" "}
                  <span className="text-muted-foreground">{group.value}</span>
                </p>
              ))}
            </div>
          </section>

          {/* ===== PROJETOS ===== */}
          <section>
            <SectionHeading>Projetos em Destaque</SectionHeading>
            <div className="space-y-5">
              {projects.map((project) => (
                <div key={project.title}>
                  <p className="text-sm">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary hover:underline"
                    >
                      {project.title}
                    </a>{" "}
                    <span className="text-muted-foreground italic">| {project.stack}</span>
                  </p>
                  <ul className="mt-1.5 space-y-1 pl-4">
                    {project.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-px shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ===== FORMAÇÃO ===== */}
          <section>
            <SectionHeading>Formação Acadêmica e Cursos</SectionHeading>
            <div className="space-y-2">
              {education.map((edu) => (
                <div key={edu.degree} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5">
                  <p className="text-sm font-semibold text-foreground">
                    {edu.degree}{" "}
                    <span className="font-normal text-muted-foreground">— {edu.institution}</span>
                  </p>
                  <p className="text-sm text-muted-foreground italic whitespace-nowrap">{edu.period}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== INFORMAÇÕES ADICIONAIS ===== */}
          <section>
            <SectionHeading>Informações Adicionais</SectionHeading>
            <ul className="space-y-1 pl-4">
              {additionalInfo.map((info, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary mt-px shrink-0">•</span>
                  <span>{info}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ===== FOOTER BADGES ===== */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
            {["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "MongoDB", "Docker", "Git/GitHub"].map(
              (tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
