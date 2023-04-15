import React from 'react';
import './About.css'

const AboutCard = () => {
    return (
        <>
            <div className="aboutCard mtop flex-space">
                <div className="row row1">
                    <h4>About Us</h4>
                    <h1>We <span>provide solutions</span> to grow your business</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugit aperiam et corrupti deserunt eius dolorum numquam recusandae repellat commodi enim, aliquam aut obcaecati, architecto rem at? Quisquam quis amet labore reprehenderit laborum ipsam, corrupti vitae hic vel. Natus quisquam reiciendis earum accusantium obcaecati cupiditate deleniti veniam in quas, voluptatem quidem modi dolor adipisci ut neque. Quaerat voluptatem necessitatibus perferendis minima unde consequuntur quas, minus iusto nobis vero, molestiae dicta soluta dolore natus eius quisquam ea! Necessitatibus ab eum, molestias magnam recusandae illo voluptate corrupti rem nostrum veritatis ducimus voluptatem pariatur aspernatur magni eius animi expedita omnis excepturi reiciendis modi.</p>
                    <button className='secondary-btn'>
                        Explore more
                    </button>
                </div>
                <div className="row image">
                    <img src="/images/about.jpg" alt="" />
                </div>
            </div>
        </>
    );
};

export default AboutCard;