import React from 'react'
import ButtonComponent from '../../Button/Button'

import Image from 'next/image'
import './Opening.scss'

const Opening = () => {
    return (
        <section className="opening w-svw">
            <div className="shape"></div>
            <div className="container max-w-7xl">
                <div className="flex gap-8 w-full">
                    <div className="grid-item w-7/12">
                        <div className="opening-content">
                            <div className="block-text">
                                <h3 className="title aos-init aos-animate text-5xl" data-aos-duration="1000" data-aos="fade-up">Opening time Hours</h3>
                                <ul>
                                    <li data-aos-duration="1000" data-aos="fade-up" className="aos-init aos-animate"><span>Monday - Friday :</span> 7:00 am - 22:00 pm</li>
                                    <li data-aos-duration="1000" data-aos="fade-up" className="aos-init aos-animate"><span>Saturday:</span> 8:00 am - 23:00 pm</li>
                                    <li data-aos-duration="1000" data-aos="fade-up" className="aos-init aos-animate"><span>Sunday:</span> 6:30 pm - 23:00 pm</li>
                                    <li data-aos-duration="1000" data-aos="fade-up" className="aos-init"><span>Holidays:</span> Closed</li>
                                </ul>

                                <div className="d-flex flex">
                                    <ul className="mr-8">
                                        <h5 data-aos-duration="1000" data-aos="fade-up" className="aos-init">Breakfast</h5>
                                        <li data-aos-duration="1000" data-aos="fade-up" className="aos-init"><span>Monday - Friday :</span> 7:00 am - 11:30 am</li>
                                        <li data-aos-duration="1000" data-aos="fade-up" className="aos-init"><span>Saturday:</span> 8:00 am - 11:30 am</li>
                                        <li data-aos-duration="1000" data-aos="fade-up" className="aos-init"><span>Sunday:</span> 6:30 am - 11:30 am</li>
                                        <li data-aos-duration="1000" data-aos="fade-up" className="aos-init"><span>Holidays:</span> Closed</li>
                                    </ul>

                                    <ul>
                                        <h5 data-aos-duration="1000" data-aos="fade-up" className="aos-init">Lunch and Dinner</h5>
                                        <li data-aos-duration="1000" data-aos="fade-up" className="aos-init"><span>Monday - Friday :</span> 11:30 am - 22:00 pm</li>
                                        <li data-aos-duration="1000" data-aos="fade-up" className="aos-init"><span>Saturday:</span> 10:30 am - 23:00 pm</li>
                                        <li data-aos-duration="1000" data-aos="fade-up" className="aos-init"><span>Sunday:</span> 10:00 am - 23:00 am</li>
                                        <li data-aos-duration="1000" data-aos="fade-up" className="aos-init"><span>Holidays:</span> Closed</li>
                                    </ul>
                                </div>
                                <div className="mt-9">
                                    <ButtonComponent btnText='Book a Table' btnTypeClass='btnPrimary'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item w-5/12">
                        <div className="opening-img aos-init aos-animate" data-aos-duration="1000" data-aos="fade-left">
                            <Image src="/images/basilico/opening.jpg" alt="Opening" width={807} height={633}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Opening