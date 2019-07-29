import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper grey darken-3">
          <div className="container">
            <Link to='/' className='brand-logo'>묨</Link>
          </div>
        </div>
      </nav>
    </div>
	)
}

export default Navbar