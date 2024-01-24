'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import useScrollTop from '../../hooks/useScrollTop';

const ScrollToTop = ( { children }:{ children: React.ReactNode}) => {
    const {
        visible,
        scrollToTop
    } = useScrollTop()
    
    return ( 
        <div style={{display: visible ? 'inline' : 'none'}}>
            <Button onClick={scrollToTop} variant={'outline'} className="rounded-sm fixed bottom-5 right-10 bg-[#00000038] hover:text-[--primary] hover:-translate-y-2 border-0 text-4xl text-white transition-all ease-in-out">  
                {children}
            </Button> 
        </div>        
    )
}

export default ScrollToTop