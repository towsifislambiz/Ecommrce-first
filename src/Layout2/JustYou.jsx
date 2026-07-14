import React from 'react'
import Container from '../Components/Container'
import Button2 from '../Components/Button2'
import Button from '../Components/Button'
import Wcard2 from '../Components/Wcard2'
import Pimg3 from '../assets/Pimg3.png'
import Fcard1 from '../assets/Fcard1.png'
import Fcard2 from '../assets/Fcard2.png'
import Fcard3 from '../assets/Fcard3.png'
import Fs5 from '../assets/Fs5.png'

const JustYou = () => {
  return (
  <div>
    <section className='mb-35'>
        <Container>
<div className='flex justify-between items-center mb-15'>
    <Button2 className='text-xl' Text='Just For You'/>
  <Button className='bg-white text-black border border-black/50 hover:bg-black hover:border-transparent hover:text-white' Text='See All'/>
</div>

<div className='flex justify-between'>
    <Wcard2 src1={Pimg3} Text='ASUS FHD Gaming Laptop' value1='$960' value2='$1160' src2={Fs5} num='(65)'   className2='bg-c1' Discount='-40%'/>
    <Wcard2 src1={Fcard1} Text='IPS LCD Gaming Monitor' value1='$1160' src2={Fs5} num='(65)' className2='bg-c1' Discount='-40%' />
    <Wcard2 src1={Fcard2} Text='HAVIT HV-G92 Gamepad' value1='$560'  src2={Fs5} num='(65) ' className2='bg-[#00FF66]' Discount='NEW'/>
    <Wcard2 src1={Fcard3} Text='AK-900 Wired Keyboard' value1='$200'  src2={Fs5} num='(65)'  className2='bg-c1' Discount='-40%'/>
</div>
        </Container>
    </section>
  </div>
  )
}

export default JustYou
