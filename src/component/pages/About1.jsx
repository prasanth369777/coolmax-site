import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRightIcon, 
  SparklesIcon, 
  ChartBarIcon, 
  UserGroupIcon,
  GlobeAltIcon,
  LightBulbIcon,
  BuildingLibraryIcon
} from "@heroicons/react/24/outline";
import AboutImg from "../../asset/about/about1.png";

export default function AboutUs() {
  const whatsappNumber = "971522286401";

  return (
    <section className="relative min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-indigo-500 selection:text-white overflow-hidden">
      
      {/* ================= ARCHITECTURAL GRID BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-indigo-950/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 py-24 lg:py-32">

        {/* ================= 1. HERO ARCHITECTURE ================= */}
        <div className="flex flex-col items-center text-center mb-32 relative">
          <div className="h-24 w-px bg-gradient-to-b from-transparent via-indigo-500 to-transparent mb-8"></div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 border border-white/10 rounded-full bg-white/[0.02] backdrop-blur-md mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-indigo-200 uppercase">Est. 2020 • Dubai, UAE</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-white font-medium tracking-tighter leading-[0.9] mb-12"
          >
            Curating the <br/>
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-blue-300">
              Perfect Atmosphere
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-4xl mx-auto border-t border-white/10 pt-10"
          >
            Cool Max General Trading elevates environments through professional scent architecture. We blend technology with fragrance to create memorable spaces across the UAE.
          </motion.p>
        </div>

        {/* ================= 2. SPLIT STRUCTURE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-y border-white/10 mb-32">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative h-[600px] lg:h-auto border-r border-white/10 overflow-hidden group"
          >
            <img 
              src={AboutImg} 
              alt="Scent Diffuser Aesthetic" 
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-[#020617]/40 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
            <div className="absolute bottom-8 left-8 right-8">
               <div className="bg-black/50 backdrop-blur-xl p-6 border border-white/10">
                  <p className="text-white font-serif text-xl italic">"Scent is the most intense form of memory."</p>
               </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 p-10 md:p-20 flex flex-col justify-center bg-white/[0.01]">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-indigo-400 tracking-widest uppercase mb-6 flex items-center gap-4">
                <span className="w-12 h-px bg-indigo-500"></span> Who We Are
              </h2>
              <h3 className="text-4xl md:text-6xl font-serif text-white mb-10 leading-tight">
                More than a supplier.<br/>
                We are your <span className="text-indigo-400">scent partners.</span>
              </h3>
              
              <div className="space-y-8 text-lg text-slate-400 font-light leading-relaxed max-w-2xl">
                <p>
                  Cool Max is a solution-driven company. We don't just sell machines; we analyze your space, understand your airflow, and design a scenting strategy that works silently in the background.
                </p>
                <p>
                  From intimate residential spaces to sprawling commercial complexes, our portfolio includes battery-operated units, sleek floor stands, and powerful HVAC-integrated systems.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12 mt-16 pt-12 border-t border-white/10">
                <div>
                  <h4 className="text-5xl font-serif text-white mb-2">500+</h4>
                  <p className="text-sm text-indigo-300 uppercase tracking-widest flex items-center gap-2">
                    <GlobeAltIcon className="w-4 h-4" /> Projects Delivered
                  </p>
                </div>
                <div>
                  <h4 className="text-5xl font-serif text-white mb-2">98%</h4>
                  <p className="text-sm text-indigo-300 uppercase tracking-widest flex items-center gap-2">
                    <UserGroupIcon className="w-4 h-4" /> Client Retention
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= 3. EXPERTISE ================= */}
        <div className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
            <div>
              <h2 className="text-5xl font-serif text-white mb-4">Our Expertise</h2>
              <p className="text-slate-400 text-lg">End-to-end scenting ecosystems designed for performance.</p>
            </div>
            <div className="hidden md:block">
               <ArrowRightIcon className="w-10 h-10 text-white/20" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            <div className="md:col-span-2 bg-[#020617] p-12 group hover:bg-[#050a25] transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-all"></div>
              <div className="relative z-10">
                <div className="mb-8 p-3 bg-white/5 w-fit border border-white/10"><BuildingLibraryIcon className="w-8 h-8 text-indigo-400"/></div>
                <h3 className="text-3xl font-serif text-white mb-4">Commercial Scent Strategy</h3>
                <p className="text-slate-400 leading-relaxed text-lg max-w-lg mb-8">
                  We design comprehensive scent maps for hotels, malls, and offices, utilizing HVAC scent diffusers to ensure uniform coverage without overwhelming the senses.
                </p>
                <div className="flex gap-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-white border-b border-indigo-500 pb-1">HVAC Integration</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-white border-b border-indigo-500 pb-1">Large Area Diffusion</span>
                </div>
              </div>
            </div>

            <div className="bg-[#020617] p-12 group hover:bg-[#050a25] transition-colors relative border-l border-white/10">
              <div className="mb-8 p-3 bg-white/5 w-fit border border-white/10"><ChartBarIcon className="w-8 h-8 text-blue-400"/></div>
              <h3 className="text-2xl font-serif text-white mb-4">Ongoing Maintenance</h3>
              <p className="text-slate-400 leading-relaxed mb-12">
                A scent machine is only as good as its service. We provide refill plans, cleaning, and technical calibration to ensure 24/7 uptime.
              </p>
              <a href="/Maintenance" className="text-sm font-bold uppercase tracking-widest text-indigo-300 flex items-center gap-2 group-hover:text-white transition-colors">
                View Plans <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-[#020617] p-12 group hover:bg-[#050a25] transition-colors border-t border-white/10">
              <div className="mb-6"><LightBulbIcon className="w-8 h-8 text-cyan-400"/></div>
              <h3 className="text-2xl font-serif text-white mb-3">Residential Systems</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Discreet, quiet, and effective home diffusers that blend into your decor.</p>
            </div>

            <div className="md:col-span-2 bg-[#020617] p-12 group hover:bg-[#050a25] transition-colors border-t border-l border-white/10">
              <div className="flex items-start gap-6">
                <div className="mb-6"><SparklesIcon className="w-8 h-8 text-purple-400"/></div>
                <div>
                  <h3 className="text-2xl font-serif text-white mb-3">Scent Branding</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-md">Create a signature scent identity that customers associate with your brand. We help you choose notes that define your ethos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 4. VALUES ================= */}
        <div className="mb-32">
          <div className="border border-white/10 bg-white/[0.02] p-10 md:p-24 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-16 md:gap-32 relative z-10">
              <div>
                 <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Driven by <br/> Excellence</h2>
                 <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase">The Cool Max Standard</p>
              </div>
              <div className="space-y-12">
                <div>
                   <h3 className="text-2xl font-bold text-white mb-4 border-l-2 border-indigo-500 pl-4">Our Vision</h3>
                   <p className="text-slate-400 text-lg leading-relaxed">
                     To become the UAE's most trusted provider of scent architecture, ensuring that every commercial and residential space we touch breathes elegance and comfort.
                   </p>
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-white mb-4 border-l-2 border-blue-500 pl-4">Our Mission</h3>
                   <p className="text-slate-400 text-lg leading-relaxed">
                     Delivering consistent, high-quality fragrance experiences through reliable technology and unwavering service support. No complications, just pure ambiance.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 5. CTA (REDIRECTIONS ADDED) ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-tight">
            Ready to transform <br/> <span className="italic text-indigo-400">your space?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-12 py-5 bg-white text-[#020617] font-bold text-lg uppercase tracking-widest hover:bg-indigo-50 transition-all flex items-center justify-center gap-2"
            >
              Get a Free Consultation <ArrowRightIcon className="w-5 h-5" />
            </a>
            <a 
              href="/contact"
              className="w-full sm:w-auto px-12 py-5 bg-transparent text-white border border-white/20 font-bold text-lg uppercase tracking-widest hover:bg-white/5 transition-all"
            >
              View Product Catalog
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}