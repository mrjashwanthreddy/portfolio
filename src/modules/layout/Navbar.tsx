import { NavLink } from 'react-router-dom'
import { profile } from '../../data/site'

export function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-wrap">
        <NavLink to="/" className="brand">{profile.name.split(' ')[0]}</NavLink>
        <div className="nav-links">
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <a href={profile.resumeUrl} download>Resume</a>
        </div>
      </nav>
    </header>
  )
}


