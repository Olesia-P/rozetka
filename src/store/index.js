import { configureStore } from "@reduxjs/toolkit";
import isMobileReducer from "./modules/isMobileSlice";
import isCartReducer from "./modules/isCartSlice";
import cartReducer from "./modules/cartSlice";
import costSliceReducer from "./modules/costSlice";

export const store = configureStore({
  reducer: {
    isMobile: isMobileReducer,
    isCart: isCartReducer,
    cart: cartReducer,
    cost: costSliceReducer,
  },
});
