export default function About() {
  return (
    <div>
      {/* Banner Section */}
      <section
        className="relative h-64 sm:h-80 md:h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/abt_img001.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4">
          About Us
        </h1>
      </section>

      {/* About Content */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
            Electrified Engineering Limited (EEL) is a dynamic power and facilities
            management company incorporated in Nigeria in 2021. With a mission to
            revolutionize energy access and operational efficiency, we specialize in
            renewable energy systems, backup power solutions, and comprehensive facilities
            management.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
            Our team of experienced engineers and technicians has successfully deployed
            over <span className="font-semibold text-green-700">1.07MW</span> of solar
            power across Nigeria, with a goal to reach{" "}
            <span className="font-semibold text-green-700">2MW</span> by the end of 2025.
            We are expanding into other African markets and the United States, forming
            strategic partnerships with global leaders in solar and FM industries.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t text-center text-gray-500 text-xs sm:text-sm px-4">
        © 2025 Electrified Engineering Limited. All rights reserved.
      </footer>
    </div>
  );
}
