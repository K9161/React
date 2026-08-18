import React from 'react'

import './NavBar.css' 
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <div className="navbar">
      <p className="logo"><span></span></p>

      <div className="links">
        <Link to="/A">
        <p>Explore</p>
        </Link>

        <p>Directory</p>
        <p>Academy</p>
        <p>Jobs</p>
        <p>Market</p>
      </div>

  

      <div className="actions">
        <p>Log in</p>
        <p>Sign up</p>
        <button className="pro">Be Pro</button>
        <button className="submit">Submit Website</button>
      </div>
    </div>
  )
}

