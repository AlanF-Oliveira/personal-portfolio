export function About() {
  return (
    <section id="sobre" className="py-20 px-6 lg:px-20">
      <div className="max-w-4xl">
        <h2 className="text-sm uppercase tracking-wide text-muted-foreground mb-4 flex items-center gap-4">
          <span className="w-12 h-px bg-primary" />
          Sobre Mim
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Sou um desenvolvedor <span className="text-foreground font-medium">Back-end Java</span>, 
            focado em construir APIs REST escaláveis e seguras. Minha stack principal inclui 
            <span className="text-foreground font-medium"> Spring Boot</span>, 
            <span className="text-foreground font-medium"> Spring Security com JWT</span> e 
            <span className="text-foreground font-medium"> PostgreSQL</span>.
          </p>
          
          <p>
            Trago uma bagagem de <span className="text-foreground font-medium">7 anos como autônomo</span> em 
            serviços digitais, onde desenvolvi habilidades como gestão de prazos, 
            comunicação efetiva e resolução de problemas. Essa experiência com clientes internacionais 
            também me proporcionou <span className="text-foreground font-medium">inglês intermediário</span> para 
            comunicação por texto.
          </p>
          
          <p>
            Atualmente cursando <span className="text-foreground font-medium">Engenharia de Software</span> e 
            buscando uma <span className="text-foreground font-medium">posição júnior</span> onde possa aplicar 
            meus conhecimentos técnicos e continuar evoluindo como desenvolvedor.
          </p>
        </div>
      </div>
    </section>
  )
}