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
    <section id="contato" className="py-20 px-6 lg:px-20 bg-card/50">
      <div className="max-w-4xl">
        <h2 className="text-sm uppercase tracking-wide text-muted-foreground mb-4 flex items-center gap-4">
          <span className="w-12 h-px bg-primary" />
          Contato
        </h2>

        <p className="text-2xl md:text-3xl font-semibold text-foreground mb-12 max-w-2xl text-balance">
          Interessado em trabalhar juntos? Vamos conversar!
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            {contactInfo.map((contact) => (
              <div key={contact.label} className="flex items-center gap-4">
                <div className="p-3 bg-secondary rounded-lg">
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
                  <Button key={social.label} variant="outline" size="icon" asChild>
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
