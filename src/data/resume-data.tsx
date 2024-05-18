import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Wilham Georg Longen Brodwolf",
  initials: "WB",
  location: "Santa Catarina, Brazil. GMT-3",
  locationLink: "https://www.google.com/maps/place/Santa+Catarina",
  about: "Senior Full Stack Engineer focused on creating intuitive, customer-focused applications for seamless user experiences.",
  summary: "As a Full Stack Engineer, I thrive in dynamic, fast-paced teams that transform projects into successful products. Over the past few years, I've contributed to various complementary projects, forming a robust ecosystem that fosters the growth and stability of the main project. My primary goal is crafting scalable, user-centric solutions with an emphasis on accessibility. Currently, I work mostly with TypeScript, React, Node.js, and NestJS.",
  avatarUrl: "/profile.png",
  personalWebsiteUrl: "https://brodwolf.dev",
  contact: {
    email: "wilham@brodwolf.dev",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Brodwolf",
        icon: GitHubIcon
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/brodwolf/",
        icon: LinkedInIcon
      },
      {
        name: "X",
        url: "https://x.com/brodwolf_dev",
        icon: XIcon
      }
    ]
  },
  education: [
    {
      badges: ["Incomplete"],
      school: "Military Engineering Institute (IME)",
      degree: "Aeronautical Mechanical Engineering",
      start: "2017",
      end: "2017"
    },
    {
      badges: ["Incomplete"],
      school: "University of Buenos Aires (UBA)",
      degree: "Medicine",
      start: "2017",
      end: "2021"
    },
    {
      badges: ["Incomplete"],
      school: "University of the Alto Vale do Itajaí (Unidavi)",
      degree: "Information Technology and Information Systems",
      start: "2021",
      end: "2022"
    },
    {
      badges: ["Enrolled"],
      school: "Maringá University Center (UniCesumar)",
      degree: "Software Engineering",
      start: "2022",
      end: "Current"
    }
  ],
  work: [
    {
      company: "IPM Sistemas",
      link: "https://www.ipm.com.br",
      title: "Junior Backend Developer",
      badges: ["e-government"],
      start: "2021",
      end: "2022",
      description: "Development and maintenance of software in a public management system.",
      technologies: [
        "PHP",
        "JS",
        "HTML/CSS",
        "PostgreSQL",
        "BIRT"
      ]
    },
    {
      company: "IPM Sistemas",
      link: "https://www.ipm.com.br",
      title: "Fullstack Software Analyst",
      badges: ["e-government"],
      start: "2022",
      end: "2023",
      description: "Development of BI and in-house data intelligence software.",
      technologies: [
        "VueJs",
        "Tailwind",
        "NodeJs",
        "Typescript",
        "RabbitMQ",
        "JEST",
        "PostgreSQL",
        "Trino",
        "MongoDB",
        "Jenkins",
        "Docker",
        "Kubernetes",
        "ArgoCD",
        "Airflow",
        "Grafana"
      ]
    },
    {
      company: "Magazord",
      link: "https://www.magazord.com.br/",
      title: "Digital Commerce Developer",
      badges: ["e-commerce"],
      start: "2023",
      end: "2024",
      description: "Development of scalable, accessible solutions with a focus on user experience.",
      technologies: [
        "React",
        "Tailwind",
        "Node.js",
        "Typescript",
        "NestJs",
        "Jest",
        "Cypress",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "AWS",
        "Docker",
        "Grafana",
        "RabbitMQ",
        "Terraform",
        "Jenkins",
        "Prometheus"
      ]
    }
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
    "Python",
    "PHP",
    "PostgreSQL",
    "MongoDB",
    "RabbitMQ",
    "Redis",
    "Kafka",
    "Jenkins",
    "Grafana",
    "AWS Cloud Platform",
    "Azure"
  ],
  projects: [
    {
      title: "E-Government Data Science Application",
      role: [
        "Lead Frontend Developer"
      ],
      techStack: [
        "Vue.js",
        "TypeScript",
        "Node.js",
        "Trino",
        "Kafka",
        "Airflow",
        "Kubernetes"
      ],
      description: "Empowering governmental entities with data-driven insights for efficient, transparent, and citizen-focused governance.",
      link: {
        "label": "marketing.ipm.com.br",
        "href": "https://marketing.ipm.com.br/dara-ia"
      }
    },
    {
      title: "Data Visualization Application",
      role: [
        "Lead Backend Developer"
      ],
      techStack: [
        "TypeScript",
        "ASP.NET",
        "Node.js",
        "RabbitMQ"
      ],
      description: "Implementation of Microsoft Power BI APIs to enhance the in-house data visualization application."
    },
    {
      title: "E-Commerce Payment Gateway",
      role: [
        "Lead Full Stack Developer"
      ],
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "RabbitMQ"
      ],
      description: "A robust system handling diverse payment methods for an e-commerce platform.",
      link: {
        label: "portal-pagamentos",
        href: "https://www.magazord.com.br/solucoes/recursos/meio-de-pagamento-proprio"
      }
    },
    {
      title: "E-Commerce Partnership Application",
      role: [
        "Full Stack Developer"
      ],
      techStack: [
        "React",
        "TypeScript",
        "Node.js"
      ],
      description: "An e-commerce partnership app facilitating seamless collaborations and alliances among businesses for amplified growth and market expansion.",
      link: {
        label: "portal-parceiros",
        href: "https://www.magazord.com.br/parceiros"
      }
    },
    {
      title: "Fraud Prevention Service",
      role: [
        "Software Analyst"
      ],
      techStack: [
        "Java",
        "PHP",
        "Python",
        "JavaScript",
        "Machine Learning"
      ],
      description: "Artificial Intelligence solution for detecting fraud in electronic transactions. An advanced AI monitors sales continuously, learning from user behavior to enhance detection capabilities.",
      link: {
        label: "sentynela",
        href: "https://www.sentynela.com.br/"
      }
    },
    {
      title: "Real-Time Database Monitoring",
      role: [
        "Software Analyst"
      ],
      techStack: [
        "Kafka",
        "Debezium",
        "Dremio",
        "Prometheus",
        "Apache Iceberg",
        "Apache Superset"
      ],
      // description: "Real-time database monitoring and data pipelines that integrate pipeline management, data lake storage, and data visualization."
      description: "Real-Time database monitoring and data pipelines project that integrates pipeline management, data lake storage, and data visualization. Provides real-time database monitoring, while advanced analytics offer actionable insights and detailed system analysis."
    }
  ]
}
