import React, { useEffect } from "react";
import Subnav from "../layouts/Subnav";
import Navber from "../layouts/Navber";
import Banner from "../layouts/Banner";
import Flash from "../layouts/Flash";
import Categorys from "../layouts/Categorys";
import Product from "../layouts/Product";
import Product2 from "../layouts/Product2";
import Experience from "../layouts/Experience";
import Featured from "../layouts/Featured";
import Contact from "../layouts/Contact";
import Footer from "../layouts/Footer";
import { useDispatch } from "react-redux";
import { activeuser } from "../slices/BreadcrumbSlice";



const Home = () => {

const dispatch = useDispatch();

   useEffect(() => {
    window.scrollTo({ top: 0 })
  })
  useEffect(() => {
  dispatch(activeuser("Home"));
}, []);





  return (
    <div>
      <Subnav/>
      <Navber/>
      <Banner/>
      <Flash/>
      <Categorys/>
      <Product/>
      <Experience/> 
      <Product2/>
      <Featured/> 
      <Contact/>
      <Footer/>


    </div>
  )
}

export default Home
