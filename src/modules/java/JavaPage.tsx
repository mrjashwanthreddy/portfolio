import React from 'react'
import {NavLink, useNavigate, useParams, Link} from 'react-router-dom'
import './java.css'
import {javaSections, findPostBySlug, firstPost, allPosts, type JavaPost} from './javaData'

// Eagerly import any markdown files under ./content via Vite's glob (if present)
// This allows easy authoring of posts in Markdown. Keys are relative paths like './content/welcome.md'
const mdModules = import.meta && (import.meta as any).glob('./content/**/*.md', {eager: true, as: 'raw'}) || {}

// Minimal Markdown to HTML (very small subset): headings, lists, code blocks, paragraphs
function miniMarkdownToHtml(src: string): string {
    const lines = src.split(/\r?\n/)
    const out: string[] = []
    let inCode = false
    let listOpen = false
    for (const lineRaw of lines) {
        const line = lineRaw
        if (line.startsWith('```')) {
            if (inCode) {
                out.push('</code></pre>')
                inCode = false
            } else {
                out.push('<pre><code>')
                inCode = true
            }
            continue
        }
        if (inCode) {
            out.push(line.replaceAll('<', '&lt;').replaceAll('>', '&gt;'));
            continue
        }

        if (/^\s*-\s+/.test(line)) {
            if (!listOpen) {
                out.push('<ul>');
                listOpen = true
            }
            const item = line.replace(/^\s*-\s+/, '')
            out.push(`<li>${item}</li>`)
            continue
        } else if (listOpen && line.trim() === '') {
            out.push('</ul>');
            listOpen = false;
            continue
        }

        if (/^#\s+/.test(line)) {
            out.push(`<h1>${line.replace(/^#\s+/, '')}</h1>`);
            continue
        }
        if (/^##\s+/.test(line)) {
            out.push(`<h2>${line.replace(/^##\s+/, '')}</h2>`);
            continue
        }
        if (/^###\s+/.test(line)) {
            out.push(`<h3>${line.replace(/^###\s+/, '')}</h3>`);
            continue
        }

        if (line.trim() === '') {
            out.push('');
            continue
        }
        out.push(`<p>${line}</p>`)
    }
    if (listOpen) out.push('</ul>')
    return out.join('\n')
}

export default function JavaPage() {
    const {slug} = useParams()
    const navigate = useNavigate()
    const [tocOpen, setTocOpen] = React.useState(true)
    const [query, setQuery] = React.useState('')

    // pick current post or default to first
    const current = findPostBySlug(slug) || firstPost()

    // Track collapsed state per section id
    const initialCollapsed = React.useMemo(() => {
        const map: Record<string, boolean> = {}
        for (const sec of javaSections) {
            map[sec.id] = false
        }
        return map
    }, [])
    const [collapsed, setCollapsed] = React.useState<Record<string, boolean>>(initialCollapsed)

    const toggleSection = (id: string) => setCollapsed(prev => ({...prev, [id]: !prev[id]}))

    // keep URL in sync if slug is missing
    React.useEffect(() => {
        if (!slug && current) {
            navigate(`/java/${current.slug}`, {replace: true})
        }
    }, [slug])

    // Expand the section containing the current post automatically
    React.useEffect(() => {
        const secWithCurrent = javaSections.find(sec => sec.items.some(i => i.slug === current.slug))
        if (secWithCurrent) {
            setCollapsed(prev => ({...prev, [secWithCurrent.id]: false}))
        }
    }, [current.slug])

    if (!current) {
        return <div className="java-article">No content found.</div>
    }

    // Flatten all posts for quick index lookups and filtering
    const posts: JavaPost[] = allPosts
    const currentIndex = posts.findIndex(p => p.slug === current.slug)
    const prev = currentIndex > 0 ? posts[currentIndex - 1] : undefined
    const next = currentIndex >= 0 && currentIndex < posts.length - 1 ? posts[currentIndex + 1] : undefined

    // Filtered view for the sidebar based on query
    const normalizedQuery = query.trim().toLowerCase()
    const filteredSections = normalizedQuery
        ? javaSections
            .map(sec => ({
                ...sec,
                items: sec.items.filter(i =>
                    i.title.toLowerCase().includes(normalizedQuery) || i.slug.toLowerCase().includes(normalizedQuery)
                ),
            }))
            .filter(sec => sec.items.length > 0)
        : javaSections

    // Resolve Markdown content if mdPath is provided
    const mdSource = (current as any).mdPath ? mdModules[(current as any).mdPath] as string | undefined : undefined

    return (
        <div className={`java-page ${tocOpen ? '' : 'toc-hidden'}`}>
            {tocOpen && (
                <aside className="java-toc">
                    <div className="toc-header">
                        <button className="toc-toggle" onClick={() => setTocOpen(false)} aria-label="Hide contents">
                            ☰ Contents
                        </button>
                        <input
                            className="toc-search-input"
                            type="text"
                            placeholder="Search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            aria-label="Search topics"
                        />
                    </div>

                    {filteredSections.length === 0 && (
                        <div className="toc-no-results">No matches found.</div>
                    )}

                    <div className="toc-body">
                        {filteredSections.map((section, idx) => {
                            const isCollapsed = collapsed[section.id]
                            return (
                                <div className="section" key={section.id}>
                                    <button
                                        type="button"
                                        className="section-toggle"
                                        aria-expanded={!isCollapsed}
                                        aria-controls={`sec-${section.id}`}
                                        onClick={() => toggleSection(section.id)}
                                    >
                                        <span className="caret">{isCollapsed ? '▸' : '▾'}</span>
                                        <span className="title-text">{idx + 1}. {section.title}</span>
                                    </button>
                                    <div id={`sec-${section.id}`} hidden={isCollapsed}>
                                        {section.items.map(item => (
                                            <NavLink
                                                key={item.slug}
                                                to={`/java/${item.slug}`}
                                                className={({isActive}) => isActive ? 'active' : ''}
                                                onClick={() => setQuery('')}
                                            >
                                                {item.title}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </aside>
            )}

            <article className="java-article">
                {!tocOpen && (
                    <div style={{marginBottom: 8}}>
                        <button className="toc-toggle" onClick={() => setTocOpen(true)} aria-label="Show contents">
                            ☰ Contents
                        </button>
                    </div>
                )}

                {/* Render either Markdown (basic) or JSX content */}
                {mdSource ? (
                    <div dangerouslySetInnerHTML={{__html: miniMarkdownToHtml(mdSource)}}/>
                ) : (
                    current.content
                )}

                <div className="article-nav">
                    {prev ? (
                        <Link to={`/java/${prev.slug}`}
                              aria-label={`Previous: ${prev.title}`}>&larr; {prev.title}</Link>
                    ) : <span/>}
                    <span className="spacer"/>
                    {next ? (
                        <Link to={`/java/${next.slug}`} aria-label={`Next: ${next.title}`}>{next.title} &rarr;</Link>
                    ) : <span/>}
                </div>
            </article>
        </div>
    )
}
