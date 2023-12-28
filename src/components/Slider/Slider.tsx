'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Parallax, Scrollbar, Autoplay } from 'swiper/modules';
import React from 'react'
import Image from 'next/image';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRightIcon, ArrowLeftIcon } from '@radix-ui/react-icons';
import 'swiper/css';

const SliderComponent = ({data}: any) => {
  console.log(data, 'data')
  return (
    <div className="relative mx-auto lg:px-10">
      <Swiper
        modules={[Navigation, Pagination, Parallax, Scrollbar, Autoplay]}
        parallax={true}
        navigation={{
          enabled: true,
          nextEl: ".arrow-left", 
          prevEl: ".arrow-right"
        }}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
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
          <SwiperSlide key={index} className="relative w-full mx-auto">     
            <div className="absolute w-full text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[720px] z-30 slide-in-from-top-5 text-white ">
              <h1 className="text-5xl" data-swiper-parallax="-300">{k.attributes.title}</h1>       
              <h4 className="text-3xl mt-3" data-swiper-parallax="-200">{k.attributes.desc}</h4>
            </div>
            <AspectRatio ratio={16/9} data-swiper-parallax="-100">              
              <Image 
                src={`http://localhost:1337${k?.attributes.image_slide.data[0].attributes.url}`} 
                alt={k.attributes.title} 
                fill 
                priority={true}
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="arrow-left arrow absolute left-0 lg:-left-5 inset-y-1/2 text-2xl z-10 text-center rounded-full h-10 w-10 bg-slate-100 hover:bg-green-500 hover:text-white">
        <ArrowLeftIcon className="mx-auto rounded-full bg-white-600"/>
      </button>
      <button className="arrow-right arrow absolute right-0 lg:-right-5 inset-y-1/2 text-2xl z-10 rounded-full h-10 w-10 bg-slate-100 hover:bg-green-500 hover:text-white">
        <ArrowRightIcon className="mx-auto rounded-full bg-white-600"/>
      </button>
    </div>
  )
}

export default SliderComponent