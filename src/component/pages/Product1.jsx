import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CubeIcon, 
  SpeakerWaveIcon, 
  ArrowDownTrayIcon, 
  ChevronRightIcon,
  TagIcon,
  SparklesIcon,
  SwatchIcon
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

/* ================= DATA ================= */
const products = [
  {
    id: 1,
    name: "Car Aroma Diffuser",
    model: "M10",
    category: "Automotive",
    description: "Compact and portable scent solutions designed specifically for vehicles, ensuring a fresh commute.",
    coverage: "15 m³",
    noise: "< 30dB",
    subProducts: [{ name: "Black", image: M10Black }, { name: "White", image: M10White }],
  },
  {
    id: 2,
    name: "Desktop Diffuser",
    model: "A500",
    category: "Small Space",
    description: "Perfect for desks, washrooms, and intimate spaces. Quiet operation with elegant design.",
    coverage: "100 m³",
    noise: "< 35dB",
    subProducts: [{ name: "Black", image: A500Black }, { name: "White", image: A500White }],
  },
  {
    id: 3,
    name: "Wall-Mounted Diffuser",
    model: "M45",
    category: "Commercial",
    description: "Space-saving designs that mount easily to walls or ceilings for seamless fragrance distribution.",
    coverage: "300 m³",
    noise: "< 40dB",
    subProducts: [{ name: "Black", image: M45Black }, { name: "White", image: M45White }],
  },
  {
    id: 4,
    name: "Pro Commercial Diffuser",
    model: "D100",
    category: "Commercial",
    description: "Powerful standalone units built for retail stores, hotel lobbies, and high-traffic commercial zones.",
    coverage: "500 m³",
    noise: "< 42dB",
    subProducts: [{ name: "Black", image: D100Black }, { name: "White", image: D100White }],
  },
  {
    id: 5,
    name: "HVAC Scent System",
    model: "M41-B",
    category: "Industrial",
    description: "Connects directly to HVAC systems for invisible, uniform scent coverage across expansive facilities.",
    coverage: "1500 m³",
    noise: "Silent",
    subProducts: [{ name: "Black", image: M41BBlack }, { name: "White", image: M41BWhite }],
  },
  {
    id: 6,
    name: "Floor-Standing Tower",
    model: "VS160",
    category: "Luxury",
    description: "Statement pieces designed to stand on the floor, delivering powerful scent diffusion with style.",
    coverage: "800 m³",
    noise: "< 45dB",
    subProducts: [{ name: "Black", image: VS160Black }, { name: "White", image: VS160White }],
  },
  {
    id: 7,
    name: "Passive Diffuser",
    model: "Q500",
    category: "Eco-Friendly",
    description: "Eco-friendly, silent diffusion solutions that require no electricity. Ideal for quiet zones.",
    coverage: "50 m³",
    noise: "0dB",
    subProducts: [{ name: "Black", image: Q500Black }, { name: "White", image: Q500White }],
  },
  {
    id: 8,
    name: "Industrial Power",
    model: "DSQ1010-1",
    category: "Industrial",
    description: "Maximum output diffusers for industrial spaces, event halls, and very large volumes.",
    coverage: "3000 m³",
    noise: "< 50dB",
    subProducts: [{ name: "Black", image: DSQBlack }, { name: "White", image: DSQWhite }],
  },
  {
    id: 9,
    name: "Smart Tech Series",
    model: "H11-A-2026",
    category: "Smart Home",
    description: "Next-generation smart diffusers with programmable controls and high efficiency.",
    coverage: "600 m³",
    noise: "< 38dB",
    subProducts: [{ name: "Black", image: H11Black }, { name: "White", image: H11White }],
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
    <section className="relative py-24 bg-[#F8FAFC] font-sans overflow-hidden min-h-screen">
      
      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-indigo-100/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.3]" style={{ backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* --- Header --- */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-3">
               <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
               <span className="text-indigo-600 text-xs font-bold tracking-widest uppercase">Our Catalogue</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Precision Engineering</h3>
          </div>
          <p className="text-slate-500 max-w-md text-sm mt-4 md:mt-0 leading-relaxed text-right font-medium">
            Select a model below to view technical specifications and finish options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ================= SIDEBAR: PRODUCT LIST (Glassmorphism) ================= */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24 z-20">
            <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl overflow-hidden shadow-xl shadow-indigo-100/50">
              <div className="p-5 bg-white/50 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <TagIcon className="w-4 h-4" /> Model Index
                </span>
                <span className="text-xs font-bold text-indigo-500">{products.length} Items</span>
              </div>
              <div className="max-h-[600px] overflow-y-auto custom-scrollbar p-3 space-y-1">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductChange(product)}
                    className={`relative w-full group flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                      activeProduct.id === product.id
                        ? "text-indigo-600 shadow-sm"
                        : "text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    {/* Active Background Animation */}
                    {activeProduct.id === product.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-indigo-50 border border-indigo-100 rounded-xl"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    <div className="relative z-10 flex flex-col items-start">
                      <span className={`text-sm font-bold transition-colors ${activeProduct.id === product.id ? "text-indigo-900" : "text-slate-700"}`}>
                        {product.model}
                      </span>
                      <span className="text-[10px] uppercase tracking-wide opacity-70">
                        {product.category}
                      </span>
                    </div>
                    {activeProduct.id === product.id && (
                      <ChevronRightIcon className="relative z-10 w-4 h-4 text-indigo-500" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* ================= MAIN DISPLAY ================= */}
          <div className="lg:col-span-9 grid grid-cols-1 xl:grid-cols-2 gap-12">
            
            {/* --- Left: Image Stage (Floating) --- */}
            <div className="relative group">
               {/* Floating Stage Container */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5 }}
                 className="relative h-[550px] bg-white rounded-[2.5rem] border border-slate-100 flex items-center justify-center overflow-hidden p-8 shadow-2xl shadow-indigo-100/50"
               >
                 
                 {/* Center Glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-indigo-50 to-purple-50 rounded-full blur-[60px]" />

                 <AnimatePresence mode="wait">
                   <motion.img
                     key={activeSub.image}
                     src={activeSub.image}
                     alt={activeSub.name}
                     initial={{ opacity: 0, y: 20, scale: 0.9 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, y: -20, scale: 1.1 }}
                     transition={{ duration: 0.6, ease: "anticipate" }}
                     className="relative z-10 w-full h-[80%] object-contain drop-shadow-2xl"
                   />
                 </AnimatePresence>
                 
                 {/* Floating Badge */}
                 <div className="absolute top-8 left-8 px-4 py-2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl text-xs font-bold text-slate-800 shadow-sm flex items-center gap-2">
                   <SparklesIcon className="w-4 h-4 text-indigo-500" />
                   {activeProduct.category} Series
                 </div>
               </motion.div>

               {/* Finish Selector (Floating below) */}
               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur border border-slate-200 shadow-lg rounded-full px-6 py-3 flex items-center gap-4 z-20">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest pr-4 border-r border-slate-200">
                    <SwatchIcon className="w-4 h-4" />
                    Finish
                  </div>
                  <div className="flex gap-3">
                    {activeProduct.subProducts.map((sub) => (
                      <button
                        key={sub.name}
                        onClick={() => setActiveSub(sub)}
                        className={`group relative w-8 h-8 rounded-full border transition-all duration-300 ${
                          activeSub.name === sub.name ? "border-indigo-500 scale-110 shadow-md" : "border-slate-200 hover:scale-105"
                        }`}
                        title={sub.name}
                      >
                         <span className={`absolute inset-1 rounded-full ${sub.name === 'Black' ? 'bg-slate-900' : 'bg-slate-100 border border-slate-300'}`} />
                      </button>
                    ))}
                  </div>
                  <span className="text-sm text-slate-900 font-bold min-w-[50px] text-center">{activeSub.name}</span>
               </div>
            </div>

            {/* --- Right: Details & Specs --- */}
            <div className="flex flex-col justify-center">
              
              <div className="mb-10">
                <div className="flex items-baseline gap-4 mb-2">
                    <h1 className="text-6xl font-black text-slate-900 tracking-tighter">{activeProduct.model}</h1>
                    <span className="px-3 py-1 rounded bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider">In Stock</span>
                </div>
                <h2 className="text-2xl font-bold mb-6 text-indigo-600">
                  {activeProduct.name}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg font-normal">
                  {activeProduct.description}
                </p>
              </div>

              {/* Bento Grid Specs */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                 {/* Card 1 */}
                 <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2 text-indigo-500">
                       <CubeIcon className="w-5 h-5" />
                       <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Coverage</span>
                    </div>
                    <span className="text-2xl font-bold text-slate-900">{activeProduct.coverage}</span>
                 </div>
                 
                 {/* Card 2 */}
                 <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2 text-purple-500">
                       <SpeakerWaveIcon className="w-5 h-5" />
                       <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Noise Level</span>
                    </div>
                    <span className="text-2xl font-bold text-slate-900">{activeProduct.noise}</span>
                 </div>

                 {/* Card 3 */}
                 <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Installation</span>
                    <span className="text-base font-bold text-slate-700">Plug & Play / HVAC</span>
                 </div>

                 {/* Card 4 */}
                 <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Warranty</span>
                    <span className="text-base font-bold text-slate-700">1 Year Limited</span>
                 </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 px-8 py-4 bg-slate-900 hover:bg-indigo-600 text-white font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-slate-200">
                   Request Quote
                   <ChevronRightIcon className="w-3 h-3" />
                </button>
                <button className="flex-1 px-8 py-4 bg-white border border-slate-200 hover:border-indigo-500 hover:text-indigo-600 text-slate-700 font-bold uppercase tracking-widest text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm">
                   <ArrowDownTrayIcon className="w-4 h-4" />
                   Spec Sheet
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
      
      {/* Scrollbar Styling */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}</style>
    </section>
  );
}