import React from 'react'
import { API_URL } from '@/lib/utils';
import Menu from '@/components/restaurant/Menu/Menu';

export default async function MenuPage() {
    const data: any = await fetch(`${API_URL}/our-menu?populate=*`, { 
        next: { revalidate: 10 }
    })
    
    const res = await data.json()
    
    return (
        <div className={`min-h-screen bg-[--main-background-color] pt-20`}>
            <Menu data={res?.data} />
        </div>
    )
}
