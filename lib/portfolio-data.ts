export const skillCategories = [
  {
    "title": "Front-end",
    "skills": [
      "TypeScript",
      "JavaScript",
      "Angular",
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS"
    ]
  },
  {
    "title": "Back-end",
    "skills": [
      "Java",
      "Groovy",
      "Spring Boot",
      "APIs REST",
      "Spring Security",
      "JWT",
      "OpenFeign"
    ]
  },
  {
    "title": "Dados",
    "skills": [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "JPA / Hibernate",
      "JDBC",
      "SQL"
    ]
  },
  {
    "title": "Qualidade e arquitetura",
    "skills": [
      "JUnit 5",
      "Mockito",
      "Spock",
      "Clean Code",
      "SOLID",
      "MVC",
      "Padrões de projeto"
    ]
  },
  {
    "title": "Ferramentas",
    "skills": [
      "Git / GitHub",
      "GitHub Actions (CI)",
      "Docker Compose",
      "Docker",
      "Maven",
      "Gradle",
      "Swagger / OpenAPI",
      "Linux"
    ]
  },
  {
    "title": "Colaboração",
    "skills": [
      "Scrum",
      "Kanban",
      "Comunicação com clientes",
      "Inglês intermediário"
    ]
  }
]

export type Project = { title: string; description: string[]; technologies: string[]; github?: string; demo?: string }
export const projects: Project[] = [
  {
    "title": "Agendador de tarefas e cadastro web",
    "description": [
      "Ecossistema de usuários, tarefas e notificações com APIs Spring Boot, autenticação JWT e comunicação via BFF/OpenFeign. Desenvolvido durante a formação da Javanauta.",
      "Interface de cadastro em Angular integrada ao endpoint de usuários do BFF. O front-end está em desenvolvimento; os serviços usam PostgreSQL, MongoDB e Docker Compose."
    ],
    "technologies": [
      "Java",
      "Spring Boot",
      "Angular",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Docker"
    ],
    "github": "https://github.com/AlanF-Oliveira/bff-agendador-tarefas"
  },
  {
    "title": "Solarium Eventos",
    "description": [
      "Interface React para apresentar espaços de eventos, com componentes reutilizáveis, fotografias responsivas e galerias.",
      "Navegação por teclado, controle de foco nos diálogos, suporte a movimento reduzido e contatos por WhatsApp."
    ],
    "technologies": [
      "React",
      "JavaScript",
      "CSS",
      "Vite",
      "Acessibilidade"
    ],
    "demo": "https://solarium-react.vercel.app"
  },
  {
    "title": "Linketinder",
    "description": [
      "Aplicação de recrutamento com candidatos, empresas e vagas, desenvolvida em Groovy com PostgreSQL e JDBC.",
      "Separação em camadas MVC, interfaces de repositório, padrões Factory e DAO e testes com Spock. O front-end TypeScript mantém seus dados em memória no navegador."
    ],
    "technologies": [
      "Groovy",
      "TypeScript",
      "PostgreSQL",
      "JDBC",
      "Spock",
      "SOLID"
    ],
    "github": "https://github.com/AlanF-Oliveira/linketinder"
  },
  {
    "title": "Comunicação API",
    "description": [
      "API REST para agendar, consultar e cancelar comunicações, com integração de envio de e-mails via OpenFeign.",
      "Tratamento de erros, conversão com MapStruct, testes JUnit/Mockito e integração contínua de build e testes com GitHub Actions."
    ],
    "technologies": [
      "Java",
      "Spring Boot",
      "MySQL",
      "Maven",
      "JUnit 5",
      "Mockito",
      "Docker"
    ],
    "github": "https://github.com/AlanF-Oliveira/comunicacao_api"
  },
  {
    "title": "Portfólio pessoal",
    "description": [
      "Este portfólio reúne meus projetos, formação e trajetória, com Next.js, React e TypeScript.",
      "Interface responsiva, temas claro e escuro e acesso ao currículo em PDF."
    ],
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel"
    ],
    "github": "https://github.com/AlanF-Oliveira/personal-portfolio"
  }
]

export const courses = [
  {
    "title": "Acelera ZG - Padrões de Projeto",
    "issuer": "ZG Soluções",
    "date": "out. 2026"
  },
  {
    "title": "Acelera ZG - Boas Práticas (CCOD/SOLID)",
    "issuer": "ZG Soluções",
    "date": "out. 2026"
  },
  {
    "title": "Acelera ZG - Web Crawler e Regex",
    "issuer": "ZG Soluções",
    "date": "set. 2026"
  },
  {
    "title": "Acelera ZG - Banco de Dados",
    "issuer": "ZG Soluções",
    "date": "set. 2026"
  },
  {
    "title": "Object-Oriented Developer",
    "issuer": "Uniamérica",
    "date": null
  },
  {
    "title": "Acelera ZG - Linux",
    "issuer": "ZG Soluções",
    "date": "ago. 2026"
  },
  {
    "title": "Acelera ZG - TypeScript",
    "issuer": "ZG Soluções",
    "date": "ago. 2026"
  },
  {
    "title": "Acelera ZG - JavaScript",
    "issuer": "ZG Soluções",
    "date": "ago. 2026"
  },
  {
    "title": "Acelera ZG - Fundamentos de Testes",
    "issuer": "ZG Soluções",
    "date": "ago. 2026"
  },
  {
    "title": "Acelera ZG - HTML e CSS",
    "issuer": "ZG Soluções",
    "date": "ago. 2026"
  },
  {
    "title": "Acelera ZG - Groovy",
    "issuer": "ZG Soluções",
    "date": "ago. 2026"
  },
  {
    "title": "Acelera ZG - Java",
    "issuer": "ZG Soluções",
    "date": "ago. 2026"
  },
  {
    "title": "Acelera ZG - Metodologias ágeis e fluxos de trabalho",
    "issuer": "ZG Soluções",
    "date": "ago. 2026"
  },
  {
    "title": "Acelera ZG - Versionamento de Código",
    "issuer": "ZG Soluções",
    "date": "ago. 2026"
  },
  {
    "title": "Entendendo TypeScript",
    "issuer": "Udemy",
    "date": "ago. 2026"
  },
  {
    "title": "Testes unitários em Java com JUnit e Mockito",
    "issuer": "Udemy",
    "date": "ago. 2026"
  },
  {
    "title": "Git Completo: Do Básico ao Avançado",
    "issuer": "Udemy",
    "date": "ago. 2026"
  },
  {
    "title": "HTML, CSS e JavaScript",
    "issuer": "Javanauta",
    "date": null
  },
  {
    "title": "Programming Basics",
    "issuer": "Uniamérica",
    "date": null
  },
  {
    "title": "Java com Spring",
    "issuer": "Javanauta",
    "date": null
  },
  {
    "title": "Metodologias Ágeis",
    "issuer": "Javanauta",
    "date": null
  },
  {
    "title": "Banco de Dados SQL e NoSQL",
    "issuer": "Javanauta",
    "date": null
  },
  {
    "title": "User Experience",
    "issuer": "Uniamérica",
    "date": null
  }
]
