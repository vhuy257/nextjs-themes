'use client'
import React from 'react'
import Image from 'next/image'

import './Location.scss'
import ButtonComponent from '../../Button/Button'

const Location = () => {
    return (
        <section className="location">
            <div className="container max-w-9xl">
                <div className="flex text-center gap-8">
                    <div className="item">
                        <div className="image left aos-init aos-animate" data-aos-duration="1000" data-aos="fade-right">
                            <Image src="/images/basilico/map1.jpg" alt="" width={429} height={429}/>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <div className="block-text center">
                                <p className="subtitle aos-init aos-animate" data-aos-duration="1000" data-aos="fade-up">location</p>
                                <h3 className="title aos-init aos-animate mt-6" data-aos-duration="1000" data-aos="fade-up">how to find us? </h3>
                                <p className="text aos-init aos-animate" data-aos-duration="1000" data-aos="fade-up">
                                    It is inconvenient to not know the address, below is the address and
                                    <br/> contact of the Basilico restaurant
                                </p>
                                <h6 data-aos-duration="1000" data-aos="fade-up" className="aos-init aos-animate mt-10">call us book a table &amp; delivery:</h6>
                                <h3 className="phone aos-init aos-animate" data-aos-duration="1000" data-aos="fade-up">978-212-8600</h3>
                                <h6 data-aos-duration="1000" data-aos="fade-up" className="aos-init aos-animate">information restaurant:</h6>
                                <p className="mb-6 aos-init aos-animate" data-aos-duration="1000" data-aos="fade-up">
                                    <span>Address:</span> 4517 Washington Ave. Manchester, Kentucky 39495,
                                    USA
                                </p>
                                <p className="mb-6 aos-init" data-aos-duration="1000" data-aos="fade-up"><span>Mail:</span> Basilicofood123@gmail.com</p>
                                <p className="mb-6 aos-init" data-aos-duration="1000" data-aos="fade-up">
                                    <span>Opening Hour:</span> Mon - Fri : 9.00am - 22.00pm, Holidays :
                                    Close
                                </p>
                                <div className="mt-10">
                                    <ButtonComponent btnText='Get Directions' btnTypeClass='btnPrimary'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-12 aos-init aos-animate" data-aos-duration="1000" data-aos="fade-left">
                        <div className="image right">
                            <Image src="/images/basilico/map2.jpg" alt="" width={429} height={429}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location