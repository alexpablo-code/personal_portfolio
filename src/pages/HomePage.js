import React from 'react';
import NavBar from '../components.js/NavBar';
import Hero from '../components.js/Hero';
import Projects from '../components.js/Projects';
import Freelance from '../components.js/Freelance';

const HomePage = () => {
    return (
        <>
            <NavBar/>
            <Hero/>
            <Projects/>
            <Freelance/>
        </>
    );
}

export default HomePage;
