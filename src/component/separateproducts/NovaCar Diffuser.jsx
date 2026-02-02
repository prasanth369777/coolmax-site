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
  
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import NovaCar1 from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/1.webp";
import NovaCar2 from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/2.webp";
import NovaCar3 from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/3.webp";
import NovaCar4 from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/4.webp";

const NovaCarPage = () => {
  const [activeImg, setActiveImg] = useState(NovaCar1);
  const gallery = [NovaCar1, NovaCar2, NovaCar3, NovaCar4];

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
              Premium Induction Series
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              NovaCar Diffuser
            </h1>
            <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">
              Smart Car Aromatherapy Diffuser for Continuous Freshness
            </p>
            <p className="text-slate-500 mb-10 leading-relaxed font-light">
              The NovaCar Diffuser is a premium car aroma diffuser designed to deliver smooth, consistent fragrance diffusion throughout your driving experience. Built with an all-metal aviation aluminum body and intelligent induction technology, NovaCar Diffuser automatically scents your car while you drive, creating a refined and refreshing atmosphere without manual operation.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg shadow-slate-200">
                Contact Cool Max Today <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-square bg-white rounded-[3rem] border border-slate-100 shadow-xl flex items-center justify-center p-12 overflow-hidden">
              <img src={activeImg} alt="NovaCar Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-16 h-20 rounded-xl border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-white opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="NovaCar variant thumb" />
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
              NovaCar Diffuser is engineered for automotive aromatherapy, where reliability, safety, and consistent fragrance coverage are essential. Its compact cylindrical design fits seamlessly into car cup holders while its intelligent diffusion system ensures fragrance is evenly distributed across the entire vehicle interior.
              With automatic start-stop functionality and efficient oil consumption, NovaCar Diffuser delivers a clean and balanced scent experience without distraction.
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
              { icon: SparklesIcon, text: "Premium car aromatherapy diffuser" },
              { icon: ShieldCheckIcon, text: "All-metal aviation aluminum body" },
              { icon: CommandLineIcon, text: "Intelligent induction automatic start-stop" },
              { icon: Battery100Icon, text: "Built-in rechargeable lithium battery" },
              { icon: BeakerIcon, text: "Low oil consumption with efficient diffusion" },
              { icon: SpeakerXMarkIcon, text: "Quiet and stable operation" },
              { icon: ArrowsPointingOutIcon, text: "Compact and travel-friendly design" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-10 h-10 text-blue-500 mx-auto mb-6" />
                <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: PREMIUM METAL DESIGN ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-20 text-center tracking-tight">Premium Metal Design & Build Quality</h2>
        
        <div className="grid gap-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-serif mb-6">All-Metal Aviation Aluminum Body</h3>
              <p className="text-slate-500 leading-relaxed mb-6 font-light">
                NovaCar Diffuser features a full metal body made from aviation-grade aluminum, finished using a sand-blasting process to enhance surface texture and durability. This construction makes the diffuser resistant to dust, wear, and daily handling inside the vehicle.
                The refined cylindrical design adds a premium feel to car interiors while ensuring long-term durability.
              </p>
              <h4 className="text-xl font-serif mb-4">Elegant Color Options</h4>
              <p className="text-slate-400 text-sm mb-6">Available in multiple finishes to match different vehicle styles:</p>
              <div className="flex flex-wrap gap-3">
                {["Black", "Silver", "Grey-Green", "Classic Silver", "Silver Chrome"].map((color, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-100 rounded-full text-xs font-bold text-slate-600">{color}</span>
                ))}
              </div>
            </div>
            <div className="rounded-[2.5rem] bg-slate-100 p-8 order-1 md:order-2 flex justify-center">
               <img src={NovaCar2} alt="NovaCar Build" className="w-full h-80 object-contain transition-transform duration-700 hover:scale-105" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[2.5rem] bg-slate-100 p-8 flex justify-center">
               <img src={NovaCar3} alt="NovaCar Tech" className="w-full h-80 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Intelligent Fragrance Diffusion Technology</h3>
              <div className="bg-slate-900 text-white p-8 rounded-3xl mb-8">
                <h4 className="text-xl font-serif mb-4 text-blue-400 flex items-center gap-3">
                  <CommandLineIcon className="w-8 h-8"/> Induction Automatic Start-Stop
                </h4>
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">Equipped with an intelligent induction system that automatically starts fragrance diffusion when the vehicle is in motion and stops when driving ends.</p>
                <div className="grid grid-cols-1 gap-4">
                  {["Fragrance released only when needed", "No unnecessary oil consumption", "Hands-free operation"].map((li, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-blue-100">
                      <CheckCircleIcon className="w-5 h-5 text-blue-500" /> {li}
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-serif mb-4">Efficient Atomization Performance</h3>
              <p className="text-slate-500 font-light leading-relaxed mb-6 italic">The uniquely designed metal atomizer ensures fine fragrance dispersion, allowing the scent to travel smoothly without becoming overpowering.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm flex flex-col justify-center">
              <Battery100Icon className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-serif mb-4">Battery Performance</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">2000mAh built-in battery delivering long-lasting performance on a single charge.</p>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                <p>• 3.5 Hours Charging</p>
                <p>• 12+ Hours Usage</p>
              </div>
            </div>
            <div className="bg-blue-600 text-white p-10 rounded-[3rem] shadow-xl shadow-blue-100 flex flex-col justify-center">
              <SpeakerXMarkIcon className="w-10 h-10 text-white mb-6" />
              <h3 className="text-xl font-serif mb-4">Quiet & Safe Operation</h3>
              <p className="text-blue-50 text-sm leading-relaxed italic">Noise level ≤40 dB ensures silent performance. Leak-proof design and stable atomization make it safe for continuous travel use.</p>
            </div>
            <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm flex flex-col justify-center">
              <BoltIcon className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-serif mb-4">Low Power Consumption</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Operates at DC 5V / 2W, ensuring energy-efficient performance while maintaining consistent fragrance output.</p>
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
                  ["Product Type", "Car Aromatherapy Diffuser"],
                  ["Fragrance Capacity", "20 ml"],
                  ["Voltage / Power", "DC 5V / 2W"],
                  ["Battery Capacity", "2000 mAh"],
                  ["Oil Consumption", "0.03 g/h ±5%"],
                  ["Working Cycle", "15s ON / 200s OFF"],
                  ["Coverage Area", "Up to 100 m³"],
                  ["Noise Level", "≤40 dB"],
                  ["Net Weight", "0.352 kg"],
                  ["Dimensions", "Ø70 × H145.5 mm"],
                  ["Material", "Aviation aluminum"],
                  ["Standard Carton", "50 units / carton"]
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

      {/* ================= SECTION 5: HOW IT WORKS ================= */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight tracking-tight">How NovaCar Diffuser Works</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
              NovaCar Diffuser uses intelligent motion sensing combined with fine atomization technology. Once the vehicle starts moving, fragrance is released gradually and evenly into the air, filling the cabin with a pleasant aroma without sudden bursts.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["Smooth delivery", "Balanced intensity", "Efficient oil usage"].map((text, i) => (
                <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10 text-center font-black uppercase text-[10px] text-blue-400 tracking-widest">{text}</div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 text-center">
             <BeakerIcon className="w-16 h-16 text-blue-500 mb-8 mx-auto" />
             <h4 className="text-2xl font-serif text-center mb-8 tracking-tight">Smart Sensing Atomization</h4>
             
             <img src={NovaCar4} alt="Internal Mechanism" className="w-full h-64 object-contain rounded-2xl opacity-80" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: IDEAL APPLICATIONS ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight">Ideal Applications</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { icon: TruckIcon, label: "Personal vehicles" },
            { icon: CommandLineIcon, label: "Daily commuting" },
            { icon: ShieldCheckIcon, label: "Professional drivers" },
            { icon: SparklesIcon, label: "Long-distance travel" }
          ].map((item, i) => (
            <div key={i} className="px-8 py-6 bg-white border border-slate-100 rounded-[2rem] shadow-sm flex flex-col items-center gap-4 min-w-[240px]">
                <item.icon className="w-8 h-8 text-blue-600" />
                <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>
        <p className="text-slate-500 font-medium italic max-w-2xl mx-auto leading-relaxed">It is specifically designed for automotive environments where controlled fragrance diffusion enhances comfort.</p>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center tracking-tight">Why Choose NovaCar Diffuser</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Automatic scent release while driving",
            "Premium all-metal construction",
            "Elegant, compact design",
            "Long battery life with fast charging",
            "Quiet and stable performance",
            "Efficient oil usage"
          ].map((text, i) => (
            <div key={i} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-blue-600 transition-colors">
              <CheckCircleIcon className="w-8 h-8 text-blue-600 mb-6" />
              <p className="text-slate-700 font-medium leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto italic">NovaCar Diffuser is a perfect choice for users seeking a smart, stylish, and dependable car aroma diffuser.</p>
      </section>

      {/* ================= SECTION 8: MAINTENANCE & CARE ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 text-center lg:text-left">
          <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100 flex flex-col justify-center">
            <h4 className="text-xl font-bold mb-8 flex items-center justify-center lg:justify-start gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-blue-600" /> Maintenance & Care
            </h4>
            <ul className="space-y-4 text-slate-500 font-medium">
               <li>• Easy fragrance oil replacement</li>
               <li>• Minimal cleaning required</li>
               <li>• Durable internal components for long-term use</li>
            </ul>
          </div>
          <div className="p-12 bg-blue-600 text-white rounded-[3rem] shadow-xl shadow-blue-100 flex flex-col justify-center">
            <h4 className="text-xl font-bold mb-8 flex items-center justify-center lg:justify-start gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-white" /> Cool Max Support
            </h4>
            <ul className="space-y-4 text-blue-50 font-medium">
               <li>• Fragrance refill options</li>
               <li>• Usage guidance</li>
               <li>• Product support and assistance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: COLLECTION RANGE ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1400px] mx-auto text-center border-t border-slate-100 pt-24">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Part of Our Car Aroma Diffusers Collection</h2>
          <p className="text-slate-500 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            NovaCar Diffuser is part of Cool Max’s Car Aroma Diffusers range, designed to provide safe, intelligent, and effective fragrance solutions for vehicles.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {["DriveScent Diffuser", "VentoCar Diffuser", "DeskScent Diffuser"].map((range, i) => (
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
          <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10 tracking-tight leading-tight">Get Started with NovaCar</h2>
          <p className="text-slate-400 text-xl mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a smart car aromatherapy diffuser that works automatically while you drive? Our team is ready to help you elevate your driving experience.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl">Request product details</button>
            <button className="px-12 py-5 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all">Contact Cool Max Today</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default NovaCarPage;