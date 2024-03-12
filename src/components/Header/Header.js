import React from "react";
import { Link } from 'react-router-dom';
import background from "../../image/IMG_20230717_141730136.jpg";


const title = "GPS";


const Header = () => (
    <header className="header image" style={{ backgroundImage: `url(${background})`}}>
        <Link to="/">
            <a href="/" className="nav-logo">GANNETT</a>
        </Link>
        <nav className="navbar">
                
            <ul className="nav-menu">
                <Link to='/'>
                    <li className="nav-item">home</li>
                </Link>
                <Link to='/about'>
                    <li className="nav-item">About</li>
                </Link>
                <Link to='/whatwedo'>
                    <li className="nav-links">What We Do</li>
                </Link>
                <Link to='/testimonials'>
                    <li className="nav-links">Testimonials</li>
                </Link>
                <Link to='/contact'>
                    <li className="nav-item">Contact</li>
                </Link>   
                
            </ul>
            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
        <div className="text-box">
            <h2>{ title }</h2>
            <p>Come to Us For Your Commercial Printing Needs!</p>
        </div>
        
        
    </header>
)

export default Header;