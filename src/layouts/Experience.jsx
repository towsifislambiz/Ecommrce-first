import React from 'react'
import Container from '../Components/Container'
import Image from '../Components/Image'
import Eimg from '../assets/Eimg.png'
import Heading2 from '../Components/Heading2'
import Button from '../Components/Button'

const Experience = () => {
  return (
    <section className='mb-[71px]'>
        <Container>
 <div className='w-full h-[500px] flex bg-black'>
  <div className='w-6/12'>
  <div className='mt-17 m-[56px]'>
    <p className='text-[#00FF66] font-pop font-semibold text-base'>Categories</p>
    <Heading2 className='w-[420px] mt-8 mb-[138px]' Text='Enhance Your Music Experience'/>
    
    <button className='text-c2 font-pop font-medium text-base bg-[#00FF66] px-12 py-4 cursor-pointer rounded'>Buy Now!</button>
  </div>
  </div>

  <div className='w-6/12 cursor-pointer mt-10'>
    <div className='w-full h-full relative'> 

      {/* circle */}
    <div className="w-[550px] h-[450px] rounded-full bg-white/30 absolute top-0 left-0 z-0 blur-[150px]"></div>

      {/* image */}
      <div className='relative z-10'>
        <Image src={Eimg}/>
      </div>

    </div>
  </div>
</div>
            
        </Container>
    </section>
  )
}

export default Experience
