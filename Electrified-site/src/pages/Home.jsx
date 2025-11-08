import { useState, useEffect } from "react";

const bannerImages = ["/hIMG_001.jpg", "/hIMG_002.jpg", "/hIMG_003.jpg", "/hIMG_004.jpeg", "/hIMG_005.jpg"];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      {/* Hero with rotating background */}
      <section
        className="relative text-center h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] flex items-center justify-center bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${bannerImages[current]})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Empowering Africa with sustainable energy & smart facilities management
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            We deliver alternative power solutions and integrated FM services across
            Nigeria and Sub-Saharan Africa — reliable, efficient, and tailored to your needs.
          </p>
        </div>

        <div className="absolute bottom-4 sm:bottom-6 w-full flex justify-center gap-2 z-10">
          {bannerImages.map((_, i) => (
            <span key={i} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${current === i ? "bg-white" : "bg-gray-400"}`} />
          ))}
        </div>
      </section>

       {/* Who We Are */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Who We Are</h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            Electrified Engineering Limited (EEL) is a dynamic power and facilities
            management company incorporated in Nigeria in 2021. We specialise in
            renewable energy systems, backup power solutions, and comprehensive facilities
            management.
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
