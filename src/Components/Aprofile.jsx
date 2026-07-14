import React from 'react'
import Image from './Image'
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";


const Aprofile = ({src1 , Title , Text}) => {
  return (
    <div >
      <div className='w-90 h-137.5  '>
<div className='w-full h-105 bg-[#F5F5F5]'>
    <Image className='w-90 h-105' src={src1}/>
</div>
<div>
    <h1 className='font-inter font-medium text-[32px] text-black mt-7.5'>{Title}</h1>
    <p className='font-pop font-normal text-base text-black mb-4 mt-2'>{Text}</p>

    <div className='flex justify-between w-30'>
        <CiTwitter className='text-3xl' />
        <FaInstagram  className='text-3xl' />
        <FaLinkedinIn   className='text-3xl' />
    </div>
</div>
      </div>
    </div>
  )
}

export default Aprofile
