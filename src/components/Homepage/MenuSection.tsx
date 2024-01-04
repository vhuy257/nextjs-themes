import Image from 'next/image';
import React from 'react'
import { AspectRatio } from '../ui/aspect-ratio';

const MenuSection = ({data}: any) => {
    const { 
        menu_image,
        bg_image_1,
        bg_image_2
    } = data;

    return (
        <div className="flex container max-w-7xl mx-auto gap-5 mt-64">
            <div className="left relative w-1/2 flex justify-center items-center h-96">
                <div className="absolute top-0 left-0 w-56 h-56">
                    <AspectRatio ratio={18/12}>
                        <Image src={bg_image_1.data.attributes.url} alt={bg_image_1.data.attributes.name} fill className='object-cover'/>
                    </AspectRatio>
                </div>
                <h1 className="text-6xl text-[--text-slider-title] pt-10 pb-10 flex justify-center items-center">
                    Menus
                    <span className="divider"></span>
                </h1>
                <div className="group_image w-64 h-72">
                    {menu_image?.data.map((k: any, index: number) => (
                        <AspectRatio ratio={12/18} key={index}>
                            <Image src={k.attributes.url} alt={k.attributes.name} fill className="object-cover"/>
                        </AspectRatio>
                    ))}
                </div>
                <div className="absolute bottom-0 left-0">
                    <AspectRatio ratio={10/10}>
                        <Image src={bg_image_2.data.attributes.url} alt={bg_image_2.data.attributes.name} fill className='object-cover'/>
                    </AspectRatio>
                </div>
            </div>
            <div className="right w-1/2">
            
            </div>
        </div>
    )
}

export default MenuSection