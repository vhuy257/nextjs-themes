"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { Jost } from "next/font/google";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";

import "swiper/css";

const jost = Jost({
  subsets: ["latin"],
  weight: "400",
});

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
        <div className="slider-inspiration w-4/6 flex justify-between gap-5 items-start h-96 relative">
          <Swiper
            modules={[Navigation, Scrollbar]}
            navigation={{
              enabled: true,
              nextEl: ".arrow-right",
              prevEl: ".arrow-left",
            }}
            spaceBetween={20}
            slidesPerView={'auto'}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            speed={1000}
            loop={true}
            grabCursor={true}
            wrapperClass="swiper-wrapper"
          >
            {swiper_inspiration?.data.map((k: any, index: number) => (
              <SwiperSlide key={index} className={`flex justify-center items-center h-96 w-auto`}>
                  <Image
                    src={k?.attributes.url}
                    alt={k?.attributes.title}
                    priority={true}
                    width={k?.attributes.width}
                    height={k?.attributes.height}
                    className="object-cover h-[500px] w-auto"
                  />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="rounded-md arrow-left arrow absolute left-5 inset-y-1/2 text-4xl z-10 text-center h-10 w-10 bg-black opacity-15 hover:transition-all hover:-translate-x-2 hover:opacity-100 hover:bg-black duration-300 hover:text-white transition ease-in-out">
            <ChevronLeftIcon className="mx-auto bg-white-600 text-white" width="34" height="34"/>
          </button> 
          <button className="rounded-md arrow-right arrow absolute right-5 inset-y-1/2 text-2xl z-10 h-10 w-10 bg-black opacity-15 hover:transition-all hover:opacity-85 hover:translate-x-2 hover:bg-black duration-300 hover:text-white transition ease-in-out">
            <ChevronRightIcon className="mx-auto bg-white-600 text-white" width="34" height="34"/>
          </button>
        </div>
        <div className="description text-left w-2/6">
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
