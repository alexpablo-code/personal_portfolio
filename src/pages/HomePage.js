import React from 'react';
import NavBar from '../components.js/NavBar';
import Hero from '../components.js/Hero';
import Projects from '../components.js/Projects';
import Freelance from '../components.js/Freelance';
import Tools from '../components.js/Tools';
import About from '../components.js/About';
import Contact from '../components.js/Contact';
import Footer from '../components.js/Footer';

const HomePage = () => {
    return (
        <>
            <NavBar/>
            <Hero/>
            <Tools/>
            <Projects/>
            <Freelance/>
            <About/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default HomePage;
