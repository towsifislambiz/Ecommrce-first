import { createSlice } from '@reduxjs/toolkit'

export const WishSlice = createSlice({
  name: 'Wish',
  initialState: {
    value: localStorage.getItem("wishlist")?JSON.parse(localStorage.getItem("wishlist")):[],
  },
  reducers: {
    Wishlist: (state, action) => {
      state.value.push(action.payload)

      localStorage.setItem("wishlist", JSON.stringify(state.value));
   
      
      
      
    },

    RemoveItem: (state, action) => {
      state.value = state.value.filter(
        item => item.id !== action.payload
      )

       localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
  },
})

// Action creators are generated for each case reducer function
export const { Wishlist, RemoveItem } = WishSlice.actions

export default WishSlice.reducer