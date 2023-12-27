import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Wilham Georg Longen Brodwolf",
  initials: "WB",
  location: "Rio do Sul - Santa Catarina, Brazil",
  locationLink: "https://www.google.com/maps/place/Rio+do+Sul",
  about:
    "Mid Level Full Stack Engineer focused on create intuitive, customer-focused applications for seamless user experiences.",
  summary:
    "Development of scalable, accessible solutions with a focus on user experience. Key technologies: React, Node.js, Typescript, NestJs, Jest | PostgreSQL, MongoDB, Redis, S3 | AWS, Docker, Grafana, RabbitMQ, Terraform, Jenkins, Prometheus |",
  avatarUrl: "https://media.licdn.com/dms/image/C5603AQGZFjntVrD7Kg/profile-displayphoto-shrink_800_800/0/1632881490065?e=1709164800&v=beta&t=Nz89_0yw37JdgcDC7S4N5K_LMGRjr_1kqN7BJ4DDNfI",
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
      start: "2016",
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
      end: "",
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
    "Vue/Nuxt.js",
    "Node.js",
    "Nest",
    "PostgreSQL",
    "MongoDB",
    "AWS Cloud Platform",
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
        href: "https://marketing.ipm.com.br/lp-dara-oct-23/",
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
      description: "A Implementation of Microsoft Power BI APIs to enhance the in-house data visualization application",
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
        href: "https://portal.pagamentos.magazord.com.br/",
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
        href: "https://portal.parceiros.magazord.com.br/",
      },
    }
  ],
} as const;
