import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const identicalObject = state.products.find(
        (it) => it.id === action.payload.id
      );
      action.payload.id === identicalObject?.id
        ? (state.products.find((it) => it.id === action.payload.id).quantity =
            identicalObject.quantity + 1)
        : state.products.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      const receivedId = action.payload;
      const newCart = state.products.filter((it) => it.id !== receivedId);
      state.products = newCart;
    },

    plusToQuantity: (state, action) => {
      const receivedId = action.payload;
      state.products.find((it) => it.id === receivedId).quantity =
        state.products.find((it) => it.id === receivedId).quantity + 1;
    },
    minusToQuantity: (state, action) => {
      const receivedId = action.payload;
      state.products.find((it) => it.id === receivedId).quantity > 1
        ? (state.products.find((it) => it.id === receivedId).quantity =
            state.products.find((it) => it.id === receivedId).quantity - 1)
        : 1;
    },

    updateProductCost: (state, action) => {
      const receivedId = action.payload;
      state.products.find((it) => it.id === receivedId).currentCost =
        state.products.find((it) => it.id === receivedId).quantity *
        state.products.find((it) => it.id === receivedId).currentPrice;

      state.products.find((it) => it.id === receivedId).oldCost =
        state.products.find((it) => it.id === receivedId).quantity *
        state.products.find((it) => it.id === receivedId).oldPrice;
    },

    // countCost: (state) => {
    //   const costArray = state.products.map((it) => it.currentCost);
    //   const initialValue = 0;
    //   const sum = costArray.reduce(
    //     (accumulator, currentValue) => accumulator + currentValue,
    //     initialValue
    //   );
    //   return state;
    // },
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
