import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CubeIcon, 
  SpeakerWaveIcon, 
  ArrowDownTrayIcon, 
  TagIcon,
  SparklesIcon,
  SwatchIcon,
 
} from "@heroicons/react/24/outline";

/* ================= IMAGE IMPORTS ================= */
import M10Black from "../../asset/productimg/Model M10/M10 - 1.jpeg";
import M10White from "../../asset/productimg/Model M10/M10 - 2.jpeg";
import Q500Black from "../../asset/productimg/Model Q500/Model Q500 - 1.jpeg";
import Q500White from "../../asset/productimg/Model Q500/Model Q500 - 2.jpeg";
import M45Black from "../../asset/productimg/Model M45/Model M45 1.jpeg";
import M45White from "../../asset/productimg/Model M45/Model M45 2.jpeg";
import M41BBlack from "../../asset/productimg/Model M41-B/Model M41-B - 1.jpeg";
import M41BWhite from "../../asset/productimg/Model M41-B/Model M41-B - 2.jpeg";
import D100Black from "../../asset/productimg/Model D100/Model D100 - 1.jpeg";
import D100White from "../../asset/productimg/Model D100/Model D100 - 2.jpeg";
import H11Black from "../../asset/productimg/Model H11-A-2026/Model H11-A-2026 - 1.jpeg";
import H11White from "../../asset/productimg/Model H11-A-2026/Model H11-A-2026 - 10.jpeg";
import A500Black from "../../asset/productimg/Model D100/Model D100 - 11.jpeg";
import A500White from "../../asset/productimg/Model D100/Model D100 - 13.jpeg";
import VS160Black from "../../asset/productimg/Model VS160/Model VS160 - 2.jpeg";
import VS160White from "../../asset/productimg/Model VS160/Model VS160 - 1.jpeg";
import DSQBlack from "../../asset/productimg/Model DSQ1010-1/Model DSQ1010-1 (1).jpeg";
import DSQWhite from "../../asset/productimg/Model DSQ1010-1/Model DSQ1010-1 (2).jpeg";

/* ================= FULL 20-ITEM DATASET ================= */
const products = [
  // --- CAR SERIES (Rows 1-4) ---
  {
    id: 1,
    name: "DriveScent",
    model: "H11-A-2026",
    category: "Car Aroma Diffusers",
    description: "Coolmax DriveMist Car Aroma Diffuser. Compact and portable scent solution designed specifically for vehicles.",
    coverage: "15 m³",
    noise: "< 30dB",
    subProducts: [{ name: "Black", image: H11Black }, { name: "White", image: H11White }],
  },
  {
    id: 2,
    name: "VentoCar",
    model: "H11-B-2026",
    category: "Car Aroma Diffusers",
    description: "Coolmax DriveMist Pro Car Diffuser. Enhanced airflow design for rapid fragrance dispersion in vehicles.",
    coverage: "20 m³",
    noise: "< 30dB",
    subProducts: [{ name: "Black", image: H11Black }, { name: "White", image: H11White }],
  },
  {
    id: 3,
    name: "DeskScent",
    model: "H19",
    category: "Car Aroma Diffusers",
    description: "Coolmax AutoLux Aroma Diffuser. Dual-purpose design suitable for car cup holders or small office desks.",
    coverage: "15 m³",
    noise: "< 28dB",
    subProducts: [{ name: "Black", image: H11Black }, { name: "White", image: H11White }],
  },
  {
    id: 4,
    name: "NovaCar Diffuser",
    model: "DA1004-2026",
    category: "Car Aroma Diffusers",
    description: "Coolmax AutoElite Metal Car Diffuser. Premium metallic finish with durable build for luxury interiors.",
    coverage: "25 m³",
    noise: "< 32dB",
    subProducts: [{ name: "Black", image: H11Black }, { name: "White", image: H11White }],
  },

  // --- DESKTOP & SMALL SPACE (Rows 5-9) ---
  {
    id: 5,
    name: "OpalMist Clock",
    model: "U2",
    category: "Desktop & Small Space",
    description: "Coolmax OpalMist Smart Clock Diffuser. Innovative 2-in-1 device combining timekeeping with aromatherapy.",
    coverage: "50 m³",
    noise: "< 30dB",
    subProducts: [{ name: "Black", image: M41BBlack }, { name: "White", image: M41BWhite }],
  },
  {
    id: 6,
    name: "AromaDesk",
    model: "H10-A-2026",
    category: "Desktop & Small Space",
    description: "Coolmax DeskMist Aroma Diffuser. Minimalist design perfect for workspaces and reception counters.",
    coverage: "80 m³",
    noise: "< 30dB",
    subProducts: [{ name: "Black", image: M41BBlack }, { name: "White", image: M41BWhite }],
  },
  {
    id: 7,
    name: "ZenBox Mini",
    model: "D50mini",
    category: "Desktop & Small Space",
    description: "Coolmax ZenBox Mini Diffuser. Ultra-compact powerhouse for personal fragrance zones.",
    coverage: "60 m³",
    noise: "< 28dB",
    subProducts: [{ name: "Black", image: M10Black }, { name: "White", image: M10White }],
  },
  {
    id: 8,
    name: "AeroCube Diffuser",
    model: "M41-B",
    category: "Desktop & Small Space",
    description: "Coolmax AeroCube Wall/Desktop Diffuser. Versatile mounting options for small to medium rooms.",
    coverage: "150 m³",
    noise: "< 30dB",
    subProducts: [{ name: "Black", image: M41BBlack }, { name: "White", image: M41BWhite }],
  },
  {
    id: 9,
    name: "LuxePanel Diffuser",
    model: "OV-5 Pro",
    category: "Desktop & Small Space",
    description: "Coolmax LuxePanel Smart Diffuser. Sleek panel design with intelligent scheduling features.",
    coverage: "200 m³",
    noise: "< 32dB",
    subProducts: [{ name: "Black", image: M45Black }, { name: "White", image: M45White }],
  },

  // --- WALL & CEILING (Row 10) ---
  {
    id: 10,
    name: "CeilAir Pro",
    model: "M45",
    category: "Wall-Mounted & Ceiling",
    description: "Coolmax CeilAir Pro Aroma Diffuser. Discreet ceiling or wall installation for unobstructed airflow.",
    coverage: "300 m³",
    noise: "< 40dB",
    subProducts: [{ name: "Black", image: M45Black }, { name: "White", image: M45White }],
  },

  // --- COMMERCIAL (Rows 11-12) ---
  {
    id: 11,
    name: "AeroBlack Med",
    model: "Q500",
    category: "Commercial Aroma Diffusers",
    description: "Coolmax AeroBlack Med Diffuser. Robust commercial solution for medium-sized retail and lobby environments.",
    coverage: "500 m³",
    noise: "< 35dB",
    subProducts: [{ name: "Black", image: Q500Black }, { name: "White", image: Q500White }],
  },
  {
    id: 12,
    name: "MistBox X",
    model: "OV-10",
    category: "Commercial Aroma Diffusers",
    description: "Coolmax MistBox X Commercial Diffuser. High-capacity tank system for extended operation in busy spaces.",
    coverage: "800 m³",
    noise: "< 42dB",
    subProducts: [{ name: "Black", image: D100Black }, { name: "White", image: D100White }],
  },

  // --- LARGE AREA & HVAC (Rows 13-14) ---
  {
    id: 13,
    name: "AeroBlack Pro",
    model: "Q3000Pro",
    category: "Large Area & HVAC",
    description: "Coolmax AeroBlack Pro HVAC Diffuser. Maximum output diffuser for large industrial spaces and event halls.",
    coverage: "3000 m³",
    noise: "< 50dB",
    subProducts: [{ name: "Black", image: DSQBlack }, { name: "White", image: DSQWhite }],
  },
  {
    id: 14,
    name: "AirPulse 150",
    model: "VS-160",
    category: "Large Area & HVAC",
    description: "Coolmax AirPulse 150 HVAC System. Connects directly to HVAC for invisible, uniform scent coverage.",
    coverage: "1500 m³",
    noise: "Silent",
    subProducts: [{ name: "Black", image: VS160Black }, { name: "White", image: VS160White }],
  },

  // --- FLOOR STANDING (Rows 15-17, 19-20) ---
  {
    id: 15,
    name: "AeroPillar",
    model: "F-Air",
    category: "Floor-Standing Diffusers",
    description: "Coolmax AeroPillar Floor Diffuser. Slim tower design that blends seamlessly into modern decor.",
    coverage: "600 m³",
    noise: "< 38dB",
    subProducts: [{ name: "Black", image: VS160Black }, { name: "White", image: VS160White }],
  },
  {
    id: 16,
    name: "AirPole Pro",
    model: "G-Air",
    category: "Floor-Standing Diffusers",
    description: "Coolmax AirPole Pro Floor Diffuser. Advanced floor unit with high velocity dispersion technology.",
    coverage: "900 m³",
    noise: "< 40dB",
    subProducts: [{ name: "Black", image: VS160Black }, { name: "White", image: VS160White }],
  },
  {
    id: 17,
    name: "Titan Diffuser",
    model: "A700",
    category: "Floor-Standing Diffusers",
    description: "Coolmax AuraCone Desktop/Floor Diffuser. Unique conical design for 360-degree fragrance projection.",
    coverage: "500 m³",
    noise: "< 36dB",
    subProducts: [{ name: "Black", image: A500Black }, { name: "White", image: A500White }],
  },
  {
    id: 18,
    name: "Natural Flow",
    model: "M10",
    category: "Passive / No-Power",
    description: "Coolmax NaturalFlow Passive Diffuser. Eco-friendly, silent diffusion solution requiring no electricity.",
    coverage: "50 m³",
    noise: "0dB",
    subProducts: [{ name: "Black", image: M10Black }, { name: "White", image: M10White }],
  },
  {
    id: 19,
    name: "NanoPillar",
    model: "A500",
    category: "Floor-Standing Diffusers",
    description: "Coolmax NanoPillar Floor Diffuser. Elegant aluminum body floor-standing design for luxury spaces.",
    coverage: "400 m³",
    noise: "< 35dB",
    subProducts: [{ name: "Black", image: A500Black }, { name: "White", image: A500White }],
  },
  {
    id: 20,
    name: "AeroMax Pro",
    model: "A315L",
    category: "Floor-Standing Diffusers",
    description: "Coolmax AeroMax Pro Tower. Heavy-duty floor unit designed for continuous operation in lobbies.",
    coverage: "1000 m³",
    noise: "< 45dB",
    subProducts: [{ name: "Black", image: A500Black }, { name: "White", image: A500White }],
  },
];

/* ================= COMPONENT ================= */
export default function ProductDetail() {
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [activeSub, setActiveSub] = useState(products[0].subProducts[0]);

  const handleProductChange = (product) => {
    setActiveProduct(product);
    setActiveSub(product.subProducts[0]);
  };

  return (
    <section className="relative py-24 bg-[#FDFCF8] font-sans overflow-hidden min-h-screen selection:bg-stone-200 selection:text-stone-900">
      
      {/* ================= ATMOSPHERE ================= */}
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-stone-100/60 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-stone-200/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* --- HEADER --- */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end pb-8 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-3 mb-4">
               <div className="h-px w-12 bg-stone-300"></div>
               <span className="text-xs font-bold text-stone-400 uppercase tracking-[0.2em]">Product Catalogue</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-serif text-stone-800 tracking-tight">Collection 2026</h3>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-stone-500 font-serif italic text-lg">
              "Engineering the invisible art of fragrance."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ================= SIDEBAR: LIST (Gallery Style) ================= */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24 z-20">
            <div className="bg-white/80 backdrop-blur-md border border-stone-200 rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-200/40">
              
              <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-white/50">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-widest flex items-center gap-2">
                  <TagIcon className="w-4 h-4" /> Index
                </span>
                <span className="px-2 py-1 rounded-full bg-stone-100 text-[10px] font-bold text-stone-600">{products.length} Models</span>
              </div>

              <div className="max-h-[650px] overflow-y-auto custom-scrollbar p-2 space-y-1 bg-stone-50/30">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductChange(product)}
                    className={`relative w-full group flex items-center justify-between p-4 rounded-xl transition-all duration-300 outline-none ${
                      activeProduct.id === product.id
                        ? "text-stone-900"
                        : "text-stone-400 hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    {/* Active Background Pill */}
                    {activeProduct.id === product.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white border border-stone-100 shadow-sm rounded-xl"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    <div className="relative z-10 flex flex-col items-start text-left pl-2">
                      <span className={`text-sm font-bold tracking-wide transition-colors ${activeProduct.id === product.id ? "text-stone-900" : "text-stone-500"}`}>
                        {product.name}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider font-medium opacity-60">
                        {product.model}
                      </span>
                    </div>
                    {activeProduct.id === product.id && (
                      <div className="relative z-10 w-1.5 h-1.5 rounded-full bg-stone-800 mr-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* ================= MAIN DISPLAY ================= */}
          <div className="lg:col-span-9 grid grid-cols-1 xl:grid-cols-2 gap-16">
            
            {/* --- Left: Floating Product Stage --- */}
            <div className="relative flex flex-col items-center">
               {/* Main Image Container */}
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 0.8 }}
                 className="relative w-full aspect-[4/5] bg-white rounded-[3rem] border border-stone-100 flex items-center justify-center overflow-hidden p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)]"
               >
                 
                 {/* Soft Radial Glow behind product */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-b from-stone-50 to-white rounded-full blur-3xl" />

                 <AnimatePresence mode="wait">
                   <motion.img
                     key={activeSub.image}
                     src={activeSub.image}
                     alt={activeSub.name}
                     initial={{ opacity: 0, scale: 0.95, y: 20 }}
                     animate={{ opacity: 1, scale: 1, y: 0 }}
                     exit={{ opacity: 0, scale: 1.05 }}
                     transition={{ duration: 0.5, ease: "easeOut" }}
                     className="relative z-10 w-full h-full object-contain drop-shadow-2xl mix-blend-multiply"
                   />
                 </AnimatePresence>
                 
                 {/* Top Right: Category Badge */}
                 <div className="absolute top-8 right-8">
                    <span className="px-4 py-2 bg-stone-100/80 backdrop-blur-sm rounded-full text-xs font-bold text-stone-500 uppercase tracking-widest border border-white">
                      {activeProduct.category.split(' ')[0]} Series
                    </span>
                 </div>
               </motion.div>

               {/* Finish Selector (Below Image) */}
               <div className="mt-8 flex items-center gap-6 bg-white px-8 py-4 rounded-full border border-stone-200 shadow-sm">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-widest flex items-center gap-2">
                    <SwatchIcon className="w-4 h-4" /> Finish
                  </span>
                  <div className="h-4 w-px bg-stone-200"></div>
                  <div className="flex gap-4">
                    {activeProduct.subProducts.map((sub) => (
                      <button
                        key={sub.name}
                        onClick={() => setActiveSub(sub)}
                        className={`group relative w-6 h-6 rounded-full transition-all duration-300 ${
                          activeSub.name === sub.name ? "scale-125 ring-2 ring-stone-200 ring-offset-2" : "hover:scale-110 opacity-70 hover:opacity-100"
                        }`}
                        title={sub.name}
                      >
                         <span className={`absolute inset-0 rounded-full shadow-inner ${sub.name === 'Black' ? 'bg-stone-900' : 'bg-stone-100 border border-stone-300'}`} />
                      </button>
                    ))}
                  </div>
               </div>
            </div>

            {/* --- Right: Typography & Specs --- */}
            <div className="flex flex-col justify-center pt-8 xl:pt-0">
              
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-8 bg-stone-800"></span>
                    <span className="text-sm font-bold text-stone-800 uppercase tracking-widest">{activeProduct.model}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6 leading-tight">
                  {activeProduct.name}
                </h2>
                <p className="text-stone-500 leading-loose text-lg font-light max-w-md">
                  {activeProduct.description}
                </p>
              </div>

              {/* Clean Minimal Specs */}
              <div className="space-y-6 mb-12">
                 
                 {/* Row 1 */}
                 <div className="flex items-center justify-between py-4 border-b border-stone-100">
                    <div className="flex items-center gap-3 text-stone-400">
                       <CubeIcon className="w-5 h-5" />
                       <span className="text-xs font-bold uppercase tracking-widest">Coverage Area</span>
                    </div>
                    <span className="text-xl font-serif text-stone-800">{activeProduct.coverage}</span>
                 </div>

                 {/* Row 2 */}
                 <div className="flex items-center justify-between py-4 border-b border-stone-100">
                    <div className="flex items-center gap-3 text-stone-400">
                       <SpeakerWaveIcon className="w-5 h-5" />
                       <span className="text-xs font-bold uppercase tracking-widest">Noise Level</span>
                    </div>
                    <span className="text-xl font-serif text-stone-800">{activeProduct.noise}</span>
                 </div>

                 {/* Row 3 */}
                 <div className="flex items-center justify-between py-4 border-b border-stone-100">
                    <div className="flex items-center gap-3 text-stone-400">
                       <SparklesIcon className="w-5 h-5" />
                       <span className="text-xs font-bold uppercase tracking-widest">Installation</span>
                    </div>
                    <span className="text-sm font-bold text-stone-600 uppercase tracking-wide">Plug & Play / HVAC</span>
                 </div>

              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                <button className="px-10 py-4 bg-stone-900 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-stone-700 transition-all duration-300 shadow-xl shadow-stone-200">
                   Request Pricing
                </button>
                <button className="px-10 py-4 bg-white border border-stone-200 text-stone-600 font-bold uppercase tracking-widest text-xs rounded-full hover:border-stone-400 transition-colors flex items-center gap-2">
                   <ArrowDownTrayIcon className="w-4 h-4" />
                   Download Spec
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
      
      {/* Refined Scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e7e5e4; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #d6d3d1; }
      `}</style>
    </section>
  );
}