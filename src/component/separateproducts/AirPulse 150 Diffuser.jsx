import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  BoltIcon, 
 
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CubeIcon,
  Squares2X2Icon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import AirPulse1501 from "../../asset/productimg/CMwebpimg/AirPulse 150/1.webp";
import AirPulse1502 from "../../asset/productimg/CMwebpimg/AirPulse 150/2.webp";
import AirPulse1503 from "../../asset/productimg/CMwebpimg/AirPulse 150/3.webp";
import AirPulse1504 from "../../asset/productimg/CMwebpimg/AirPulse 150/4.webp";

const AirPulse150Page = () => {
  const [activeImg, setActiveImg] = useState(AirPulse1501);
  const gallery = [AirPulse1501, AirPulse1502, AirPulse1503, AirPulse1504];

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
              Mega-Scale HVAC System
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              AirPulse 150 Diffuser
            </h1>
            <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">
              Ultra-High Capacity HVAC Aroma Diffuser for Mega Commercial Spaces
            </p>
            <p className="text-slate-500 mb-6 leading-relaxed font-light">
              The AirPulse 150 is a heavy-duty large area & HVAC aroma diffuser designed for extremely large commercial environments where standard scent machines are not sufficient. Built to handle 5,000 to 15,000 cubic meters, this system is ideal for locations that require powerful, precise, and uninterrupted fragrance diffusion across multiple zones.
            </p>
            <p className="text-slate-500 mb-10 leading-relaxed border-l-4 border-blue-600 pl-6 italic">
              With dual atomization technology, industrial-grade components, and full HVAC integration, AirPulse 150 is a premium scent air machine engineered for airports, high-end malls, large office buildings, cinemas, and entertainment venues.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg shadow-slate-200">
                Consult with Cool Max Experts <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-square bg-white rounded-[3rem] border border-slate-100 shadow-xl flex items-center justify-center p-12 overflow-hidden">
              <img src={activeImg} alt="AirPulse 150 Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-20 h-20 rounded-xl border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-white opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="variant-thumb" />
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
              AirPulse 150 is developed for enterprise-level scenting requirements. Unlike compact commercial scent machines, this system is built to deliver stable and consistent fragrance output across very large interiors without scent fluctuation or oil degradation.
              Its modular design allows the diffuser to operate through direct HVAC connection, ensuring fragrance is evenly distributed via central air systems. With high-capacity oil support and long-life compressors, AirPulse 150 offers reliability, performance, and control for demanding environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY HIGHLIGHTS ================= */}
      <section className="py-24 bg-[#0c101b] text-white px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: GlobeAltIcon, text: "Ultra-large area aroma scent diffuser" },
              { icon: BeakerIcon, text: "Covers 5,000 – 15,000 m³" },
              { icon: Squares2X2Icon, text: "Dual atomizer & compressor system" },
              { icon: WrenchScrewdriverIcon, text: "HVAC scent diffuser compatible" },
              { icon: BoltIcon, text: "Industrial-grade continuous operation" },
              { icon: CubeIcon, text: "High-capacity fragrance support" },
              { icon: BuildingOfficeIcon, text: "Designed for multi-zone commercial spaces" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-10 h-10 text-blue-500 mx-auto mb-6" />
                <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: ADVANCED FEATURES ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-20 text-center tracking-tight">Advanced Features & Performance</h2>
        
        <div className="grid gap-24">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Extreme Coverage for Large Spaces</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                AirPulse 150 is designed for very large commercial areas where standard scent machines cannot perform effectively. Its dual-atomizer configuration ensures wide and balanced fragrance dispersion even in complex layouts.
              </p>
              <p className="text-slate-500 font-medium italic border-l-4 border-blue-600 pl-4">
                This makes it a reliable scent machine for business environments with open spaces, multiple floors, or centralized air circulation systems.
              </p>
            </div>
            <div className="rounded-[2.5rem] bg-slate-100 p-8 order-1 md:order-2">
               <img src={AirPulse1502} alt="Dual Atomization" className="w-full h-80 object-contain" />
            </div>
          </div>

          {/* Feature 2: Dual Tech */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[2.5rem] bg-slate-100 p-8">
               <img src={AirPulse1503} alt="Dual Compressor System" className="w-full h-80 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Dual Atomization & Compressor Technology</h3>
              <p className="text-slate-500 mb-6">The system features dual atomizers, independent compressors, and separate control panels. This architecture allows:</p>
              <div className="grid grid-cols-2 gap-4">
                {["Stable scent output", "Accurate diffusion control", "Reduced oil wastage", "Long operational life"].map((li, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-slate-700 text-xs font-black uppercase tracking-widest">{li}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-slate-500 font-light text-sm italic leading-relaxed">The advanced atomization structure also prevents fragrance oil deterioration, maintaining scent purity over time.</p>
            </div>
          </div>

          {/* Feature 3: HVAC */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 text-white p-10 rounded-[3rem] col-span-2">
              <h3 className="text-2xl md:text-3xl font-serif mb-6 text-blue-400">Full HVAC System Integration</h3>
              <p className="text-slate-300 leading-relaxed mb-8">AirPulse 150 is engineered specifically for HVAC scenting solutions. When connected to central air-conditioning systems, fragrance travels naturally through airflow, ensuring uniform coverage without localized overpowering.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 {["Uniform coverage", "No localization", "Efficient distribution"].map((item, i) => (
                    <div key={i} className="p-4 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-center border border-white/10">{item}</div>
                 ))}
              </div>
            </div>
            <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm flex flex-col justify-center">
              <ShieldCheckIcon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-serif mb-4">Industrial-Grade Build Quality</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Built with high-quality internal components and a long-life compressor for continuous commercial operation with minimal downtime.</p>
            </div>
          </div>

          {/* Feature 4: Capacity */}
          <div className="p-12 bg-blue-600 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-blue-200">
             <div className="max-w-xl">
               <h3 className="text-2xl md:text-3xl font-serif mb-6">Large Oil Capacity & Flexible Configuration</h3>
               <p className="text-blue-100 leading-relaxed font-light mb-6">The system supports standard 500 ml × 2 configuration or optional 5-liter external fragrance containers.</p>
               <p className="text-blue-50 text-xs font-bold uppercase tracking-[0.2em] italic">This flexibility significantly reduces refill frequency and maintenance effort.</p>
             </div>
             <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
                <span className="text-5xl font-black italic">5L</span>
                <p className="text-[10px] font-black uppercase mt-2">Optional External Support</p>
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
                  ["Product Type", "Large Area & HVAC Aroma Diffuser"],
                  ["Coverage Area", "5,000 – 15,000 m³"],
                  ["Fragrance Capacity", "500 ml × 2 (optional 5L support)"],
                  ["Power Supply", "DC 12V / 16W"],
                  ["Noise Level", "≤45 dB"],
                  ["Oil Consumption", "Approx. 5 ml/hr"],
                  ["Control System", "Independent control panels"],
                  ["Installation", "HVAC system connection"],
                  ["Design", "Industrial-grade"],
                  ["Color", "Black"]
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

      {/* ================= SECTION 5: APPLICATIONS ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight">Recommended Applications</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "International airports", "High-end shopping malls", 
            "Large office buildings", "Cinemas & theatres", 
            "Hotels & convention centers", "Entertainment clubs & venues"
          ].map((item, i) => (
            <span key={i} className="px-8 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm text-sm font-bold text-slate-700 uppercase tracking-wider">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ================= SECTION 6: HOW IT WORKS ================= */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight tracking-tight">How AirPulse 150 Works</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6 font-light">
              AirPulse 150 uses cold-air atomization, converting fragrance oil into micro-particles without heat or water. These particles are then distributed via HVAC airflow or controlled outlets, ensuring fragrance remains:
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
               {["Consistent", "Natural", "Long-lasting"].map((val, idx) => (
                 <div key={idx} className="p-4 bg-white/5 rounded-xl text-xs font-black uppercase text-blue-400 text-center">{val}</div>
               ))}
            </div>
            <p className="text-slate-400 text-sm font-light italic">The advanced atomization design also protects fragrance oil from oxidation and degradation.</p>
          </div>
          <div className="bg-blue-600/10 p-12 rounded-[3rem] border border-blue-500/20 text-center">
             <BeakerIcon className="w-16 h-16 text-blue-500 mb-8 mx-auto" />
             <h4 className="text-2xl font-serif text-center mb-8">Dual Cold-Air Atomization</h4>
             [Image of hydrogen fuel cell]
             <img src={AirPulse1504} alt="Internal Mechanism" className="w-full h-48 object-contain rounded-2xl opacity-80 mt-6" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center tracking-tight">Why Choose AirPulse 150</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Designed for mega-scale scenting projects",
            "Handles extreme coverage requirements",
            "Dual atomizer system for reliability",
            "HVAC-ready architecture",
            "Reduced maintenance with large oil capacity",
            "Trusted commercial-grade performance"
          ].map((text, i) => (
            <div key={i} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-blue-600 transition-colors">
              <CheckCircleIcon className="w-8 h-8 text-blue-600 mb-6" />
              <p className="text-slate-700 font-medium leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-slate-500 font-medium">For businesses that need maximum scenting power with precision, AirPulse 150 delivers unmatched performance.</p>
      </section>

      {/* ================= SECTION 8: MAINTENANCE & SUPPORT ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12">
          <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3 underline underline-offset-8 decoration-blue-600">Maintenance</h4>
            <ul className="space-y-4 text-slate-500">
               <li>• Easy oil replacement</li>
               <li>• Stable internal components</li>
               <li>• Minimal routine servicing</li>
            </ul>
          </div>
          <div className="p-12 bg-blue-600 text-white rounded-[3rem] shadow-xl">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3 text-white">Cool Max Support</h4>
            <ul className="space-y-4 text-blue-50">
               <li>• System consultation</li>
               <li>• Installation planning</li>
               <li>• Fragrance selection guidance</li>
               <li>• Maintenance & refill services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: COLLECTION RANGE ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1400px] mx-auto text-center border-t border-slate-100 pt-24">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Part of Our Large Area & HVAC Range</h2>
          <p className="text-slate-500 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            AirPulse 150 is part of Cool Max’s Large Area & HVAC Aroma Diffusers category, created for businesses that require advanced scenting across expansive environments.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["Commercial Aroma Diffusers", "HVAC Scenting Solutions", "Floor-Standing Aroma Diffusers"].map((range, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-[#FAF9F6] border border-slate-100 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[10px] text-slate-500 cursor-pointer">
                Explore {range}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 10: CTA ================= */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10 tracking-tight">Speak with Our Scent Specialists</h2>
          <p className="text-slate-400 text-xl mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a high-capacity HVAC scent diffuser for your large facility? Our experts will help you plan the right solution.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl">Get a Custom Quote</button>
            <button className="px-12 py-5 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all">Consult with Cool Max Experts</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AirPulse150Page;