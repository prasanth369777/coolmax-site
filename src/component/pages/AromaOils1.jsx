import React, { useState } from "react";
import { ArrowRightIcon, ShoppingBagIcon, SparklesIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom"; // Added for internal redirection

// ================= IMAGE ASSETS =================
import DriveMist1 from "../../asset/productimg/CMwebpimg/AromaDesk/1.webp";
import DriveMist2 from "../../asset/productimg/CMwebpimg/AromaDesk/2.webp";
import DriveMist3 from "../../asset/productimg/CMwebpimg/AromaDesk/3.webp";
import DriveMist4 from "../../asset/productimg/CMwebpimg/AromaDesk/4.webp";

import ZenBoxMini1 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/1.webp";
import ZenBoxMini2 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/2.webp";
import ZenBoxMini3 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/3.webp";
import ZenBoxMini4 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/4.webp";

import CeilAirPro1 from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/1.webp";
import CeilAirPro2 from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/2.webp";
import CeilAirPro3 from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/3.webp";
import CeilAirPro4 from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/4.webp";

import Titan1 from "../../asset/productimg/CMwebpimg/Titan Diffuser/1.webp";
import Titan2 from "../../asset/productimg/CMwebpimg/Titan Diffuser/2.webp";
import Titan3 from "../../asset/productimg/CMwebpimg/Titan Diffuser/3.webp";
import Titan4 from "../../asset/productimg/CMwebpimg/Titan Diffuser/4.webp";

import AirPulse1501 from "../../asset/productimg/CMwebpimg/AirPulse 150/1.webp";
import AirPulse1502 from "../../asset/productimg/CMwebpimg/AirPulse 150/2.webp";
import AirPulse1503 from "../../asset/productimg/CMwebpimg/AirPulse 150/3.webp";
import AirPulse1504 from "../../asset/productimg/CMwebpimg/AirPulse 150/4.webp";

import AeroPillar1 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/1.webp";
import AeroPillar2 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/2.webp";
import AeroPillar3 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/3.webp";
import AeroPillar4 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/4.webp";


const categories = [
  { 
    id: 1, 
    title: "Home & Small Space Aroma Diffusers", 
    tag: "Personal", 
    img: ZenBoxMini1, 
    gallery: [ZenBoxMini1, ZenBoxMini2, ZenBoxMini3, ZenBoxMini4],
    path: "/desktop-small-diffusers", // Appropriate page redirection
    desc: "Compact and efficient home diffuser machines that are ideal for bedrooms, living rooms, small offices, and personal spaces. These systems deliver controlled fragrance without being too strong." 
  },
  { 
    id: 2, 
    title: "Wall-Mounted & Ceiling Aroma Diffusers", 
    tag: "Discreet", 
    img: CeilAirPro1, 
    gallery: [CeilAirPro1, CeilAirPro2, CeilAirPro3, CeilAirPro4],
    path: "/wall-mounted-diffusers", // Appropriate page redirection
    desc: "Perfect for corridors, washrooms, elevators, and common areas. These aroma scent diffusers are discreet, space-saving, and designed for continuous use." 
  },
  { 
    id: 3, 
    title: "Commercial Aroma Diffusers", 
    tag: "Professional", 
    img: Titan1, 
    gallery: [Titan1, Titan2, Titan3, Titan4],
    path: "/commercial-diffusers", // Appropriate page redirection
    desc: "Professional-grade commercial scent machines suitable for offices, clinics, gyms, and retail stores, ensuring consistent fragrance throughout working hours." 
  },
  { 
    id: 4, 
    title: "Floor-Standing Aroma Diffusers", 
    tag: "Luxury", 
    img: AeroPillar1, 
    gallery: [AeroPillar1, AeroPillar2, AeroPillar3, AeroPillar4],
    path: "/floor-standing-diffusers", // Appropriate page redirection
    desc: "Elegant and powerful scent air machines designed for hotel lobbies, showrooms, and premium interiors where both performance and appearance matter." 
  },
  { 
    id: 5, 
    title: "Large Area & HVAC Aroma Diffusers", 
    tag: "Industrial", 
    img: AirPulse1501, 
    gallery: [AirPulse1501, AirPulse1502, AirPulse1503, AirPulse1504],
    path: "/large-area-diffusers", // Appropriate page redirection
    desc: "High-capacity HVAC scent diffusers and hotel scent diffuser systems designed for large spaces ranging from 3,000 m³ to 15,000 m³." 
  },
  { 
    id: 6, 
    title: "Car Aroma Diffusers", 
    tag: "On-the-go", 
    img: DriveMist1, 
    gallery: [DriveMist1, DriveMist2, DriveMist3, DriveMist4],
    path: "/car-diffusers", // Appropriate page redirection
    desc: "Portable scent machines for home and car that keep vehicle interiors fresh and pleasant." 
  },
];

export default function EcommerceProducts() {
  return (
    <section className="relative w-full py-24 bg-[#FDFDFD] text-slate-900 overflow-hidden" id="products">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-[-12deg] translate-x-32 pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-slate-100 pb-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/5 border border-blue-600/10 mb-6">
              <SparklesIcon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest">Cool Max 2026 Collection</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif leading-[0.9] tracking-tighter mb-6">
              Aroma Diffusers for <br /> 
              <span className="text-blue-600 italic font-light">Every Space</span>
            </h2>
            <div className="space-y-4">
               <p className="text-2xl font-medium text-slate-800">From Small Rooms to Large Commercial Areas</p>
               <p className="text-slate-500 text-lg font-medium max-w-2xl leading-relaxed">
                 Cool Max offers a wide range of scent diffuser machines designed to suit different environments and coverage requirements. Our product range includes:
               </p>
            </div>
          </div>
        
        </div>

        {/* --- ECOMMERCE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat) => (
            <ProductCard key={cat.id} cat={cat} />
          ))}
        </div>

        {/* --- FINAL CATEGORY CALL --- */}
        <div className="mt-20 text-center">
            <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.3em] mb-8">
                Explore all diffuser categories and find the right solution for your space.
            </p>
        </div>

        {/* --- CALL TO ACTION --- */}
        <div className="mt-12 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
          <h3 className="text-3xl md:text-5xl font-serif text-white mb-8 relative z-10 leading-tight">
            Need a Custom Scent <br /> <span className="italic text-blue-400 font-light">Solution for Your Business?</span>
          </h3>
          <Link to="/solutions" className="inline-flex items-center gap-4 px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-blue-600 hover:text-white transition-all relative z-10">
            Request Professional Quote <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}

function ProductCard({ cat }) {
  const [activeImg, setActiveImg] = useState(cat.img);

  return (
    <div className="group relative bg-white rounded-[2.5rem] border border-slate-100 p-8 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] flex flex-col">
      
      {/* Image Stage */}
      <div className="relative aspect-square bg-[#F8FAFC] rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8 mb-8 group-hover:bg-white transition-colors">
        <div className="absolute top-6 left-6">
          <span className="px-3 py-1 bg-white shadow-sm border border-slate-100 rounded-full text-[9px] font-black uppercase tracking-widest text-blue-600">
            {cat.tag}
          </span>
        </div>
        
        <img 
          src={activeImg} 
          alt={cat.title} 
          className="w-full h-2/3 object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
        />

        {/* 4-Image Sub-Gallery */}
        <div className="mt-6 flex gap-2 z-10">
          {cat.gallery.map((thumb, i) => (
            <button
              key={i}
              onMouseEnter={() => setActiveImg(thumb)}
              className={`w-12 h-12 rounded-xl border-2 transition-all p-1 bg-white ${
                activeImg === thumb ? "border-blue-500 scale-110 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={thumb} className="w-full h-full object-contain mix-blend-multiply" alt="variant" />
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-2xl font-serif font-medium text-slate-900 group-hover:text-blue-600 transition-colors mb-4 leading-tight">
          {cat.title}
        </h3>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-8">
          {cat.desc}
        </p>

        <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
          <Link to={cat.path} className="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-lg">
              <ShoppingBagIcon className="w-4 h-4" /> View Category Details
          </Link>
        </div>
      </div>
    </div>
  );
}