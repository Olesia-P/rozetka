import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./modules/cartSlice";
import commonOpeningReducer from "./modules/commonOpeningSlice";

export const store = configureStore({
  reducer: {
    commonOpening: commonOpeningReducer,
    cart: cartReducer,
  },
});
