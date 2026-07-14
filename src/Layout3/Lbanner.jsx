import React, { useState } from 'react'
import Container from '../Components/Container'
import Button from '../Components/Button'
import Image from '../Components/Image'
import Google from '../assets/Google.png'
import Sbimg from '../assets/Sb-img.png'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const SBanner = () => {
const [email, setEmail] = useState("");
const [emailError, setEmailError] = useState("");

const [password, setPassword] = useState("");
const [passwordError, setPasswordError] = useState("");
const [showPassword, setShowPassword] = useState(false);

const handleEmail = (e) => {
  setEmail(e.target.value);
  setEmailError("");
};

const handlePassword = (e) => {
  setPassword(e.target.value);
  setPasswordError("");
};


const handleLogin = () => {
  if (!email) {
    setEmailError("Please Enter Your Email :");
  }

  if (!password) {
    setPasswordError("Please Enter Your Password :");
  }

  if (email && password) {
    console.log("Login Successful");
  }
};

  return (
    <section className='relative min-h-screen'>
      
      {/* Left Side Image */}
      <div className='absolute w-[54%] bg-[#CBE4E8] h-200 rounded flex justify-center items-center'>
        <Image className='w-full h-200' src={Sbimg}/>
      </div>

      <Container>
        {/* Added minimum height so section takes full space */}
        <div className='flex relative min-h-screen'>
          
          {/* Right Side Form */}
          <div className='absolute right-0 top-[227.5px]'>
            <div className='ml-[50px]'>
              
              <h1 className='font-inter font-medium text-4xl text-black'>
                Log in to Exclusive
              </h1>

              <p className='pl-1 pt-6 font-normal text-base font-pop text-black'>
                Enter your details below
              </p>

              <div className='flex flex-col gap-y-10 mt-12 w-95'>
          

               <div className="relative">
  <input
    type="email"
    value={email}
    onChange={handleEmail}
    placeholder=" "
    className="
      peer
      w-full
      rounded-2xl
      border
      border-gray-300
      bg-gray-50
      px-5
      pt-6
      pb-3
      text-gray-800
      shadow-sm
      outline-none
      transition-all
      duration-300
      focus:border-blue-600
      focus:ring-4
      focus:ring-blue-100
      focus:shadow-[0_8px_30px_rgba(37,99,235,0.18)]
    "
  />

  <label
    className="
      absolute
      left-5
      top-2
      text-sm
      text-gray-500
      transition-all
      duration-300
      peer-placeholder-shown:top-5
      peer-placeholder-shown:text-base
      peer-placeholder-shown:text-gray-400
      peer-focus:top-2
      peer-focus:text-sm
      peer-focus:text-blue-600
    "
  >
    Email or Phone Number
  </label>

  {emailError && (
    <p className="mt-3 rounded-xl bg-red-500 px-4 py-3 text-sm font-medium text-white">
      {emailError}
    </p>
  )}
</div>

         <div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    value={password}
    onChange={handlePassword}
    placeholder=" "
    className="
      peer
      w-full
      rounded-2xl
      border
      border-gray-300
      bg-gray-50
      px-5
      pr-14
      pt-6
      pb-3
      text-gray-800
      shadow-sm
      outline-none
      transition-all
      duration-300
      focus:border-blue-600
      focus:ring-4
      focus:ring-blue-100
      focus:shadow-[0_8px_30px_rgba(37,99,235,0.18)]
    "
  />

  <label
    className="
      absolute
      left-5
      top-2
      text-sm
      text-gray-500
      transition-all
      duration-300
      peer-placeholder-shown:top-5
      peer-placeholder-shown:text-base
      peer-placeholder-shown:text-gray-400
      peer-focus:top-2
      peer-focus:text-sm
      peer-focus:text-blue-600
    "
  >
    Password
  </label>

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="
      absolute
      right-5
      top-1/2
      -translate-y-1/2
      text-gray-500
      hover:text-blue-600
      transition-all
      duration-300
      text-xl
    "
  >
    {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
  </button>

  {passwordError && (
    <p className="mt-3 rounded-xl bg-red-500 px-4 py-3 text-sm font-medium text-white shadow-md">
      {passwordError}
    </p>
  )}
</div>

        
              </div>

<div className='w-full flex justify-between mt-10 items-center'>

  <div
  
  onClick={handleLogin}
  >

<Button
  Text="Log In"
  className="
    w-40
    h-14
    rounded-2xl
    bg-gradient-to-r
    from-blue-600
    via-blue-700
    to-indigo-700
    text-white
    text-lg
    font-semibold
    tracking-wide
    shadow-[0_10px_30px_rgba(37,99,235,0.30)]
    transition-all
    duration-300
    hover:scale-[1.03]
    hover:shadow-[0_15px_40px_rgba(37,99,235,0.40)]
    hover:brightness-110
    active:scale-95
  "
/>
  </div>
                
              
<span
  className="
    cursor-pointer
    text-base
    font-semibold
    text-blue-600
    transition-all
    duration-300
    hover:text-blue-700
    hover:underline
    hover:underline-offset-4
  "
>
  Forgot Password?
</span>
</div>

            </div>
          </div>

        </div>
      </Container>

    </section>
  )
}

export default SBanner