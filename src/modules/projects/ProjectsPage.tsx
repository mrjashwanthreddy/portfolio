import { ProjectCard } from './ProjectCard'
import { projects } from '../../data/site'

export function ProjectsPage() {
  return (
    <section>
      <h1>Projects</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
        {projects.map((p) => (
          <ProjectCard key={p.title} title={p.title} description={p.description} tags={p.tags} />
        ))}
      </div>
    </section>
  )
}


