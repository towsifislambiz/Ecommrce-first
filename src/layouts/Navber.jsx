import React, { useEffect, useState, useRef } from 'react'
import Container from '../Components/Container'
import Image from '../Components/Image'
import Logo from '../assets/Logo.png'
import Listitem1 from '../Components/Listitem1'
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { data, Link } from 'react-router-dom'
import Abimg from  '../assets/Abimg.png'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { RxCross2 } from 'react-icons/rx'
import { Decrement, Increment, RemoveItem } from '../slices/CardSlice'
import { activeuser } from '../slices/BreadcrumbSlice'
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
 import { ClearBuyNow } from "../slices/BuyNowSlice";


const Navber = () => {
  const auth = getAuth();
const navigate = useNavigate();
  const [alldata, SetAlldata] = useState([])
  const [search, SetSearch] = useState([])
  const [search2, SetSearch2] = useState([])
  const [input, SetInput] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const [Cartopen , setCartopen]=useState(false)
  const searchRef = useRef(null)
  const [Total , SetTotal]=useState('')
  const [showAuthPopup, setShowAuthPopup] = useState(false)
 

let dispatch=useDispatch()

  let Data=useSelector(state=>state.Cart.value)

 let handleIncrement=(item)=>{
  dispatch(Increment(item))
 }
 let handleDecrement=(item)=>{
  dispatch(Decrement(item))
 }
 let handleRemove=(item)=>{
  dispatch(RemoveItem(item))
 }

 let handleBreadCrumb=(name)=>{
  dispatch(activeuser(name))
  
 }
  
const handleCheckout = () => {

  dispatch(ClearBuyNow());


  if (auth.currentUser) {
    navigate("/checkout");
  } else {
    setShowAuthPopup(true);
  }
};

  

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => SetAlldata(res.data.products))
  }, [])

  let handleInput = (e) => {
    let value = e.target.value
    SetInput(value)
      setShowDropdown(true)

    let filtered = alldata.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase())
    )
    let filtered2 = alldata.filter(item =>
      item.category.toLowerCase().includes(value.toLowerCase())
    )

    SetSearch(filtered)
    SetSearch2(filtered2)
  }

useEffect(() => {   
  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setShowDropdown(false)
    }
  }

  document.addEventListener("mousedown", handleClickOutside)

  return () => {
    document.removeEventListener("mousedown", handleClickOutside)
  }
}, [])

useEffect(() => {
  let total = 0;

  Data.forEach((item) => {
    total += item.Quantity * parseFloat(item.price.replace("$", ""));
  });

  SetTotal(total.toFixed(2));
}, [Data]);


  return (
    <nav className='mt-10 pb-4 border-b border-black/30'>
      <Container>
        <div className='flex justify-between items-center'>

          <div className='cursor-pointer'>
<Link to="/">
            <Image src={Logo} alt='logo image' />
</Link>
          </div>

          <div>
            <ul className='flex gap-x-12'>
              <Link onClick={()=>handleBreadCrumb("Home")} to="/"><Listitem1 Text='Home' /></Link>
              <Link onClick={()=>handleBreadCrumb("Contact")} to="/Contact"><Listitem1 Text='Contact' /></Link>
              <Link onClick={()=>handleBreadCrumb("About")} to="/About"><Listitem1 Text='About' /></Link>
              <Link onClick={()=>handleBreadCrumb("SignUp")} to="/SignUp"><Listitem1 Text='Sign Up' /></Link>
            </ul>
          </div>

          <div className='flex items-center relative'>

            <div
              ref={searchRef}
             className="relative w-[250px] mr-6">

              <input
                onChange={handleInput}
                value={input}
                type="text"
                placeholder="What are you looking for?"
                className="w-full h-[40px] rounded-md bg-gray-100 pl-4 pr-10 text-sm outline-none"
              />

              <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-black text-xl cursor-pointer" />

              {/* dropdown */}
{showDropdown && input.length > 0 && (
  <div className='w-[350px] max-h-[300px] overflow-y-auto bg-gradient-to-br from-cyan-400/20 via-blue-700/15 to-slate-900/90
backdrop-blur-md border border-cyan-400/10 shadow-lg absolute top-12 rounded-[10px] p-2 z-50'>

    {[...search, ...search2].length > 0 ? (
      [...search, ...search2].map((item, index) => (
  <Link
    key={item.id || index}
    to={`/ProductDetails/${item.id}`}
  >
    <li className="p-2 hover:bg-gray-300 rounded cursor-pointer text-black">
      {item.title || item.category}
    </li>
  </Link>

      ))
    ) : (
      <div className="p-2 text-gray-500 text-center">
        Not Found
      </div>
    )}

  </div>
)}

            </div>

            <span className="text-2xl cursor-pointer mr-4">
              <Link to="/Wish">
                <FaRegHeart className="hover:animate-icon-shake" />
              </Link>
            </span>

            <span className="text-2xl cursor-pointer relative">
            
                <BsCart3 onClick={()=>setCartopen(!Cartopen)} className="hover:animate-icon-shake" />
            
            </span>

{
  Cartopen && (
    Data.length > 0 ? (

      <div className="absolute top-14 right-0 w-[500px] rounded-3xl overflow-hidden shadow-2xl z-50">

        {/* Header */}
      <div className="bg-gradient-to-r from-[#6366F1] to-[#EC4899] px-6 py-6">

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/10 flex justify-center items-center">
              🛍️
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">
                Your Cart
              </h2>

              <p className="text-[#E0E7FF]">
                {Data.length} items in your cart
              
              </p>
            </div>
          </div>

          <button
           onClick={()=>setCartopen(false)}
            className="w-12 h-12 rounded-full bg-white/10 text-white text-3xl hover:bg-white/20 duration-300 flex justify-center items-center cursor-pointer"
          >
         <RxCross2/>

          </button>

        </div>

      </div>

      {/* Body */}

      <div className="bg-[#0F172A] max-h-[420px] overflow-y-auto">

        {Data.map((item) => (

          <div
            key={item.id}
            className="flex items-center justify-between px-6 py-5 border-b border-white/10"
          >

            {/* Left */}

            <div className="flex items-center gap-4 w-[55%]">

              <img
                src={item.image}
                className="w-20 h-20 rounded-xl bg-white object-contain p-2"
              />

              <div>

                <h3 className="text-white font-bold">
                  {item.title.length > 18
                    ? item.title.slice(0, 18) + "..."
                    : item.title}
                </h3>

                <p className="text-[#E0E7FF] text-sm mt-1">
                  Premium Product
                </p>

                <h4 className="text-[#FBCFE8] font-bold text-xl mt-2">
                  {item.price}
                </h4>

              </div>

            </div>

            {/* Right */}

        

<div className="flex flex-col items-end gap-3">

  <div className="flex items-center gap-5">

    <div className="flex bg-[#2A236B] rounded-xl overflow-hidden border border-white/10">

      <button 
   onClick={()=>handleDecrement(item)}
      className="px-4 py-2 text-white hover:bg-[#3b318e]"
      
      >
        −
      </button>

      <span className="px-5 flex items-center text-white">
        {item.Quantity}
      </span>

      <button 
      onClick={()=>handleIncrement(item)}
      className="px-4 py-2 text-white hover:bg-[#3b318e]">
        +
      </button>

    </div>

    <button
    onClick={() => handleRemove(item)}
      className="w-12 h-12 rounded-full text-white text-3xl hover:bg-white/10 duration-300 flex justify-center items-center cursor-pointer"
    >
      🗑️
    </button>

  </div>

  {/* Item Subtotal */}
 <p className="text-sm text-gray-300">
    Subtotal:
    <span className="ml-2 font-semibold text-[#FBCFE8]">
   ${(item.Quantity * parseFloat(item.price.replace("$", ""))).toFixed(2)}
    </span>
  </p>

</div>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="bg-gradient-to-r from-[#3B2E91] to-[#7C2367] px-6 py-6">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-[#E0E7FF] font-pop font-medeum text-2xl">
              Total
            </p>

            <h2 className="text-4xl font-bold text-white">
              ${Total}
            </h2>

          </div>

<div className="flex flex-col gap-4">
  

  <Link to="/Cart">
    <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#F43F5E] to-[#FB7185] text-white font-semibold text-lg hover:scale-105 duration-300">
      Cart
    </button>
  </Link>


<button
  onClick={handleCheckout}
  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#F43F5E] to-[#FB7185] text-white font-semibold text-lg hover:scale-105 duration-300"
>
  Proceed to Checkout
</button>

</div>
        </div>

      </div>

    </div>

     

    ) : (

      <div className="absolute top-14 right-0 w-[500px] bg-[#0F172A] rounded-3xl p-10 text-center text-white shadow-2xl z-50">

        <h2 className="text-2xl font-bold">
          🛒 Cart Empty
        </h2>

      </div>

    )
  )
}

{
  showAuthPopup && (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-[999]">

      <div className="relative w-[430px] rounded-3xl border border-white/10 bg-[#111827] shadow-[0_0_60px_rgba(236,72,153,.15)] overflow-hidden">

        {/* Top Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl"></div>

        <div className="relative p-8">

          {/* Close */}
          <button
            onClick={() => setShowAuthPopup(false)}
            className="absolute right-5 top-5 text-gray-400 hover:text-white text-2xl duration-300"
          >
            ✕
          </button>

          {/* Lock Icon */}
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-violet-600 flex justify-center items-center text-4xl shadow-lg">
            🔒
          </div>

          <h2 className="text-white text-3xl font-bold text-center mt-6">
            Authentication Required
          </h2>

          <p className="text-gray-400 text-center mt-4 leading-7">
            Please login or create an account
            before proceeding to checkout.
          </p>

          {/* Login */}
          <Link to="/Login">
            <button
              onClick={() => setShowAuthPopup(false)}
              className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold text-lg hover:scale-105 duration-300"
            >
              Login
            </button>
          </Link>

          {/* Signup */}
          <Link to="/SignUp">
            <button
              onClick={() => setShowAuthPopup(false)}
              className="w-full mt-4 py-4 rounded-2xl border border-gray-600 text-white font-semibold hover:bg-white/10 duration-300"
            >
              Create Account
            </button>
          </Link>

          {/* Continue Shopping */}
          <button
            onClick={() => {
              setShowAuthPopup(false)
              setCartopen(false)
            }}
            className="w-full mt-5 text-gray-400 hover:text-white duration-300"
          >
            Continue Shopping
          </button>

        </div>

      </div>

    </div>
  )
}
              

          </div>

        </div>
      </Container>
    </nav>
  )
}

export default Navber