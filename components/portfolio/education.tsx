import { GraduationCap, BookOpen } from "lucide-react"

const education = [
  {
    degree: "Bacharelado em Engenharia de Software",
    institution: "Centro Universitário União das Américas Descomplica",
    location: "Remoto",
    period: "Jan 2026 – Cursando",
    icon: GraduationCap,
  },
  {
    degree: "Programa de Acompanhamento Combo FullStack Java (Javanauta)",
    institution: "Formação Complementar",
    location: "Em andamento",
    period: "Atual",
    icon: BookOpen,
  },
]

export function Education() {
  return (
    <section id="educacao" className="px-6 py-24 lg:px-20">
      <div className="max-w-5xl animate-in fade-in slide-in-from-bottom-3 duration-700">
        <h2 className="mb-12 flex items-center gap-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">
          <span className="w-12 h-px bg-primary" />
          Educação
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu) => (
            <article 
              key={edu.degree}
              className="rounded-2xl border border-border/70 bg-card/60 p-6 shadow-xs backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-secondary/80 p-3">
                  <edu.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground leading-snug mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {edu.location} • {edu.period}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
