import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import isMobileReducer from "./modules/isMobileSlice";

export const store = configureStore({
  reducer: {
    isMobile: isMobileReducer,
  },
});
