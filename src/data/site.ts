export type Link = { label: string; href: string }
export type Project = { title: string; description: string; tags: string[]; href?: string }
export type Experience = { company: string; role: string; period: string; summary: string; links?: Link[] }

export const profile = {
  name: 'Jashwanth Reddy Karumudi',
  title: 'Software Engineer • Java / Spring Boot',
  bio: 'Software Engineer with 3+ years building Java, Spring Boot, and microservice back-end systems on AWS. Passionate about automation, containerization, and cloud best practices.',
  location: 'Hyderabad, India',
  resumeUrl: '/resume.pdf',
}

export const links: Link[] = [
  { label: 'GitHub', href: 'https://github.com/mrjashwanthreddy' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jashwanth-java-developer/' },
  { label: 'Email', href: 'mailto:mr.jashwanthreddy@gmail.com' },
]

export const projects: Project[] = [
  {
    title: 'E‑Commerce Microservices Platform',
    description: 'Distributed e‑commerce with 4+ microservices using Java 17, Spring Boot 3.5, Spring Cloud (Gateway, Eureka, Config), Zipkin tracing. Dockerized and orchestrated with Kubernetes.',
    tags: ['Java', 'Spring Boot', 'Spring Cloud', 'Docker', 'Kubernetes', 'Zipkin'],
  },
  {
    title: 'IMAGINE – CONSUMER (OneSQ)',
    description: 'Telecom service qualification microservice; replaced SOAP with REST (+35% perf), 99.9% uptime via monitoring & fault tolerance, +15% accuracy with geocoding validation.',
    tags: ['Java', 'Spring Boot', 'REST', 'Monitoring'],
  },
  {
    title: 'Payment Service Module',
    description: 'Modernized legacy workloads, migrated to AWS (+35% scalability) and automated EC2⇄S3 workflows with MFT and shell scripting.',
    tags: ['Java', 'Spring Boot', 'AWS', 'Shell'],
  },
]

export const experience: Experience[] = [
  {
    company: 'Tata Consultancy Services',
    role: 'Module Lead • Java Developer',
    period: 'Jan 2024 — Present · Hyderabad, India',
    summary: 'Led OneSQ microservice for telecom service qualification. Replaced SOAP with REST (≈35% perf gain), achieved 99.9% uptime via robust monitoring/fault tolerance, improved qualification accuracy by 15%, cut escalations by 40% with geocoding-based address validation, and reduced response times by 30% using multithreading.',
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Java Developer',
    period: 'Dec 2021 — Dec 2023 · Hyderabad, India',
    summary: 'Migrated on‑prem apps to AWS (+35% scalability). Delivered Spring Boot enterprise POCs. Automated EC2→S3 workflows with MFT integration using shell scripting.',
  },
]


