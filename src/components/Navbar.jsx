import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white font-bold text-2xl">CrimeTrack</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-purple-400 transition">Home</Link>
          <Link to="/signup" className="text-white hover:text-purple-400 transition">Signup</Link>
          <Link to="/login" className="text-white hover:text-purple-400 transition">Login</Link>
          <Link to="/police" className="text-white hover:text-purple-400 transition">Police</Link>
          <Link to="/user" className="text-white hover:text-purple-400 transition">User</Link>
          <Link to="/legalaid" className="text-white hover:text-purple-400 transition">Legal Aid</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none space-y-1"
          >
            <span
              className={`block h-0.5 w-6 bg-white transform transition duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transform transition duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md px-6 py-4 space-y-3 transition-all duration-300">
          <Link
            to="/"
            className="block text-white hover:text-purple-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/signup"
            className="block text-white hover:text-purple-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Signup
          </Link>
          <Link
            to="/login"
            className="block text-white hover:text-purple-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/police"
            className="block text-white hover:text-purple-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Police
          </Link>
          <Link
            to="/user"
            className="block text-white hover:text-purple-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            User
          </Link>
          <Link
            to="/legalaid"
            className="block text-white hover:text-purple-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Legal Aid
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
