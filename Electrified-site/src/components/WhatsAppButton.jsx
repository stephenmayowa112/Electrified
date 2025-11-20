import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "2348082999567"; // Replace with actual WhatsApp number
  const message = "Hello! I'm interested in learning more about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 p-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-full shadow-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 hover:scale-110 animate-fade-in group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}

