import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./home-slice";

const store = configureStore({
  reducer: { home: homeSlice.reducer },
});
