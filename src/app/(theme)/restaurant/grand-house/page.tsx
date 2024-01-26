"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Jost, Cormorant_Garamond } from "next/font/google";
import { Button } from "@/components/ui/button";
import { RESTAURANT_1_BASE_URL } from '@/lib/utils'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useLenis } from '@studio-freight/react-lenis'

const jost = Jost({
  subsets: ["latin"],
  weight: "400",
});

const greateVibes = Cormorant_Garamond({
  subsets: ['latin'],
  weight: '400'
})


import "swiper/css/effect-fade";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";


const easingNumber = (x: number) => {
  return 1 - Math.cos((x * Math.PI) / 2);
}

export default function Home() {
  const data = [
    {
      imageUrl: "",
      title: "",
    },
    {
      imageUrl: "",
      title: "",
    },
    {
      imageUrl: "",
      title: "",
    },
  ];

  const [ open, setOpen] = useState(false)

  const lenis = useLenis()

  useEffect(() => {        
      if(window.location.hash) {
          setTimeout(() => {
              lenis.scrollTo(window.location.hash, {
                  duration: 1,
                  easing: easingNumber
              })           
          }, 500)
      }
  }, [lenis])

  const handleClick = async (target: any) => {
      await setOpen(false)

      lenis.scrollTo(target, {
          duration: 1,
          easing: easingNumber
      })                                    
  }

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <div className="flex items-center text-center absolute w-full h-14 z-40 left-1/2 -translate-x-1/2 justify-between top-8 container max-w-6xl mx-auto">
          <div className="menu_bar">
            <SheetTrigger className="bg-transparent border-none text-[--primary] hover:bg-transparent hover:text-[--primary]">
              <HamburgerMenuIcon width="30" height="30" />
            </SheetTrigger>
          </div>
          <div className="w-48 h-18">
            <Link href={`${RESTAURANT_1_BASE_URL}`}>
              <AspectRatio ratio={20 / 9}>
                <Image alt="Logo" src={'/images/grand-house/logo.png'} fill />
              </AspectRatio>
            </Link>
          </div>
          <Button
            className="animate-spin animate-infinite animate-duration-[5000ms] animate-ease-linear animate-normal animate-fill-backwards text-[--bg-footer] text-xl font-semibold rounded-full w-20 h-20 bg-[--primary] hover:bg-[--primary]"
            variant={"default"}
            asChild
          >
            <Link href={`${RESTAURANT_1_BASE_URL}/contact-us`}>RSVP</Link>
          </Button>
        </div>
        <SheetContent className="bg-[--primary] sm:max-w-full w-full">
          <div className="container max-w-7xl  mt-8">
            <div className="header flex w-full my-10 justify-between items-center">
              <SheetClose>
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </SheetClose>
              <div className="logo_dark w-48 h-18">
                <AspectRatio ratio={32 / 12}>
                  <Image
                    src={'/images/grand-house/logo_dark.webp'}
                    fill
                    className="object-cover"
                    alt={'Grand house'}
                  />
                </AspectRatio>
              </div>
              <div className="rsvp">
                <Button
                  className="animate-spin animate-infinite animate-duration-[5000ms] animate-ease-linear animate-normal animate-fill-backwards text-[--primary] text-xl font-semibold rounded-full w-20 h-20 bg-[--bg-footer] hover:bg-[--bg-footer]"
                  variant={"default"}
                  asChild
                >
                  <Link href="/contact-us">RSVP</Link>
                </Button>
              </div>
            </div>
            <ul className="text-6xl text-[--main-background-color] space-y-5 font-semibold mt-48">
              <li>Home</li>
              <li>
                <Link
                  href={`${RESTAURANT_1_BASE_URL}/#about-us`}
                  onClick={() => handleClick("#about-us")}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={`${RESTAURANT_1_BASE_URL}/menu`}
                  onClick={() => setOpen(false)}
                >
                  Our Menus
                </Link>
              </li>
              <li>
                <Link
                  href={`${RESTAURANT_1_BASE_URL}/#gallery`}
                  onClick={() => handleClick("#gallery")}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href={`${RESTAURANT_1_BASE_URL}/contact-us`}
                  onClick={() => setOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
      <main className={`flex flex-col items-center justify-between bg-[--main-background-color] ${greateVibes.className}`}>
        <div className="relative swiper-scale-effect overflow-hidden h-screen">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            effect="fade"
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 0,
            }}
            speed={4000}
            loop={true}
            grabCursor={true}
            className="h-screen"
          >
            {data.map((k: any, index: number) => (
              <SwiperSlide key={index} className="relative w-full mx-auto">
                <AspectRatio
                  ratio={16 / 16}
                  className="swiper-slide-cover w-auto h-screen"
                >
                  <Image
                    src={k.url}
                    alt={k.title}
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
            <h4 className={`text-xl mt-3 ${jost.className}`}>
              Smokin’ Up a Storm, One Bite at a Time
            </h4>
            <Button
              variant={"outline"}
              className="mt-8 py-6 px-8 rounded-none text-2xl bg-transparent"
            >
              View Full Menu
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
