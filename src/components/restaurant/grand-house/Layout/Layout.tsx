'use client'
import React from 'react'
import Header from '@/components/restaurant/grand-house/Layout/Header'
import Footer from '@/components/restaurant/grand-house/Layout/Footer'
import { useConfig } from '@/hooks'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'

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
            <ScrollToTop>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </ScrollToTop>
        </>
    )
}

export default Layout