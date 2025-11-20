import { useState } from "react";
import emailjs from "emailjs-com";
import { MapPin, Phone, Mail, Globe, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import SEO from "../components/SEO";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.title.trim()) newErrors.title = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus({ type: "error", message: "Please fill in all required fields correctly." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // Send to company
      await emailjs.send(
        "service_6gg0f5e",
        "template_h5j52lt",
        formData,
        "7NnVlLCFLZATz5a91"
      );

      // Send auto-reply to sender
      await emailjs.send(
        "service_6gg0f5e",
        "template_tfe0hih",
        formData,
        "7NnVlLCFLZATz5a91"
      );

      setStatus({ 
        type: "success", 
        message: "Thank you! Your message has been sent successfully. We'll get back to you soon." 
      });
      setFormData({ name: "", email: "", phone: "", title: "", message: "" });
    } catch (error) {
      setStatus({ 
        type: "error", 
        message: "Oops! Something went wrong. Please try again or call us directly." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <SEO 
        title="Contact Us - Electrified Engineering Ltd"
        description="Get in touch with Electrified Engineering Ltd. Contact us for solar installation, backup power systems, and facilities management services in Nigeria."
      />

      {/* Banner */}
      <section
        className="relative h-64 sm:h-72 md:h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/hIMG_007.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            We're here to help. Reach out to us for any inquiries or support
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Have a question or need assistance? We're just a message away. Our team is ready to help you with your power and facilities management needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover-lift">
                <MapPin className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                  <p className="text-sm text-gray-600">
                    77 Awolowo Road, Ikoyi, Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover-lift">
                <Phone className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone Number</h3>
                  <a href="tel:+2348082999567" className="text-sm text-gray-600 hover:text-orange-600">
                    +234 (0) 808 299 9567
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover-lift">
                <Mail className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Address</h3>
                  <a href="mailto:info@electrifiedengineering.com" className="text-sm text-gray-600 hover:text-orange-600 break-all">
                    info@electrifiedengineering.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover-lift">
                <Globe className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Website</h3>
                  <p className="text-sm text-gray-600 break-all">
                    www.electrifiedengineering.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover-lift">
                <Clock className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 text-sm sm:text-base border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 text-sm sm:text-base border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-3 text-sm sm:text-base border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent`}
                      placeholder="+234 800 000 0000"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className={`w-full p-3 text-sm sm:text-base border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent`}
                    placeholder="How can we help you?"
                  />
                  {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full p-3 text-sm sm:text-base border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent resize-none`}
                    placeholder="Tell us more about your requirements..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-all duration-300 font-medium text-sm sm:text-base flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {status.message && (
                <div className={`mt-6 p-4 rounded-lg flex items-start ${
                  status.type === 'success' ? 'bg-orange-50 text-orange-800' : 'bg-red-50 text-red-800'
                }`}>
                  {status.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm">{status.message}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-0">
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7267!2d3.4283!3d6.4474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjYnNTAuNiJOIDPCsDI1JzQxLjkiRQ!5e0!3m2!1sen!2sng!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Electrified Engineering Ltd Office Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

