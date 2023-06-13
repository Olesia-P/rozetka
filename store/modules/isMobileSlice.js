import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

const isMobileSlice = createSlice({
  name: "isMobile",
  initialState: { value: initialStateValue },
  reducers: {
    changeMobile: (state, action) => {
      state.value = action.payload;
    },
  },
});
export default isMobileSlice.reducer;
export const { changeMobile } = isMobileSlice.actions;
