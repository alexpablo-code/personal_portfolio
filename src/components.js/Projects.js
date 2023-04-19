import React from 'react';
const taquizaStreet = require('./images/taquiza_street.jpg')
const munchiesRev = require('./images/muchiesrev.jpg')
const recipeShare = require('./images/recipes_share.jpg')

const Projects = () => {
    return (
        <section className='projectsSection'>
            <div className='projectsBox'>
                <h3 className='siteTitles siteHeadings'>Projects</h3>
                <div className="projectsContainer">
                    <div className="projectCard">
                        <img src={taquizaStreet} alt="taquiza project image" />
                        <div className='projectInfo'>
                            <h4>Taquiza Street</h4>
                            <p>A full stack Web application that allows restaurant owners to easily create products to showcase on their website.</p>
                            <div className="projectsTech">
                                <h6>MongoDB | Express.js | React.js | Node.js</h6>
                            </div>
                        </div>
                    </div>
                    <div className="projectCard">
                        <img src={munchiesRev} alt="taquiza project image" />
                        <div className='projectInfo'>
                            <h4>MunchiesRev</h4>
                            <p>A yelp-inspired restaurant review app that allows users to view, post, and share reviews on restaurants.</p>
                            <div className="projectsTech">
                                <h6>MongoDB | Express.js | React.js | Node.js</h6>
                            </div>
                        </div>
                    </div>
                    <div className="projectCard">
                        <img src={recipeShare} alt="taquiza project image" />
                        <div className='projectInfo'>
                            <h4>Recipe Share</h4>
                            <p>Recipe sharing application</p>
                            <div className="projectsTech">
                                <h6>Python | Flask | MySQL</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
