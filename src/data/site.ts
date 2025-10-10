export type Link = { label: string; href: string }
export type Project = { title: string; description: string[]; tags: string[]; href?: string }
export type Experience = { company: string; role: string; period: string; summary: string | string[]; links?: Link[] }

export const profile = {
  name: 'Jashwanth Reddy Karumudi',
  title: 'Software Engineer • Java / Spring Boot',
  bio: 'Software Engineer with 3+ years building Java, Spring Boot, and microservice back-end systems on AWS. Passionate about automation, containerization, and cloud best practices.',
  location: 'Hyderabad, India',
  resumeUrl: '/Jashwanth_Reddy_Karumudi_Java_Developer_JSB.pdf',
}

export const links: Link[] = [
  { label: 'GitHub', href: 'https://github.com/mrjashwanthreddy' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jashwanth-java-developer/' },
  { label: 'Email', href: 'mailto:mr.jashwanthreddy@gmail.com' },
]

export const projects: Project[] = [
  {
    title: 'Payment Service Module',
    description: [
      'Migrated on-premise applications to AWS improving scalability by 35%.',
      'Implemented EC2 to S3 workflows with MFT integration for external systems using shell scripting.',
      'Completed Spring Boot enterprise training and delivered POC applications that demonstrate back-end skills.'
    ],
    tags: ['Java', 'Spring Boot', 'AWS', 'Shell'],
  },
  {
    title: 'IMAGINE – CONSUMER (OneSQ)',
    description: [
      'Developed microservice to retrieve service qualification data from multiple telecom wholesalers.',
      'Replaced legacy SOAP with REST, improving performance by 35%.',
      'Achieved 99.9% production up-time using robust monitoring and fault tolerance.',
      'Led the development of OneSQ as the sole developer, improving the accuracy of service qualification by 15%.',
      'Reduced customer escalations by 40% through geocoding-based address validation using secure code practices.',
      'Improved response times by 30% using REST APIs and multithreading for service optimization.'
    ],
    tags: ['Java', 'Spring Boot', 'REST', 'Monitoring', 'Fault Tolerance', 'Multithreading', 'AWS'],
  },
  {
    title: 'E‑Commerce Microservices Platform',
    description: [
      'Distributed e‑commerce with 4+ microservices using Java 17, Spring Boot 3.5',
      'Spring Cloud (Gateway, Eureka, Config), Zipkin tracing',
      'Dockerized and orchestrated with Kubernetes'
    ],
    tags: ['Java', 'Spring Boot', 'Spring Cloud', 'Docker', 'Kubernetes', 'Zipkin', 'Redis', 'Prometheus', 'Grafana', 'Kafka'],
  }
]

export const experience: Experience[] = [
  {
    company: 'Tata Consultancy Services',
    role: 'Module Lead • Java Developer',
    period: 'Jan 2024 — Present · Hyderabad, India',
    summary: [
      'Managed OneSQ development as sole developer which led to 15% improvement in operational service and service qualification accuracy.',
      'Achieved 40% reduction in customer escalations of incorrect service availability by implementing efficient address search by geocoding accuracy validation.',
      'Accomplished 30% growth for customer service optimization using REST calls, and multi-threading for faster response times.'
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Java Developer',
    period: 'Dec 2021 — Dec 2023 · Hyderabad, India',
    summary: [
      'Migrated on-premise applications to AWS improving scalability by 35%.',
      'Underwent a comprehensive training program and developed proof-of-concept applications using Spring Boot demonstrating proficiency in enterprise java development.',
      'Automated EC2 to S3 workflows with MFT integration for external systems using shell scripting.'
    ]
  },
]


