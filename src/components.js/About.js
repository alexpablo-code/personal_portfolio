import React from 'react';
const avatar = require('./images/alex_anime.png')

const About = () => {
    return (
        <section className='darkSection'>
            <div className='projectsBox about'>
                <img src={avatar} alt="avatar" />
                <div>
                    <h3>About Me!</h3>
                    <p> Hello! I love to build/design things than live on the internet and help people. My interest in web development started when the pandemic struck, I saw an opportunity to leverage my skills to support small restaurant businesses by developing their websites using Wordpress, setting up online ordering systems, and designing menus that increased customer footfall. This experience sparked my interest in software development, and I decided to enroll in an intensive online coding bootcamp with Coding Dojo.</p>
                    <p>When I am not coding, I like to watch anime and read</p>
                </div>
            </div>
        </section>
    );
}

export default About;
