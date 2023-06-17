import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import isMobileReducer from "./modules/isMobileSlice";
import isBasketReducer from "./modules/isBasketSlice";
import basketObjectReducer from "./modules/basketObjectSlice";
import costSliceReducer from "./modules/costSlice";

export const store = configureStore({
  reducer: {
    isMobile: isMobileReducer,
    isBasket: isBasketReducer,
    basketObject: basketObjectReducer,
    cost: costSliceReducer,
  },
});
