'use client'
import React from 'react'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'

type ImageProps = {
    ratio: number
    image: any
}

const ImageAspectRatio = ({
    ratio,
    image
}: ImageProps) => {
    return (
        <AspectRatio ratio={ratio}>
            <Image src={image.data.attributes.url} alt={image.data.attributes.name} fill className="object-cover h-52 w-auto"/>
        </AspectRatio>
    )
}

export default ImageAspectRatio