type ProjectCardProps = {
  title: string
  description: string
  tags?: string[]
  href?: string
}

export function ProjectCard({ title, description, tags = [], href }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p>{description}</p>
        {tags.length > 0 && (
          <div className="chip-row">
            {tags.map((tag) => (
              <span className="chip" key={tag}>{tag}</span>
            ))}
          </div>
        )}
        <div className="project-actions">
          {href && (
            <a className="btn btn-outline" href={href} target="_blank" rel="noreferrer">View Project</a>
          )}
        </div>
      </div>
      <div className="project-media" aria-hidden="true" />
    </article>
  )
}


