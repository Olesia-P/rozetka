import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import isMobileReducer from "./modules/isMobileSlice";
import isBasketReducer from "./modules/isBasketSlice";
import cartReducer from "./modules/cartSlice";
import costSliceReducer from "./modules/costSlice";

export const store = configureStore({
  reducer: {
    isMobile: isMobileReducer,
    isBasket: isBasketReducer,
    cart: cartReducer,
    cost: costSliceReducer,
  },
});
