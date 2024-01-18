import React from 'react'
import Link from 'next/link'

import { Jost } from 'next/font/google'

const jost = Jost({
    subsets: ['latin'],
    weight: '400'
})
  
export default function NotFound() {
    return (
        <div className={`min-h-screen bg-[--main-background-color] ${jost.className}`}>
            <div className="container max-w-screen-xl py-20 text-[--primary] pt-80 text-center text-5xl">
                <h2 className={`mb-5`}>Not Found Home Page.</h2>
                <p className='text-2xl mb-2'>Could not find requested resource</p>
                <span className="text-sm">Return</span> <Link href="/" className="text-sm cursor-pointer underline">Home</Link>
            </div>            
        </div>
    )
}