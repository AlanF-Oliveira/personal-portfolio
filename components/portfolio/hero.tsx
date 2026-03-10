"use client"

import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-20 lg:px-20">
      <div className="max-w-4xl">
        <p className="text-muted-foreground mb-4 tracking-wide uppercase text-sm">
          Back-end Java Developer
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Alan Ferreira
          <span className="block text-primary">de Oliveira</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          Desenvolvedor Back-end Java focado em Spring Boot, APIs REST e PostgreSQL.
          Em transição de carreira, com sólida base técnica e projetos práticos desenvolvidos.
        </p>

        <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-sm mb-10">
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
          <Button asChild>
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
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/AlanF-Oliveira" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
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