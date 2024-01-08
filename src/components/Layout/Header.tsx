'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { Button } from '../ui/button'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
    return (
        <>
            <Sheet>
                <div className="flex items-center text-center absolute w-full h-14 z-40 left-1/2 -translate-x-1/2 justify-between top-8 container max-w-6xl mx-auto">
                    <div className="menu_bar">
                        <SheetTrigger>
                            <Button variant={'outline'} className='bg-transparent border-none text-[--primary] hover:bg-transparent hover:text-[--primary]'>
                                <HamburgerMenuIcon width="30" height="30"/>
                            </Button>
                        </SheetTrigger>
                    </div>
                    <div className="w-48 h-18">
                        <Link href='/'>
                            <AspectRatio ratio={20/9}>
                                <Image alt="Logo" src={'/images/logo.png'} fill/>
                            </AspectRatio>
                        </Link>
                    </div>
                    <div className="rsvp">
                        <Button className='text-[--bg-footer] text-xl font-semibold animate-spin animate-infinite animate-duration-[5000ms] animate-delay-[2000ms] animate-ease-in animate-reverse animate-fill-backwards rounded-full w-20 h-20 bg-[--primary]' variant={'default'}>
                            RSVP
                        </Button>
                    </div>
                </div>
                <SheetContent >
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default Header