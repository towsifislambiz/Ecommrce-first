import React from 'react'
import Container from '../Components/Container'
import ContactCard from '../Components/ContactCard'
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";


const Contact = () => {
  return (
    <section className='mb-[140px]'>
        <Container>
         <div className='flex justify-between'>
               <ContactCard icon={<TbTruckDelivery />} Text='FREE AND FAST DELIVERY' Text2='Free delivery for all orders over $140'/>
               <ContactCard icon={<RiCustomerService2Line />} Text='24/7 CUSTOMER SERVICE' Text2='Friendly 24/7 customer support'/>
               <ContactCard icon={<AiOutlineSafety />} Text='MONEY BACK GUARANTEE' Text2='We reurn money within 30 days'/>
         </div>
        </Container>
    </section>
  )
}

export default Contact
