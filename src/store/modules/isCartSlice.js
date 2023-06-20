import { createSlice } from "@reduxjs/toolkit";

const isCartSlice = createSlice({
  name: "isCart",
  initialState: { value: false },
  reducers: {
    changeIsCart: (state, action) => {
      state.value = action.payload;
    },
  },
});
export default isCartSlice.reducer;
export const { changeIsCart } = isCartSlice.actions;
