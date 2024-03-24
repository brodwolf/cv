import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Wilham Georg Longen Brodwolf",
  initials: "WB",
  location: "Santa Catarina, Brazil. GMT-3",
  locationLink: "https://www.google.com/maps/place/Santa+Catarina",
  about:
    "Mid Level Full Stack Engineer focused on create intuitive, customer-focused applications for seamless user experiences.",
  summary:
    "As a Full Stack Engineer, I thrive in dynamic, fast-paced teams that transform projects into successful products. Over the past few years, I've contributed to various complementary projects, forming a robust ecosystem that fosters the growth and stability of the main project. My primary goal is crafting scalable, user-centric solutions with a emphasis on accessibility. Currently, I work mostly with TypeScript, React, Node.js, and NestJS.",
  avatarUrl: "/profile.png",
  personalWebsiteUrl: "https://brodwolf.dev",
  contact: {
    email: "wilham@brodwolf.dev",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Brodwolf",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/brodwolf/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/brodwolf_dev",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      badges: ["Incomplete"],
      school: "Military Engineering Institute (IME)",
      degree: "Aeronautical Mechanical Engineering",
      start: "2017",
      end: "2017",
    },
    {
      badges: ["Incomplete"],
      school: "University of Buenos Aires (UBA)",
      degree: "Medicine",
      start: "2017",
      end: "2021",
    },
    {
      badges: ["Incomplete"],
      school: "University of the Alto Vale do Itajaí (Unidavi)",
      degree: "Information Technology and Information Systems",
      start: "2021",
      end: "2022",
    },
    {
      badges: ["Enrroled"],
      school: "Maringá University Center (UniCesumar)",
      degree: "Software Engineering",
      start: "2022",
      end: "Current",
    },
  ],
  work: [
    {
      company: "IPM Sistemas",
      link: "https://www.ipm.com.br",
      badges: ["Presential"],
      title: "Junior Backend Developer",
      start: "2021",
      end: "2022",
      description:
        "Development and maintenance of software in public management system, using the following technologies: PHP, JS, HTML/CSS, PostgreSQL, and BIRT.",
    },
    {
      company: "IPM Sistemas",
      link: "https://www.ipm.com.br",
      badges: ["Presential"],
      title: "Fullstack Software Analyist",
      start: "2022",
      end: "2023",
      description:
        "Development of B.I / Analytics Software implementing concepts such as Microservices Architecture, Microfrontends, SingleSPA, TDD, CQRS, Design Patterns, and Clean Architecture using the following technologies: VueJs, Tailwind, NodeJs, Typescript, RabbitMQ, JEST, PostgreSQL, Trino, MongoDB, Jenkins, Docker, Kubernetes, ArgoCD, Airflow, and Grafana.",
    },
    {
      company: "Magazord",
      link: "https://www.magazord.com.br/",
      badges: ["Hybrid"],
      title: "Magazord - Digital Commerce",
      start: "2022",
      end: "Current",
      description:
        "Development of scalable, accessible solutions with a focus on user experience. Key technologies: React, Node.js, Typescript, NestJs, Vue, Jest, Cypress | PostgreSQL, MongoDB, Redis, S3 | AWS, Docker, Grafana, RabbitMQ, Terraform, Jenkins, Prometheus |",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "React Native",
    "Vue/Nuxt.js",
    "Electron",
    "Node.js",
    "Nest.js",
    "Java / Spring Boot",
    "PHP",
    "PostgreSQL",
    "MongoDB",
    "RabbitMQ",
    "Redis",
    "Kafka",
    "Jenkins",
    "Grafana",
    "AWS Cloud Platform",
    "Azure",
  ],
  projects: [
    {
      title: "E-Government data science APP",
      techStack: [
        "Lead Frontend Developer",
        "Vue.js",
        "TypeScript",
        "Node.js",
        "Trino",
        "Kafka",
        "Airflow",
        "Kubernets",
      ],
      description: "A software to empowering governmental entities with data-driven insights for efficient, transparent, and citizen-focused governance.",
      link: {
        label: "marketing.ipm.com.br",
        href: "https://marketing.ipm.com.br/dara-ia",
      },
    },
    {
      title: "Data visualization APP",
      techStack: [
        "Lead Backend Developer",
        "TypeScript",
        "ASP.NET",
        "Node.js",
        "RabbitMQ",
      ],
      description: "A Implementation of Microsoft Power BI APIs to enhance the in-house data visualization application"
    },
    {
      title: "E-commerce Payment Gateway",
      techStack: [
        "Full Stack Developer",
        "React",
        "TypeScript",
        "Node.js",
        "RabbitMQ",
      ],
      description: "A robust system handling diverse payment methods for an e-commerce platform.",
      link: {
        label: "portal-pagamentos",
        href: "https://www.magazord.com.br/solucoes/recursos/meio-de-pagamento-proprio",
      },
    },
    {
      title: "E-commerce partnership APP",
      techStack: [
        "Full Stack Developer",
        "React",
        "TypeScript",
        "Node.js",
      ],
      description: "An e-commerce partnership app facilitating seamless collaborations and alliances among businesses for amplified growth and market expansion.",
      link: {
        label: "portal-parceiros",
        href: "https://www.magazord.com.br/parceiros",
      },
    }
  ],
} as const;
