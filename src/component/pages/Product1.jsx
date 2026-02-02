import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
// (Imports remain identical to your provided list)
import DriveMist1 from "../../asset/productimg/CMwebpimg/coolmax DriveMist Car Aroma Diffuser/1.webp";
import DriveMist2 from "../../asset/productimg/CMwebpimg/coolmax DriveMist Car Aroma Diffuser/2.webp";
import DriveMist3 from "../../asset/productimg/CMwebpimg/coolmax DriveMist Car Aroma Diffuser/3.webp";
import DriveMist4 from "../../asset/productimg/CMwebpimg/coolmax DriveMist Car Aroma Diffuser/4.webp";
import NovaCar1 from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/1.webp";
import NovaCar2 from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/2.webp";
import NovaCar3 from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/3.webp";
import NovaCar4 from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/4.webp";
import AeroBlackPro1 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/1.webp";
import AeroBlackPro2 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/2.webp";
import AeroBlackPro3 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/3.webp";
import AeroBlackPro4 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/4.webp";
import AeroCube1 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/1.webp";
import AeroCube2 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/2.webp";
import AeroCube3 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/3.webp";
import AeroCube4 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/4.webp";
import DeskScent1 from "../../asset/productimg/CMwebpimg/DeskScent/1.webp";
import DeskScent2 from "../../asset/productimg/CMwebpimg/DeskScent/2.webp";
import DeskScent3 from "../../asset/productimg/CMwebpimg/DeskScent/3.webp";
import DeskScent4 from "../../asset/productimg/CMwebpimg/DeskScent/4.webp";
import ZenBoxMini1 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/1.webp";
import ZenBoxMini2 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/2.webp";
import ZenBoxMini3 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/3.webp";
import ZenBoxMini4 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/4.webp";
import LuxePanel1 from "../../asset/productimg/CMwebpimg/LuxePanel Diffuser/1.webp";
import LuxePanel2 from "../../asset/productimg/CMwebpimg/LuxePanel Diffuser/2.webp";
import LuxePanel3 from "../../asset/productimg/CMwebpimg/LuxePanel Diffuser/3.webp";
import LuxePanel4 from "../../asset/productimg/CMwebpimg/LuxePanel Diffuser/4.webp";
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
import AirPolePro1 from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/1.webp";
import AirPolePro2 from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/2.webp";
import AirPolePro3 from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/3.webp";
import AirPolePro4 from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/4.webp";
import NanoPillar1 from "../../asset/productimg/CMwebpimg/NanoPillar Diffuser/1.webp";
import NanoPillar2 from "../../asset/productimg/CMwebpimg/NanoPillar Diffuser/2.webp";
import NanoPillar3 from "../../asset/productimg/CMwebpimg/NanoPillar Diffuser/3.webp";
import NanoPillar4 from "../../asset/productimg/CMwebpimg/NanoPillar Diffuser/4.webp";
import NaturalFragrance1 from "../../asset/productimg/CMwebpimg/Natural Fragrance Diffusion/1.webp";
import NaturalFragrance2 from "../../asset/productimg/CMwebpimg/Natural Fragrance Diffusion/2.webp";
import NaturalFragrance3 from "../../asset/productimg/CMwebpimg/Natural Fragrance Diffusion/3.webp";
import NaturalFragrance4 from "../../asset/productimg/CMwebpimg/Natural Fragrance Diffusion/4.webp";
import VentoCar1 from "../../asset/productimg/CMwebpimg/VentoCar/1.webp";
import VentoCar2 from "../../asset/productimg/CMwebpimg/VentoCar/2.webp";
import VentoCar3 from "../../asset/productimg/CMwebpimg/VentoCar/3.webp";
import VentoCar4 from "../../asset/productimg/CMwebpimg/VentoCar/4.webp";

const productList = [
  { id: 1, name: "Coolmax DriveMist Car Aroma", model: "H11-A-2026", cat: "Car Aroma Diffusers", images: [DriveMist1, DriveMist2, DriveMist3, DriveMist4] },
  { id: 2, name: "Coolmax DriveMist Pro Car", model: "H11-B-2026", cat: "Car Aroma Diffusers", images: [DriveMist1, DriveMist2, DriveMist3, DriveMist4] },
  { id: 3, name: "Coolmax AutoLux Aroma", model: "H19", cat: "Car Aroma Diffusers", images: [AeroBlackPro1, AeroBlackPro2, AeroBlackPro3, AeroBlackPro4] },
  { id: 4, name: "Coolmax AutoElite Metal Car", model: "DA1004-2026", cat: "Car Aroma Diffusers", images: [NovaCar1, NovaCar2, NovaCar3, NovaCar4] },
  { id: 5, name: "Coolmax OpalMist Smart Clock", model: "U2", cat: "Desktop & Small Space", images: [AeroCube1, AeroCube2, AeroCube3, AeroCube4] },
  { id: 6, name: "Coolmax DeskMist Aroma", model: "H10-A-2026", cat: "Desktop & Small Space", images: [DeskScent1, DeskScent2, DeskScent3, DeskScent4] },
  { id: 7, name: "Coolmax ZenBox Mini", model: "D50mini", cat: "Desktop & Small Space", images: [ZenBoxMini1, ZenBoxMini2, ZenBoxMini3, ZenBoxMini4] },
  { id: 8, name: "Coolmax AeroCube Wall/Desktop", model: "M41-B", cat: "Desktop & Small Space", images: [AeroCube1, AeroCube2, AeroCube3, AeroCube4] },
  { id: 9, name: "Coolmax LuxePanel Smart", model: "OV-5 / OV-5 Pro", cat: "Desktop & Small Space", images: [LuxePanel1, LuxePanel2, LuxePanel3, LuxePanel4] },
  { id: 10, name: "Coolmax CeilAir Pro Aroma", model: "M45", cat: "Wall-Mounted & Ceiling", images: [CeilAirPro1, CeilAirPro2, CeilAirPro3, CeilAirPro4] },
  { id: 11, name: "Coolmax AeroBlack Med", model: "Q500", cat: "Commercial Aroma Diffusers", images: [Titan1, Titan2, Titan3, Titan4] },
  { id: 12, name: "Coolmax MistBox X Commercial", model: "OV-10", cat: "Commercial Aroma Diffusers", images: [Titan1, Titan2, Titan3, Titan4] },
  { id: 13, name: "Coolmax AeroBlack Pro HVAC", model: "Q3000Pro", cat: "Large Area & HVAC", images: [Titan1, Titan2, Titan3, Titan4] },
  { id: 14, name: "Coolmax AirPulse 150 HVAC", model: "VS-160", cat: "Large Area & HVAC", images: [AirPulse1501, AirPulse1502, AirPulse1503, AirPulse1504] },
  { id: 15, name: "Coolmax AeroPillar Floor", model: "F-Air", cat: "Floor-Standing Aroma Diffusers", images: [AeroPillar1, AeroPillar2, AeroPillar3, AeroPillar4] },
  { id: 16, name: "Coolmax AirPole Pro Floor", model: "G-Air", cat: "Floor-Standing Aroma Diffusers", images: [AirPolePro1, AirPolePro2, AirPolePro3, AirPolePro4] },
  { id: 17, name: "Coolmax AuraCone Desktop", model: "A700", cat: "Floor-Standing Aroma Diffusers", images: [Titan1, Titan2, Titan3, Titan4] },
  { id: 18, name: "Coolmax NaturalFlow Passive", model: "M10", cat: "Passive / No-Power", images: [NaturalFragrance1, NaturalFragrance2, NaturalFragrance3, NaturalFragrance4] },
  { id: 19, name: "Coolmax NanoPillar Diffuser", model: "A500", cat: "Floor-Standing Aroma Diffusers", images: [NanoPillar1, NanoPillar2, NanoPillar3, NanoPillar4] },
  { id: 20, name: "Coolmax AeroMax Pro", model: "A315L", cat: "Floor-Standing Aroma Diffusers", images: [VentoCar1, VentoCar2, VentoCar3, VentoCar4] },
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
    let baseList = productList.filter(p => 
      (activeCat === "All Systems" || p.cat === activeCat) &&
      (p.name.toLowerCase().includes(search.toLowerCase()) || p.model.toLowerCase().includes(search.toLowerCase()))
    );

    if (activeCat === "All Systems") {
      const seenImages = new Set();
      return baseList.filter(item => {
        const mainImage = item.images[0];
        if (seenImages.has(mainImage)) return false;
        seenImages.add(mainImage);
        return true;
      });
    }
    return baseList;
  }, [activeCat, search]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#FAF9F6] text-slate-900 font-sans">
      
      {/* --- DESKTOP SIDEBAR (Hidden on Mobile) --- */}
      <aside className="hidden lg:flex w-80 flex-col border-r border-slate-200/60 sticky top-0 h-screen p-10 bg-white">
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
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs focus:outline-none focus:ring-2 ring-blue-500/10 transition-all"
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

      {/* --- MOBILE HEADER & CATEGORY SCROLLER --- */}
      <div className="lg:hidden sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 pt-4">
        <div className="flex items-center justify-between mb-4">
           <h1 className="text-xl font-black tracking-tighter uppercase italic">COOLMAX<span className="text-blue-600">.</span></h1>
           <div className="relative w-1/2">
             <MagnifyingGlassIcon className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
             <input 
               type="text" 
               placeholder="Search..." 
               className="w-full pl-9 pr-3 py-2 bg-slate-100 border-none rounded-full text-[10px] focus:ring-1 ring-blue-500/20"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
             />
           </div>
        </div>
        
        {/* Horizontal Category Pill Scroller */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all border ${
                activeCat === cat 
                ? "bg-slate-900 text-white border-slate-900 shadow-lg" 
                : "bg-white text-slate-400 border-slate-100"
              }`}
            >
              {cat === "All Systems" ? "All" : cat.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

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

        {/* GRID: 2 Columns on Mobile, 3 on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <ProductCard key={`${product.id}-${product.model}`} product={product} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
             <p className="text-slate-300 italic text-sm">No models found for "{search}"</p>
          </div>
        )}
      </main>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="group cursor-pointer flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] bg-white rounded-[1.5rem] md:rounded-[3rem] border border-slate-100 flex items-center justify-center p-4 md:p-12 transition-all duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] group-hover:-translate-y-1 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <img 
          src={hovered && product.images.length > 1 ? product.images[1] : product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply transition-all duration-700 group-hover:scale-110"
        />

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