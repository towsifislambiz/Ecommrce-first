import React from 'react'
import Image from '../Components/Image'
import { FaRegHeart } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";


const Wcard2 = ({src1 , Text , value1 , Discount , value2 , src2 , num , className ,className2 }) => {
  return (
    <div>
      <div className={`w-[300px] ${className}`}>

        <div className='w-full h-[280px] cursor-pointer bg-[#F5F5F5] rounded flex justify-center items-center flex-col relative overflow-hidden group'>

          <div>
            <Image src={src1}/>
          </div>

          {/* Discount */}
          <div className={`absolute top-3 left-3  px-3 py-1 rounded font-pop text-[12px] font-normal text-[#FAFAFA] ${className2}`}>
         {Discount}
          </div>

    

          {/* Eye */}
          <div className='w-[45px] h-[45px] rounded-full bg-white absolute right-3 top-[100%] flex justify-center items-center cursor-pointer group-hover:top-3 duration-400'>
            <FaRegEye className='text-2xl'/>
          </div>

          {/* Add to cart */}
          <button className='font-pop font-medium text-base text-white bg-black py-3 w-full absolute bottom-0 left-0 
          translate-y-full transition-all duration-400 group-hover:translate-y-0 rounded-b cursor-pointer'>
            Add To Cart
          </button>

        </div>

        <div className='w-full'>
          <h1 className='font-pop font-medium text-base text-black pt-[16px]'>
            {Text}
          </h1>

          <div className='py-[8px]'>
            <span className='text-c1 text-lg font-pop font-medium'>{value1}</span>
            <span className='text-black/50 text-lg font-pop font-medium ml-[12px]'><del>{value2}</del></span>
          </div>

          <div className='flex gap-x-[8px] items-center'>
            <Image src={src2}/> 
            <span className='text-sm text-black/50 font-pop font-semibold'>{num}</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Wcard2