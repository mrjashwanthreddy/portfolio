import { ProjectCard } from './ProjectCard'
import { projects } from '../../data/site'

export function ProjectsPage() {
  return (
    <section className="section-card">
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map((p, idx) => (
          <div key={p.title} className={idx % 2 === 1 ? 'project-card reverse' : 'project-card'}>
            <ProjectCard title={p.title} description={p.description} tags={p.tags} href={p.href} />
          </div>
        ))}
      </div>
    </section>
  )
}


