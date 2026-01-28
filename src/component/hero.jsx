import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon, StarIcon } from "@heroicons/react/24/solid";
import { AdjustmentsHorizontalIcon, GlobeAltIcon, SparklesIcon, CubeTransparentIcon } from "@heroicons/react/24/outline";

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

const productImages = [
  Hero1, Hero2, Hero3, Hero4, Hero5, 
  Hero6, Hero7, Hero8, Hero9, Hero1, Hero10
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextIndex = (currentIndex + 1) % productImages.length;

  return (
    <section className="relative w-full min-h-screen bg-[#F8FAFC] font-sans selection:bg-indigo-500 selection:text-white pt-32 pb-12 lg:pt-40 lg:pb-24 overflow-hidden flex items-center">
      
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-100/60 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50/80 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* ================= LEFT COLUMN: CONTENT ================= */}
        <div className="flex flex-col justify-center text-left order-1 lg:order-1">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-indigo-100 shadow-sm mb-8 w-fit">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-50 text-indigo-600">
                <StarIcon className="w-3 h-3" />
              </span>
              <span className="text-slate-600 text-xs font-bold tracking-[0.15em] uppercase">
                #1 in UAE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              Professional Scent Marketing & <br className="hidden xl:block" />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                Aroma Diffusion Solutions in UAE
              </span>
            </h1>

            {/* Sub Headline */}
            <h2 className="text-lg text-slate-500 font-medium mb-10 max-w-xl leading-relaxed border-l-4 border-indigo-500/30 pl-6">
              Create Fresh, Memorable, and Welcoming Spaces with Cool Max
            </h2>
          </motion.div>

          {/* --- CONTENT CARDS (Paragraphs mapped here) --- */}
          <div className="flex flex-col gap-4 mb-12">
            
            {/* Paragraph 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
              className="group p-6 bg-white border border-slate-100 rounded-2xl hover:border-indigo-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <GlobeAltIcon className="w-5 h-5" />
                </div>
                <h3 className="text-slate-900 font-bold text-base md:text-lg">Our Specialization</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed pl-[3.5rem]">
                At Cool Max Scent, we specialize in delivering professional scent diffuser machines and complete home fragrance systems for homes, hotels, offices, retail spaces, and large commercial environments across the UAE. Based in Dubai, we help businesses and homeowners transform ordinary spaces into pleasant, welcoming environments using advanced aroma scent diffuser technology.
              </p>
            </motion.div>

            {/* Paragraph 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.3 }}
              className="group p-6 bg-white border border-slate-100 rounded-2xl hover:border-indigo-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <AdjustmentsHorizontalIcon className="w-5 h-5" />
                </div>
                <h3 className="text-slate-900 font-bold text-base md:text-lg">Our Solutions</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed pl-[3.5rem]">
                From compact home scent diffusers to powerful commercial scent machines and HVAC scent diffuser systems, our solutions are designed to deliver consistent fragrance coverage with minimal maintenance. Whether you are looking for a scent machine for home, a hotel scent machine, or a scent machine for business, Cool Max provides reliable, scalable, and easy-to-manage scenting solutions tailored to your space.
              </p>
            </motion.div>

            {/* Paragraph 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.4 }}
              className="group p-6 bg-white border border-slate-100 rounded-2xl hover:border-indigo-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <SparklesIcon className="w-5 h-5" />
                </div>
                <h3 className="text-slate-900 font-bold text-base md:text-lg">The Experience</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed pl-[3.5rem]">
                A pleasant-smelling environment is no longer a luxury—it is part of the experience. With Cool Max, fragrance becomes a powerful tool to improve comfort, enhance brand perception, and create lasting impressions.
              </p>
            </motion.div>

          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <p className="text-slate-600 font-medium italic">
              Looking for a trusted scent diffuser company in the UAE?
            </p>
            <a href="#contact" className="relative overflow-hidden px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all group flex items-center justify-center gap-2 whitespace-nowrap">
              <span className="relative z-10 flex items-center gap-2">Talk to Cool Max today <ArrowRightIcon className="w-4 h-4" /></span>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>

        </div>

        {/* ================= RIGHT COLUMN: 3D CAROUSEL STAGE ================= */}
        <div className="relative flex order-2 lg:order-2 items-center justify-center h-[500px] lg:h-[800px] w-full mt-0 perspective-1000">
          
          {/* Architectural Stage Base */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[650px] lg:h-[650px] bg-white rounded-full shadow-[0_0_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100" />
          
          {/* Animated Orbit Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-dashed border-indigo-100 rounded-full animate-[spin_30s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] border border-slate-100 rounded-full" />

          {/* IMAGE CONTAINER */}
          <div className="relative z-10 w-full flex items-center justify-center gap-4 lg:gap-8 px-0 lg:px-4">
              <AnimatePresence mode="popLayout">
                
                {/* PRIMARY IMAGE (Left/Front) */}
                <motion.div
                  key={`left-${currentIndex}`}
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-[55%] lg:w-[50%] relative group z-20"
                >
                  <div className="relative">
                    {/* Glow behind product */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <img
                      src={productImages[currentIndex]}
                      alt={`Product ${currentIndex}`}
                      className="relative w-full h-[280px] lg:h-[500px] object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Minimalist Floating Label */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm border border-slate-200 px-6 py-3 rounded-full shadow-xl whitespace-nowrap"
                    >
                      <span className="text-xs font-bold text-slate-800 tracking-widest uppercase flex items-center gap-2">
                        <CubeTransparentIcon className="w-4 h-4 text-indigo-500" />
                        Model {currentIndex + 1}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* SECONDARY IMAGE (Right/Back) */}
                <motion.div
                  key={`right-${nextIndex}`}
                  initial={{ opacity: 0, x: 50, scale: 0.8, filter: "blur(4px)" }}
                  animate={{ opacity: 0.4, x: 0, scale: 0.85, filter: "blur(2px)" }}
                  exit={{ opacity: 0, x: -50, scale: 0.7, filter: "blur(4px)" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="w-[45%] lg:w-[45%] relative z-10 grayscale"
                >
                  <img
                    src={productImages[nextIndex]}
                    alt={`Product ${nextIndex}`}
                    className="w-full h-[200px] lg:h-[400px] object-contain"
                  />
                </motion.div>

              </AnimatePresence>
          </div>

          {/* Minimalist Pagination Dots */}
          <div className="absolute bottom-4 lg:bottom-12 flex items-center gap-3">
            {productImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === currentIndex 
                    ? "w-8 h-1 bg-indigo-600" 
                    : "w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}