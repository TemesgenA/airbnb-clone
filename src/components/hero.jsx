import React from 'react';
import heroBanner from '../images/Group 77.png';

function Hero() {
    return (
        <div className="hero">
            <img src={heroBanner} alt="Heros banner" className='hero-image' />
            <h1 className='hero-heading'>Online Experiences</h1>
            <p className='hero-content'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </div>
    );
}

export default Hero;