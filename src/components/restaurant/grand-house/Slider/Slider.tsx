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
import { Button } from '@/components/ui/button';

const SliderComponent = ({data}: any) => {
  return (
    <div className="relative swiper-scale-effect overflow-hidden h-screen">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}                        
        autoplay={{
          delay: 0
        }}              
        speed={4000}              
        loop={true}
        grabCursor={true}        
        className='h-screen'
      >
        {data?.data.map((k: any, index: number) => (
          <SwiperSlide key={index} className="relative w-full mx-auto">                 
            <AspectRatio ratio={16/16} className="swiper-slide-cover w-auto h-screen">              
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
      <div className="absolute w-full text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-8xl z-30 text-[--primary]">
        <h1 className="text-8xl flex justify-center items-center">
          <span className="divider"></span>
          Taste Redefined
          <span className="divider"></span>
        </h1>       
        <h4 className={`text-xl mt-3 ${jost.className}`}>Smokin’ Up a Storm, One Bite at a Time</h4>
        <Button variant={'outline'} className="mt-8 py-6 px-8 rounded-none text-2xl bg-transparent">View Full Menu</Button>
      </div>   
    </div>
  )
}

export default SliderComponent