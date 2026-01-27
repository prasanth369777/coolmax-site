import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../../asset/about/about1.png";

// --- Icons (Inline SVGs) ---
const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
);

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export default function AboutUs() {
  return (
    <section className="relative bg-white overflow-hidden font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* ================= BACKGROUND PATTERNS ================= */}
      {/* --- 1. Radial Dot Pattern (Your Requested Code) --- */}
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] z-0"></div>

      {/* --- 2. Ambient Gradient Vignette (Optional mask for depth) --- */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,white_100%)] pointer-events-none z-0 opacity-60"></div>

      {/* --- 3. Floating Color Orbs (Subtle animation behind dots) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[100px] animate-pulse-slow" />
         <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[80px]" />
      </div>


      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 py-24 lg:py-32 z-10">

        {/* ================= 1. HERO SECTION ================= */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center mb-32"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-100 shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">Est. 2020 • Dubai, UAE</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-900 font-medium tracking-tight mb-8 leading-[1.1]">
            Curating the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600">
              Perfect Atmosphere
            </span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
            Cool Max General Trading elevates environments through professional scent architecture. We blend technology with fragrance to create memorable spaces across the UAE.
          </motion.p>
        </motion.div>

        {/* ================= 2. SPLIT LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-40">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative group"
          >
            {/* Image Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-[2rem] transform translate-x-3 translate-y-3 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] shadow-2xl border border-white">
              <img 
                src={AboutImg} 
                alt="Scent Diffuser Aesthetic" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
            
            {/* Floating Glass Card */}
            <div className="absolute bottom-8 -right-4 md:-right-12 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/60 max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                 <div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
                 <span className="text-xs font-bold uppercase text-indigo-900 tracking-wider">Our Philosophy</span>
              </div>
              <p className="text-slate-900 font-serif text-lg italic leading-snug">"Scent is the most intense form of memory."</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            className="lg:col-span-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-4">Who We Are</motion.h2>
            <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 leading-tight">
              More than a supplier.<br/>We are your <span className="italic text-slate-500 relative inline-block">
                scent partners.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-indigo-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
              </span>
            </motion.h3>
            
            <motion.div variants={fadeInUp} className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                Cool Max is a solution-driven company. We don't just sell machines; we analyze your space, understand your airflow, and design a scenting strategy that works silently in the background.
              </p>
              <p>
                From intimate residential spaces to sprawling commercial complexes, our portfolio includes battery-operated units, sleek floor stands, and powerful HVAC-integrated systems.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10 pt-10 border-t border-slate-200 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-1">500+</h4>
                <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Projects Delivered</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-1">98%</h4>
                <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Client Retention</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ================= 3. SERVICES (Bento Grid) ================= */}
        <div className="mb-40 relative">
          <div className="max-w-3xl mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Our Expertise</h2>
            <p className="text-xl text-slate-500 font-light">End-to-end scenting ecosystems designed for simplicity and performance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Large Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-white/80 backdrop-blur-sm rounded-[2rem] p-10 border border-white shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-100 transition-colors duration-500"></div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10 flex items-center gap-3">
                Commercial Scent Strategy
                <ArrowRightIcon />
              </h3>
              <p className="text-slate-600 leading-relaxed relative z-10 mb-8 max-w-lg">
                We design comprehensive scent maps for hotels, malls, and offices, utilizing HVAC scent diffusers to ensure uniform coverage without overwhelming the senses.
              </p>
              <div className="flex gap-3 flex-wrap relative z-10">
                <span className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm">HVAC Integration</span>
                <span className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm">Large Area Diffusion</span>
              </div>
            </motion.div>

            {/* Tall Card (Dark) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:row-span-2 bg-slate-900 rounded-[2rem] p-10 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black opacity-50"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-indigo-600 rounded-2xl mb-8 flex items-center justify-center shadow-lg shadow-indigo-900/50">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Ongoing Maintenance</h3>
                <p className="text-slate-300 leading-relaxed font-light">
                  A scent machine is only as good as its service. We provide refill plans, cleaning, and technical calibration to ensure 24/7 uptime.
                </p>
              </div>
              <button className="mt-8 flex items-center gap-2 text-indigo-300 hover:text-white transition-colors group relative z-10 font-medium">
                Service Plans <ArrowRightIcon />
              </button>
            </motion.div>

            {/* Small Card 1 */}
            <motion.div whileHover={{ y: -5 }} className="bg-white/80 backdrop-blur rounded-[2rem] p-8 border border-white shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Residential Systems</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Discreet, quiet, and effective home diffusers that blend into your decor.</p>
            </motion.div>

            {/* Small Card 2 */}
            <motion.div whileHover={{ y: -5 }} className="bg-white/80 backdrop-blur rounded-[2rem] p-8 border border-white shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Scent Branding</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Create a signature scent identity that customers associate with your brand.</p>
            </motion.div>
          </div>
        </div>

        {/* ================= 4. VALUES ================= */}
        <div className="relative rounded-[3rem] p-8 md:p-20 text-center overflow-hidden mb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>

          <div className="relative z-10 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-16">Driven by Excellence</h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 text-left">
              <div className="group">
                 <div className="w-12 h-1 bg-indigo-500 mb-6 group-hover:w-20 transition-all duration-300"></div>
                 <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                 <p className="text-slate-300 leading-relaxed text-lg font-light">
                   To become the UAE's most trusted provider of scent architecture, ensuring that every commercial and residential space we touch breathes elegance and comfort.
                 </p>
              </div>
              <div className="group">
                 <div className="w-12 h-1 bg-purple-500 mb-6 group-hover:w-20 transition-all duration-300"></div>
                 <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                 <p className="text-slate-300 leading-relaxed text-lg font-light">
                   Delivering consistent, high-quality fragrance experiences through reliable technology and unwavering service support. No complications, just pure ambiance.
                 </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 5. CTA ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 mb-8">
            Ready to transform your space?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-indigo-600 transition-all shadow-xl hover:shadow-indigo-500/25 flex items-center justify-center gap-2">
              Get a Free Consultation <ArrowRightIcon />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all">
              View Product Catalog
            </button>
          </div>
        </motion.div>

      </div>
      
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}