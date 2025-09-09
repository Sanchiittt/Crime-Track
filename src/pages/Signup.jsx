import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />
      <div className="flex flex-col justify-center items-center flex-1 px-6 py-20">
        <div className="bg-black/70 backdrop-blur-md p-10 rounded-xl shadow-2xl max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Signup</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded-lg bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded-lg bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="py-3 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-full shadow-lg font-semibold hover:from-purple-700 hover:to-indigo-800 transition-all duration-300"
            >
              Signup
            </button>
          </form>
          <p className="mt-4 text-gray-400 text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-400 hover:text-purple-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
