'use client'
import React from 'react'
import Link from 'next/link'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Jost } from 'next/font/google'
import { useFooter } from '@/hooks'
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

const jost = Jost({
    subsets: ['latin'],
    weight: '400'
})

const Footer = () => {
    const { data, isPending, isFetching }: any = useFooter();    
    
    //const subscribe_text: BlocksContent = data?.attributes?.subscribe_text;

    if(isPending) return null

    const { 
        bg_image, 
        site_menus, 
        site_info: {
            phone, 
            email, 
            address, 
            country
        } 
    } = data.attributes;

    return (
        <div className="bg-[--bg-footer]">
            <div className="container mx-auto max-w-7xl flex items-center py-20 gap-20">
                <div className="logo-footer w-1/3">
                    <div className="w-40">
                        <Link href='/'>
                            <AspectRatio ratio={20/9}>
                                <Image alt="Logo" src={data?.attributes.logo.logo.data.attributes.url} fill/>
                            </AspectRatio>
                        </Link>
                    </div>                    
                    <BlocksRenderer 
                    content={data?.attributes?.subscribe_text}
                    blocks={{
                        paragraph: ({ children }) => <p className={`${jost.className} text-lg text-[--text-slider-title] mt-3 mb-7`}>{children}</p>,
                        heading: ({ children, level }) => {
                            switch (level) {
                            case 1:
                                return <h1>{children}</h1>
                            case 2:
                                return <h2>{children}</h2>
                            case 3:
                                return <h3>{children}</h3>
                            case 4:
                                return <h4>{children}</h4>
                            case 5:
                                return <h5>{children}</h5>
                            case 6:
                                return <h6>{children}</h6>
                            default:
                                return <p>{children}</p>
                            }
                        },
                        link: ({ children, url }) => <Link href={url}>{children}</Link>,
                    }}
                    modifiers={{
                        bold: ({ children }) => <strong>{children}</strong>,
                        italic: ({ children }) => <span className="italic">{children}</span>,
                    }}
                    />
                    <Button variant={'outline'} className='bg-transparent rounded-none text-xl py-6 px-8 text-[--text-slider-title] mt-5 border-[--text-slider-title]'>
                        {data?.attributes?.subscribe_link}
                    </Button>
                </div>
                <div className="content text-[--text-slider-title] w-2/3 flex items-stretch justify-start gap-x-10 flex-wrap relative">       
                    <div className="menu text-3xl">
                        <ul className='flex flex-col gap-4 font-semibold'>
                            {site_menus?.data.map((k: any, i: number) => (
                                <li key={i}>
                                    <Link href={k.attributes.link || '#'}>{k.attributes.text}</Link>                                                                                                
                                </li>
                            ))}                            
                        </ul>
                    </div>
                    <div className="address text-2xl flex justify-between flex-col gap-4">
                        <div className="phone_email">
                            <div className="phone">{phone}</div>
                            <div className="email">
                                {email}
                            </div>
                        </div>
                        <div className="address country">
                            <div className="address">
                                {address}
                            </div>
                            <div className="country">
                                {country}
                            </div>
                        </div>
                    </div>
                    <div className={`privacy-policy ${jost.className} w-full mt-10 flex gap-20 text-lg`}>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms & Conditions</Link>
                    </div>
                    <div className={`social-link ${jost.className} text-lg flex gap-10 w-40 rotate-90 origin-top-right right-0 absolute bottom-1/4`}>
                        <Link href="#">
                            Facebook
                        </Link>
                        <Link href="#">
                            Instagram
                        </Link>
                    </div>
                    <div className="absolute bottom-0 right-0 w-40 h-40">
                        <AspectRatio ratio={16/16}>
                            <Image src={bg_image.data.attributes.url} fill className="rounded-md object-cover" alt={bg_image.data.attributes.name} />
                        </AspectRatio>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Footer