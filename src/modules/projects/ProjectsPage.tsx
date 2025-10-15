import * as React from "react";
import { ProjectCard } from './ProjectCard'
import { projects } from '../../data/site'

export function ProjectsPage() {
  return (
    <section className="section-dark">
      <h1>Projects</h1>
      <p className="section-subtitle"></p>
      <div className="projects-grid">
          {projects.map((p) => (
              <ProjectCard
                  key={p.title}
                  title={p.title}
                  description={p.description}
                  tags={p.tags}
                  href={`/projects/${p.slug}`}
                  image={p.image}
              />
          ))}
      </div>
    </section>
  )
}


