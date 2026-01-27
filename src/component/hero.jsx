import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon, PlayCircleIcon, CheckBadgeIcon, SparklesIcon } from "@heroicons/react/24/solid";

// Ensure you have these assets
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

// ================= 10 IMAGES CONFIGURATION =================
const productImages = [
  Hero1, Hero2, Hero3, Hero4, Hero5, 
  Hero6, Hero7, Hero8, Hero9, Hero1, Hero10
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate logic (Slide every 4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Calculate the index of the second image
  const nextIndex = (currentIndex + 1) % productImages.length;

  return (
    <section className="relative w-full min-h-screen bg-[#F8FAFC] font-sans selection:bg-indigo-500 selection:text-white pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden flex items-center mt-16">
      
      {/* ================= COOL ANIMATED BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Moving Gradient Blob 1 */}
        <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-indigo-200/40 to-purple-200/40 rounded-full blur-[100px] animate-pulse" />
        {/* Moving Gradient Blob 2 */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-200/40 to-cyan-200/40 rounded-full blur-[100px]" />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* ================= LEFT COLUMN: CONTENT ================= */}
        <div className="flex flex-col justify-center text-left order-1 lg:order-1">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Premium Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-lg shadow-indigo-100/50 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
              <span className="text-slate-600 text-xs font-bold tracking-widest uppercase flex items-center gap-1">
                #1 in UAE <SparklesIcon className="w-3 h-3 text-yellow-500" />
              </span>
            </div>

            {/* Main Headline with Gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]">
              Professional Scent <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient bg-[length:200%_auto]">
                Marketing Solutions
              </span>
            </h1>

            {/* Sub Headline */}
            <h2 className="text-lg md:text-xl text-slate-600 font-medium mb-10 max-w-2xl leading-relaxed">
              Create Fresh, Memorable, and Welcoming Spaces with Cool Max. Elevate your brand ambiance.
            </h2>
          </motion.div>

          {/* --- GLASSMORPHISM CONTENT BLOCKS --- */}
          <div className="flex flex-col gap-5 mb-12">
            
            {/* Block 01 - Glass Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2 }}
              className="group p-5 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl hover:bg-white/70 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <h3 className="text-slate-900 font-bold text-lg mb-2 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold shadow-sm">01</div>
                Overview
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed pl-11">
                At Cool Max Scent, we specialize in delivering professional scent diffuser machines and complete home fragrance systems for homes, hotels, offices, retail spaces, and large commercial environments across the UAE. Based in Dubai, we help businesses and homeowners transform ordinary spaces into pleasant, welcoming environments using advanced aroma scent diffuser technology.
              </p>
            </motion.div>

            {/* Block 02 - Glass Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.3 }}
              className="group p-5 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl hover:bg-white/70 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <h3 className="text-slate-900 font-bold text-lg mb-2 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold shadow-sm">02</div>
                Solutions
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed pl-11">
                From compact home scent diffusers to powerful commercial scent machines and HVAC scent diffuser systems, our solutions are designed to deliver consistent fragrance coverage with minimal maintenance. Whether you are looking for a scent machine for home, a hotel scent machine, or a scent machine for business, Cool Max provides reliable, scalable, and easy-to-manage scenting solutions tailored to your space.
              </p>
            </motion.div>

            {/* Block 03 - Glass Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.4 }}
              className="group p-5 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl hover:bg-white/70 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300"
            >
              <h3 className="text-slate-900 font-bold text-lg mb-2 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center text-sm font-bold shadow-sm">03</div>
                Experience
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed pl-11">
                A pleasant-smelling environment is no longer a luxury—it is part of the experience. With Cool Max, fragrance becomes a powerful tool to improve comfort, enhance brand perception, and create lasting impressions.
              </p>
            </motion.div>

          </div>

          {/* --- CTA SECTION --- */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-start gap-4"
          >
            <p className="text-slate-500 font-medium italic">
              Looking for a trusted scent diffuser company in the UAE?
            </p>
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a href="#contact" className="relative overflow-hidden w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all group flex items-center justify-center gap-2">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">Talk to Cool Max Today <ArrowRightIcon className="w-4 h-4" /></span>
              </a>
              <a href="#products" className="w-full sm:w-auto px-8 py-4 bg-white/50 border border-slate-200 text-slate-800 font-bold rounded-2xl hover:bg-white hover:border-indigo-200 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                <PlayCircleIcon className="w-5 h-5 text-indigo-500" />
                View Products
              </a>
            </div>
          </motion.div>
        </div>

        {/* ================= RIGHT COLUMN: 3D CAROUSEL STAGE ================= */}
        <div className="relative flex order-2 lg:order-2 items-center justify-center h-[400px] lg:h-[700px] w-full mt-12 lg:mt-0 perspective-1000">
          
          {/* The Glowing Stage */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] bg-gradient-to-b from-white to-indigo-50 rounded-full border border-white/80 shadow-[0_0_80px_rgba(99,102,241,0.15)] backdrop-blur-sm" />
          
          {/* Rotating Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-dashed border-indigo-200/50 rounded-full animate-[spin_20s_linear_infinite]" />

          {/* IMAGE CONTAINER */}
          <div className="relative z-10 w-full flex items-center justify-center gap-4 lg:gap-8 px-0 lg:px-4">
             <AnimatePresence mode="popLayout">
               
               {/* PRIMARY IMAGE (Left/Front) */}
               <motion.div
                 key={`left-${currentIndex}`}
                 initial={{ opacity: 0, x: 50, scale: 0.8, rotateY: -10 }}
                 animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                 exit={{ opacity: 0, x: -50, scale: 0.8, rotateY: 10 }}
                 transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                 className="w-[55%] lg:w-[50%] relative group z-20"
               >
                 <div className="relative">
                    {/* Glow behind product */}
                    <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <img
                      src={productImages[currentIndex]}
                      alt={`Product ${currentIndex}`}
                      className="relative w-full h-[220px] lg:h-[450px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                    />
                    
                    {/* Floating Label */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur border border-slate-100 px-4 py-2 rounded-xl shadow-lg whitespace-nowrap"
                    >
                      <span className="text-[10px] lg:text-xs font-black text-slate-800 tracking-widest uppercase">MODEL {currentIndex + 1}</span>
                    </motion.div>
                 </div>
               </motion.div>

               {/* SECONDARY IMAGE (Right/Back) */}
               <motion.div
                 key={`right-${nextIndex}`}
                 initial={{ opacity: 0, x: 50, scale: 0.8, filter: "blur(4px)" }}
                 animate={{ opacity: 0.6, x: 0, scale: 0.85, filter: "blur(0px)" }}
                 exit={{ opacity: 0, x: -50, scale: 0.7, filter: "blur(4px)" }}
                 transition={{ duration: 0.6, delay: 0.1 }}
                 className="w-[45%] lg:w-[45%] relative z-10 grayscale-[50%]"
               >
                 <img
                    src={productImages[nextIndex]}
                    alt={`Product ${nextIndex}`}
                    className="w-full h-[180px] lg:h-[350px] object-contain drop-shadow-xl"
                  />
               </motion.div>

             </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-0 lg:bottom-10 flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/50 shadow-sm">
            {productImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === currentIndex 
                    ? "w-6 h-1.5 lg:w-8 lg:h-2 bg-gradient-to-r from-indigo-500 to-purple-500" 
                    : "w-1.5 h-1.5 lg:w-2 lg:h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}