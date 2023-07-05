import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobileMenuOpen: false,
  isCartOpen: false,
  isAuthorizOpen: false,
  isCatalogOpen: false,
  isOverlayDisplayed: false,
};

const commonOpeningSlice = createSlice({
  name: "commonOpening",
  initialState,
  reducers: {
    changeIsMobileMenuOpen: (state, action) => {
      state.isMobileMenuOpen = action.payload;
    },
    changeIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
    changeIsAuthorizOpen: (state, action) => {
      state.isAuthorizOpen = action.payload;
    },
    changeIsCatalogOpen: (state, action) => {
      state.isCatalogOpen = action.payload;
    },
    changeIsOverlayDisplayed: (state, action) => {
      state.isOverlayDisplayed = action.payload;
    },
  },
});

export default commonOpeningSlice.reducer;
export const {
  changeIsMobileMenuOpen,
  changeIsCartOpen,
  changeIsAuthorizOpen,
  changeIsCatalogOpen,
  changeIsOverlayDisplayed,
} = commonOpeningSlice.actions;
