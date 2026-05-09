const experiences = [
  {
    title: "Prestador de Serviços Digitais",
    company: "Autônomo",
    location: "Remoto",
    period: "Jun 2018 – Mar 2025",
    description: [
      "Atendimento a clientes internacionais, com comunicação principalmente por texto em inglês (nível intermediário).",
      "Gestão de solicitações do início ao fim: alinhamento de requisitos/necessidades, definição de prazos, organização de agenda e acompanhamento de entrega.",
      "Resolução rápida de imprevistos e suporte ao cliente durante a execução, mantendo consistência e satisfação.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="px-6 py-24 lg:px-20">
      <div className="max-w-5xl rounded-2xl border border-border/70 bg-card/50 p-8 shadow-xs backdrop-blur-sm lg:p-10 animate-in fade-in slide-in-from-bottom-3 duration-700">
        <h2 className="mb-12 flex items-center gap-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">
          <span className="w-12 h-px bg-primary" />
          Experiência
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp) => (
            <article key={exp.title} className="relative border-l-2 border-border pl-6 transition-colors hover:border-primary/50">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="text-sm text-muted-foreground">
                  {exp.location} • {exp.period}
                </p>
              </div>
              
              <ul className="space-y-3 text-muted-foreground">
                {exp.description.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
