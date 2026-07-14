import React, { useEffect } from 'react'
import Subnav from '../layouts/Subnav.jsx'
import Snav from '../Layout3/Snav.jsx'
import Footer from '../layouts/Footer.jsx'
import Lbanner from '../Layout3/Lbanner.jsx'
import { useDispatch } from 'react-redux'
import { activeuser } from '../slices/BreadcrumbSlice.js'
const Login = () => {

  const dispatch = useDispatch();

useEffect(() => {
  dispatch(activeuser("Login"));
}, []);
  return (
    <div>
      <Subnav />
      <Snav />
    <Lbanner/>
      <Footer />
    </div>
  )
}

export default Login