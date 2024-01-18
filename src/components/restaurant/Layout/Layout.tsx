'use client'
import React from 'react'
import Header from '@/components/restaurant/Layout/Header'
import Footer from '@/components/restaurant/Layout/Footer'
import { useConfig } from '@/hooks'

export const Config = React.createContext({})

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { data, isPending }: any = useConfig()
    
    if(isPending) return null
    
    return (
        <>
            <Header logo={data?.attributes?.logo} logo_dark={data?.attributes?.logo_dark}/>
                <Config.Provider value={
                    data.attributes
                }>
                    {children}
                </Config.Provider>
            <Footer logo={data?.attributes?.logo}/>
        </>
    )
}

export default Layout