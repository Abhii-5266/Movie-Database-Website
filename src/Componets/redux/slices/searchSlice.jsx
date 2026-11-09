
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieName: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchMovie: function (state, action) {
      state.movieName = action.payload;
    },
  },
});

export const { searchMovie } = searchSlice.actions;

export default searchSlice.reducer;
