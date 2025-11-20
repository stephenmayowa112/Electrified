import { Linkedin, Mail } from "lucide-react";
import SEO from "../components/SEO";

const teamMembers = [
  {
    name: "Engr. Gift Okanigbuan",
    position: "CEO & CTO",
    image: "/team/ceo.jpg",
    bio: "Certified Facility Manager (IFMA, USA), COREN-certified engineer with 15+ years in power systems and FM.",
    email: "gift@electrifiedengineering.com",
    linkedin: "#"
  },
  {
    name: "Engr. Innocent Aisuan",
    position: "Project Manager (Lagos & South-West)",
    image: "/team/default.jpg",
    bio: "M.Sc. Power Distribution Engineering, Cardiff University. Former Shell SPDC engineer.",
    email: "innocent@electrifiedengineering.com",
    linkedin: "#"
  },
  {
    name: "Engr. Ekata Oriere",
    position: "Project Manager (South-East & South-South)",
    image: "/team/default.jpg",
    bio: "M.Sc. Power Systems Engineering. Expert in power electronics and transformer installations.",
    email: "ekata@electrifiedengineering.com",
    linkedin: "#"
  },
  {
    name: "Oluwatobi Ralph-Okoro",
    position: "Ground Operations Manager",
    image: "/team/default.jpg",
    bio: "Certified Facilities Manager with a focus on strategic FM services and operations across the business clientele base.",
    email: "tobi@electrifiedengineering.com",
    linkedin: "#"
  },
  {
    name: "Engr. John Okanigbuan",
    position: "Ground Operations Manager",
    image: "/team/default.jpg",
    bio: "Mechanical Engineer with a focus on operational efficiency and business success.",
    email: "john@electrifiedengineering.com",
    linkedin: "#"
  }
];

function TeamMemberCard({ member }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover-lift group">
      <div className="relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = "/team/default.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
            <a
              href={`mailto:${member.email}`}
              className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="w-5 h-5 text-green-600" />
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <Linkedin className="w-5 h-5 text-green-600" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-green-600 font-medium text-sm mb-3">{member.position}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <div>
      <SEO 
        title="Our Team - Electrified Engineering Ltd"
        description="Meet the expert team behind Electrified Engineering Ltd. COREN and IFMA certified professionals dedicated to delivering excellence in power and facilities management."
      />

      {/* Banner */}
      <section
        className="relative h-64 sm:h-72 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/hIMG_006.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Meet Our Team
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Experienced professionals committed to excellence
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The People Behind Our Success
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our team comprises certified engineers, facility managers, and technical experts with decades of combined experience. We're passionate about delivering sustainable energy solutions and exceptional facilities management services across Nigeria and beyond.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <TeamMemberCard key={idx} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Growing Team
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We're always looking for talented, passionate individuals to join our mission of powering Africa's future. If you're interested in making a difference in the renewable energy and facilities management sector, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              View Open Positions
            </a>
            <a
              href="mailto:careers@electrifiedengineering.com"
              className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 font-medium"
            >
              Send Your CV
            </a>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growth Opportunities</h3>
              <p className="text-gray-600 text-sm">
                Continuous learning and career development in a rapidly growing industry
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborative Culture</h3>
              <p className="text-gray-600 text-sm">
                Work with passionate professionals in a supportive team environment
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Make an Impact</h3>
              <p className="text-gray-600 text-sm">
                Contribute to sustainable energy solutions that transform communities
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
