import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/site";

export function ProjectDetail() {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find((p) => p.slug === slug);

    if (!project) return <div>Project not found.</div>;

    // Present a richer detail page: header with image, tech chips, full description
    // and a two-column area for Features / Challenges / Learnings / Links.
    return (
        <div className="project-detail-page section-card" style={{ maxWidth: 1020, margin: "0 auto" }}>
            <Link to="/projects" className="back-link" style={{ marginBottom: 18, display: "inline-block", color: "#3b3f5c" }}>&larr; Back to projects</Link>

            <div className="project-header">
                {project.image && (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="project-hero"
                    />
                )}
                <div className="project-meta">
                    <h1 className="project-title-large">{project.title}</h1>
                    {project.description?.[0] && (
                        <p className="lead">{project.description[0]}</p>
                    )}

                    {project.tags && project.tags.length > 0 && (
                        <div className="chip-row" style={{ marginTop: 12 }}>
                            {project.tags.map((tag) => (
                                <span key={tag} className="chip">{tag}</span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="project-grid">
                <div>
                    <h3>Features</h3>
                    {project.description && project.description.length > 0 ? (
                        <ul>
                            {project.description.map((d, i) => (
                                <li key={i} style={{ marginBottom: 6 }}>{d}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="muted">No detailed features available.</p>
                    )}

                    <h3 style={{ marginTop: 18 }}>Learnings</h3>
                    <ul>
                        {/* Use the description bullets as learnings when no separate data is present */}
                        {project.description && project.description.slice(0, 3).map((d, i) => (
                            <li key={i} style={{ marginBottom: 6 }}>{d}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3>Challenges</h3>
                    <ul>
                        {/* Lightweight heuristic: show tech-related challenges derived from tags if present */}
                        {project.tags && project.tags.length > 0 ? (
                            project.tags.slice(0, 5).map((t) => (
                                <li key={t} style={{ marginBottom: 6 }}>{`Implementing and integrating ${t} in a production-ready way.`}</li>
                            ))
                        ) : (
                            <li>Details not provided.</li>
                        )}
                    </ul>

                    <h3 style={{ marginTop: 18 }}>Links</h3>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 8 }}>
                        {project.href ? (
                            // if href looks like an external URL show Live, otherwise treat as image/path
                            (project.href.startsWith('http') ? (
                                <a className="btn btn-primary" href={project.href} target="_blank" rel="noreferrer">Live</a>
                            ) : (
                                <a className="btn btn-outline" href={project.github} target="_blank" rel="noreferrer">View</a>
                            ))
                        ) : null}

                        {/* If there's an image we can provide a view link */}
                        {project.image ? (
                            <a className="btn btn-outline" href={project.image} target="_blank" rel="noreferrer">Screenshot</a>
                        ) : null}

                        {/* Placeholder for GitHub if the data later contains a github link */}
                        {/* {project.github && (<a className="btn btn-outline" href={project.github} target="_blank" rel="noreferrer">Github</a>)} */}
                    </div>
                </div>
            </div>

        </div>
    );
}
