import React from 'react'
import logoLarge from '../img/logoLarge.png'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="columns">
          <div className="column page-title">
            <h1>Oak Tree Primary<span>Code Club</span></h1>
          </div>
          <div className="column logo">
            <img
              className="logo-large"
              src={logoLarge}
            />
          </div>
        </div>
        
      </div>
    </header>
  )
}

export default Header
