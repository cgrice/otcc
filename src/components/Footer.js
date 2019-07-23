import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2>Oak Tree Code Club</h2>
              <p>contact@oaktreecode.club</p>
              <p>01234 123123</p>
            </div>
            <div className="column">
              <h3>Code Club</h3>
              <p><Link to="/">Home</Link></p>
              <p><Link to="/get-involved">Get Involved</Link></p>
              <p><Link to="/projects">Projects</Link></p>
              <p><Link to="/blog">Blog</Link></p>
            </div>
            <div className="column">
                <h3>Links</h3>
                <p><a href="http://www.oaktree.stockport.sch.uk/">Oak Tree Primary School</a></p>
                <p><a href="https://codeclub.org/en/">codeclub.org</a></p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
