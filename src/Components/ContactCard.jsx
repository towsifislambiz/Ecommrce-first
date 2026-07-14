import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";


const ContactCard = ({icon , Text , Text2 , className}) => {
  return (
    <div>
      <div className={`w-[320px]  flex justify-center items-center flex-col ${className}`}>
<div className='w-[100px] h-[100px] bg-[#2F2E30]/30 rounded-full flex justify-center items-center cursor-pointer'>
<div className='w-[80px] h-[80px] rounded-full bg-black flex justify-center items-center'>
<div className='text-5xl text-white'>
   {icon}
</div>
</div>
</div>
<h1 className='font-pop font-semibold text-xl text-black mt-6 mb-2'>{Text}</h1>
<p className='font-pop font-normal text-sm text-black  '>{Text2}</p>

      </div>
    </div>
  )
}

export default ContactCard
