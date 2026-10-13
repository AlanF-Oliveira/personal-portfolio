import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects, skillCategories } from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "Currículo Full Stack | Alan Ferreira de Oliveira",
  description: "Currículo de Alan Ferreira, Desenvolvedor Full Stack Júnior com Java, Spring Boot e TypeScript.",
  alternates: { canonical: "/resume" },
}
export default function ResumePage() {
  return <main className="mx-auto max-w-4xl px-6 py-12">
    <div className="mb-12 flex flex-wrap justify-between gap-4">
      <Button variant="ghost" asChild><Link href="/"><ArrowLeft className="mr-2 h-4 w-4" />Voltar ao portfólio</Link></Button>
      <Button asChild><a href="/Alan_Ferreira_Full_Stack.pdf" download><FileDown className="mr-2 h-4 w-4" />Baixar currículo em PDF</a></Button>
    </div>
    <h1 className="text-balance text-3xl font-bold sm:text-4xl">Alan Ferreira de Oliveira</h1>
    <p className="mt-4 text-xl text-primary">Desenvolvedor Full Stack Júnior</p>
    <p className="mt-4 leading-relaxed text-muted-foreground">Fortaleza, CE · Inglês intermediário · Disponibilidade imediata<br />Presencial em Fortaleza, híbrido ou remoto</p>
    <a className="mt-3 inline-block underline underline-offset-4" href="mailto:alanf.olive@gmail.com">alanf.olive@gmail.com</a>
    <section className="mt-12"><h2 className="mb-4 text-xl font-semibold">Resumo profissional</h2><p className="leading-relaxed text-muted-foreground">Graduando em Engenharia de Software, com prática em APIs Java e Spring Boot e interfaces Angular, React e TypeScript. Projetos com autenticação JWT, persistência SQL e NoSQL, testes automatizados e integração entre front-end e back-end. Vivência como autônomo no atendimento a clientes internacionais, organização de demandas e entregas.</p></section>
    <section className="mt-12"><h2 className="mb-4 text-xl font-semibold">Competências técnicas</h2><dl className="space-y-4">{skillCategories.map(group => <div key={group.title}><dt className="font-medium">{group.title}</dt><dd className="mt-1 leading-relaxed text-muted-foreground">{group.skills.join(", ")}</dd></div>)}</dl></section>
    <section className="mt-12"><h2 className="mb-6 text-xl font-semibold">Projetos</h2><div className="space-y-8">{projects.map(project => <article key={project.title}><h3 className="font-semibold">{project.title}</h3><p className="my-2 text-sm text-primary">{project.technologies.join(" · ")}</p>{project.description.map(text => <p key={text} className="mt-2 leading-relaxed text-muted-foreground">{text}</p>)}</article>)}</div></section>
    <section className="mt-12"><h2 className="mb-4 text-xl font-semibold">Experiência profissional</h2><h3 className="font-medium">Prestador de Serviços Digitais · Autônomo</h3><p className="my-2 text-muted-foreground">Remoto · jun. 2018 a mar. 2025</p><p className="leading-relaxed text-muted-foreground">Atendimento a clientes internacionais por texto em inglês, alinhamento de solicitações, definição de prazos, acompanhamento de entregas e resolução de imprevistos.</p></section>
    <section className="mt-12"><h2 className="mb-4 text-xl font-semibold">Formação e cursos</h2><p>Bacharelado em Engenharia de Software · Uniamérica</p><p className="mt-2 text-muted-foreground">Jan. 2026 a jan. 2030 (previsão) · Em andamento</p><p className="mt-4 leading-relaxed text-muted-foreground">Formação complementar na ZG Soluções, Javanauta e Udemy em desenvolvimento web, Java/Spring, bancos de dados, testes e boas práticas.</p><Link className="mt-4 inline-block text-primary underline underline-offset-4" href="/#educacao">Consultar os 23 cursos e certificados</Link></section>
  </main>
}
