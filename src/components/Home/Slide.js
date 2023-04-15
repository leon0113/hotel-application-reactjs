import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Data from './Data';



const Slide = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    //! Manage slide btns
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
    return (
        <>
            <section className='slider'>
                <div className="control-btn">
                    <button className='prev' onClick={prevSlide}>
                        <FontAwesomeIcon icon={faCaretLeft} className='i'></FontAwesomeIcon>
                    </button>
                    <button className='next' onClick={nextSlide}>
                        <FontAwesomeIcon icon={faCaretRight} className='i'></FontAwesomeIcon>
                    </button>
                </div>



                {Data.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && <img src={slide.images} alt="home" />}
                        </div >
                    )
                })}
            </section>

            {/* //! form section */}
            <section className='slide-form'>
                <div className="container">
                    <h2>Enjoy your stay</h2>
                    <span>Search and Book Your Favourite Hotel</span>
                </div>
            </section>
        </>
    );
};

export default Slide; <h1>This is Slide component</h1>