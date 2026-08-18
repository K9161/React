import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <Link className="navbar-brand" to="/A">Header</Link>


    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-Link active" to ="home">Home</Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-Link active" to ="navbar">Navbar</Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-Link active" to ="A">A</Link>
          
        </li>
      </ul>

    </div>

  </div>
</nav>
    </div>
  )
}
