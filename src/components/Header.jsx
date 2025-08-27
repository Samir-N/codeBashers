import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Images/logo.png'
const Header = () => {
  return (
   <header className='flex  bg-white top-0 sticky items-center justify-around    py-5'>
    <div className='flex items-center'>
    <img src={logo} height={80} width={80} alt="Logo" />
    </div>
    <nav>
      <ul className='flex items-center gap-10'>
        <li>Home</li>
        <li>About</li>
        
        </ul>
    </nav>
    <div className='flex items-center gap-10'>
      <button className='secondary-btn'>Login</button>
      <button className='primary-btn '>Sign up</button>

    </div>
   </header>
  )
}

export default Header
