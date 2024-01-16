import React from 'react'

const GalleryPage = () => {
    return (
        <div className={`min-h-screen bg-[--main-background-color] pt-20`}>
            <div className="container max-w-8xl py-20">
                <h1 className="text-[--primary] text-center text-4xl lg:text-7xl flex items-center justify-center relative">
                    <span className="divider"></span>
                    <span className="whitespace-nowrap">Gallery</span>
                    <span className="divider"></span>                        
                </h1>
            </div>
        </div>
    )
}

export default GalleryPage