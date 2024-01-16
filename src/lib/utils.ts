import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import ky from "ky"

const qs = require("qs");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const kyOriginalApi = ky.create({
  prefixUrl: 'http://localhost:1337/api'  
})

export const buildQueryHomePage = () => {
  return qs.stringify(
    {
      populate: {
        restaurants: '*',
        home_page_slides: {
          populate: '*'
        },
        about_us_home_page: {
          populate: '*'
        },
        origin_inspiration: {
          populate: '*'
        },
        menu: {
          populate: '*'          
        },
        rerservations: {
          populate: '*'
        },
        testimonials: {
          populate: '*'
        }
      }
    }, 
    {
      encodeValuesOnly: true
    }
  )
}

export const buildFooter = () => {
  return qs.stringify(
    {
      populate: {
        logo: {
          populate: '*'
        },
        site_info: {
          populate: '*'
        },
        bg_image: {
          populate: '*'
        },
        site_menus: {
          populate: '*'
        }
      }
    }
  )
}