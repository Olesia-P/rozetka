import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { value: { products: [] } },
  reducers: {
    addToCart: (state, action) => {
      const identicalObject = state.value.products.find(
        (it) => it.id === action.payload.id
      );
      action.payload.id === identicalObject?.id
        ? (state.value.products.find(
            (it) => it.id === action.payload.id
          ).quantity = identicalObject.quantity + 1)
        : state.value.products.push(action.payload);
      console.log("payload", action.payload);
    },
    deleteFromCart: (state, action) => {
      // console.log("payload", action.payload);
      // state.value.splice(action.payload, 1);
      const newCart = state.value.products.filter(
        (it) => it.id !== action.payload
      );
      state.value.products = newCart;
    },

    plusToQuantity: (state, action) => {
      state.value[action.payload].quantity =
        state.value[action.payload].quantity + 1;
    },
    minusToQuantity: (state, action) => {
      state.value[action.payload].quantity >= 1
        ? (state.value[action.payload].quantity =
            state.value[action.payload].quantity - 1)
        : 1;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, deleteFromCart, plusToQuantity, minusToQuantity } =
  cartSlice.actions;
