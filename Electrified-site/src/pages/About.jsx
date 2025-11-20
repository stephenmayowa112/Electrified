import { Target, Eye, Award, Users, Briefcase, Globe } from "lucide-react";
import SEO from "../components/SEO";

const milestones = [
  { year: "2021", title: "Company Founded", description: "EEL established in Nigeria" },
  { year: "2022", title: "500kW Milestone", description: "Deployed 500kW of solar power" },
  { year: "2023", title: "1MW Achievement", description: "Reached 1.07MW solar deployment" },
  { year: "2024", title: "Regional Expansion", description: "Expanded to multiple Nigerian states" },
  { year: "2025", title: "2MW Target", description: "On track to deploy 2MW by year-end" }
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering quality solutions that exceed expectations."
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Our clients are at the heart of everything we do. We tailor solutions to meet their unique needs."
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We embrace cutting-edge technology and innovative approaches to solve energy challenges."
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "Environmental responsibility guides our decisions, promoting eco-friendly solutions."
  }
];

const certifications = [
  "COREN Certified Engineers",
  "IFMA Certified Facility Managers",
  "LAWMA Certified E-waste Management",
  "ISO 9001:2015 Quality Management",
  "FG Wilson Authorized Partner"
];

export default function About() {
  return (
    <div>
      <SEO 
        title="About Us - Electrified Engineering Ltd"
        description="Learn about Electrified Engineering Limited, a leading power and facilities management company in Nigeria. Our mission, vision, and commitment to sustainable energy solutions."
      />

      {/* Banner Section */}
      <section
        className="relative h-64 sm:h-80 md:h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/abt_img001.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Pioneering sustainable energy solutions across Africa
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
          </div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
            <p>
              Electrified Engineering Limited (EEL) is a dynamic power and facilities
              management company incorporated in Nigeria in 2021. With a mission to
              revolutionize energy access and operational efficiency, we specialize in
              renewable energy systems, backup power solutions, and comprehensive facilities
              management.
            </p>

            <p>
              Our team of experienced engineers and technicians has successfully deployed
              over <span className="font-semibold text-orange-700">1.07MW</span> of solar
              power across Nigeria, with a goal to reach{" "}
              <span className="font-semibold text-orange-700">2MW</span> by the end of 2025.
              We are expanding into other African markets and the United States, forming
              strategic partnerships with global leaders in solar and FM industries.
            </p>

            <p>
              We pride ourselves on delivering tailored solutions that address Nigeria's unique
              power challenges while maintaining the highest standards of quality, safety, and
              environmental responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-md hover-lift">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide innovative, sustainable, and reliable power solutions and facilities
                management services that empower businesses and communities across Africa to
                thrive in an energy-efficient future.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-md hover-lift">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become Africa's leading provider of sustainable energy solutions and
                integrated facilities management services, recognized for excellence,
                innovation, and positive environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define who we are
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="text-center p-6 bg-gray-50 rounded-xl hover-lift">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth and development
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200 hidden md:block"></div>

            <div className="space-y-8">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md hover-lift">
                      <span className="text-3xl font-bold text-orange-600">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-2">{milestone.title}</h3>
                      <p className="text-gray-600 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognized expertise and trusted partnerships
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                <Award className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Join Us in Building a Sustainable Future
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Partner with us for reliable, efficient, and eco-friendly energy solutions
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

