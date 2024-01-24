import React from 'react'
import Image from 'next/image'

import { FaArrowRight } from "react-icons/fa6";
import './Gallery.scss';

const Gallery = () => {
    return (
        <section className="gallery">
            <div className="gallery-main flex">
                <div className="gallery-box">
                    <div className="image"><Image src="/images/basilico/gallery-1.jpg" alt="" width={480} height={558}/></div>
                    <div className="content">
                        <h5 className="name">Tender Octopus and Fennel</h5>
                        <p className="cate">Food - Restaurant</p>
                        <div className="line"></div>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                            fringilla semper nulla in pulvinar. </p>
                        <a href="#" className="action"><FaArrowRight/></a>
                    </div>
                </div>
                <div className="gallery-box">
                    <div className="image"><Image src="/images/basilico/gallery-2.jpg" alt="" width={480} height={558}/></div>
                    <div className="content">
                        <h5 className="name">Tender Octopus and Fennel</h5>
                        <p className="cate">Food - Restaurant</p>
                        <div className="line"></div>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                            fringilla semper nulla in pulvinar. </p>
                        <a href="#" className="action"><FaArrowRight/></a>
                    </div>
                </div>
                <div className="gallery-box">
                    <div className="image"><Image src="/images/basilico/gallery-3.jpg" alt="" width={480} height={558}/></div>
                    <div className="content">
                        <h5 className="name">Tender Octopus and Fennel</h5>
                        <p className="cate">Food - Restaurant</p>
                        <div className="line"></div>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                            fringilla semper nulla in pulvinar. </p>
                        <a href="#" className="action"><FaArrowRight/></a>
                    </div>
                </div>
                <div className="gallery-box">
                    <div className="image"><Image src="/images/basilico/gallery-4.jpg" alt="" width={480} height={558}/></div>
                    <div className="content">
                        <h5 className="name">Tender Octopus and Fennel</h5>
                        <p className="cate">Food - Restaurant</p>
                        <div className="line"></div>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                            fringilla semper nulla in pulvinar. </p>
                        <a href="#" className="action"><FaArrowRight/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery