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
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import Titan1 from "../../asset/productimg/CMwebpimg/Titan Diffuser/1.webp";
import Titan2 from "../../asset/productimg/CMwebpimg/Titan Diffuser/2.webp";
import Titan3 from "../../asset/productimg/CMwebpimg/Titan Diffuser/3.webp";
import Titan4 from "../../asset/productimg/CMwebpimg/Titan Diffuser/4.webp";

const MistBoxXPage = () => {
  const [activeImg, setActiveImg] = useState(Titan1);
  const gallery = [Titan1, Titan2, Titan3, Titan4];

  // Redirection Links
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20MistBox%20X%20Diffuser.`;
  const contactPath = "/contact";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* ================= HERO SECTION (REDUCED HEIGHT) ================= */}
      <section className="relative pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              High-Capacity Commercial System
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
              MistBox X Diffuser
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed">
              High-Capacity Commercial Aroma Diffuser for Large Spaces & HVAC Systems
            </p>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed font-light">
              The MistBox X Diffuser is a powerful commercial aroma diffuser designed for businesses that require wide-area fragrance coverage, stable performance, and advanced control options. Built for demanding commercial environments, this scent diffuser machine delivers consistent scent diffusion across large indoor spaces while maintaining low energy consumption and quiet operation.
            </p>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed border-l-4 border-blue-600 pl-6 italic font-light">
              Ideal for hotels, office buildings, hospitals, theatres, shopping areas, and commercial facilities, MistBox X Diffuser supports both standalone use and HVAC scenting, making it a flexible and scalable solution for professional scent marketing needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg">
                Talk to Scent Expert <ChatBubbleLeftRightIcon className="w-4 h-4" />
              </a>
              <a href={contactPath} className="px-6 py-3 border border-slate-200 text-slate-900 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2">
                Request Details <ArrowRightIcon className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-[4/3] bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center justify-center p-8 overflow-hidden">
              <img src={activeImg} alt="MistBox X Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
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
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900">Product Overview</h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
              The MistBox X Diffuser is engineered with nano-level fine atomization technology that transforms fragrance oil into ultra-fine particles. This allows the scent to spread evenly and naturally without residue or overpowering concentration.
              Designed with industrial-grade materials and a built-in power pump, the system ensures reliable fragrance diffusion even in large commercial spaces. Its clean, modern design integrates seamlessly into professional interiors while remaining discreet and functional.
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
              { icon: BuildingOfficeIcon, text: "Commercial-grade aroma scent diffuser" },
              { icon: BeakerIcon, text: "Covers up to 4,000 m³" },
              { icon: WrenchScrewdriverIcon, text: "Supports HVAC scent diffuser integration" },
              { icon: WifiIcon, text: "WiFi & Bluetooth remote control" },
              { icon: BoltIcon, text: "Built-in power pump for stable diffusion" },
              { icon: CpuChipIcon, text: "Ultra-fine nano atomization technology" },
              { icon: SpeakerXMarkIcon, text: "Low noise operation for professional spaces" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: CORE FEATURES ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight">Key Features & Benefits</h2>
        <div className="grid gap-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl font-serif mb-4">Nano-Level Fine Atomization</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4 font-light">
                MistBox X Diffuser uses advanced nano-level atomization technology, breaking fragrance oil into extremely small particles. This ensures:
              </p>
              <ul className="space-y-2">
                {["Even scent distribution", "Faster diffusion across large spaces", "No wet mist or residue"].map((li, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600 font-medium text-xs">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600" /> {li}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-blue-600 font-bold italic">Balance and consistency for professional commercial applications.</p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-6 order-1 md:order-2 h-64 flex items-center justify-center">
               <img src={Titan2} alt="Nano Atomization" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-slate-100 p-6 h-64 flex items-center justify-center">
               <img src={Titan3} alt="Smart Control" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4 text-slate-900">WiFi & Bluetooth Remote Control</h3>
              <p className="text-sm text-slate-500 mb-4 font-light">The diffuser supports WiFi and Bluetooth control, allowing facility managers to:</p>
              <div className="grid grid-cols-2 gap-2">
                {["Set working schedules", "Adjust fragrance concentration", "Control multiple units", "Manage 24h cycles"].map((li, i) => (
                   <div key={i} className="flex items-center gap-2 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                      <WifiIcon className="w-4 h-4 text-blue-600" />
                      <span className="text-slate-700 text-[10px] font-bold uppercase">{li}</span>
                   </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] col-span-2">
              <h3 className="text-xl font-serif mb-4 text-blue-400">HVAC Connection Capability</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">Connect directly to HVAC systems to distribute fragrance through existing airflow, ensuring uniform coverage across multiple zones without fluctuation.</p>
              <div className="flex gap-4 text-[9px] font-black uppercase tracking-widest text-blue-200">
                <p>• Standalone Mode</p>
                <p>• HVAC Integration</p>
                <p>• High-Power Built-In Pump</p>
              </div>
            </div>
            <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm flex flex-col justify-center">
              <ShieldCheckIcon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-serif mb-2">Industrial Build</h3>
              <p className="text-slate-500 text-xs font-light leading-relaxed">Anti-corrosive materials ensuring long service life and continuous commercial operation.</p>
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
                  ["Product Type", "Commercial Aroma Diffuser"],
                  ["Fragrance Capacity", "1000 ml"],
                  ["Coverage Area", "3,000 – 4,000 m³"],
                  ["Power Supply", "DC 12V / 15W"],
                  ["Noise Level", "≤45 dB"],
                  ["Oil Consumption", "Approx. 5 ml/hr"],
                  ["Installation", "Standalone or HVAC Connection"],
                  ["Control Options", "WiFi & Bluetooth Remote"]
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

      {/* ================= SECTION 5: APPLICATIONS & HOW IT WORKS ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-serif mb-10 tracking-tight">Ideal Applications</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
          {[
            "Office buildings", "Hotel lobbies", "Hospitals", "Cinemas", 
            "Shopping malls", "KTVs", "Airports"
          ].map((item, i) => (
            <span key={i} className="px-6 py-3 bg-white border border-slate-100 rounded-xl shadow-sm text-[10px] font-bold text-slate-700 uppercase tracking-widest">
              {item}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center text-left bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white">
          <div>
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight">How MistBox X Works</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
              Using cold-air atomization without heat or water, fragrance quality remains intact while oil is converted into micro-particles for consistent coverage through internal pumps or HVAC.
            </p>
            <div className="flex gap-4">
               {["Consistent", "Natural", "Residue-Free"].map((val, idx) => (
                 <div key={idx} className="p-3 bg-white/5 rounded-xl text-[9px] font-black uppercase text-blue-400 border border-white/10">{val}</div>
               ))}
            </div>
          </div>
          <div className="bg-blue-600/10 p-10 rounded-[2rem] border border-blue-500/20 text-center">
             <BeakerIcon className="w-12 h-12 text-blue-500 mb-6 mx-auto" />
             <h4 className="text-lg font-serif mb-2">Cold-Air Nano Tech</h4>
             <p className="text-[10px] font-light text-blue-100">Cleaner, longer-lasting wide-area scent experience.</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight">Why Choose MistBox X?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Designed for large-area commercial scenting",
            "Flexible installation for multi-zone spaces",
            "Smart control for easy management",
            "Reliable continuous operation performance",
            "Supports professional scent marketing",
            "Backed by technical expertise"
          ].map((text, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <CheckCircleIcon className="w-6 h-6 text-blue-600 mb-4" />
              <p className="text-slate-700 text-sm font-medium leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MAINTENANCE & SUPPORT ================= */}
      <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-[1000px] mx-auto grid lg:grid-cols-2 gap-6 text-left">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <WrenchScrewdriverIcon className="w-5 h-5 text-blue-600" /> Maintenance
            </h4>
            <ul className="space-y-2 text-xs text-slate-500 font-light">
               <li>• Simple fragrance oil replacement</li>
               <li>• Minimal cleaning requirements</li>
               <li>• Long-lasting internal components</li>
            </ul>
          </div>
          <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">Cool Max Support</h4>
            <ul className="space-y-2 text-xs text-blue-50 font-light">
               <li>• HVAC Installation & Usage guidance</li>
               <li>• Ongoing refill & maintenance support</li>
               <li>• Custom scent strategy consulting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SECTION: COLLECTION (MASTER REDIRECT) ================= */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10 tracking-tight leading-tight">Speak with Our Scent Specialists</h2>
          <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Need a commercial aroma diffuser that fits your space perfectly? Our experts will help you choose the right configuration and fragrance solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-white text-slate-900 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-2">
               <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Expert
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

export default MistBoxXPage;