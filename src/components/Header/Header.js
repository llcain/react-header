import React from "react";
import { Link } from 'react-router-dom';
// import image from '../../image/Art.jpg';

const title = "Text Box header";

const Header = () => (
    <header className="header">
        <nav className="navbar">
            <div className="logo">
                Logo
            </div>
            <ul className="nav-links">
                <Link to='/'>
                    <li>home</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/contact'>
                    <li>Contact</li>
                </Link>
                
                
            </ul>
        </nav>
        <div className="text-box">
            <h2>{ title }</h2>
        </div>
        
        {/* <img src={image} alt="Art"/> */}
        
    </header>
)

export default Header;