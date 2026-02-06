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
  BriefcaseIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import VentoCar1 from "../../asset/productimg/CMwebpimg/VentoCar/1.webp";
import VentoCar2 from "../../asset/productimg/CMwebpimg/VentoCar/2.webp";
import VentoCar3 from "../../asset/productimg/CMwebpimg/VentoCar/3.webp";
import VentoCar4 from "../../asset/productimg/CMwebpimg/VentoCar/4.webp";

const VentoCarPage = () => {
  const [activeImg, setActiveImg] = useState(VentoCar1);
  const gallery = [VentoCar1, VentoCar2, VentoCar3, VentoCar4];

  // Redirection Links
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20VentoCar%20Diffuser.`;
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
              Intelligent Automotive Series
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
              VentoCar Diffuser
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed">
              Designed for cars, desks, and small personal environments, this diffuser blends elegant design, quiet operation, and long battery life to create a comfortable fragrance experience wherever you are.
            </p>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed font-light">
              The VentoCar Diffuser is a compact and intelligent car aroma diffuser designed for drivers and personal-space users who want reliable fragrance performance in a sleek, minimal form. Built with a premium aviation aluminum body and advanced timed diffusion technology, VentoCar Diffuser delivers consistent scent coverage without distraction.
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
              <img src={activeImg} alt="VentoCar Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="VentoCar variant" />
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
              VentoCar Diffuser is designed for modern personal scenting needs, where space efficiency, durability, and controlled fragrance output matter most. Its compact cylindrical shape fits easily into car cup holders or desktop setups, making it suitable for both driving and working environments.
              With intelligent timed diffusion, a built-in lithium battery, and leak-proof construction, VentoCar Diffuser ensures safe and consistent fragrance diffusion throughout the day.
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
              { icon: TruckIcon, text: "Compact car aroma diffuser for vehicles and desktops" },
              { icon: ShieldCheckIcon, text: "Aviation-grade aluminum metal body" },
              { icon: Battery100Icon, text: "Built-in rechargeable lithium battery" },
              { icon: CommandLineIcon, text: "Intelligent four-gear fragrance control" },
              { icon: SpeakerXMarkIcon, text: "Quiet operation for distraction-free use" },
              { icon: ShieldCheckIcon, text: "Leak-proof and durable construction" },
              { icon: HomeIcon, text: "Suitable for cars and small indoor spaces" }
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
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight text-slate-900">Premium Design & Build</h2>
        <div className="grid gap-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 text-left">
              <h3 className="text-xl font-serif mb-4 text-slate-900">Aviation Aluminum Metal Body</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">
                VentoCar Diffuser is crafted from aviation-grade aluminum, finished with a sandblasting process that enhances surface texture while improving durability. This construction makes the diffuser more resistant to wear, scratches, and everyday handling.
                The refined metallic finish allows the diffuser to blend seamlessly into modern interiors.
              </p>
              <h3 className="text-lg font-serif mb-4 text-slate-900">Compact & Practical Form</h3>
              <div className="grid grid-cols-2 gap-2">
                {["Car cup holders", "Office desks", "Workstations", "Small shelves"].map((li, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium p-2 bg-white rounded-lg border border-slate-100 shadow-sm">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" /> {li}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-slate-100 p-6 order-1 md:order-2 h-64 flex items-center justify-center">
               <img src={VentoCar2} alt="VentoCar Design" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-slate-100 p-6 h-64 flex items-center justify-center">
               <img src={VentoCar3} alt="Smart Diffusion" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4 text-slate-900">Intelligent Fragrance Control</h3>
              <div className="bg-slate-900 text-white p-6 rounded-2xl mb-6">
                <h4 className="text-lg font-serif mb-3 text-blue-400 flex items-center gap-3">
                  <CommandLineIcon className="w-6 h-6"/> Four-Gear Smart Diffusion
                </h4>
                <p className="text-slate-300 text-xs font-light leading-relaxed mb-4 text-left">Precise control over fragrance intensity, ensuring a balanced scent without becoming overpowering.</p>
                <div className="p-4 bg-blue-900/30 rounded-xl border border-blue-500/20">
                    <h4 className="font-bold text-blue-100 text-[8px] uppercase tracking-widest mb-3 text-center">Timed Diffusion Cycle</h4>
                    <div className="flex items-center gap-4 text-white justify-center">
                        <div className="p-2 bg-white/10 rounded-lg text-center font-black text-xs">15s ON</div>
                        <ArrowsRightLeftIcon className="w-4 h-4 opacity-30"/>
                        <div className="p-2 bg-white/10 rounded-lg text-center font-black text-xs">200s OFF</div>
                    </div>
                </div>
              </div>
              <h3 className="text-lg font-serif mb-2 text-slate-900">Battery Performance</h3>
              <p className="text-sm text-slate-500 font-light mb-4 text-left">2000mAh lithium battery supporting cordless operation for over 12 hours.</p>
              <div className="flex gap-4 text-[9px] font-black uppercase text-slate-400">
                <span className="flex items-center gap-2"><BoltIcon className="w-4 h-4" /> DC 5V / 2W</span>
                <span className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4" /> 3.5h Full Charge</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm text-left">
              <SpeakerXMarkIcon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-serif mb-2 text-slate-900">Quiet & Safe</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light">Noise level ≤40 dB ensures a calm environment. The leak-proof design ensures safe usage even on uneven roads or sudden movements.</p>
            </div>
            <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl text-left">
              <ShieldCheckIcon className="w-8 h-8 text-white mb-4" />
              <h3 className="text-lg font-serif mb-2 text-white">Premium Build</h3>
              <p className="text-blue-50 text-xs leading-relaxed font-light">Aviation-grade aluminum with a sandblasting finish provides high resistance to scratches and wear for long-term daily use.</p>
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
                  ["Product Type", "Car / Desktop Aroma Diffuser"],
                  ["Fragrance Capacity", "20 ml"],
                  ["Voltage / Power", "DC 5V / 2W"],
                  ["Battery Capacity", "2000 mAh"],
                  ["Working Cycle", "15s ON / 200s OFF"],
                  ["Coverage Area", "Up to 100 m³"],
                  ["Noise Level", "≤40 dB"],
                  ["Net Weight", "0.35 kg"],
                  ["Dimensions", "Ø70 × H139 mm"],
                  ["Colors", "Pale Green, Classic Silver"]
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

      {/* ================= SECTION 5: IDEAL APPLICATIONS ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight text-slate-900">Ideal Applications</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { icon: TruckIcon, label: "Personal vehicles" },
            { icon: BriefcaseIcon, label: "Office workstations" },
            { icon: HomeIcon, label: "Home study rooms" },
            { icon: SparklesIcon, label: "Compact indoor spaces" }
          ].map((item, i) => (
            <div key={i} className="px-6 py-5 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center gap-3 min-w-[200px] justify-center">
                <item.icon className="w-5 h-5 text-blue-600" />
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10 items-center text-left bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white">
          <div>
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight text-blue-400">How VentoCar Works</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
              VentoCar Diffuser uses fine atomization technology to convert fragrance oil into micro-particles. These particles disperse evenly in small spaces, maintaining consistent scent quality without residue buildup.
            </p>
            <div className="space-y-2 text-[10px] font-black uppercase tracking-widest text-blue-200">
               <p className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4"/> Stable fragrance intensity</p>
               <p className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4"/> Efficient oil usage</p>
               <p className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4"/> Clean and safe operation</p>
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 flex flex-col items-center">
             <BeakerIcon className="w-10 h-10 text-blue-500 mb-6" />
             <img src={VentoCar4} alt="Internal Scent Path" className="w-full h-40 object-contain rounded-xl opacity-80" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight text-slate-900">Why Choose VentoCar Diffuser</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Compact and travel-friendly design",
            "Durable aviation aluminum body",
            "Intelligent timed fragrance diffusion",
            "Long-lasting rechargeable battery",
            "Quiet, leak-proof performance",
            "Suitable for both car and desktop use"
          ].map((text, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <CheckCircleIcon className="w-6 h-6 text-blue-600 mb-4" />
              <p className="text-slate-700 text-sm font-medium leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-slate-500 text-xs italic">VentoCar Diffuser is an excellent choice for users seeking reliable, stylish, and low-maintenance personal scenting.</p>
      </section>

      {/* ================= MAINTENANCE ================= */}
      <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-[1000px] mx-auto grid lg:grid-cols-2 gap-6 text-left">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900">
              <WrenchScrewdriverIcon className="w-5 h-5 text-blue-600" /> Maintenance
            </h4>
            <ul className="space-y-2 text-xs text-slate-500 font-light">
               <li>• Easy fragrance oil refilling</li>
               <li>• Minimal cleaning required</li>
               <li>• Long-lasting internal components</li>
            </ul>
          </div>
          <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
              <ShieldCheckIcon className="w-5 h-5" /> Expert Support
            </h4>
            <ul className="space-y-2 text-xs text-blue-50 font-light">
               <li>• Fragrance recommendations</li>
               <li>• Product refill support</li>
               <li>• Expert usage guidance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= COLLECTION RANGE ================= */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-[1200px] mx-auto text-center border-t border-slate-100 pt-16">
          <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900">The Car Aroma Collection</h2>
          <p className="text-sm text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            VentoCar Diffuser is part of Cool Max’s Car Aroma Diffusers range, designed for compact personal environments where controlled scenting is essential.
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {["DriveScent Diffuser", "DeskScent Diffuser", "NovaCar Diffuser"].map((range, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[9px] text-slate-500 cursor-pointer">
                Explore {range}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 10: CTA (MASTER REDIRECT) ================= */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10 tracking-tight leading-tight">Get Started with VentoCar</h2>
          <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a stylish and dependable car aroma diffuser? Our team is ready to help you find the perfect fragrance companion for your journey.
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

export default VentoCarPage;