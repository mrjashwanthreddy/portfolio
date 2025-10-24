import { links } from '../../data/site'
import './home.css'
import { JSX } from 'react'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export function HomePage(): JSX.Element {
  const githubHref = links.find(l => l.label.toLowerCase() === 'github')?.href
  const linkedinHref = links.find(l => l.label.toLowerCase() === 'linkedin')?.href

  return (
    <section className="home-landing" aria-label="Homepage hero">
      <div className="landing-left expanded-left">
        <div className="landing-inner">
          <div className="eyebrow">Hey, I’m Jashwanth reddy</div>
          <h6 className="hero-name">Software Engineer</h6>
          <h6 className="hero-name">Java & Spring Boot Developer</h6>

          <div className="cta-row">
            {githubHref && (
              <a
                className="home-btn home-btn-github"
                href={githubHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <SiGithub className="home-btn-icon" />
                <span>GitHub</span>
              </a>
            )}
            {linkedinHref && (
              <a
                className="home-btn home-btn-linkedin"
                href={linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="home-btn-icon" />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="landing-right most-right">
        <img
          className="landing-photo"
          src="/profile.jpg"
          alt="John Doe portrait"
        />
      </div>
    </section>
  )
}
