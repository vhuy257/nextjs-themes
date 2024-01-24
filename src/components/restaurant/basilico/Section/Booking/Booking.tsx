'use client'
import React from 'react'

import './Booking.scss'
import ButtonComponent from '../../Button/Button'

const Booking = () => {
    return (
        <section className="booking w-svw" style={{backgroundImage: 'url("/images/basilico/booking.jpg")'}}>
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="booking-content flex gap-8 items-center">
                    <div className="block-text style-2 w-1/2">
                        <p className="subtitle aos-init aos-animate" data-aos-duration="1000" data-aos="fade-up">ONLINE RESERVATION</p>

                        <h3 className="title aos-init aos-animate" data-aos-duration="1000" data-aos="fade-up">BOOK A TABLE</h3>

                        <p className="text aos-init" data-aos-duration="1000" data-aos="fade-up">
                            After booking we will call the customer to confirm,
                            so please enter your name and phone number is required,
                            thank you!
                        </p>
                    </div>
                    <div className="booking-form w-1/2">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" id="inputname4" placeholder="Name*"/>
                            </div>

                            <div className="form-row gap-4 grid grid-cols-2">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="inputPhone" placeholder="Phone*" />
                                </div>
                                <div className="form-group">
                                    <select id="inputState" className="form-control">
                                        <option>Arrival time
                                        </option>
                                        <option>Arrival time
                                        </option>
                                        <option>Arrival time
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row grid grid-cols-2 gap-4">
                                <div className="form-group">
                                    <select id="inputState" className="form-control">
                                        <option>Amount of people
                                        </option>
                                        <option>Amount of people
                                        </option>
                                        <option>Amount of people
                                        </option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select id="inputState" className="form-control">
                                        <option>18/6/2023
                                        </option>
                                        <option>18/6/2023
                                        </option>
                                        <option >18/6/2023
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-10">
                                <ButtonComponent btnTypeClass='btnBookTable' btnText='Book a Table' btnType={'submit'}  />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Booking