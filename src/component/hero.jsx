import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

// --- ASSET IMPORTS (20 PRODUCTS) ---
import P1 from "../asset/productimg/CMwebpimg/Natural Fragrance Diffusion/2.webp"; 
import P2 from "../asset/productimg/CMwebpimg/NovaCar Diffuser/2.webp"; 
import P3 from "../asset/productimg/CMwebpimg/Titan Diffuser/1.webp"; 
import P4 from "../asset/productimg/CMwebpimg/VentoCar/2.webp"; 
import P5 from "../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/1.webp"; 
import P6 from "../asset/productimg/CMwebpimg/coolmax DriveMist Car Aroma Diffuser/1.webp"; 
import P7 from "../asset/productimg/CMwebpimg/AeroBlack Med diffuser/1.webp"; 
import P8 from "../asset/productimg/CMwebpimg/AromaDesk LuxePanel/4.webp"; 
import P9 from "../asset/productimg/CMwebpimg/DriveScent/1.webp"; 
import P10 from "../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/2.webp"; 
// Assuming the remaining 10 follow your standard pathing or imports
import P11 from "../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/2.webp";
import P12 from "../asset/productimg/CMwebpimg/AeroCube Diffuser/3.webp";
import P13 from "../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/2.webp";
import P14 from "../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/4.webp";
import P15 from "../asset/productimg/CMwebpimg/AirPulse 150/4.webp";
import P16 from "../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/3.webp";
import P17 from "../asset/productimg/CMwebpimg/DeskScent/3.webp";
import P18 from "../asset/productimg/CMwebpimg/LuxePanel Diffuser/4.webp";
import P19 from "../asset/productimg/CMwebpimg/Mistbox X commercial Diffuser/2.webp";
import P20 from "../asset/productimg/CMwebpimg/NanoPillar Diffuser/3.webp";

const productImages = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20];

export default function EcommerceHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full lg:h-[720px] flex items-center pt-12 pb-8 lg:py-0 bg-[#FDFDFD] overflow-hidden font-sans">
      
      {/* Background Text Accent */}
      <div className="absolute top-1/2 lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none w-full text-center z-0">
        <h2 className="text-[25vw] lg:text-[18vw] font-black text-slate-100/60 tracking-tighter uppercase leading-none">
          PREMIUM
        </h2>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
        
        {/* --- CONTENT BLOCK: TOP ON MOBILE (order-1) --- */}
        <div className="lg:col-span-6 flex flex-col text-center lg:text-left order-1 lg:order-1 lg:pr-8">
          <div className="inline-flex items-center justify-center lg:justify-start gap-3 mb-4 lg:mb-6 mt-16 lg:mt-0">
            <div className="hidden lg:block h-px w-8 bg-blue-600"></div>
            <span className="text-[10px] lg:text-sm font-bold text-slate-800 uppercase tracking-[0.2em]">
              Top Rated in UAE
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-4 lg:mb-6 tracking-tighter ">
            Professional <br className="hidden lg:block" />
            Scent Marketing & <br className="hidden lg:block" />
            <span className="text-blue-600 italic font-serif font-light">Aroma Solutions.</span>
          </h1>

          <p className="text-base lg:text-lg text-slate-500 font-medium mb-8 lg:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Create Fresh, Memorable, and Welcoming Spaces with 
            <span className="text-slate-900 font-bold ml-1">Cool Max</span>. 
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-10">
            <a href="/contact" className="w-full sm:w-auto px-7 py-4 bg-slate-900 text-white rounded-xl font-bold text-[10px] lg:text-xs uppercase tracking-widest transition-all hover:bg-blue-600 flex items-center justify-center gap-3 shadow-lg">
              Talk to an Expert <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a href="/products" className="w-full sm:w-auto px-7 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold text-[10px] lg:text-xs uppercase tracking-widest hover:border-slate-900 transition-all flex items-center justify-center gap-3 shadow-sm">
              <ShoppingBagIcon className="w-4 h-4" /> Shop Range
            </a>
          </div>

          {/* TRUST BADGES */}
          <div className="flex justify-center lg:justify-start gap-8 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3 text-left">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                 <ShieldCheckIcon className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-slate-600 max-w-[1600px]">
                UAE's Trusted Leader in Atmospheric Technology
              </span>
            </div>
          </div>
        </div>

        {/* --- PRODUCT STAGE: BOTTOM ON MOBILE (order-2) --- */}
        <div className="lg:col-span-6 relative order-2 lg:order-2 w-full flex flex-col items-center">
          <div className="relative aspect-square w-full max-w-[280px] md:max-w-[400px] lg:max-w-[500px] lg:ml-auto bg-white rounded-[2.5rem] lg:rounded-[4rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-50 flex items-center justify-center p-6 lg:p-14 overflow-hidden">
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06)_0%,transparent_75%)]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                <img
                  src={productImages[currentIndex]}
                  alt={`Cool Max Diffuser Model Series ${currentIndex + 1}`}
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
                />
                
                <div className="absolute bottom-[-5px] left-0 right-0 text-center">
                  <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-100 shadow-sm">
                     <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                     <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
                       max Series {currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1}
                     </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* THUMBNAILS - Showing all 20 units */}
          <div className="mt-6 lg:mt-8 flex justify-center lg:justify-end gap-2 overflow-x-auto no-scrollbar py-2 w-full scroll-smooth px-4">
            {productImages.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentIndex(idx)}
                className={`flex-shrink-0 w-10 lg:w-14 h-14 lg:h-18 rounded-lg lg:rounded-xl bg-white p-1 border-2 transition-all duration-300 ${
                  currentIndex === idx 
                  ? 'border-blue-600 shadow-md scale-105 -translate-y-1' 
                  : 'border-transparent opacity-40 hover:opacity-100'
                }`}
              >
                <img 
                  src={img} 
                  alt={`Variant ${idx + 1}`} 
                  className="w-full h-full object-contain mix-blend-multiply" 
                />
              </button>
            ))}
          </div>
        </div>

      </div>

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