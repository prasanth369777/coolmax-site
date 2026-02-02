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
  HomeIcon,
  TruckIcon,
  CommandLineIcon,
  ArrowsRightLeftIcon,
  BriefcaseIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import VentoCar1 from "../../asset/productimg/CMwebpimg/VentoCar/1.webp";
import VentoCar2 from "../../asset/productimg/CMwebpimg/VentoCar/2.webp";
import VentoCar3 from "../../asset/productimg/CMwebpimg/VentoCar/3.webp";
import VentoCar4 from "../../asset/productimg/CMwebpimg/VentoCar/4.webp";

const VentoCarPage = () => {
  const [activeImg, setActiveImg] = useState(VentoCar1);
  const gallery = [VentoCar1, VentoCar2, VentoCar3, VentoCar4];

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
              Intelligent Automotive Series
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              VentoCar Diffuser
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-8 leading-relaxed">
              Designed for cars, desks, and small personal environments, this diffuser blends elegant design, quiet operation, and long battery life to create a comfortable fragrance experience wherever you are.
            </p>
            <p className="text-slate-500 mb-10 leading-relaxed font-light">
              The VentoCar Diffuser is a compact and intelligent car aroma diffuser designed for drivers and personal-space users who want reliable fragrance performance in a sleek, minimal form. Built with a premium aviation aluminum body and advanced timed diffusion technology, VentoCar Diffuser delivers consistent scent coverage without distraction.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg">
                Contact Cool Max Today <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-square bg-white rounded-[3rem] border border-slate-100 shadow-xl flex items-center justify-center p-12 overflow-hidden">
              <img src={activeImg} alt="VentoCar Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-16 h-20 rounded-xl border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-white opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="VentoCar variant" />
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
              VentoCar Diffuser is designed for modern personal scenting needs, where space efficiency, durability, and controlled fragrance output matter most. Its compact cylindrical shape fits easily into car cup holders or desktop setups, making it suitable for both driving and working environments.
              With intelligent timed diffusion, a built-in lithium battery, and leak-proof construction, VentoCar Diffuser ensures safe and consistent fragrance diffusion throughout the day.
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
              { icon: TruckIcon, text: "Compact car aroma diffuser for vehicles and desktops" },
              { icon: ShieldCheckIcon, text: "Aviation-grade aluminum metal body" },
              { icon: Battery100Icon, text: "Built-in rechargeable lithium battery" },
              { icon: CommandLineIcon, text: "Intelligent four-gear fragrance control" },
              { icon: SpeakerXMarkIcon, text: "Quiet operation for distraction-free use" },
              { icon: ShieldCheckIcon, text: "Leak-proof and durable construction" },
              { icon: HomeIcon, text: "Suitable for cars and small indoor spaces" }
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
        <h2 className="text-3xl md:text-5xl font-serif mb-20 text-center tracking-tight">Premium Design & Build</h2>
        
        <div className="grid gap-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Aviation Aluminum Metal Body</h3>
              <p className="text-slate-500 leading-relaxed mb-6 font-light">
                VentoCar Diffuser is crafted from aviation-grade aluminum, finished with a sandblasting process that enhances surface texture while improving durability. This construction makes the diffuser more resistant to wear, scratches, and everyday handling.
                The refined metallic finish allows the diffuser to blend seamlessly into modern car interiors and professional desktop environments.
              </p>
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Compact & Practical Form</h3>
              <p className="text-slate-500 leading-relaxed font-light mb-6 italic">The simplified geometry and smooth curves allow VentoCar Diffuser to be placed easily in car cup holders, office desks, and study areas.</p>
              <div className="grid grid-cols-2 gap-4">
                {["Car cup holders", "Office desks", "Home workstations", "Small shelves"].map((li, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 font-medium p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" /> {li}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2.5rem] bg-slate-100 p-8 order-1 md:order-2 flex justify-center">
               <img src={VentoCar2} alt="VentoCar Design" className="w-full h-80 object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[2.5rem] bg-slate-100 p-8 flex justify-center">
               <img src={VentoCar3} alt="Smart Diffusion" className="w-full h-80 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Intelligent Fragrance Control</h3>
              <div className="bg-slate-900 text-white p-8 rounded-3xl mb-8">
                <h4 className="text-xl font-serif mb-4 text-blue-400 flex items-center gap-3">
                  <CommandLineIcon className="w-8 h-8"/> Four-Gear Smart Diffusion
                </h4>
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-4">Features an intelligent four-gear design that allows precise control over fragrance intensity, ensuring a balanced scent without becoming overpowering.</p>
                <div className="p-6 bg-blue-900/30 rounded-2xl border border-blue-500/20">
                    <h4 className="font-bold text-blue-100 text-[10px] uppercase tracking-widest mb-4 text-center">Timed Diffusion Cycle</h4>
                    <div className="flex items-center gap-4 text-white">
                        <div className="flex-1 p-3 bg-white/10 rounded-lg text-center font-black">15s ON</div>
                        <ArrowsRightLeftIcon className="w-5 h-5 opacity-30"/>
                        <div className="flex-1 p-3 bg-white/10 rounded-lg text-center font-black">200s OFF</div>
                    </div>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif mb-4">Battery & Power Performance</h3>
              <p className="text-slate-500 font-light mb-4">Equipped with a 2000mAh built-in lithium battery supporting cordless operation for over 12 hours.</p>
              <div className="flex gap-4 font-bold text-[10px] uppercase tracking-tighter text-slate-400">
                <span className="flex items-center gap-2"><BoltIcon className="w-4 h-4" /> DC 5V / 2W</span>
                <span className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4" /> 3.5h Full Charge</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm">
              <SpeakerXMarkIcon className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-serif mb-4">Quiet & Safe Operation</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Noise level ≤40 dB ensures a calm environment. The leak-proof design ensures safe usage even on uneven roads or sudden movements.</p>
            </div>
            <div className="bg-blue-600 text-white p-10 rounded-[3rem] shadow-xl shadow-blue-100">
              <ShieldCheckIcon className="w-10 h-10 text-white mb-6" />
              <h3 className="text-xl font-serif mb-4">Premium Build</h3>
              <p className="text-blue-50 text-sm leading-relaxed">Aviation-grade aluminum with a sandblasting finish provides high resistance to scratches and wear for long-term daily use.</p>
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
                  ["Product Type", "Car / Desktop Aroma Diffuser"],
                  ["Fragrance Capacity", "20 ml"],
                  ["Voltage / Power", "DC 5V / 2W"],
                  ["Battery Capacity", "2000 mAh"],
                  ["Oil Consumption", "0.03 g/h ±5%"],
                  ["Working Cycle", "15s ON / 200s OFF"],
                  ["Coverage Area", "Up to 100 m³"],
                  ["Noise Level", "≤40 dB"],
                  ["Net Weight", "0.35 kg"],
                  ["Dimensions", "Ø70 × H139 mm"],
                  ["Material", "Aviation aluminum"],
                  ["Available Colors", "Pale Green, Classic Silver"]
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
            { icon: TruckIcon, label: "Personal cars and vehicles" },
            { icon: BriefcaseIcon, label: "Office desks and workstations" },
            { icon: HomeIcon, label: "Home study rooms" },
            { icon: SparklesIcon, label: "Compact indoor spaces" }
          ].map((item, i) => (
            <div key={i} className="px-8 py-6 bg-white border border-slate-100 rounded-[2rem] shadow-sm flex flex-col items-center gap-4 min-w-[240px]">
                <item.icon className="w-8 h-8 text-blue-600" />
                <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>
        <p className="text-slate-500 font-medium italic max-w-2xl mx-auto leading-relaxed">It is designed specifically for personal and small-space aroma diffusion, where precise control and portability are essential.</p>
      </section>

      {/* ================= SECTION 6: HOW IT WORKS ================= */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight tracking-tight">How VentoCar Works</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
              VentoCar Diffuser uses fine atomization technology to convert fragrance oil into micro-particles. These particles disperse evenly in small spaces, maintaining consistent scent quality without residue buildup.
            </p>
            <div className="space-y-4 font-black uppercase tracking-[0.2em] text-[10px] text-blue-400">
               <p className="flex items-center gap-3"><CheckCircleIcon className="w-4 h-4"/> Stable fragrance intensity</p>
               <p className="flex items-center gap-3"><CheckCircleIcon className="w-4 h-4"/> Efficient oil usage</p>
               <p className="flex items-center gap-3"><CheckCircleIcon className="w-4 h-4"/> Clean and safe operation</p>
            </div>
          </div>
          <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 text-center">
             <BeakerIcon className="w-16 h-16 text-blue-500 mb-8 mx-auto" />
             <h4 className="text-2xl font-serif text-center mb-8 tracking-tight">Fine Atomization Technology</h4>
             <img src={VentoCar4} alt="Internal Scent Path" className="w-full h-64 object-contain rounded-2xl opacity-80" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center tracking-tight">Why Choose VentoCar Diffuser</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Compact and travel-friendly design",
            "Durable aviation aluminum body",
            "Intelligent timed fragrance diffusion",
            "Long-lasting rechargeable battery",
            "Quiet, leak-proof performance",
            "Suitable for both car and desktop use"
          ].map((text, i) => (
            <div key={i} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-blue-600 transition-colors">
              <CheckCircleIcon className="w-8 h-8 text-blue-600 mb-6" />
              <p className="text-slate-700 font-medium leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto italic">VentoCar Diffuser is an excellent choice for users seeking reliable, stylish, and low-maintenance personal scenting.</p>
      </section>

      {/* ================= SECTION 8: MAINTENANCE & CARE ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 text-center lg:text-left">
          <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100 flex flex-col justify-center">
            <h4 className="text-xl font-bold mb-8 flex items-center justify-center lg:justify-start gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-blue-600" /> Maintenance & Care
            </h4>
            <ul className="space-y-4 text-slate-500 font-medium">
               <li>• Easy oil refilling</li>
               <li>• Minimal cleaning required</li>
               <li>• Long-lasting internal components</li>
            </ul>
          </div>
          <div className="p-12 bg-blue-600 text-white rounded-[3rem] shadow-xl shadow-blue-100 flex flex-col justify-center">
            <h4 className="text-xl font-bold mb-8 flex items-center justify-center lg:justify-start gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-white" /> Cool Max Support
            </h4>
            <ul className="space-y-4 text-blue-50 font-medium">
               <li>• Fragrance recommendations</li>
               <li>• Refill support</li>
               <li>• Product usage guidance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: COLLECTION RANGE ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1400px] mx-auto text-center border-t border-slate-100 pt-24">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Part of Our Car Aroma Diffusers Collection</h2>
          <p className="text-slate-500 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            VentoCar Diffuser is part of Cool Max’s Car Aroma Diffusers range, designed for compact personal environments where controlled scenting is essential.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {["DriveScent Diffuser", "DeskScent Diffuser", "NovaCar Diffuser"].map((range, i) => (
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
          <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10 tracking-tight leading-tight">Get Started with VentoCar</h2>
          <p className="text-slate-400 text-xl mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a stylish and dependable car aroma diffuser? Our team is ready to help you find the perfect fragrance companion for your journey.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-2">
               Request product details
            </button>
            <button className="px-12 py-5 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all">Contact Cool Max Today</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default VentoCarPage;