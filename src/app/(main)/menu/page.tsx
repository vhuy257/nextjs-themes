import React from 'react'
import { kyOriginalApi } from '@/lib/utils'
import ImageAspectRatio from '@/components/Image/Image';

type ResponseData = {
    data: {
        attributes: {}
    }
    medata: any
    error?: any
}

export default async function MenuPage() {
    const { data }: ResponseData = await kyOriginalApi.get(`our-menu?populate=*`).json();

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

    return (
        <div className={`min-h-screen bg-[--main-background-color] pt-20`}>
            <div className="container max-w-7xl py-20">
                <h1 className="text-[--primary] text-center text-4xl lg:text-7xl flex items-center justify-center relative">
                    <span className="divider"></span>
                    <span className="whitespace-nowrap">Our Menus</span>
                    <span className="divider"></span>                        
                </h1>
            </div>
            <ImageAspectRatio ratio={18/4} image={image_bg_1}/>
            <div className="container max-w-7xl py-20">
                <h1 className="text-[--primary] text-center text-4xl lg:text-5xl flex items-center justify-center relative">
                    <span className="divider"></span>
                    <span className="whitespace-nowrap">Main Dish</span>
                    <span className="divider"></span>                        
                </h1>
            </div>
        </div>
    )
}
