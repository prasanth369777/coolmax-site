import React, { useState, useEffect } from "react";
import { ArrowRightIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

// --- ASSET IMPORTS ---
import Banner1 from "../asset/hero/herobanner1.webp"; 
import Banner2 from "../asset/hero/herobanner2 (1).webp"; 

const carouselImages = [Banner1, Banner2];

export default function EcommerceHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[600px] lg:h-[800px] flex items-center overflow-hidden font-sans">
      
      {/* ================= BACKGROUND CAROUSEL (Static Transitions) ================= */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === i ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt="Background"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text contrast - Blur Removed */}
            <div className="absolute inset-0 bg-slate-900/20" />
          </div>
        ))}
      </div>

      <div className="relative z-20 max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
        
        {/* --- CONTENT BLOCK --- */}
        <div className="max-w-3xl flex flex-col text-center lg:text-left">
          <div className="inline-flex items-center justify-center lg:justify-start gap-3 mb-4 lg:mb-6 text-left">
            <div className="hidden lg:block h-px w-8 bg-blue-400"></div>
            <span className="text-[10px] lg:text-sm font-bold text-blue-100 uppercase tracking-[0.2em] text-left">  
              Top Rated in UAE
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-4 lg:mb-6 tracking-tighter text-center lg:text-left">
            Professional <br className="hidden lg:block" />
            Scent Marketing & <br className="hidden lg:block" />
            <span className="text-blue-400 italic font-serif font-light text-center lg:text-left">Aroma Solutions.</span>
          </h1>

          <p className="text-base lg:text-xl text-slate-200 font-medium mb-8 lg:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed text-center lg:text-left">
            Create Fresh, Memorable, and Welcoming Spaces with 
            <span className="text-white font-bold ml-1">Cool Max</span>. 
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-center">
            <a href="/contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-[10px] lg:text-xs uppercase tracking-widest transition-all hover:bg-white hover:text-blue-600 flex items-center justify-center gap-3 shadow-lg">
              Talk to an Expert <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a href="/products" className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-[10px] lg:text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-3 shadow-sm">
              <ShoppingBagIcon className="w-4 h-4" /> Shop Range
            </a>
          </div>
        </div>

      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              index === i ? "w-8 bg-blue-500" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
}