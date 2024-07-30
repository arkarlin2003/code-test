import { cartUpdate } from "@/lib/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      cartItems: [],
      itemsPrice: 0,
      totalPrice: 0,
      information: {
        contactEmail: "",
        shippingAddress: {
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          postalCode: "",
          phone: "",
        },
      },
      shippingMethod: "",
      paymentMethod: {
        type: "",
        cardNumber: "",
        nameOnCard: "",
        year: "",
        month: "",
        ccv: "",
      },
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
      localStorage.setItem("cart", JSON.stringify(state));
    },
    deleteCart: (state, { payload }) => {
      const productId = payload;
      const filterItems = state.cartItems.filter(
        (cart) => cart.product.id != productId
      );
      state.cartItems = filterItems;
      cartUpdate(state);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    setInformation: (state, { payload }) => {
      state.information = payload;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    setShippingMethod: (state, { payload }) => {
      state.shippingMethod = payload.shippingMethod;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    setPaymentMethod: (state, { payload }) => {
      state.paymentMethod = payload.paymentMethod;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.information = {
        contactEmail: "",
        shippingAddress: {
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          postalCode: "",
          phone: "",
        },
      };
      state.shippingMethod = "";
      state.paymentMethod = {
        type: "",
        cardNumber: "",
        nameOnCard: "",
        year: "",
        month: "",
        ccv: "",
      };
      cartUpdate(state);
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const {
  addToCart,
  deleteCart,
  setInformation,
  setShippingMethod,
  setPaymentMethod,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
