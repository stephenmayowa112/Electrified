export default function Team() {
  return (
    <div>
      {/* Banner */}
      <section
        className="relative h-64 sm:h-72 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/hIMG_006.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4">
          Meet Our Team
        </h1>
      </section>

      {/* Team Members */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Team Member Card */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <img
              src="/team/default.jpg"
              alt="Engr. Gift Okanigbuan"
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">
              Engr. Gift Okanigbuan
            </h3>
            <p className="text-green-700 font-medium text-sm sm:text-base">CEO & CTO</p>
            <p className="mt-2 text-green-700 text-xs sm:text-sm">
              Certified Facility Manager (IFMA, USA), COREN-certified engineer with
              15+ years in power systems and FM.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <img
              src="/team/default.jpg"
              alt="Engr. Innocent Aisuan"
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">
              Engr. Innocent Aisuan
            </h3>
            <p className="text-green-700 font-medium text-sm sm:text-base">
              Project Manager (Lagos & South-West)
            </p>
            <p className="mt-2 text-gray-700 text-xs sm:text-sm">
              M.Sc. Power Distribution Engineering, Cardiff University. Former Shell
              SPDC engineer.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <img
              src="/team/default.jpg"
              alt="Engr. Ekata Oriere"
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">
              Engr. Ekata Oriere
            </h3>
            <p className="text-green-700 font-medium text-sm sm:text-base">
              Project Manager (South-East & South-South)
            </p>
            <p className="mt-2 text-gray-700 text-xs sm:text-sm">
              M.Sc. Power Systems Engineering. Expert in power electronics and
              transformer installations.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <img
              src="/team/default.jpg"
              alt="Oluwatobi Ralph-Okoro"
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">
              Oluwatobi Ralph-Okoro
            </h3>
            <p className="text-green-700 font-medium text-sm sm:text-base">Ground Operations Manager</p>
            <p className="mt-2 text-gray-700 text-xs sm:text-sm">
              Certified Facilities Manager with a focus on strategic FM services and
              operations across the business clientele base.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <img
              src="/team/default.jpg"
              alt="Engr. John Okanigbuan"
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">
              Engr. John Okanigbuan
            </h3>
            <p className="text-green-700 font-medium text-sm sm:text-base">Ground Operations Manager</p>
            <p className="mt-2 text-gray-700 text-xs sm:text-sm">
              Mechanical Engineer with a focus on operational efficiency and business
              success.
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
