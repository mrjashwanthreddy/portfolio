import { links, profile } from '../../data/site'

export function HomePage() {
  return (
    <section>
      <h1>Hi, I'm {profile.name}</h1>
      <p>{profile.bio}</p>
      <div style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
        {links.map((l) => (
          <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{ color: 'var(--brand)' }}>
            {l.label}
          </a>
        ))}
        <a href={profile.resumeUrl} download style={{ color: 'var(--brand)' }}>Download Resume</a>
      </div>
    </section>
  )
}


