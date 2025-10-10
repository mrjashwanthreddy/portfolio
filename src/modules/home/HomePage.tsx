import { links, profile } from '../../data/site'

export function HomePage() {
  return (
    <section className="card-shell">
      <div className="hero">
        <div>
          <div className="hero-eyebrow">UI/UX DESIGNER</div>
          <h1>Hello, my name is {profile.name.split(' ')[0]}<br />is {profile.name.split(' ').slice(1).join(' ')}</h1>
          <p>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/projects">Projects</a>
            {links.find(l => l.label.toLowerCase()==='linkedin') && (
              <a className="btn btn-outline" href={links.find(l => l.label.toLowerCase()==='linkedin')!.href} target="_blank" rel="noreferrer">LinkedIn</a>
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


