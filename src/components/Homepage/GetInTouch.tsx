import React from 'react'
import { Jost } from 'next/font/google'

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
        <div className='flex justify-center gap-10 items-center my-8 lg:my-20 container max-w-8xl p-5 lg:p-0 flex-wrap lg:flex-nowrap'>
            <div className="git flex justify-center lg:justify-end items-end relative lg:pl-20">
                <div className={`-rotate-90 mb-7 origin-top text-[--primary] text-xl -mr-2 hidden lg:block ${jost.className}`}>Get in touch</div>
                <div className="text-3xl lg:text-4xl text-[--primary] text-center lg:text-left">
                    <h1 className='mb-5'>{phone}</h1>
                    <h1>{email}</h1>
                </div>
            </div>
            <div className="git flex justify-end items-end relative lg:pl-20">
                <div className={`-rotate-90 mb-3 origin-top text-[--primary] text-xl mr-2 hidden lg:block ${jost.className}`}>Find Us</div>
                <div className="text-3xl lg:text-4xl text-[--primary] text-center lg:text-left">
                    <h1 className='mb-5'>{address}</h1>
                    <h1>{country}</h1>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch