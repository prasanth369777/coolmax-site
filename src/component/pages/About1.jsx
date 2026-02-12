import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRightIcon, 
  SparklesIcon, 
  ChartBarIcon, 
  UserGroupIcon,
  GlobeAltIcon,
  LightBulbIcon,
  BuildingLibraryIcon,
 
} from "@heroicons/react/24/outline";
import AboutImg from "../../asset/about/about1.png";

export default function AboutUs() {
  const whatsappNumber = "971522286401";

  // Animation Variant
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="relative min-h-screen bg-[#FAFAFA] text-slate-600 font-sans selection:bg-indigo-600 selection:text-white overflow-hidden">
      
      {/* ================= ARCHITECTURAL GRID BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-20 lg:py-28">

        {/* ================= 1. HERO SECTION ================= */}
        <div className="flex flex-col items-start mb-32 relative">
          <motion.div 
            {...fadeUp}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-md bg-white border border-slate-200 shadow-sm mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            <span className="text-[10px] font-black tracking-[0.2em] text-slate-900 uppercase">Established 2020 • Dubai, UAE</span>
          </motion.div>
          
          <motion.h1 
            {...fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 font-medium tracking-tighter leading-[1.1] mb-12 max-w-5xl"
          >
            At Cool Max Scent, we specialize in delivering <span className="italic text-indigo-600 font-light">professional scent diffuser machines</span> and complete home fragrance systems.
          </motion.h1>
          
          <motion.div 
            {...fadeUp}
            className="grid lg:grid-cols-2 gap-12 border-t border-slate-200 pt-12"
          >
            <p className="text-xl font-light leading-relaxed text-slate-500">
              We provide scenting solutions for homes, hotels, offices, retail spaces, and large commercial environments across the UAE. Based in Dubai, we help businesses and homeowners transform ordinary spaces into pleasant, welcoming environments using advanced aroma scent diffuser technology.
            </p>
            <div className="space-y-6">
              <p className="text-base leading-relaxed">
                From compact home scent diffusers to powerful commercial scent machines and HVAC scent diffuser systems, our solutions are designed to deliver consistent fragrance coverage with minimal maintenance. Whether you are looking for a scent machine for home, a hotel scent machine, or a scent machine for business, Cool Max provides reliable, scalable, and easy-to-manage scenting solutions tailored to your space.
              </p>
              <p className="italic text-indigo-600 text-lg font-medium border-l-2 border-indigo-600 pl-6">
                A pleasant-smelling environment is no longer a luxury—it is part of the experience. With Cool Max, fragrance becomes a powerful tool to improve comfort, enhance brand perception, and create lasting impressions.
              </p>
              <p className="font-bold text-slate-900 tracking-tight text-xl pt-4">
                Looking for a trusted scent diffuser company in the UAE? Talk to Cool Max today.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================= 2. CONTENT SPLIT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-40">
          <motion.div 
            {...fadeUp}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] bg-slate-200">
              <img 
                src={AboutImg} 
                alt="Scent Architecture" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 border border-slate-100 shadow-xl hidden lg:block max-w-xs rounded-2xl">
               <p className="text-slate-900 font-serif text-lg italic leading-tight">"Scent is the most intense form of memory."</p>
            </div>
          </motion.div>

          <motion.div 
            {...fadeUp}
            className="lg:col-span-7 space-y-10"
          >
            <div>
              <h2 className="text-sm font-black text-indigo-600 tracking-widest uppercase mb-4">Who We Are</h2>
              <h3 className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight">
                More than a supplier. We are your <span className="italic text-indigo-600 font-light">scent partners.</span>
              </h3>
            </div>
            
            <div className="space-y-6 text-lg font-light leading-relaxed">
              <p>
                Cool Max is a solution-driven company. We don't just sell machines; we analyze your space, understand your airflow, and design a scenting strategy that works silently in the background.
              </p>
              <p>
                From intimate residential spaces to sprawling commercial complexes, our portfolio includes battery-operated units, sleek floor stands, and powerful HVAC-integrated systems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 pt-10 border-t border-slate-200">
              <div>
                <h4 className="text-4xl font-serif text-slate-900 mb-2">500+</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <GlobeAltIcon className="w-4 h-4 text-indigo-600" /> Projects Delivered
                </p>
              </div>
              <div>
                <h4 className="text-4xl font-serif text-slate-900 mb-2">98%</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <UserGroupIcon className="w-4 h-4 text-indigo-600" /> Client Retention
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= 3. EXPERTISE GRID ================= */}
        <div className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight">Our Expertise</h2>
            <p className="text-slate-500 text-lg max-w-md">End-to-end scenting ecosystems designed for performance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <div className="mb-8 p-4 bg-slate-50 w-fit rounded-xl border border-slate-100"><BuildingLibraryIcon className="w-8 h-8 text-indigo-600"/></div>
              <h3 className="text-2xl font-serif text-slate-900 mb-4">Commercial Scent Strategy</h3>
              <p className="leading-relaxed font-light mb-8">
                We design comprehensive scent maps for hotels, malls, and offices, utilizing HVAC scent diffusers to ensure uniform coverage without overwhelming the senses.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-slate-100 px-4 py-2 rounded-full text-slate-900">HVAC Integration</span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-slate-100 px-4 py-2 rounded-full text-slate-900">Large Area Diffusion</span>
              </div>
            </div>

            <div className="bg-slate-900 p-10 rounded-[2rem] text-white shadow-2xl flex flex-col justify-between">
              <div>
                <div className="mb-8 p-4 bg-white/10 w-fit rounded-xl border border-white/10"><ChartBarIcon className="w-8 h-8 text-indigo-400"/></div>
                <h3 className="text-xl font-serif mb-4">Ongoing Maintenance</h3>
                <p className="text-slate-400 font-light leading-relaxed mb-8 text-sm">
                  A scent machine is only as good as its service. We provide refill plans, cleaning, and technical calibration to ensure 24/7 uptime.
                </p>
              </div>
              <a href="/Maintenance" className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 flex items-center gap-3 hover:text-white transition-colors">
                View Plans <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm">
              <div className="mb-6 p-4 bg-slate-50 w-fit rounded-xl"><LightBulbIcon className="w-8 h-8 text-slate-400"/></div>
              <h3 className="text-xl font-serif text-slate-900 mb-3">Residential Systems</h3>
              <p className="font-light leading-relaxed text-sm">Discreet, quiet, and effective home diffusers that blend into your decor.</p>
            </div>

            <div className="lg:col-span-2 bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-center">
              <div className="shrink-0 p-6 bg-indigo-50 rounded-full border border-indigo-100"><SparklesIcon className="w-10 h-10 text-indigo-600"/></div>
              <div>
                <h3 className="text-xl font-serif text-slate-900 mb-3">Scent Branding</h3>
                <p className="font-light leading-relaxed text-sm">Create a signature scent identity that customers associate with your brand. We help you choose notes that define your ethos.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 4. VISION & MISSION ================= */}
        <div className="mb-40">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center">
               <h2 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-10">Our Vision</h2>
               <p className="text-xl md:text-2xl font-serif text-slate-900 leading-relaxed font-light">
                 To become a trusted provider of professional, cost-effective scent and hygiene solutions that support cleaner, healthier environments for future generations.
               </p>
            </div>
            <div className="p-12 bg-indigo-600 rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center text-white">
               <h2 className="text-sm font-black text-white/70 uppercase tracking-widest mb-10">Our Mission</h2>
               <p className="text-xl md:text-2xl font-serif leading-relaxed font-light">
                 To deliver reliable, eco-conscious, and high-quality home scent systems, commercial scent diffusers, and fragrance solutions with a strong focus on customer satisfaction and consistent service.
               </p>
            </div>
          </div>
        </div>

        {/* ================= 5. CTA ================= */}
        <motion.div 
          {...fadeUp}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-12 leading-[1.1] tracking-tight">
            Ready to transform <br/> <span className="italic text-indigo-600 font-light">your space?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-sans">
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-indigo-600 transition-all shadow-xl flex items-center justify-center gap-3 rounded-full"
            >
              Get a Free Consultation <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a 
              href="/contact"
              className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 font-bold text-xs uppercase tracking-[0.2em] hover:bg-slate-50 transition-all rounded-full flex items-center justify-center shadow-sm"
            >
              View Product Catalog
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}