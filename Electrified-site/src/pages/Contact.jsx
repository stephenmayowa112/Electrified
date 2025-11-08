import { useState } from "react";
import emailjs from "emailjs-com";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6gg0f5e",
        "template_h5j52lt",
        formData,
        "7NnVlLCFLZATz5a91"
      )
      .then(() => {
        return emailjs.send(
          "service_6gg0f5e",
          "template_tfe0hih",
          formData,
          "7NnVlLCFLZATz5a91"
        );
      })
      .then(
        (result) => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", title: "", message: "" });
        },
        (error) => {
          setStatus("❌ Failed to send. Please try again later.");
        }
      );
  };

  return (
    <div>
      {/* Banner */}
      <section
        className="relative h-64 sm:h-72 md:h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/hIMG_007.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4">
          Contact Us
        </h1>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base text-gray-700">
                77 Awolowo Road, Ikoyi, Lagos, Nigeria
              </p>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base text-gray-700">+234 (0) 808 299 9567</p>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base text-gray-700 break-all">info@electrifiedengineering.com</p>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base text-gray-700 break-all">www.electrifiedengineering.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Your Subject"
                required
                className="w-full p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
                className="w-full p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 text-sm sm:text-base rounded-lg hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </form>
            {status && <p className="mt-4 text-xs sm:text-sm text-gray-600">{status}</p>}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t text-center text-gray-500 text-xs sm:text-sm px-4">
        © 2025 Electrified Engineering Limited. All rights reserved.
      </footer>
    </div>
  );
}
