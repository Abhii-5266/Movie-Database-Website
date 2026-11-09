
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice.jsx";

const mystore = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default mystore;
