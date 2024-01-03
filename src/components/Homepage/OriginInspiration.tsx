"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Jost } from "next/font/google";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import Flickity from "react-flickity-component";

import "swiper/css";
import { AspectRatio } from "../ui/aspect-ratio";

const jost = Jost({
  subsets: ["latin"],
  weight: "400",
});

const flickityOptions = {
  initialIndex: 2,
};

const OriginInspiration = ({ data }: any) => {
  const { title, description, swiper_inspiration, button_gallery } = data;

  return (
    <div className="my-20 text-center">
      <h1 className="text-6xl text-[--text-slider-title] pt-10 pb-10 flex justify-center items-center">
        <span className="divider"></span>
        {title}
        <span className="divider"></span>
      </h1>
      <div className="flex w-full items-center gap-10 pr-10">
        <div className="slider-inspiration w-3/4 h-96">
          {/* <Swiper
                        modules={[Navigation, Scrollbar]}
                        navigation={{
                          enabled: true,
                          nextEl: ".arrow-right", 
                          prevEl: ".arrow-left"
                        }}
                        autoHeight={true}
                        spaceBetween={20}
                        slidesPerView={4}         
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true
                        }}                       
                        speed={5000}
                        loop={true}
                        grabCursor={true}     
                        wrapperClass='swiper-wrapper'
                    > */}
            <Flickity
                className={"carousel"} // default ''
                elementType={"div"} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >
                {swiper_inspiration?.data.map((k: any, index: number) => (
                <div className="w-1/4 h-full" key={index}>
                    <AspectRatio ratio={16 / 9}>
                        <Image
                            src={k?.attributes.url}
                            alt={k?.attributes.title}
                            priority={true}
                            fill
                            className="object-cover"
                        />
                    </AspectRatio>
                </div>
                ))}
            </Flickity>
            {/* {swiper_inspiration?.data.map((k: any, index: number) => (
                                <SwiperSlide key={index} className="h-96 w-1/4">                             
                                    <AspectRatio ratio={16/9}>
                                        <Image 
                                            src={k?.attributes.url} 
                                            alt={k?.attributes.title} 
                                            priority={true}
                                            fill
                                            className="object-cover"
                                        />       
                                    </AspectRatio>    
                                </SwiperSlide>
                            ))} */}
            {/* </Swiper> */}
            <button className="arrow-left arrow absolute left-5 inset-y-1/2 text-2xl z-10 text-center h-10 w-10 bg-slate-100 opacity-10 hover:opacity-100 hover:transition-all hover:bg-black duration-300 hover:text-white transition ease-in-out">
                <ArrowLeftIcon className="mx-auto bg-white-600" />
            </button>
            <button className="arrow-right arrow absolute right-5 inset-y-1/2 text-2xl z-10 h-10 w-10 bg-slate-100 opacity-10 hover:opacity-100 hover:transition-all hover:bg-black duration-300 hover:text-white transition ease-in-out">
                <ArrowRightIcon className="mx-auto bg-white-600" />
            </button>
        </div>
        <div className="description text-left">
          <p
            className={`text-lg ${jost.className} text-[--text-slider-title] pr-8`}
          >
            {description}
          </p>
          <Button
            variant="outline"
            className="bg-transparent rounded-none text-xl py-6 px-8 text-[--text-slider-title] mt-5 border-[--text-slider-title]"
          >
            <Link href={"/#"}>{button_gallery}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OriginInspiration;
