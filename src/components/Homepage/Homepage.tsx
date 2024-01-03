"use client";
import { useHomePage } from "@/hooks/useHomepage";
import SliderComponent from "../Slider/Slider";
import { ParallaxProvider } from "react-scroll-parallax";
import React from "react";
import AboutUsSection from "./AboutUsSection";
import OriginInspiration from "./OriginInspiration";

const Homepage = () => {
    const { data, isPending, isFetching }: any = useHomePage();

    if (isPending)
    return (
      <div className="absolute top-1/2 left-1/2 text-3xl">
        <div className="flex items-center">
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-[--main-background-color]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span>Loading...</span>
        </div>
      </div>
    );
    
    if(!data) return null;

    return (
      <ParallaxProvider>
        <div className="h-full overflow-hidden w-full">
            <SliderComponent data={data.data.attributes.home_page_slides}/>
            <AboutUsSection  data={data.data.attributes.about_us_home_page}/>
            <OriginInspiration data={data.data.attributes.origin_inspiration}/>
        </div>
      </ParallaxProvider>
    );
};

export default Homepage;
