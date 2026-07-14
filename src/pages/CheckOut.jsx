import React, { useEffect, useState } from 'react'
import Subnav from '../layouts/Subnav'
import WnavClone from "../Layout2/WnavClone"
import Container from '../Components/Container'
import { Link } from 'react-router-dom'
import Image from '../Components/Image'
import Bkash from "../assets/Bkash.png"
import Mastercard from "../assets/Mastercard.png"
import Nagad from "../assets/Nagad.png"
import Visa from "../assets/Visa.png"
import Button from "../Components/Button"
import Footer from "../layouts/Footer"
import { useDispatch, useSelector } from 'react-redux'
import { activeuser } from '../slices/BreadcrumbSlice'
import { RxSlash } from 'react-icons/rx'
import { getNumericPrice, getItemImage } from '../utils/priceHelpers'

const CheckOut = () => {
const [paymentMethod, setPaymentMethod] = useState("bank");

 const cartItems = useSelector((state) => state.Cart.value)
 const buyNowProduct = useSelector((state) => state.BuyNow.value)

 // Flow 2 (Buy Now) takes priority when it exists; otherwise fall back to
 // Flow 1 (Cart). Buy Now is normalized into a one-item array so the rest
 // of this page can render both flows the exact same way.
 const isBuyNow = Boolean(buyNowProduct)
 const Data = isBuyNow
   ? [{ ...buyNowProduct, Quantity: buyNowProduct.Quantity || 1 }]
   : cartItems

 const dispatch = useDispatch();

useEffect(() => {
  dispatch(activeuser("CheckOut"));
}, []);
const history = useSelector((state) => state.breadcrumb.history);

  return (
    <div>
      <Subnav/>
      <WnavClone/>

      <section className='mb-35'>
        <Container>
<p className="flex items-center text-sm my-10">
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

<h1 className='font-pop  font-medium text-3xl text-black '>Billing Details</h1>


<div className='mt-12'>
    <div className='w-full flex justify-between'>
    <div className='w-6/12 '>
    <div className='flex flex-col gap-y-8'>
        <div>
            <p className='font-pop font-normal text-base text-black/40'>First Name <span className='text-c1/40'>*</span></p>
            <input type="text" className='w-130 h-12.5 bg-[#F5F5F5] rounded text-xl font-pop mt-2 pl-5' />
        </div>

        <div>
            <p className='font-pop font-normal text-base text-black/40'>Company Name</p>
            <input type="text" className='w-130 h-12.5 bg-[#F5F5F5] rounded text-xl font-pop mt-2 pl-5' />
        </div>

        <div>
            <p className='font-pop font-normal text-base text-black/40'>Street Address <span className='text-c1/40'>*</span></p>
            <input type="text" className='w-130 h-12.5 bg-[#F5F5F5] rounded text-xl font-pop mt-2 pl-5' />
        </div>

        <div>
            <p className='font-pop font-normal text-base text-black/40'>Apartment, floor, etc. (optional)</p>
            <input type="text" className='w-130 h-12.5 bg-[#F5F5F5] rounded text-xl font-pop mt-2 pl-5' />
        </div>

        <div>
            <p className='font-pop font-normal text-base text-black/40'>Town/City <span className='text-c1/40'>*</span></p>
            <input type="text" className='w-130 h-12.5 bg-[#F5F5F5] rounded text-xl font-pop mt-2 pl-5' />
        </div>

        <div>
            <p className='font-pop font-normal text-base text-black/40'>Phone Number <span className='text-c1/40'>*</span></p>
            <input type="text" className='w-130 h-12.5 bg-[#F5F5F5] rounded text-xl font-pop mt-2 pl-5' />
        </div>
        <div>
            <p className='font-pop font-normal text-base text-black/40'>Email Address<span className='text-c1/40'>*</span></p>
            <input type="text" className='w-130 h-12.5 bg-[#F5F5F5] rounded text-xl font-pop mt-2 pl-5' />
        </div>
    </div>

    <div className='flex items-center mt-6'>
     <input
  type="checkbox"
  className="w-6 h-6 accent-c1"
/>
<p className='ml-4 font-pop text-base font-normal text-black'>Save this information for faster check-out next time</p>
    </div>
    </div>
    <div className='w-6/12 '>
    <div>
       <div className='w-125'>
  <div className="w-[450px] bg-white rounded-2xl shadow-lg border border-gray-200 p-6">

  <h2 className="text-3xl font-semibold mb-6">
    Your Order
  </h2>

  {/* Products */}
{
  Data.length > 0 ? (
    <div className="space-y-5 border-b border-gray-200 pb-6 h-100 overflow-y-scroll">
      {Data.map((item, index) => (
        <div
          key={item.id ?? `${item.title}-${index}`}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden p-2">
              <Image
                src={getItemImage(item)}
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-500 text-sm">
                Qty : {item.Quantity}
              </p>
              {item.Size && (
                <p className="text-gray-500 text-sm">Size : {item.Size}</p>
              )}
              {item.Color && (
                <p className="text-gray-500 text-sm">Color : {item.Color}</p>
              )}
            </div>
          </div>

          <p className="text-xl font-semibold text-red-500">
            ${(getNumericPrice(item.price) * item.Quantity).toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  ) : (
    <div className="h-100 flex flex-col justify-center items-center border-b border-gray-200">
      <div className="text-6xl">🛒</div>

      <h2 className="text-2xl font-bold mt-4">
        Product Empty
      </h2>

      <p className="text-gray-500 mt-2">
        {isBuyNow
          ? "No product was selected for Buy Now."
          : "No products have been added to your cart."}
      </p>
    </div>
  )
}
  {/* Price */}
  <div className="mt-6 space-y-4">

    <div className="flex justify-between text-lg">
      <p>Subtotal</p>

<p className="font-medium text-red-500">
  $
  {Data.reduce((total, item) => {
    return total + getNumericPrice(item.price) * item.Quantity;
  }, 0).toFixed(2)}
</p>
    </div>

    <div className="flex justify-between text-lg">
      <p>Shipping</p>

      <p className="text-green-600 font-medium">
        Free
      </p>
    </div>

    <div className="border-t pt-4 flex justify-between">

      <h2 className="text-2xl font-bold">
        Total
      </h2>

      <h2 className="text-3xl font-bold text-red-500">
      $
  {Data.reduce((total, item) => {
    return total + getNumericPrice(item.price) * item.Quantity;
  }, 0).toFixed(2)}
      </h2>

    </div>

  </div>

</div>
       

     

<div className='w-106.5 flex mt-8 mb-8'>
<div className='w-6/12 '>
<div>
    <div className='flex items-center'>
  <input
    type="radio"
    name="payment"
    value="bank"
    checked={paymentMethod === "bank"}
    onChange={(e) => setPaymentMethod(e.target.value)}
    className="w-6 h-6 accent-black"
  />
  <p className='font-pop font-normal text-base text-black ml-4'>
    Bank
  </p>
</div>

<div className='flex items-center mt-8'>
  <input
    type="radio"
    name="payment"
    value="cash"
    checked={paymentMethod === "cash"}
    onChange={(e) => setPaymentMethod(e.target.value)}
    className="w-6 h-6 accent-black"
  />
  <p className='font-pop font-normal text-base text-black ml-4'>
    Cash on delivery
  </p>
</div>
</div>
</div>
<div className='w-6/12 '>
<div className='flex justify-between'>
  <div className='w-10.5 h-7 '>
    <Image className="w-full h-full cursor-pointer"  src={Bkash}/>
  </div>
  <div className='w-10.5 h-7 '>
    <Image className="w-full h-full cursor-pointer " src={Visa}/>
  </div>
  <div className='w-10.5 h-7 '>
    <Image className="w-full h-full cursor-pointer" src={Mastercard}/>
  </div>
  <div className='w-10.5 h-7 '>
    <Image className="w-full h-full cursor-pointer" src={Nagad}/>
  </div>
 
</div>
</div>
</div>

<div className='w-137.5'>
       <div className='flex'>
                  <input type="text"  placeholder='Coupon Code' className='w-75 h-14 border border-black rounded placeholder:text-base placeholder:font-pop placeholder:font-normal placeholder:text-black/50 placeholder:py-4 placeholder:pl-4 pl-2'  />

                <div className='ml-4'>
                    <Button className='bg-c1 border border-transparent text-white hover:bg-transparent hover:border-c1 hover:text-c1' Text="Apply Coupon "/>
                </div>
          </div>

           <Button className='bg-c1 border mt-8 border-transparent text-white hover:bg-transparent hover:border-c1 hover:text-c1' Text="Place Order "/>
</div>

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

export default CheckOut
