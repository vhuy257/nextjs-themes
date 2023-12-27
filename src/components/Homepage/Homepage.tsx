'use client'
import { useHomePage } from '@/hooks/useHomepage'
import SliderComponent from '../Slider/Slider'
import React from 'react'

const Homepage = () => {
    const { data, isPending, isFetching }: any = useHomePage()

    if (isPending) return <div>Loading</div>

    return (
        <div className='h-96 w-2/3'>
            <SliderComponent data={data.data.attributes.main_slider}/>
        </div>
    )
}

export default Homepage   