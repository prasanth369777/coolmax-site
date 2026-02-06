import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  SpeakerXMarkIcon, 
  SparklesIcon, 
  BoltIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  Battery100Icon,
  ShieldCheckIcon,
  TruckIcon,
  CommandLineIcon,
  ArrowsPointingOutIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import NovaCar1 from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/1.webp";
import NovaCar2 from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/2.webp";
import NovaCar3 from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/3.webp";
import NovaCar4 from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/4.webp";

const NovaCarPage = () => {
  const [activeImg, setActiveImg] = useState(NovaCar1);
  const gallery = [NovaCar1, NovaCar2, NovaCar3, NovaCar4];

  // Redirection Links
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20NovaCar%20Diffuser.`;
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
              Premium Induction Series
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
              NovaCar Diffuser
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed">
              Smart Car Aromatherapy Diffuser for Continuous Freshness
            </p>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed font-light">
              The NovaCar Diffuser is a premium car aroma diffuser designed to deliver smooth, consistent fragrance diffusion throughout your driving experience. Built with an all-metal aviation aluminum body and intelligent induction technology, NovaCar Diffuser automatically scents your car while you drive, creating a refined and refreshing atmosphere without manual operation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg">
                Talk to Scent Expert <ChatBubbleLeftRightIcon className="w-4 h-4" />
              </a>
              <a href={contactPath} className="px-6 py-3 border border-slate-200 text-slate-900 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2">
                Contact Cool Max <ArrowRightIcon className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-[4/3] bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center justify-center p-8 overflow-hidden">
              <img src={activeImg} alt="NovaCar Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="NovaCar variant thumb" />
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
              NovaCar Diffuser is engineered for automotive aromatherapy, where reliability, safety, and consistent fragrance coverage are essential. Its compact cylindrical design fits seamlessly into car cup holders while its intelligent diffusion system ensures fragrance is evenly distributed across the entire vehicle interior.
              With automatic start-stop functionality and efficient oil consumption, NovaCar Diffuser delivers a clean and balanced scent experience without distraction.
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
              { icon: SparklesIcon, text: "Premium car aromatherapy diffuser" },
              { icon: ShieldCheckIcon, text: "All-metal aviation aluminum body" },
              { icon: CommandLineIcon, text: "Intelligent induction automatic start-stop" },
              { icon: Battery100Icon, text: "Built-in rechargeable lithium battery" },
              { icon: BeakerIcon, text: "Low oil consumption with efficient diffusion" },
              { icon: SpeakerXMarkIcon, text: "Quiet and stable operation" },
              { icon: ArrowsPointingOutIcon, text: "Compact and travel-friendly design" }
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
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight">Premium Metal Design & Build Quality</h2>
        
        <div className="grid gap-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl font-serif mb-4 text-slate-900">All-Metal Aviation Aluminum Body</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">
                NovaCar Diffuser features a full metal body made from aviation-grade aluminum, finished using a sand-blasting process to enhance surface texture and durability. This construction makes the diffuser resistant to dust, wear, and daily handling inside the vehicle.
                The refined cylindrical design adds a premium feel to car interiors while ensuring long-term durability.
              </p>
              <h4 className="text-lg font-serif mb-3">Elegant Color Options</h4>
              <div className="flex flex-wrap gap-2">
                {["Black", "Silver", "Grey-Green", "Classic Silver", "Silver Chrome"].map((color, i) => (
                  <span key={i} className="px-3 py-1.5 bg-slate-100 rounded-full text-[10px] font-black uppercase text-slate-600">{color}</span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-slate-100 p-6 order-1 md:order-2 h-64 flex items-center justify-center">
               <img src={NovaCar2} alt="NovaCar Build" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-slate-100 p-6 h-64 flex items-center justify-center">
               <img src={NovaCar3} alt="NovaCar Tech" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4 text-slate-900">Intelligent Diffusion Technology</h3>
              <div className="bg-slate-900 text-white p-6 rounded-2xl mb-4">
                <h4 className="text-lg font-serif mb-3 text-blue-400 flex items-center gap-3">
                  <CommandLineIcon className="w-6 h-6"/> Automatic Start-Stop
                </h4>
                <p className="text-slate-300 text-xs font-light leading-relaxed mb-4">Equipped with an intelligent induction system that automatically starts diffusion when the vehicle is in motion.</p>
                <div className="space-y-2">
                  {["Scent release only when needed", "Hands-free operation"].map((li, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-200">
                      <CheckCircleIcon className="w-4 h-4 text-blue-500 flex-shrink-0" /> {li}
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-slate-500 font-light text-xs italic">Metal atomizer ensures fine dispersion without becoming overpowering.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm text-left">
              <Battery100Icon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-serif mb-2">Battery Performance</h3>
              <p className="text-slate-500 text-xs font-light">2000mAh built-in battery delivering 12+ hours of usage from a single 3.5h charge.</p>
            </div>
            <div className="p-8 bg-blue-600 text-white rounded-[2rem] shadow-xl text-left">
              <SpeakerXMarkIcon className="w-8 h-8 text-white mb-4" />
              <h3 className="text-lg font-serif mb-2 text-white">Quiet & Safe</h3>
              <p className="text-blue-100 text-xs font-light italic">Noise level ≤40 dB ensures silent performance with a leak-proof stable build.</p>
            </div>
            <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm text-left">
              <BoltIcon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-serif mb-2">Energy Efficient</h3>
              <p className="text-slate-500 text-xs font-light">Operates at DC 5V / 2W, ensuring consistent fragrance output with low consumption.</p>
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
                <tr className="bg-slate-900 text-white text-left">
                  <th className="p-4 font-bold uppercase tracking-widest text-[10px]">Specification</th>
                  <th className="p-4 font-bold uppercase tracking-widest text-[10px]">Details</th>
                </tr>
              </thead>
              <tbody className="text-xs text-left">
                {[
                  ["Product Type", "Car Aromatherapy Diffuser"],
                  ["Fragrance Capacity", "20 ml"],
                  ["Voltage / Power", "DC 5V / 2W"],
                  ["Battery Capacity", "2000 mAh"],
                  ["Working Cycle", "15s ON / 200s OFF"],
                  ["Coverage Area", "Up to 100 m³"],
                  ["Noise Level", "≤40 dB"],
                  ["Net Weight", "0.352 kg"],
                  ["Dimensions", "Ø70 × H145.5 mm"],
                  ["Material", "Aviation aluminum"]
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

      {/* ================= SECTION: HOW IT WORKS ================= */}
      <section className="py-16 bg-slate-900 text-white px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center text-left">
          <div>
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight text-blue-400">How NovaCar Works</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
              NovaCar Diffuser uses intelligent motion sensing combined with fine atomization technology. Once the vehicle starts moving, fragrance is released gradually and evenly into the air, filling the cabin with a pleasant aroma without sudden bursts.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["Smooth delivery", "Balanced intensity", "Efficient usage"].map((text, i) => (
                <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/10 text-center font-black uppercase text-[8px] text-blue-200 tracking-widest">{text}</div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 flex flex-col items-center">
             <BeakerIcon className="w-12 h-12 text-blue-500 mb-6" />
             <img src={NovaCar4} alt="Internal Mechanism" className="w-full h-40 object-contain rounded-xl opacity-80" />
             <p className="text-[10px] font-black uppercase mt-4 tracking-widest text-blue-200">Smart Sensing Atomization</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: IDEAL APPLICATIONS ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight">Ideal Applications</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { icon: TruckIcon, label: "Personal vehicles" },
            { icon: CommandLineIcon, label: "Daily commuting" },
            { icon: ShieldCheckIcon, label: "Professional drivers" },
            { icon: SparklesIcon, label: "Long-distance travel" }
          ].map((item, i) => (
            <div key={i} className="px-6 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center gap-3 min-w-[200px] justify-center">
                <item.icon className="w-5 h-5 text-blue-600" />
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 font-medium italic">Specifically designed for automotive environments where controlled diffusion enhances comfort.</p>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight">Why Choose NovaCar?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Automatic scent release while driving",
            "Premium all-metal construction",
            "Elegant, compact design",
            "Long battery life with fast charging",
            "Quiet and stable performance",
            "Efficient oil usage"
          ].map((text, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <CheckCircleIcon className="w-6 h-6 text-blue-600 mb-4" />
              <p className="text-slate-700 text-sm font-medium leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MAINTENANCE ================= */}
      <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-[1000px] mx-auto grid lg:grid-cols-2 gap-6 text-left">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <WrenchScrewdriverIcon className="w-5 h-5 text-blue-600" /> Maintenance
            </h4>
            <ul className="space-y-2 text-xs text-slate-500 font-light">
               <li>• Easy fragrance oil replacement</li>
               <li>• Minimal cleaning required</li>
               <li>• Durable internal components</li>
            </ul>
          </div>
          <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">Cool Max Support</h4>
            <ul className="space-y-2 text-xs text-blue-50 font-light">
               <li>• Fragrance refill options</li>
               <li>• Product usage guidance</li>
               <li>• Technical support & assistance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= COLLECTION RANGE ================= */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-[1200px] mx-auto text-center border-t border-slate-100 pt-16">
          <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight">The Car Aroma Collection</h2>
          <p className="text-sm text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            NovaCar Diffuser is part of Cool Max’s Car Aroma Diffusers range, designed to provide safe, intelligent, and effective fragrance solutions for vehicles.
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {["DriveScent Diffuser", "VentoCar Diffuser", "DeskScent Diffuser"].map((range, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[9px] text-slate-500 cursor-pointer">
                Explore {range}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA (MASTER REDIRECT) ================= */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10 tracking-tight leading-tight">Get Started with NovaCar</h2>
          <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a smart car aromatherapy diffuser that works automatically while you drive? Our team is ready to help you elevate your driving experience.
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

export default NovaCarPage;