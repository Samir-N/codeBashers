// src/pages/Register.jsx
import React, { useState, useRef } from "react";
import { Link, useActionData } from "react-router-dom";
import icon4 from "../assets/images/icon4.jpg";
import { useAuth } from "../Context/AuthContext";

const Register = () => {
  const { register } = useAuth();
  const [role, setRole] = useState("");
  const formData = useRef(null);

  const {loading} = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const firstName = formData.current.firstName.value;
    const lastName = formData.current.lastName.value;
    const email = formData.current.email.value;
    const password = formData.current.password.value; 

    const userData = {
      firstName,
      lastName,
      email,
      password, 
      role
    };

    try {
      await register(userData);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  }; 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-5">
      <form ref={formData} onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white shadow-2xl rounded-2xl p-8 w-[400px]">
        
        <div className="flex justify-center">
          <img
            src={icon4}
            alt="Logo"
            className="w-20 h-20 rounded-full shadow-md border-4 border-gray-200"
          />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Create Your Account</h2>
          <p className="text-sm text-gray-500">
            Join thousands of learners and tutors today
          </p>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <label className="text-sm font-medium text-gray-600 mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-sm font-medium text-gray-600 mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            placeholder="Email Address"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">Password</label>
          <input
            type="password"
            name="password"
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            placeholder="Password"
          />
          <span className="text-xs text-gray-400 mt-1">
            Password must be at least 8 characters with uppercase, lowercase, and numbers
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm text-gray-600 mb-2">I want to join as:</span>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setRole("student")}
              className={`flex-1 py-2 rounded-lg border ${
                role === "student"
                  ? "bg-[#6975DD] text-white"
                  : "border-gray-300 text-gray-700"
              }`}
              name="role"
            >
              Student
            </button>
            <button
              type="button"
              onClick={() => setRole("tutor")}
              className={`flex-1 py-2 rounded-lg border ${
                role === "tutor"
                  ? "bg-[#6975DD] text-white"
                  : "border-gray-300 text-gray-700"
              }`}
              name="role"
            >
              Tutor
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="primary-btn rounded-none "
        >
          {loading?"Sending":"Register"}
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/Login" className="text-indigo-600 font-semibold hover:underline">  
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;