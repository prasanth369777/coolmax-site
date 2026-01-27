import React from "react";
import { ArrowLongRightIcon, SparklesIcon } from "@heroicons/react/24/solid";

// ================= IMAGE IMPORTS =================
// Replace these paths with your actual image file names
import ProdHome from "../../asset/hero/vs-160_converted.webp"; 
import ProdComm from "../../asset/hero/q3000pro_converted.webp"; 
import ProdWall from "../../asset/hero/m45_converted.webp"; 
import ProdHVAC from "../../asset/hero/m41-b_converted.webp"; 
import ProdFloor from "../../asset/hero/a500_converted.webp"; 
import ProdCar from "../../asset/hero/Q-500_converted.webp"; 

const products = [
  {
    id: 1,
    title: "Home & Small Space Aroma Diffusers",
    desc: "Compact and efficient home diffuser machines that are ideal for bedrooms, living rooms, small offices, and personal spaces.",
    image: ProdHome,
    size: "col-span-1 md:col-span-2 lg:col-span-1", 
  },
  {
    id: 2,
    title: "Smart Bluetooth Aroma Diffusers",
    desc: "Professional-grade commercial scent machines suitable for offices, clinics, gyms, and retail stores, ensuring consistent fragrance.",
    image: ProdComm,
    size: "col-span-1 md:col-span-2 lg:col-span-2", 
  },
  {
    id: 3,
    title: "Wall-Mounted & Ceiling Diffusers",
    desc: "Perfect for corridors, washrooms, elevators, and common areas. Discreet, space-saving, and designed for continuous use.",
    image: ProdWall,
    size: "col-span-1", 
  },
  {
    id: 4,
    title: "Large Area & HVAC Diffusers",
    desc: "High-capacity HVAC scent diffusers and hotel scent diffuser systems designed for large spaces ranging from 3,000 m³ to 15,000 m³.",
    image: ProdHVAC,
    size: "col-span-1 md:col-span-2", 
  },
  {
    id: 5,
    title: "Floor-Standing Aroma Diffusers",
    desc: "Elegant and powerful scent air machines designed for hotel lobbies, showrooms, and premium interiors.",
    image: ProdFloor,
    size: "col-span-1",
  },
  {
    id: 6,
    title: "High Performance Aroma Diffusers",
    desc: "Portable scent machines for home and car that keep vehicle interiors fresh and pleasant.",
    image: ProdCar,
    size: "col-span-1", 
  },
];

export default function Products() {
  return (
    <section className="relative w-full py-24 bg-[#020617] overflow-hidden" id="products">
      
      {/* ================= USER PROVIDED BACKGROUND (UNCHANGED) ================= */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "#020617",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
          `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />

      {/* ================= CONTENT (Z-10 to sit above bg) ================= */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* --- Header --- */}
        <div className="mb-20 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md mb-6">
             <SparklesIcon className="w-4 h-4 text-indigo-400" />
             <span className="text-indigo-200 text-xs font-bold tracking-widest uppercase">
               Our Collection
             </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Aroma Diffusers for <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient">
              Every Space
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed border-l-2 border-indigo-500/50 pl-6 max-w-2xl">
            From Small Rooms to Large Commercial Areas, Cool Max offers a wide range of scent diffuser machines designed to suit different environments and coverage requirements.
          </p>
        </div>

        {/* --- Modern Bento Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <div 
              key={item.id} 
              className={`group relative h-[450px] overflow-hidden rounded-[2rem] cursor-pointer border border-white/5 bg-white/[0.02] backdrop-blur-sm ${item.size} hover:border-indigo-500/50 hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.3)] transition-all duration-500 ease-out`}
            >
              
              {/* Background Image with Cinematic Zoom */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-60"
                />
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent opacity-90 transition-opacity duration-300" />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                
                {/* Floating Badge (Optional per card if needed, currently stylized title) */}
                <div className="w-10 h-1 bg-indigo-500 rounded-full mb-4 transform origin-left transition-all duration-300 group-hover:w-20 group-hover:bg-purple-400" />

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight drop-shadow-lg group-hover:text-indigo-100 transition-colors">
                  {item.title}
                </h3>

                {/* Description (Glass Morphism Card reveals on hover) */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-48 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <div className="pt-2 pb-4">
                    <p className="text-slate-300 text-sm leading-relaxed mb-4 border-l border-white/20 pl-3">
                      {item.desc}
                    </p>
                    
                    {/* Action Button */}
                    <div className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-md transition-all">
                      View Specifications <ArrowLongRightIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Top Right Decorative Icon */}
              <div className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <ArrowLongRightIcon className="w-5 h-5 text-white -rotate-45" />
              </div>

            </div>
          ))}
        </div>

        {/* --- Premium Bottom CTA --- */}
        <div className="mt-20 text-center relative z-10">
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <button className="px-12 py-4 bg-[#0F172A] text-white font-bold rounded-full hover:bg-transparent transition-all duration-300 relative group overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Explore All Diffuser Categories <ArrowLongRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
            </button>
          </div>
          <p className="text-slate-500 mt-4 text-sm font-medium">
            Not sure which machine fits your needs? <a href="#contact" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4">Talk to an expert</a>
          </p>
        </div>

      </div>
    </section>
  );
}