import React from 'react'
import Image from 'next/image'
import ButtonComponent from '../../Button/Button'

import './Vouchers.scss'

const Voucher = () => {
    return (
        <section className="vouchers w-svw" style={{backgroundImage: 'url("/images/basilico/voucher.jpg")'}}>
            <div className="container max-w-6xl">
                <div className="vouchers-content">
                    <div className="item image aos-init" data-aos-duration="1000" data-aos="fade-right">
                        <Image src="/images/basilico/menu2.jpg" alt="" width={585} height={464} className='object-cover h-full'/>
                    </div>
                    <div className="item content">
                        <Image src="/images/basilico/shopping-bag.png" alt="" data-aos-duration="1000" data-aos="fade-up" className="aos-init mx-auto" width={60} height={72}/>
                        <h4 data-aos-duration="1000" data-aos="fade-up" className="aos-init">order online</h4>
                        
                        <p data-aos-duration="1000" data-aos="fade-up" className="aos-init">
                            Why to wait in line, When you can order online. <br/>
                            Suspendisse mattis tincidunt ornare. Suspendisse potent
                        </p>

                        <ButtonComponent btnText='Order Now' btnTypeClass='btnPrimary'/>
                    </div>
                    <div className="item content">
                        <Image src="/images/basilico/gift-card.png" alt="" data-aos-duration="1000" data-aos="fade-up" className="aos-init mx-auto" width={71} height={71}/>
                        
                        <h4 data-aos-duration="1000" data-aos="fade-up" className="aos-init">
                            Gift vouchers
                        </h4>
                        
                        <p data-aos-duration="1000" data-aos="fade-up" className="aos-init">
                            Offer an unforgettable experience at our restaurant <br/>
                            to your dear ones. Suspendisse mattis tincidunt ornare.
                        </p>

                        <ButtonComponent btnText='Buy Now' btnTypeClass='btnPrimary'/>
                    </div>
                    <div className="item image aos-init" data-aos-duration="1000" data-aos="fade-left">
                        <Image src="/images/basilico/menu3.jpg" alt="" width={585} height={464} className='h-full object-cover'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Voucher