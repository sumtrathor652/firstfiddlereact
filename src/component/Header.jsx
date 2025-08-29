import React from 'react'

function Header() {
    return (
        <>
            <nav class="navbar bg-dark navbar-dark navbar-expand-md fixed-top " >
                <div class="container-fluid">
                    <a href="" class="navbar-brand">
                        <img src="public/logo-01.webp" alt="" class="weblogo"/>


                    </a>
                     {/* menu div start  */}
                    <div class="menu">
                        <ul class="navbar-nav">
                            <li><a href="" class="nav-link">home</a></li>
                            <li><a href="" class="nav-link">About</a></li>
                            <li><a href="" class="nav-link">brands</a></li>
                            <li><a href="" class="nav-link">our team</a></li>
                            <li><a href="" class="nav-link">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
