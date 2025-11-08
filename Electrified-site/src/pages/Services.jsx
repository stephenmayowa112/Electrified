export default function Services() {
  return (
    <div>
      {/* Banner */}
      <section
        className="relative h-64 sm:h-72 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/serv_img001.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4">
          Our Services
        </h1>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Power Solutions */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-4">
              Power Solutions
            </h2>
            <ul className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>
                <span className="font-semibold">Solar Panel Installation:</span>{" "}
                Custom-designed SPV systems for homes, businesses, and rural communities, optimized for Nigeria's solar conditions.
              </li>
              <li>
                <span className="font-semibold">Backup Systems (UPS & Inverters):</span>{" "}
                Reliable power backup for homes, offices, data centers, and hospitals, ensuring uninterrupted operations.
              </li>
              <li>
                <span className="font-semibold">Eco-Friendly Generator Sales & Maintenance:</span>{" "}
                Partnered with FG Wilson to deliver and maintain high-performance, low-emission generators.
              </li>
            </ul>
          </div>

          {/* Facilities Management */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-4">
              Facilities Management
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>Integrated FM services for industrial and commercial properties, including:</li>
              <li>• Sustainable Maintenance & Repairs</li>
              <li>• Groundskeeping</li>
              <li>• Cleaning</li>
              <li>• E-waste management and disposal (we are LAWMA certified)</li>
              <li>• Security</li>
              <li>• Health & Safety Compliance</li>
              <li>• Sustainability Initiatives</li>
            </ul>
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
