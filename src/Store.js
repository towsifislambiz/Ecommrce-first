import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './slices/CounterSlice'
import CartReducer from './slices/CardSlice'
import  WishSlice  from './slices/WishSlice'
import  BreadcrumbSlice  from './slices/BreadcrumbSlice'
import  BuyNowSlice  from './slices/BuyNowSlice'

export const store = configureStore({
  reducer: {
    count: CounterReducer,
    Cart: CartReducer,
    Wish: WishSlice,
    breadcrumb:BreadcrumbSlice,
    BuyNow:BuyNowSlice
   
  },
})