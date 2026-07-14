import React, { useEffect, useState, useRef } from 'react'
import Container from "../Components/Container.jsx";
import Image from "../Components/Image.jsx";
import Logo from "../assets/Logo.png";
import Listitem1 from "../Components/Listitem1.jsx";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { activeuser } from '../slices/BreadcrumbSlice.js';


const Navber = () => {
  const [alldata, SetAlldata] = useState([])
  const [search, SetSearch] = useState([])
  const [search2, SetSearch2] = useState([])
  const [input, SetInput] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)

  
    const searchRef = useRef(null)
    const dispatch=useDispatch()

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => SetAlldata(res.data.products))
  }, [])

  let handleInput = (e) => {
    let value = e.target.value
    SetInput(value)
     setShowDropdown(true)
    

    let filtered = alldata.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase())
    )
    let filtered2 = alldata.filter(item =>
      item.category.toLowerCase().includes(value.toLowerCase())
    )

    SetSearch(filtered)
    SetSearch2(filtered2)
  }

useEffect(() => {
  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setShowDropdown(false)
    }
  }

  document.addEventListener("mousedown", handleClickOutside)

  return () => {
    document.removeEventListener("mousedown", handleClickOutside)
  }
}, [])

  let handleSelect = () => {
  SetInput("");
  SetSearch([]);
  SetSearch2([]);
};

 let handleBreadCrumb=(name)=>{
  dispatch(activeuser(name))
  
 }

  return (
    <nav className="mb-20 pb-4 border-b border-black/30">
      <Container>
        <div className="flex justify-between items-center">

          {/* logo */}
                 <div className='cursor-pointer'>
<Link to="/">
            <Image src={Logo} alt='logo image' />
</Link>
          </div>

          {/* menu */}
          <div>
            <ul className="flex gap-x-12">
               
              <li>
                <Link  onClick={()=>handleBreadCrumb("Home")}  to="/">
                  <Listitem1 Text="Home" />
                </Link>
              </li>

                
              <li>
                <Link onClick={()=>handleBreadCrumb("Contact")}  to="/Contact">
                  <Listitem1 Text="Contact" />
                </Link>
              </li>

              <li>
             
                <Link    onClick={()=>handleBreadCrumb("About")}  to="/About">
                  <Listitem1 Text="About" />
                </Link>
              </li>

              <li>
                
                <Link onClick={()=>handleBreadCrumb("SignUp")}  to="/SignUp">
                  <Listitem1 Text="Sign Up" />
                </Link>
              </li>
            </ul>
          </div>

          {/* right side */}
          <div className="flex items-center">
            <div 
              ref={searchRef}
            className="relative w-[250px] mr-6">
              <input
                onChange={handleInput}
                value={input}
                type="text"
                placeholder="What are you looking for?"
                className="w-full h-[40px] rounded-md bg-gray-100 pl-4 pr-10 text-sm outline-none"
              />
              <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-black text-xl cursor-pointer" />

               {/* dropdown */}
              {showDropdown && input.length > 0 && (
                <div className='w-[350px] max-h-[300px] overflow-y-auto bg-gradient-to-br from-cyan-400/20 via-blue-700/15 to-slate-900/90
backdrop-blur-md border border-cyan-400/10 shadow-lg absolute top-12 rounded-[10px] p-2 z-50'>
              
                  {[...search, ...search2].length > 0 ? (
                    [...search, ...search2].map((item, index) => (
                  <Link
  to={`/ProductDetails/${item.id}`}
  onClick={handleSelect}
>
  <li
    key={item.id || index}
    className="p-2 hover:bg-gray-300 rounded cursor-pointer text-black"
  >
    {item.title}
  </li>
</Link>
                    ))
                  ) : (
                    <div className="p-2 text-gray-500 text-center">
                      Not Found
                    </div>
                  )}
              
                </div>
              )}
            </div>

            <span className="group relative inline-block text-2xl cursor-pointer mr-5">
              <Link to="/Wish">
              <FaRegHeart className="group-hover:animate-icon-shake" />
              </Link>
            </span>

            <span className="text-2xl cursor-pointer mr-5">
              <Link to="/Cart">
               <BsCart3 className="hover:animate-icon-shake" />
              </Link>
            </span>

            <span className="text-2xl cursor-pointer">
             <Link to="/Account">
              <LuUser className="hover:animate-icon-shake" />
             </Link>
            </span>
          </div>

        </div>
      </Container>
    </nav>
  );
};

export default Navber; 