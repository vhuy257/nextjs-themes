'use client'
import React from 'react'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { useConfig } from '@/hooks'

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { data, isPending }: any = useConfig()
    
    if(isPending) return null
    
    return (
        <>
            <Header logo={data?.attributes?.logo} logo_dark={data?.attributes?.logo_dark}/>
                {children}
            <Footer logo={data?.attributes?.logo}/>
        </>
    )
}

export default Layout