import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white font-bold text-2xl">CrimeTrack</h1>
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-purple-400 transition">Home</Link>
          <Link to="/signup" className="text-white hover:text-purple-400 transition">Signup</Link>
          <Link to="/login" className="text-white hover:text-purple-400 transition">Login</Link>
          <Link to="/police" className="text-white hover:text-purple-400 transition">Police</Link>
          <Link to="/user" className="text-white hover:text-purple-400 transition">User</Link>
          <Link to="/legalaid" className="text-white hover:text-purple-400 transition">Legal Aid</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
