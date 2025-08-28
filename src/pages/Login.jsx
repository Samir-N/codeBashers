import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import icon4 from "../assets/images/icon4.jpg";
import { useAuth } from '../Context/AuthContext';

const Login = () => {
const { login, loading } = useAuth();

  const formData = useRef(null);

  const handleLogin = (e) => {

    e.preventDefault();

    const email = formData.current.email.value;
    const password = formData.current.password.value;

    const userData = { email, password };

    console.log("Handle Login", userData);


      login(userData);
  
  };

  return (
    <div className="flex justify-center py-25">
      <form
        onSubmit={handleLogin}
        ref={formData}
        className="flex flex-col gap-6 bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md"
      >
        <div className="flex justify-center">
          <img
            src={icon4}
            alt="Logo"
            className="w-20 h-20 rounded-full shadow-md border-4 border-gray-200"
          />
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800">Welcome Back </h2>
        <p className="text-center text-sm text-gray-500">Login to continue</p>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="relative flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <Link to={'/Forgot Password'} onClick={handlePasswordChange}><p>Forgot Password</p></Link>

        <button
          type="submit"
          disabled={loading}
          className="primary-btn"
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>

        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/Register" className="text-indigo-600 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
