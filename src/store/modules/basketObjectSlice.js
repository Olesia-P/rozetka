import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

const basketObjectSlice = createSlice({
  name: "basketObject",
  initialState: { value: initialStateValue },
  reducers: {
    addToBasketObject: (state, action) => {
      state.value.push(action.payload);
    },
    deleteFromBasketObject: (state, action) => {
      state.value.splice(action.payload, 1);
    },

    plusToQuantity: (state, action) => {
      state.value[action.payload].quantity =
        state.value[action.payload].quantity + 1;
    },
    minusToQuantity: (state, action) => {
      state.value[action.payload].quantity > 0
        ? (state.value[action.payload].quantity =
            state.value[action.payload].quantity - 1)
        : 0;
    },
  },
});

export default basketObjectSlice.reducer;
export const {
  addToBasketObject,
  deleteFromBasketObject,
  plusToQuantity,
  minusToQuantity,
} = basketObjectSlice.actions;
