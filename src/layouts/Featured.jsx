import React from 'react'
import Container from '../Components/Container'
import Button2 from '../Components/Button2'
import Heading from '../Components/Heading'
import Image from '../Components/Image'
import Aimg1 from '../assets/Aimg1.png'
import Aimg2 from '../assets/Aimg2.png'
import Aimg3 from '../assets/Aimg3.png'
import Aimg4 from '../assets/Aimg4.png'

const Featured = () => {
  return (
   <section className='mb-[140px]'>
    <Container>
<Button2 className='ml-3 text-c1 text-base ' Text='Featured'/>
<Heading className='mt-5 mb-15' Text='New Arrival'/>


<div className='w-full flex justify-between'>
<div className='w-[645px] h-[600px] bg-black relative cursor-pointer'>
    <Image className='w-[511px] h-[511px] mt-[89px] ml-[67px]' src={Aimg1}/>

    <div className=' absolute bottom-[32px] left-[32px]'>
    <h1 className=' text-2xl font-semibold font-inter text-c2'>PlayStation 5</h1>
    <p className='font-pop font-normal text-sm text-c2 w-[242px] py-4'>Black and White version of the PS5 coming out on sale.</p>
    <p className='font-pop font-medium text-base text-white border-b border-white/50 inline-block cursor-pointer'>Shop Now</p>
    </div>
</div>



<div className='w-[645px] h-[600px] '>


    <div className='w-full h-[285px] bg-[#0E0E0E] flex relative cursor-pointer'>
<div className='w-[165px] h-full '></div>
<div className='w-[480px] h-full '>

    <Image src={Aimg2}/>

     <div className=' absolute bottom-[32px] left-[32px]'>
    <h1 className=' text-2xl font-semibold font-inter text-c2'>Women’s Collections</h1>
    <p className='font-pop font-normal text-sm text-c2 w-[255px] py-4'>Featured woman collections that give you another vibe.</p>
    <p className='font-pop font-medium text-base text-white border-b border-white/50 inline-block cursor-pointer'>Shop Now</p>
    </div>
</div>
    </div>



    <div className='w-full h-[285px]  mt-[30px] flex justify-between'>
       <div className='w-[305px] h-full bg-black relative'>
  
  {/* image */}
  <div className='w-[235px] h-[250px] mt-[35px] ml-[40px] relative z-10 cursor-pointer'>
    <Image src={Aimg3} alt="img"/>
  </div>

  {/* circle */}
  <div className='w-[300px] h-[300px] bg-[#D9D9D9]/30 rounded-full absolute top-0 left-0 z-0 blur-[100px]'></div>

  <div className=' absolute bottom-[24px] left-[24px] z-10'>
    <h1 className=' text-2xl font-semibold font-inter text-c2'>Speakers</h1>
    <p className='font-pop font-normal text-sm text-c2 w-[255px] py-2'>Amazon wireless speakers</p>
    <p className='font-pop font-medium text-base text-white border-b border-white/50 inline-block cursor-pointer'>Shop Now</p>
    </div>
</div>
        <div className='w-[305px] h-full bg-black relative'>
  <div className='w-[235px] h-[250px] mt-[35px] ml-[40px] relative z-10 cursor-pointer'>
    <Image src={Aimg4} alt="img"/>
     <div className='w-[300px] h-[300px] bg-[#D9D9D9]/30 rounded-full absolute top-0 left-0 z-0 blur-[100px]'></div>

  
  </div>
  <div className=' absolute bottom-[24px] left-[24px] z-10'>
    <h1 className=' text-2xl font-semibold font-inter text-c2'>Perfume</h1>
    <p className='font-pop font-normal text-sm text-c2 w-[255px] py-2'>GUCCI INTENSE OUD EDP</p>
    <p className='font-pop font-medium text-base text-white border-b border-white/50 inline-block cursor-pointer'>Shop Now</p>
    </div>
        </div>

      
    </div>


</div>
</div>
    </Container>
   </section>
  )
}

export default Featured
