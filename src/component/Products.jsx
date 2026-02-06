import React, { useState, useMemo} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  ArrowUpRightIcon,
  AdjustmentsHorizontalIcon,
  SparklesIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline";
import { FaWhatsapp } from "react-icons/fa";

/* ================= IMAGE ASSETS ================= */
import DriveMist1 from "../asset/productimg/CMwebpimg/coolmax DriveMist Car Aroma Diffuser/1.webp";
import VentoCar1 from "../asset/productimg/CMwebpimg/VentoCar/1.webp";
import DeskScent1 from "../asset/productimg/CMwebpimg/DeskScent/1.webp";
import NovaCar1 from "../asset/productimg/CMwebpimg/NovaCar Diffuser/1.webp";
import OpalMist1 from "../asset/productimg/CMwebpimg/AeroCube Diffuser/1.webp";
import AromaDesk1 from "../asset/productimg/CMwebpimg/DeskScent/2.webp";
import ZenBoxMini1 from "../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/1.webp";
import AeroCube1 from "../asset/productimg/CMwebpimg/AeroCube Diffuser/1.webp";
import LuxePanel1 from "../asset/productimg/CMwebpimg/LuxePanel Diffuser/1.webp";
import CeilAirPro1 from "../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/1.webp";
import AeroBlackMed1 from "../asset/productimg/CMwebpimg/Titan Diffuser/2.webp";
import MistBoxX1 from "../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/2.webp";
import AeroBlackPro1 from "../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/1.webp";
import AirPulse1501 from "../asset/productimg/CMwebpimg/AirPulse 150/1.webp";
import AeroPillar1 from "../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/1.webp";
import AirPolePro1 from "../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/1.webp";
import Titan1 from "../asset/productimg/CMwebpimg/Titan Diffuser/1.webp";
import NaturalFragrance1 from "../asset/productimg/CMwebpimg/Natural Fragrance Diffusion/1.webp";
import NanoPillar1 from "../asset/productimg/CMwebpimg/NanoPillar Diffuser/1.webp";
import AeroMaxPro1 from "../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/3.webp";

const productList = [
  { id: 1, name: "DriveScent", model: "H11-A-2026", cat: "Car Aroma Diffusers", images: [DriveMist1], path: "/product/drivemist" },
  { id: 2, name: "VentoCar", model: "H11-B-2026", cat: "Car Aroma Diffusers", images: [VentoCar1], path: "/product/ventocar" },
  { id: 3, name: "DeskScent", model: "H19", cat: "Car Aroma Diffusers", images: [DeskScent1], path: "/product/desk-scent" },
  { id: 4, name: "NovaCar Diffuser", model: "DA1004-2026", cat: "Car Aroma Diffusers", images: [NovaCar1], path: "/product/novacar" },
  { id: 5, name: "OpalMist Clock Diffuser", model: "U2", cat: "Desktop & Small Space", images: [OpalMist1], path: "/product/opalmist" },
  { id: 6, name: "AromaDesk", model: "H10-A-2026", cat: "Desktop & Small Space", images: [AromaDesk1], path: "/product/aromadesk" },
  { id: 7, name: "ZenBox Mini Diffuser", model: "D50mini", cat: "Desktop & Small Space", images: [ZenBoxMini1], path: "/product/zenbox-mini" },
  { id: 8, name: "AeroCube Diffuser", model: "M41-B", cat: "Desktop & Small Space", images: [AeroCube1], path: "/product/aerocube" },
  { id: 9, name: "LuxePanel Diffuser", model: "OV-5 / OV-5 Pro", cat: "Desktop & Small Space", images: [LuxePanel1], path: "/product/luxepanel" },
  { id: 10, name: "CeilAir Pro Diffuser", model: "M45", cat: "Wall-Mounted & Ceiling", images: [CeilAirPro1], path: "/product/ceilair" },
  { id: 11, name: "AeroBlack Med Diffuser", model: "Q500", cat: "Commercial Aroma Diffusers", images: [AeroBlackMed1], path: "/product/aeroblack-med" },
  { id: 12, name: "MistBox X Diffuser", model: "OV-10", cat: "Commercial Aroma Diffusers", images: [MistBoxX1], path: "/product/mistbox" },
  { id: 13, name: "AeroBlack Pro Diffuser", model: "Q3000Pro", cat: "Large Area & HVAC", images: [AeroBlackPro1], path: "/product/aeroblack-pro" },
  { id: 14, name: "AirPulse 150", model: "VS-160", cat: "Large Area & HVAC", images: [AirPulse1501], path: "/product/airpulse" },
  { id: 15, name: "AeroPillar Diffuser", model: "F-Air", cat: "Floor-Standing Aroma Diffusers", images: [AeroPillar1], path: "/product/aeropillar" },
  { id: 16, name: "AirPole Pro Diffuser", model: "G-Air", cat: "Floor-Standing Aroma Diffusers", images: [AirPolePro1], path: "/product/airpole" },
  { id: 17, name: "Titan Diffuser", model: "A700", cat: "Floor-Standing Aroma Diffusers", images: [Titan1], path: "/product/titan" },
  { id: 18, name: "Natural Fragrance Diffusion", model: "M10", cat: "Passive / No-Power", images: [NaturalFragrance1], path: "/product/natural-flow" },
  { id: 19, name: "NanoPillar Diffuser", model: "A500", cat: "Floor-Standing Aroma Diffusers", images: [NanoPillar1], path: "/product/nanopillar" },
  { id: 20, name: "AeroMax Pro", model: "A315L", cat: "Wall-Mounted & Ceiling", images: [AeroMaxPro1], path: "/product/aeromax-pro" },
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
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 font-sans">
      
      {/* ================= SECTION 1: MINIMAL HERO ================= */}
      <section className="relative pt-32 pb-20 px-6 lg:px-16 overflow-hidden bg-white">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 items-end gap-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 mb-6">
              <SparklesIcon className="w-4 h-4 text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">The New Standards</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-serif leading-[0.9] tracking-tighter mb-8">
              All <span className="italic text-slate-300 font-light">Products.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-md leading-relaxed font-light">
              Atmospheric technology for distinguished spaces. Engineered in 2026 for performance and olfactory precision.
            </p>
          </motion.div>
          
          <div className="flex flex-col lg:items-end gap-6">
            <div className="relative w-full max-w-sm">
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search models..." 
                className="w-full pl-12 pr-6 py-4 bg-[#F5F5F5] border-none rounded-2xl text-sm focus:ring-2 ring-blue-600/20 transition-all outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: INFINITE CAROUSEL ================= */}
      <section className="py-10 bg-white border-y border-slate-100 overflow-hidden relative">
        <div className="flex whitespace-nowrap overflow-hidden group">
          <motion.div 
            className="flex gap-8 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...productList, ...productList].map((product, idx) => (
              <div key={idx} className="w-48 h-64 bg-[#F8F8F8] rounded-3xl p-6 flex flex-col items-center justify-center shrink-0 border border-slate-50 group-hover:grayscale transition-all duration-700 hover:!grayscale-0 hover:border-blue-200">
                <img src={product.images[0]} alt="" className="w-full h-32 object-contain mix-blend-multiply mb-4" />
                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{product.model}</span>
                <span className="text-xs font-bold text-slate-900 mt-1">{product.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 3: CATEGORY EXPLORER ================= */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row gap-16">
        
        <aside className="lg:w-64 shrink-0">
          <div className="sticky top-32">
            <div className="flex items-center gap-3 mb-10 text-slate-400 uppercase tracking-[0.3em] text-[10px] font-black">
              <AdjustmentsHorizontalIcon className="w-4 h-4" />
              <span>Filter by System</span>
            </div>
            <nav className="flex flex-wrap lg:flex-col gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`text-left px-5 py-3 rounded-2xl text-[11px] font-black uppercase tracking-tight transition-all ${
                    activeCat === cat ? "bg-slate-900 text-white shadow-xl" : "text-slate-400 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-1">
          <div className="flex items-center gap-4 mb-12">
            <span className="h-px w-10 bg-blue-600"></span>
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">
              {activeCat} — {filtered.length} Units
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10">
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* ================= SECTION 4: END ACTION BAR ================= */}
      <section className="mt-20 border-t border-slate-200 bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-6 tracking-tight">Experience Cool Max in <span className="italic text-slate-400 font-light">Your Space.</span></h2>
          <p className="text-slate-500 mb-12 max-w-xl mx-auto font-light">Get expert advice on choosing the perfect system for your home or business environment.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/971522286401" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-64 flex items-center justify-center gap-3 py-5 bg-[#25D366] text-white rounded-full font-black uppercase tracking-widest text-xs hover:scale-[1.03] transition-all shadow-xl shadow-green-100"
            >
              <FaWhatsapp size={20} />
              WhatsApp Inquiry
            </a>
            <Link 
              to="/contact"
              className="w-full sm:w-64 flex items-center justify-center gap-3 py-5 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-xs hover:scale-[1.03] transition-all shadow-xl shadow-slate-200"
            >
              <EnvelopeIcon className="w-5 h-5" />
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>

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
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group flex flex-col relative"
    >
      <div className="relative aspect-[4/5] bg-white rounded-[2rem] md:rounded-[3rem] border border-slate-100 flex items-center justify-center p-6 md:p-12 transition-all duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] group-hover:-translate-y-2 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply transition-all duration-700 group-hover:scale-110"
        />

        <Link 
          to={product.path} 
          className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-10 h-10 md:w-14 md:h-14 bg-slate-900 text-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-blue-600 z-10 shadow-2xl"
        >
          <ArrowUpRightIcon className="w-5 h-5 md:w-6 md:h-6" />
        </Link>

        <div className="absolute top-6 left-6 md:top-10 md:left-10">
          <span className="text-[7px] md:text-[9px] font-black text-slate-300 uppercase tracking-[0.4em]">
            {product.model}
          </span>
        </div>
      </div>

      <div className="mt-6 px-2">
        <h3 className="text-sm md:text-2xl font-serif text-slate-900 mb-1 group-hover:text-blue-600 transition-colors leading-tight">
          {product.name}
        </h3>
        <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          {product.cat}
        </p>
      </div>
    </motion.div>
  );
}