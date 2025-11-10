import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WhyUs from "./pages/WhyUs";
import Clients from "./pages/Clients";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src="/logo.png" 
              alt="Electrified Engineering Ltd Logo" 
              className="h-10 w-auto sm:h-12 md:h-14 object-contain"
            />
            <div>
              <h1 className="font-semibold text-gray-900 text-sm sm:text-base">
                Electrified Engineering Ltd
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">
                Sustainable Power & Facilities Management
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <Link to="/about" className="hover:text-green-600">About</Link>
            <Link to="/services" className="hover:text-green-600">Services</Link>
            <Link to="/why-us" className="hover:text-green-600">Why Us</Link>
            <Link to="/clients" className="hover:text-green-600">Clients</Link>
            <Link to="/team" className="hover:text-green-600">Team</Link>
            <Link to="/contact" className="hover:text-green-600">Contact</Link>
          </div>

          {/* CTA Button - Hidden on small screens */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-800 focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-3 space-y-3">
              <Link to="/" className="block text-gray-700 hover:text-green-600 py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="block text-gray-700 hover:text-green-600 py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/services" className="block text-gray-700 hover:text-green-600 py-2" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/why-us" className="block text-gray-700 hover:text-green-600 py-2" onClick={() => setIsMenuOpen(false)}>Why Us</Link>
              <Link to="/clients" className="block text-gray-700 hover:text-green-600 py-2" onClick={() => setIsMenuOpen(false)}>Clients</Link>
              <Link to="/team" className="block text-gray-700 hover:text-green-600 py-2" onClick={() => setIsMenuOpen(false)}>Team</Link>
              <Link to="/contact" className="block text-gray-700 hover:text-green-600 py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link
                to="/contact"
                className="block w-full text-center px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
