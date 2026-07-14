import React, { useEffect } from 'react'
import Subnav from '../layouts/Subnav.jsx'
import Snav from '../Layout3/Snav.jsx'
import SBanner from '../Layout3/SBanner.jsx'
import Footer from '../layouts/Footer.jsx'
import { useDispatch } from 'react-redux'
import { activeuser } from '../slices/BreadcrumbSlice.js'


const SignUp = () => {
const dispatch = useDispatch();
useEffect(() => {
  dispatch(activeuser("SignUp"));
}, []);

  return (
    <div>
      <Subnav />
      <Snav />
      <SBanner />
      <Footer />
    </div>
  )
}

export default SignUp