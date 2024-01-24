'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import { IoStarSharp } from "react-icons/io5";

import Image from 'next/image';
import './Testimonials.scss'

const Testimonials = () => {
    return (
        <section className="testimonials w-svw">
            <div className="container max-w-9xl text-center">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}                                                            
                    speed={1000}              
                    navigation={{
                        enabled: true,
                        nextEl: ".arrow-right", 
                    }}   
                    loop={true}
                    grabCursor={false}        
                >
                    <SwiperSlide>                 
                        <div className="testimonials-content">
                            <Image src="/images/basilico/quote.png" alt="" width={47} height={36} className='mx-auto'/>

                            <h4>
                                Good restaurant, delicious food, classy atmosphere
                            </h4>

                            <p>
                                Please thank your team for their professional, efficient and friendly service
                                on Sat night. The chefs smashed it <br/> and the drinks flowed freely!
                                Everyone was impressed and were quite taken with how cost effective it was
                                to <br/> have Ochre do what you did.
                            </p>

                            <ul className="rating">
                                <li><IoStarSharp /></li>
                                <li><IoStarSharp /></li>
                                <li><IoStarSharp /></li>
                                <li><IoStarSharp /></li>
                                <li><IoStarSharp /></li>
                            </ul>

                            <h5>Margaret - Food critic</h5>
                        </div>                  
                    </SwiperSlide>
                    <SwiperSlide>                 
                        <div className="testimonials-content">
                            <Image src="/images/basilico/quote.png" alt="" width={47} height={36} className='mx-auto'/>

                            <h4>
                                Good restaurant, delicious food, classy atmosphere
                            </h4>
                            
                            <p>
                                Please thank your team for their professional, efficient and friendly service
                                on Sat night. The chefs smashed it <br/> and the drinks flowed freely!
                                Everyone was impressed and were quite taken with how cost effective it was
                                to <br/> have Ochre do what you did.
                            </p>

                            <ul className="rating">
                                <li><IoStarSharp /></li>
                                <li><IoStarSharp /></li>
                                <li><IoStarSharp /></li>
                                <li><IoStarSharp /></li>
                                <li><IoStarSharp /></li>
                            </ul>

                            <h5>Margaret - Food critic</h5>
                        </div>                   
                    </SwiperSlide>
                </Swiper> 
            </div>
        </section>
    )
}

export default Testimonials