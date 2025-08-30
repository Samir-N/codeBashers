import useAuth from '../Context/AuthContext'
const ForgotPassword =  () => {

    const{forgotPassword} = useAuth;

    const handleClick = async() => {

        const formData = useRef(null);
        const email = formData.current.email.value.trim();

    try{
        await forgotPassword(email);
    }
    catch(err){
        console.log("Error ");
    }
    }
  return (
    <div>
      <form ref={fromData} onClick={handleClick} className="w-full max-w-md mx-auto bg-gray-900 p-8 rounded-2xl shadow-lg">
  
  <div className="mb-5">
    <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
      Email Address
    </label>
    <input
      type="email"
      id="email"
      placeholder="Enter your email"
      className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
    />
  </div>
  <button>Send Link</button>
  </form>
    </div>
  )
}

export default ForgotPassword
