import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Contact() {
  return (
    <div>
      {/* Banner */}
      <section
        className="relative h-72 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/hIMG_007.jpg')" }} // replace with your contact banner
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-white">
          Contact Us
        </h1>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-cyan-600 mt-1" />
              <p className="text-gray-700">
                77 Awolowo Road, Ikoyi, Lagos, Nigeria
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-cyan-600 mt-1" />
              <p className="text-gray-700">+234 (0) 808 299 9567</p>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-cyan-600 mt-1" />
              <p className="text-gray-700">info@electrifiedengineering.com</p>
            </div>

            <div className="flex items-start space-x-4">
              <Globe className="w-6 h-6 text-cyan-600 mt-1" />
              <p className="text-gray-700">www.electrifiedengineering.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-6 border-t text-center text-gray-500 text-sm">
        © 2025 Electrified Engineering Limited. All rights reserved.
      </footer>
    </div>
  );
}

