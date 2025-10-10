import { links } from '../../data/site'

export function HomePage() {
  return (
    <section className="card-shell">
      <div className="hero">
        <div>
          {/* <div className="hero-eyebrow">Java Developer</div> */}
          <h1>Hello, I'm a<br />Software Engineer</h1>
          <p>Java Developer with 3+ years of experience in Java, Spring Boot, Microservice software and back-end development, seeking full-time back-end roles to design and build high-performing scalable applications using automation,
          containerization, and cloud best practices.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/projects">Projects</a>
            {links.find(l => l.label.toLowerCase()==='github') && (
              <a className="btn btn-outline" href={links.find(l => l.label.toLowerCase()==='github')!.href} target="_blank" rel="noreferrer">GitHub</a>
            )}
            {links.find(l => l.label.toLowerCase()==='linkedin') && (
              <a className="btn btn-outline" href={links.find(l => l.label.toLowerCase()==='linkedin')!.href} target="_blank" rel="noreferrer">LinkedIn</a>
            )}
            {links.find(l => l.href.startsWith('mailto:')) && (
              <a className="btn btn-outline" href={links.find(l => l.href.startsWith('mailto:'))!.href}>Email</a>
            )}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-blob" />
          {/* Profile image provided by user; place file at public/profile.jpg */}
          <img className="hero-photo" src="/profile.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  )
}


