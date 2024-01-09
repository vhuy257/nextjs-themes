import React from 'react'
import Image from 'next/image';
import { Jost } from 'next/font/google';

const jost = Jost({
  subsets: ['latin'],
  weight: '400'
})

const Testimonial = ({ data }: any) => {
    const { testimonial, customer_name, testimonial_image } = data[0].attributes;

    return (
      <div>
        <h1 className="text-7xl text-[--primary] flex justify-center items-center mt-8">
          Testimonials
          <span className="divider"></span>
        </h1>
        <div className="flex mt-10 items-center">
            <div className="left w-1/2">
              <div className="description text-3xl text-center max-w-[70%] mx-auto text-[--primary]">
                <h2 className="text-6xl">&quot;</h2>
                {testimonial}
                <span className='text-6xl ml-3'>&quot;</span>
              </div>
              <p className={`customer_name text-center mx-auto mt-8 text-2xl text-[--primary] ${jost.className}`}>
                {customer_name}
              </p>
            </div>
            <div className="right h-[600px] w-1/2 p-0">
                <div className="w-full h-full relative">
                  <Image src={testimonial_image?.data.attributes.url} fill alt={testimonial_image?.data.attributes.name} className='object-cover'/>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Testimonial