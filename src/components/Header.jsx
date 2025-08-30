import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Images/logo.png'
import icons from '../util/icons'

const Header = () => {
  const [toggle, setToggle] = useState(false)


  return (
    <header className="flex z-40 bg-white top-0 sticky items-center justify-between py-5">
      <Link to="/" className="flex items-center gap-5 hover:opacity-80 transition-opacity">
        <img src={logo} height={80} width={80} alt="Logo" />
        <h2 className="lg:text-[30px] hidden lg:block text-indigo-600 font-bold ">Smart Tutor</h2>
      </Link>

      {toggle ? (
        <icons.menuClose size={40} onClick={() => setToggle(false)} className="cursor-pointer flex lg:hidden" />
      ) : (
        <icons.menuOpen size={40} onClick={() => setToggle(true)} className="cursor-pointer flex lg:hidden" />
      )}

      <div
        className={`${
          toggle ? 'flex' : 'hidden'
        } flex-col lg:flex-row lg:flex items-center gap-10 absolute lg:static right-0  lg:w-auto w-[50%] top-30 bg-white shadow-lg lg:shadow-none border-2 border-gray-300 right-5 lg:border-0 rounded-xl px-5 py-5`}
      >
  <nav>
  <ul className="flex flex-col lg:flex-row items-center gap-10">
    <Link to="/" onClick={() => setToggle(false)}>
      <li className="text-[24px]">Home</li>
    </Link>
    <Link to="/Services" onClick={() => setToggle(false)}>
      <li className="text-[24px]">Services</li>
    </Link>
  </ul>
</nav>


  
    
          <>

 <Link to="/Login">
              <button onClick={() => setToggle(false)} className=" text-[24px] text-[#4B5563] font-semibold hover:text-[#6975DD]">
                Login
              </button>
            </Link>

                 <Link to="/Register">
              <button onClick={() => setToggle(false)} className="primary-btn">
                Sign up
              </button>
            </Link>


           
       
          </>
 
      </div>
    </header>
  )
}

export default Header
