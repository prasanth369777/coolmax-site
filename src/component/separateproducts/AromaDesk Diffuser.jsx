import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  SpeakerXMarkIcon, 

  BoltIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  BeakerIcon,
  ShieldCheckIcon,
  HomeIcon,
  ClockIcon,
  Squares2X2Icon,
  PaintBrushIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import DeskScent1 from "../../asset/productimg/CMwebpimg/DeskScent/1.webp";
import DeskScent2 from "../../asset/productimg/CMwebpimg/DeskScent/2.webp";
import DeskScent3 from "../../asset/productimg/CMwebpimg/DeskScent/3.webp";
import DeskScent4 from "../../asset/productimg/CMwebpimg/DeskScent/4.webp";

const AromaDeskPage = () => {
  const [activeImg, setActiveImg] = useState(DeskScent1);
  const gallery = [DeskScent1, DeskScent2, DeskScent3, DeskScent4];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans selection:bg-blue-100 overflow-hidden pt-20">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-20 pb-20 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              Desktop & Lifestyle Series
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              AromaDesk Diffuser
            </h1>
            <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">
              Elegant Desktop Aroma Diffuser for Refined Personal Spaces
            </p>
            <p className="text-slate-500 mb-10 leading-relaxed font-light">
              The AromaDesk Diffuser is a compact desktop aroma diffuser designed for small spaces where style, simplicity, and controlled fragrance diffusion are essential. With its plug-in essential oil bottle design, intelligent timed diffusion, and unique sculptural appearance, this diffuser delivers efficient scenting while doubling as a modern décor element.
            </p>
            <p className="text-slate-500 mb-10 italic border-l-4 border-blue-600 pl-6">
              Ideal for desks, bedside tables, counters, and small commercial interiors, AromaDesk Diffuser provides a balanced home scent system for everyday environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg">
                Get Expert Guidance <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-square bg-white rounded-[3rem] border border-slate-100 shadow-xl flex items-center justify-center p-12 overflow-hidden">
              <img src={activeImg} alt="AromaDesk Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-20 h-20 rounded-xl border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-white opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="AromaDesk variant thumb" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 1: PRODUCT OVERVIEW ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Product Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
              AromaDesk Diffuser is built for users who want a simple yet elegant home diffuser machine without complex installation or bulky hardware. Its direct plug-in oil bottle system allows quick fragrance changes, while the intelligent three-gear timing ensures consistent scent delivery throughout the day.
              This diffuser is designed to blend seamlessly into modern interiors while maintaining reliable aroma performance for compact spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY FEATURES ================= */}
      <section className="py-24 bg-[#0c101b] text-white px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: HomeIcon, text: "Desktop & small space aroma diffuser" },
              { icon: BeakerIcon, text: "Plug-in essential oil bottle design" },
              { icon: ClockIcon, text: "Intelligent three-gear fragrance control" },
              { icon: Squares2X2Icon, text: "Compact and lightweight structure" },
              { icon: SpeakerXMarkIcon, text: "Quiet operation for daily use" },
              { icon: PaintBrushIcon, text: "Unique sculptural appearance" },
              { icon: ShieldCheckIcon, text: "Leak-proof certified design" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-10 h-10 text-blue-500 mx-auto mb-6" />
                <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: PREMIUM DESIGN & BUILD ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-20 text-center tracking-tight">Premium Design & Build Quality</h2>
        
        <div className="grid gap-24">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Plug-In Essential Oil Bottle Design</h3>
              <p className="text-slate-500 leading-relaxed mb-6 font-light">
                The plug-in essential oil bottle system allows for rapid fragrance deployment and mess-free maintenance.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {["Remove and replace bottles easily", "Add essential oil quickly without mess", "Reduce maintenance time"].map((li, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 font-medium p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" /> {li}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-slate-400 font-medium text-sm italic">Highly practical for both home and light commercial environments.</p>
            </div>
            <div className="rounded-[2.5rem] bg-slate-100 p-8 order-1 md:order-2 flex justify-center">
               <img src={DeskScent2} alt="Plug-in Bottle Design" className="w-full h-80 object-contain" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[2.5rem] bg-slate-100 p-8 flex justify-center">
               <img src={DeskScent3} alt="Timed Diffusion Control" className="w-full h-80 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Intelligent Timed Diffusion</h3>
              <h4 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Three-Gear Control System</h4>
              <p className="text-slate-500 font-light leading-relaxed mb-6">
                AromaDesk Diffuser features an intelligent three-gear design that controls fragrance release automatically, ensuring the environment is perfectly balanced.
              </p>
              <div className="space-y-4">
                 <div className="p-4 bg-slate-900 text-white rounded-2xl flex items-center gap-4">
                    <BoltIcon className="w-6 h-6 text-blue-400" />
                    <span className="text-xs font-bold uppercase tracking-widest">Rapid spray activation</span>
                 </div>
                 <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-4">
                    <ClockIcon className="w-6 h-6 text-blue-600" />
                    <span className="text-xs font-bold uppercase tracking-widest">Autonomous consistent diffusion</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Sculptural Design */}
          <div className="bg-slate-900 text-white p-12 rounded-[3rem] text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-blue-600/5 pointer-events-none" />
             <PaintBrushIcon className="w-16 h-16 text-blue-500 mx-auto mb-8" />
             <h3 className="text-2xl md:text-4xl font-serif mb-6">Compact & Unique Design</h3>
             <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-8">
               Designed with a distinctive shape and texture, AromaDesk stand outs from traditional diffusers. Its clean white body combined with a refined top and mirror silver electroplated base reflects light and shadows to integrate naturally into any décor.
             </p>
          </div>

          {/* Feature 4: Performance */}
          <div className="grid md:grid-cols-2 gap-8">
             <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm">
                <SpeakerXMarkIcon className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-2xl font-serif mb-4">Quiet Performance</h3>
                <p className="text-slate-500 font-light leading-relaxed">
                   Operating at ≤40 dB, AromaDesk runs quietly in the background, perfect for concentration-heavy areas.
                </p>
                <div className="flex gap-4 mt-6">
                   {["Work desks", "Bedrooms", "Reception", "Study"].map((tag, i) => (
                     <span key={i} className="px-3 py-1 bg-slate-50 text-[9px] font-black uppercase text-slate-400 rounded-lg">{tag}</span>
                   ))}
                </div>
             </div>
             <div className="p-10 bg-blue-600 text-white rounded-[3rem] shadow-xl">
                <ShieldCheckIcon className="w-10 h-10 text-white mb-6" />
                <h3 className="text-2xl font-serif mb-4 text-white">Leak-Proof & Safe Design</h3>
                <p className="text-blue-100 font-light leading-relaxed mb-6">
                   Includes a leak-proof certified structure ensuring clean operation and safe placement on expensive furniture without risk of oil spillage.
                </p>
                <div className="space-y-2 text-[10px] font-black uppercase tracking-[0.1em]">
                   <p className="flex items-center gap-2">• Clean operation</p>
                   <p className="flex items-center gap-2">• Safe placement</p>
                   <p className="flex items-center gap-2">• Certified structure</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: TECHNICAL SPECIFICATIONS ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-12 text-center tracking-tight">Technical Specifications</h2>
          <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Specification</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Details</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Product Type", "Desktop & Small Space Aroma Diffuser"],
                  ["Fragrance Capacity", "20 ml"],
                  ["Voltage / Power", "DC 5V / 2W"],
                  ["Battery Capacity", "2000 mAh"],
                  ["Coverage Area", "100 m³"],
                  ["Oil Consumption", "0.3 g/h ±5% (working 60s, pausing 120s)"],
                  ["Noise Level", "≤40 dB"],
                  ["Net Weight", "0.307 kg"],
                  ["Dimensions", "Ø82 × H186 mm"],
                  ["Color", "White"]
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-bold text-slate-400 uppercase tracking-widest text-[10px]">{row[0]}</td>
                    <td className="p-6 text-slate-700 font-medium">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= SECTION: IDEAL APPLICATIONS ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight">Ideal Applications</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            "Home desks", "Bedrooms", "Study areas", 
            "Small retail counters", "Personal workspaces"
          ].map((item, i) => (
            <span key={i} className="px-8 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm text-sm font-bold text-slate-700 uppercase tracking-wider">
              {item}
            </span>
          ))}
        </div>
        <p className="text-slate-500 font-medium italic max-w-2xl mx-auto leading-relaxed">Its compact size and stylish appearance make it perfect for environments where space is limited.</p>
      </section>

      {/* ================= SECTION: WHY CHOOSE ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <img src={DeskScent4} alt="Mirror Base Detail" className="w-full h-96 object-contain rounded-[3rem] shadow-2xl" />
             <div className="absolute -bottom-6 -right-6 p-8 bg-blue-600 text-white rounded-3xl shadow-xl">
                <span className="text-3xl font-black italic">Mirror</span>
                <p className="text-[10px] font-bold uppercase tracking-widest">Electroplated Base</p>
             </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Why Choose AromaDesk Diffuser</h2>
            <div className="space-y-4">
              {[
                "Simple plug-in oil bottle replacement",
                "Intelligent timed fragrance control",
                "Compact and elegant design",
                "Quiet, energy-efficient operation",
                "Easy maintenance and daily usability"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors">
                  <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                  <span className="text-slate-700 font-medium">{text}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-slate-400 font-medium text-sm italic">An excellent choice for users looking for a best home fragrance system for small spaces.</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION: COLLECTION ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Part of Our Desktop & Small Space Collection</h2>
          <p className="text-slate-500 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            AromaDesk Diffuser belongs to Cool Max’s Desktop & Small Space Aroma Diffusers category — focused on efficiency, simplicity, and aesthetic harmony.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["OpalMist Clock Diffuser", "ZenBox Mini Diffuser", "AeroCube Diffuser"].map((range, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[10px] text-slate-500 cursor-pointer">
                Explore {range}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION: CTA ================= */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10 tracking-tight leading-tight">Enhance Small Spaces with AromaDesk</h2>
          <p className="text-slate-400 text-xl mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a compact desktop aroma diffuser that delivers reliable fragrance without complexity?
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-2">
                Get expert guidance for your space
            </button>
            <button className="px-12 py-5 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all">Contact Cool Max for product details</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AromaDeskPage;