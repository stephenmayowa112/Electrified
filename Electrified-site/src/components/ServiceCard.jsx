import { Link } from "react-router-dom";

export default function ServiceCard({ icon: Icon, title, description, link = "/services" }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover-lift group">
      <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300">
        <Icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <Link 
        to={link}
        className="text-green-600 font-medium text-sm hover:text-green-700 inline-flex items-center group"
      >
        Learn More 
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
