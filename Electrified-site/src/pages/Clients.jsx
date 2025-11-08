export default function Clients() {
  return (
    <div>
      {/* Banner */}
      <section
        className="relative h-64 sm:h-72 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/hIMG_004.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4">
          Our Clients
        </h1>
      </section>

      {/* Clients List */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Client Item */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <img
              src="/logos/sterling.png"
              alt="Sterling Bank"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain flex-shrink-0"
            />
            <p className="text-base sm:text-lg text-gray-800">
              <span className="font-semibold">Sterling Bank</span> (Lagos and South West)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <img
              src="/logos/9mobile.png"
              alt="9 Mobile"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain flex-shrink-0"
            />
            <p className="text-base sm:text-lg text-gray-800">
              <span className="font-semibold">9 Mobile</span> (Nationwide)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <img
              src="/logos/cbn.jpg"
              alt="CBN"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain flex-shrink-0"
            />
            <p className="text-base sm:text-lg text-gray-800">
              <span className="font-semibold">CBN Residential</span> locations in Lagos{" "}
              <span className="text-xs sm:text-sm text-gray-500">(sub-contracted by Knight Frank)</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <img
              src="/logos/cisco.png"
              alt="Cisco"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain flex-shrink-0"
            />
            <p className="text-base sm:text-lg text-gray-800">
              <span className="font-semibold">Cisco</span>{" "}
              <span className="text-xs sm:text-sm text-gray-500">(sub-contracted by JLL)</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <img
              src="/logos/mckinsey.png"
              alt="McKinsey"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain flex-shrink-0"
            />
            <p className="text-base sm:text-lg text-gray-800">
              <span className="font-semibold">McKinsey</span>{" "}
              <span className="text-xs sm:text-sm text-gray-500">(sub-contracted by Propel)</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <img
              src="/logos/rjolad.png"
              alt="Rjolad Hospitals"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain flex-shrink-0"
            />
            <p className="text-base sm:text-lg text-gray-800">
              <span className="font-semibold">Rjolad Hospitals</span> – Lagos
            </p>
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
