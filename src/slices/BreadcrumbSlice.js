import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: ["Home"],
};

const BreadcrumbSlice = createSlice({
  name: "breadcrumb",
  initialState,

  reducers: {
    activeuser: (state, action) => {
      const page = action.payload;

      // একই page হলে কিছু করবে না
      if (state.history[state.history.length - 1] === page) {
        return;
      }

      // Home এ গেলে reset
      if (page === "Home") {
        state.history = ["Home"];
        return;
      }

      // আগে থেকে থাকলে remove করো
      state.history = state.history.filter(item => item !== page);

      // শেষে add করো
      state.history.push(page);

      // শুধু শেষ ৩টা রাখো
      if (state.history.length > 3) {
        state.history = state.history.slice(-3);
      }
    },
  },
});

export const { activeuser } = BreadcrumbSlice.actions;
export default BreadcrumbSlice.reducer;