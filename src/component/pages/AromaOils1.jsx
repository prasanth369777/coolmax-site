import React from "react";
import { ArrowLongRightIcon, SparklesIcon, Squares2X2Icon } from "@heroicons/react/24/solid";

// ================= IMAGE IMPORTS =================
import ProdHome from "../../asset/hero/vs-160_converted.webp"; 
import ProdComm from "../../asset/hero/q3000pro_converted.webp"; 
import ProdWall from "../../asset/hero/m45_converted.webp"; 
import ProdHVAC from "../../asset/hero/m41-b_converted.webp"; 
import ProdFloor from "../../asset/hero/a500_converted.webp"; 
import ProdCar from "../../asset/hero/Q-500_converted.webp"; 

// ================= DATA STRUCTURE =================
const categories = [
  {
    id: 1,
    title: "Home & Small Space Aroma Diffusers",
    desc: "Compact and efficient home diffuser machines that are ideal for bedrooms, living rooms, small offices, and personal spaces. These systems deliver controlled fragrance without being too strong.",
    // Placeholder: Using the same image 4 times. Replace with unique images for this category.
    gallery: [ProdHome, ProdHVAC, ProdComm, ProdFloor] 
  },
  {
    id: 2,
    title: "Wall-Mounted & Ceiling Aroma Diffusers",
    desc: "Perfect for corridors, washrooms, elevators, and common areas. These aroma scent diffusers are discreet, space-saving, and designed for continuous use.",
    gallery: [ProdWall, ProdHVAC, ProdComm, ProdFloor]
  },
  {
    id: 3,
    title: "Commercial Aroma Diffusers",
    desc: "Professional-grade commercial scent machines suitable for offices, clinics, gyms, and retail stores, ensuring consistent fragrance throughout working hours.",
    gallery: [ProdHome, ProdHVAC, ProdComm, ProdFloor]
  },
  {
    id: 4,
    title: "Floor-Standing Aroma Diffusers",
    desc: "Elegant and powerful scent air machines designed for hotel lobbies, showrooms, and premium interiors where both performance and appearance matter.",
    gallery: [ProdHome, ProdHVAC, ProdComm, ProdFloor]
  },
  {
    id: 5,
    title: "Large Area & HVAC Aroma Diffusers",
    desc: "High-capacity HVAC scent diffusers and hotel scent diffuser systems designed for large spaces ranging from 3,000 m³ to 15,000 m³.",
    gallery: [ProdHome, ProdHVAC, ProdComm, ProdFloor]
  },
  {
    id: 6,
    title: "Car Aroma Diffusers",
    desc: "Portable scent machines for home and car that keep vehicle interiors fresh and pleasant.",
    gallery: [ProdHome, ProdHVAC, ProdCar, ProdFloor]
  },
];

export default function Products() {
  return (
    <section className="relative w-full py-24 bg-[#020617] overflow-hidden" id="products">
      
      {/* ================= BACKGROUND (UNCHANGED) ================= */}
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

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="mb-20 max-w-5xl mx-auto text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md mb-6">
             <SparklesIcon className="w-4 h-4 text-indigo-400" />
             <span className="text-indigo-200 text-xs font-bold tracking-widest uppercase">
               Our Collection
             </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Aroma Diffusers for <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient">
              Every Space
            </span>
          </h2>
          
          <div className="space-y-4">
            <p className="text-xl text-white font-semibold">
              From Small Rooms to Large Commercial Areas
            </p>
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto md:mx-0">
              Cool Max offers a wide range of scent diffuser machines designed to suit different environments and coverage requirements. Our product range includes:
            </p>
          </div>
        </div>

        {/* ================= CATEGORY LIST ================= */}
        <div className="flex flex-col gap-16">
          {categories.map((cat, index) => (
            <div 
              key={cat.id} 
              className="group relative p-8 md:p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-md hover:border-indigo-500/30 transition-all duration-500"
            >
              {/* Hover Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-opacity duration-500" />

              <div className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-10 items-center">
                
                {/* --- Text Content (Left/Top) --- */}
                <div className="xl:col-span-4 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                    <Squares2X2Icon className="w-6 h-6 text-slate-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base border-l-2 border-white/10 pl-4 group-hover:border-indigo-500/50 transition-colors">
                    {cat.desc}
                  </p>
                  
                  <button className="mt-4 inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                    View Models <ArrowLongRightIcon className="w-5 h-5" />
                  </button>
                </div>

                {/* --- 4-Image Grid (Right/Bottom) --- */}
                <div className="xl:col-span-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {cat.gallery.map((img, imgIdx) => (
                      <div 
                        key={imgIdx} 
                        className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-black/20 group/img"
                      >
                        <img 
                          src={img} 
                          alt={`${cat.title} ${imgIdx + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-110 opacity-90 group-hover/img:opacity-100"
                        />
                        {/* Overlay on individual image hover */}
                        <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="p-2 bg-white/10 backdrop-blur-md rounded-full">
                            <ArrowLongRightIcon className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-24 text-center">
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <button className="px-12 py-4 bg-[#0F172A] text-white font-bold rounded-full hover:bg-transparent transition-all duration-300 relative group overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Explore All Diffuser Categories and Find the Right Solution for Your Space
                <ArrowLongRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}