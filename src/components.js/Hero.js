import React from 'react';
import {Link} from 'react-router-dom';
const profile = require('./images/profile.jpg')

const Hero = () => {
    return (
        <section className='hero'>
            <div className="heroContainer">
                <div className='heroWords'>
                    <h2 className='text-white'>Full Stack Software Developer</h2>
                    <p className='text-white'>I'm a passionate and dedicated web developer, always seeking new challenges and opportunities to expand my knowledge and skills in the field.</p>
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
