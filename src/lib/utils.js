import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const wordSlice = (word) => {
  return word.slice(0,20)+"..."
}

export const titleToSlug = (title) => {
  return title.toLowerCase().replaceAll(' ','-')
}
export const currencyFormat = (price) => {
 return new Intl.NumberFormat('en-US',{
    style:'currency',currency:'USD'
  }).format(price)
}

export const randomProducts =  (array) => { 
  return array.map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value); 
}; 