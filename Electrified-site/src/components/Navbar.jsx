import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/eel-logo.jpg"; // make sure your logo file is in /public

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="EEL Logo" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <p className="font-bold text-gray-900">Electrified Engineering Ltd</p>
              <p className="text-sm text-gray-600">
                Sustainable Power & Facilities Management
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-green-600">Services</Link>
            <Link to="/whyus" className="text-gray-700 hover:text-green-600">Why Us</Link>
            <Link to="/clients" className="text-gray-700 hover:text-green-600">Clients</Link>
            <Link to="/team" className="text-gray-700 hover:text-green-600">Team</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600">Contact</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white px-4 pt-4 pb-6 space-y-3 shadow-md">
          <Link to="/" className="block text-gray-700 hover:text-green-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block text-gray-700 hover:text-green-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" className="block text-gray-700 hover:text-green-600" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/whyus" className="block text-gray-700 hover:text-green-600" onClick={() => setIsOpen(false)}>Why Us</Link>
          <Link to="/clients" className="block text-gray-700 hover:text-green-600" onClick={() => setIsOpen(false)}>Clients</Link>
          <Link to="/team" className="block text-gray-700 hover:text-green-600" onClick={() => setIsOpen(false)}>Team</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-green-600" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
