import { Badge } from "@/components/ui/badge"

import { skillCategories } from "@/lib/portfolio-data"

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-6xl ">
        <h2 className="section-title mb-12">

          Competências
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4 border-t border-border pt-6">
              <h3 className="text-base font-semibold text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-secondary/85 text-secondary-foreground hover:scale-[1.02]"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
