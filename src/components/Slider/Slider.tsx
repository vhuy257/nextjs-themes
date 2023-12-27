'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import React from 'react'
import Image from 'next/image';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import 'swiper/css';

const SliderComponent = ({data}: any) => {
  return (
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.data.map((k: any, index: number) => (
          <SwiperSlide key={index}>
            <AspectRatio ratio={16/9}>
              <Image 
                src={k?.attributes.url} 
                alt={k.attributes.name} 
                fill 
                priority={true}
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </SwiperSlide>
        ))}
      </Swiper>
  )
}

export default SliderComponent