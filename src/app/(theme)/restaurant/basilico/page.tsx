'use client';
import dynamic from 'next/dynamic'
import MainSlider from '@/components/restaurant/basilico/MainSlider/MainSlider'
import Gallery from '@/components/restaurant/basilico/Section/Gallery/Gallery';

const Choose = dynamic(() => import('@/components/restaurant/basilico/Section/Choose/Choose'))
const SVideo = dynamic(() => import('@/components/restaurant/basilico/Section/SVideo/SVideo'))
const About = dynamic(() => import('@/components/restaurant/basilico/Section/About/About'))
const Opening = dynamic(() => import('@/components/restaurant/basilico/Section/Opening/Opening'))
const SMenu = dynamic(() => import('@/components/restaurant/basilico/Section/SMenu/SMenu'))
const Testimonials = dynamic(() => import('@/components/restaurant/basilico/Section/Testimonials/Testimonials'))
const Vouchers = dynamic(() => import('@/components/restaurant/basilico/Section/Vouchers/Vouchers'))
const ChefRestaurant = dynamic(() => import('@/components/restaurant/basilico/Section/ChefRestaurant/ChefRestaurant'))
const Booking = dynamic(() => import('@/components/restaurant/basilico/Section/Booking/Booking'))
const SBlog = dynamic(() => import('@/components/restaurant/basilico/Section/SBlog/SBlog'))
const Location = dynamic(() => import('@/components/restaurant/basilico/Section/Location/Location'))

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
            <ChefRestaurant />
            <Booking />
            <SBlog />
            <Gallery />
            <Location />
        </main>
    )
}
