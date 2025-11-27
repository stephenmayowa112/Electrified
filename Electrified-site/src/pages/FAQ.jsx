import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";

const faqs = [
  {
    category: "Solar Power",
    questions: [
      {
        q: "How much does a solar installation cost?",
        a: "The cost varies based on your energy needs, property size, and system capacity. We offer free consultations and customized quotes. Contact us for a detailed assessment."
      },
      {
        q: "How long does solar installation take?",
        a: "Typical residential installations take 2-5 days, while commercial projects may take 1-3 weeks depending on system size and complexity."
      },
      {
        q: "What maintenance do solar panels require?",
        a: "Solar panels require minimal maintenance - mainly periodic cleaning and annual inspections. We offer comprehensive maintenance packages."
      },
      {
        q: "How long do solar panels last?",
        a: "Quality solar panels typically last 25-30 years with proper maintenance, with most manufacturers offering 25-year warranties."
      }
    ]
  },
  {
    category: "Backup Power Systems",
    questions: [
      {
        q: "What's the difference between UPS and inverters?",
        a: "UPS provides instant power backup (milliseconds) ideal for sensitive equipment, while inverters have a slight delay but are more cost-effective for general use."
      },
      {
        q: "How do I choose the right backup system?",
        a: "Consider your power requirements, critical equipment, budget, and backup duration needs. Our engineers provide free assessments to recommend the best solution."
      }
    ]
  },
  {
    category: "Facilities Management",
    questions: [
      {
        q: "What areas do you cover?",
        a: "We provide services across Lagos, South-West, South-East, and South-South Nigeria, with plans to expand to other African markets."
      },
      {
        q: "Do you offer customized FM packages?",
        a: "Yes! We tailor our facilities management services to meet your specific needs, whether residential, commercial, or industrial."
      },
      {
        q: "Are you certified for e-waste disposal?",
        a: "Yes, we are LAWMA certified for proper e-waste management and disposal, ensuring environmental compliance."
      }
    ]
  },
  {
    category: "General",
    questions: [
      {
        q: "Do you offer financing options?",
        a: "Yes, we work with financial partners to provide flexible payment plans for solar installations and major projects."
      },
      {
        q: "What warranties do you provide?",
        a: "We offer comprehensive warranties on equipment and installation, typically 1-2 years on workmanship and manufacturer warranties on products."
      },
      {
        q: "How quickly can you respond to service calls?",
        a: "We aim to respond within 24 hours for regular service calls and within 4 hours for emergency situations."
      }
    ]
  }
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left hover:text-cyan-600 transition-colors"
      >
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-cyan-600 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div>
      <SEO 
        title="FAQ - Electrified Engineering Ltd"
        description="Frequently asked questions about our solar power, backup systems, and facilities management services in Nigeria."
      />

      {/* Banner */}
      <section className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-r from-cyan-600 to-cyan-800 flex items-center justify-center">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-white/90 text-sm sm:text-base max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, idx) => (
            <div key={idx} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-cyan-600">
                {category.category}
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                {category.questions.map((faq, qIdx) => (
                  <FAQItem key={qIdx} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="max-w-4xl mx-auto mt-12 text-center bg-cyan-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

