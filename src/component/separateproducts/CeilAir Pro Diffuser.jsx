import React, { useState } from "react";
import { motion } from "framer-motion";
// Add 'Link' inside the curly braces
import { Link } from "react-router-dom";
import { 
  SpeakerXMarkIcon, 
  SparklesIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  DevicePhoneMobileIcon,
  ArrowsPointingOutIcon,
  HandRaisedIcon,
  Square3Stack3DIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS MAPPED TO M45 ================= */
import CeilAirPro1 from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/1.webp";
import CeilAirPro2 from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/2.webp";
import CeilAirPro3 from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/3.webp";
import CeilAirPro4 from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/4.webp";

const CeilAirProPage = () => {
  const [activeImg, setActiveImg] = useState(CeilAirPro1);
  const gallery = [CeilAirPro1, CeilAirPro2, CeilAirPro3, CeilAirPro4];

  // Redirection Links
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20CeilAir%20Pro%20Diffuser.`;
  const contactPath = "/contact";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans selection:bg-blue-100 overflow-hidden text-left">
      
      {/* ================= HERO SECTION (OPTIMIZED HEIGHT) ================= */}
      <section className="relative pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto text-left">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <SparklesIcon className="w-4 h-4" /> Wall-Mounted & Ceiling Series
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
              CeilAir Pro Diffuser
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed">
              Wall-Mounted & Ceiling Aroma Diffuser for Commercial Spaces
            </p>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed font-light text-justify md:text-left">
              The CeilAir Pro Diffuser is a smart wall-mounted and ceiling aroma diffuser designed for commercial environments where floor and desk space must remain clear. Engineered for hands-free maintenance, quiet operation, and efficient fragrance diffusion, this system is ideal for corridors, elevator halls, hotels, offices, and public buildings.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 font-sans">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg">
                Talk to Scent Expert <ChatBubbleLeftRightIcon className="w-4 h-4" />
              </a>
              <a href={contactPath} className="px-6 py-3 border border-slate-200 text-slate-900 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2">
                Choose Right System <ArrowRightIcon className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-[4/3] bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center justify-center p-8 overflow-hidden">
              <img src={activeImg} alt="CeilAir Pro" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="CeilAir variant thumb" />
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
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-center">Product Overview</h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-4xl mx-auto font-light text-justify md:text-center">
              CeilAir Pro Diffuser is built to simplify commercial scenting. Unlike traditional ceiling aroma diffusers that require ladders for oil replacement, this model features two original oil-change options—including a hand-tightened oil replacement mechanism—allowing maintenance without climbing.
              Powered by Bluetooth app control and equipped with a high-pressure atomization nozzle, the diffuser converts essential oils into fine micro-size particles, ensuring even and effective fragrance distribution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY FEATURES ================= */}
      <section className="py-16 bg-[#0c101b] text-white px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ArrowsPointingOutIcon, text: "Wall-mounted or ceiling-mounted installation" },
              { icon: HandRaisedIcon, text: "No-climbing oil change design" },
              { icon: WrenchScrewdriverIcon, text: "Two oil replacement versions" },
              { icon: DevicePhoneMobileIcon, text: "Smart Bluetooth App control" },
              { icon: SpeakerXMarkIcon, text: "Low noise operation" },
              { icon: BeakerIcon, text: "High-pressure atomization nozzle" },
              { icon: Square3Stack3DIcon, text: "Large fragrance capacity in compact size" },
              { icon: SparklesIcon, text: "Efficient micro-particle diffusion" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: DESIGN & BUILD ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight">Premium Design & Build Quality</h2>
        
        <div className="grid gap-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 text-left">
              <h3 className="text-xl font-serif mb-4 text-slate-900">No-Climbing Oil Replacement System</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light text-justify md:text-left">
                CeilAir Pro is designed to eliminate ladder use, greatly reducing maintenance time and operational costs. Oil replacement can be done safely and easily, making it ideal for locations with high ceilings or continuous public access.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {["Hotels", "Cinemas", "Office buildings", "Public corridors", "Elevator halls"].map((li, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium p-2 bg-white rounded-lg border border-slate-100 shadow-sm">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" /> {li}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-slate-100 p-6 order-1 md:order-2 h-64 flex items-center justify-center">
               <img src={CeilAirPro2} alt="Maintenance Design" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-slate-100 p-6 h-64 flex items-center justify-center order-1">
               <img src={CeilAirPro3} alt="App Control" className="w-full h-full object-contain" />
            </div>
            <div className="order-2 text-left">
              <h3 className="text-xl font-serif mb-4 text-slate-900">Smart Bluetooth Control</h3>
              <p className="text-sm text-slate-500 mb-4 font-light">The built-in Bluetooth App control allows managers to maintain consistent scent levels effortlessly:</p>
              <ul className="space-y-3 mb-6">
                 {["Adjust fragrance intensity", "Set working and pause intervals", "Monitor operation remotely"].map((li, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-bold text-[10px] uppercase tracking-widest text-left">
                       <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" /> {li}
                    </li>
                 ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl">
               <BeakerIcon className="w-10 h-10 text-blue-400 mb-4" />
               <h3 className="text-xl font-serif mb-2">High-Pressure Atomization Technology</h3>
               <p className="text-slate-400 text-xs leading-relaxed mb-4 font-light">Using a high-pressure spray nozzle, CeilAir Pro quickly atomizes essential oils into micron-size aromatic particles.</p>
               <div className="flex gap-4 text-[9px] font-black uppercase text-blue-100 tracking-widest">
                  <p>• Faster diffusion</p>
                  <p>• Balanced strength</p>
                  <p>• Micron Particles</p>
               </div>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-[2rem] shadow-xl shadow-blue-100">
               <SpeakerXMarkIcon className="w-10 h-10 text-white mb-4" />
               <h3 className="text-xl font-serif mb-2 text-white">Quiet & Discreet Operation</h3>
               <p className="text-blue-50 text-xs leading-relaxed mb-4 font-light italic">With a noise level of ≤35 dB, CeilAir Pro operates quietly in the background, making it suitable for noise-sensitive environments.</p>
               <div className="p-3 bg-white/10 rounded-xl border border-white/10 inline-block">
                  <p className="text-[10px] font-bold uppercase tracking-widest">Acoustically Optimized</p>
               </div>
            </div>
          </div>

          <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center">
             <ArrowsPointingOutIcon className="w-12 h-12 text-blue-600 mb-6" />
             <h3 className="text-xl md:text-3xl font-serif mb-4 text-slate-900">Installation Flexibility</h3>
             <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed font-light mb-6">CeilAir Pro Diffuser is designed to be ceiling-mounted or wall-mounted, allowing installation without occupying floor or desk space.</p>
             <div className="flex gap-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-r border-slate-200 pr-8">Ceiling Mounted</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Wall Mounted</span>
             </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: TECHNICAL SPECIFICATIONS ================= */}
      <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif mb-10 text-center tracking-tight text-slate-900">Technical Specifications</h2>
          <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm text-left">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-bold uppercase tracking-widest text-[10px]">Specification</th>
                  <th className="p-4 font-bold uppercase tracking-widest text-[10px]">Details</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {[
                  ["Product Name", "CeilAir Pro Diffuser"],
                  ["Product Category", "Wall-Mounted & Ceiling Aroma Diffusers"],
                  ["Applicable Space", "500 m³"],
                  ["Fragrance Capacity", "350 ml"],
                  ["Voltage / Power", "DC 12V / 8W"],
                  ["Oil Consumption", "1.3 ml/h ±5%"],
                  ["Noise Level", "≤35 dB"],
                  ["Dimensions", "W147 mm × D147 mm × H188.5 mm"],
                  ["Color Options", "White / Black"]
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

      {/* ================= SECTION: IDEAL APPLICATIONS ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight text-slate-900">Ideal Applications</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["Corridors", "Elevator halls", "Toilets", "Hotels", "Living rooms", "Office buildings", "Meeting rooms", "Cinemas"].map((item, i) => (
            <span key={i} className="px-6 py-3 bg-white border border-slate-100 rounded-xl shadow-sm text-[10px] font-bold text-slate-700 uppercase tracking-widest">
              {item}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center text-left">
          <div className="relative h-80">
             <img src={CeilAirPro4} alt="CeilAir Maintenance" className="w-full h-full object-contain rounded-[2rem] shadow-xl" />
             <div className="absolute -bottom-4 -right-4 p-6 bg-blue-600 text-white rounded-2xl shadow-xl">
                <span className="text-xl font-black italic uppercase">No Ladders</span>
                <p className="text-[8px] font-bold uppercase tracking-widest">Safety-First Design</p>
             </div>
          </div>
          <div className="text-left">
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight leading-tight text-slate-900">Why Choose CeilAir Pro Diffuser</h2>
            <div className="space-y-3">
              {[
                "Eliminates ladder-based maintenance",
                "Saves time and operational cost",
                "Smart app-based fragrance control",
                "Quiet and stable operation",
                "Efficient coverage for mid-size commercial spaces"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 text-xs font-medium">{text}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-slate-400 font-medium text-[11px] italic">CeilAir Pro is a reliable solution for businesses seeking a low-maintenance ceiling aroma diffuser.</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION: COLLECTION ================= */}
      <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-[1200px] mx-auto text-center border-t border-slate-100 pt-16">
          <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900">The Wall-Mounted & Ceiling Range</h2>
          <p className="text-sm text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            CeilAir Pro Diffuser belongs to Cool Max’s Wall-Mounted & Ceiling Aroma Diffusers collection—designed for efficient scenting without compromising space or safety.
          </p>
          <div className="max-w-xs mx-auto">
            <Link to="/product/aeromax-pro" className="block p-6 rounded-2xl bg-white border border-slate-100 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[9px] text-slate-500 cursor-pointer">
              Explore AeroMax Pro Diffuser
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SECTION: CTA (MASTER REDIRECT) ================= */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10 tracking-tight leading-tight uppercase text-white">Upgrade Your Commercial Space</h2>
          <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a ceiling aroma diffuser that reduces maintenance effort while delivering consistent fragrance?
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10 font-sans">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-white text-slate-900 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-2">
               <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Expert
            </a>
            <a href={contactPath} className="px-10 py-4 bg-white/5 text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2 font-sans">
              Contact Cool Max <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CeilAirProPage;