import React from 'react'
import {  Jost } from 'next/font/google'

const jost = Jost({
    subsets: ['latin'],
    weight: '400'
})
  
const GetInTouch = ({
    email,
    phone, 
    address,
    country
}: any) => {
    return (
        <div className='flex justify-center gap-10 items-center my-20 container max-w-8xl'>
            <div className="git flex justify-end items-end relative pl-20">
                <div className={`-rotate-90 mb-7 origin-top text-[--text-slider-title] text-xl -mr-5 ${jost.className}`}>Get in touch</div>
                <div className="text-4xl text-[--text-slider-title]">
                    <h1 className='mb-5'>{phone}</h1>
                    <h1>{email}</h1>
                </div>
            </div>
            <div className="git flex justify-end items-end relative pl-20">
                <div className={`-rotate-90 mb-3 origin-top text-[--text-slider-title] text-xl ${jost.className}`}>Find Us</div>
                <div className="text-4xl text-[--text-slider-title]">
                    <h1 className='mb-5'>{address}</h1>
                    <h1>{country}</h1>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch