import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import isMobileReducer from "./modules/isMobileSlice";
import isBasketReducer from "./modules/isBasketSlice";

export const store = configureStore({
  reducer: {
    isMobile: isMobileReducer,
    isBasket: isBasketReducer,
  },
});
