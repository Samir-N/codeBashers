import React from 'react'
import heroPicture from '../assets/Images/heroPicture.png'
import { Link } from 'react-router-dom'
import {icons} from '../util/icons'
import About from './About'
const LandingPage = () => {
  return (
    <>
    <section className='bg-[#EEF3FF] h-auto pt-30 pb-60 max-w-[2000px] mx-auto flex'>
      <div className='max-w-[1580px] mx-auto '>
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 items-center  h-full'>

      <div

     
       className='flex flex-col gap-5 items mx-auto    '>


        <div className='flex flex-col leading-none gap-2'>


        <h1>Connect with the </h1>
         <h1 className='bg-gradient-to-r from-[#6975DD] to-[#754EA7] bg-clip-text text-transparent'>Best Tutors</h1>
         <h1>Instantly</h1> 


    </div>



         <p className='pb-10 text-left'>Discover qualified tutors, schedule flexible sessions, and accelerate your learning journey with our innovative platform designed for modern education.</p>
     
    <div className='grid md:grid-cols-2  items-center  w-full'>

          <Link to={'/Register'}><button className='primary-btn py-5 w-full  relative'>
             <icons.getStarted size={30} className='absolute '/> 
             Get Started Now</button></Link>
        

         </div>
      </div>


      <div>
        <img src={heroPicture} className=' hidden lg:flex h-full w-full' alt="heroPicture" />
      </div>

    </div>
</div>
    </section>


    <section>
      <About />
    </section>
    </>
  )
}

export default LandingPage
