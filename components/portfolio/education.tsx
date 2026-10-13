import { courses } from "@/lib/portfolio-data"

export function Education() {
  return (
    <section id="educacao" className="px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title mb-8">
          Formação e cursos
        </h2>
        <h3 className="text-2xl font-semibold">Bacharelado em Engenharia de Software</h3>
        <p className="mt-3 text-primary">Uniamérica Descomplica</p>
        <p className="mt-2 text-muted-foreground">Jan. 2026 a jan. 2030 (previsão) · Em andamento</p>
        <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">
          Minha formação complementar passa por Java e Spring, desenvolvimento web,
          bancos de dados, testes, boas práticas e trabalho em equipe.
        </p>
        <details className="mt-8 rounded-xl border border-border bg-card/60">
          <summary className="cursor-pointer p-6 font-semibold marker:text-primary">
            Ver os {courses.length} cursos e certificados
          </summary>
          <ul className="divide-y divide-border px-6 pb-4">
            {courses.map((course) => (
              <li key={course.title} className="flex flex-col gap-2 py-4 sm:flex-row sm:justify-between">
                <div><h3 className="font-medium">{course.title}</h3><p className="mt-1 text-sm text-muted-foreground">{course.issuer}</p></div>
                {course.date && <span className="shrink-0 text-sm text-muted-foreground">{course.date}</span>}
              </li>
            ))}
          </ul>
        </details>
        <a className="mt-6 inline-flex py-2 text-primary underline underline-offset-4" href="https://www.linkedin.com/in/alanfo/details/certifications/" target="_blank" rel="noopener noreferrer">Ver certificados no LinkedIn</a>
      </div>
    </section>
  )
}
