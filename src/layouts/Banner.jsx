import React from 'react'
import Listitem2 from '../Components/Listitem2'
import Container from '../Components/Container'
import Image from '../Components/Image'
import BannerImg from '../assets/Banner.png'   
import { FaApple } from "react-icons/fa";
import Heading2 from '../Components/Heading2'
import { FaArrowRight } from "react-icons/fa6";


const Banner = () => {
  return (
  <section>
 <Container>
       <div className='mt-10 flex justify-between'>
        <div className='w-[280px] relative'>
<ul className='flex flex-col gap-y-4'>
<Listitem2 type={true} Text='Woman’s Fashion'/>
<Listitem2 type={true} Text='Men’s Fashion'/>
<Listitem2 Text='Electronics'/>
<Listitem2 Text='Home & Lifestyle'/>
<Listitem2 Text='Medicine'/>
<Listitem2 Text='Sports & Outdoor'/>
<Listitem2 Text='Baby’s & Toys'/>
<Listitem2 Text='Groceries & Pets'/>
<Listitem2 Text='Health & Beauty'/>
</ul>

<span className='w-[1px] h-[390px] bg-black/30 inline-block absolute top-[-40px] right-0'></span>
        </div>

        <div className='w-[975px] h-[350px] bg-black ml-[45px] flex justify-between'>
                <div className='w-[48%]'>
<div className='mt-[58px] ml-16'>
    <span className='flex w-[190px] justify-between items-center'>
<FaApple className='text-white text-5xl' />
<p className='font-pop font-normal text-base text-c2'>iPhone 14 Series</p>
</span>

<Heading2 className='w-[280px] pt-5 pb-[22px]' Text='Up to 10% off Voucher'/>

<span className="inline-flex items-center group cursor-pointer">
  <span className="font-pop font-semibold text-sm text-c2 border-b border-c2">
    ShopNow
  </span>

  <FaArrowRight className="text-white text-xl ml-2 transition-all duration-300 group-hover:ml-10" />
</span>

</div>

                </div>

                <div className='w-[52%] h-full'>
                <Image className='w-full h-full'  src={BannerImg}/>
                </div>

        </div>

    </div>
 </Container>
  </section>
  )
}

export default Banner