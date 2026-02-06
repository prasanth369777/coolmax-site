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
  Squares2X2Icon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import AirPulse1501 from "../../asset/productimg/CMwebpimg/AirPulse 150/1.webp";
import AirPulse1502 from "../../asset/productimg/CMwebpimg/AirPulse 150/2.webp";
import AirPulse1503 from "../../asset/productimg/CMwebpimg/AirPulse 150/3.webp";
import AirPulse1504 from "../../asset/productimg/CMwebpimg/AirPulse 150/4.webp";

const AirPulse150Page = () => {
  const [activeImg, setActiveImg] = useState(AirPulse1501);
  const gallery = [AirPulse1501, AirPulse1502, AirPulse1503, AirPulse1504];

  // Redirection Links
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20AirPulse%20150%20Diffuser.`;
  const contactPath = "/contact";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* ================= HERO SECTION (OPTIMIZED HEIGHT) ================= */}
      <section className="relative pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto text-left">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Mega-Scale HVAC System
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
              AirPulse 150 Diffuser
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed">
              Ultra-High Capacity HVAC Aroma Diffuser for Mega Commercial Spaces
            </p>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed font-light">
              The AirPulse 150 is a heavy-duty large area & HVAC aroma diffuser designed for extremely large commercial environments where standard scent machines are not sufficient. Built to handle 5,000 to 15,000 cubic meters, this system is ideal for locations that require powerful, precise, and uninterrupted fragrance diffusion across multiple zones.
            </p>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed border-l-4 border-blue-600 pl-6 italic">
              With dual atomization technology, industrial-grade components, and full HVAC integration, AirPulse 150 is a premium scent air machine engineered for airports, high-end malls, large office buildings, cinemas, and entertainment venues.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg">
                Consult Experts <ChatBubbleLeftRightIcon className="w-4 h-4" />
              </a>
              <a href={contactPath} className="px-6 py-3 border border-slate-200 text-slate-900 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2">
                Get Quote <ArrowRightIcon className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-[4/3] bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center justify-center p-8 overflow-hidden">
              <img src={activeImg} alt="AirPulse 150 Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="variant-thumb" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 1: PRODUCT OVERVIEW ================= */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight">Product Overview</h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
              AirPulse 150 is developed for enterprise-level scenting requirements. Unlike compact commercial scent machines, this system is built to deliver stable and consistent fragrance output across very large interiors without scent fluctuation or oil degradation.
              Its modular design allows the diffuser to operate through direct HVAC connection, ensuring fragrance is evenly distributed via central air systems. With high-capacity oil support and long-life compressors, AirPulse 150 offers reliability, performance, and control for demanding environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY HIGHLIGHTS ================= */}
      <section className="py-16 bg-[#0c101b] text-white px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: GlobeAltIcon, text: "Ultra-large area aroma scent diffuser" },
              { icon: BeakerIcon, text: "Covers 5,000 – 15,000 m³" },
              { icon: Squares2X2Icon, text: "Dual atomizer & compressor system" },
              { icon: WrenchScrewdriverIcon, text: "HVAC scent diffuser compatible" },
              { icon: BoltIcon, text: "Industrial-grade continuous operation" },
              { icon: CubeIcon, text: "High-capacity fragrance support" },
              { icon: BuildingOfficeIcon, text: "Designed for multi-zone commercial spaces" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center">
                <item.icon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: ADVANCED FEATURES ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-serif mb-16 text-center tracking-tight">Advanced Features & Performance</h2>
        <div className="grid gap-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 text-left">
              <h3 className="text-xl font-serif mb-4">Extreme Coverage for Large Spaces</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                AirPulse 150 is designed for very large commercial areas where standard scent machines cannot perform effectively. Its dual-atomizer configuration ensures wide and balanced fragrance dispersion even in complex layouts.
              </p>
              <p className="text-xs text-blue-600 font-bold italic border-l-2 border-blue-600 pl-4">
                Reliable for business environments with open spaces, multiple floors, or centralized air systems.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-6 order-1 md:order-2 h-64 flex items-center justify-center">
               <img src={AirPulse1502} alt="Dual Atomization" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-slate-100 p-6 h-64 flex items-center justify-center">
               <img src={AirPulse1503} alt="Dual Compressor System" className="w-full h-full object-contain" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-serif mb-4">Dual Atomization & Compressor Technology</h3>
              <p className="text-sm text-slate-500 mb-4">The system features dual atomizers, independent compressors, and separate control panels allowing:</p>
              <div className="grid grid-cols-2 gap-3">
                {["Stable output", "Accurate control", "Reduced wastage", "Long life"].map((li, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-slate-700 text-[10px] font-black uppercase">{li}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] col-span-2 text-left">
              <h3 className="text-xl font-serif mb-4 text-blue-400">Full HVAC System Integration</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">Fragrance travels naturally through airflow, ensuring uniform coverage without localized overpowering.</p>
              <div className="grid grid-cols-3 gap-2">
                 {["Uniform coverage", "No localization", "Efficiency"].map((item, i) => (
                    <div key={i} className="p-2 bg-white/5 rounded-lg text-[9px] font-black uppercase text-center border border-white/10">{item}</div>
                 ))}
              </div>
            </div>
            <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm flex flex-col justify-center text-left">
              <ShieldCheckIcon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-serif mb-2">Industrial Build</h3>
              <p className="text-slate-500 text-xs font-light">Long-life compressor for continuous commercial operation.</p>
            </div>
          </div>

          <div className="p-10 bg-blue-600 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-200">
             <div className="max-w-xl text-left">
               <h3 className="text-xl font-serif mb-3">5L Large Oil Capacity</h3>
               <p className="text-blue-100 text-xs font-light leading-relaxed">Supports standard 500 ml × 2 or optional 5-liter external containers to reduce refill frequency.</p>
             </div>
             <div className="bg-white/10 p-6 rounded-2xl border border-white/20 text-center">
                <span className="text-4xl font-black italic">5L</span>
                <p className="text-[8px] font-black uppercase mt-1">Optional External</p>
             </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: TECHNICAL SPECIFICATIONS ================= */}
      <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif mb-10 text-center tracking-tight text-slate-900">Technical Specifications</h2>
          <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-bold uppercase tracking-widest text-[10px]">Specification</th>
                  <th className="p-4 font-bold uppercase tracking-widest text-[10px]">Details</th>
                </tr>
              </thead>
              <tbody className="text-xs text-left">
                {[
                  ["Product Type", "Large Area & HVAC Aroma Diffuser"],
                  ["Coverage Area", "5,000 – 15,000 m³"],
                  ["Fragrance Capacity", "500 ml × 2 (optional 5L support)"],
                  ["Voltage / Power", "DC 12V / 16W"],
                  ["Oil Consumption", "Approx. 5 ml/hr"],
                  ["Control System", "Independent control panels"],
                  ["Installation", "HVAC system connection"],
                  ["Color", "Black"]
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-400 uppercase tracking-widest text-[9px]">{row[0]}</td>
                    <td className="p-4 text-slate-700 font-medium">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: APPLICATIONS ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-serif mb-10 tracking-tight">Recommended Applications</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "International airports", "High-end shopping malls", 
            "Large office buildings", "Cinemas & theatres", 
            "Convention centers", "Entertainment clubs"
          ].map((item, i) => (
            <span key={i} className="px-6 py-3 bg-white border border-slate-100 rounded-xl shadow-sm text-[10px] font-bold text-slate-700 uppercase tracking-widest">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ================= SECTION 6: HOW IT WORKS ================= */}
      <section className="py-16 bg-slate-900 text-white px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-2xl md:text-4xl font-serif mb-6 leading-tight tracking-tight text-blue-400">How AirPulse 150 Works</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
              AirPulse 150 uses cold-air atomization, converting fragrance oil into micro-particles without heat or water, ensuring purity and longevity.
            </p>
            <div className="flex gap-4">
               {["Consistent", "Natural", "Residue-Free"].map((val, idx) => (
                 <div key={idx} className="p-3 bg-white/5 rounded-xl text-[9px] font-black uppercase text-blue-400 border border-white/10">{val}</div>
               ))}
            </div>
          </div>
          <div className="bg-blue-600/10 p-10 rounded-[3rem] border border-blue-500/20 text-center">
             <BeakerIcon className="w-12 h-12 text-blue-500 mb-6 mx-auto" />
             <h4 className="text-lg font-serif mb-4">Dual Cold-Air Atomization</h4>
             <img src={AirPulse1504} alt="Internal Mechanism" className="w-full h-40 object-contain rounded-xl opacity-80" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight">Why Choose AirPulse 150?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Designed for mega-scale scenting projects",
            "Handles extreme coverage requirements",
            "Dual atomizer system for reliability",
            "HVAC-ready architecture",
            "Reduced maintenance with large oil capacity",
            "Trusted commercial-grade performance"
          ].map((text, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <CheckCircleIcon className="w-6 h-6 text-blue-600 mb-4" />
              <p className="text-slate-700 text-sm font-medium leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 8: MAINTENANCE & SUPPORT ================= */}
      <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-[1000px] mx-auto grid lg:grid-cols-2 gap-6 text-left">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-3">Maintenance</h4>
            <ul className="space-y-2 text-xs text-slate-500 font-light">
               <li>• Easy oil replacement</li>
               <li>• Stable internal components</li>
               <li>• Minimal routine servicing</li>
            </ul>
          </div>
          <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-3 text-white">Cool Max Support</h4>
            <ul className="space-y-2 text-xs text-blue-50 font-light">
               <li>• System & Installation planning</li>
               <li>• Maintenance & refill services</li>
               <li>• Long-term technical assistance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION (MASTER REDIRECT) ================= */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10 tracking-tight leading-tight">Speak with Our Scent Specialists</h2>
          <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a high-capacity HVAC scent diffuser for your large facility? Our experts will help you plan the right solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-white text-slate-900 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-2">
               <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Support
            </a>
            <a href={contactPath} className="px-10 py-4 bg-white/5 text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2">
              Contact Cool Max <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AirPulse150Page;