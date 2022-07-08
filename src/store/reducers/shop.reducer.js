import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

export const productFetch = createAsyncThunk(
  "product/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/products?populate=image");
      if (!res.data) {
        throw new Error();
      }
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: "event",
  initialState: {
    loading: "",
    products: [],
  },
  extraReducers: {
    [productFetch.pending]: (state) => {
      state.loading = "loading";
    },
    [productFetch.fulfilled]: (state, action) => {
      state.products = [...action.payload];
      state.loading = "complete";
    },
    [productFetch.rejected]: (state) => {
      state.loading = "error";
    },
  },
});

export default productSlice.reducer;
