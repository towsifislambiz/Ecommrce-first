import React, { useState } from 'react'
import Image from './Image'
import { FaRegHeart } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Addtocart } from '../slices/CardSlice';
import { Wishlist } from '../slices/WishSlice';


const Card2 = ({ id, src1 , Text , value1 , src2 , num , className}) => {
const [liked, setLiked] = useState(false);
  let Data=useSelector(state=>state.Wish.value)
let handleWish =()=>{
dispatch(Wishlist(
{
    title:Text,
    image:src1,
    price:value1,
    price2:"$200"
}
))

}

let dispatch=useDispatch()

  let handleAddtoCart=()=>{
   dispatch(Addtocart(
    {
      title:Text,
      price:value1,
      image:src1,
      Quantity:1,

    }
   ));
    
  }
  return (
    <div>
      <div className={`w-[300px] ${className}`}>

        <div className='w-full h-[280px] cursor-pointer bg-[#F5F5F5] rounded flex justify-center items-center flex-col relative overflow-hidden group'>

          <div>
           <Link to={`/ProductDetails/${id}`}> 
            <Image src={src1}/>
           </Link>

          </div>

          {/* Discount */}
          

          {/* Heart */}
           <div onClick={handleWish}>
                     <div
            onClick={() => setLiked(!liked)}
            className={`w-[45px] h-[45px] rounded-full absolute right-3 top-[100%] flex justify-center items-center cursor-pointer group-hover:top-3 duration-400 ${
              liked ? "bg-c1 text-white" : "bg-white text-black"
            }`}
          >
            <FaRegHeart className="text-2xl" />
          </div>
                   </div>

          {/* Eye */}
          <div className='w-[45px] h-[45px] rounded-full bg-white absolute right-3 top-[100%] flex justify-center items-center cursor-pointer group-hover:top-18 duration-500'>
            <FaRegEye className='text-2xl'/>
          </div>

          {/* Add to cart */}
          <button onClick={handleAddtoCart} className='font-pop font-medium text-base text-white bg-black py-3 w-full absolute bottom-0 left-0 
          translate-y-full transition-all duration-400 group-hover:translate-y-0 rounded-b cursor-pointer'>
            Add To Cart
          </button>

        </div>

        <div className='w-full'>
<Link to={`/ProductDetails/${id}`}>
<h1 className='font-pop font-medium text-base text-black pt-[16px]'>
            {Text}
          </h1>
</Link>

          

         

          <div className='flex gap-x-[8px] items-center py-2'>
            <span className='text-c1 text-lg font-pop font-medium'>{value1}</span>
            <Image src={src2}/> 
            <span className='text-sm text-black/50 font-pop font-semibold'>{num}</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card2