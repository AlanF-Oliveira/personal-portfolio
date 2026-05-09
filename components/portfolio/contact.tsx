import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "alanf.olive@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=alanf.olive@gmail.com&su=Contato%20via%20Portfolio",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(85) 98643-7817",
    href: "tel:+5585986437817",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Fortaleza, Ceará, Brasil",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/alanfo",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/AlanF-Oliveira",
  },
]

export function Contact() {
  return (
    <section id="contato" className="px-6 py-24 lg:px-20">
      <div className="max-w-5xl rounded-2xl border border-border/70 bg-card/50 p-8 shadow-xs backdrop-blur-sm lg:p-10 animate-in fade-in slide-in-from-bottom-3 duration-700">
        <h2 className="mb-4 flex items-center gap-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">
          <span className="w-12 h-px bg-primary" />
          Contato
        </h2>

        <p className="mb-12 max-w-2xl text-2xl font-semibold text-balance text-foreground md:text-3xl">
          Interessado em trabalhar juntos? Vamos conversar!
        </p>

        <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              {contactInfo.map((contact) => (
              <div key={contact.label} className="flex items-center gap-4 rounded-xl border border-transparent p-3 transition-colors hover:border-primary/20">
                <div className="rounded-lg bg-secondary/80 p-3">
                  <contact.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{contact.label}</p>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target="_blank"          
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{contact.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between">
            <div>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button key={social.label} variant="outline" size="icon" asChild className="bg-background/70">
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-5 h-5" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
