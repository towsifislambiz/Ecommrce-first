import React, { useState } from 'react'
import Container from '../Components/Container'
import Button from '../Components/Button'
import Image from '../Components/Image'
import Google from '../assets/Google.png'
import Sbimg from '../assets/Sb-img.png'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { log } from 'firebase/firestore/pipelines'
 import { Bounce, ToastContainer, toast } from 'react-toastify';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SBanner = () => {
  const auth = getAuth();
  let EmailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  let lowercase=/(?=.*[a-z])/
  let uppercase =/(?=.*[A-Z])/
  let digit =/(?=.*\d)/
  let special  =/(?=.*[@$!%*?&])/
let characters = /^.{8,16}$/
let [name,SetName]=useState("")
let [nameError , SetNameError]=useState()
let [email,SetEmail]=useState("")
let [emailError , SetEmailError]=useState()
let [password,SetPassword]=useState("")
let [PasswordError , SetPasswordError]=useState()
const [showPassword, setShowPassword] = useState(false);


let handleName=(e)=>{
  SetName(e.target.value);
  SetNameError("")
}



let handleEmail=(e)=>{
  SetEmail(e.target.value);
 SetEmailError("")
}
let handlePassword=(e)=>{
  SetPassword(e.target.value);
  SetPasswordError("")
}

const handleCreatAccount = () => {

  if(!name){
    SetNameError("Please Enter Your Name :")
  }

  if(!email){
    SetEmailError("Please Enter Your Email :")
  }
  else if(!EmailRegex.test(email)){
    SetEmailError("Please Enter Valid Email :")
  }


  if(!password){
    SetPasswordError("Please Enter Your Password :")
  }
  else if(!characters.test(password)){
    SetPasswordError("Password must be 8-16 characters long :")
  }
  else if(!lowercase.test(password)){
    SetPasswordError("Must contain at least one lowercase letter :")
  }
  else if(!uppercase.test(password)){
    SetPasswordError("Must contain at least one uppercase letter :")
  }
  else if(!digit.test(password)){
    SetPasswordError("Must contain at least one digit :")
  }
  else if(!special.test(password)){
    SetPasswordError("Must contain at least one special character :")
  }


  if(
    name &&
    email &&
    password &&
    EmailRegex.test(email) &&
    lowercase.test(password) &&
    uppercase.test(password) &&
    digit.test(password) &&
    special.test(password) &&
    characters.test(password)
  ){
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
toast.success("Registretion Successfull");

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
  
  
  });
  }

}

  return (
   
    <section className='relative min-h-screen'>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="Light"
transition={Bounce}
/>
      {/* Left Side Image */}
      <div className='absolute w-[54%] bg-[#CBE4E8] h-200 rounded flex justify-center items-center'>
        <Image className='w-full h-200' src={Sbimg}/>
      </div>

      <Container>
        {/* Added minimum height so section takes full space */}
        <div className='flex relative min-h-screen'>
          
          {/* Right Side Form */}
          <div className='absolute right-0 top-31.25'>
            <div className='ml-[50px]'>
              
              <h1 className='font-inter font-medium text-4xl text-black'>
                Create an account
              </h1>

              <p className='pl-1 pt-6 font-normal text-base font-pop text-black'>
                Enter your details below
              </p>

              <div className='flex flex-col gap-y-10 mt-12 w-100'>
      <div className="relative">
  <input
    type="text"
    value={name}
    onChange={handleName}
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
      text-[16px]
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
    Full Name
  </label>

  {nameError && (
    <p className="mt-3 rounded-xl bg-red-500 px-4 py-3 text-sm font-medium text-white shadow-md">
      {nameError}
    </p>
  )}
</div>

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
      text-[16px]
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
    <p className="mt-3 rounded-xl bg-red-500 px-4 py-3 text-sm font-medium text-white shadow-md">
      {emailError}
    </p>
  )}
</div>

<div>
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
        bg-white
        px-5
        pr-14
        pt-6
        pb-3
        text-[16px]
        text-gray-800
        shadow-sm
        outline-none
        transition-all
        duration-300
        focus:border-blue-600
        focus:ring-4
        focus:ring-blue-100
        focus:shadow-lg
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
        transition
        duration-300
        text-xl
      "
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  </div>

  {PasswordError && (
    <p className="mt-3 rounded-xl bg-red-500 px-4 py-3 text-sm font-medium text-white shadow-md">
      {PasswordError}
    </p>
  )}
</div>

              <div
              onClick={handleCreatAccount}
              >
                
<Button
  Text="Create Account"
  className="
    w-full
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
    shadow-lg
    shadow-blue-300/40
    transition-all
    duration-300
    hover:from-blue-700
    hover:via-blue-800
    hover:to-indigo-800
    hover:shadow-[0_12px_35px_rgba(37,99,235,0.35)]
    hover:-translate-y-1
    active:scale-95
  "
/>
              </div>
              </div>

 <button
  className="
    flex
    items-center
    justify-center
    w-full
    h-14
    mt-8
    rounded-2xl
    border
    border-white/30
    bg-white/80
    backdrop-blur-md
    text-gray-700
    font-semibold
    shadow-lg
    transition-all
    duration-300
    hover:bg-white
    hover:shadow-xl
    hover:-translate-y-1
    active:scale-95
    cursor-pointer
  "
>
  <Image
    className="w-6 h-6 mr-3"
    src={Google}
  />
  Continue with Google
</button>

            <div className="mt-8 text-center">
  <p className="text-[15px] text-gray-500 font-medium">
    Already have an account?
    <Link
      to="/Login"
      className="
        ml-2
        font-semibold
        text-blue-600
        transition-all
        duration-300
        hover:text-blue-700
        hover:underline
        underline-offset-4
      "
    >
      Log In
    </Link>
  </p>
</div>

            </div>
          </div>

        </div>
      </Container>

    </section>
  )
}

export default SBanner