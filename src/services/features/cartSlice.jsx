import { cartUpdate } from "@/lib/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : {
    cartItems: [],
    itemsPrice: 0,
    totalPrice: 0,
  };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
        const { product, qty } = payload;
        let existItem = state.cartItems.find(
            (cart) => cart.product.id == product.id
          );
          if (existItem) {
            state.cartItems = state.cartItems.map((cart) =>
              cart.product.id == existItem.product.id ? payload : cart
            );
          } else {
            state.cartItems = [...state.cartItems, payload];
          }

        cartUpdate(state);
        localStorage.setItem("cartItems", JSON.stringify(state));
    },
    deleteCart:(state,{payload})=>{
        const productId = payload
        const filterItems = state.cartItems.filter(cart=> cart.product.id != productId)
        state.cartItems = filterItems
        cartUpdate(state)
        localStorage.setItem("cartItems", JSON.stringify(state));
    }
  },
});

export const { addToCart,deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
