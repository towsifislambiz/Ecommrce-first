import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import Button2 from '../Components/Button2'
import Heading from '../Components/Heading'
import Cross from '../Components/Cross'
import Card2 from '../Components/Card2'
import Pimg1 from '../assets/Pimg1.png'
import Pimg2 from '../assets/Pimg2.png'
import Pimg3 from '../assets/Pimg3.png'
import Pimg4 from '../assets/Pimg4.png'
import Fs5 from '../assets/Fs5.png'
import F4s from '../assets/F4s.png'
import F45s from '../assets/F45s.png'
import Fs3 from '../assets/Fs3.png'
import Button from '../Components/Button'
import { data, Link } from 'react-router-dom'

const Product2 = () => {
    const START_INDEX = 9
  const INITIAL_SHOW = 17

  let [alldata , SetAlldata]=useState([])
    let [show , SetShow]=useState(INITIAL_SHOW)

useEffect(() => {
  fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(data=>SetAlldata(data.products))
}, [])



  return (
  <section className='mb-[168px]'>
    <Container>
 <Button2 className='text-c1 text-base' Text='Our Products'/>
<div className='flex justify-between mt-5 mb-15'>
    <Heading Text='Explore Our Products'/> 
    <Cross/>
</div>

<div className='flex gap-x-7.5 flex-wrap gap-y-15 mb-15'>

  {
  alldata.slice(START_INDEX,show).map((item , index) => (


    <Card2
   key={item.id}
   id={item.id}
         src1={item.thumbnail}
         Text={item.title}
         value1={`$${item.price}`}
         value2="$160"
         src2={Fs5}
         num={item.stock}
    />
  ))
}
    
 
</div> 

<div className='flex justify-center'> 
{
  show >= alldata.length ? <div onClick={() => SetShow(INITIAL_SHOW)}>
              <Button
                className="bg-c1 text-white border border-transparent hover:bg-transparent hover:border-c1 hover:text-c1"
                Text="Less All Products"
              />
            </div> : <>
  <div onClick={()=>SetShow(alldata.length)}>
  
<Button
  className="bg-c1 text-white border border-transparent hover:bg-transparent hover:border-c1 hover:text-c1"
  Text="View All Products"
/>
</div></>
}
</div>

    </Container>
  </section>
  )
}

export default Product2
