'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { Button } from '../ui/button'
import { useLenis } from '@studio-freight/react-lenis'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

const easingNumber = (x: number) => {
    return 1 - Math.cos((x * Math.PI) / 2);
}

const Header = ({ logo, logo_dark }: any) => {
    const [ open, setOpen] = useState(false)

    const lenis = useLenis()

    useEffect(() => {        
        if(window.location.hash) {
            setTimeout(() => {
                lenis.scrollTo(window.location.hash, {
                    duration: 1,
                    easing: easingNumber,
                    lock: true
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
                        <SheetTrigger className='bg-transparent border-none text-[--primary] hover:bg-transparent hover:text-[--primary]'>
                            <HamburgerMenuIcon width="30" height="30"/>
                        </SheetTrigger>
                    </div>
                    <div className="w-48 h-18">
                        <Link href='/'>
                            <AspectRatio ratio={20/9}>
                                <Image alt="Logo" src={logo?.data?.attributes.url} fill/>
                            </AspectRatio>
                        </Link>
                    </div>
                    <Button className='animate-spin animate-infinite animate-duration-[5000ms] animate-ease-linear animate-normal animate-fill-backwards text-[--bg-footer] text-xl font-semibold rounded-full w-20 h-20 bg-[--primary] hover:bg-[--primary]' variant={'default'} asChild>
                        <Link href="/contact-us">
                            RSVP
                        </Link>
                    </Button>
                </div>
                <SheetContent className="bg-[--primary] sm:max-w-full w-full">
                    <div className="container max-w-7xl  mt-8">
                        <div className="header flex w-full my-10 justify-between items-center">
                            <SheetClose>
                                <svg width="45" height="45" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </SheetClose>
                            <div className="logo_dark w-48 h-18">
                                <AspectRatio ratio={32/12}>
                                    <Image src={logo_dark?.data?.attributes.url} fill className='object-cover' alt={logo_dark?.data?.attributes.url}/>
                                </AspectRatio>
                            </div>
                            <div className="rsvp">
                                <Button className='animate-spin animate-infinite animate-duration-[5000ms] animate-ease-linear animate-normal animate-fill-backwards text-[--primary] text-xl font-semibold rounded-full w-20 h-20 bg-[--bg-footer] hover:bg-[--bg-footer]' variant={'default'} asChild>
                                    <Link href="/contact-us">
                                        RSVP
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <ul className='text-6xl text-[--main-background-color] space-y-5 font-semibold mt-48'>
                            <li>
                                Home
                            </li>
                            <li>
                                <Link href="/#about-us" onClick={() => handleClick('#about-us')}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/our-menus">
                                    Our Menus
                                </Link>
                            </li>
                            <li>
                                <Link href="/#gallery" onClick={() => handleClick('#gallery')}>
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us" onClick={() => setOpen(false)}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default Header