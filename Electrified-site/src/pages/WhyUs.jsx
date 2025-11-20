import { Leaf, Settings, ShieldCheck, CheckCircle2, Award, Users, Zap, TrendingUp } from "lucide-react";
import SEO from "../components/SEO";

const reasons = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description: "We prioritize eco-friendly solutions that reduce energy costs and environmental impact.",
    details: [
      "Renewable energy focus",
      "Carbon footprint reduction",
      "Sustainable practices",
      "Green certifications"
    ]
  },
  {
    icon: Settings,
    title: "Tailored Engineering",
    description: "Our systems are designed for Nigeria's unique power challenges, ensuring durability and efficiency.",
    details: [
      "Custom system design",
      "Local climate optimization",
      "Scalable solutions",
      "Future-proof technology"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    description: "Our team includes certified professionals with decades of experience in power systems and FM.",
    details: [
      "COREN certified engineers",
      "IFMA certified managers",
      "15+ years experience",
      "Continuous training"
    ]
  },
  {
    icon: CheckCircle2,
    title: "Proven Track Record",
    description: "Trusted by banks, telecommunications, schools, hospitals, estates, and corporate clients across Nigeria.",
    details: [
      "100+ projects completed",
      "50+ satisfied clients",
      "98% satisfaction rate",
      "Zero major incidents"
    ]
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "We use only premium equipment from trusted global brands with comprehensive warranties.",
    details: [
      "Premium equipment",
      "Extended warranties",
      "Quality testing",
      "ISO standards"
    ]
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description: "Your satisfaction is our priority. We provide 24/7 support and rapid response times.",
    details: [
      "24/7 support available",
      "4-hour emergency response",
      "Dedicated account managers",
      "Regular follow-ups"
    ]
  },
  {
    icon: Zap,
    title: "Innovative Solutions",
    description: "We leverage cutting-edge technology and innovative approaches to solve complex energy challenges.",
    details: [
      "Latest technology",
      "Smart monitoring systems",
      "IoT integration",
      "Remote diagnostics"
    ]
  },
  {
    icon: TrendingUp,
    title: "Cost-Effective",
    description: "Our solutions deliver excellent ROI through energy savings and reduced operational costs.",
    details: [
      "Competitive pricing",
      "Energy cost reduction",
      "Flexible payment plans",
      "Long-term savings"
    ]
  }
];

const comparisons = [
  {
    feature: "Response Time",
    us: "Within 4 hours",
    others: "24-48 hours"
  },
  {
    feature: "Warranty",
    us: "Up to 25 years",
    others: "1-5 years"
  },
  {
    feature: "Support",
    us: "24/7 Available",
    others: "Business hours only"
  },
  {
    feature: "Certifications",
    us: "COREN, IFMA, LAWMA",
    others: "Limited or none"
  },
  {
    feature: "Experience",
    us: "15+ years",
    others: "Varies"
  }
];

export default function WhyUs() {
  return (
    <div>
      <SEO 
        title="Why Choose Us - Electrified Engineering Ltd"
        description="Discover why leading organizations choose Electrified Engineering Ltd for sustainable power solutions and facilities management. Certified experts, proven track record, 24/7 support."
      />

      {/* Banner */}
      <section
        className="relative h-64 sm:h-72 md:h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/why_img011.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Experience the difference that expertise, quality, and dedication make
          </p>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine technical excellence with customer-focused service to deliver exceptional results
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 hover-lift group">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300">
                  <reason.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{reason.description}</p>
                <ul className="space-y-2">
                  {reason.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center text-xs text-gray-700">
                      <CheckCircle2 className="w-3 h-3 text-green-600 mr-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Compare
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See the clear advantages of choosing Electrified Engineering Ltd
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left font-semibold">Electrified Engineering</th>
                    <th className="px-6 py-4 text-left font-semibold">Others</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisons.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{item.feature}</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">{item.us}</td>
                      <td className="px-6 py-4 text-gray-600">{item.others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">1.07MW</div>
              <p className="text-gray-700 font-medium">Solar Power Deployed</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
              <p className="text-gray-700 font-medium">Average Energy Cost Reduction</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
              <p className="text-gray-700 font-medium">Projects Completed</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <p className="text-gray-700 font-medium">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real Clients
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-5xl mb-4">🏦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sterling Bank</h3>
              <p className="text-gray-600 text-sm mb-4">
                Reduced energy costs by 60% with our solar installation and achieved 99.9% uptime with our maintenance services.
              </p>
              <div className="flex items-center text-sm text-green-600 font-medium">
                <CheckCircle2 className="w-4 h-4 mr-1" />
                <span>60% Cost Reduction</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">9 Mobile</h3>
              <p className="text-gray-600 text-sm mb-4">
                Zero downtime achieved across nationwide operations with our backup power solutions and 24/7 support.
              </p>
              <div className="flex items-center text-sm text-green-600 font-medium">
                <CheckCircle2 className="w-4 h-4 mr-1" />
                <span>Zero Downtime</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rjolad Hospitals</h3>
              <p className="text-gray-600 text-sm mb-4">
                Ensured uninterrupted power for critical healthcare operations with reliable backup systems and solar integration.
              </p>
              <div className="flex items-center text-sm text-green-600 font-medium">
                <CheckCircle2 className="w-4 h-4 mr-1" />
                <span>100% Reliability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Experience the EEL Difference
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Join the growing list of satisfied clients who trust us for their power and facilities management needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Get Started Today
            </a>
            <a
              href="/clients"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold"
            >
              See Our Clients
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
