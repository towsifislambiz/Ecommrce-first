import React from 'react'



const Acard = ({Icon , num , Text}) => {
  return (
    <div>
    <div className='w-75 h-62.5 border border-black/30 rounded group hover:bg-c1 duration-300 hover:border-transparent cursor-pointer'>

<div className='flex flex-col justify-center items-center'>
    <div className='w-22 h-22.5 mt-7.5 bg-[#2F2E30]/30 rounded-full flex  justify-center items-center cursor-pointer group-hover:bg-white/30 duration-300'>
    <div className='w-17 h-17 bg-black rounded-full flex justify-center items-center group-hover:bg-white duration-300'>
{Icon}
    </div>
    </div>

    <h1 className='font-inter font-extrabold text-[32px] text-black mt-6 mb-3 group-hover:text-white duration-300'>{num} </h1>

    <p className='font-pop font-normal text-base text-black group-hover:text-white duration-300'>{Text}</p>
</div>

    </div>
    </div>
  )
}

export default Acard
