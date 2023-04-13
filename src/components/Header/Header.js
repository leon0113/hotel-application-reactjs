import { faClock, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container flex-space">
                <div className="logo">
                    <img src="images/logo.png" alt="" />
                </div>


                <div className="contact flex-space">
                    <div className="box flex-space">
                        <div className="icons">
                            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                        </div>
                        <div className="text">
                            <h4>Working Hours:</h4>
                            <Link to='/contact'>Monday - Sunday: 9.00am - 6.00pm</Link>
                        </div>
                    </div>
                    <div className="box flex-space">
                        <div className="icons">
                            <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
                        </div>
                        <div className="text">
                            <h4>Phone: </h4>
                            <Link to='/contact'> +8801968680113</Link>
                        </div>
                    </div>
                    <div className="box flex-space">
                        <div className="icons">
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                        </div>
                        <div className="text">
                            <h4>Mail US: </h4>
                            <Link to='/contact'>tahjib.leon399@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;