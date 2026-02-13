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
  PaintBrushIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS MAPPED TO H10-A-2026 ================= */
import AromaDesk1 from "../../asset/productimg/CMwebpimg/AromaDesk/1.webp";
import AromaDesk2 from "../../asset/productimg/CMwebpimg/AromaDesk/2.webp";
import AromaDesk3 from "../../asset/productimg/CMwebpimg/AromaDesk/3.webp";
import AromaDesk4 from "../../asset/productimg/CMwebpimg/AromaDesk/4.webp";

const AromaDeskPage = () => {
  const [activeImg, setActiveImg] = useState(AromaDesk1);
  const gallery = [AromaDesk1, AromaDesk2, AromaDesk3, AromaDesk4];

  // Redirection Links
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20AromaDesk%20Diffuser.`;
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
      <section className="relative pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Desktop & Lifestyle Series
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
              AromaDesk Diffuser
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed">
              Elegant Desktop Aroma Diffuser for Refined Personal Spaces
            </p>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed font-light text-justify md:text-left">
              The AromaDesk Diffuser is a compact desktop aroma diffuser designed for small spaces where style, simplicity, and controlled fragrance diffusion are essential. With its plug-in essential oil bottle design, intelligent timed diffusion, and unique sculptural appearance, this diffuser delivers efficient scenting while doubling as a modern décor element.
            </p>
            <p className="text-sm text-slate-500 mb-8 italic border-l-4 border-blue-600 pl-6 font-light">
              Ideal for desks, bedside tables, counters, and small commercial interiors, AromaDesk Diffuser provides a balanced home scent system for everyday environments.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg font-sans">
                Talk to Scent Expert <ChatBubbleLeftRightIcon className="w-4 h-4" />
              </a>
              <a href={contactPath} className="px-6 py-3 border border-slate-200 text-slate-900 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 font-sans">
                Contact Cool Max <ArrowRightIcon className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-[4/3] bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center justify-center p-8 overflow-hidden">
              <img src={activeImg} alt="AromaDesk Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="AromaDesk variant" />
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
            <p className="text-base text-slate-600 leading-relaxed max-w-4xl mx-auto font-light text-justify md:text-center">
              AromaDesk Diffuser is built for users who want a simple yet elegant home diffuser machine without complex installation or bulky hardware. Its direct plug-in oil bottle system allows quick fragrance changes, while the intelligent three-gear timing ensures consistent scent delivery throughout the day.
              This diffuser is designed to blend seamlessly into modern interiors while maintaining reliable aroma performance for compact spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY FEATURES ================= */}
      <section className="py-16 bg-[#0c101b] text-white px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HomeIcon, text: "Desktop & small space aroma diffuser" },
              { icon: BeakerIcon, text: "Plug-in essential oil bottle design" },
              { icon: ClockIcon, text: "Intelligent three-gear fragrance control" },
              { icon: Squares2X2Icon, text: "Compact and lightweight structure" },
              { icon: SpeakerXMarkIcon, text: "Quiet operation for daily use" },
              { icon: PaintBrushIcon, text: "Unique sculptural appearance" },
              { icon: ShieldCheckIcon, text: "Leak-proof certified design" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center">
                <item.icon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: DESIGN & BUILD ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight text-slate-900">Premium Design & Build Quality</h2>
        <div className="grid gap-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 text-left">
              <h3 className="text-xl font-serif mb-4 text-slate-900">Plug-In Essential Oil Bottle Design</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4 font-light text-justify md:text-left">
                The plug-in essential oil bottle system allows for rapid fragrance deployment and mess-free maintenance.
              </p>
              <div className="space-y-3">
                {["Remove and replace bottles easily", "Add essential oil quickly without mess", "Reduce maintenance time"].map((li, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-slate-600 font-medium p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" /> {li}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-slate-400 font-medium text-xs italic">Highly practical for both home and light commercial environments.</p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-6 order-1 md:order-2 h-64 flex items-center justify-center">
               <img src={AromaDesk2} alt="Plug-in Bottle Design" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-slate-100 p-6 h-64 flex items-center justify-center order-1">
               <img src={AromaDesk3} alt="Timed Diffusion Control" className="w-full h-full object-contain" />
            </div>
            <div className="order-2 text-left">
              <h3 className="text-xl font-serif mb-4 text-slate-900">Intelligent Timed Diffusion</h3>
              <h4 className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-4">Three-Gear Control System</h4>
              <p className="text-sm text-slate-500 font-light leading-relaxed mb-6 text-justify md:text-left">
                AromaDesk Diffuser features an intelligent three-gear design that controls fragrance release automatically.
              </p>
              <div className="flex gap-4">
                 <div className="p-4 bg-slate-900 text-white rounded-2xl flex items-center gap-3">
                    <BoltIcon className="w-5 h-5 text-blue-400" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Rapid spray activation</span>
                 </div>
                 <div className="p-4 bg-white border border-slate-200 rounded-2xl flex items-center gap-3">
                    <ClockIcon className="w-5 h-5 text-blue-600" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">Autonomous diffusion</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-10 rounded-[3rem] text-center relative overflow-hidden">
             <PaintBrushIcon className="w-10 h-10 text-blue-500 mx-auto mb-6" />
             <h3 className="text-2xl md:text-3xl font-serif mb-4">Compact & Unique Design</h3>
             <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed font-light text-sm text-justify md:text-center">
                Designed with a distinctive shape and texture, AromaDesk stand outs from traditional diffusers. Its clean white body combined with a refined top and mirror silver electroplated base reflects light and shadows to integrate naturally into any décor.
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
             <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm text-left">
                <SpeakerXMarkIcon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-serif mb-2 text-slate-900">Quiet Performance</h3>
                <p className="text-slate-500 font-light text-xs leading-relaxed">
                   Operating at ≤40 dB, AromaDesk runs quietly in the background, perfect for concentration-heavy areas.
                </p>
                <div className="flex gap-2 mt-4 flex-wrap">
                   {["Work desks", "Bedrooms", "Reception"].map((tag, i) => (
                     <span key={i} className="px-3 py-1 bg-slate-50 text-[8px] font-black uppercase text-slate-400 rounded-lg">{tag}</span>
                   ))}
                </div>
             </div>
             <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl text-left">
                <ShieldCheckIcon className="w-8 h-8 text-white mb-4" />
                <h3 className="text-lg font-serif mb-2 text-white">Leak-Proof & Safe</h3>
                <p className="text-blue-100 font-light text-xs leading-relaxed mb-4">
                   Includes a leak-proof certified structure ensuring clean operation and safe placement on expensive furniture.
                </p>
                <div className="flex gap-4 text-[8px] font-black uppercase tracking-widest text-blue-200">
                   <p>• Clean operation</p>
                   <p>• Safe placement</p>
                </div>
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
                  ["Product Type", "Desktop & Small Space Aroma Diffuser"],
                  ["Fragrance Capacity", "20 ml"],
                  ["Voltage / Power", "DC 5V / 2W"],
                  ["Battery Capacity", "2000 mAh"],
                  ["Coverage Area", "100 m³"],
                  ["Oil Consumption", "0.3 g/h ±5%"],
                  ["Noise Level", "≤40 dB"],
                  ["Net Weight", "0.307 kg"],
                  ["Color", "White"]
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
          {["Home desks", "Bedrooms", "Study areas", "Small retail counters", "Personal workspaces"].map((item, i) => (
            <span key={i} className="px-6 py-3 bg-white border border-slate-100 rounded-xl shadow-sm text-[10px] font-bold text-slate-700 uppercase tracking-widest">
              {item}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center text-left">
          <div className="relative h-80">
             <img src={AromaDesk4} alt="Mirror Base Detail" className="w-full h-full object-contain rounded-[2rem] shadow-xl" />
             <div className="absolute -bottom-4 -right-4 p-6 bg-blue-600 text-white rounded-2xl shadow-xl">
                <span className="text-xl font-black italic">MIRROR BASE</span>
                <p className="text-[8px] font-bold uppercase tracking-widest">Electroplated Base</p>
             </div>
          </div>
          <div className="text-left">
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight leading-tight text-slate-900">Why Choose AromaDesk Diffuser</h2>
            <div className="space-y-3">
              {[
                "Simple plug-in oil bottle replacement",
                "Intelligent timed fragrance control",
                "Compact and elegant design",
                "Quiet, energy-efficient operation",
                "Easy maintenance and daily usability"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 text-xs font-medium">{text}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-slate-400 font-medium text-[11px] italic">An excellent choice for users looking for a best home fragrance system for small spaces.</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION: COLLECTION ================= */}
      <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-[1200px] mx-auto text-center border-t border-slate-100 pt-16">
          <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900">The Desktop & Small Space Collection</h2>
          <p className="text-sm text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            AromaDesk Diffuser belongs to Cool Max’s Desktop & Small Space Aroma Diffusers category — focused on efficiency, simplicity, and aesthetic harmony.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {["OpalMist Clock", "ZenBox Mini", "AeroCube Diffuser"].map((range, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[9px] text-slate-500 cursor-pointer text-center">
                Explore {range}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION: CTA ================= */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10 tracking-tight leading-tight text-white">Enhance Small Spaces with AromaDesk</h2>
          <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a compact desktop aroma diffuser that delivers reliable fragrance without complexity?
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10 font-sans">
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

export default AromaDeskPage;