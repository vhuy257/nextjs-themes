'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import React from 'react'
import Image from 'next/image';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {  Jost } from 'next/font/google'

const jost = Jost({
  subsets: ['latin'],
  weight: '400'
})

import 'swiper/css/effect-fade'
import { Button } from '../ui/button';

const SliderComponent = ({data}: any) => {
  return (
    <div className="relative swiper-scale-effect overflow-hidden h-screen">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}                
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          waitForTransition: false
        }}                       
        loop={true}
        //onInit={(swiper) => {alert(swiper)}}
        grabCursor={true}        
      >
        {data?.data.map((k: any, index: number) => (
          <SwiperSlide key={index} className="relative w-full mx-auto" data-swiper-autoplay={index === 0 && '1000'}>     
            <div className="absolute w-full text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[960px] z-30 text-white ">
              <h1 className="text-8xl text-amber-500">{k.attributes.title}</h1>       
              <h4 className={`text-xl mt-3 text-[--text-slider-title] ${jost.className}`}>{k.attributes.desc}</h4>
              <Button variant={'outline'} className="mt-8 py-6 px-8 rounded-none text-2xl bg-transparent text-[--text-slider-title]">View Full Menu</Button>
            </div>
            <AspectRatio ratio={16/9} className="swiper-slide-cover w-full h-full">              
              <Image 
                src={k?.attributes.image_slide.data[0].attributes.url} 
                alt={k.attributes.title} 
                fill 
                priority={true}
                className="w-full object-cover brightness-50"
              />
            </AspectRatio>
          </SwiperSlide>
        ))}
      </Swiper>      
    </div>
  )
}

export default SliderComponent