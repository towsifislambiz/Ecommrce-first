import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const Listitem2 = ({Text , className , className1 , type}) => {
  return (
    <div > 
  <span className='inline-block'>
        <li className={`group font-pop font-normal text-base text-black list-none flex items-center cursor-pointer  ${className} `}>
        {Text}
     {type&&<MdKeyboardArrowRight className={`text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-[59px] duration-500 ${className1}`} />}       
      </li>
  </span>
    </div>
  )
}

export default Listitem2
