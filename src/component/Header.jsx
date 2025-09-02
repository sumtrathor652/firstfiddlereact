import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <>
            {/* <!-- nav start --> */}
            <nav className="navbar  navbar-expand-md fixed-top">
                <div className="container-fluid">
                    <a href="" className="navbar-brand"><img src="https://pn-paul.netlify.app/image/ff-logo-02.png"
                        className="weblogo" /></a>
                    <a href="" className='moblogo'><img src="https://pn-paul.netlify.app/image/logo-for-mobile.png" alt="" /></a>
                    {/* mobile view */}
                    <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#a">
                        <span className='navbar-toggler-icon'></span>
                    </button>



                    {/* <!-- menu --> */}
                    <div className='navbar-collapse collapse' id='a'>
                        <ul className="navbar-nav ms-auto">
                            <li><Link to="/" className="nav-link">Home</Link></li>
                            <li><Link to="/about" className="nav-link">About</Link></li>
                            <li><Link to="/brand" className="nav-link">Brand</Link></li>
                            <li><Link to="/ourteam" className="nav-link">Our Team</Link></li>
                            <li><Link to="/contact" className="nav-link">Conatct</Link></li>
                            <li><Link to="/pressrelease" className="nav-link">Press Release</Link></li>

                        </ul>
                    </div>
                </div>
                {/* <!-- container-fluid end --> */}

            </nav>
            {/* <!-- nav end --> */}




        </>
    )
}
export default Header
