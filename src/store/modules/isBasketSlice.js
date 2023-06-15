import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

const isBasketSlice = createSlice({
  name: "isBasket",
  initialState: { value: initialStateValue },
  reducers: {
    changeIsBasket: (state, action) => {
      state.value = action.payload;
    },
  },
});
export default isBasketSlice.reducer;
export const { changeIsBasket } = isBasketSlice.actions;
