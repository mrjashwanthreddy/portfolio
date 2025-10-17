import { NavLink } from 'react-router-dom'
import { profile } from '../../data/site'

export function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand">{profile.name}</NavLink>

      <div className="nav-wrap">
        {/* Centered container — can hold additional content if needed */}
      </div>

      {/* Top-right nav links pinned to the right edge of the header */}
      <nav className="nav-links-right" aria-label="Main navigation">
        <NavLink to="/">About</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact Me</NavLink>
        <a href={profile.resumeUrl} download>Resume</a>
      </nav>
    </header>
  )
}
