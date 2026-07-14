import React, { useEffect, useState } from 'react'
import Subnav from '../layouts/Subnav'
import Cnav from '../layout4/Cnav'
import Container from '../Components/Container'
import { Link, useParams } from 'react-router-dom'
import { MdOutlineStarPurple500 } from 'react-icons/md'
import { FiMinus } from 'react-icons/fi'
import { FaPlus, FaRegHeart } from 'react-icons/fa'
import Button from '../Components/Button'
import { TbTruckDelivery } from 'react-icons/tb'
import { LuRefreshCcw } from 'react-icons/lu'
import Image from '../Components/Image'
import PDimg1 from "../assets/PDimg1.png"
import PDimg2 from "../assets/PDimg2.png"
import PDimg3 from "../assets/PDimg3.png"
import PDimg4 from "../assets/PDimg4.png"
import PDimg5 from "../assets/PDimg5.png"
import Button2 from '../Components/Button2'
import Card from '../Components/Card'
import Fcard1 from '../assets/Fcard1.png'
import Fcard2 from '../assets/Fcard2.png'
import Fcard3 from '../assets/Fcard3.png'
import Fcard4 from '../assets/Fcard4.png'
import Fs5 from '../assets/Fs5.png'
import F4s from '../assets/F4s.png'
import F45s from '../assets/F45s.png'
import Footer from '../layouts/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { activeuser } from '../slices/BreadcrumbSlice'
import { RxSlash } from 'react-icons/rx'
import { BuyNowProduct } from "../slices/BuyNowSlice";
import { Addtocart } from "../slices/CardSlice";
import { useNavigate } from "react-router-dom";

const ProductDetails  = () => {
    let [alldata , SetAlldata]=useState({})
  const [selected, setSelected] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);


const navigate = useNavigate();
const dispatch = useDispatch();

const handleBuyNow = () => {
  dispatch(
    BuyNowProduct({
      ...alldata,
      Quantity: quantity,
      Size: selectedSize,
      Color: selected,
    })
  );

  navigate("/CheckOut");
};



useEffect(() => {
  dispatch(activeuser("ProductDetails"));
}, [dispatch]);

  let params=useParams()
  
useEffect(() => {
  fetch(`https://dummyjson.com/products/${params.id}`)
    .then(res => res.json())
    .then(data => {
      SetAlldata(data);
    });
}, [params.id]);

const history = useSelector((state) => state.breadcrumb.history);


     useEffect(() => {
      window.scrollTo({ top: 0 })
    })

useEffect(() => {
  dispatch(activeuser("ProductDetails"));
}, []);



  return (
    <div>
      <Subnav/>
<div className='mt-10'>
  <Cnav/>
</div>


<section className='mb-35'>
  <Container>
         
  <p className="flex items-center text-sm mb-20">
  {history.map((item, index) => (
    <React.Fragment key={`${item}-${index}`}>
      {index > 0 && (
        <span className="mx-2">
          <RxSlash />
        </span>
      )}

      {index === history.length - 1 ? (
        <span>{alldata.title}</span>
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


    <div className='w-full flex justify-between'>
      <div className='w-8/12 '>
      <div className='w-200  h-158 flex justify-between'>
<div className='w-50 h-full flex flex-col justify-between'>
  <div className='w-full h-35.5 bg-[#F5F5F5] rounded cursor-pointer flex justify-center items-center'>
    <Image className='w-full h-35.5'  src={alldata.thumbnail}/>
  </div>

  <div className='w-full h-35.5 bg-[#F5F5F5] rounded cursor-pointer flex justify-center items-center'>
    <Image className="w-full h-35.5"  src={alldata.thumbnail}/>
  </div>

    <div className='w-full h-35.5 bg-[#F5F5F5] rounded cursor-pointer flex justify-center items-center'>
    <Image className="w-full h-35.5"  src={alldata.thumbnail}/>
  </div>

<div className='w-full h-35.5 bg-[#F5F5F5] rounded cursor-pointer flex justify-center items-center'>
    <Image className="w-full h-35.5"  src={alldata.thumbnail}/>
  </div>
</div>
<div className='w-142.5 h-full bg-[#F5F5F5] rounded flex justify-center items-center cursor-pointer'>
  <Image className="w-full h-full" src={alldata.thumbnail}/>
</div>
      </div>
      </div>
      <div className='w-4/12 '>
      <p className='font-inter font-semibold text-2xl text-black'> {alldata.title}</p>

      <div className='flex items-center mt-4 mb-4'>
        <div className='flex'>
          <MdOutlineStarPurple500 className='text-xl text-[#FFAD33]' />
          <MdOutlineStarPurple500 className='text-xl text-[#FFAD33]' />
          <MdOutlineStarPurple500 className='text-xl text-[#FFAD33]' />
          <MdOutlineStarPurple500 className='text-xl text-[#FFAD33]' />
          <MdOutlineStarPurple500 className='text-xl text-black/25' />
        </div>

        <span className='font-pop font-normal text-sm text-black/50 ml-2 pr-4 border-r border-r-black/50 mr-4'>(150 Reviews)</span>

        <span className='font-pop font-normal text-sm text-[#00FF66]'>In Stock</span>
      </div>

     <p className='font-inter font-normal text-2xl text-black'>
  ${(alldata.price * quantity).toFixed(2)}
</p>

      <p className='font-pop  font-normal text-sm text-black w-93.25 mt-6 pb-6 border-b border-b-black/50 mb-6'>{alldata.description}</p>


<div className='flex items-center mb-6'>
  <p className='font-inter font-normal text-xl text-black'>Colours:</p>
  <div className="flex gap-3 ml-6">

  {/* Blue */}
  <div
    onClick={() => setSelected("blue")}
    className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center cursor-pointer"
  >
    <div
      className={`w-3 h-3 rounded-full ${
        selected === "blue" ? "bg-[#DB4444]" : "bg-blue-300"
      }`}
    ></div>
  </div>

  {/* Pink */}
  <div
    onClick={() => setSelected("pink")}
    className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center cursor-pointer"
  >
    <div
      className={`w-3 h-3 rounded-full ${
        selected === "pink" ? "bg-[#DB4444]" : "bg-pink-400"
      }`}
    ></div>
  </div>

</div>
</div>

<div className='flex items-center mb-6'>
    <p className='font-inter font-normal text-xl text-black'>Size:</p>

    <div className='flex gap-x-4 ml-6'>
   <div
  onClick={() =>
    setSelectedSize(selectedSize === "XS" ? "" : "XS")
  }
  className={`w-8 h-8 border border-black rounded flex justify-center items-center cursor-pointer
    ${
      selectedSize === "XS"
        ? "bg-c1 text-white border-none"
        : "bg-white text-black"
    }`}
>
  <p className="font-pop font-medium text-base">XS</p>
</div>

 <div
  onClick={() =>
    setSelectedSize(selectedSize === "S" ? "" : "S")
  }
  className={`w-8 h-8 border border-black rounded flex justify-center items-center cursor-pointer
    ${
      selectedSize === "S"
        ? "bg-c1 text-white border-none"
        : "bg-white text-black"
    }`}
>
  <p className="font-pop font-medium text-base">S</p>
</div>

  <div
  onClick={() =>
    setSelectedSize(selectedSize === "M" ? "" : "M")
  }
  className={`w-8 h-8 border border-black rounded flex justify-center items-center cursor-pointer
    ${
      selectedSize === "M"
        ? "bg-c1 text-white border-none"
        : "bg-white text-black"
    }`}
>
  <p className="font-pop font-medium text-base">M</p>
</div>

<div
  onClick={() =>
    setSelectedSize(selectedSize === "L" ? "" : "L")
  }
  className={`w-8 h-8 border border-black rounded flex justify-center items-center cursor-pointer
    ${
      selectedSize === "L"
        ? "bg-c1 text-white border-none"
        : "bg-white text-black"
    }`}
>
  <p className="font-pop font-medium text-base">L</p>
</div>
<div
  onClick={() =>
    setSelectedSize(selectedSize === "XL" ? "" : "XL")
  }
  className={`w-8 h-8 border border-black rounded flex justify-center items-center cursor-pointer
    ${
      selectedSize === "XL"
        ? "bg-c1 text-white border-none"
        : "bg-white text-black"
    }`}
>
  <p className="font-pop font-medium text-base">XS</p>
</div>

    </div>
</div>


<div className='flex items-center mb-10'>


  
  

    <div className='flex w-45 h-12.5 border border-black/50 rounded-[5px]'>
<div className='w-3/12 h-full flex justify-center items-center border-r border-black/50 group hover:bg-c1 hover:border-transparent duration-300 cursor-pointer'>
<span className='text-3xl text-black/60 group-hover:text-white'>
<FiMinus onClick={() => quantity > 1 && setQuantity(quantity - 1)} />
</span>
</div>
<div className='w-6/12 h-full flex justify-center items-center'>
<span className='font-pop font-medium text-xl text-black'>{quantity}</span>
</div>
<div className='w-3/12 h-full flex justify-center items-center border-l border-black/50 group hover:bg-c1 hover:border-transparent duration-300 cursor-pointer'>
<span className='text-xl text-black/60 group-hover:text-white'>
<FaPlus  onClick={() => setQuantity(quantity + 1)}/>

</span>
</div>
</div>
  





<div
 onClick={handleBuyNow}
>
  <button className='bg-c1 border border-transparent text-white hover:bg-transparent hover:border-c1 hover:text-c1 duration-300 ml-4 py-3 px-12 rounded cursor-pointer font-pop text-base font-medium ' >
  Buy Now
</button>
</div>


<div className='w-12.5 h-12.5 rounded border border-black/50 ml-5 flex justify-center items-center'>
<FaRegHeart className='text-2xl'/>

</div>
</div>

<div className='w-100 border border-black/50 rounded'>
<div className='flex items-center ml-4 my-6'>
  <TbTruckDelivery className='text-4xl text-black/90'/>
  <div className='ml-4'>
  <h6 className='font-pop font-medium text-base text-black'>Free Delivery</h6>
  <u className='cursor-pointer'><p  className='font-pop font-medium text-xs text-black pt-2'>Enter your postal code for Delivery Availability</p></u>
  </div>
</div>

<div className='w-full h-px bg-black/50 mb-4'></div>
<div className='flex items-center ml-4 mb-6'>
  <LuRefreshCcw className='text-4xl text-black/90'/>
  <div className='ml-4'>
  <h6 className='font-pop font-medium text-base text-black'>Return Delivery</h6>
  <p  className='font-pop font-medium text-xs text-black pt-2'>Free 30 Days Delivery Returns. Details</p>
  </div>
</div>

</div>


      </div>

        
    </div>
  </Container>
</section>


<section>
<Container>

 <div className='mb-15'>
   <Button2 className1="text-c1" Text="Related Item"/>
 </div>


  <div className='flex justify-between flex-wrap mb-35'>
<Card src1={Fcard1} Text='HAVIT HV-G92 Gamepad' value1='$120' value2='$160' src2={Fs5} num='(88)'/>
<Card src1={Fcard2} Text='AK-900 Wired Keyboard' value1='$960' value2='$1160' src2={F4s} num='(75)'/>
<Card src1={Fcard3} Text='IPS LCD Gaming Monitor' value1='$370' value2='$400' src2={Fs5} num='(99)'/>
<Card src1={Fcard4} Text='HAVIT HV-G92 Gamepad' value1='$375' value2='$400' src2={F45s} num='(99)'/>
</div>

</Container>
</section>

<Footer/>
    </div>
  )
}

export default ProductDetails 

