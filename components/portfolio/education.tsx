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
    <section id="educacao" className="py-20 px-6 lg:px-20">
      <div className="max-w-4xl">
        <h2 className="text-sm uppercase tracking-wide text-muted-foreground mb-12 flex items-center gap-4">
          <span className="w-12 h-px bg-primary" />
          Educação
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu) => (
            <article 
              key={edu.degree}
              className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
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
