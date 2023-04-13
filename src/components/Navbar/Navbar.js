import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTrashAlt, faArrowAltCircleRight, faAddressCard, faCross } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Header from '../Header/Header';



const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className='navbar'>
                <div className="container flex-space">
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FontAwesomeIcon icon={faCross} /> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>

                        <li> <Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                        <li>   <Link to="/about" onClick={closeMobileMenu}>About</Link></li>
                        <li>  <Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link></li>
                        <li>  <Link to="/destination" onClick={closeMobileMenu}>Destination</Link></li>
                        <li>  <Link to="/blog" onClick={closeMobileMenu}>Blog</Link></li>
                        <li> <Link to="/testimonial" onClick={closeMobileMenu}>Testimonial</Link></li>

                        <li> <Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link></li>
                    </ul>
                    <div className="login-area flex">
                        <li>
                            <Link to='/sign-in'>
                                Sign In
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                Register
                            </Link>
                        </li>
                        <li>
                            <Link to='/quote'>
                                <button className='primary-btn'> Request a Quote</button>
                            </Link>
                        </li>
                    </div>
                </div>

            </nav>

            <Header></Header>
        </>
    );
};

export default Navbar;