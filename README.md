# 💼 Portfólio — Alan Ferreira de Oliveira

Portfólio pessoal de **Alan Ferreira de Oliveira**, Desenvolvedor Back-end Java especializado em Spring Boot, APIs REST e PostgreSQL. Desenvolvido com **Next.js 16**, **TypeScript**, **Tailwind CSS** e componentes **shadcn/ui**.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| Next.js 16 | Framework React com App Router |
| React 19 | Biblioteca de UI |
| TypeScript 5.7 | Tipagem estática |
| Tailwind CSS 4 | Estilização utilitária |
| shadcn/ui + Radix UI | Componentes acessíveis e estilizados |
| Lucide React | Ícones |
| next-themes | Suporte a tema claro/escuro |
| Vercel Analytics | Monitoramento de acessos |
| pnpm | Gerenciador de pacotes |

---

## 📁 Estrutura do Projeto

```
├── app/
│   ├── layout.tsx          # Layout raiz (metadata, fontes, Analytics)
│   ├── page.tsx            # Página principal com todas as seções
│   └── globals.css         # Estilos globais
├── components/
│   ├── portfolio/          # Seções do portfólio
│   │   ├── navigation.tsx  # Barra de navegação
│   │   ├── hero.tsx        # Seção inicial / apresentação
│   │   ├── about.tsx       # Sobre mim
│   │   ├── skills.tsx      # Habilidades técnicas
│   │   ├── projects.tsx    # Projetos
│   │   ├── experience.tsx  # Experiência profissional
│   │   ├── education.tsx   # Formação acadêmica
│   │   ├── contact.tsx     # Contato
│   │   └── footer.tsx      # Rodapé
│   └── ui/                 # Componentes base (shadcn/ui)
├── hooks/                  # Custom hooks
├── lib/                    # Utilitários
├── public/                 # Assets estáticos (ícones, imagens)
├── styles/                 # Estilos adicionais
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## 📄 Seções do Portfólio

| Seção | Descrição |
|---|---|
| **Hero** | Apresentação com nome, cargo e links rápidos |
| **Sobre** | Resumo profissional e objetivo |
| **Habilidades** | Stack técnica (Java, Spring Boot, etc.) |
| **Projetos** | Projetos com links para os repositórios |
| **Experiência** | Histórico profissional |
| **Educação** | Formação acadêmica |
| **Contato** | Formulário e links de contato |

---

## ⚙️ Como Executar

### Pré-requisitos

- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/AlanF-Oliveira/Portifolio.git
cd Portifolio

# Instalar dependências
pnpm install
```

### Desenvolvimento

```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Build para produção

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

---

## 🌐 Deploy

O projeto está configurado para deploy na **Vercel**, com **Vercel Analytics** integrado para monitoramento de acessos.

---

## 🧩 Projetos em Destaque

| Projeto | Repositório | Tecnologias |
|---|---|---|
| API de Usuários | [AlanF-Oliveira/usuario](https://github.com/AlanF-Oliveira/usuario) | Java, Spring Boot, PostgreSQL, JWT |
| Agendador de Tarefas | [AlanF-Oliveira/agendador-tarefas](https://github.com/AlanF-Oliveira/agendador-tarefas) | Java, Spring Boot, MongoDB, OpenFeign |

---

## 👤 Autor

Desenvolvido por **[AlanF-Oliveira](https://github.com/AlanF-Oliveira)**
