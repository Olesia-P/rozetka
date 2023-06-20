import { createSlice } from "@reduxjs/toolkit";

const costSlice = createSlice({
  name: "cost",
  initialState: { value: [] },
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
