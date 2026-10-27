import { ArrowDown, ArrowUpRight, FileDown, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="portfolio-hero px-6 pb-16 pt-32 lg:px-20 lg:pt-40">
      <div className="mx-auto max-w-6xl">
        <h1 className="hero-name">Alan Ferreira<span className="text-primary"> de Oliveira.</span></h1>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <div>
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Desenvolvedor<br /><span className="text-primary">Full Stack.</span></h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">Desenvolvo aplicações web com Java, Spring Boot e TypeScript, conectando interfaces em Angular e React a APIs e bancos de dados.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="h-12 px-6"><a href="#projetos">Explorar projetos<ArrowDown className="ml-2 h-4 w-4" /></a></Button>
              <Button variant="outline" asChild className="h-12 px-6"><a href="/Alan_Ferreira_Full_Stack.pdf" download><FileDown className="mr-2 h-4 w-4" />Baixar currículo</a></Button>
            </div>
          </div>
          <div className="stack-map" aria-label="Tecnologias que uso em cada camada da aplicação">
            <div className="stack-layer"><span>Interface</span><p>Angular <span> / </span> React</p><small>TypeScript · HTML · CSS</small></div>
            <div className="stack-connector" aria-hidden="true"><ArrowDown size={18} /><span>HTTP / REST</span></div>
            <div className="stack-layer"><span>Aplicação</span><p>Java <span> / </span> Spring Boot</p><small>APIs · Autenticação · Testes</small></div>
            <div className="stack-connector" aria-hidden="true"><ArrowDown size={18} /><span>Persistência</span></div>
            <div className="stack-layer"><span>Dados</span><p>SQL <span> / </span> NoSQL</p><small>PostgreSQL · MySQL · MongoDB</small></div>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-6 text-sm text-muted-foreground">
          <p>Fortaleza, Ceará</p>
          <div className="flex flex-wrap gap-6">
            <a className="hero-link" href="https://github.com/AlanF-Oliveira" target="_blank" rel="noopener noreferrer"><Github size={16} />GitHub</a>
            <a className="hero-link" href="https://linkedin.com/in/alanfo" target="_blank" rel="noopener noreferrer"><Linkedin size={16} />LinkedIn</a>
            <a className="hero-link" href="mailto:alanf.olive@gmail.com">Contato<ArrowUpRight size={16} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
