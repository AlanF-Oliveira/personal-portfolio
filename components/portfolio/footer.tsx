export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-border/70 px-6 py-10 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          {currentYear} Alan Ferreira de Oliveira. Todos os direitos reservados.
        </p>
        
        <p className="text-sm text-muted-foreground">
          Desenvolvido com Next.js e Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
