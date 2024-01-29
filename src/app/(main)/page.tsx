'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image"
import Link from "next/link";

export default function Home() {  

  const dataTheme = [
    {
      title: 'Basilico - Restaurant',
      imageUrl: '/thumbnail/basilico-homepage.png',
      demoLink: '/restaurant/basilico'
    },
    {
      title: 'Grand House - Asian Restaurant',
      imageUrl: '/thumbnail/grandhouse-homepage.png',
      demoLink: '/restaurant/grand-house-with-strapi-backend'
    }    
  ];

  return (
      <>
        <header className="container max-w-7xl flex justify-center text-center mx-auto items-center">
          <Image src={'/logo.png'} width={347} height={145} alt="Logo"/>
        </header>
        <main className="flex flex-col items-center justify-between max-w-8xl container mx-auto">
          <h1 className="self-start my-4 text-teal-900 text-xl">Theme</h1>
          <div className="grid grid-cols-4 gap-8">
            {dataTheme.map((k: any, index: number) => {
              const {
                imageUrl,
                title,
                demoLink
              } = k;

              return (
                <div className="theme-item border p-4" key={index}> 
                  <Link href={demoLink} className="block">
                      <Image src={imageUrl} alt={title} width={460} height={173}/>
                  </Link>
                  <Link href={demoLink} className="block">
                      <h4 className="title text-md mt-4">
                          {title}
                      </h4>
                  </Link>
                  <Button variant={'default'} className="bg-teal-400 mt-8 hover:bg-teal-600 transition-all text-white uppercase font-thin rounded-sm w-full" asChild>
                    <Link href={demoLink} key={index}>
                      View Demo
                    </Link>
                  </Button>
                </div>  
              )
            })}
          </div>
        </main>
      </>
  )
}
