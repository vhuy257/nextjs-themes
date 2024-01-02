import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { Transition } from '@headlessui/react'
import { AspectRatio } from '../ui/aspect-ratio';
import {  Jost } from 'next/font/google'
import { useRef } from 'react'

import { useIntersectionObserver } from 'usehooks-ts'

const jost = Jost({
  subsets: ['latin'],
  weight: '400'
})

const AboutUsSection = ({ data }: any) => {
    const ref: any = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(ref, {})
    const isVisible = !!entry?.isIntersecting
    
    const {
        title,
        description,
        main_image
    } = data;

    return (        
        <div className="my-16 container mx-auto relative max-w-6xl flex justify-end" ref={ref}> 
            <div className="content absolute left-0 text-[--text-slider-title] z-10 top-1/2 -translate-y-1/2">
                <Transition
                    show={isVisible}
                >
                    <Transition.Child 
                        enter="transition ease-in-out duration-1000 transform"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-1000 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <h1 className="text-8xl about-us-title">
                            {title}
                            <span className="divider"></span>
                        </h1>
                        <h4 className={`${jost.className} text-2xl mt-5 max-w-[540px] leading-10`}>{description}</h4>
                    </Transition.Child>
                </Transition>
            </div>
            <div className="w-1/2 right-0">
                <Transition
                    show={isVisible}
                >
                    <Transition.Child
                        enter="transition ease-in-out duration-1000 transform"
                        enterFrom="translate-y-full"
                        enterTo="translate-y-0"
                        leave="transition ease-in-out duration-1000 transform"
                        leaveFrom="translate-y-0"
                        leaveTo="translate-y-full"
                    >
                        <AspectRatio ratio={7/10}>
                            <Image src={main_image.data[0].attributes.url} alt={title} fill className=""/>
                        </AspectRatio>
                    </Transition.Child>
                </Transition>
            </div>
        </div>
    )
}

export default AboutUsSection