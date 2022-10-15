import React from 'react';
import logo from '../Images/fintness.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt="" />
           
            <h1>GYM</h1>
        
        </nav>
    );
};

export default Header;