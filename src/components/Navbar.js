import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Resume from './Matt Huang Resume.pdf';
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click); 
    const closeMobileMenu = () => setClick(false); 
    return(
        <> 
        <nav className = "navbar">
            <div className = "navbar-container">
                <Link to = "/personal-website" className = "navbar-logo">
                    bools <i className = 'fab fa-typo3'></i>
                </Link> 
        
                <div className = 'menu-icon' onClick = {handleClick}>
                    <i className = {click ? 'fas fa-times':'fas fa-bars'} />
                </div>

                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className = 'nav-item'>
                        <Link to = '/personal-website' className = 'nav-links' onClick = {closeMobileMenu}> 
                        Home
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to = '/personal-website/projects' className = 'nav-links' onClick = {closeMobileMenu}> 
                        Projects
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to = '/personal-website/leadership' className = 'nav-links' onClick = {closeMobileMenu}> 
                        Leadership 
                        </Link>
                    </li>

                    <li className = 'nav-item'> 
                        <a href = {Resume} className = 'nav-links' onClick = {closeMobileMenu}> Resume</a> 
                    </li>


                </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar; 