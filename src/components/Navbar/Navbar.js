import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTrashAlt, faArrowAltCircleRight, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css'



const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className="container flex-space">
                    <div className="menu-icon">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <ul className="nav-menu active">
                        <li>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/gallery">Gallery</Link>
                            <Link to="/destination">Destination</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/testimonial">Testimonial</Link>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                    <div className="login-area flex">
                        <li>
                            <Link to='/sign-in'>
                                <FontAwesomeIcon icon={faArrowAltCircleRight} />Sign In
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                <FontAwesomeIcon icon={faAddressCard} />Register
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
        </>
    );
};

export default Navbar;