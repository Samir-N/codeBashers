import React from 'react'
import icon4 from "../assets/images/icon4.jpg"

const Login = () => {
  return (
    <div class="h-screen w-screen flex items-center justify-center">
      <form class="flex h-auto bg-white shadow-lg rounded-xl">
        <div class="justify-center "><img class="flex-row" src={icon4}></img></div>
        <div>
          <div class="border-gray-400">
          Email Address: 
          <input type='email' name='email' placeholder='Enter your email required'></input>
          </div>
        </div>
        <div>
          Password:
          <input type='password' name="pass" placeholder='Enter your password required'></input>
        </div>
        <button>Sign In</button>
        <div>
          <p>Don't have an account?Create One!</p>
        </div>
      </form>
    </div>
  )
}

export default Login