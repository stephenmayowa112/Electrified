import { Sun, Zap, Wrench, Building2, Trash2, Shield, Leaf, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const services = [
  {
    icon: Sun,
    title: "Solar Panel Installation",
    description: "Custom-designed SPV systems for homes, businesses, and rural communities, optimized for Nigeria's solar conditions.",
    features: [
      "Site assessment and system design",
      "High-efficiency solar panels",
      "Professional installation",
      "Grid-tied and off-grid solutions",
      "25-year panel warranty"
    ],
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Backup Systems (UPS & Inverters)",
    description: "Reliable power backup for homes, offices, data centers, and hospitals, ensuring uninterrupted operations.",
    features: [
      "Instant power switching",
      "Battery backup systems",
      "Load management",
      "Remote monitoring",
      "24/7 technical support"
    ],
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Wrench,
    title: "Generator Sales & Maintenance",
    description: "Partnered with FG Wilson to deliver and maintain high-performance, low-emission generators.",
    features: [
      "Eco-friendly generators",
      "Preventive maintenance",
      "Emergency repairs",
      "Genuine spare parts",
      "Extended warranties"
    ],
    color: "from-gray-600 to-gray-800"
  },
  {
    icon: Building2,
    title: "Facilities Management",
    description: "Integrated FM services for industrial and commercial properties.",
    features: [
      "Maintenance & repairs",
      "Groundskeeping",
      "Cleaning services",
      "Security management",
      "Health & safety compliance"
    ],
    color: "from-cyan-500 to-teal-500"
  },
  {
    icon: Trash2,
    title: "E-waste Management",
    description: "LAWMA certified e-waste management and disposal services.",
    features: [
      "Certified disposal",
      "Environmental compliance",
      "Data destruction",
      "Recycling programs",
      "Documentation & reporting"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "Comprehensive security solutions for your facilities.",
    features: [
      "24/7 security personnel",
      "CCTV installation",
      "Access control systems",
      "Security audits",
      "Emergency response"
    ],
    color: "from-red-500 to-cyan-600"
  }
];

function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover-lift group">
      <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
      <div className="p-6">
        <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
        
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="block w-full text-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium"
        >
          Request Service
        </Link>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div>
      <SEO 
        title="Our Services - Electrified Engineering Ltd"
        description="Comprehensive power and facilities management services including solar installation, backup power systems, generator maintenance, and integrated FM services across Nigeria."
      />

      {/* Banner */}
      <section
        className="relative h-64 sm:h-72 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/serv_img001.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive solutions for all your power and facilities management needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional services tailored to meet your specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">
                Sustainable solutions that reduce environmental impact and energy costs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Experts</h3>
              <p className="text-gray-600">
                COREN and IFMA certified professionals with years of experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                Comprehensive warranties and ongoing support for all our services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and efficient from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Consultation", desc: "Free assessment of your needs" },
              { step: "2", title: "Proposal", desc: "Customized solution and quote" },
              { step: "3", title: "Installation", desc: "Professional implementation" },
              { step: "4", title: "Support", desc: "Ongoing maintenance and service" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-cyan-600 to-cyan-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Contact us today for a free consultation and customized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+2348082999567"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

