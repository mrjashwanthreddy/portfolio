import {experience} from '../../data/site'
import './experience.css'

export function ExperiencePage() {
    return (
        <section className="section-card">
            <h1>Professional Experience</h1>
            <div className="timeline">
                {experience.map((exp) => (
                    <article className="exp-card" key={`${exp.company}-${exp.role}`}>
                        <div className="exp-title-row">
                            <h3 style={{margin: 0}}>{exp.role} · {exp.company}</h3>
                            <span className="exp-period-loc">{exp.period}</span>
                        </div>
                        {Array.isArray(exp.summary) ? (
                            <ul className="exp-meta">
                                {exp.summary.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="exp-meta">{exp.summary}</p>
                        )}
                    </article>
                ))}
            </div>
        </section>
    )
}
