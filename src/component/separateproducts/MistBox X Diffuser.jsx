import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  WifiIcon, 
  CpuChipIcon, 
  BoltIcon, 
  SpeakerXMarkIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import Titan1 from "../../asset/productimg/CMwebpimg/Titan Diffuser/1.webp";
import Titan2 from "../../asset/productimg/CMwebpimg/Titan Diffuser/2.webp";
import Titan3 from "../../asset/productimg/CMwebpimg/Titan Diffuser/3.webp";
import Titan4 from "../../asset/productimg/CMwebpimg/Titan Diffuser/4.webp";

const MistBoxXPage = () => {
  const [activeImg, setActiveImg] = useState(Titan1);
  const gallery = [Titan1, Titan2, Titan3, Titan4];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              High-Capacity Commercial System
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              MistBox X Diffuser
            </h1>
            <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">
              High-Capacity Commercial Aroma Diffuser for Large Spaces & HVAC Systems
            </p>
            <p className="text-slate-500 mb-6 leading-relaxed">
              The MistBox X Diffuser is a powerful commercial aroma diffuser designed for businesses that require wide-area fragrance coverage, stable performance, and advanced control options. Built for demanding commercial environments, this scent diffuser machine delivers consistent scent diffusion across large indoor spaces while maintaining low energy consumption and quiet operation.
            </p>
            <p className="text-slate-500 mb-10 leading-relaxed border-l-4 border-blue-600 pl-6 italic">
              Ideal for hotels, office buildings, hospitals, theatres, shopping areas, and commercial facilities, MistBox X Diffuser supports both standalone use and HVAC scenting, making it a flexible and scalable solution for professional scent marketing needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg shadow-slate-200">
                Talk to a Scent Expert <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-square bg-white rounded-[3rem] border border-slate-100 shadow-xl flex items-center justify-center p-12 overflow-hidden">
              <img src={activeImg} alt="MistBox X Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
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
        <div className="max-w-[1200px] mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-8">Product Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
              The MistBox X Diffuser is engineered with nano-level fine atomization technology that transforms fragrance oil into ultra-fine particles. This allows the scent to spread evenly and naturally without residue or overpowering concentration.
              Designed with industrial-grade materials and a built-in power pump, the system ensures reliable fragrance diffusion even in large commercial spaces. Its clean, modern design integrates seamlessly into professional interiors while remaining discreet and functional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY HIGHLIGHTS ================= */}
      <section className="py-24 bg-[#0c101b] text-white px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-16">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BuildingOfficeIcon, text: "Commercial-grade aroma scent diffuser" },
              { icon: BeakerIcon, text: "Covers up to 4,000 m³" },
              { icon: WrenchScrewdriverIcon, text: "Supports HVAC scent diffuser integration" },
              { icon: WifiIcon, text: "WiFi & Bluetooth remote control" },
              { icon: BoltIcon, text: "Built-in power pump for stable diffusion" },
              { icon: CpuChipIcon, text: "Ultra-fine nano atomization technology" },
              { icon: SpeakerXMarkIcon, text: "Low noise operation for professional spaces" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-10 h-10 text-blue-500 mx-auto mb-6" />
                <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: KEY FEATURES & BENEFITS ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-20 text-center">Key Features & Benefits</h2>
        
        <div className="grid gap-20">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-serif mb-6">Nano-Level Fine Atomization</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                MistBox X Diffuser uses advanced nano-level atomization technology, breaking fragrance oil into extremely small particles. This ensures:
              </p>
              <ul className="space-y-3">
                {["Even scent distribution", "Faster diffusion across large spaces", "No wet mist or residue"].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600" /> {li}
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 mt-6 font-medium italic">This technology makes it ideal for commercial scent diffuser applications where balance and consistency matter.</p>
            </div>
            <div className="rounded-[2.5rem] bg-slate-100 p-8 order-1 md:order-2">
               <img src={Titan2} alt="Nano Atomization" className="w-full h-80 object-contain" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[2.5rem] bg-slate-100 p-8">
               <img src={Titan3} alt="Smart Control" className="w-full h-80 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-6">WiFi & Bluetooth Remote Control</h3>
              <p className="text-slate-500 mb-6">The diffuser supports WiFi and Bluetooth control, allowing users to:</p>
              <div className="grid grid-cols-1 gap-4 mb-6">
                {["Set working schedules", "Adjust fragrance concentration", "Control multiple settings remotely", "Manage 24-hour operation cycles"].map((li, i) => (
                   <div key={i} className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                      <WifiIcon className="w-6 h-6 text-blue-600" />
                      <span className="text-slate-700 font-medium">{li}</span>
                   </div>
                ))}
              </div>
              <p className="text-slate-500 font-medium italic">This makes MistBox X Diffuser suitable for centralized facility management and multi-location businesses.</p>
            </div>
          </div>

          {/* Feature 3 & 4 Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 text-white p-10 rounded-[3rem] col-span-2">
              <h3 className="text-2xl font-serif mb-6">HVAC Connection Capability</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">MistBox X Diffuser can be used as a standalone commercial scent machine or connected directly to HVAC air-conditioning systems. When used as an HVAC scent diffuser, fragrance is distributed through existing airflow, ensuring uniform coverage across multiple zones.</p>
              <div className="w-full h-px bg-white/10 mb-8" />
              <h3 className="text-2xl font-serif mb-6 text-blue-400">High-Power Built-In Pump</h3>
              <p className="text-slate-400 leading-relaxed font-medium italic">With a built-in power pump, the diffuser maintains steady performance even in large spaces. This ensures reliable scent diffusion without fluctuation, making it suitable for high-traffic commercial environments.</p>
            </div>
            <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm flex flex-col justify-center">
              <ShieldCheckIcon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-serif mb-6">Durable & Energy-Efficient Design</h3>
              <p className="text-slate-500 mb-6">Manufactured using anti-corrosive materials, the diffuser delivers:</p>
              <div className="space-y-4 font-bold text-[10px] uppercase tracking-widest text-slate-400">
                <p>• Long service life</p>
                <p>• Lower energy consumption</p>
                <p>• Stable operation under continuous use</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: TECHNICAL SPECIFICATIONS ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-12 text-center">Technical Specifications</h2>
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
                  ["Product Type", "Commercial Aroma Diffuser"],
                  ["Fragrance Capacity", "1000 ml"],
                  ["Coverage Area", "3,000 – 4,000 m³"],
                  ["Power Supply", "DC 12V / 15W"],
                  ["Noise Level", "≤45 dB"],
                  ["Installation Options", "Standalone or HVAC Connection"],
                  ["Control Options", "WiFi & Bluetooth Remote Control"],
                  ["Design", "Anti-corrosive, commercial-grade"],
                  ["Operation", "Customizable 24-hour scheduling"]
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

      {/* ================= IDEAL APPLICATIONS ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-16">Ideal Applications</h2>
        <p className="text-slate-500 mb-12 max-w-3xl mx-auto">MistBox X Diffuser is designed for large commercial environments, including:</p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Office buildings & corporate headquarters", "Hotel lobbies & hospitality spaces", 
            "Hospitals & healthcare facilities", "Cinemas & theatres", 
            "Shopping malls & retail complexes", "KTVs & entertainment venues", 
            "Airports & large public spaces"
          ].map((item, i) => (
            <span key={i} className="px-6 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm text-sm font-bold text-slate-700">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">How the MistBox X Diffuser Works</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6 font-light">
              The diffuser uses cold-air atomization to convert fragrance oil into micro-particles. These particles are dispersed evenly using an internal pump or HVAC airflow, ensuring the fragrance remains consistent and comfortable throughout the space.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed font-light italic">
              Because the system operates without heat or water, fragrance quality remains intact while equipment longevity is preserved.
            </p>
          </div>
          <div className="bg-blue-600/10 p-12 rounded-[3rem] border border-blue-500/20">
             <BeakerIcon className="w-16 h-16 text-blue-500 mb-8 mx-auto" />
             <h4 className="text-2xl font-serif text-center mb-4">Cold-Air Atomization Technology</h4>
             <p className="text-center text-blue-100 leading-relaxed">Preserving oil purity for a cleaner, longer-lasting scent experience in wide-area commercial zones.</p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center">Why Choose MistBox X Diffuser for Your Business</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Designed specifically for large-area commercial scenting",
            "Flexible installation for growing or multi-zone spaces",
            "Smart control for easy management",
            "Reliable performance under continuous operation",
            "Supports professional scent marketing strategies",
            "Backed by Cool Max technical expertise"
          ].map((text, i) => (
            <div key={i} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-blue-600 transition-colors">
              <CheckCircleIcon className="w-8 h-8 text-blue-600 mb-6" />
              <p className="text-slate-700 font-medium leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-slate-500 italic">This makes MistBox X Diffuser a dependable commercial scent machine for businesses that demand performance and control.</p>
      </section>

      {/* ================= MAINTENANCE & SUPPORT ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12">
          <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3 underline underline-offset-8 decoration-blue-600">Maintenance</h4>
            <ul className="space-y-4 text-slate-500">
               <li>• Simple oil replacement</li>
               <li>• Minimal cleaning requirements</li>
               <li>• Long-lasting internal components</li>
            </ul>
          </div>
          <div className="p-12 bg-blue-600 text-white rounded-[3rem] shadow-xl">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3">Cool Max Support</h4>
            <ul className="space-y-4 text-blue-50">
               <li>• Installation assistance</li>
               <li>• Usage guidance</li>
               <li>• Maintenance and refill support</li>
               <li>• Ongoing service for commercial clients</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= COLLECTION RANGE ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-8">Part of Our Commercial Aroma Diffusers Range</h2>
          <p className="text-slate-500 mb-16 max-w-3xl mx-auto leading-relaxed">
            The MistBox X Diffuser belongs to Cool Max’s Commercial Aroma Diffusers category, offering scalable scent solutions for professional environments.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["Large Area & HVAC Diffusers", "Floor-Standing Aroma Diffusers", "Desktop & Small Space Diffusers"].map((range, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-[#FAF9F6] border border-slate-100 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[10px] text-slate-500 cursor-pointer">
                Explore {range}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SPEAK WITH OUR SCENT SPECIALISTS ================= */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10">Speak with Our Scent Specialists</h2>
          <p className="text-slate-400 text-xl mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed">
            Need a commercial aroma diffuser that fits your space perfectly? 
            Our experts will help you choose the right configuration and fragrance solution.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl">Get a Custom Quote</button>
            <button className="px-12 py-5 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all border border-white/10">Talk to a Scent Expert</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MistBoxXPage;