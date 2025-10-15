import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/site";

export function ProjectDetail() {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find((p) => p.slug === slug);

    if (!project) return <div>Project not found.</div>;

    return (
        <div className="project-detail-page" style={{ maxWidth: 600, margin: "0 auto", background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px #eee", padding: 32 }}>
            <Link to="/projects" className="back-link" style={{ marginBottom: 24, display: "inline-block" }}>&larr; Back to projects</Link>
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
                {project.image && (
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{ width: 80, height: 80, borderRadius: 12, objectFit: "cover" }}
                    />
                )}
                <h1 style={{ margin: 0, fontSize: 32 }}>{project.title}</h1>
            </div>
            <p style={{ fontSize: 18, color: "#555", marginBottom: 16 }}>
                {project.description?.[0]}
            </p>
            {project.tags && (
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                    {project.tags.map((tag) => (
                        <span key={tag} style={{ background: "#f0f0f0", borderRadius: 8, padding: "4px 12px", fontSize: 14 }}>{tag}</span>
                    ))}
                </div>
            )}
            {/* Add more fields here if needed */}
        </div>
    );
}
