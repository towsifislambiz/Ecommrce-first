import React, { useEffect } from 'react'
import Subnav from '../layouts/Subnav'
import Wnavber from '../Layout2/Wnavber'
import Wishlist from '../Layout2/Wishlist'
import JustYou from '../Layout2/JustYou'
import Footer from '../layouts/Footer'
import { activeuser } from '../slices/BreadcrumbSlice'
import { useDispatch } from 'react-redux'

const Wish = () => {
  
const dispatch = useDispatch();

useEffect(() => {
  dispatch(activeuser("Wish"));
}, []);
  return (
    <div>
      <Subnav/>
      <Wnavber/>
      <Wishlist />
      <JustYou/>
      <Footer/>
    </div>
  )
}

export default Wish
