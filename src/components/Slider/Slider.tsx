'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';
import React from 'react'
import Image from 'next/image';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRightIcon, ArrowLeftIcon } from '@radix-ui/react-icons';
import {  Jost } from 'next/font/google'

const jost = Jost({
  subsets: ['latin'],
  weight: '400'
})

import 'swiper/css';
import 'swiper/css/effect-fade'
import { Button } from '../ui/button';

const SliderComponent = ({data}: any) => {
  return (
    <div className="relative swiper-scale-effect overflow-hidden h-screen">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, EffectFade, Autoplay]}
        effect='fade'
        // navigation={{
        //   enabled: false,
        //   nextEl: ".arrow-left", 
        //   prevEl: ".arrow-right"
        // }}
        spaceBetween={50}
        slidesPerView={1}                
        autoplay={{
          delay: 5000,
        }}                       
        loop={true}
        grabCursor={true}        
      >
        {data?.data.map((k: any, index: number) => (
          <SwiperSlide key={index} className="relative w-full mx-auto">     
            <div className="absolute w-full text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[960px] z-30 slide-in-from-top-5 text-white ">
              <h1 className="text-8xl text-amber-500">{k.attributes.title}</h1>       
              <h4 className={`text-xl mt-3 text-[--text-slider-title] ${jost.className}`}>{k.attributes.desc}</h4>
              <Button variant={'outline'} className="mt-8 py-6 px-8 rounded-none text-2xl bg-transparent text-[--text-slider-title]">View Full Menu</Button>
            </div>
            <AspectRatio ratio={16/9} className="swiper-slide-cover">              
              <Image 
                src={k?.attributes.image_slide.data[0].attributes.url} 
                alt={k.attributes.title} 
                fill 
                priority={true}
                className="max-h-screen object-cover brightness-50"
              />
            </AspectRatio>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <button className="arrow-left arrow absolute left-5 inset-y-1/2 text-2xl z-10 text-center h-10 w-10 bg-slate-100 opacity-70 hover:transition-all hover:bg-black duration-300 hover:text-white transition ease-in-out">
        <ArrowLeftIcon className="mx-auto bg-white-600"/>
      </button>
      <button className="arrow-right arrow absolute right-5 inset-y-1/2 text-2xl z-10 h-10 w-10 bg-slate-100 opacity-70 hover:transition-all hover:bg-black duration-300 hover:text-white transition ease-in-out">
        <ArrowRightIcon className="mx-auto bg-white-600"/>
      </button> */}
    </div>
  )
}

export default SliderComponent