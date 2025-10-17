import { experience } from '../../data/site'

export function ExperiencePage() {
  return (
    <section className="section-card">
      <h1>Professional Experience</h1>
      <div className="timeline">
        {experience.map((exp) => (
          <article className="exp-card" key={`${exp.company}-${exp.role}`}>
            <h3 style={{ margin: 0 }}>{exp.role} · {exp.company}</h3>
            <p className="exp-meta">{exp.period}</p>
            <p className="exp-meta">{exp.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}


