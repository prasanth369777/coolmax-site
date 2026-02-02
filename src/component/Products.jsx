import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import DriveMist1 from "../asset/productimg/CMwebpimg/coolmax DriveMist Car Aroma Diffuser/1.webp";
import NovaCar1 from "../asset/productimg/CMwebpimg/NovaCar Diffuser/1.webp";
import AeroBlackPro1 from "../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/1.webp";
import AeroCube1 from "../asset/productimg/CMwebpimg/AeroCube Diffuser/1.webp";
import DeskScent1 from "../asset/productimg/CMwebpimg/DeskScent/1.webp";
import ZenBoxMini1 from "../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/1.webp";
import LuxePanel1 from "../asset/productimg/CMwebpimg/LuxePanel Diffuser/1.webp";
import CeilAirPro1 from "../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/1.webp";
import Titan1 from "../asset/productimg/CMwebpimg/Titan Diffuser/1.webp";
import AirPulse1501 from "../asset/productimg/CMwebpimg/AirPulse 150/1.webp";
import AeroPillar1 from "../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/1.webp";
import AirPolePro1 from "../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/1.webp";
import NanoPillar1 from "../asset/productimg/CMwebpimg/NanoPillar Diffuser/1.webp";
import NaturalFragrance1 from "../asset/productimg/CMwebpimg/Natural Fragrance Diffusion/1.webp";
import VentoCar1 from "../asset/productimg/CMwebpimg/VentoCar/1.webp";
// Importing a specific image for MistBox to ensure 16 unique assets
import AeroBlackPro2 from "../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/2.webp"; 

/* ================= UNIQUE 16 PRODUCT LIST ================= */
const productList = [
  { id: 1, name: "DriveMist Car Aroma", model: "H11-A-2026", cat: "Car Aroma Diffusers", images: [DriveMist1], path: "/product/drivemist" },
  { id: 2, name: "NovaCar Diffuser", model: "DA1004-2026", cat: "Car Aroma Diffusers", images: [NovaCar1], path: "/product/novacar" },
  { id: 3, name: "AutoLux Aroma", model: "H19", cat: "Car Aroma Diffusers", images: [AeroBlackPro1], path: "/product/autolux" },
  { id: 4, name: "VentoCar Pro", model: "V-2026", cat: "Car Aroma Diffusers", images: [VentoCar1], path: "/product/ventocar" },
  { id: 5, name: "OpalMist Smart Clock", model: "U2", cat: "Desktop & Small Space", images: [AeroCube1], path: "/product/opalmist" },
  { id: 6, name: "DeskMist Aroma", model: "H10-A-2026", cat: "Desktop & Small Space", images: [DeskScent1], path: "/product/deskmist" },
  { id: 7, name: "ZenBox Mini", model: "D50mini", cat: "Desktop & Small Space", images: [ZenBoxMini1], path: "/product/zenbox-mini" },
  { id: 8, name: "LuxePanel Smart", model: "OV-5", cat: "Desktop & Small Space", images: [LuxePanel1], path: "/product/luxepanel" },
  { id: 9, name: "CeilAir Pro Aroma", model: "M45", cat: "Wall-Mounted & Ceiling", images: [CeilAirPro1], path: "/product/ceilair" },
  { id: 10, name: "AeroBlack Med", model: "Q500", cat: "Commercial Aroma Diffusers", images: [Titan1], path: "/product/aeroblack-med" },
  { id: 11, name: "MistBox X Commercial", model: "OV-10", cat: "Commercial Aroma Diffusers", images: [AeroBlackPro2], path: "/product/mistbox" },
  { id: 12, name: "AirPulse 150 HVAC", model: "VS-160", cat: "Large Area & HVAC", images: [AirPulse1501], path: "/product/airpulse" },
  { id: 13, name: "AeroPillar Floor", model: "F-Air", cat: "Floor-Standing Aroma Diffusers", images: [AeroPillar1], path: "/product/aeropillar" },
  { id: 14, name: "AirPole Pro Floor", model: "G-Air", cat: "Floor-Standing Aroma Diffusers", images: [AirPolePro1], path: "/product/airpole" },
  { id: 15, name: "NanoPillar Diffuser", model: "A500", cat: "Floor-Standing Aroma Diffusers", images: [NanoPillar1], path: "/product/nanopillar" },
  { id: 16, name: "NaturalFlow Passive", model: "M10", cat: "Passive / No-Power", images: [NaturalFragrance1], path: "/product/naturalflow" },
];

const categories = [
  "All Systems",
  "Car Aroma Diffusers",
  "Desktop & Small Space",
  "Wall-Mounted & Ceiling",
  "Commercial Aroma Diffusers",
  "Large Area & HVAC",
  "Floor-Standing Aroma Diffusers",
  "Passive / No-Power"
];

export default function ArchitectStore() {
  const [activeCat, setActiveCat] = useState("All Systems");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return productList.filter(p => 
      (activeCat === "All Systems" || p.cat === activeCat) &&
      (p.name.toLowerCase().includes(search.toLowerCase()) || p.model.toLowerCase().includes(search.toLowerCase()))
    );
  }, [activeCat, search]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#FAF9F6] text-slate-900 font-sans mt-16">
      
      {/* --- DESKTOP SIDEBAR --- */}
      <aside className="hidden lg:flex w-80 flex-col border-r border-slate-200/60 sticky top-0 h-screen p-10 bg-white z-20">
        <div className="mb-12">
          <h1 className="text-2xl font-black tracking-tighter uppercase italic">
            COOLMAX<span className="text-blue-600">.</span>
          </h1>
          <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest">Atmospheric Tech 2026</p>
        </div>

        <div className="relative mb-10">
          <MagnifyingGlassIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search models..." 
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs focus:outline-none transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`w-full flex items-center justify-between py-3.5 px-4 rounded-xl text-[11px] font-black uppercase tracking-tight transition-all group ${
                activeCat === cat ? "bg-slate-900 text-white shadow-xl shadow-slate-200" : "text-slate-400 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <span className="truncate">{cat}</span>
              <ChevronRightIcon className={`w-3 h-3 transition-transform ${activeCat === cat ? "rotate-90 text-white" : "group-hover:translate-x-1"}`} />
            </button>
          ))}
        </nav>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-5 md:p-16 lg:p-24 overflow-y-auto">
        <header className="mb-10 lg:mb-24 mt-4 lg:mt-0">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-4xl md:text-8xl font-serif leading-[1.1] mb-4 md:mb-10 text-slate-900 tracking-tight">
              The <span className="italic text-slate-300 font-light">New</span> <br className="hidden md:block" /> Standards.
            </h2>
            <div className="flex items-center gap-4">
               <span className="h-px w-12 bg-blue-600"></span>
               <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">
                 {activeCat} — {filtered.length} Units
               </p>
            </div>
          </motion.div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>
      </main>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="group cursor-pointer flex flex-col relative"
    >
      <div className="relative aspect-[4/5] bg-white rounded-[1.5rem] md:rounded-[3rem] border border-slate-100 flex items-center justify-center p-4 md:p-12 transition-all duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] group-hover:-translate-y-1 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply transition-all duration-700 group-hover:scale-110"
        />

        {/* --- REDIRECT ARROW BUTTON --- */}
        <Link 
          to={product.path} 
          className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-10 h-10 md:w-14 md:h-14 bg-slate-900 text-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-blue-600 z-10 shadow-xl"
        >
          <ArrowUpRightIcon className="w-5 h-5 md:w-6 md:h-6" />
        </Link>

        <div className="absolute top-4 right-4 md:top-10 md:right-10">
          <span className="text-[7px] md:text-[9px] font-black text-slate-300 uppercase tracking-widest group-hover:text-slate-900 transition-colors">
            {product.model}
          </span>
        </div>
      </div>

      <div className="mt-4 px-1 md:px-4">
        <h3 className="text-[11px] md:text-xl font-serif text-slate-900 mb-1 group-hover:text-blue-600 transition-colors leading-tight line-clamp-1">
          {product.name}
        </h3>
        <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">
           {product.cat.split(' ')[0]}
        </p>
      </div>
    </motion.div>
  );
}