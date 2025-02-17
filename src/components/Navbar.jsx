import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgb(25,40,65)] text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <Link to="/home" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-xl font-semibold">VScholars</span>
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link 
            to="/home" 
            className={`transition ${
              location.pathname === "/home" 
                ? "text-[rgb(135,219,219)]" 
                : "hover:text-gray-200"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`transition ${
              location.pathname === "/about" 
                ? "text-[rgb(135,219,219)]" 
                : "hover:text-gray-200"
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className={`transition ${
              location.pathname === "/contact" 
                ? "text-[rgb(135,219,219)]" 
                : "hover:text-gray-200"
            }`}
          >
            Contact Us
          </Link>
          <Link 
            to="/career" 
            className={`transition ${
              location.pathname === "/career" 
                ? "text-[rgb(135,219,219)]" 
                : "hover:text-gray-200"
            }`}
          >
            Career
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center bg-[rgb(25,40,65)] py-4 space-y-4 
        transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
      >
        <Link
          to="/home"
          className={`transition ${
            location.pathname === "/home" 
              ? "text-[rgb(135,219,219)]" 
              : "hover:text-gray-200"
          }`}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`transition ${
            location.pathname === "/about" 
              ? "text-[rgb(135,219,219)]" 
              : "hover:text-gray-200"
          }`}
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className={`transition ${
            location.pathname === "/contact" 
              ? "text-[rgb(135,219,219)]" 
              : "hover:text-gray-200"
          }`}
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </Link>
        <Link
          to="/career"
          className={`transition ${
            location.pathname === "/career" 
              ? "text-[rgb(135,219,219)]" 
              : "hover:text-gray-200"
          }`}
          onClick={() => setIsOpen(false)}
        >
          Career
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
