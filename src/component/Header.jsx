import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <>
            <nav className="navbar bg-dark navbar-dark navbar-expand-md fixed-top " >
                <div className="container-fluid">
                    <a href="" className="navbar-brand">
                        <img src="https://pn-paul.netlify.app/image/ff-logo-02.png" alt="" className="weblogo"/>


                    </a>
                     {/* menu div start  */}
                    <div className="menu">
                        <ul className="navbar-nav">
                            <li><Link to="/" className="nav-link">home</Link></li>
                            <li>< Link to="/about" className="nav-link">About</Link></li>
                            <li><Link to="/brand" className="nav-link">brands</Link></li>
                            <li><Link to="/ourteam" className="nav-link">our team</Link></li>
                            <li><Link to="/contact" className="nav-link">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header
