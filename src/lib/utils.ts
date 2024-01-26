import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import ky from "ky"

const qs = require("qs");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const API_URL = 'http://localhost:1337/api'

export const RESTAURANT_1_BASE_URL = '/grand-house-with-strapi-backend';

export const kyOriginalApi = ky.create({
  prefixUrl: API_URL
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

export const buildMenu = () => {
  return qs.stringify(
    {
      populate: '*'
    }
  )
}

export const chunkArray = (arr: any, n: number) => {
    var chunkLength = Math.max(arr.length/n ,1);
    var chunks = [];
    
    for (var i = 0; i < n; i++) {
        if(chunkLength*(i+1)<=arr.length)chunks.push(arr.slice(chunkLength*i, chunkLength*(i+1)));
    }

    return chunks;
}
