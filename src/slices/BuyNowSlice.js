import { createSlice } from "@reduxjs/toolkit";

export const BuyNowSlice = createSlice({
  name: "BuyNow",

  initialState: {
    value: localStorage.getItem("buyNow")
      ? JSON.parse(localStorage.getItem("buyNow"))
      : null,
  },

  reducers: {
    BuyNowProduct: (state, action) => {
      state.value = action.payload;

      localStorage.setItem(
        "buyNow",
        JSON.stringify(action.payload)
      );
    },

    ClearBuyNow: (state) => {
      state.value = null;

      localStorage.removeItem("buyNow");
    },
  },
});

export const { BuyNowProduct, ClearBuyNow } = BuyNowSlice.actions;

export default BuyNowSlice.reducer;