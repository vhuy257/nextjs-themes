'use client'
import React, { useEffect } from 'react'
import './About.scss';
import Image from 'next/image';

import AOS from 'aos';
import "aos/dist/aos.css"
import ButtonComponent from '../../Button/Button';

const About = () => {

    useEffect(() => {
        AOS.init({ duration : 2000 })
    }, [])

    return (
        <section className="about">
            <div className="shape"></div>
            <div className="container max-w-7xl">
                <div className="grid grid-cols-2 gap-x-8">
                    <div className="grid-item aos-init aos-animate" data-aos-duration="1000" data-aos="fade-right">
                        <Image src={'/images/basilico/about.jpg'} alt="About us" width={500} height={633}/>
                    </div>
                    <div className="grid-item">
                        <div className="about-content">
                            <div className="block-text">
                                <p className="subtitle aos-init aos-animate" data-aos-duration="1000" data-aos="fade-up">
                                    About Restaurant
                                </p>

                                <h3 className="title aos-init aos-animate" data-aos-duration="1000" data-aos="fade-up">
                                    Enjoy An Exceptional Journey of Taste
                                </h3>

                                <p className="text aos-init aos-animate" data-aos-duration="1000" data-aos="fade-up">
                                    Our buzzy food-hall style concept is inspired by international dining
                                    styles, especially in Asia. Explore the following fast-action food stations as busy
                                    chefs perform.
                                </p>

                                <p className="text aos-init aos-animate" data-aos-duration="1000" data-aos="fade-up">
                                    Enjoy a verdant Garden to Glass experience. It’s in the view, it’s
                                    reflected in the design, and it infuses many drinks. In fact, all our delicious
                                    fresh ingredients are sustainably picked from our Jemima’s Kitchen Garden. Our
                                    flourishing range of cocktails, spirits, beers and wines are all made with integrity
                                    and offer something for every guest.
                                </p>

                                <ButtonComponent btnText='Read more about us' btnTypeClass='btnPrimary'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About