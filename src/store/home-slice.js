import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: { apiData: [] },
  reducers: {
    replaceData(state, action) {
      state.apiData = action.payload;
    },
  },
});

export const homeActions = homeSlice.actions;

export default homeSlice;
