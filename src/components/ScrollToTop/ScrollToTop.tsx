'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button';

const ScrollToTop = ( { children }:{ children: React.ReactNode}) => {
    const [visible, setVisible] = useState(false) 
    
    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 

        if (scrolled > 300){ 
            setVisible(true) 
        }  
        else if (scrolled <= 300){ 
            setVisible(false) 
        } 
    }; 
    
    const scrollToTop = () =>{ 
        window.scrollTo({ 
            top: 0,  
            behavior: 'smooth'            
        }); 
    }; 
    
    window.addEventListener('scroll', toggleVisible); 
    
    return ( 
        <div style={{display: visible ? 'inline' : 'none'}}>
            <Button onClick={scrollToTop} variant={'outline'} className="rounded-sm fixed bottom-5 right-10 bg-[#00000038] hover:text-[--primary] hover:-translate-y-2 border-0 text-4xl text-white transition-all ease-in-out">  
                {children}
            </Button> 
        </div>        
    )
}

export default ScrollToTop