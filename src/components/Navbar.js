import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-menu">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/get-involved" className="nav-item">Get Involved</Link>
          <Link to="/projects" className="nav-item">Projects</Link>
          <Link to="/blog" className="nav-item">Blog</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
