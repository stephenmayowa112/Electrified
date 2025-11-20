import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="EEL Logo" className="h-10 w-auto" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Electrified Engineering Ltd</h3>
            <p className="text-sm mb-4">
              Sustainable Power & Facilities Management solutions across Nigeria and Sub-Saharan Africa.
            </p>
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-green-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-green-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-green-500 transition-colors">Services</Link></li>
              <li><Link to="/why-us" className="hover:text-green-500 transition-colors">Why Choose Us</Link></li>
              <li><Link to="/team" className="hover:text-green-500 transition-colors">Our Team</Link></li>
              <li><Link to="/clients" className="hover:text-green-500 transition-colors">Clients</Link></li>
              <li><Link to="/contact" className="hover:text-green-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-green-500 transition-colors cursor-pointer">Solar Panel Installation</li>
              <li className="hover:text-green-500 transition-colors cursor-pointer">Backup Power Systems</li>
              <li className="hover:text-green-500 transition-colors cursor-pointer">Generator Sales & Maintenance</li>
              <li className="hover:text-green-500 transition-colors cursor-pointer">Facilities Management</li>
              <li className="hover:text-green-500 transition-colors cursor-pointer">E-waste Management</li>
              <li className="hover:text-green-500 transition-colors cursor-pointer">Security Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>77 Awolowo Road, Ikoyi, Lagos, Nigeria</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>+234 (0) 808 299 9567</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="break-all">info@electrifiedengineering.com</span>
              </li>
            </ul>
            
            {/* Business Hours */}
            <div className="mt-4">
              <h5 className="text-white font-semibold mb-2">Business Hours</h5>
              <p className="text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p className="text-sm">Sat: 9:00 AM - 2:00 PM</p>
              <p className="text-sm">Sun: Closed</p>
            </div>
          </div>
        </div>


      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-center md:text-left">
              © {currentYear} Electrified Engineering Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="hover:text-green-500 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-green-500 transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-green-500 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
