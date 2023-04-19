import React from 'react';
import {Link} from 'react-router-dom';
const profile = require('./images/profile.jpg')

const Hero = () => {
    return (
        <section className='hero'>
            <div className="heroContainer">
                <div className='heroWords'>
                    <h2 className='text-white'>Full Stack Software Developer</h2>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link to={'#'} className='btn btn-dark'>My Work</Link>
                </div>
                <div className='heroRight'>
                    <figure><img src={profile} alt="profile-img" /></figure>
                </div>

            </div>
            
        </section>
    );
}

export default Hero;
