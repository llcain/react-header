import React from "react";
import { Link } from 'react-router-dom';
import background from "../../image/IMG_20230717_141730136.jpg";
import Layout from "../Layout/Layout";


const title = "GPS";


const Header = () => (
    <Layout>    
        <header className="header image" style={{ backgroundImage: `url(${background})`}}>
        
            <nav className="navbar">
                <Link to="/">GANNETT</Link>                
                <ul className="nav-menu">
                    <li class="nav-links">
                        <Link to='/'>Home</Link>
                    </li>
                    <li class="nav-links">
                        <Link to='/about'>About</Link>
                    </li>
                    <li class="nav-links">
                        <Link to='/whatwedo'>What We Do</Link>
                    </li>
                    <li class="nav-links">
                        <Link to='/testimonials'>Testimonials</Link>
                    </li>
                    <li class="nav-links">
                        <Link to='/contact'>Contact</Link>
                    </li>               
                </ul>
                {/* <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div> */}
            </nav>
            <div className="text-box">
                <h2>{ title }</h2>
                <p>Come to Us For Your Commercial Printing Needs!</p>
            </div>
            
            
        </header>
    </Layout>
)

export default Header;