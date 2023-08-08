import React from 'react';
import Navbar from './nav.js';
import SmallScreensNavbar from './smallnav.js';
import './index.css';
import logo from '../../images/logo.png'


const Header = () =>{
    return(
        <header>
            <div className="header-inner">
                <a href="/"
                    smoth={true}
                    className="logo nav-link">
                    <img 
                    className='logo-img'
                    src={logo} 
                    alt="logo"/>
                </a>
                <Navbar navClass="nav-big"
                    linkClassName="nav-big-link"/>
                <SmallScreensNavbar navClass="nav-small"
                    linkClassName = "nav-small-link"
                />
            </div>
        </header>
    )
}

export default Header;