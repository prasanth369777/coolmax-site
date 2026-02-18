import React, { useState, useEffect } from "react";
import { ArrowRightIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

// --- ASSET IMPORTS ---
import Banner1 from "../asset/hero/herobanner1.webp"; 
import Banner2 from "../asset/hero/herobanner2.webp"; 
// --- NEW MOBILE ASSETS ---
import MobileBanner1 from "../asset/hero/mobileherobanner1.webp"; 
import MobileBanner2 from "../asset/hero/mobileherobanner2.webp"; 

// Swapped order: Banner 2 (Diffuser) now comes before Banner 1 (Aroma Oil)
const desktopImages = [Banner2, Banner1];
const mobileImages = [MobileBanner2, MobileBanner1];

export default function EcommerceHero() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen resize to swap image sets
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const currentImages = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % currentImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentImages]);

  return (
    <section className="relative w-full min-h-[700px] lg:h-[800px] flex flex-col lg:flex-row lg:items-center overflow-hidden font-sans bg-white lg:bg-transparent text-left">
      
      {/* ================= BACKGROUND / TOP CAROUSEL ================= */}
      {/* Added pt-12 (padding-top) on mobile to push image down for a clearer view */}
      <div className="relative lg:absolute lg:inset-0 h-[450px] md:h-[550px] lg:h-full w-full z-0 overflow-hidden pt-12 lg:pt-0">
        {currentImages.map((img, i) => (
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
            {/* Overlay for contrast */}
            <div className="absolute inset-0 bg-slate-800/20" />
          </div>
        ))}

        {/* Progress Indicators - Moved inside the image block for mobile visibility */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30 lg:hidden text-center">
          {currentImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                index === i ? "w-8 bg-blue-500" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= CONTENT BLOCK ================= */}
      <div className="relative z-20 flex-1 bg-white lg:bg-transparent lg:mt-0 rounded-t-[50px] lg:rounded-none shadow-[0_-20px_40px_rgba(0,0,0,0.05)] lg:shadow-none mt-0 text-left">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full py-16 lg:py-0 text-left">
          
          <div className="max-w-3xl flex flex-col text-center lg:text-left items-center lg:items-start">
            <div className="inline-flex items-center justify-center lg:justify-start gap-3 mb-6 text-left">
              <div className="hidden lg:block h-px w-8 bg-blue-400"></div>
              <span className="text-[10px] lg:text-sm font-bold text-blue-600 lg:text-blue-700 uppercase tracking-[0.2em]">  
                Top Rated in UAE
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 lg:text-white leading-[1.1] mb-6 tracking-tighter text-center lg:text-left">
              Professional <br className="hidden lg:block" />
              Scent Marketing & <br className="hidden lg:block" />
              <span className="text-blue-600 lg:text-blue-800 italic font-serif font-light">Aroma Solutions.</span>
            </h1>

            <p className="text-base lg:text-xl text-slate-600 lg:text-slate-200 font-medium mb-10 lg:mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed text-center lg:text-left">
              Create Fresh, Memorable, and Welcoming Spaces with 
              <span className="text-blue-600 lg:text-white font-bold ml-1">Cool Max</span>. 
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 w-full sm:w-auto">
              <a href="/contact" className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-[10px] lg:text-xs uppercase tracking-widest transition-all hover:bg-slate-900 lg:hover:bg-white lg:hover:text-blue-600 flex items-center justify-center gap-3 shadow-lg">
                Talk to an Expert <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a href="/products" className="w-full sm:w-auto px-10 py-5 bg-slate-100 lg:bg-white/10 border border-slate-200 lg:border-white/20 text-slate-900 lg:text-white rounded-2xl font-bold text-[10px] lg:text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-3 shadow-sm">
                <ShoppingBagIcon className="w-4 h-4" /> Shop Range
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop-only Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex gap-3 z-30 text-center">
        {currentImages.map((_, i) => (
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