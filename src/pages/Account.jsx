import React, { useEffect } from 'react'
import Subnav from '../layouts/Subnav'
import Wnavber from '../Layout2/Wnavber'
import { Link } from 'react-router-dom'
import Container from '../Components/Container'
import Button from '../Components/Button'
import Footer from '../layouts/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { activeuser } from '../slices/BreadcrumbSlice'
import { RxSlash } from 'react-icons/rx'


const Account = () => {
const history = useSelector((state) => state.breadcrumb.history);

const dispatch = useDispatch();

useEffect(() => {
  dispatch(activeuser("Account"));
}, []);
  return (
    <div>
      <Subnav/>
      <Wnavber/>

   <div className='mt-20'>
     <Container>
   <div className='flex justify-between'>
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

<p className='font-pop font-normal text-sm text-black'> 
    Welcome! <span className='text-c1'>Md Rimel</span>
</p>
   </div>

     </Container>

   </div>




   <section className='mb-35'>
    <Container>
        <div className='w-full flex mt-10'>
<div className='w-3/12 '>
<div>
    <p className='font-pop  text-base font-medium text-black'>Manage My Account</p>

    <ul className='mt-4 mb-6 gap-y-2'>
        <li className='font-pop font-normal text-base text-black/50 hover:text-c1 duration-300 cursor-pointer ml-8.75'>My Profile</li>
        <li className='font-pop font-normal text-base text-black/50 hover:text-c1 duration-300 cursor-pointer ml-8.75'>Address Book</li>
        <li className='font-pop ml-8.75 font-normal text-base text-black/50 hover:text-c1 duration-300 cursor-pointer'>My Payment Options</li>
    </ul>


       <p className='font-pop  text-base font-medium text-black'>My Orders</p>

    <ul className='mt-4 mb-6 gap-y-2'>
        <li className='font-pop font-normal text-base text-black/50 hover:text-c1 duration-300 cursor-pointer ml-8.75'>My Returns</li>
        <li className='font-pop font-normal text-base text-black/50 hover:text-c1 duration-300 cursor-pointer ml-8.75'>My Cancellations</li>
    </ul>

    <p className='font-pop  text-base font-medium text-black'>My Orders</p>
</div>
</div>
<div className='w-9/12 shadow-xl rounded  flex justify-center'>
<div className='w-207.5'>
<div className='mt-10'>
    <p className='font-pop font-medium text-xl text-c1'>Edit Your Profile</p>


    <div className='flex justify-between flex-wrap'>
      <div className='mt-4'>
          <p className='font-pop font-normal text-base text-black pb-2'>First Name</p>
        <input type="text" placeholder='First Name' className='bg-[#F5F5F5] w-97.5 h-12.5 placeholder:text-base placeholder:font-pop placeholder:font-normal placeholder:text-black/50 pl-4 py-3' />
      </div>


        <div>
             <p className='font-pop font-normal text-base text-black pb-2'>Last Name</p>
        <input type="text" placeholder='Last Name' className='bg-[#F5F5F5] w-97.5 h-12.5 placeholder:text-base placeholder:font-pop placeholder:font-normal placeholder:text-black/50 pl-4 py-3 text-base' />
        </div>

        <div className='mt-6'>
             <p className='font-pop font-normal text-base text-black pb-2' >Email</p>
        <input type="text" placeholder='Email' className='bg-[#F5F5F5] w-97.5 h-12.5 placeholder:text-base placeholder:font-pop placeholder:font-normal placeholder:text-black/50 pl-4 py-3 text-base' />
        </div>

        <div className='mt-6'>
             <p className='font-pop font-normal text-base text-black pb-2'>Address</p>
        <input type="text" placeholder='Address' className='bg-[#F5F5F5] w-97.5 h-12.5 placeholder:text-base placeholder:font-pop placeholder:font-normal placeholder:text-black/50 pl-4 py-3 text-base' />
        </div>
    </div>
</div>


<div>
    <p className='font-pop font-normal text-base text-black mt-6 mb-2'>Password Changes</p>

    <input type="text" placeholder='Current Passwod' className='bg-[#F5F5F5] w-207.5 h-12.5 placeholder:text-base placeholder:font-pop placeholder:font-normal placeholder:text-black/50 pl-4 py-3 text-base' />

    <input type="text" placeholder='New Passwod' className='bg-[#F5F5F5] w-207.5 h-12.5 placeholder:text-base placeholder:font-pop placeholder:font-normal placeholder:text-black/50 pl-4 py-3 text-base my-4' />

    <input type="text" placeholder='Confirm New Passwod' className='bg-[#F5F5F5] w-207.5 h-12.5 placeholder:text-base placeholder:font-pop placeholder:font-normal placeholder:text-black/50 pl-4 py-3 text-base' />

</div>

<div className='mt-6 mb-10 flex justify-end items-center'>

     <span className='font-normal font-pop text-base text-black cursor-pointer'>Cancel</span>

   <Button Text='Save Changes' className='bg-c1 border border-transparent text-white hover:bg-transparent hover:border-c1 hover:text-c1 ml-8'/>

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

export default Account
