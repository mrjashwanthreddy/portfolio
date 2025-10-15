import {Link} from "react-router-dom";

type ProjectCardProps = {
    title: string
    description: string[]
    tags?: string[]
    href?: string
    image?: string
}

export function ProjectCard({title, description, tags = [], href, image}: ProjectCardProps) {
    const summary = description[0]
    return (
        <div className="project-tile">
            <Link className="tile-media" to={href ?? '#'} aria-label={title}>
                {image ? (
                    <img
                        src={image}
                        alt={`${title} screenshot`}
                        className="project-image"
                        loading="lazy"
                    />
                ) : null}
            </Link>
            <div className="tile-body">
                <h3 className="project-title">{title}</h3>
                {summary && <p className="project-summary">{summary}</p>}
                {tags.length > 0 && (
                    <div className="chip-row">
                        {tags.map((tag) => (
                            <span className="chip" key={tag}>
                {tag}
              </span>
                        ))}
                    </div>
                )}
                <div className="project-actions">
                    {href && (
                        <Link className="btn btn-outline btn-hover-brand" to={href}>
                            Show More →
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}


