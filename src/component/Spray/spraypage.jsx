import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-router-dom"; 
import { 
  MagnifyingGlassIcon, 
  SparklesIcon, 
  ChatBubbleLeftRightIcon,
  BeakerIcon,
  CloudIcon,
  ArrowUpRightIcon,
  PlusIcon
} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import auraImg from "../../asset/Aerosol Spray/aura.webp";
import classicImg from "../../asset/Aerosol Spray/classic.webp";
import eventImg from "../../asset/Aerosol Spray/event.webp";
import fantasticImg from "../../asset/Aerosol Spray/fantastic.webp";
import floraImg from "../../asset/Aerosol Spray/flora.webp";
import floralImg from "../../asset/Aerosol Spray/floral.webp";
import forYouImg from "../../asset/Aerosol Spray/foryou.webp";
import freshBakhoorImg from "../../asset/Aerosol Spray/fresh bakhoor.webp";
import freshJasImg from "../../asset/Aerosol Spray/fresh jas.webp";
import freshLavenderImg from "../../asset/Aerosol Spray/fresh lavender.webp";
import parisImg from "../../asset/Aerosol Spray/paris.webp";
import passionImg from "../../asset/Aerosol Spray/passion.webp";
import profumoImg from "../../asset/Aerosol Spray/profumo.webp";
import roseImg from "../../asset/Aerosol Spray/rose.webp";
import senseImg from "../../asset/Aerosol Spray/sense.webp";
import strawberryImg from "../../asset/Aerosol Spray/strawberry.webp";
import traditionImg from "../../asset/Aerosol Spray/tradition.webp";
import voyageImg from "../../asset/Aerosol Spray/Voyage.webp";
import vanillaImg from "../../asset/Aerosol Spray/Varilla Ice-Cream.webp"; 

const sprayProducts = [
  { id: 1, name: "Flora", cat: "Floral", code: "AS-01", img: floraImg, path: "/spray/flora-aerosol-spray/" },
  { id: 2, name: "For You", cat: "Perfume", code: "AS-02", img: forYouImg, path: "/spray/for-you-aerosol-spray/" },
  { id: 3, name: "Sense", cat: "Fresh", code: "AS-03", img: senseImg, path: "/spray/sense-aerosol-spray/" },
  { id: 4, name: "Event", cat: "Premium", code: "AS-04", img: eventImg, path: "/spray/event-aerosol-spray/" },
  { id: 5, name: "Vanilla Ice-Cream", cat: "Sweet", code: "AS-05", img: vanillaImg, path: "/spray/varilla-ice-cream-aerosol-spray/" },
  { id: 6, name: "Passion", cat: "Perfume", code: "AS-06", img: passionImg, path: "/spray/passion-aerosol-spray/" },
  { id: 7, name: "Paris", cat: "Perfume", code: "AS-07", img: parisImg, path: "/spray/paris-aerosol-spray/" },
  { id: 8, name: "Fresh Bakhoor", cat: "Oriental", code: "AS-08", img: freshBakhoorImg, path: "/spray/fresh-bakhoor-aerosol-spray/" },
  { id: 9, name: "Fresh Jasmine", cat: "Floral", code: "AS-09", img: freshJasImg, path: "/spray/fresh-jasmine-aerosol-spray/" },
  { id: 10, name: "Classic", cat: "Premium", code: "AS-10", img: classicImg, path: "/spray/classic-aerosol-spray/" },
  { id: 11, name: "Strawberry", cat: "Fruity", code: "AS-11", img: strawberryImg, path: "/spray/strawberry-aerosol-spray/" },
  { id: 12, name: "Rose", cat: "Floral", code: "AS-12", img: roseImg, path: "/spray/rose-aerosol-spray/" },
  { id: 13, name: "Tradition", cat: "Oriental", code: "AS-13", img: traditionImg, path: "/spray/tradition-aerosol-spray/" },
  { id: 14, name: "Fresh Lavender", cat: "Floral", code: "AS-14", img: freshLavenderImg, path: "/spray/fresh-lavender-aerosol-spray/" },
  { id: 15, name: "Aura", cat: "Fresh", code: "AS-15", img: auraImg, path: "/spray/aura-aerosol-spray/" },
  { id: 16, name: "Profumo", cat: "Perfume", code: "AS-16", img: profumoImg, path: "/spray/profumo-aerosol-spray/" },
  { id: 17, name: "Fantastic", cat: "Premium", code: "AS-17", img: fantasticImg, path: "/spray/fantastic-aerosol-spray/" },
  { id: 18, name: "Floral", cat: "Floral", code: "AS-18", img: floralImg, path: "/spray/floral-aerosol-spray/" },
  { id: 19, name: "Voyage", cat: "Premium", code: "AS-19", img: voyageImg, path: "/spray/voyage-aerosol-spray/" },
];

export default function SprayCollectionPage() {
  const [search, setSearch] = useState("");
  const whatsappNumber = "971509282702";

  const filtered = useMemo(() => {
    return sprayProducts.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
   
        <title>Aerosol Spray Collection | Cool Max Scent Solutions</title>
        <meta name="description" content="Explore our wide range of premium aerosol sprays in UAE. From Fresh Bakhoor to Floral Jasmine, find the perfect scent for your space." />
        {/* CORRECT CANONICAL LINK RE-IMPLEMENTED HERE */}
        <link rel="canonical" href="https://www.coolmaxscent.com/spray/" />
    

      {/* ================= HERO SECTION (SMALLER TYPOGRAPHY) ================= */}
      <section className="relative pt-24 pb-12 px-6 lg:px-16 overflow-hidden bg-white">
        <div className="max-w-[1600px] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 mb-6">
              <CloudIcon className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-blue-700">Atmospheric Mist Series</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight mb-6 text-slate-950">
              Aerosol <span className="italic font-light text-slate-300">Sprays</span>
            </h1>
            <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed max-w-lg text-left">
              Professional-grade aroma mist for instant atmosphere transformation. Designed for high-performance diffusion in hotels, offices, and retail spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SEARCH (COMPACT) ================= */}
      <section className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 px-6 lg:px-16">
        <div className="max-w-[1600px] mx-auto flex justify-end items-center">
          <div className="relative w-full md:w-64 group">
            <MagnifyingGlassIcon className="w-3.5 h-3.5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search scents..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-xs focus:ring-1 ring-blue-500 transition-all outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* ================= PRODUCT GRID (SMALLER CARDS) ================= */}
      <main className="px-6 lg:px-16 py-12 min-h-[600px]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.03 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl p-3 border border-slate-100 transition-all duration-300 hover:shadow-xl text-left">
                    {/* Visual Container */}
                    <Link to={item.path} className="block aspect-[4/5] rounded-2xl bg-slate-50 mb-4 overflow-hidden flex items-center justify-center relative group-hover:bg-blue-50/30 transition-colors">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="relative z-10 w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.classList.remove('hidden'); }}
                      />
                      <BeakerIcon className="w-12 h-12 text-slate-100 absolute hidden" />
                      
                      <div className="absolute top-3 right-3">
                         <span className="text-[7px] font-black text-slate-400 bg-white/80 px-2 py-0.5 rounded-md border border-slate-100 uppercase">300ml</span>
                      </div>
                    </Link>
                    
                    {/* Information Area */}
                    <div className="px-2">
                      <h3 className="text-sm font-serif text-slate-900 truncate">
                        {item.name}
                      </h3>
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-3 pt-3 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-[8px] font-bold text-slate-300 uppercase">{item.code}</span>
                      <div className="flex gap-1.5">
                         <Link 
                          to={item.path} 
                          className="w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors"
                         >
                            <PlusIcon className="w-3.5 h-3.5" />
                         </Link>
                         <a 
                          href={`https://wa.me/${whatsappNumber}?text=Inquiry for ${item.name} Aerosol Spray (${item.code})`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
                         >
                          <ChatBubbleLeftRightIcon className="w-3.5 h-3.5" />
                         </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="py-32 text-center text-left">
              <SparklesIcon className="w-10 h-10 text-slate-200 mx-auto mb-4 text-left" />
              <p className="text-slate-400 font-light text-sm italic">No matching fragrances found.</p>
            </div>
          )}
        </div>
      </main>

      {/* ================= CTA SECTION (STREAMLINED) ================= */}
      <section className="relative py-20 px-6">
        <div className="max-w-[1200px] mx-auto bg-slate-950 rounded-[3rem] p-10 md:p-16 text-left text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
          
          <div className="relative z-10 text-left">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 tracking-tight text-left">
              Elevate Your <br />
              <span className="italic text-blue-400 font-light">Space Instantly.</span>
            </h2>
            <p className="text-sm md:text-base text-slate-400 mb-10 font-light leading-relaxed max-w-xl text-left">
              Our aerosol sprays are IFRA-compliant and formulated for professional performance. Available for bulk supply across the UAE and Qatar.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-blue-600 text-white rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all duration-500 shadow-lg text-left"
              >
                <ChatBubbleLeftRightIcon className="w-4 h-4" /> Request Quote
              </a>
              <Link 
                to="/contact" 
                className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors uppercase text-[9px] font-bold tracking-widest text-left"
              >
                Specifications <ArrowUpRightIcon className="w-3 h-3" />
              </Link>
            </div>
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