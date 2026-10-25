import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart") || "[]")
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const product = state.items.find(
        item => item.id === action.payload.id
      );

      if (product) {
        product.quantity++;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(
        item => item.id === action.payload
      );
      if (item) item.quantity++;
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        item => item.id === action.payload
      );
      if (item && item.quantity > 1) item.quantity--;
    },

    clearCart: state => {
      state.items = [];
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;