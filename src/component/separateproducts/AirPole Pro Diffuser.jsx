import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  WifiIcon, 
  BoltIcon, 
  SpeakerXMarkIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  BeakerIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  DeviceTabletIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import AirPolePro1 from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/1.webp";
import AirPolePro2 from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/2.webp";
import AirPolePro3 from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/3.webp";
import AirPolePro4 from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/4.webp";

const AirPoleProPage = () => {
  const [activeImg, setActiveImg] = useState(AirPolePro1);
  const gallery = [AirPolePro1, AirPolePro2, AirPolePro3, AirPolePro4];

  // Redirection Links
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20AirPole%20Pro%20Diffuser.`;
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
      <section className="relative pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Premium Commercial Floor-Standing
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
              AirPole Pro Diffuser
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed">
              High-Capacity Floor-Standing Aroma Diffuser for Large Commercial Spaces
            </p>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed font-light">
              The AirPole Pro Diffuser is a powerful floor-standing aroma diffuser designed for large, high-traffic commercial environments that require strong scent coverage, professional control, and a premium visual presence. With a tall, modern form factor and a large fragrance capacity, this diffuser is ideal for hotels, shopping malls, restaurants, and public spaces where consistent fragrance delivery is essential.
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
            <div className="aspect-[4/5] bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center justify-center p-8 overflow-hidden">
              <img src={activeImg} alt="AirPole Pro Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-105" />
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
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight">Product Overview</h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
              AirPole Pro Diffuser is engineered for large-area fragrance diffusion without the need for wall mounting or HVAC integration. Its free-standing pillar design allows flexible placement while delivering powerful and evenly distributed scent coverage.
              With a 1.5-liter fragrance capacity, smart control options, and a hidden fan system, this diffuser supports long operating hours with minimal maintenance, making it suitable for demanding commercial environments.
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
              { icon: BuildingOfficeIcon, text: "Premium floor-standing aroma diffuser for large spaces" },
              { icon: BeakerIcon, text: "Covers 2,500–4,000 m³" },
              { icon: BoltIcon, text: "Large 1,500 ml fragrance capacity" },
              { icon: DeviceTabletIcon, text: "Touch screen + Wi-Fi & Bluetooth app control" },
              { icon: ShieldCheckIcon, text: "Aluminum alloy body with modern finish" },
              { icon: SparklesIcon, text: "Adjustable scent intervals & intensity" },
              { icon: LockClosedIcon, text: "Safe lock design for public environments" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: DESIGN & BUILD QUALITY ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight">Design & Build Quality</h2>
        
        <div className="grid gap-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 text-left">
              <h3 className="text-xl font-serif mb-4">Tall, Architectural Floor-Standing Design</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">
                The AirPole Pro Diffuser features a vertical pillar design that stands elegantly in open spaces. Its slim footprint allows placement in lobbies, corridors, and reception areas without occupying excessive space.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Hotel lobbies", "Shopping malls", "Restaurants & cafés", "Commercial halls"].map((li, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium p-2 bg-white rounded-lg border border-slate-100 shadow-sm">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" /> {li}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-slate-100 p-6 order-1 md:order-2 h-80 flex items-center justify-center">
               <img src={AirPolePro2} alt="Architectural Design" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-slate-100 p-6 h-80 flex items-center justify-center order-1">
               <img src={AirPolePro3} alt="Aluminum Housing" className="w-full h-full object-contain" />
            </div>
            <div className="order-2 text-left">
              <h3 className="text-xl font-serif mb-4">Aluminum Alloy Housing</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light italic">
                The diffuser is built with a durable aluminum alloy exterior that offers long service life, resistance to wear and corrosion, and a premium metallic appearance.
              </p>
              
              <div className="bg-slate-900 text-white p-6 rounded-2xl">
                <h4 className="text-lg font-serif mb-2 text-blue-400">Advanced Diffusion Performance</h4>
                <p className="text-slate-300 text-[11px] font-light leading-relaxed">Capable of covering 2,500 to 4,000 cubic meters. Wide fragrance reach, even distribution, and stable performance throughout operating hours.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm text-left">
              <BeakerIcon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-serif mb-2">High-Efficiency Atomization</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Advanced technology converts oil into ultra-fine particles for clean diffusion without wet mist.</p>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-[2rem] shadow-xl text-left">
              <SpeakerXMarkIcon className="w-8 h-8 text-white mb-4" />
              <h3 className="text-lg font-serif mb-2">Hidden Fan System</h3>
              <p className="text-blue-50 text-xs leading-relaxed">Built-in fan enhances airflow efficiency while maintaining quiet operation for customer-facing spaces.</p>
            </div>
            <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm text-left">
              <LockClosedIcon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-serif mb-2">Safe Lock Design</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Safety lock prevents unauthorized access to the fragrance bottle, perfect for public areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SMART CONTROL SECTION ================= */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-serif mb-4 tracking-tight">Smart Control & User Convenience</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-left">
              <DeviceTabletIcon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-serif mb-4">Touch Screen Control</h3>
              <ul className="space-y-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> Fragrance intensity</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> Working intervals</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> Operating schedules</li>
              </ul>
            </div>
            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-2xl text-left">
              <WifiIcon className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-serif mb-2 text-blue-400">App Management</h3>
              <p className="text-slate-400 text-xs mb-4">Remote control via Wi-Fi & Bluetooth:</p>
              <div className="grid grid-cols-2 gap-2 text-[9px] font-black uppercase tracking-widest">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-center">Remote Control</div>
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-center">Weekly Schedules</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: TECHNICAL SPECIFICATIONS ================= */}
      <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif mb-10 text-center tracking-tight">Technical Specifications</h2>
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
                  ["Product Type", "Floor-Standing Aroma Diffuser"],
                  ["Coverage Area", "2,500–4,000 m³"],
                  ["Fragrance Capacity", "1,500 ml"],
                  ["Voltage / Power", "12V / 15W"],
                  ["Noise Level", "≤45 dB"],
                  ["Control", "Touch Screen, Wi-Fi & Bluetooth App"],
                  ["Body Material", "Aluminum alloy"]
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

      {/* ================= SECTION 5: APPLICATIONS ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-serif mb-10 tracking-tight">Recommended Applications</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["Hotel lobbies", "Shopping malls", "Restaurants & bars", "Large retail spaces", "Commercial halls"].map((item, i) => (
            <span key={i} className="px-5 py-3 bg-white border border-slate-100 rounded-xl shadow-sm text-[10px] font-bold text-slate-700 uppercase tracking-widest">
              {item}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-500 font-medium italic">Best suited for spaces that require strong fragrance performance with a visible, premium presence.</p>
      </section>

      {/* ================= SECTION 6: HOW IT WORKS ================= */}
      <section className="py-16 bg-slate-900 text-white px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-2xl md:text-4xl font-serif mb-6 leading-tight tracking-tight">How AirPole Pro Works</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
              The diffuser uses cold-air atomization technology to break fragrance oil into micro-particles, distributed evenly using a high-performance internal system.
            </p>
            <div className="space-y-2 text-[10px] font-black uppercase tracking-widest text-blue-400">
               <p className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4"/> No heat damage to oil</p>
               <p className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4"/> Pure, consistent diffusion</p>
               <p className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4"/> Efficient oil usage</p>
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 flex flex-col items-center">
             <BeakerIcon className="w-10 h-10 text-blue-500 mb-6" />
             <img src={AirPolePro4} alt="Internal Atomizer" className="w-full h-48 object-contain rounded-xl opacity-80" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight">Why Choose AirPole Pro Diffuser</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Designed for large commercial environments",
            "Large capacity reduces refill frequency",
            "Smart control for precise management",
            "Elegant architectural presence",
            "Durable alloy construction",
            "Safe for public high-traffic areas"
          ].map((text, i) => (
            <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
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
            <h4 className="text-lg font-bold mb-4">Maintenance</h4>
            <ul className="space-y-2 text-xs text-slate-500 font-light">
               <li>• Simple fragrance bottle replacement</li>
               <li>• App-based remote monitoring</li>
               <li>• Stable internal components</li>
            </ul>
          </div>
          <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl">
            <h4 className="text-lg font-bold mb-4">Cool Max Support</h4>
            <ul className="space-y-2 text-xs text-blue-50 font-light">
               <li>• Custom Fragrance Strategy</li>
               <li>• Installation & On-site support</li>
               <li>• Full Maintenance Contracts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA (MASTER REDIRECT) ================= */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10">Talk to Our Scent Experts</h2>
          <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a high-capacity floor-standing aroma diffuser for your commercial space? Our specialists are here to guide you.
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

export default AirPoleProPage;