import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { TiArrowRight } from "react-icons/ti";

import "./SBlog.scss";

const data = [
  {
    imgUrl: "/images/basilico/blog/blog-01.jpg",
    date: "25/3/2024",
    title: "How to Design a Small Restaurant",
  },
  {
    imgUrl: "/images/basilico/blog/blog-02.jpg",
    date: "25/3/2024",
    title: "How to Design a Small Restaurant",
  },
  {
    imgUrl: "/images/basilico/blog/blog-03.jpg",
    date: "25/3/2024",
    title: "How to Design a Small Restaurant",
  },
  {
    imgUrl: "/images/basilico/blog/blog-01.jpg",
    date: "25/3/2024",
    title: "How to Design a Small Restaurant",
  },
];

const SBlog = () => {
  return (
    <section className="s-blog">
      <div className="container max-w-7xl">
        <div className="block-text text-center">
          <p
            className="subtitle aos-init aos-animate"
            data-aos-duration="1000"
            data-aos="fade-up"
          >
            latest new
          </p>
          <h3
            className="title aos-init aos-animate"
            data-aos-duration="1000"
            data-aos="fade-up"
          >
            What&lsquo;s new in our blog?{" "}
          </h3>
          <p
            className="text aos-init aos-animate"
            data-aos-duration="1000"
            data-aos="fade-up"
          >
            Read the latest news from our restaurant. Mauris condimentum
            ultrices arcu in condimentum. <br />
            Sed ante nunc, sodales quis laoreet eget
          </p>
        </div>
        <div className="blogSwiper">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            speed={1000}
            navigation={{
              enabled: true,
              nextEl: ".arrow-right",
            }}
            spaceBetween={40}
            loop={true}
            grabCursor={false}
          >
            {data.map((k: any, key: number) => {
              return (
                <SwiperSlide key={key}>
                  <div className="blog-box">
                    <div className="top-content relative">
                      <div className="image">
                        <Image src={k.imgUrl} alt=""  width={370} height={453} className="object-cover w-full"/>
                      </div>
                      <div className="meta">
                        <h4 className="text-[--foreground]">25</h4>
                        <p className="text-white text-sm uppercase mb-0">Jun 23</p>
                      </div>
                      <a href="blog_single.html" className="font-audrey title absolute text-xl left-8 right-8 bottom-6 z-10 text-white leading-7 uppercase p-4">
                        How to Design a Small Restaurant
                      </a>
                    </div>
                    <div className="bottom-content">
                      <ul className="uppercase">
                        <li className="author">
                          <a href="#">by Jhon Matter</a>
                        </li>
                        <li className="category">
                          <a href="#">Restaurant, Food</a>
                        </li>
                      </ul>
                      <div className="line"></div>
                      <p className="text">
                        Bigger certainly doesn’t mean better when giving your
                        guests a memorable dining experience and a tasty meal...
                      </p>
                      <a href="blog_single.html" className="btn-read flex items-center">
                        read more <TiArrowRight size={28}/>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SBlog;
