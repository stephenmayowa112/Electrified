import { useState } from "react";
import { Building2, MapPin, Star } from "lucide-react";
import SEO from "../components/SEO";

const clients = [
  {
    name: "Sterling Bank",
    logo: "/logos/sterling.png",
    location: "Lagos and South West",
    industry: "Banking",
    services: "Solar Installation, Facilities Management",
    testimonial: "EEL has transformed our power infrastructure with exceptional service."
  },
  {
    name: "9 Mobile",
    logo: "/logos/9mobile.png",
    location: "Nationwide",
    industry: "Telecommunications",
    services: "Backup Power Systems, Generator Maintenance",
    testimonial: "Reliable and professional service across all our locations."
  },
  {
    name: "CBN Residential",
    logo: "/logos/cbn.jpg",
    location: "Lagos",
    industry: "Real Estate",
    services: "Facilities Management",
    testimonial: "Comprehensive FM services that exceed our expectations.",
    note: "Sub-contracted by Knight Frank"
  },
  {
    name: "Cisco",
    logo: "/logos/cisco.png",
    location: "Lagos",
    industry: "Technology",
    services: "Power Solutions, Facilities Management",
    testimonial: "Professional and efficient service delivery.",
    note: "Sub-contracted by JLL"
  },
  {
    name: "McKinsey",
    logo: "/logos/mckinsey.png",
    location: "Lagos",
    industry: "Consulting",
    services: "Facilities Management",
    testimonial: "Top-tier facilities management services.",
    note: "Sub-contracted by Propel"
  },
  {
    name: "Rjolad Hospitals",
    logo: "/logos/rjolad.png",
    location: "Lagos",
    industry: "Healthcare",
    services: "Backup Power, Solar Installation",
    testimonial: "Reliable power solutions for critical healthcare operations."
  }
];

const industries = ["All", "Banking", "Telecommunications", "Real Estate", "Technology", "Consulting", "Healthcare"];

function ClientCard({ client }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover-lift group">
      <div className="p-6">
        <div className="flex items-center justify-center h-32 mb-4 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
          <img
            src={client.logo}
            alt={client.name}
            className="max-h-24 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{client.name}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-green-600" />
            <span>{client.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Building2 className="w-4 h-4 mr-2 text-green-600" />
            <span>{client.industry}</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs font-semibold text-green-600 mb-1">Services Provided:</p>
          <p className="text-sm text-gray-700">{client.services}</p>
        </div>

        {client.note && (
          <p className="text-xs text-gray-500 italic mb-3">{client.note}</p>
        )}

        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-sm text-gray-600 italic">"{client.testimonial}"</p>
        </div>
      </div>
    </div>
  );
}

export default function Clients() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const filteredClients = selectedIndustry === "All" 
    ? clients 
    : clients.filter(client => client.industry === selectedIndustry);

  return (
    <div>
      <SEO 
        title="Our Clients - Electrified Engineering Ltd"
        description="Trusted by leading organizations across Nigeria including Sterling Bank, 9 Mobile, CBN, Cisco, McKinsey, and Rjolad Hospitals for power and facilities management solutions."
      />

      {/* Banner */}
      <section
        className="relative h-64 sm:h-72 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/hIMG_004.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Clients
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Trusted by leading organizations across Nigeria
          </p>
        </div>
      </section>

      {/* Client Stats */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <p className="text-gray-600">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedIndustry === industry
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClients.map((client, idx) => (
              <ClientCard key={idx} client={client} />
            ))}
          </div>

          {filteredClients.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No clients found in this industry.</p>
            </div>
          )}
        </div>
      </section>

      {/* Case Studies CTA */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Our clients have experienced significant improvements in energy efficiency, cost savings, and operational reliability. From reducing energy costs by 60% to ensuring zero downtime for critical operations, we deliver measurable results.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            Become Our Next Success Story
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "EEL has been instrumental in transforming our power infrastructure. Their solar installation reduced our energy costs by 60%, and their maintenance service is exceptional. Highly recommended!"
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Adebayo Johnson</h4>
                <p className="text-sm text-gray-600">Facilities Manager, Sterling Bank</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Professional, reliable, and innovative. Their backup power solutions have ensured zero downtime for our critical operations nationwide. A true partner in our success."
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Chioma Okafor</h4>
                <p className="text-sm text-gray-600">Operations Director, 9 Mobile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Growing Client Base?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Experience the same level of excellence and reliability that our clients enjoy
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
