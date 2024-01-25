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
      demoLink: '/restaurant/grand-house'
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
                <div className="theme-item p-4 border" key={index}>
                  <Image src={imageUrl} alt={title} width={460} height={173}/>
                  <div className="title text-md mt-4">
                      {title}
                  </div>
                  <Button variant={'default'} className="mt-4 bg-teal-400 hover:bg-teal-600 transition-all text-white rounded-sm w-full p-4" asChild>
                    <Link href={demoLink}>
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
