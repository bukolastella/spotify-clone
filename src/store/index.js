import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./home-slice";
import audioSlice from "./audio-slice";

const store = configureStore({
  reducer: { home: homeSlice.reducer, audio: audioSlice.reducer },
});

export default store;
