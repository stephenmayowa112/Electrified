import { Star } from "lucide-react";

export default function TestimonialCard({ name, position, company, content, rating = 5, image }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover-lift">
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{content}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold mr-3">
          {image ? (
            <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
          ) : (
            name.charAt(0)
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
}

