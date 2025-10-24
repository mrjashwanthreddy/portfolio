import {NavLink, useLocation} from 'react-router-dom'
// import {profile} from "../../data/site.ts";

export function Navbar() {
    const location = useLocation();
    return (
        <header className="navbar">
            {location.pathname !== '/' && (
                <NavLink to="/" className="brand">Jashwanth reddy</NavLink>
            )}

            {/*<div className="nav-wrap">*/}
            {/*    /!* Centered container — can hold additional content if needed *!/*/}
            {/*</div>*/}

            {/* Top-right nav links pinned to the right edge of the header */}
            <nav className="nav-links-center" aria-label="Main navigation">
                <NavLink to="/about">About</NavLink>
                <NavLink to="/experience">Experience</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                {/* route to the Resume page which shows a preview image and download button */}
                <NavLink to="/resume">Resume</NavLink>
                <NavLink to="/contact">Contact Me</NavLink>
            </nav>
        </header>
    )
}
