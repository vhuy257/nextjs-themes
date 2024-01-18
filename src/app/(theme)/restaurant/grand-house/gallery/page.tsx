'use client'
import { useState } from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { kyOriginalApi } from '@/lib/utils'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { Transition } from '@headlessui/react'

type ResponseData = {
    data: {
        attributes: {}
    }
    medata: any
    error?: any
}

const GalleryPage = () => {   

    const [isShowing, setShowing] = useState(false)
    const [gallery, setGallery]: any = useState([])

    const fetchData = async () => {
        const { data }: ResponseData = await kyOriginalApi.get(`gallery-page?populate=*`).json();

        const { gallery }: any = data?.attributes;
        setGallery(gallery?.data)
    }

    useEffect(() => {
        fetchData()
        setShowing(true)
    }, [])

    return (
        <div className={`min-h-screen bg-[--main-background-color] pt-20`}>
            <Transition
                show={isShowing}
                enter="transition-all ease-in-out duration-2000"
                enterFrom="-translate-y-8"
                enterTo="translate-y-0"            
            >
                <div className="container max-w-7xl py-20">
                    <h1 className="text-[--primary] text-center text-4xl lg:text-7xl flex items-center justify-center relative">
                        <span className="divider"></span>
                        <span className="whitespace-nowrap">Gallery</span>
                        <span className="divider"></span>                        
                    </h1>
                    <div className="grid grid-cols-3 gap-8 mt-12">
                        {gallery.map((k: any, index: number) => (
                            <div className="overflow-hidden cursor-pointer" key={index}>
                                <AspectRatio ratio={16/16}>
                                    <Image src={k.attributes.url} alt={k.name} fill className="object-cover transition-all ease-in-out duration-700 hover:scale-125"/>
                                </AspectRatio>
                            </div>                        
                        ))}
                    </div>
                </div>
            </Transition>
        </div>
    )
}

export default GalleryPage