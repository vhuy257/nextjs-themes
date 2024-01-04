'use client'
import React from 'react'
import Image from 'next/image'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Link from 'next/link'

const Header = () => {
    return (
        <div className="flex text-center absolute w-full h-14 z-40 left-0 justify-center top-8">
            <div className="w-48 h-18">
                <Link href='/'>
                    <AspectRatio ratio={20/9}>
                        <Image alt="Logo" src={'/images/logo.png'} fill/>
                    </AspectRatio>
                </Link>
            </div>
        </div>
    )
}

export default Header