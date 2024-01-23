import React from 'react'
import Link from 'next/link'
import { FaPlay } from "react-icons/fa6";

import './SVideo.scss'

const SVideo = () => {
    return (
        <section className='s-video w-svw'>
            <div className="container max-w-9xl">
                <div className="video-main">
                    <Link href="https://www.youtube.com/watch?v=eI_LjETc_Ak" className="popup-youtube wrap-video text-center animate-ping text-black">
                        <FaPlay size={34}/>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default SVideo