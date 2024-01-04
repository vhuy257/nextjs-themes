import Image from 'next/image';
import React from 'react'
import { AspectRatio } from '../ui/aspect-ratio';
import { Parallax } from 'react-scroll-parallax';
import {  Jost } from 'next/font/google'
import { Button } from '../ui/button';
import Link from 'next/link';

const jost = Jost({
    subsets: ['latin'],
    weight: '400'
})

const MenuSection = ({data}: any) => {
    const { 
        menu_image,
        bg_image_1,
        bg_image_2,
        menu_items
    } = data;

    return (
        <div className="flex container max-w-7xl mx-auto gap-5 mt-64 mb-64 items-start">
            <div className="left relative w-1/2 h-[920px]">
                <div className="absolute -top-20 -left-4 w-40 h-40">
                    <Parallax translateY={[0, -45]} easing={'easeInCirc'} speed={-5}>
                        <Image 
                            src={bg_image_1.data.attributes.url} 
                            alt={bg_image_1.data.attributes.name} 
                            width={bg_image_1.data.attributes.width} 
                            height={bg_image_1.data.attributes.height}
                            className='object-cover'
                        />
                    </Parallax>
                </div>
                <h1 className="text-7xl text-[--text-slider-title] flex justify-center items-center">
                    Menus
                    <span className="divider"></span>
                </h1>
                <div className="group_image w-[400px] h-[400px] absolute left-1/4 top-1/4 -translate-y-1/4 -translate-x-1/2">
                    {menu_image?.data.map((k: any, index: number) => (
                        <>
                            <Image 
                                src={k.attributes.url} 
                                alt={k.attributes.name} 
                                width={bg_image_1.data.attributes.width} 
                                height={bg_image_1.data.attributes.height}
                                className={`object-contain ${index % 2 !== 0 && 'translate-x-56 -translate-y-[400px]'}`}
                            />
                        </>
                    ))}
                </div>
                <div className="absolute bottom-0 left-0 w-56 h-56">
                    <Parallax translateY={[0, 45]} easing={'easeInCirc'} speed={-5}>
                        <AspectRatio ratio={10/10}>
                            <Image src={bg_image_2.data.attributes.url} alt={bg_image_2.data.attributes.name} fill className='object-cover rotate-[145deg]'/>
                        </AspectRatio>
                    </Parallax>
                </div>
            </div>
            <div className="right w-1/2">
                {menu_items.data.map((k: any, index: number) => (
                    <div className="menu-item p-8 border-b border-b-[#FFFFFF45]" key={index}>
                        <div className="flex justify-between items-center">
                            <h1 className="text-3xl text-[#e3dac6]">
                                {k.attributes.title}
                            </h1>
                            <h4 className={`text-3xl text-[#BCAF87] ${jost.className}`}>
                                $ {k.attributes.price}
                            </h4>
                        </div>
                        <p className={`text-md text-[#E3DAC6A3] mt-3 ${jost.className}`}>
                            {k.attributes.description}
                        </p>
                    </div>
                ))}
                <div className="text-center flex items-center mt-8">
                    <Button variant={'outline'} className="py-6 px-4 border-2 border-[#FFFFFF45] rounded-none text-xl bg-transparent text-[--text-slider-title] mx-auto">
                        <Link href="#">
                            View All Menus
                        </Link>
                    </Button>
                </div>                  
            </div>
        </div>
    )
}

export default MenuSection