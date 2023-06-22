import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobileMenuOpen: false,
  isCartOpen: false,
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
  },
});

export default commonOpeningSlice.reducer;
export const { changeIsMobileMenuOpen, changeIsCartOpen } =
  commonOpeningSlice.actions;
