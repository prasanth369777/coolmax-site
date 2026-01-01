import React from "react";

// IMPORT IMAGES
import CarImg from "../../src/asset/categories/car.jpg";
import LobbyImg from "../../src/asset/categories/lobby.jpg";
import WallImg from "../../src/asset/categories/wall.jpg";
import HvacImg from "../../src/asset/categories/hvac.jpg";
import RoomImg from "../../src/asset/categories/room.jpg";
import AerosolImg from "../../src/asset/categories/aerosol.jpg";

const categories = [
  {
    title: "Car Scenting Solutions",
    description:
      "Compact fragrance systems designed specifically for vehicles and personal use.",
    image: CarImg,
    link: "#car-products",
  },
  {
    title: "Lobby & Large Area Scenting",
    description:
      "High-performance diffusers for hotels, malls, and large commercial spaces.",
    image: LobbyImg,
    link: "#lobby-products",
  },
  {
    title: "Wall Mount Diffusers",
    description:
      "Efficient wall-mounted scenting solutions for washrooms and corridors.",
    image: WallImg,
    link: "#wall-products",
  },
  {
    title: "HVAC Integrated Systems",
    description:
      "Professional-grade scenting systems compatible with HVAC infrastructure.",
    image: HvacImg,
    link: "#hvac-products",
  },
  {
    title: "Room Atmosphere Solutions",
    description:
      "Balanced fragrance systems for rooms, offices, and enclosed environments.",
    image: RoomImg,
    link: "#room-products",
  },
  {
    title: "Automatic Aerosol Dispensers",
    description:
      "Automated aerosol-based scenting solutions for public facilities.",
    image: AerosolImg,
    link: "#aerosol-products",
  },
];

export default function ProductCategories() {
  return (
    <section
      className="relative min-h-[120vh] py-36 px-6
                 bg-gradient-to-br from-white via-gray-50 to-gray-100
                 overflow-hidden"
    >
      {/* VECTOR BACKGROUND */}
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

      {/* CONTENT */}
      <div className="relative max-w-[1400px] mx-auto">

        {/* HEADING */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Categories
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore our professional scenting solutions, categorized by
            application and environment.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((cat, idx) => (
            <a
              key={idx}
              href={cat.link}
              className="group relative h-[360px] rounded-[32px] overflow-hidden
                         bg-gray-100 transition-all duration-500
                         shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]
                         hover:shadow-[10px_10px_30px_#bebebe,-10px_-10px_30px_#ffffff]"
            >
              {/* IMAGE */}
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover
                           transform group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition duration-500" />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-semibold mb-2">
                  {cat.title}
                </h3>

                <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
                  <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center font-medium text-sm">
                    View Products
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
