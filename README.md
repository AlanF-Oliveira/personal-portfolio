# 💼 Portfólio — Alan Ferreira de Oliveira

Portfólio pessoal de **Alan Ferreira de Oliveira**, Desenvolvedor Back-end Java especializado em Spring Boot, APIs REST e PostgreSQL. Desenvolvido com **Next.js 16**, **React 19**, **TypeScript** e **Tailwind CSS**, utilizando componentes **shadcn/ui**.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|---|---|---|
| Next.js | 16.1.6 | Framework React com App Router |
| React | 19.2.4 | Biblioteca de UI |
| TypeScript | 5.7.3 | Tipagem estática |
| Tailwind CSS | 4.2.0 | Estilização utilitária |
| shadcn/ui + Radix UI | — | Componentes acessíveis e estilizados |
| Lucide React | 0.564.0 | Ícones |
| next-themes | 0.4.6 | Suporte a tema claro/escuro |
| Vercel Analytics | 1.6.1 | Monitoramento de acessos |
| Geist Font | — | Fonte via next/font/google |

---

## 📁 Estrutura do Projeto

```
├── app/
│   ├── layout.tsx                    # Layout raiz (metadata, fontes, Analytics)
│   ├── page.tsx                      # Página principal com todas as seções
│   └── globals.css                   # Estilos globais
├── components/
│   ├── portfolio/                    # Seções do portfólio
│   │   ├── navigation.tsx            # Barra de navegação
│   │   ├── hero.tsx                  # Apresentação / Hero
│   │   ├── about.tsx                 # Sobre mim
│   │   ├── skills.tsx                # Habilidades técnicas
│   │   ├── projects.tsx              # Projetos
│   │   ├── experience.tsx            # Experiência profissional
│   │   ├── education.tsx             # Formação acadêmica
│   │   ├── contact.tsx               # Contato
│   │   └── footer.tsx                # Rodapé
│   └── ui/                           # Componentes base (shadcn/ui)
├── hooks/                            # Custom hooks
├── lib/                              # Utilitários (cn, etc.)
├── public/                           # Assets estáticos
│   ├── icon.svg
│   ├── icon-light-32x32.png
│   ├── icon-dark-32x32.png
│   └── apple-icon.png
├── styles/                           # Estilos adicionais
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## 📄 Seções do Portfólio

| Seção | Descrição |
|---|---|
| **Navigation** | Barra de navegação com links para as seções |
| **Hero** | Apresentação com nome, cargo e links rápidos |
| **About** | Resumo profissional e objetivo |
| **Skills** | Stack técnica (Java, Spring Boot, etc.) |
| **Projects** | Projetos com links para os repositórios |
| **Experience** | Histórico profissional |
| **Education** | Formação acadêmica |
| **Contact** | Links e informações de contato |
| **Footer** | Rodapé |

---

## ⚙️ Como Executar

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/AlanF-Oliveira/Portifolio.git
cd Portifolio

# Instalar dependências
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Build para produção

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## 🌐 Deploy

O projeto está configurado para deploy na **Vercel**, com **Vercel Analytics** integrado para monitoramento de acessos em produção.

---

## 🧩 Projetos em Destaque

| Projeto | Repositório | Tecnologias |
|---|---|---|
| API de Usuários | [AlanF-Oliveira/usuario](https://github.com/AlanF-Oliveira/usuario) | Java, Spring Boot, PostgreSQL, JWT |
| Agendador de Tarefas | [AlanF-Oliveira/agendador-tarefas](https://github.com/AlanF-Oliveira/agendador-tarefas) | Java, Spring Boot, MongoDB, OpenFeign |

---

## 👤 Autor

Desenvolvido por **[AlanF-Oliveira](https://github.com/AlanF-Oliveira)**