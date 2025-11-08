import { Leaf, Settings, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function WhyUs() {
  return (
    <div>
      {/* Banner */}
      <section
        className="relative h-64 sm:h-72 md:h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/why_img011.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4">
          Why Choose Us
        </h1>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Sustainability First */}
          <div className="flex items-start space-x-3 sm:space-x-4">
            <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Sustainability First</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-700">
                We prioritize eco-friendly solutions that reduce energy costs and environmental impact.
              </p>
            </div>
          </div>

          {/* Tailored Engineering */}
          <div className="flex items-start space-x-3 sm:space-x-4">
            <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Tailored Engineering</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-700">
                Our systems are designed for Nigeria's unique power challenges, ensuring durability and efficiency.
              </p>
            </div>
          </div>

          {/* Trusted Expertise */}
          <div className="flex items-start space-x-3 sm:space-x-4">
            <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Trusted Expertise</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-700">
                Our team includes certified professionals with decades of experience in power systems and FM.
              </p>
            </div>
          </div>

          {/* Proven Track Record */}
          <div className="flex items-start space-x-3 sm:space-x-4">
            <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Proven Track Record</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-700">
                Trusted by banks, telecommunications, schools, hospitals, estates, and corporate clients across Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-6 border-t text-center text-gray-500 text-xs sm:text-sm px-4">
        © 2025 Electrified Engineering Limited. All rights reserved.
      </footer>
    </div>
  );
}
