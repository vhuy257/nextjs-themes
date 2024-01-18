import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Parallax } from 'react-scroll-parallax';

const Reservations = ({data}: any) => {
    const { title, bg_image, image_1, image_2, image_3 } = data;

    return (
        <div className='container max-w-7xl text-right flex items-start relative h-[700px] justify-center' id="reservation">
            <div className="reservations-title absolute lg:relative z-10 bottom-0 text-center lg:text-right">
                <h1 className="text-4xl lg:text-8xl text-[--primary] flex justify-center items-center">{title}</h1>
                <Button variant={'outline'} className='mt-7 bg-transparent rounded-none text-xl lg:text-2xl lg:py-6 lg:px-8 text-[--primary] border-[--primary]'>
                    Contact Us
                </Button>
            </div>
            <div className='w-96 h-[570px] absolute top-0 left-1/2 -translate-x-1/2 transform z-20 lg:z-0'>
                <AspectRatio ratio={12/16}>
                    <Image src={bg_image.data.attributes.url} alt={title} fill className='object-cover'/>
                </AspectRatio>
            </div>
            <div className='absolute right-0 -top-40 w-40 h-40'>
                <Parallax translateY={[-45, 45]} easing={'easeInCirc'} speed={-5} rootMargin={{top: 100, right: 100, bottom: 10, left: 100}}>
                    <AspectRatio ratio={14/12}>
                        <Image src={image_2.data.attributes.url} fill alt={title} className='object-cover -translate-x-1'/>
                    </AspectRatio>
                </Parallax>
            </div>
            <div className='absolute right-0 bottom-10 w-56 h-40'>
                <Parallax translateY={[-85, 85]} easing={'easeInCirc'} speed={-5} rootMargin={{top: 100, right: 100, bottom: 10, left: 100}}>
                    <AspectRatio ratio={20/14}>
                            <Image src={image_1.data.attributes.url} fill alt={title} className='object-cover -translate-x-1'/>
                    </AspectRatio>
                </Parallax>
            </div>
            <div className='absolute left-0 bottom-10 w-56 h-40'>
                <Parallax translateY={[-55, 85]} easing={'easeInCirc'} speed={-5} rootMargin={{top: 100, right: 100, bottom: 10, left: 100}}>
                    <AspectRatio ratio={25/12}>
                        <Image src={image_3.data.attributes.url} fill alt={title} className='object-cover -translate-x-1'/>
                    </AspectRatio>
                </Parallax>
            </div>
        </div>
    )
}

export default Reservations