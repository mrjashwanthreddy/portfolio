import { experience } from '../../data/site'

export function ExperiencePage() {
  return (
    <section>
      <h1>Experience</h1>
      <div style={{ display: 'grid', gap: 16 }}>
        {experience.map((exp) => (
          <article key={`${exp.company}-${exp.role}`} style={{ border: '1px solid #1f2640', padding: 16, borderRadius: 12, background: '#12172a' }}>
            <h3 style={{ margin: 0 }}>{exp.role} · {exp.company}</h3>
            <p style={{ margin: '8px 0', color: 'var(--muted)' }}>{exp.period}</p>
            <p style={{ margin: '8px 0', color: 'var(--muted)' }}>{exp.summary}</p>
            {exp.links && (
              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                {exp.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" style={{ color: 'var(--brand)' }}>{l.label}</a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}


