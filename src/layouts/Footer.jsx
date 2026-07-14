import React from 'react'
import Container from '../Components/Container'
import Image from '../Components/Image'
import FLogo from '../assets/FLogo.png'
import { TbSend2 } from "react-icons/tb";
import Qr from '../assets/Qr.png'
import Da from '../assets/Da.png'
import Gp from '../assets/Gp.png'
import { TfiFacebook } from "react-icons/tfi";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";



const Footer = () => {
  return (
   <footer className='bg-black'>
    <Container>
        <div className='w-full pt-20 pb-15 flex '>
<div className='w-3/12 '>
<Image className='cursor-pointer' src={FLogo}/>

<h1 className='font-pop font-medium text-xl text-c2 pt-12 pb-6 '>Subscribe</h1>
<p className='font-pop font-normal text-base text-c2 pb-4'>Get 10% off your first order</p>

     <div className="relative w-[230px] mr-6">
      <input
        type="text"
        placeholder="Enter your email"
        className="w-full h-[40px] rounded-md bg-transparent border border-c2 text-c2  pl-4 pr-10 text-base outline-none"
      />
      <TbSend2  className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-2xl cursor-pointer" />

    </div>
</div>
<div className='w-9/12'>


<div className=' flex justify-between'>
<div>
    <p className='font-pop font-medium text-xl text-c2 pb-6'>Support</p>
   <ul className='flex flex-col gap-y-4'>
     <li className='font-pop font-normal text-base text-c2 w-[180px] cursor-pointer'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
     <li className='font-pop font-normal text-base text-c2 w-[180px] cursor-pointer'>exclusive@gmail.com</li>
     <li className='font-pop font-normal text-base text-c2 w-[180px] cursor-pointer'>+88015-88888-9999</li>
   </ul>
</div>

<div>
    <p className='font-pop font-medium text-xl text-c2 pb-6'>Account</p>
   <ul className='flex flex-col gap-y-4'>
     <li className='font-pop font-normal text-base text-c2 w-[180px] cursor-pointer'>My Account</li>
     <li className='font-pop font-normal text-base text-c2 w-[180px] cursor-pointer'>Login / Register</li>
     <li className='font-pop font-normal text-base text-c2 w-[180px] cursor-pointer'>Cart</li>
     <li className='font-pop font-normal text-base text-c2 w-[180px] cursor-pointer'>Wishlist</li>
     <li className='font-pop font-normal text-base text-c2 w-[180px] cursor-pointer'>Shop</li>
   </ul>
</div>

<div>
    <p className='font-pop font-medium text-xl text-c2 pb-6'>Quick Link</p>
   <ul className='flex flex-col gap-y-4'>
     <li className='font-pop font-normal text-base text-c2 w-[180px] cursor-pointer'>Privacy Policy</li>
     <li className='font-pop font-normal text-base text-c2 w-[180px] cursor-pointer'>Terms Of Use</li>
     <li className='font-pop font-normal text-base text-c2 w-[180px] cursor-pointer'>FAQ</li>
     <li className='font-pop font-normal text-base text-c2 w-[180px] cursor-pointer'>Contact</li>
   </ul>
</div>

<div>
    <p className='font-pop font-medium text-xl text-c2 pb-6'>Download App</p>
        <li className='font-pop font-medium text-[12px] text-c2/70   list-none'>Save $3 with App New User Onlyy</li>

        <div className='w-[208px]  flex justify-between items-center mt-[10px]'>
            <div className='w-[100px]  bg-blue-200  cursor-pointer'>
                <Image className=' w-full ' src={Qr}/>
            </div>
            <div className='w-[100px]  '>
<div className='w-full h-12 cursor-pointer'>
           <Image className=' w-full h-10' src={Gp}/>
</div>
<div className='w-full h-12  cursor-pointer '>
      <Image className=' w-full h-10' src={Da}/>
</div>
            </div>
        </div>


        <div className='flex justify-between mt-6'>
            <span><TfiFacebook  className='text-c2 text-2xl cursor-pointer'/></span>
            <span><FiTwitter className='text-c2 text-2xl cursor-pointer' /></span>
            <span><FaInstagram className='text-c2 text-2xl cursor-pointer' /></span>
            <span><FaLinkedinIn className='text-c2 text-2xl cursor-pointer' /></span>
        </div>
</div>


</div>


</div>
        </div>
    </Container>

    <div className='w-full h-[1px] bg-white/10 '></div>

    <p className='text-base text-white/30 font-pop font-normal text-center pt-4 pb-6'>Copyright Rimel 2022. All right reserved</p>
   </footer>
  )
}

export default Footer
