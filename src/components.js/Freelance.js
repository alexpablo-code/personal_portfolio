import React from 'react';
const mezcalitos = require('./images/mezcalitos_web.jpg');
const taquiza = require('./images/taquiza_web.jpg');
const saborCasero = require('./images/sabor_web.jpg')

const Freelance = () => {
    return (
        <section className='darkSection'>
            <div className='freelanceBox'>
                <h3 className='siteTitles siteHeadings '>Freelance Projects</h3>
                <div className='freelanceProjects'>
                    <div className='freelanceCard'>
                        <img src={taquiza} alt="website image" />
                        <div>
                            <h6>Taquiza Street</h6>
                            <p>Taco truck website <br/> <span className='wordpress'>Wordpress / Elementor</span></p>
                            <a href='https://taquizastreet.com/'>See live site</a>
                        </div>
                    </div>
                    <div className='freelanceCard'>
                        <img src={mezcalitos}  alt="website image" />
                        <div>
                            <h6>Mezcalitos</h6>
                            <p>Restaurant website <br/> <span className='wordpress'>Wordpress / Elementor</span></p>
                            <a href='https://mezcalitomex.com/'>See live site</a>
                        </div>
                    </div>
                    <div className='freelanceCard'>
                        <img src={saborCasero}  alt="website image" />
                        <div>
                            <h6>Sabor Casero</h6>
                            <p>Restaurant website <br/> <span className='wordpress'>Wordpress / Elementor</span></p>
                            <a href='http://elsabor-casero.com/'>See live site</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Freelance;
