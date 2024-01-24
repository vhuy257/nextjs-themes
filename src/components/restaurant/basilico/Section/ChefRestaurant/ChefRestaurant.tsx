'use client'
import React from 'react'
import Image from 'next/image'
import ButtonComponent from '../../Button/Button'

import './ChefRestaurant.scss'

const ChefRestaurant = () => {
    return (
        <section className='chef-restaurant w-svw'>
            <div className="container max-w-9xl">
                <div className="flex">
                    <div className="px-4 w-7/12">
                        <div className="chef-restaurant-image">
                            <div className="group-img">
                                <Image src="/images/basilico/chef1.jpg" alt="" data-aos-duration="1000" data-aos="fade-up" className="aos-init aos-animate w-1/2 object-cover inline-block" width={424} height={575}/>
                                <Image src="/images/basilico/chef2.jpg" alt="" data-aos-duration="1000" data-aos="fade-up" className="aos-init aos-animate w-1/2 object-cover inline-block" width={424} height={575}/>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 w-5/12">
                        <div className="chef-restaurant-content">
                            <div className="block-text">
                                <p className="subtitle aos-init aos-animate" data-aos-duration="1000" data-aos="fade-up">our chef restaurant</p>
                                
                                <h3 className="title aos-init aos-animate" data-aos-duration="1000" data-aos="fade-up">The key behin delicious food </h3>

                                <p className="text aos-init aos-animate" data-aos-duration="1000" data-aos="fade-up">
                                    We see our customers as invited guests to a party, and we are the hosts.
                                    It’s our job every day to make every important aspect of the customer experience a
                                    little bit better. Simple and balanced. Alexander Petillo brings together flavors
                                    and specialties.
                                </p>

                                <ButtonComponent btnText='View All Chef' btnTypeClass='btnPrimary'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChefRestaurant