import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/shop.reducer";

export const store = configureStore({
  reducer: {
    data: productReducer,
  },
});
