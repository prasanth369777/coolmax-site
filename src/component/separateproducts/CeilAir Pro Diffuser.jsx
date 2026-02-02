import React, { useState } from "react";
import { motion } from "framer-motion";
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
  Square3Stack3DIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import CeilAirPro1 from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/1.webp";
import CeilAirPro2 from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/2.webp";
import CeilAirPro3 from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/3.webp";
import CeilAirPro4 from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/4.webp";

const CeilAirProPage = () => {
  const [activeImg, setActiveImg] = useState(CeilAirPro1);
  const gallery = [CeilAirPro1, CeilAirPro2, CeilAirPro3, CeilAirPro4];

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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              Wall-Mounted & Ceiling Series
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              CeilAir Pro Diffuser
            </h1>
            <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">
              Wall-Mounted & Ceiling Aroma Diffuser for Commercial Spaces
            </p>
            <p className="text-slate-500 mb-10 leading-relaxed font-light">
              The CeilAir Pro Diffuser is a smart wall-mounted and ceiling aroma diffuser designed for commercial environments where floor and desk space must remain clear. Engineered for hands-free maintenance, quiet operation, and efficient fragrance diffusion, this system is ideal for corridors, elevator halls, hotels, offices, and public buildings.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg">
                Choose The Right Diffuser <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-square bg-white rounded-[3rem] border border-slate-100 shadow-xl flex items-center justify-center p-12 overflow-hidden">
              <img src={activeImg} alt="CeilAir Pro" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-16 h-16 rounded-xl border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-white opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="CeilAir variant thumb" />
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
              CeilAir Pro Diffuser is built to simplify commercial scenting. Unlike traditional ceiling aroma diffusers that require ladders for oil replacement, this model features two original oil-change options—including a hand-tightened oil replacement mechanism—allowing maintenance without climbing.
              Powered by Bluetooth app control and equipped with a high-pressure atomization nozzle, the diffuser converts essential oils into fine micro-size particles, ensuring even and effective fragrance distribution.
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
              { icon: ArrowsPointingOutIcon, text: "Wall-mounted or ceiling-mounted installation" },
              { icon: HandRaisedIcon, text: "No-climbing oil change design" },
              { icon: WrenchScrewdriverIcon, text: "Two oil replacement versions" },
              { icon: DevicePhoneMobileIcon, text: "Smart Bluetooth App control" },
              { icon: SpeakerXMarkIcon, text: "Low noise operation" },
              { icon: BeakerIcon, text: "High-pressure atomization nozzle" },
              { icon: Square3Stack3DIcon, text: "Large fragrance capacity in compact size" },
              { icon: SparklesIcon, text: "Efficient micro-particle diffusion" }
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-serif mb-6">No-Climbing Oil Replacement System</h3>
              <p className="text-slate-500 leading-relaxed mb-6 font-light">
                CeilAir Pro is designed to eliminate ladder use, greatly reducing maintenance time and operational costs. Oil replacement can be done safely and easily, making it ideal for locations with high ceilings or continuous public access.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Hotels", "Cinemas", "Office buildings", "Public corridors", "Elevator halls"].map((li, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 font-medium p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" /> {li}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2.5rem] bg-slate-100 p-8 order-1 md:order-2 flex justify-center">
               <img src={CeilAirPro2} alt="Maintenance Design" className="w-full h-80 object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[2.5rem] bg-slate-100 p-8 flex justify-center">
               <img src={CeilAirPro3} alt="App Control" className="w-full h-80 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Smart Bluetooth Control</h3>
              <p className="text-slate-500 mb-6 font-light">The built-in Bluetooth App control allows managers to maintain consistent scent levels effortlessly:</p>
              <ul className="space-y-4 mb-8">
                 {["Adjust fragrance intensity", "Set working and pause intervals", "Monitor operation remotely"].map((li, i) => (
                    <li key={i} className="flex items-center gap-4 text-slate-700 font-bold text-xs uppercase tracking-widest">
                       <CheckCircleIcon className="w-6 h-6 text-blue-600 shrink-0" /> {li}
                    </li>
                 ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-xl">
               <BeakerIcon className="w-12 h-12 text-blue-400 mb-6" />
               <h3 className="text-2xl font-serif mb-4">High-Pressure Atomization Technology</h3>
               <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">Using a high-pressure spray nozzle, CeilAir Pro quickly atomizes essential oils into micron-size aromatic particles.</p>
               <div className="space-y-2 text-[10px] font-black uppercase text-blue-100 tracking-widest">
                  <p>• Faster diffusion</p>
                  <p>• Balanced aroma strength</p>
                  <p>• Long-lasting presence</p>
               </div>
            </div>
            <div className="bg-blue-600 text-white p-10 rounded-[3rem] shadow-xl shadow-blue-100">
               <SpeakerXMarkIcon className="w-12 h-12 text-white mb-6" />
               <h3 className="text-2xl font-serif mb-4">Quiet & Discreet Operation</h3>
               <p className="text-blue-50 text-sm leading-relaxed mb-6 font-light italic">With a noise level of ≤35 dB, CeilAir Pro operates quietly in the background, making it suitable for noise-sensitive environments.</p>
               <div className="p-4 bg-white/10 rounded-2xl border border-white/10 text-center uppercase text-[10px] font-black tracking-widest">
                  Acoustically Optimized for Cinemas & Hotels
               </div>
            </div>
          </div>

          <div className="p-12 bg-white border border-slate-100 rounded-[3rem] shadow-sm flex flex-col items-center text-center">
             <ArrowsPointingOutIcon className="w-16 h-16 text-blue-600 mb-8" />
             <h3 className="text-2xl md:text-4xl font-serif mb-6">Installation Flexibility</h3>
             <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed font-light mb-8">CeilAir Pro Diffuser is designed to be ceiling-mounted or wall-mounted, allowing installation without occupying floor or desk space.</p>
             <div className="flex gap-8">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400 border-r border-slate-200 pr-8">Ceiling Mounted</span>
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Wall Mounted</span>
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
                  ["Product Name", "CeilAir Pro Diffuser"],
                  ["Product Category", "Wall-Mounted & Ceiling Aroma Diffusers"],
                  ["Applicable Space", "500 m³"],
                  ["Fragrance Capacity", "350 ml"],
                  ["Voltage / Power", "DC 12V / 8W"],
                  ["Net Weight", "0.64 kg"],
                  ["Oil Consumption", "1.3 ml/h ±5%"],
                  ["Noise Level", "≤35 dB"],
                  ["Coverage Area", "500 m³"],
                  ["Dimensions", "W147 mm × D147 mm × H188.5 mm"],
                  ["Minimum Order Quantity", "18 units"],
                  ["Color Options", "White / Black"]
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

      {/* ================= SECTION 5: IDEAL APPLICATIONS ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight">Ideal Applications</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            "Corridors", "Elevator halls", "Toilets", "Hotels", 
            "Living rooms", "Office buildings", "Meeting rooms", "Cinemas"
          ].map((item, i) => (
            <span key={i} className="px-8 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm text-sm font-bold text-slate-700 uppercase tracking-wider">
              {item}
            </span>
          ))}
        </div>
        <p className="text-slate-500 font-medium italic max-w-2xl mx-auto leading-relaxed">Its discreet ceiling installation and quiet operation ensure seamless integration into professional environments.</p>
      </section>

      {/* ================= SECTION 6: WHY CHOOSE ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <img src={CeilAirPro4} alt="CeilAir Maintenance" className="w-full h-96 object-contain rounded-[3rem] shadow-2xl" />
             <div className="absolute -bottom-6 -right-6 p-8 bg-blue-600 text-white rounded-3xl shadow-xl">
                <span className="text-3xl font-black italic">No Ladders</span>
                <p className="text-[10px] font-bold uppercase tracking-widest">Safety-First Design</p>
             </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Why Choose CeilAir Pro Diffuser</h2>
            <div className="space-y-4">
              {[
                "Eliminates ladder-based maintenance",
                "Saves time and operational cost",
                "Smart app-based fragrance control",
                "Quiet and stable operation",
                "Efficient coverage for mid-size commercial spaces"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors">
                  <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                  <span className="text-slate-700 font-medium">{text}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-slate-400 font-medium text-sm italic">CeilAir Pro is a reliable solution for businesses seeking a low-maintenance ceiling aroma diffuser with professional performance.</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: COLLECTION ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-[1400px] mx-auto text-center border-t border-slate-100 pt-24">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Part of Our Wall-Mounted & Ceiling Range</h2>
          <p className="text-slate-500 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            CeilAir Pro Diffuser belongs to Cool Max’s Wall-Mounted & Ceiling Aroma Diffusers collection—designed for efficient scenting without compromising space, safety, or aesthetics.
          </p>
          <div className="grid md:grid-cols-1 gap-6 max-w-sm mx-auto">
            <div className="p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[10px] text-slate-500 cursor-pointer text-center">
              Explore AeroMax Pro Diffuser
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: CTA ================= */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10 tracking-tight leading-tight uppercase">Upgrade Your Commercial Space</h2>
          <p className="text-slate-400 text-xl mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a ceiling aroma diffuser that reduces maintenance effort while delivering consistent fragrance?
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl">Contact Cool Max for expert guidance</button>
            <button className="px-12 py-5 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all">Choose the right diffuser for your space</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CeilAirProPage;