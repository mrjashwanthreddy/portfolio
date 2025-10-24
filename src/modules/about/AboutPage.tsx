import { IconType } from 'react-icons'
import { FaJava } from "react-icons/fa";
import {
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiSpring,
    SiMongodb,
    SiMysql,
    SiOracle,
    SiPostgresql,
    SiGit,
    SiDocker,
    SiAmazonwebservices,
    SiAnsible,
    SiJenkins,
    SiTerraform,
    SiCoder,
    SiApachekafka,
} from 'react-icons/si'
import './about.css'
import '../home/home.css'
import {JSX} from 'react'

type SkillCategory = {
    title: string
    items: string[]
}

const iconMap: Record<string, IconType> = {
    'javascript': SiJavascript,
    'react': SiReact,
    'tailwind css': SiTailwindcss,
    'html': SiHtml5,
    'css': SiCss3,
    'bootstrap': SiBootstrap,
    'java': FaJava,
    'spring boot': SiSpring,
    'mongodb': SiMongodb,
    'mysql': SiMysql,
    'oracle': SiOracle,
    'postgres': SiPostgresql,
    'postgresql': SiPostgresql,
    'git': SiGit,
    'docker': SiDocker,
    'aws': SiAmazonwebservices,
    'amazon web services': SiAmazonwebservices,
    'ansible': SiAnsible,
    'jenkins': SiJenkins,
    'terraform': SiTerraform,
    'kafka': SiApachekafka
}

function Skills(): JSX.Element {
    const categories: SkillCategory[] = [
        { title: 'FRONTEND', items: ['JavaScript', 'React', 'Tailwind CSS', 'HTML', 'CSS', 'Bootstrap'] },
        { title: 'BACKEND', items: ['Java', 'Spring Boot', 'kafka'] },
        { title: 'DATABASE', items: ['MongoDB', 'MySQL', 'Oracle', 'Postgres'] },
        { title: 'CLOUD', items: ['Git', 'Docker', 'GitHub', 'AWS', 'Ansible', 'Jenkins', 'Terraform'] }
    ]
    return (
        <section className="skills-section" aria-labelledby="skills-heading">
            <div className="skills-inner">
                <div className="skills-grid">
                    {categories.map(cat => (
                        <div key={cat.title} className="skill-category">
                            <div className="skill-category-title">{cat.title}</div>
                            <ul className="skill-list">
                                {cat.items.map(s => {
                                    const key = s.trim().toLowerCase()
                                    const Icon = iconMap[key] ?? SiCoder
                                    return (
                                        <li key={s} className="skill-item">
                                            <Icon className="skill-icon" aria-hidden="true" />
                                            <span className="skill-name">{s}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function AboutPage(): JSX.Element {
    return (
        <>
            {/*<section className="card-shell hero-gradient home-hero">*/}
            {/*    <div className="hero">*/}
            {/*        <div>*/}
            {/*             <div className="hero-eyebrow">Java Developer</div> */}
            {/*            <h2>I'm a backend-focused Software Engineer and Java Developer</h2>*/}
            {/*            <p>*/}
            {/*                3+ years building high-performance Spring Boot microservices. I designed and implemented scalable RESTful APIs and cloud-native systems using AWS, Docker, and Kubernetes, with strong expertise in MySQL/Postgres, MongoDB, and Redis. I follow test-driven and SOLID practices (JUnit, Mockito, REST Assured), automate CI/CD pipelines, and implement observability and fault-tolerance to ensure reliable production uptime. Seeking full-time back-end roles where I can drive automation, containerization, and cloud best practices to deliver maintainable, production-ready systems.*/}
            {/*            </p>*/}
            {/*             social/project links intentionally removed for About page */}
            {/*        </div>*/}
            {/*        <div className="hero-visual">*/}
            {/*            <div className="hero-blob" />*/}
            {/*            <img className="hero-photo" src="/profile-bkp.jpg" alt="Profile" />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <div className="hero-about">
                {/*<h2>Backend focused Software Engineer and Java Developer</h2>*/}
                <h2>About Me</h2>
                <p>
                    Having 3+ years of experience as a Software Engineer specializing in Java and Spring Boot development, I have successfully designed and implemented scalable microservices and RESTful APIs. My expertise extends to cloud-native systems, particularly on AWS, where I have utilized Docker and Kubernetes for containerization and orchestration. I am proficient in database management with MySQL, PostgreSQL, MongoDB, and Redis. Additionally, I automate CI/CD pipelines and implement observability and fault-tolerance strategies to maintain high production uptime.
                </p>
            </div>
            <div className="hero-title">
                <h3>Technical Skills</h3>
            </div>
            <Skills />
            <div className="hero-title">
                <h3>Certifications</h3>
            </div>
            <div className="certifications-section centered-certification">
                <span className="certification-text bold-certification">DevOps Engineer Master’s Program by Edureka</span>
                <a
                    href="https://www.edureka.co/certificates/mycertificate/452a09ba5dbfd6ac3cd96b84c00857b5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="verify-btn-rich-ui"
                >
                    Verify
                </a>
            </div>
        </>
    )
}
