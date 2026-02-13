import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */

// 1. Vento Car (H11-B-2026)
import VentoCar1 from "../../asset/productimg/CMwebpimg/VentoCar/1.webp";
import VentoCar2 from "../../asset/productimg/CMwebpimg/VentoCar/2.webp";

// 2. DriveScent (H11-A-2026)
import DriveScent1 from "../../asset/productimg/CMwebpimg/DriveScent/1.webp";
import DriveScent2 from "../../asset/productimg/CMwebpimg/DriveScent/2.webp";

// 3. DeskScent (H19)
import DeskScent1 from "../../asset/productimg/CMwebpimg/DeskScent/4.webp";
import DeskScent2 from "../../asset/productimg/CMwebpimg/DeskScent/2.webp";

// 4. NovaCarDiffuser (DA1004-2026)
import NovaCar1 from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/1.webp";
import NovaCar2 from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/2.webp";

// 5. AeroBlack Med diffuser (Q500)
import AeroBlackMed1 from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/1.webp";
import AeroBlackMed2 from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/2.webp";

// 6. MistBox X Diffuser (OV-10)
import MistBoxX1 from "../../asset/productimg/CMwebpimg/Mistbox X commercial Diffuser/1.webp";
import MistBoxX2 from "../../asset/productimg/CMwebpimg/Mistbox X commercial Diffuser/2.webp";

// 7. AeroCube Diffuser (M41-B)
import AeroCube1 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/1.webp";
import AeroCube2 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/2.webp";

// 8. ZenBox Mini Diffuser (D50mini)
import ZenBoxMini1 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/1.webp";
import ZenBoxMini2 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/2.webp";

// 9. AromaDesk (H10-A-2026)
import AromaDesk1 from "../../asset/productimg/CMwebpimg/AromaDesk/1.webp";
import AromaDesk2 from "../../asset/productimg/CMwebpimg/AromaDesk/2.webp";

// 10. LuxePanel Diffuser (OV-5/5Pro)
import LuxePanel1 from "../../asset/productimg/CMwebpimg/LuxePanel Diffuser wtc/1.webp";
import LuxePanel2 from "../../asset/productimg/CMwebpimg/LuxePanel Diffuser wtc/2.webp";

// 11. OpalMist Clock Diffuser (U2)
import OpalMist1 from "../../asset/productimg/CMwebpimg/OpalMist Clock Diffuser/1.webp";
import OpalMist2 from "../../asset/productimg/CMwebpimg/OpalMist Clock Diffuser/2.webp";

// 12. NanoPillar Diffuser (A500)
import NanoPillar1 from "../../asset/productimg/CMwebpimg/NanoPillar Diffuser/1.webp";
import NanoPillar2 from "../../asset/productimg/CMwebpimg/NanoPillar Diffuser/2.webp";

// 13. Titan Diffuser (A700)
import Titan1 from "../../asset/productimg/CMwebpimg/Titan Diffuser/1.webp";
import Titan2 from "../../asset/productimg/CMwebpimg/Titan Diffuser/2.webp";

// 14. AeroPillar Diffuser (F-Air)
import AeroPillar1 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/1.webp";
import AeroPillar2 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/2.webp";

// 15. AirPole Pro Diffuser (G-Air)
import AirPolePro1 from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/1.webp";
import AirPolePro2 from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/2.webp";

// 16. AeroBlack Pro Diffuser (Q3000Pro)
import AeroBlackPro1 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/1.webp";
import AeroBlackPro2 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/2.webp";

// 17. AirPulse 150 (VS-160)
import AirPulse1501 from "../../asset/productimg/CMwebpimg/AirPulse 150/1.webp";
import AirPulse1502 from "../../asset/productimg/CMwebpimg/AirPulse 150/2.webp";

// 18. Natural Fragrance Diffusion (M10)
import NaturalFragrance1 from "../../asset/productimg/CMwebpimg/Natural Fragrance Diffusion wtc/1.webp";
import NaturalFragrance2 from "../../asset/productimg/CMwebpimg/Natural Fragrance Diffusion wtc/2.webp";

// 19. CeilAir Pro Diffuser (M45)
import CeilAirPro1 from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/1.webp";
import CeilAirPro2 from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/2.webp";

// 20. AeroMax Pro (A315L)
import AeroMaxPro1 from "../../asset/productimg/CMwebpimg/AeroMax Pro/1.webp";
import AeroMaxPro2 from "../../asset/productimg/CMwebpimg/AeroMax Pro/2.webp";

const productList = [
  // --- CAR AROMA DIFFUSERS ---
  { id: 1, name: "Vento Car", model: "H11-B-2026", cat: "Car Aroma Diffusers", path: "/product/ventocar", images: [VentoCar1, VentoCar2] },
  { id: 2, name: "DriveScent", model: "H11-A-2026", cat: "Car Aroma Diffusers", path: "/product/drivemist", images: [DriveScent1, DriveScent2] },
  { id: 3, name: "DeskScent", model: "H19", cat: "Car Aroma Diffusers", path: "/product/deskmist", images: [DeskScent1, DeskScent2] },
  { id: 4, name: "NovaCarDiffuser", model: "DA1004-2026", cat: "Car Aroma Diffusers", path: "/product/novacar", images: [NovaCar1, NovaCar2] },

  // --- COMMERCIAL AROMA DIFFUSERS ---
  { id: 5, name: "AeroBlack Med diffuser", model: "Q500", cat: "Commercial Aroma Diffusers", path: "/product/aeroblack-med", images: [AeroBlackMed1, AeroBlackMed2] },
  { id: 6, name: "MistBox X Diffuser", model: "OV-10", cat: "Commercial Aroma Diffusers", path: "/product/mistbox", images: [MistBoxX1, MistBoxX2] },

  // --- DESKTOP & SMALL SPACE AROMA DIFFUSERS ---
  { id: 7, name: "AeroCube Diffuser", model: "M41-B", cat: "Desktop & Small Space Aroma Diffusers", path: "/product/aerocube", images: [AeroCube1, AeroCube2] },
  { id: 8, name: "ZenBox Mini Diffuser", model: "D50mini", cat: "Desktop & Small Space Aroma Diffusers", path: "/product/zenbox-mini", images: [ZenBoxMini1, ZenBoxMini2] },
  { id: 9, name: "AromaDesk", model: "H10-A-2026", cat: "Desktop & Small Space Aroma Diffusers", path: "/product/deskmist", images: [AromaDesk1, AromaDesk2] },
  { id: 10, name: "LuxePanel Diffuser", model: "OV-5/5Pro", cat: "Desktop & Small Space Aroma Diffusers", path: "/product/luxepanel", images: [LuxePanel1, LuxePanel2] },
  { id: 11, name: "OpalMist Clock Diffuser", model: "U2", cat: "Desktop & Small Space Aroma Diffusers", path: "/product/opalmist", images: [OpalMist1, OpalMist2] },

  // --- FLOOR-STANDING AROMA DIFFUSERS ---
  { id: 12, name: "NanoPillar Diffuser", model: "A500", cat: "Floor-Standing Aroma Diffusers", path: "/product/nanopillar", images: [NanoPillar1, NanoPillar2] },
  { id: 13, name: "Titan Diffuser", model: "A700", cat: "Floor-Standing Aroma Diffusers", path: "/product/titan", images: [Titan1, Titan2] },
  { id: 14, name: "AeroPillar Diffuser", model: "F-Air", cat: "Floor-Standing Aroma Diffusers", path: "/product/aeropillar", images: [AeroPillar1, AeroPillar2] },
  { id: 15, name: "AirPole Pro Diffuser", model: "G-Air", cat: "Floor-Standing Aroma Diffusers", path: "/product/airpole", images: [AirPolePro1, AirPolePro2] },

  // --- LARGE AREA & HVAC AROMA DIFFUSERS ---
  { id: 16, name: "AeroBlack Pro Diffuser", model: "Q3000Pro", cat: "Large Area & HVAC Aroma Diffusers", path: "/product/autolux", images: [AeroBlackPro1, AeroBlackPro2] },
  { id: 17, name: "AirPulse 150", model: "VS-160", cat: "Large Area & HVAC Aroma Diffusers", path: "/product/airpulse", images: [AirPulse1501, AirPulse1502] },

  // --- PASSIVE / NO-POWER DIFFUSERS ---
  { id: 18, name: "Natural Fragrance Diffusion", model: "M10", cat: "Passive / No-Power Diffusers", path: "/product/naturalflow", images: [NaturalFragrance1, NaturalFragrance2] },

  // --- WALL-MOUNTED & CEILING AROMA DIFFUSERS ---
  { id: 19, name: "CeilAir Pro Diffuser", model: "M45", cat: "Wall-Mounted & Ceiling Aroma Diffusers", path: "/product/ceilair", images: [CeilAirPro1, CeilAirPro2] },
  { id: 20, name: "AeroMax Pro", model: "A315L", cat: "Wall-Mounted & Ceiling Aroma Diffusers", path: "/product/aeromax", images: [AeroMaxPro1, AeroMaxPro2] }
];

const categories = [
  "All Systems", 
  "Car Aroma Diffusers",
  "Commercial Aroma Diffusers", 
  "Desktop & Small Space Aroma Diffusers", 
  "Floor-Standing Aroma Diffusers", 
  "Large Area & HVAC Aroma Diffusers", 
  "Passive / No-Power Diffusers",
  "Wall-Mounted & Ceiling Aroma Diffusers"
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
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#FAF9F6] text-slate-900 font-sans pt-16">
      
      {/* --- DESKTOP SIDEBAR --- */}
      <aside className="hidden lg:flex w-72 flex-col border-r border-slate-200/50 sticky top-16 h-[calc(100vh-64px)] bg-white z-20">
        <div className="p-8 pb-4">
          <h1 className="text-xl font-black tracking-tighter uppercase italic">COOLMAX<span className="text-blue-600">.</span></h1>
          <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-[0.2em]">Atmospheric Tech 2026</p>
        </div>
        <div className="px-6 py-4">
          <div className="relative">
            <MagnifyingGlassIcon className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search catalogue..." 
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-[11px] focus:outline-none ring-1 ring-transparent focus:ring-blue-500/20" 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
            />
          </div>
        </div>
        <nav className="flex-1 px-4 py-2 space-y-0.5 overflow-y-auto no-scrollbar">
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setActiveCat(cat)} 
              className={`w-full flex items-center gap-3 py-3 px-4 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all relative text-left ${activeCat === cat ? "text-blue-600 bg-blue-50/50" : "text-slate-500 hover:text-slate-900"}`}
            >
              <span className="truncate">{cat}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* --- MOBILE CATEGORY NAV & SEARCH --- */}
      <div className="lg:hidden sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="px-4 pt-4 pb-2">
           <div className="relative">
              <MagnifyingGlassIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-100/50 border-none rounded-xl text-xs focus:outline-none focus:ring-2 ring-blue-500/20" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
              />
           </div>
        </div>
        <div className="flex overflow-x-auto no-scrollbar px-4 py-3 gap-2">
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setActiveCat(cat)} 
              className={`whitespace-nowrap px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all border ${activeCat === cat ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20" : "bg-white border-slate-200 text-slate-500"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-4 lg:p-10">
        <header className="mb-6 lg:mb-10 text-left">
          <h2 className="text-3xl md:text-6xl font-serif leading-[1.1] mb-2 tracking-tight text-left">
            All <span className="italic text-slate-300 font-light">Products.</span>
          </h2>
          <div className="flex items-center gap-3">
             <span className="h-px w-6 lg:w-10 bg-blue-600"></span>
             <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
               {activeCat} — {filtered.length} Units
             </p>
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">No products found in this category.</p>
          </div>
        )}
      </main>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group relative flex flex-col"
    >
      <div className="relative aspect-square bg-white rounded-[1.2rem] lg:rounded-[2.5rem] border border-slate-100 flex items-center justify-center p-3 lg:p-8 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-blue-500/5 group-hover:-translate-y-1 overflow-hidden">
        
        {/* IMAGE SWAP */}
        <div className="relative w-full h-full">
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full h-full object-contain transition-opacity duration-700 opacity-100 group-hover:opacity-0"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <img 
                  src={product.images[1]} 
                  alt={`${product.name} alternate`} 
                  className="w-full h-full object-contain scale-95 group-hover:scale-105 transition-transform duration-700"
                />
            </div>
        </div>

        {/* REDIRECT LINK */}
        <Link 
          to={product.path} 
          className="absolute bottom-2 right-2 lg:bottom-5 lg:right-5 w-7 h-7 lg:w-11 lg:h-11 bg-slate-900 text-white rounded-full flex items-center justify-center lg:opacity-0 lg:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-blue-600 z-10 shadow-lg"
        >
          <ArrowUpRightIcon className="w-3.5 h-3.5 lg:w-5 lg:h-5" />
        </Link>

        {/* MODEL TAG */}
        <div className="absolute top-2 right-3 lg:top-6 lg:right-6">
          <span className="text-[5px] lg:text-[8px] font-black text-slate-300 uppercase tracking-widest group-hover:text-blue-600 transition-colors bg-slate-50/50 lg:bg-transparent px-1 rounded">
            {product.model}
          </span>
        </div>
      </div>

      <div className="mt-2.5 lg:mt-4 px-1 text-left">
        <h3 className="text-[10px] lg:text-base font-serif text-slate-900 mb-0.5 group-hover:text-blue-600 transition-colors leading-tight line-clamp-1 text-left">
          {product.name}
        </h3>
        <p className="text-[6px] lg:text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 text-left">
          {product.cat}
        </p>
      </div>
    </motion.div>
  );
}