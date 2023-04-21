import React from 'react';
const avatar = require('./images/alex_anime.png')

const About = () => {
    return (
        <section className='darkSection' id='about'>
            <div className='projectsBox about'>
                <h3 className='siteHeadings'>About Me!</h3>
                <img src={avatar} alt="avatar" />
                <div className='aboutSummary'>
                    <p> Hello! I love to build/design things that live on the internet and help people. My interest in web development began during the pandemic when I saw an opportunity to support small restaurant businesses by developing their websites using Wordpress, setting up online ordering systems, and designing menus that increased customer footfall. This experience sparked my interest in software development, and I decided to enroll in an intensive online coding bootcamp with Coding Dojo.</p>
                    <p>When I am not coding, I enjoy watching anime and reading</p>
                </div>
            </div>
        </section>
    );
}

export default About;
