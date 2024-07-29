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

const changeDecimal = (price) => {
  return (Math.round(price * 100) / 100).toFixed(2);
};

export const cartUpdate = (state) => {
  state.itemsPrice = changeDecimal(
    state.cartItems.reduce((pre, cur) => pre + cur.product.price * cur.qty, 0)
  );
  state.totalPrice = Number(state.itemsPrice).toFixed(2);
  return state;
};
