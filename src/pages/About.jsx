import React, { useEffect } from 'react'
import Subnav from '../layouts/Subnav'
import Cnav from '../layout4/Cnav'
import Container from '../Components/Container'
import Image from '../Components/Image'
import Abimg from '../assets/Abimg.png'
import Acard from '../Components/Acard'
import { LuHouse } from "react-icons/lu";
import { BiDollarCircle } from "react-icons/bi";
import { FaShopify } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import Aprofile from '../Components/Aprofile'
import Apimg1 from '../assets/Apimg1.png'
import Apimg2 from '../assets/Apimg2.png'
import Apimg3 from '../assets/Apimg3.png'
import Contact from '../layouts/Contact'
import Footer from '../layouts/Footer'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RxSlash } from 'react-icons/rx'
import { activeuser } from '../slices/BreadcrumbSlice'

const About = () => {
const history = useSelector((state) => state.breadcrumb.history);


const dispatch = useDispatch();

useEffect(() => {
  dispatch(activeuser("About"));
}, []);

  return (
    <div>
      <div className='mb-10'>
        <Subnav/>
      </div>

      <Cnav/>

<section className='relative mb-80 min-h-[650px]'>
  <Container>
<p className="flex items-center">
  {history.map((item, index) => (
    <React.Fragment key={`${item}-${index}`}>
      {index > 0 && (
        <span className="mx-2">
          <RxSlash />
        </span>
      )}

      {index === history.length - 1 ? (
        <span>{item}</span>
      ) : (
        <Link to={item === "Home" ? "/" : `/${item}`}>
          <span className="text-black/50">{item}</span>
        </Link>
      )}
    </React.Fragment>
  ))}
</p>

    <div className='mt-35'>
      <h1 className='font-inter font-semibold text-[54px] text-black'>
        Our Story
      </h1>

      <p className='font-pop font-normal text-base text-black w-131.25 mt-10 mb-6'>
        Launced in 2015, Exclusive is South Asia’s premier online shopping
        makterplace with an active presense in Bangladesh. Supported by wide
        range of tailored marketing, data and service solutions, Exclusive has
        10,500 sallers and 300 brands and serves 3 millioons customers across
        the region.
      </p>

      <p className='font-pop font-normal text-base text-black w-131.25'>
        Exclusive has more than 1 Million products to offer, growing at a very
        fast. Exclusive offers a diverse assotment in categories ranging from
        consumer.
      </p>
    </div>

    <div className='absolute top-0 right-0 w-[50%] h-[650px] bg-[#EB7EA8] rounded'>
      <Image className='w-full h-full object-cover' src={Abimg} />
    </div>
  </Container>
</section>



<section className='mb-35'>
    <Container>
        <div className='flex justify-between '>
            <Acard Icon={<LuHouse  className='text-5xl text-white group-hover:text-black duration-300'/>} num='10.5k ' Text='Sallers active our site'/>
            <Acard Icon={<BiDollarCircle   className='text-5xl text-white group-hover:text-black duration-300'/>} num='33k ' Text='Mopnthly Produduct Sale'/>
            <Acard Icon={<FaShopify  className='text-5xl text-white group-hover:text-black duration-300'/>} num='10.5k ' Text='Sallers active our site'/>
            <Acard Icon={<FaSackDollar  className='text-5xl text-white group-hover:text-black duration-300'/>} num='10.5k ' Text='Sallers active our site'/>
        </div>
    </Container>
</section>


<section className='mb-45'>
    <Container>
     <div className='flex justify-between'>
           <Aprofile src1={Apimg1} Title='Tom Cruise' Text='Founder & Chairman'/>
        <Aprofile src1={Apimg2} Title='Emma Watson' Text='Managing Director'/>
        <Aprofile src1={Apimg3} Title='Will Smith' Text='Product Designer'/>
     </div>
    </Container>
</section>


<div className='flex justify-center'>
    
<div className='w-275'>
   
        <Contact/>
  
</div>
</div>

<Footer/>
    </div>
  )
}

export default About
