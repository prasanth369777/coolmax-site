import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  SpeakerXMarkIcon, 
  SparklesIcon, 
   
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  AdjustmentsHorizontalIcon,
  Battery50Icon,
  NoSymbolIcon,
  RectangleGroupIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS MAPPED TO DESKSCENT ================= */
import DeskScent1 from "../../asset/productimg/CMwebpimg/DeskScent/1.webp";
import DeskScent2 from "../../asset/productimg/CMwebpimg/DeskScent/2.webp";
import DeskScent3 from "../../asset/productimg/CMwebpimg/DeskScent/3.webp";
import DeskScent4 from "../../asset/productimg/CMwebpimg/DeskScent/4.webp";

const DeskScentPage = () => {
  const [activeImg, setActiveImg] = useState(DeskScent1);
  const gallery = [DeskScent1, DeskScent2, DeskScent3, DeskScent4];

  // Redirection Links
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20DeskScent%20Diffuser.`;
  const contactPath = "/contact";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans selection:bg-blue-100 overflow-hidden text-left">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <SparklesIcon className="w-4 h-4" /> Smart, Compact Scent Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
              DeskScent Diffuser
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed">
              Smart, Compact Scent Solutions for Cars & Personal Spaces
            </p>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed font-light">
              The DeskScent Diffuser is a modern car and desktop aroma diffuser designed for users who want fast, even fragrance diffusion in compact environments. Built with a premium aviation aluminum body and fan-shaped atomization technology, this diffuser delivers consistent scent performance while maintaining a refined, minimal appearance.
            </p>
            <p className="text-sm text-slate-500 mb-8 italic border-l-4 border-blue-600 pl-6 font-light">
              Perfect for cars, work desks, home offices, and personal spaces, DeskScent Diffuser combines intelligent fragrance control, quiet operation, and durable construction in a compact form.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg">
                Talk to Scent Expert <ChatBubbleLeftRightIcon className="w-4 h-4" />
              </a>
              <a href={contactPath} className="px-6 py-3 border border-slate-200 text-slate-900 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 font-sans">
                Request Details <ArrowRightIcon className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-[4/3] bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center justify-center p-8 overflow-hidden">
              <img src={activeImg} alt="DeskScent Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="DeskScent variant" />
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
              DeskScent Diffuser is engineered for personal scenting, where space efficiency and performance are equally important. Its compact cylindrical design allows it to fit seamlessly into car cup holders or desktop environments, making it suitable for daily commuting and workspaces.
              With intelligent timed diffusion and efficient oil consumption, DeskScent Diffuser ensures your space stays fresh without overwhelming the senses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY FEATURES ================= */}
      <section className="py-16 bg-[#0c101b] text-white px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { icon: RectangleGroupIcon, text: "Compact car aroma diffuser and desktop diffuser" },
              { icon: SparklesIcon, text: "Fast and wide fragrance diffusion" },
              { icon: Cog6ToothIcon, text: "Fan-shaped atomization structure" },
              { icon: ShieldCheckIcon, text: "Aviation-grade aluminum metal body" },
              { icon: AdjustmentsHorizontalIcon, text: "Intelligent four-gear fragrance control" },
              { icon: Battery50Icon, text: "Built-in rechargeable lithium battery" },
              { icon: NoSymbolIcon, text: "Quiet and leak-proof operation" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-8 h-8 text-blue-500 mb-4" />
                <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: DESIGN & QUALITY ================= */}
      <section className="py-20 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-serif mb-16 text-center tracking-tight uppercase">Premium Design & Build Quality</h2>
        
        <div className="grid gap-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 text-left">
              <h3 className="text-2xl font-serif mb-4">Aviation Aluminum Metal Body</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">
                DeskScent Diffuser is crafted using aviation-grade aluminum, enhanced with refined vertical lines that improve both durability and visual appeal. The sandblasting and precision finishing process ensures resistance to scratches, wear, and daily handling. This premium construction allows the diffuser to blend naturally into modern car interiors and professional desktop setups.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-8 order-1 md:order-2 h-72 flex items-center justify-center">
               <img src={DeskScent2} alt="Aluminum Body Detail" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-slate-100 p-8 h-72 flex items-center justify-center">
               <img src={DeskScent3} alt="Compact Design" className="w-full h-full object-contain" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-serif mb-4">Compact & Elegant Form Factor</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">The simplified geometry and smooth curves make DeskScent Diffuser easy to place in:</p>
              <ul className="grid grid-cols-2 gap-3 mb-6 font-sans">
                  {["Car cup holders", "Office desks", "Home workstations", "Small shelves or side tables"].map((li, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-bold text-[10px] uppercase tracking-widest text-left">
                       <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" /> {li}
                    </li>
                  ))}
              </ul>
              <p className="text-slate-400 text-xs italic">Its compact size ensures it never feels bulky while delivering powerful aroma diffusion.</p>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-serif mb-6">Advanced Fragrance Diffusion Technology</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-2">Fan-Shaped Atomization Structure</h4>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">
                      DeskScent Diffuser uses a fan-shaped atomization system that enables faster and wider fragrance diffusion. This structure breaks fragrance oil into fine particles, allowing the scent to spread evenly throughout small spaces.
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10 flex-1">
                      <p className="text-blue-400 font-black text-xl mb-1">Quick</p>
                      <p className="text-[10px] uppercase font-bold text-slate-500">Dispersion</p>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10 flex-1">
                      <p className="text-blue-400 font-black text-xl mb-1">Balanced</p>
                      <p className="text-[10px] uppercase font-bold text-slate-500">Intensity</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                  <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-4">Intelligent Four-Gear Design</h4>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    The diffuser features an intelligent four-gear control system, allowing users to adjust fragrance intensity according to preference. This ensures precise scent management whether used in a car or on a desktop.
                  </p>
                </div>
                <div className="p-6 bg-blue-600 rounded-3xl">
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-2">Timed Diffusion Cycle</h4>
                  <p className="text-blue-50 text-sm font-light">Working time: 15 seconds / Pause time: 200 seconds. This cycle maintains a pleasant fragrance level while conserving oil and battery life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: POWER & BATTERY ================= */}
      <section className="py-20 bg-slate-100 px-6 font-sans">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-200 text-left">
              <Battery50Icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-serif mb-4">Battery & Power Performance</h3>
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">Built-in Lithium Battery</h4>
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
                DeskScent Diffuser is powered by a 2000mAh built-in lithium battery, providing reliable cordless operation throughout the day. Suitable for daily commuting and work hours.
              </p>
              <div className="h-px bg-slate-100 mb-6" />
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">USB Power Supply</h4>
              <p className="text-slate-500 text-sm font-light mb-4">Voltage / Power: DC 5V / 2W. Charge easily via:</p>
              <div className="flex flex-wrap gap-2">
                {["Car USB ports", "Laptops", "Power banks", "Desktop chargers"].map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 rounded-lg text-[10px] font-bold text-slate-400 border border-slate-100">{t}</span>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-200 text-left flex flex-col justify-center">
              <SpeakerXMarkIcon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-serif mb-4">Quiet & Safe Operation</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
                With a noise level of ≤38 dB, DeskScent Diffuser operates quietly, ensuring it does not disturb driving concentration or work focus. The leak-proof structure ensures safe usage even during movement, making it ideal for vehicles and portable use.
              </p>
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <p className="text-blue-700 font-bold text-xs uppercase tracking-widest text-center">Leak-Proof Structure Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: TECHNICAL SPECIFICATIONS ================= */}
      <section className="py-20 px-6 font-sans">
        <div className="max-w-[900px] mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-serif mb-10 text-center tracking-tight uppercase">Technical Specifications</h2>
          <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl">
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
                  ["Noise Level", "≤38 dB"],
                  ["Net Weight", "0.4 kg"],
                  ["Dimensions", "Ø71.5 × H141 mm"],
                  ["Material", "Aviation aluminum"],
                  ["Available Color", "Black, Silver, Apricot, Abyssal Green"]
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-400 uppercase tracking-widest text-[10px]">{row[0]}</td>
                    <td className="p-5 text-slate-700 font-medium">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: APPLICATIONS & WORKINGS ================= */}
      <section className="py-20 bg-white px-6 lg:px-12 font-sans">
         <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-serif mb-8 tracking-tight uppercase">How DeskScent Diffuser Works</h2>
                    <p className="text-slate-600 text-lg font-light leading-relaxed mb-6">
                      DeskScent Diffuser uses fine atomization to convert fragrance oil into micro-sized particles. These particles disperse evenly in small spaces, creating a consistent and pleasant scent without overuse of oil.
                    </p>
                    <div className="space-y-4">
                      {["Stable fragrance intensity", "Efficient oil usage", "Clean and safe operation"].map((f, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                          <span className="text-slate-700 font-bold uppercase text-[10px] tracking-widest">{f}</span>
                        </div>
                      ))}
                    </div>
                </div>
                <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                    <h3 className="text-xl font-serif mb-6">Ideal Applications</h3>
                    <div className="grid grid-cols-2 gap-4">
                       {["Personal cars", "Office desks", "Home offices", "Small indoor spaces"].map((item, i) => (
                           <div key={i} className="p-6 bg-white rounded-2xl shadow-sm flex flex-col items-center text-center">
                               <SparklesIcon className="w-6 h-6 text-blue-500 mb-2" />
                               <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600">{item}</p>
                           </div>
                       ))}
                    </div>
                    <p className="mt-8 text-slate-400 text-xs italic text-center">Designed specifically for personal and compact scent environments where controlled diffusion is essential.</p>
                </div>
            </div>
         </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-20 bg-slate-950 text-white px-6">
         <div className="max-w-[1400px] mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight uppercase">Why Choose DeskScent Diffuser</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left font-sans">
               {[
                   "Fast and wide fragrance diffusion",
                   "Premium aluminum body construction",
                   "Intelligent timed scent control",
                   "Quiet and energy-efficient operation",
                   "Compact and travel-friendly design",
                   "Suitable for both car and desktop use"
               ].map((text, i) => (
                   <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                       <CheckCircleIcon className="w-6 h-6 text-blue-500 shrink-0" />
                       <span className="text-sm font-light leading-relaxed">{text}</span>
                   </div>
               ))}
            </div>
            <p className="mt-16 text-slate-400 font-serif text-lg italic max-w-3xl mx-auto">
              DeskScent Diffuser is an excellent choice for users seeking a stylish, reliable, and efficient personal aroma diffuser.
            </p>
         </div>
      </section>

      {/* ================= SECTION 8: MAINTENANCE & CARE ================= */}
      <section className="py-20 bg-white px-6">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12">
              <div className="p-10 bg-slate-50 rounded-[3rem] text-left border border-slate-100">
                  <h3 className="text-2xl font-serif mb-8 uppercase tracking-tight">Maintenance & Care</h3>
                  <ul className="space-y-4 font-sans">
                      {["Easy fragrance oil replacement", "Minimal cleaning required", "Durable internal components for long-term use"].map((li, i) => (
                        <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase text-slate-700 tracking-widest">
                           <WrenchScrewdriverIcon className="w-4 h-4 text-blue-600" /> {li}
                        </li>
                      ))}
                  </ul>
              </div>
              <div className="p-10 bg-blue-600 rounded-[3rem] text-left text-white shadow-xl">
                  <h3 className="text-2xl font-serif mb-8 uppercase tracking-tight text-white">Cool Max Refill Support</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                      {["Fragrance refill support", "Product usage guidance", "Maintenance assistance"].map((li, i) => (
                        <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
                           <ShieldCheckIcon className="w-5 h-5 text-blue-200" /> {li}
                        </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* ================= SECTION 9: RELATED COLLECTION ================= */}
      <section className="py-16 bg-slate-50 px-6 font-sans">
        <div className="max-w-[1200px] mx-auto text-center border-t border-slate-200 pt-16">
          <h2 className="text-2xl md:text-3xl font-serif mb-6 tracking-tight uppercase">Part of Our Car Aroma Diffusers Collection</h2>
          <p className="text-sm text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            DeskScent Diffuser is part of Cool Max’s Car Aroma Diffusers range, designed to deliver effective fragrance diffusion in cars and personal spaces.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {["DriveScent Diffuser", "VentoCar Diffuser", "NovaCar Diffuser"].map((range, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[10px] text-slate-500 cursor-pointer flex items-center justify-center gap-2">
                Explore {range} <ArrowRightIcon className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 10: CTA ================= */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[3rem] p-10 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10 tracking-tight leading-tight uppercase">Get Started with DeskScent Diffuser</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed font-light font-sans">
            Looking for a compact and powerful car aroma diffuser? Contact our specialists today for product details and fragrance options.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10 font-sans">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-3">
               <ChatBubbleLeftRightIcon className="w-6 h-6" /> Contact Cool Max
            </a>
            <a href={contactPath} className="px-12 py-5 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-white/10 border border-white/10 transition-all flex items-center gap-3">
              Request product details <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DeskScentPage;