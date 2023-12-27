'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import React from 'react'
import Image from 'next/image';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import 'swiper/css';

const SliderComponent = ({data}: any) => {
  return (
    <div className="relative mx-auto lg:px-10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        effect="creative"
        navigation={{
          enabled: true,
          nextEl: ".arrow-left", 
          prevEl: ".arrow-right"
        }}
        spaceBetween={50}
        slidesPerView={2}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
        coverflowEffect={{
          rotate: 20,
          stretch: 180,
          depth: 550,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        grabCursor={true}        
      >
        {data?.data.map((k: any, index: number) => (
          <SwiperSlide key={index}>
            <AspectRatio ratio={16/9}>
              <Image 
                src={`http://localhost:1337${k?.attributes.url}`} 
                alt={k.attributes.name} 
                fill 
                priority={true}
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="arrow-left arrow absolute left-0 inset-y-1/2 text-2xl z-10 text-center rounded-full h-10 w-10 bg-slate-100">
          Prev
      </button>
      <button className="arrow-right arrow absolute right-0 inset-y-1/2 text-2xl z-10 rounded-full h-10 w-10 bg-slate-100">
          Next
      </button>
    </div>
  )
}

export default SliderComponent