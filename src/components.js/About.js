import React from 'react';
const avatar = require('./images/alex_anime.png')

const About = () => {
    return (
        <section className='darkSection'>
            <div className='projectsBox about'>
                <img src={avatar} alt="avatar" />
                <div>
                    <h3>About Me!</h3>
                    <p>When the pandemic struck, I saw an opportunity to leverage my skills to support small restaurant businesses by developing their websites using Wordpress, setting up online ordering systems, and designing menus that increased customer footfall. This experience sparked my interest in software development, and I decided to enroll in an intensive online coding bootcamp with Coding Dojo. I love to code and watch anime</p>
                </div>
            </div>
        </section>
    );
}

export default About;
