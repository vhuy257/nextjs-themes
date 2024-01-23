'use client';
import dynamic from 'next/dynamic'
import MainSlider from '@/components/restaurant/basilico/MainSlider/MainSlider'

 
const Choose = dynamic(() => import('@/components/restaurant/basilico/Choose/Choose'))
const SVideo = dynamic(() => import('@/components/restaurant/basilico/SVideo/SVideo'))
const About = dynamic(() => import('@/components/restaurant/basilico/Section/About/About'))
const Opening = dynamic(() => import('@/components/restaurant/basilico/Section/Opening/Opening'))
const SMenu = dynamic(() => import('@/components/restaurant/basilico/Section/SMenu/SMenu'))
const Testimonials = dynamic(() => import('@/components/restaurant/basilico/Testimonials/Testimonials'))
const Vouchers = dynamic(() => import('@/components/restaurant/basilico/Vouchers/Vouchers'))

export default function Home() {
    return (
        <main className={`flex flex-col items-center justify-between`}>
            <MainSlider />
            <About />
            <Opening />
            <SMenu />
            <SVideo />
            <Choose />
            <Testimonials/>
            <Vouchers />
        </main>
    )
}
