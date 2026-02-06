import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import DriveMist1 from "../../asset/productimg/CMwebpimg/coolmax DriveMist Car Aroma Diffuser/1.webp";
import DriveMist2 from "../../asset/productimg/CMwebpimg/coolmax DriveMist Car Aroma Diffuser/2.webp";
import NovaCar1 from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/1.webp";
import NovaCar2 from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/2.webp";
import AeroBlackPro1 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/1.webp";
import AeroBlackPro2 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/2.webp";
import AeroCube1 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/1.webp";
import AeroCube2 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/2.webp";
import DeskScent1 from "../../asset/productimg/CMwebpimg/DeskScent/1.webp";
import DeskScent2 from "../../asset/productimg/CMwebpimg/DeskScent/2.webp";
import ZenBoxMini1 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/1.webp";
import ZenBoxMini2 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/2.webp";
import LuxePanel1 from "../../asset/productimg/CMwebpimg/LuxePanel Diffuser/1.webp";
import LuxePanel2 from "../../asset/productimg/CMwebpimg/LuxePanel Diffuser/2.webp";
import CeilAirPro1 from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/1.webp";
import CeilAirPro2 from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/2.webp";
import Titan1 from "../../asset/productimg/CMwebpimg/Titan Diffuser/1.webp";
import Titan2 from "../../asset/productimg/CMwebpimg/Titan Diffuser/2.webp";
import AirPulse1501 from "../../asset/productimg/CMwebpimg/AirPulse 150/1.webp";
import AirPulse1502 from "../../asset/productimg/CMwebpimg/AirPulse 150/2.webp";
import AeroPillar1 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/1.webp";
import AeroPillar2 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/2.webp";
import AirPolePro1 from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/1.webp";
import AirPolePro2 from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/2.webp";
import NanoPillar1 from "../../asset/productimg/CMwebpimg/NanoPillar Diffuser/1.webp";
import NanoPillar2 from "../../asset/productimg/CMwebpimg/NanoPillar Diffuser/2.webp";
import NaturalFragrance1 from "../../asset/productimg/CMwebpimg/Natural Fragrance Diffusion/1.webp";
import NaturalFragrance2 from "../../asset/productimg/CMwebpimg/Natural Fragrance Diffusion/2.webp";
import VentoCar1 from "../../asset/productimg/CMwebpimg/VentoCar/1.webp";
import VentoCar2 from "../../asset/productimg/CMwebpimg/VentoCar/2.webp";

/* ================= PRODUCT LIST (20 UNIQUE WITH HOVER PAIRS) ================= */
const productList = [
  { id: 1, name: "DriveScent", model: "H11-A", cat: "Car Aroma Diffusers", path: "/product/drivemist", images: [DriveMist1, DriveMist2] },
  { id: 2, name: "NovaCar Diffuser", model: "DA1004", cat: "Car Aroma Diffusers", path: "/product/novacar", images: [NovaCar1, NovaCar2] },
  { id: 3, name: "AutoLux Aroma", model: "H19", cat: "Car Aroma Diffusers", path: "/product/autolux", images: [AeroBlackPro2, AeroBlackPro1] },
  { id: 4, name: "VentoCar Pro", model: "V-2026", cat: "Car Aroma Diffusers", path: "/product/ventocar", images: [VentoCar1, VentoCar2] },
  { id: 5, name: "OpalMist Clock", model: "U2", cat: "Desktop & Small Space", path: "/product/opalmist", images: [AeroCube1, AeroCube2] },
  { id: 6, name: "AromaDesk", model: "H10-A", cat: "Desktop & Small Space", path: "/product/deskmist", images: [DeskScent1, DeskScent2] },
  { id: 7, name: "ZenBox Mini", model: "D50mini", cat: "Desktop & Small Space", path: "/product/zenbox-mini", images: [ZenBoxMini1, ZenBoxMini2] },
  { id: 8, name: "LuxePanel Smart", model: "OV-5", cat: "Desktop & Small Space", path: "/product/luxepanel", images: [LuxePanel1, LuxePanel2] },
  { id: 9, name: "CeilAir Pro Aroma", model: "M45", cat: "Wall-Mounted & Ceiling", path: "/product/ceilair", images: [CeilAirPro1, CeilAirPro2] },
  { id: 10, name: "AeroBlack Med", model: "Q500", cat: "Commercial Aroma Diffusers", path: "/product/aeroblack-med", images: [Titan1, Titan2] },
  { id: 11, name: "MistBox X", model: "OV-10", cat: "Commercial Aroma Diffusers", path: "/product/mistbox", images: [AeroBlackPro1, AeroBlackPro2] },
  { id: 12, name: "AirPulse 150 HVAC", model: "VS-160", cat: "Large Area & HVAC", path: "/product/airpulse", images: [AirPulse1501, AirPulse1502] },
  { id: 13, name: "AeroPillar Floor", model: "F-Air", cat: "Floor-Standing Aroma Diffusers", path: "/product/aeropillar", images: [AeroPillar1, AeroPillar2] },
  { id: 14, name: "AirPole Pro Floor", model: "G-Air", cat: "Floor-Standing Aroma Diffusers", path: "/product/airpole", images: [AirPolePro1, AirPolePro2] },
  { id: 15, name: "NanoPillar Diffuser", model: "A500", cat: "Floor-Standing Aroma Diffusers", path: "/product/nanopillar", images: [NanoPillar1, NanoPillar2] },
  { id: 16, name: "NaturalFlow Passive", model: "M10", cat: "Passive / No-Power", path: "/product/naturalflow", images: [NaturalFragrance1, NaturalFragrance2] },
  { id: 17, name: "AeroCube Pro", model: "M41-B", cat: "Desktop & Small Space", path: "/product/aerocube", images: [AeroCube2, AeroCube1] },
  { id: 18, name: "Titan Industrial", model: "A700", cat: "Floor-Standing Aroma Diffusers", path: "/product/titan", images: [Titan2, Titan1] },
  { id: 19, name: "CeilAir Elite", model: "M41", cat: "Wall-Mounted & Ceiling", path: "/product/ceilair-elite", images: [CeilAirPro2, CeilAirPro1] },
  { id: 20, name: "MistBox XL", model: "OV-20", cat: "Commercial Aroma Diffusers", path: "/product/mistbox-xl", images: [AeroBlackPro2, AirPulse1501] },
];

const categories = ["All Systems", "Car Aroma Diffusers", "Desktop & Small Space", "Wall-Mounted & Ceiling", "Commercial Aroma Diffusers", "Large Area & HVAC", "Floor-Standing Aroma Diffusers", "Passive / No-Power"];

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
      {/* --- SIDEBAR --- */}
      <aside className="hidden lg:flex w-72 flex-col border-r border-slate-200/50 sticky top-16 h-[calc(100vh-64px)] bg-white z-20">
        <div className="p-8 pb-4">
          <h1 className="text-xl font-black tracking-tighter uppercase italic">COOLMAX<span className="text-blue-600">.</span></h1>
          <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-[0.2em]">Atmospheric Tech 2026</p>
        </div>
        <div className="px-6 py-4">
          <div className="relative">
            <MagnifyingGlassIcon className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="text" placeholder="Search catalogue..." className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-[11px] focus:outline-none ring-blue-500/20" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
        <nav className="flex-1 px-4 py-2 space-y-0.5 overflow-y-auto no-scrollbar">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCat(cat)} className={`w-full flex items-center gap-3 py-3 px-4 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all relative ${activeCat === cat ? "text-blue-600 bg-blue-50/50" : "text-slate-500 hover:text-slate-900"}`}>
              <span className="truncate">{cat}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-5 lg:p-10 overflow-y-auto">
        <header className="mb-10">
          <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-2 tracking-tight">All <span className="italic text-slate-300 font-light">Products.</span></h2>
          <div className="flex items-center gap-4">
             <span className="h-px w-10 bg-blue-600"></span>
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">{activeCat} — {filtered.length} Units</p>
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <motion.div layout className="group relative flex flex-col">
      <div className="relative aspect-square bg-white rounded-[1.2rem] lg:rounded-[2rem] border border-slate-100 flex items-center justify-center p-4 lg:p-8 transition-all duration-700 group-hover:shadow-xl group-hover:-translate-y-1 overflow-hidden">
        
        {/* IMAGE SWAP LOGIC */}
        <div className="relative w-full h-full">
            {/* Primary Image */}
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full h-full object-contain transition-opacity duration-700 opacity-100 group-hover:opacity-0"
            />
            {/* Hover Image */}
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
          className="absolute bottom-3 right-3 lg:bottom-5 lg:right-5 w-8 h-8 lg:w-10 lg:h-10 bg-slate-900 text-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-blue-600 z-10 shadow-lg"
        >
          <ArrowUpRightIcon className="w-4 h-4 lg:w-5 lg:h-5" />
        </Link>

        <div className="absolute top-3 right-3 lg:top-5 lg:right-5">
          <span className="text-[6px] lg:text-[8px] font-black text-slate-300 uppercase tracking-widest group-hover:text-slate-900 transition-colors">
            {product.model}
          </span>
        </div>
      </div>

      <div className="mt-3 px-1 lg:px-2">
        <h3 className="text-[10px] lg:text-sm font-serif text-slate-900 mb-0.5 group-hover:text-blue-600 transition-colors leading-tight line-clamp-1">{product.name}</h3>
        <p className="text-[7px] lg:text-[9px] font-black uppercase tracking-widest text-slate-400">{product.cat}</p>
      </div>
    </motion.div>
  );
}