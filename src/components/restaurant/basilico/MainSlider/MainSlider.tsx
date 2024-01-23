'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import ButtonComponent from '../Button/Button';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

import './MainSlider.scss'
import 'swiper/css/effect-fade'

const MainSlider = () => {
    return (
        <div className="max-h-[calc(100vh-160px)] w-full">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                effect="fade"
                spaceBetween={50}
                slidesPerView={1}                        
                autoplay={{
                    delay: 0
                }}                         
                speed={4000}              
                loop={true}
                grabCursor={true}        
                className='h-screen'
            >
                <SwiperSlide className='w-vsw h-[calc(100vh-160px)] relative'>                 
                    <div className={`slideItem`}>
                        <div className="slide-banner absolute -z-1 left-0 right-0 top-0 bottom-0 w-full max-h-[calc(100vh-160px)]">
                            <AspectRatio ratio={16/9}>              
                                <Image 
                                    src={'/images/basilico_main_slider/img_slider_1.jpg'} 
                                    alt={'img_slider_1'} 
                                    fill 
                                    className="w-auto max-h-[calc(100vh-160px)] object-cover brightness-50"
                                />
                            </AspectRatio>
                        </div>                        
                        <div className="container mx-auto">
                            <div className="content-box relative z-10 pt-40">
                                <h2 className="title">It’s time to enjoy <br/> the finer things in life. </h2>
                                <p className="sub-title">
                                    Craving some delicious Paris food? Maybe you’re in the mood
                                    for a juicy steak? No matter what kind of meal you have in mind.
                                </p>
                                <ButtonComponent btnText='Discovery Menu' btnTypeClass='btnDefault'/>
                            </div>
                            <div className="contact-info">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 20 20" height="512" viewBox="0 0 20 20" width="512"><g><path d="m10.1 0c-5.8 0-10.1 2.3-10.1 5v.7c0 .7.6 1.2 1.3 1.3h2.6c.9 0 1.4-1.1 1.1-2-.5-.7 0-1.7.8-1.9 2.8-.6 5.6-.6 8.5 0 .9.2 1.3 1.1.8 1.9-.3.9.2 1.9 1.1 2h2.6c.7 0 1.3-.6 1.3-1.3v-.7c-.1-2.8-4.5-5-10-5z"></path><g><path d="m15.3 7.5c-.2-.3-.5-.5-.9-.5h-1.4v-1.5c0-.3-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5v1.5h-2v-1.5c0-.3-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5v1.5h-1.4c-.4 0-.7.2-.9.5-1.5 2.6-3.7 5.9-3.7 11.5 0 .5.4 1 1 1h16c.6 0 1-.5 1-1 0-5.6-2.3-9.1-3.7-11.5zm-5.3 10.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path><circle cx="10" cy="14" r="2"></circle></g></g></svg>
                                </div>
                                <div className="left ml-8">
                                    <h6>call us book a table &amp; delivery</h6>
                                    <h4>978-212-8600</h4>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </SwiperSlide>
            </Swiper>   
        </div>
    )
}

export default MainSlider
