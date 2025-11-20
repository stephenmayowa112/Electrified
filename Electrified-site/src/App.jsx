import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WhyUs from "./pages/WhyUs";
import Clients from "./pages/Clients";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <div>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <img 
              src="/logo.png" 
              alt="Electrified Engineering Ltd Logo" 
              className="h-10 w-auto sm:h-12 md:h-14 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <h1 className="font-semibold text-gray-900 text-sm sm:text-base">
                Electrified Engineering Ltd
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">
                Sustainable Power & Facilities Management
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 text-gray-700 font-medium">
            <Link 
              to="/" 
              className={`hover:text-orange-600 transition-colors ${isActive("/") ? "text-orange-600 font-semibold" : ""}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-orange-600 transition-colors ${isActive("/about") ? "text-orange-600 font-semibold" : ""}`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`hover:text-orange-600 transition-colors ${isActive("/services") ? "text-orange-600 font-semibold" : ""}`}
            >
              Services
            </Link>
            <Link 
              to="/why-us" 
              className={`hover:text-orange-600 transition-colors ${isActive("/why-us") ? "text-orange-600 font-semibold" : ""}`}
            >
              Why Us
            </Link>
            <Link 
              to="/clients" 
              className={`hover:text-orange-600 transition-colors ${isActive("/clients") ? "text-orange-600 font-semibold" : ""}`}
            >
              Clients
            </Link>
            <Link 
              to="/team" 
              className={`hover:text-orange-600 transition-colors ${isActive("/team") ? "text-orange-600 font-semibold" : ""}`}
            >
              Team
            </Link>
            <Link 
              to="/faq" 
              className={`hover:text-orange-600 transition-colors ${isActive("/faq") ? "text-orange-600 font-semibold" : ""}`}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-orange-600 transition-colors ${isActive("/contact") ? "text-orange-600 font-semibold" : ""}`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button - Hidden on small screens */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="px-4 py-2 bg-orange-600 text-white rounded-md shadow hover:bg-orange-700 transition-all duration-300 hover:scale-105"
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
          <>
            {/* Backdrop overlay */}
            <div 
              className="fixed inset-0 bg-black/30 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            
            {/* Menu dropdown */}
            <div className="relative lg:hidden bg-white/90 backdrop-blur-md border-t shadow-lg z-50">
              <div className="px-4 py-3 space-y-3 max-h-[calc(100vh-80px)] overflow-y-auto">
                <Link 
                  to="/" 
                  className={`block py-2 font-medium ${isActive("/") ? "text-orange-600" : "text-gray-700 hover:text-orange-600"}`}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`block py-2 font-medium ${isActive("/about") ? "text-orange-600" : "text-gray-700 hover:text-orange-600"}`}
                >
                  About
                </Link>
                <Link 
                  to="/services" 
                  className={`block py-2 font-medium ${isActive("/services") ? "text-orange-600" : "text-gray-700 hover:text-orange-600"}`}
                >
                  Services
                </Link>
                <Link 
                  to="/why-us" 
                  className={`block py-2 font-medium ${isActive("/why-us") ? "text-orange-600" : "text-gray-700 hover:text-orange-600"}`}
                >
                  Why Us
                </Link>
                <Link 
                  to="/clients" 
                  className={`block py-2 font-medium ${isActive("/clients") ? "text-orange-600" : "text-gray-700 hover:text-orange-600"}`}
                >
                  Clients
                </Link>
                <Link 
                  to="/team" 
                  className={`block py-2 font-medium ${isActive("/team") ? "text-orange-600" : "text-gray-700 hover:text-orange-600"}`}
                >
                  Team
                </Link>
                <Link 
                  to="/faq" 
                  className={`block py-2 font-medium ${isActive("/faq") ? "text-orange-600" : "text-gray-700 hover:text-orange-600"}`}
                >
                  FAQ
                </Link>
                <Link 
                  to="/contact" 
                  className={`block py-2 font-medium ${isActive("/contact") ? "text-orange-600" : "text-gray-700 hover:text-orange-600"}`}
                >
                  Contact
                </Link>
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-2 bg-orange-600 text-white rounded-md shadow hover:bg-orange-700"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </>
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
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Floating Action Buttons */}
        <WhatsAppButton />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;

