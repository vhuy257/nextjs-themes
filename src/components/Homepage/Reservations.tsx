import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Parallax } from 'react-scroll-parallax';

const Reservations = ({data}: any) => {
    const { title, bg_image, image_1, image_2, image_3 } = data;

    return (
        <div className='container max-w-7xl text-right flex items-start relative h-[700px] justify-center'>
            <div className="reservations-title relative z-10">
                <h1 className="text-8xl text-[--text-slider-title] flex justify-center items-center">{title}</h1>
                <Button variant={'outline'} className='mt-7 bg-transparent rounded-none text-2xl py-6 px-8 text-[--text-slider-title] border-[--text-slider-title]'>
                    Contact Us
                </Button>
            </div>
            <div className='w-96 h-[500px] absolute top-0 left-1/4'>
                <AspectRatio ratio={7/10}>
                    <Image src={bg_image.data.attributes.url} alt={title} fill className='object-cover'/>
                </AspectRatio>
            </div>
            <div className='absolute right-0 -top-40 w-56 h-40'>
                <AspectRatio ratio={12/9}>
                    <Image src={image_1.data.attributes.url} fill alt={title} className='object-cover -translate-x-1'/>
                </AspectRatio>
            </div>
            <div className='absolute right-0 bottom-40 w-56 h-40'>
                    <Parallax translateY={[-15, 15]} easing={'easeInCirc'} speed={-5}>
                        <AspectRatio ratio={20/9}>
                                <Image src={image_3.data.attributes.url} fill alt={title} className='object-cover -translate-x-1'/>
                        </AspectRatio>
                    </Parallax>
            </div>
            <div className='absolute left-0 bottom-10 w-56 h-40'>
                <AspectRatio ratio={23/20}>
                    <Image src={image_2.data.attributes.url} fill alt={title} className='object-cover -translate-x-1'/>
                </AspectRatio>
            </div>
        </div>
    )
}

export default Reservations