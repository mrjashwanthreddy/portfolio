import { IconType } from 'react-icons'
import { FaJava} from "react-icons/fa";
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
    SiGithub,
    SiAmazonwebservices,
    SiAnsible,
    SiJenkins,
    SiTerraform,
    SiCoder,
    SiApachekafka
} from 'react-icons/si'
import { links } from '../../data/site'
import './home.css'
import {JSX} from "react";

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
    'github': SiGithub,
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
        { title: 'TOOLS', items: ['Git', 'Docker', 'GitHub', 'AWS', 'Ansible', 'Jenkins', 'Terraform'] }
    ]
    return (
        <section className="skills-section" aria-labelledby="skills-heading">
            <div className="skills-inner">
                <h2 id="skills-heading" className="section-heading">Technical Skills</h2>
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

export function HomePage(): JSX.Element {
    const githubHref = links.find(l => l.label.toLowerCase() === 'github')?.href
    const linkedinHref = links.find(l => l.label.toLowerCase() === 'linkedin')?.href

    return (
        <>
            <section className="card-shell hero-gradient">
                <div className="hero">
                    <div>
                        {/* <div className="hero-eyebrow">Java Developer</div> */}
                        <p>
                            <h2>I'm a backend-focused Software Engineer and Java Developer</h2> with 3+ years building high-performance Spring Boot microservices. I design and implement scalable RESTful APIs and cloud-native systems using AWS, Docker, and Kubernetes, with strong expertise in MySQL/Postgres, MongoDB, and Redis. I follow test-driven and SOLID practices (JUnit, Mockito, REST Assured), automate CI/CD pipelines, and implement observability and fault-tolerance to ensure reliable production uptime. Seeking full-time back-end roles where I can drive automation, containerization, and cloud best practices to deliver maintainable, production-ready systems.
                        </p>
                        <div className="hero-actions">
                            <a className="btn btn-outline btn-hover-brand" href="/projects">Projects</a>
                            {githubHref && (
                                <a className="btn btn-outline" href={githubHref} target="_blank" rel="noreferrer">GitHub</a>
                            )}
                            {linkedinHref && (
                                <a className="btn btn-outline" href={linkedinHref} target="_blank" rel="noreferrer">LinkedIn</a>
                            )}
                        </div>
                    </div>
                    <div className="hero-visual">
                        {/*<div className="hero-blob" />*/}
                        <img className="hero-photo" src="/profile.jpg" alt="Profile" />
                    </div>
                </div>
            </section>

            <Skills />
        </>
    )
}
