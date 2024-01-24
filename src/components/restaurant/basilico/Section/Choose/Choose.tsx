'use client'
import React, { useState } from 'react'
import clsx from 'clsx'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'

import ButtonComponent from '../../Button/Button'
import Image from 'next/image'

import './Choose.scss'

const Choose = () => {
    const [activeTab, setActiveTab] = useState('private')

    return (
        <section className="choose w-svw">
            <div className="shape"></div>
            <div className="container max-w-9xl">
                <div className="grid grid-cols-2">
                    <div className="column">
                        <div className="choose-content">
                            <div className="block-text">
                                <p className="subtitle aos-init" data-aos-duration="1000" data-aos="fade-up">why choose us</p>
                                <h3 className="title aos-init" data-aos-duration="1000" data-aos="fade-up">We always want our customers to be satisfied </h3>

                                <div className="flat-tabs aos-init" data-aos-duration="1000" data-aos="fade-up">
                                    <ul className="menu-tab flex mb-6">
                                        <li className={clsx({
                                            'active': activeTab === 'private'
                                        })} onClick={() => setActiveTab('private')}>
                                            <h5>your private event</h5>
                                        </li>
                                        <li className={clsx({
                                            'active': activeTab === 'food'
                                        })} onClick={() => setActiveTab('food')}>
                                            <h5>food safety</h5>
                                        </li>
                                        <li className={clsx({
                                            'active': activeTab === 'luxury'
                                        })} onClick={() => setActiveTab('luxury')}>
                                            <h5>luxury space</h5>
                                        </li>
                                    </ul>

                                    <div className="content-tab">
                                        <div className={`content-inner ${activeTab === 'private' ? 'block' : 'hidden'}`}>
                                            <div className="container_inner">
                                                <p>The restaurant has a luxurious and elegant space, ensuring that
                                                    utensils, tables and chairs and other items are always clean.
                                                    Customers will feel secure and comfortable at home when dining at
                                                    our restaurant. Donec ullamcorper justo ac dolor sagittis mattis.
                                                </p>
                                                <ul className="list">
                                                    <li>Private music and space </li>
                                                    <li>atmosphere of fun </li>
                                                    <li>Experience the cozy space</li>
                                                    <li>everything is always clean and tidy </li>
                                                </ul>
                                                <div className="mt-10">
                                                    <ButtonComponent btnText='Read More' btnTypeClass='btnPrimary'/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`content-inner ${activeTab === 'food' ? 'block' : 'hidden'}`}>
                                            <div className="container_inner">
                                                <p>The restaurant has a luxurious and elegant space, ensuring that
                                                    utensils, tables and chairs and other items are always clean.
                                                    Customers will feel secure and comfortable at home when dining at
                                                    our restaurant. Donec ullamcorper justo ac dolor sagittis mattis.
                                                </p>
                                                <ul className="list">
                                                    <li>Food music and space </li>
                                                    <li>atmosphere of fun </li>
                                                    <li>Experience the cozy space</li>
                                                    <li>everything is always clean and tidy </li>
                                                </ul>
                                                <div className="mt-10">
                                                    <ButtonComponent btnText='Read More' btnTypeClass='btnPrimary'/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`content-inner ${activeTab === 'luxury' ? 'block' : 'hidden'}`}>
                                            <div className="container_inner">
                                                <p>The restaurant has a luxurious and elegant space, ensuring that
                                                    utensils, tables and chairs and other items are always clean.
                                                    Customers will feel secure and comfortable at home when dining at
                                                    our restaurant. Donec ullamcorper justo ac dolor sagittis mattis.
                                                </p>
                                                <ul className="list">
                                                    <li>Luxury music and space </li>
                                                    <li>atmosphere of fun </li>
                                                    <li>Experience the cozy space</li>
                                                    <li>everything is always clean and tidy </li>
                                                </ul>
                                                <div className="mt-10">
                                                    <ButtonComponent btnText='Read More' btnTypeClass='btnPrimary'/>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="choose-image aos-init aos-animate" data-aos-duration="1000" data-aos="fade-left">
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
                                className='h-screen'
                            >
                                <SwiperSlide>                 
                                    <div className={`slideItem`}>
                                        <AspectRatio ratio={16/17}>              
                                            <Image 
                                                src={'/images/basilico/choose.jpg'} 
                                                alt={'choose'} 
                                                width={651}
                                                height={671}
                                            />
                                        </AspectRatio>                                                          
                                    </div>                    
                                </SwiperSlide>
                                <SwiperSlide>                 
                                    <div className={`slideItem`}>
                                        <AspectRatio ratio={16/17}>              
                                            <Image 
                                                src={'/images/basilico/choose-1.jpg'} 
                                                alt={'choose'} 
                                                width={651}
                                                height={671}
                                            />
                                        </AspectRatio>                                                          
                                    </div>                    
                                </SwiperSlide>
                            </Swiper> 
                            <Button className="swiper-button-next arrow-right">
                                Next <br/> Image
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Choose