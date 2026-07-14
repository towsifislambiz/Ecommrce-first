import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";


const Cross = ({className}) => {
  return (
    <div className={className}>
      <div className='flex w-[100px] justify-between'>
        <div className='group w-[46px] h-[46px] rounded-full bg-[#F5F5F5] flex justify-center items-center cursor-pointer hover:bg-c1  duration-300'><GoArrowLeft className='text-3xl text-black group-hover:text-white  duration-300'/></div>
        <div className='group w-[46px] h-[46px] rounded-full bg-[#F5F5F5] flex justify-center items-center          hover:bg-c1 duration-300'><GoArrowRight className='text-3xl text-black cursor-pointer group-hover:text-white duration-300' /></div>
      </div>
    </div>
  )
}

export default Cross
