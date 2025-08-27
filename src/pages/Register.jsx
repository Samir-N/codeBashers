import React from 'react'
import icon4 from "../assets/images/icon4.jpg"
const Register = () => {
  return (
    <div class="h-auto w-auto flex flex-col items-center justify-center py-20 ">
        <form class="flex flex-col h-auto bg-white shadow-lg rounded-xl py-5 px-5">
           <div class="justify-center "><img  src={icon4}></img></div>
          <div class="bg-white">
            <h2 class="font-semibold">Create Your Account</h2>
            <p>Join thousands of listeners and tutors today</p>
            </div> 
           <div>
            First Name:<input type='text' placeholder='Samir' name='first' required></input>
            Second Name:<input type='text' placeholder='Niroula' name='second' required></input>
           </div>
           <div>
            Email:<input type='email' placeholder='Your email address' name='email'></input>

           </div>
           <div>
           Password:<input type='password' placeholder='Create a strong password' name='email'></input>
          </div>
          <span>Password must be at least 8 characters with an Uppercase,lowercase and numbers</span>
          <div>
            <span>I want to join as:</span>

          </div>
          <div>
            <button>Student
              Learn from expert
            </button>
            <button>Tutor
              Share your knowledge
            </button>

          </div>
<div>
  <button>Create account </button>
</div>
<div>
  <span><p>Already have an account?Sign in</p></span>
</div>
        </form>

    </div>
  )
}
export default Register