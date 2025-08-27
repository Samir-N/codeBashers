import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Images/logo.png'
const Header = () => {
  return (
   <header className='flex  z-40  bg-white top-0 sticky items-center justify-around    py-5'>
    <div className='flex items-center gap-3'>
    <img src={logo} height={80} width={80} alt="Logo" />
    <h2>Smart Tutor</h2>
    </div>
    <nav>
      <ul className='flex items-center gap-10'>
        <Link to={'/Home'}><li>Home</li></Link>
        <Link to={'/About'}><li>About</li></Link>
        <Link to={'/Services'}><li>Services</li></Link>

        
        </ul>
    </nav>
    <div className='flex items-center gap-10'>
      <Link to={'/Login'}><button className='secondary-btn'>Login</button></Link>
      <Link to={'/Register'}><button className='primary-btn '>Sign up</button></Link>

    </div>
   </header>
  )
}

export default Header
