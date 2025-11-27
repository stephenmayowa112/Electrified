import { Link } from "react-router-dom";

export default function ServiceCard({ icon: Icon, title, description, link = "/services" }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover-lift group border-t-4 border-teal-400">
      <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center mb-4 group-hover:from-cyan-600 group-hover:to-teal-500 transition-all duration-300">
        <Icon className="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <Link 
        to={link}
        className="text-cyan-600 font-medium text-sm hover:text-teal-600 inline-flex items-center group"
      >
        Learn More 
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
