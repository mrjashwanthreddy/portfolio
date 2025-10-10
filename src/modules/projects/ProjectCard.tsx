type ProjectCardProps = {
  title: string
  description: string
  tags?: string[]
  href?: string
}

export function ProjectCard({ title, description, tags = [], href }: ProjectCardProps) {
  return (
    <article className="project-card" style={{ border: '1px solid #1f2640', padding: 16, borderRadius: 12, background: '#12172a' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <h3 style={{ margin: 0 }}>{title}</h3>
        {href && (
          <a href={href} target="_blank" rel="noreferrer" style={{ color: 'var(--brand)' }}>View</a>
        )}
      </header>
      <p style={{ marginTop: 8, color: 'var(--muted)' }}>{description}</p>
      {tags.length > 0 && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
          {tags.map((tag) => (
            <span key={tag} style={{ fontSize: 12, color: 'var(--muted)', background: '#0b1020', border: '1px solid #1f2640', padding: '4px 8px', borderRadius: 999 }}>{tag}</span>
          ))}
        </div>
      )}
    </article>
  )
}


