import React from 'react'
import Container from '../Components/Container'
import Button2 from '../Components/Button2'
import Heading from '../Components/Heading'
import Cross from '../Components/Cross'
import Category from '../Components/Category'
import { GiSmartphone } from "react-icons/gi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { PiHeadphones } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";


const Categorys = () => {
  return (
  <section>
    <Container>
<div className='w-full border-b border-black/30 mb-[70px]'>
    <Button2 className='text-c1 text-base' Text='Categories'/>

<div className='flex justify-between mt-5 mb-15'>
<Heading Text='Browse By Category'/>
<Cross/>
</div>

<div className='flex mb-[70px] justify-between'>
<Category icon={<GiSmartphone />} Text='Phones'/>
<Category icon={<HiOutlineComputerDesktop />} Text='Computers'/>
<Category icon={<BsSmartwatch />} Text='SmartWatch'/>
<Category icon={<IoCameraOutline />} Text='Camera'/>
<Category icon={<PiHeadphones />} Text='HeadPhones'/>
<Category icon={<IoGameControllerOutline />} Text='Gaming'/>
</div>

</div>
    </Container>
  </section>
  )
}

export default Categorys
