import React from "react";

// ================= IMAGE IMPORTS =================
// (Kept these imports because they are used as placeholders below)
import CarImg from "../../src/asset/categories/car.jpg";
import LobbyImg from "../../src/asset/categories/lobby.jpg";
import WallImg from "../../src/asset/categories/wall.jpg";
import HvacImg from "../../src/asset/categories/hvac.jpg";
import RoomImg from "../../src/asset/categories/room.jpg";
import AerosolImg from "../../src/asset/categories/aerosol.jpg";

// ================= DATA CONFIGURATION =================

const aromaCategories = [
  {
    title: "Fresh & Clean Scents",
    description: "Crisp, airy notes like linen, ocean breeze, and rain that evoke a sense of purity.",
    image: RoomImg, // Placeholder
  },
  {
    title: "Floral Comfort Scents",
    description: "Soft, blooming aromas like jasmine, rose, and lily designed for elegance and calm.",
    image: LobbyImg, // Placeholder
  },
  {
    title: "Energy & Citrus Scents",
    description: "Zesty blends of lemon, orange, and bergamot to boost productivity and mood.",
    image: WallImg, // Placeholder
  },
  {
    title: "Warm & Luxury Scents",
    description: "Rich notes of oud, amber, leather, and spices for a sophisticated, high-end atmosphere.",
    image: HvacImg, // Placeholder
  },
  {
    title: "Relaxation & Wellness",
    description: "Therapeutic blends featuring lavender, eucalyptus, and white tea for spas and homes.",
    image: RoomImg, // Placeholder
  },
  {
    title: "Signature Business Scents",
    description: "Bespoke olfactory logos created to define your brand identity.",
    image: LobbyImg, // Placeholder
  },
  {
    title: "Car & Personal Space",
    description: "Travel-friendly fragrance options for your commute and personal desk.",
    image: CarImg, // Placeholder
  },
  {
    title: "Trial & Sample Scents",
    description: "Discovery sets allowing you to experience our collection before committing.",
    image: AerosolImg, // Placeholder
  },
];

export default function ProductCategories() {
  return (
    <section
      className="relative min-h-[80vh] py-24 px-6
                 bg-gradient-to-br from-white via-gray-50 to-gray-100
                 overflow-hidden"
    >
      {/* VECTOR BACKGROUND PATTERN */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.035]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="category-lines"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 48 0 L 0 48" stroke="#9CA3AF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#category-lines)" />
        </svg>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative max-w-[1400px] mx-auto">
        
        {/* HEADING */}
        <div className="text-center mb-20">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2 block">
            Our Fragrances
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Aroma Oils
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Curated scent collections designed to evoke emotion, trigger memory, and create the perfect atmosphere.
          </p>
        </div>

        {/* AROMA GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {aromaCategories.map((cat, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image Top Half */}
              <div className="relative h-64 overflow-hidden">
                 {/* Fallback color if image fails */}
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>

              {/* Content Bottom Half */}
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {cat.description}
                </p>
                
                <button className="mt-auto self-start text-sm font-semibold text-emerald-600 hover:text-emerald-800 flex items-center gap-1 group/btn">
                  Discover
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}