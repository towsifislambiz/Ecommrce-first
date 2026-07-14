import React, { useEffect } from "react";
import Subnav from "../layouts/Subnav";
import Cnav from "../layout4/Cnav";
import Container from "../Components/Container";
import Image from "../Components/Image";
import Cimg1 from "../assets/Cimg1.png";
import Cimg2 from "../assets/Cimg2.png";
import Button from "../Components/Button";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RxSlash } from "react-icons/rx";
import { activeuser } from "../slices/BreadcrumbSlice";

const Contact = () => {
const dispatch = useDispatch();

useEffect(() => {
  dispatch(activeuser("Contact"));
}, []);

const history = useSelector((state) => state.breadcrumb.history);

  return (
    <div>
      <div className='mb-10'>
        <Subnav/>
      </div>
      <Cnav/>


      <section>
        <Container>
     
<p className="flex items-center text-sm">
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
        <Link
          to={item === "Home" ? "/" : `/${item}`}
          onClick={() => dispatch(activeuser(item))}
        >
          <span className="text-black/50">{item}</span>
        </Link>
      )}
    </React.Fragment>
  ))}
</p>
    
    
<div className='flex justify-between mb-45'>
  <div className='w-4/12'>
<div className='w-105 rounded shadow-xl'>
<div className='pt-10 pl-8.75'>
      <div className='w-75 rounded  '>
<div className='flex items-center'>
<div className='w-12.5 h-12.5 bg-c1 rounded-full flex justify-center items-center'>
  <Image className='w-6 h-6' src={Cimg1}/>
</div>
<h5 className='font-pop font-medium text-base text-black ml-4'>Call To Us</h5>
</div>
<p className='font-pop font-normal text-base text-black pt-6 pb-4'>We are available 24/7, 7 days a week.</p>
<p className='font-pop font-normal text-base text-black'>Phone: +8801611112222</p>
  </div>

  <div className='w-75 h-px bg-black/50 my-8'></div>

  <div className='w-75 rounded  '>
<div className='flex items-center'>
<div className='w-12.5 h-12.5 bg-c1 rounded-full flex justify-center items-center'>
  <Image className='w-6 h-5' src={Cimg2}/>
</div>
<h5 className='font-pop font-medium text-base text-black ml-4'>Write To US</h5>
</div>
<p className='font-pop font-normal text-base text-black pt-6 pb-4 '>Fill out our form and we will contact you within 24 hours.</p>
<p className='font-pop font-normal text-base text-black'>Emails: customer@exclusive.com</p>
<p className='font-pop font-normal text-base text-black pt-4 pb-10'>Emails: support@exclusive.com</p>
  </div>
</div>
</div>
  </div>


  <div className='w-8/12'>
  <div className='w-212.5 rounded shadow-xl'>
    <div className='w-200'>
<div className='pl-8 mt-10'>
  <div className='flex justify-between'>
<div className="w-62.5 h-12.5 bg-[#F5F5F5] rounded relative">
  <input
    type="text"
    placeholder="Your Name"
    className="w-full h-full bg-transparent pl-4 pr-8 font-pop font-normal text-base text-black placeholder:text-black/50 outline-none"
  />
  <span className="absolute top-1/2 -translate-y-1/2 left-27 text-c1">*</span>
</div>
<div className="w-62.5 h-12.5 bg-[#F5F5F5] rounded relative">
  <input
    type="text"
    placeholder="Your Email"
    className="w-full h-full bg-transparent pl-4 pr-8 font-pop font-normal text-base text-black placeholder:text-black/50 outline-none"
  />
  <span className="absolute top-1/2 -translate-y-1/2 left-27 text-c1">*</span>
</div>
<div className="w-62.5 h-12.5 bg-[#F5F5F5] rounded relative">
  <input
    type="text"
    placeholder="Your Phone"
    className="w-full h-full bg-transparent pl-4 pr-8 font-pop font-normal text-base text-black placeholder:text-black/50 outline-none"
  />
  <span className="absolute top-1/2 -translate-y-1/2 left-27 text-c1">*</span>
</div>
</div>


<div className='mt-8 '>
  <textarea placeholder='Your Massage' className='bg-[#F5F5F5] w-full h-50 placeholder:pt-3 placeholder:pl-4 rounded'></textarea>
</div>

<Button className='bg-c1 mt-8 text-c2 border border-transparent hover:bg-transparent hover:border-c1 hover:text-c1 duration-300 ml-137.5 mb-17 ' Text='Send Massage '/>
</div>
    </div>
  </div>
  
  </div>
</div>

        </Container>
      </section>


      <Footer/>
    </div>
  )
} 

export default Contact
