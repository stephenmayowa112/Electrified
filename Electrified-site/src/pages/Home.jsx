import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sun, Zap, Building2, Shield, ArrowRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import StatCounter from "../components/StatCounter";
import SEO from "../components/SEO";

const bannerImages = [
  "/hIMG_001.jpg",
  "/hIMG_002.jpg", 
  "/hIMG_003.jpg",
  "/hIMG_004.jpeg",
  "/hIMG_005.jpg"
];

const clientLogos = [
  { name: "Sterling Bank", logo: "/logos/sterling.png" },
  { name: "T2", logo: "/logos/9mobile.png" },
  { name: "CBN", logo: "/logos/cbn.jpg" },
  { name: "Cisco", logo: "/logos/cisco.png" },
  { name: "McKinsey", logo: "/logos/mckinsey.png" },
  { name: "Rjolad", logo: "/logos/rjolad.png" }
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setIsAutoPlay(false);
    setCurrent((p) => (p + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setIsAutoPlay(false);
    setCurrent((p) => (p - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <div>
      <SEO />

      {/* Hero Section with Carousel */}
      <section className="relative text-center h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] flex items-center justify-center bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${bannerImages[current]})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-white animate-fade-in">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Empowering Africa with Sustainable Energy & Smart Facilities Management
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            We deliver alternative power solutions and integrated FM services across
            Nigeria and Sub-Saharan Africa — reliable, efficient, and tailored to your needs.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-lg hover:from-cyan-700 hover:to-cyan-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-teal-300 rounded-lg hover:bg-teal-400 hover:text-gray-900 transition-all duration-300 font-semibold"
            >
              Our Services
            </Link>
            <a
              href="tel:+2348082999567"
              className="px-8 py-4 bg-teal-400 text-gray-900 rounded-lg hover:bg-teal-300 transition-all duration-300 font-semibold inline-flex items-center shadow-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 w-full flex justify-center gap-2 z-10">
          {bannerImages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                setIsAutoPlay(false);
              }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                current === i ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-cyan-600 via-cyan-500 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-teal-100">
                <StatCounter end={1.07} duration={2000} suffix="MW" />
              </div>
              <p className="text-sm sm:text-base text-white/90">Solar Power Deployed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-teal-100">
                <StatCounter end={100} duration={2000} suffix="+" />
              </div>
              <p className="text-sm sm:text-base text-white/90">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-teal-100">
                <StatCounter end={50} duration={2000} suffix="+" />
              </div>
              <p className="text-sm sm:text-base text-white/90">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-teal-100">
                <StatCounter end={4} duration={2000} suffix=" Years" />
              </div>
              <p className="text-sm sm:text-base text-white/90">Industry Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            Electrified Engineering Limited (EEL) is a dynamic power and facilities
            management company incorporated in Nigeria in 2021. We specialise in
            renewable energy systems, backup power solutions, and comprehensive facilities
            management.
          </p>
          <Link
            to="/about"
            className="inline-block mt-6 px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive power and facilities management solutions tailored to your needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={Sun}
              title="Solar Installation"
              description="Custom-designed solar power systems optimized for Nigeria's conditions"
            />
            <ServiceCard
              icon={Zap}
              title="Backup Power"
              description="Reliable UPS and inverter systems for uninterrupted operations"
            />
            <ServiceCard
              icon={Building2}
              title="Facilities Management"
              description="Integrated FM services for commercial and industrial properties"
            />
            <ServiceCard
              icon={Shield}
              title="Generator Services"
              description="Sales, installation, and maintenance of eco-friendly generators"
            />
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-block px-8 py-3 border-2 border-cyan-600 text-cyan-600 rounded-lg hover:bg-cyan-600 hover:text-white transition-all duration-300 font-medium"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted By Leading Organizations
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, idx) => (
              <div key={idx} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/clients"
              className="inline-block px-8 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium"
            >
              View All Clients
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-cyan-600 via-cyan-500 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Power Your Future?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Get a free consultation and customized quote for your power and facilities management needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-teal-50 transition-colors font-semibold inline-flex items-center justify-center shadow-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+2348082999567"
              className="px-8 py-4 bg-teal-400 text-gray-900 rounded-lg hover:bg-teal-300 transition-all duration-300 font-semibold inline-flex items-center justify-center shadow-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              +234 808 299 9567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

