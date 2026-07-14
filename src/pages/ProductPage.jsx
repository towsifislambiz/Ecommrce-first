import React, { useEffect, useState } from 'react'
import Subnav from '../layouts/Subnav'
import Cnav from '../layout4/Cnav'
import Container from '../Components/Container'
import Listitem2 from '../Components/Listitem2'
import PPcard from '../Components/PPcard'
import Fcard1 from '../assets/Fcard1.png'
import Fcard2 from '../assets/Fcard2.png'
import Fcard3 from '../assets/Fcard3.png'
import Fcard4 from '../assets/Fcard4.png'
import Fs5 from '../assets/Fs5.png'
import F4s from '../assets/F4s.png'
import F45s from '../assets/F45s.png'
import Footer from '../layouts/Footer'
import Pagination from '../Components/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RxSlash } from 'react-icons/rx'
import { activeuser } from '../slices/BreadcrumbSlice'

const ProductPage = () => {
 useEffect(() => {
    window.scrollTo({ top: 0 })
  })

  const dispatch = useDispatch();

useEffect(() => {
  dispatch(activeuser("ProductPage"));
}, []);

    let [alldata , SetAlldata]=useState([])

useEffect(() => {
  fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(data=>SetAlldata(data.products))
}, [])

  const [value, setValue] = useState(9);

const history = useSelector((state) => state.breadcrumb.history);

  
  return (
    <div>
    <div className='mb-10'>
        <Subnav/>
    </div>

    <Cnav/>


    <section>
<Container>
<p className="flex items-center text-sm mb-10">
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

<div className='flex justify-between mb-7.5'>
  
  <p className='font-pop font-bold text-xl text-[#262626]'>Shop by Category</p>

<div className='flex justify-between w-60 items-center'>
  <p className='font-pop font-normal text-base text-black'>Show : </p>  
<input
  type="number"
  min="1"
  value={value}
onChange={(e) => {
  const inputValue = Number(e.target.value);

  if (inputValue < 1) {
    setValue(1);
  } else if (inputValue > alldata.length) {
    setValue(alldata.length);
  } else {
    setValue(inputValue);
  }
}}
  className="font-pop font-normal text-base text-black pt-1 px-5 border-2 border-[#D9D9D9] rounded-[5px] inline-block outline-none w-35"
/>

</div>
</div>

<div className='w-full flex justify-between'>
<div className='w-3/12'>  
  <ul className='flex flex-col gap-y-4 mb-10'>
<Listitem2 Text='Woman’s Fashion'/>
<Listitem2 Text='Men’s Fashion'/>
<Listitem2 Text='Electronics'/>
<Listitem2 Text='Home & Lifestyle'/>
<Listitem2 Text='Medicine'/>
<Listitem2 Text='Sports & Outdoor'/>
<Listitem2 Text='Baby’s & Toys'/>
<Listitem2 Text='Groceries & Pets'/>
<Listitem2 Text='Health & Beauty'/>
</ul>

 <p className='font-pop font-bold text-xl text-[#262626] pb-4'>Shop by Color</p>

 <div className='flex flex-col gap-y-4.5'>
  <div className='flex items-center w-18.75 justify-between'>
  <div className='w-2.5 h-2.5 rounded-full bg-black'></div>
  <p className='font-pop font-normal text-base text-[#767676] cursor-pointer'>Color 1</p>
 </div>

 <div className='flex items-center w-18.75 justify-between'>
  <div className='w-2.5 h-2.5 rounded-full bg-[#FF0000]'></div>
  <p className='font-pop font-normal text-base text-[#767676] cursor-pointer'>Color 2</p>
 </div>

 <div className='flex items-center w-18.75 justify-between'>
  <div className='w-2.5 h-2.5 rounded-full bg-[#00FF38]'></div>
  <p className='font-pop font-normal text-base text-[#767676] cursor-pointer'>Color 3</p>
 </div>
 </div>
</div>


<div className='w-9/12'>
  <Pagination itemsPerPage={Number(value)} />


</div>
</div>

</Container>
    </section>

    <Footer/>


    </div>
  )
}

export default ProductPage
