import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

const costSlice = createSlice({
  name: "cost",
  initialState: { value: initialStateValue },
  reducers: {
    addToCost: (state, action) => {
      state.value.push(action.payload);
    },
    deleteFromCost: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export default costSlice.reducer;
export const { addToCost, deleteFromCost } = costSlice.actions;
