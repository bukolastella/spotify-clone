import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: { apiData: [], loadingState: true },
  reducers: {
    replaceData(state, action) {
      state.apiData = action.payload;
    },
    setLoading(state, action) {
      state.loadingState = action.payload;
    },
  },
});

export const homeActions = homeSlice.actions;

export default homeSlice;
