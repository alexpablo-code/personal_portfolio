import React from 'react';

const NavBar = () => {
    return (
        <header className='nav-background navbar navbar-expand-md bg-dark navbar-dark'>
            <div className='navBar container-fluid container'>
                <a href="#" className='navbar-brand siteLogo'><h1>Alex Pablo</h1></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse d-flex justify-content-end' id='navbarNav'>
                    <ul className='navLinks navbar-nav'>
                        <li className='nav-item'><a className='nav-link' href="#">Home</a></li>
                        <li className='nav-item'><a className='nav-link' href="#">Projects</a></li>
                        <li className='nav-item'><a className='nav-link' href="#">About</a></li>
                        <li className='nav-item'><a className='nav-link' href="#">Contact</a></li>
                    </ul>
                    <a href="#" className='actionBtn btn btn-info'>Get Started</a>

                </div>

            </div>
            
        </header>
        
    );
}

export default NavBar;
