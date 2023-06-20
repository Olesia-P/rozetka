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
    },
    deleteFromCart: (state, action) => {
      const receivedId = action.payload;
      const newCart = state.value.products.filter((it) => it.id !== receivedId);
      state.value.products = newCart;
    },

    plusToQuantity: (state, action) => {
      const receivedId = action.payload;
      state.value.products.find((it) => it.id === receivedId).quantity =
        state.value.products.find((it) => it.id === receivedId).quantity + 1;
    },
    minusToQuantity: (state, action) => {
      const receivedId = action.payload;
      state.value.products.find((it) => it.id === receivedId).quantity > 1
        ? (state.value.products.find((it) => it.id === receivedId).quantity =
            state.value.products.find((it) => it.id === receivedId).quantity -
            1)
        : 1;
    },

    updateProductCost: (state, action) => {
      const receivedId = action.payload;
      state.value.products.find((it) => it.id === receivedId).currentCost =
        state.value.products.find((it) => it.id === receivedId).quantity *
        state.value.products.find((it) => it.id === receivedId).currentPrice;

      state.value.products.find((it) => it.id === receivedId).oldCost =
        state.value.products.find((it) => it.id === receivedId).quantity *
        state.value.products.find((it) => it.id === receivedId).oldPrice;
    },

    countCost: (state) => {
      const costArray = state.value.products.map((it) => it.currentCost);
      const initialValue = 0;
      const sum = costArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      );
      return sum;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  deleteFromCart,
  plusToQuantity,
  minusToQuantity,
  updateProductCost,
  countCost,
} = cartSlice.actions;
