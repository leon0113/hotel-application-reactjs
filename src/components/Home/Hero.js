import React from 'react';
import Slide from './Slide';
import Data from './Data';
import './Home.css'

const Hero = () => {
    return (
        <div>
            <Slide slides={Data}></Slide>
        </div>
    );
};

export default Hero;