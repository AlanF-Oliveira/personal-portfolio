"use client"

import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-6 pb-24 pt-32 lg:px-20">
      <div className="max-w-5xl animate-in fade-in slide-in-from-bottom-3 duration-700">
        <p className="mb-5 text-xs uppercase tracking-[0.2em] text-muted-foreground md:text-sm">
          Back-end Java Developer
        </p>

        <h1 className="mb-8 text-balance text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
          Alan Ferreira
          <span className="block text-primary">de Oliveira</span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Desenvolvedor Back-end Java focado em Spring Boot, APIs REST e PostgreSQL.
          Em transição de carreira, com sólida base técnica e projetos práticos desenvolvidos.
        </p>

        <div className="mb-12 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Fortaleza, Ceará
          </span>
          <span className="text-border">|</span>
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            (85) 98643-7817
          </span>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button asChild className="px-5">
            <a
              href="https://mail.google.com/mail/?view=cm&to=alanf.olive@gmail.com&su=Contato%20via%20Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-4 h-4 mr-2" />
              Entrar em Contato
            </a>
          </Button>

          <div className="flex gap-2">
            <Button variant="outline" size="icon" asChild className="bg-card/70">
              <a href="https://github.com/AlanF-Oliveira" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="bg-card/70">
              <a href="https://linkedin.com/in/alanfo" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
