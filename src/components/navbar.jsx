import React from 'react';
import logo from '../images/airbnb.png';

function Nav() {
    return (
        <nav className="nav">
            <img src={logo} alt="Airbnb logo" className='airbnb-logo' />
        </nav>
    );
}

export default Nav;