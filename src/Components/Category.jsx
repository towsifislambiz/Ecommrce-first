import React from 'react'



const Category = ({icon , Text , className}) => {
  return (
    <div>
      <div className={`w-[190px] h-[160px] border border-black/30 bg-transparent rounded flex flex-col justify-center items-center group
      hover:bg-c1 hover:border-transparent duration-400 cursor-pointer ${className}`}>
<div className='text-6xl group-hover:text-white duration-400'> {icon}</div>
<h1 className='font-pop font-normal text-base text-black mt-4 group-hover:text-white duration-400'>{Text}</h1>
      </div>
    </div>
  )
}

export default Category
