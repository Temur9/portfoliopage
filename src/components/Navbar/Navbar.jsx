import React from 'react'
import '../Navbar/Navbar.scss'

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
        <div className="container">
            <div className="nav-section">
                <ul>
                    <li><a href="/#work">Work</a></li>
                    <li><a href="/#">About</a></li>
                    <li><a href="/#">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar