"use client";
import SliderComponent from "../Slider/Slider";
import { ParallaxProvider } from "react-scroll-parallax";
import React from "react";
import AboutUsSection from "./AboutUsSection";
import OriginInspiration from "./OriginInspiration";
import MenuSection from "./MenuSection";
import Reservations from "./Reservations";
import GetInTouch from "./GetInTouch";
import Testimonial from "./Testimonial";

const Homepage = ({ data }: any) => {
    return (
      <ParallaxProvider>
        <div className="h-full overflow-hidden w-full">
            <SliderComponent data={data.data.attributes.home_page_slides}/>
            <AboutUsSection  data={data.data.attributes.about_us_home_page}/>
            <OriginInspiration data={data.data.attributes.origin_inspiration}/>
            <MenuSection data={data.data.attributes.menu}/>
            <Reservations data={data.data.attributes.rerservations}/>
            <GetInTouch/>
            <Testimonial 
              data={data.data.attributes.testimonials.data}
            />
        </div>
      </ParallaxProvider>
    );
};

export default Homepage;
