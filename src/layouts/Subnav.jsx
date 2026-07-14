import React from 'react'
import Container from '../Components/Container'
import { IoIosArrowDown } from "react-icons/io";

const Subnav = () => {
  return (
   
      <section className='bg-black'>
     <Container>
        
        <div className='flex justify-between'>
                 <div className='flex justify-center'>
    <p className='ml-[350px] py-[15px] font-pop font-normal text-sm text-c2'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='font-pop font-semibold text-sm text-c2 ml-2 border-b border-c2 cursor-pointer'>ShopNow</span></p>

         </div>
         
    <button className='font-pop font-semibold text-sm text-c2 flex items-center cursor-pointer'>English
<IoIosArrowDown  className='text-xl ml-1'/>
 </button>
        </div>
       
     </Container>
      </section>
  )
}

export default Subnav
