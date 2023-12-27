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

export const buildQueryPopulate = () => {
  return qs.stringify(
    {
      populate: '*'
    }, 
    {
      encodeValuesOnly: true
    }
  )
}