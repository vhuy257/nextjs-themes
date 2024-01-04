import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import { AspectRatio } from '../ui/aspect-ratio';
import {  Jost } from 'next/font/google'
import { useRef } from 'react'

const jost = Jost({
  subsets: ['latin'],
  weight: '400'
})

const AboutUsSection = ({ data }: any) => {
    const ref: any = useRef<HTMLDivElement | null>(null)
    
    const {
        title,
        description,
        main_image,
        image_1,
        image_2,
        image_3,
    } = data;

    return (        
        <>     
            <div className="container mx-auto max-w-screen-2xl relative h-[760px]">
                <div className="w-80 h-80 absolute -left-2 -top-10 z-10">
                    <Parallax translateY={[100, 0]} rotate={[90, 0]} easing={'easeInOutCirc'} speed={-10} rootMargin={{top: 100, right: 100, bottom: 100, left: 100}}>
                        <AspectRatio ratio={16/10}>
                            <Image src={image_1.data.attributes.url} fill alt={image_1.data.attributes.url}/>
                        </AspectRatio>
                    </Parallax>                
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32">
                    <Parallax translateY={[100, 0]} easing={'easeInQuad'} speed={-5} rootMargin={{top: 100, right: 100, bottom: 100, left: 100}}>
                        <AspectRatio ratio={10/14}>
                            <Image src={image_2.data.attributes.url} alt={title} fill className="-translate-x-4 -translate-y-8"/>
                        </AspectRatio>                        
                    </Parallax>                
                </div>
                <div className="absolute bottom-0 left-0 w-60 h-60">
                    <Parallax translateY={[-15, 15]} easing={[.645, .045, .355, 1]} speed={-5} rootMargin={{top: 100, right: 100, bottom: 100, left: 100}}>
                        <AspectRatio ratio={10/10}>
                            <Image src={image_3.data.attributes.url} fill alt={image_3.data.attributes.url}/>
                        </AspectRatio>
                    </Parallax>                        
                </div>
                <div className="py-60 container mx-auto relative flex max-w-screen-xl justify-center items-start h-96" ref={ref}> 
                    <div className="content text-[--text-slider-title] w-4/6 z-10">
                        <h1 className="text-8xl about-us-title">
                            {title}
                            <span className="divider"></span>
                        </h1>
                        <h4 className={`${jost.className} text-2xl mt-5 max-w-[640px] leading-10`}>{description}</h4>
                    </div>     
                    <div className="h-80 w-2/6">
                        <Parallax translateY={[-15, 15]} easing={'easeInCirc'} speed={-5}>
                            <AspectRatio ratio={10/16}>
                                <Image src={main_image.data[0].attributes.url} alt={title} fill className="brightness-90 saturate-100 grayscale-0  -translate-x-60 -translate-y-10"/>
                            </AspectRatio>
                        </Parallax>       
                    </div>                                  
                </div> 
            </div>                             
        </>
    )
}

export default AboutUsSection