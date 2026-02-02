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
  SparklesIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import AirPolePro1 from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/1.webp";
import AirPolePro2 from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/2.webp";
import AirPolePro3 from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/3.webp";
import AirPolePro4 from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/4.webp";

const AirPoleProPage = () => {
  const [activeImg, setActiveImg] = useState(AirPolePro1);
  const gallery = [AirPolePro1, AirPolePro2, AirPolePro3, AirPolePro4];

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
              Premium Commercial Floor-Standing
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              AirPole Pro Diffuser
            </h1>
            <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">
              High-Capacity Floor-Standing Aroma Diffuser for Large Commercial Spaces
            </p>
            <p className="text-slate-500 mb-10 leading-relaxed font-light">
              The AirPole Pro Diffuser is a powerful floor-standing aroma diffuser designed for large, high-traffic commercial environments that require strong scent coverage, professional control, and a premium visual presence. With a tall, modern form factor and a large fragrance capacity, this diffuser is ideal for hotels, shopping malls, restaurants, and public spaces where consistent fragrance delivery is essential.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg shadow-slate-200">
                Contact Cool Max Today <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-[3/4] bg-white rounded-[3rem] border border-slate-100 shadow-xl flex items-center justify-center p-12 overflow-hidden">
              <img src={activeImg} alt="AirPole Pro Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-105" />
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-16 h-20 rounded-xl border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-white opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="variant-thumb" />
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
              AirPole Pro Diffuser is engineered for large-area fragrance diffusion without the need for wall mounting or HVAC integration. Its free-standing pillar design allows flexible placement while delivering powerful and evenly distributed scent coverage.
              With a 1.5-liter fragrance capacity, smart control options, and a hidden fan system, this diffuser supports long operating hours with minimal maintenance, making it suitable for demanding commercial environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY HIGHLIGHTS ================= */}
      <section className="py-24 bg-[#0c101b] text-white px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BuildingOfficeIcon, text: "Premium floor-standing aroma diffuser for large spaces" },
              { icon: BeakerIcon, text: "Covers 2,500–4,000 m³" },
              { icon: BoltIcon, text: "Large 1,500 ml fragrance capacity" },
              { icon: DeviceTabletIcon, text: "Touch screen + Wi-Fi & Bluetooth app control" },
              { icon: ShieldCheckIcon, text: "Aluminum alloy body with modern finish" },
              { icon: SparklesIcon, text: "Adjustable scent intervals & intensity" },
              { icon: LockClosedIcon, text: "Safe lock design for public environments" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-10 h-10 text-blue-500 mx-auto mb-6" />
                <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: DESIGN & BUILD QUALITY ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-20 text-center tracking-tight">Design & Build Quality</h2>
        
        <div className="grid gap-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Tall, Architectural Floor-Standing Design</h3>
              <p className="text-slate-500 leading-relaxed mb-6 font-light">
                The AirPole Pro Diffuser features a vertical pillar design that stands elegantly in open spaces. Its slim footprint allows placement in lobbies, corridors, and reception areas without occupying excessive space.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Hotel lobbies", "Shopping malls", "Restaurants & cafés", "Commercial halls", "Public interiors"].map((li, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 font-medium p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" /> {li}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2.5rem] bg-slate-100 p-8 order-1 md:order-2 flex justify-center">
               <img src={AirPolePro2} alt="Architectural Design" className="w-full h-96 object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[2.5rem] bg-slate-100 p-8 flex justify-center">
               <img src={AirPolePro3} alt="Aluminum Housing" className="w-full h-96 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Aluminum Alloy Housing</h3>
              <p className="text-slate-500 leading-relaxed mb-8 font-light italic">
                The diffuser is built with a durable aluminum alloy exterior that offers long service life, resistance to wear and corrosion, and a premium metallic appearance. This ensures the unit maintains both performance and aesthetics over time.
              </p>
              
              <div className="bg-slate-900 text-white p-8 rounded-3xl">
                <h4 className="text-xl font-serif mb-4 text-blue-400">Advanced Diffusion Performance</h4>
                <p className="text-slate-400 text-sm mb-4 font-bold uppercase tracking-widest text-[10px]">Large Scent Coverage</p>
                <p className="text-slate-300 text-sm font-light leading-relaxed">Capable of covering 2,500 to 4,000 cubic meters. Wide fragrance reach, even distribution, and stable performance throughout operating hours.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm">
              <BeakerIcon className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-serif mb-4">High-Efficiency Atomization</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Advanced technology converts oil into ultra-fine particles for clean diffusion without wet mist and long-lasting presence.</p>
            </div>
            <div className="bg-blue-600 text-white p-10 rounded-[3rem] shadow-xl shadow-blue-100">
              <SpeakerXMarkIcon className="w-10 h-10 text-white mb-6" />
              <h3 className="text-xl font-serif mb-4">Hidden Fan System</h3>
              <p className="text-blue-50 text-sm leading-relaxed">Built-in fan enhances airflow efficiency while maintaining quiet operation for customer-facing spaces.</p>
            </div>
            <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm">
              <LockClosedIcon className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-serif mb-4">Safe Lock Design</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Built-in safety lock prevents unauthorized access to the fragrance bottle, perfect for high-traffic public areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SMART CONTROL SECTION ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Smart Control & User Convenience</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
              <DeviceTabletIcon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-serif mb-4">Touch Screen Control</h3>
              <p className="text-slate-500 mb-6">Integrated touch screen for quick on-device adjustments:</p>
              <ul className="space-y-3 font-bold text-[10px] uppercase tracking-widest text-slate-400">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> Fragrance intensity</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> Working intervals</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> Operating schedules</li>
              </ul>
            </div>
            <div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-2xl">
              <WifiIcon className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-serif mb-4 text-blue-400">Wi-Fi & Bluetooth App Control</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">Control remotely and manage multiple units from one interface:</p>
              <div className="grid grid-cols-2 gap-4 text-[10px] font-black uppercase tracking-widest">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">Remote Control</div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">Weekly Schedules</div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">Precise Output</div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">Multi-unit Mgmt</div>
              </div>
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
                  ["Product Type", "Floor-Standing Aroma Diffuser"],
                  ["Coverage Area", "2,500–4,000 m³"],
                  ["Fragrance Capacity", "1,500 ml"],
                  ["Voltage", "12V"],
                  ["Power Consumption", "15W"],
                  ["Weight", "Approx. 5.8 kg"],
                  ["Noise Level", "≤45 dB"],
                  ["Control Options", "Touch Screen, Wi-Fi & Bluetooth App"],
                  ["Body Material", "Aluminum alloy"],
                  ["Design", "Free-standing pillar"]
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

      {/* ================= SECTION 5: APPLICATIONS ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight">Recommended Applications</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            "Hotel lobbies", "Shopping malls", "Restaurants & bars", 
            "Large retail spaces", "Commercial halls", "Public interior areas"
          ].map((item, i) => (
            <span key={i} className="px-8 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm text-sm font-bold text-slate-700 uppercase tracking-wider">
              {item}
            </span>
          ))}
        </div>
        <p className="text-slate-500 font-medium italic">Best suited for spaces that require strong fragrance performance with a visible, premium diffuser presence.</p>
      </section>

      {/* ================= SECTION 6: HOW IT WORKS ================= */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight tracking-tight">How AirPole Pro Works</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
              The diffuser uses cold-air atomization technology to break fragrance oil into micro-particles, which are then distributed evenly using a high-performance internal system.
            </p>
            <div className="space-y-4 font-black uppercase tracking-[0.2em] text-[10px] text-blue-400">
               <p className="flex items-center gap-3"><CheckCircleIcon className="w-4 h-4"/> No heat damage to fragrance oil</p>
               <p className="flex items-center gap-3"><CheckCircleIcon className="w-4 h-4"/> Pure, consistent scent diffusion</p>
               <p className="flex items-center gap-3"><CheckCircleIcon className="w-4 h-4"/> Efficient fragrance usage</p>
            </div>
          </div>
          <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 text-center">
             <BeakerIcon className="w-16 h-16 text-blue-500 mb-8 mx-auto" />
             <h4 className="text-2xl font-serif text-center mb-8">Cold-Air Atomization</h4>
             <img src={AirPolePro4} alt="Internal Atomizer" className="w-full h-64 object-contain rounded-2xl opacity-80" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center tracking-tight">Why Choose AirPole Pro Diffuser</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Designed for large commercial environments",
            "Large fragrance capacity reduces refill frequency",
            "Smart control for precise scent management",
            "Elegant floor-standing design",
            "Durable construction for long-term use",
            "Safe for public and high-traffic areas"
          ].map((text, i) => (
            <div key={i} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-blue-600 transition-colors">
              <CheckCircleIcon className="w-8 h-8 text-blue-600 mb-6" />
              <p className="text-slate-700 font-medium leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">AirPole Pro Diffuser is a reliable solution for businesses looking to enhance their space with a professional floor-standing scent diffuser.</p>
      </section>

      {/* ================= MAINTENANCE & SUPPORT ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12">
          <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3">Maintenance</h4>
            <ul className="space-y-4 text-slate-500">
               <li>• Simple fragrance bottle replacement</li>
               <li>• App-based monitoring</li>
               <li>• Stable internal components</li>
            </ul>
          </div>
          <div className="p-12 bg-blue-600 text-white rounded-[3rem] shadow-xl shadow-blue-100">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3">Cool Max Support</h4>
            <ul className="space-y-4 text-blue-50 font-medium">
               <li>• Product consultation</li>
               <li>• Fragrance selection support</li>
               <li>• Maintenance and refill services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= COLLECTION RANGE ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1400px] mx-auto text-center border-t border-slate-100 pt-24">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Part of Our Floor-Standing Range</h2>
          <p className="text-slate-500 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            AirPole Pro Diffuser is part of Cool Max’s Floor-Standing Aroma Diffusers collection, developed for spaces that need strong scent coverage without ceiling or wall installation.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["AeroPillar Diffuser", "Titan Diffuser", "NanoPillar Diffuser"].map((range, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-[#FAF9F6] border border-slate-100 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[10px] text-slate-500 cursor-pointer">
                Explore {range}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10 tracking-tight">Talk to Our Scent Experts</h2>
          <p className="text-slate-400 text-xl mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a high-capacity floor-standing aroma diffuser for your commercial space? Our specialists are here to guide you.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl">Get Expert Recommendations</button>
            <button className="px-12 py-5 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all">Contact Cool Max Today</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AirPoleProPage;