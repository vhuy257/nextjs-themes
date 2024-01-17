"use client";
import React, { useEffect, useState } from "react";
import ImageAspectRatio from '@/components/Image/Image';
import { Jost } from "next/font/google";
import { Transition } from '@headlessui/react';


const jost = Jost({
    subsets: ['latin'],
    weight: '400'
})

const MenuComponent = ({ data }: any) => {
    const { 
        image_bg_1,
        image_bg_2,
        image_bg_3,
        child_image_1,
        child_image_2,
        child_image_3,
        child_image_4,
        child_image_5,
        menu_food_items_maindish,
        menu_food_items_appetisers
    }: any = data?.attributes;

    const [isShowing, setShowing] = useState(false)

    useEffect(() => { setShowing(true) }, [])
    
    return (
        <Transition
            show={isShowing}
            enter="transition-all ease-in-out duration-2000"
            enterFrom="-translate-y-8"
            enterTo="translate-y-0"
        >
        <div className="container max-w-7xl py-20">
            <h1 className="text-[--primary] text-center text-4xl lg:text-7xl flex items-center justify-center relative">
            <span className="divider"></span>
            <span className="whitespace-nowrap">Our Menus</span>
            <span className="divider"></span>
            </h1>
        </div>
        <ImageAspectRatio ratio={18 / 4} image={image_bg_1} />
        <div className="container max-w-7xl py-20 relative">
            <h1 className="text-[--primary] text-center text-4xl lg:text-5xl flex items-center justify-center relative">
            <span className="divider"></span>
            <span className="whitespace-nowrap">Main Dish</span>
            <span className="divider"></span>
            </h1>
            <div className="grid mt-10 max-w-5xl mx-auto grid-cols-subgrid lg:grid-cols-2 gap-x-10 gap-y-5">
            {menu_food_items_maindish?.data.map((k: any, index: number) => (
                <div
                className="menu-item p-3 border-b border-b-[#FFFFFF45]"
                key={index}
                >
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl text-[#e3dac6]">
                    {k.attributes.title}
                    </h1>
                    <h4 className={`text-2xl text-[#BCAF87] ${jost.className}`}>
                    $ {k.attributes.price}
                    </h4>
                </div>
                <p className={`text-md text-[#E3DAC6A3] mt-3 ${jost.className}`}>
                    {k.attributes.description}
                </p>
                </div>
            ))}
            </div>
            <div className="absolute bottom-0 right-0 w-40 h-40">
            <ImageAspectRatio image={child_image_1} ratio={15 / 15} />
            </div>
            <div className="absolute top-0 left-0 w-40 h-40 -scale-x-1">
            <ImageAspectRatio image={child_image_5} ratio={17 / 15} />
            </div>
        </div>
        <ImageAspectRatio ratio={18 / 4} image={image_bg_2} />
        <div className="container max-w-7xl py-20">
            <h1 className="text-[--primary] text-center text-4xl lg:text-5xl flex items-center justify-center relative">
            <span className="divider"></span>
            <div className="whitespace-nowrap relative">Appertisers</div>
            <span className="divider"></span>
            <div className="absolute -top-10 right-0 w-32 h-32">
                <ImageAspectRatio image={child_image_3} ratio={18 / 13} />
            </div>
            </h1>
            <div className="grid gap-10 max-w-5xl mt-10 mx-auto grid-cols- lg:grid-cols-2 relative">
            {menu_food_items_appetisers?.data.map((k: any, index: number) => (
                <div
                className="menu-item p-3 border-b border-b-[#FFFFFF45]"
                key={index}
                >
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl text-[#e3dac6]">
                    {k.attributes.title}
                    </h1>
                    <h4 className={`text-2xl text-[#BCAF87] ${jost.className}`}>
                    $ {k.attributes.price}
                    </h4>
                </div>
                <p className={`text-md text-[#E3DAC6A3] mt-3 ${jost.className}`}>
                    {k.attributes.description}
                </p>
                </div>
            ))}
            <div className="absolute -top-5 -left-5 w-28 h-28 -scale-x-1">
                <ImageAspectRatio image={child_image_4} ratio={18 / 17} />
            </div>
            <div className="absolute -bottom-10 right-0 w-48 h-48">
                <ImageAspectRatio image={child_image_2} ratio={18 / 13} />
            </div>
            </div>
        </div>
        <ImageAspectRatio ratio={18 / 4} image={image_bg_3} />
        </Transition>
    )
}

export default MenuComponent;
