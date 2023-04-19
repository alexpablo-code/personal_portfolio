import React from 'react';
const emailIcon = require('./images/email.png');
const linkedIcon = require('./images/linkedin.png');
const instagramIcon = require('./images/instagram.png');
const githubIcon = require('./images/github.png');

const Contact = () => {
    return (
        <section className='darkSection contact' id='contact'>
            <div className='projectsBox contactInfoBox'>
                <h3 className='siteHeadings'>Contact</h3>
                <h6>Let's connect</h6>
                <p>I am currently looking for new opportunities, my inbox is always open. If you wan to get in touch, talk to me about a project collaboration or just be friends find me here</p>
                <div className='socialsContainer'>
                    
                    <img src={emailIcon} onClick={() => window.open('mailto:alex@aldentedigitals.com')} alt="email icon" />
                    <img src={linkedIcon} onClick={() => window.open('https://www.linkedin.com/in/alex-pablo/')} alt="linkedin icon" />
                    <img src={instagramIcon} onClick={() => window.open('https://www.instagram.com/dark.mode.dev/')} alt="instagram icon" />
                    <img src={githubIcon} onClick={() => window.open('https://github.com/alexpablo-code')} alt="github icon " />
                </div>

            </div>
            
        </section>
    );
}

export default Contact;
