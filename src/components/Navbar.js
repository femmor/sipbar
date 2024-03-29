import React from 'react'
import logo from '../sipbar-logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="sipbar-logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to='/'>
              home
            </Link>
          </li>
          <li>
            <Link to='/about'>
              about
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
