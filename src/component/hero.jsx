import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

// Assets
import Hero1 from "../../src/asset/hero/A70D_converted.webp"; 
import Hero2 from "../../src/asset/hero/D-50mini_converted.webp"; 
import Hero3 from "../../src/asset/hero/DA-1004_converted.webp"; 
import Hero4 from "../../src/asset/hero/H-10-A_converted.webp"; 
import Hero5 from "../../src/asset/hero/H-11 -B_converted.webp"; 
import Hero6 from "../../src/asset/hero/H-19 caar_converted.webp"; 
import Hero7 from "../../src/asset/hero/M--10_converted.webp"; 
import Hero8 from "../../src/asset/hero/Q-500_converted.webp"; 
import Hero9 from "../../src/asset/hero/a500_converted.webp"; 
import Hero10 from "../../src/asset/hero/m41-b_converted.webp"; 

const productImages = [Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, Hero7, Hero8, Hero9, Hero10];

export default function EcommerceHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full lg:h-[750px] flex items-center py-12 lg:py-0 bg-[#FDFDFD] overflow-hidden font-sans">
      
      {/* Background Text Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none w-full text-center mt-16">
        <h2 className="text-[18vw] font-black text-slate-100/80 tracking-tighter uppercase leading-none">
          PREMIUM
        </h2>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center w-full mt-16">
        
        {/* --- LEFT SIDE: CONTENT --- */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-blue-600"></div>
            <span className="text-sm font-bold text-slate-800 uppercase tracking-[0.2em]">
              Top Rated in UAE
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-7xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
            Professional <br />
            Scent Marketing & <br />
            <span className="text-blue-600 italic font-serif font-light">Aroma Solutions.</span>
          </h1>

          <p className="text-xl text-slate-500 font-medium mb-12 max-w-lg leading-relaxed">
            Create Fresh, Memorable, and Welcoming Spaces with 
            <span className="text-slate-900 font-bold ml-1">Cool Max</span>. 
          </p>

          {/* ACTION ROW */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a href="/contact" className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest transition-all hover:bg-blue-600 flex items-center gap-4 shadow-xl hover:-translate-y-1">
              Talk to an Expert <ArrowRightIcon className="w-5 h-5" />
            </a>
            <a href="/products"className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold text-xs uppercase tracking-widest hover:border-slate-900 transition-all flex items-center gap-4 shadow-sm">
              <ShoppingBagIcon className="w-5 h-5" /> Shop Range
            </a>
          </div>

          {/* TRUST BADGES */}
          <div className="flex gap-12 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                 <ShieldCheckIcon className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 max-w-[200px]">
                UAE's Trusted Leader in Atmospheric Technology
              </span>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: PRODUCT STAGE --- */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-square w-full max-w-[600px] ml-auto bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-white flex items-center justify-center p-16 overflow-hidden">
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.05)_0%,transparent_70%)]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                <img
                  src={productImages[currentIndex]}
                  alt={`Cool Max Diffuser Model Series 0${currentIndex + 1}`}
                  className="w-full h-full object-contain filter drop-shadow-[0_30px_50px_rgba(0,0,0,0.08)]"
                />
                
                <div className="absolute bottom-[-10px] left-0 right-0 text-center">
                  <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full border border-slate-100 shadow-sm">
                     <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                     <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
                       max Series 0{currentIndex + 1}
                     </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* THUMBNAIL TRACK (Scrollbar Removed) */}
          <div className="mt-12 flex justify-end gap-3 overflow-x-auto no-scrollbar py-2 scroll-smooth">
            {productImages.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentIndex(idx)}
                className={`flex-shrink-0 w-16 h-20 rounded-2xl bg-white p-2 border-2 transition-all duration-300 ${
                  currentIndex === idx 
                  ? 'border-blue-600 shadow-xl scale-110 -translate-y-1' 
                  : 'border-transparent opacity-40 hover:opacity-100'
                }`}
              >
                <img 
                  src={img} 
                  alt={`Select Variant ${idx + 1}`} 
                  className="w-full h-full object-contain mix-blend-multiply" 
                />
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* CSS to hide scrollbars while maintaining functionality */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}