"use client";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { Jost } from "next/font/google";
import { Button } from "../ui/button";

import Link from "next/link";
import Image from "next/image";

import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";
import { useIntersectionObserver } from 'usehooks-ts'

import "swiper/css";
import { Transition } from "@headlessui/react";

const jost = Jost({
  subsets: ["latin"],
  weight: "400",
});

const OriginInspiration = ({ data }: any) => {
  const { title, description, swiper_inspiration, button_gallery } = data;

  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  return (
    <div className="mt-80 lg:my-20 text-center" id="gallery" ref={ref}>
      <h1 className="text-4xl lg:text-6xl text-[--primary] pt-10 pb-10 flex justify-center items-center">
        <span className="divider hidden lg:inline-block"></span>
        {title}
        <span className="divider hidden lg:inline-block"></span>
      </h1>
      <div className="flex w-full items-center lg:gap-10 flex-wrap lg:flex-nowrap">
        <div className="slider-inspiration w-full lg:w-dvw flex justify-between gap-20 items-start lg:h-96 relative overflow-hidden">
          <Transition 
            appear={true}
            show={isVisible}
            unmount={false}
            enter="transition-all ease-in-out duration-1000"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
          >
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
                      className="object-cover max-h-[450px] w-auto"
                    />
                </SwiperSlide>
              ))}
            </Swiper>
          </Transition>
          <button className="rounded-md arrow-left arrow absolute left-5 inset-y-1/2 text-4xl z-10 text-center h-10 w-10 bg-black opacity-15 hover:transition-all hover:-translate-x-2 hover:opacity-100 hover:bg-black duration-300 hover:text-white transition ease-in-out">
            <ChevronLeftIcon className="mx-auto bg-white-600 text-white" width="34" height="34"/>
          </button> 
          <button className="rounded-md arrow-right arrow absolute right-5 inset-y-1/2 text-2xl z-10 h-10 w-10 bg-black opacity-15 hover:transition-all hover:opacity-85 hover:translate-x-2 hover:bg-black duration-300 hover:text-white transition ease-in-out">
            <ChevronRightIcon className="mx-auto bg-white-600 text-white" width="34" height="34"/>
          </button>
        </div>
        <div className="description p-8 lg:p-0 lg:text-left w-full lg:w-2/5">
          <p
            className={`text-lg ${jost.className} text-[--primary] pr-8`}
          >
            {description}
          </p>
          <Button
            variant="outline"
            className="bg-transparent rounded-none text-xl py-6 px-8 text-[--primary] mt-5 border-[--primary]"
          >
            <Link href={"/gallery"}>{button_gallery}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OriginInspiration;
