import { createSlice } from '@reduxjs/toolkit'

export const CardSlice = createSlice({
  name: 'Cart',
  initialState: {
    value: localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],
  },
  reducers: {
   Addtocart: (state, action) => {
  console.log("Payload:", action.payload);

  let item = state.value.find(
    item => item.title === action.payload.title
  );

  if (item) {
    item.Quantity += 1;
  } else {
    state.value.push({
      ...action.payload,
      Quantity: 1,
    });
  }

 localStorage.setItem("cart", JSON.stringify(state.value))


},
         Increment:(state,actions)=>{
state.value.map(item=>{
  if(item.title==actions.payload.title){
    item.Quantity+=1
  }
})

 localStorage.setItem("cart", JSON.stringify(state.value))
         },

Decrement: (state, action) => {
  state.value.forEach((item, index) => {
    if (item.title === action.payload.title) {
      if (item.Quantity > 1) {
        item.Quantity -= 1;
      } else {
        // Quantity == 1 হলে Product Remove
        state.value.splice(index, 1);
      }
    }
  });
   localStorage.setItem("cart", JSON.stringify(state.value))
},
RemoveItem: (state, actions) => {
  state.value.map((item , index) => {
    if (item.title == actions.payload.title) {
     state.value.splice(index , 1)
    }
  })

   localStorage.setItem("cart", JSON.stringify(state.value))
}
}

})

// Action creators are generated for each case reducer function
export const { Addtocart , Increment , Decrement , RemoveItem} = CardSlice.actions

export default CardSlice.reducer