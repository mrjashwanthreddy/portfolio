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
    SiGithub,
    SiAmazonwebservices,
    SiAnsible,
    SiJenkins,
    SiTerraform,
    SiCoder
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
    'terraform': SiTerraform
}

function Skills(): JSX.Element {
    const categories: SkillCategory[] = [
        { title: 'FRONTEND', items: ['JavaScript', 'React', 'Tailwind CSS', 'HTML', 'CSS', 'Bootstrap'] },
        { title: 'BACKEND', items: ['Java', 'Spring Boot'] },
        { title: 'DATABASE', items: ['MongoDB', 'MySQL', 'Oracle', 'Postgres'] },
        { title: 'TOOLS', items: ['Git', 'Docker', 'GitHub', 'AWS', 'Ansible', 'Jenkins', 'Terraform'] }
    ]
    return (
        <section className="skills-section" aria-labelledby="skills-heading">
            <div className="skills-inner">
                <h2 id="skills-heading" className="section-heading">Skills</h2>
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
            <section className="card-shell">
                <div className="hero">
                    <div>
                        {/* <div className="hero-eyebrow">Java Developer</div> */}
                        <h1>Hello, I'm a<br />Software Engineer</h1>
                        <p>
                            Java Developer with 3+ years of experience in Java, Spring Boot, Microservice software and back-end development,
                            seeking full-time back-end roles to design and build high-performing scalable applications using automation,
                            containerization, and cloud best practices.
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
                        <div className="hero-blob" />
                        <img className="hero-photo" src="/profile.jpg" alt="Profile" />
                    </div>
                </div>
            </section>

            <Skills />
        </>
    )
}

/*
export function HomePage() {
  return (
    <section className="card-shell">
      <div className="hero">
        <div>
          {/!* <div className="hero-eyebrow">Java Developer</div> *!/}
          <h1>Hello, I'm a<br />Software Engineer</h1>
          <p>Java Developer with 3+ years of experience in Java, Spring Boot, Microservice software and back-end development, seeking full-time back-end roles to design and build high-performing scalable applications using automation,
          containerization, and cloud best practices.</p>
          <div className="hero-actions">
            <a className="btn btn-outline btn-hover-brand" href="/projects">Projects</a>
            {links.find(l => l.label.toLowerCase()==='github') && (
              <a className="btn btn-outline" href={links.find(l => l.label.toLowerCase()==='github')!.href} target="_blank" rel="noreferrer">GitHub</a>
            )}
            {links.find(l => l.label.toLowerCase()==='linkedin') && (
              <a className="btn btn-outline" href={links.find(l => l.label.toLowerCase()==='linkedin')!.href} target="_blank" rel="noreferrer">LinkedIn</a>
            )}
            {/!* {links.find(l => l.href.startsWith('mailto:')) && (
              <a className="btn btn-outline" href={links.find(l => l.href.startsWith('mailto:'))!.href}>Email</a>
            )} *!/}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-blob" />
          {/!* Profile image provided by user; place file at public/profile.jpg *!/}
          <img className="hero-photo" src="/profile.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  )
}
*/


