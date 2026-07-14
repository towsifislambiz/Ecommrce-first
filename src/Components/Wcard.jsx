import React from 'react'
import Image from '../Components/Image'
import { IoTrashOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { Addtocart } from '../slices/CardSlice';
import { RemoveItem } from '../slices/WishSlice';
import { Link } from 'react-router-dom';




const Wcard = ({ src1, Text, value1, value2, className, id }) => {

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(RemoveItem(id));
  };

  const handleAddtoCart = () => {
    dispatch(
      Addtocart({
        id,
        title: Text,
        price: value1,
        image: src1,
        Quantity: 1,
      })
    );
  };

  return (
    <div>
      <div className={`w-[300px] ${className}`}>

        <div className='w-full h-[280px] cursor-pointer bg-[#F5F5F5] rounded flex justify-center items-center flex-col relative overflow-hidden group'>

          <div>
            <Link to={`/ProductDetails/${id}`}>
              <Image src={src1} />
            </Link>
          </div>

          {/* Discount */}
          <div className='absolute top-3 left-3 bg-c1 px-3 py-1 rounded font-pop text-[12px] font-normal text-[#FAFAFA]'>
            -35%
          </div>

          {/* Trash */}
          <div
            onClick={handleRemove}
            className='w-[45px] h-[45px] rounded-full bg-white absolute right-3 top-[100%] flex justify-center items-center cursor-pointer group-hover:top-3 duration-400'
          >
            <IoTrashOutline className='text-2xl' />
          </div>

          {/* Add To Cart */}
          <button
            onClick={handleAddtoCart}
            className='font-pop font-normal text-xs text-white bg-black py-3 w-full absolute bottom-0 left-0 translate-y-full transition-all duration-400 group-hover:translate-y-0 rounded-b cursor-pointer flex justify-center items-center'
          >
            <IoCartOutline className='text-2xl mr-2' />
            <p>Add To Cart</p>
          </button>

        </div>

        <div className='w-full'>
          <Link to={`/ProductDetails/${id}`}>
            <h1 className='font-pop font-medium text-base text-black pt-[16px]'>
              {Text}
            </h1>
          </Link>

          <div className='py-[8px]'>
            <span className='text-c1 text-base font-pop font-medium'>{value1}</span>
            <span className='text-black/50 text-base font-pop font-medium ml-[12px]'>
              <del>{value2}</del>
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Wcard;