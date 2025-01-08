import React, { useState } from 'react';
import { Menu, X, ChevronDown, } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  return (
    <nav className="bg-slate-50 shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-4xl font-bold text-purple-800 font-serif">
              CR <span className='text-2xl text-blue-900'>Wala</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            
            

            <Link to="/packages" className="text-gray-700 hover:text-blue-600 transition-colors">
              Packages
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link to="/appointment" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              to="/"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
              onClick={toggleMenu}
            >
              Home
            </a>
            
            <Link 
              to="/packages"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
              onClick={toggleMenu}
            >
              Packages
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link 
              to="/appointment"
              className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={toggleMenu}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;