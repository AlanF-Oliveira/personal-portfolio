import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { projects } from "@/lib/portfolio-data"

export function Projects() {
  return (
    <section id="projetos" className="px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title mb-12">

          Projetos
        </h2>

        <div className="project-list">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-entry group"
            >
              <div className="project-heading">
                <div>
                  <h3 className="text-2xl font-medium leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
                    {project.title}
                  </h3>
                </div>

                <Button variant="outline" size="sm" asChild className="mt-5 w-fit bg-transparent">
                  <a href={project.github ?? project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.github ? "Ver código de" : "Visitar"} ${project.title} (nova aba)`}>
                    {project.github ? <Github className="w-4 h-4 mr-2" /> : null}
                    {project.github ? "Ver código" : "Visitar site"}
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </Button>
              </div>

              <div><ul className="mb-6 space-y-3 text-muted-foreground">
                {project.description.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs hover:scale-[1.02]"
                  >
                    {tech}
                  </Badge>
                ))}
              </div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
