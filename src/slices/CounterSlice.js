import { createSlice } from '@reduxjs/toolkit'

export const CounterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state , actions) => {
     state.value+=actions.payload
    },
  decrement: (state, action) => {
  if (state.value - action.payload >= 0) {
    state.value -= action.payload;
  } else {
    state.value = 0;
  }
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment , decrement } = CounterSlice.actions

export default CounterSlice.reducer