import React from 'react'
import icon1 from "../assets/images/icon1.jpg"
import icon2 from "../assets/images/icon2.jpg"
import icon3 from "../assets/images/icon3.jpg"

const Services = () => {
  return (
    <section>
        <div className="pb-20 text-center"> 
            <h1>Why Choose Smart Tutor?</h1>
            <p className='font-semibold'>Experience the future of learning with our comprehensive platform designed to connect students and tutors seamlessly</p>
        </div>
        <div class="grid grid-cols-3  bg-white gap-5">
            <div class="bg-purple-200 flex flex-col justify-center rounded-4xl py-5 "><div class="flex justify-center"><img src={icon1}></img></div>
            <h2 class="justify-center flex">Flexible Scheduing</h2>
            <p class="justify-center flex">Schedule sessions that fit your lifestyle with 24/7 availability and easy rescheduling options</p>

            </div>
            <div class="bg-green-200 flex flex-col justify-center py-5 rounded-4xl"><div class="flex justify-center"><img  src={icon2}></img></div>
            <h2 class="justify-center flex">Interactive Learning</h2>
            <p class="justify-center flex">Track your progress,manage sessions and access learning resources through our intuitive dashboard</p>
            </div>
            <div class="bg-blue-200 flex flex-col justify-center py-5 rounded-4xl"><div class="flex justify-center"><img  src={icon3}></img></div>
                <h2 class="justify-center flex">Book Tutors Easily</h2>
                <p class="justify-center flex">Find and book qualified tutors in seconds with our intelligent matching system and advanced filters</p>
            </div>

        </div>

    </section>
  )
}
export default Services