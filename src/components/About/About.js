import React from 'react';
import AboutCard from './AboutCard';

const About = () => {
    return (
        <>
            <section className='about top'>
                <div className="container">
                    <AboutCard></AboutCard>
                </div>
            </section>

            <section className='features top'>
                <div className="container aboutCard flex-space">
                    <div className="row row1">
                        <h1>Our <span>Features</span></h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur corrupti facilis culpa dolores officiis assumenda impedit sed tenetur veritatis, repudiandae quia sunt quod maxime error necessitatibus nemo at cumque pariatur ad magnam tempora nesciunt? Facere nulla deleniti ratione mollitia repellendus odio molestiae odit neque impedit veritatis ducimus inventore iste magnam a error fuga nihil distinctio esse voluptates tempora aperiam, repellat sed. Aspernatur architecto porro, similique hic praesentium, nostrum cumque distinctio a reiciendis ipsam vitae dolorem repellat voluptatibus? Necessitatibus explicabo, natus laboriosam, quisquam earum asperiores, quasi nobis sequi odio aut similique ab repellendus non autem cupiditate dolorum exercitationem est doloremque nisi.</p>
                        <button className='secondary-btn'>
                            Explore more
                        </button>
                    </div>
                    <div className="row image">
                        <img src="/images/about.jpg" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;