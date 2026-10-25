import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice";

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

store.subscribe(() => {
  localStorage.setItem(
    "cart",
    JSON.stringify(store.getState().cart.items)
  );
});

export default store;