import { useEffect, useState } from "react";

export default function useScrollTop(offsetTop ?: number) {
    const [visible, setVisible] = useState(false) 
    
    const offsetValue = offsetTop ?? 300;

    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 

        if (scrolled > offsetValue){ 
            setVisible(true) 
        }  

        else if (scrolled <= offsetValue){ 
            setVisible(false) 
        } 
    }; 
    
    const scrollToTop = () =>{ 
        window.scrollTo({ 
            top: 0,  
            behavior: 'smooth'            
        }); 
    }; 
    
    useEffect(() => {
        window.addEventListener('scroll', toggleVisible); 

        return () => {
            window.removeEventListener('scroll', toggleVisible)
        }
    })

    return {
        visible,
        scrollToTop
    }
}