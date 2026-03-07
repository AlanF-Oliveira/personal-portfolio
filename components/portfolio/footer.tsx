export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 px-6 lg:px-20 border-t border-border">
      <div className="max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
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
