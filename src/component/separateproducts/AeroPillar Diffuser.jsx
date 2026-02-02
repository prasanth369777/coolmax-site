import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  WifiIcon, 
 
  BoltIcon, 
  SpeakerXMarkIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
 
  BeakerIcon,
 
  ShieldCheckIcon,
  EyeIcon,
 
  SparklesIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import AeroPillar1 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/1.webp";
import AeroPillar2 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/2.webp";
import AeroPillar3 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/3.webp";
import AeroPillar4 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/4.webp";

const AeroPillarPage = () => {
  const [activeImg, setActiveImg] = useState(AeroPillar1);
  const gallery = [AeroPillar1, AeroPillar2, AeroPillar3, AeroPillar4];

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
              Luxury Floor-Standing System
            </div>
            <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              AeroPillar Diffuser
            </h2>
            <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">
              Premium Floor-Standing Aroma Diffuser for Elegant Commercial & Residential Spaces
            </p>
            <p className="text-slate-500 mb-10 leading-relaxed font-light">
              The AeroPillar Diffuser is a modern floor-standing aroma diffuser designed to deliver powerful yet refined fragrance diffusion in spaces where both performance and aesthetics matter. Built with a sleek aluminum alloy body and advanced atomization technology, this diffuser blends seamlessly into interiors while providing consistent and controlled scent coverage.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg shadow-slate-200">
                Contact Cool Max Today <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-square bg-white rounded-[3rem] border border-slate-100 shadow-xl flex items-center justify-center p-12 overflow-hidden">
              <img src={activeImg} alt="AeroPillar Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-20 h-20 rounded-xl border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-white opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="variant-thumb" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 1: PRODUCT OVERVIEW ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Product Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
              AeroPillar Diffuser is engineered for environments that require visible elegance with professional scenting performance. Unlike wall-mounted or hidden systems, this floor-standing aroma diffuser becomes part of the interior design while delivering effective fragrance diffusion across medium to large spaces.
              With Wi-Fi and Bluetooth control, high-pressure air pump technology, and infrared oil detection, AeroPillar Diffuser offers reliability, convenience, and precise fragrance control for everyday use.
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
              { icon: SparklesIcon, text: "Premium floor-standing aroma diffuser" },
              { icon: BeakerIcon, text: "Covers up to 2,000 m³" },
              { icon: ShieldCheckIcon, text: "Elegant aluminum alloy pillar design" },
              { icon: WifiIcon, text: "Wi-Fi & Bluetooth app control" },
              { icon: BoltIcon, text: "High-pressure air pump for strong diffusion" },
              { icon: EyeIcon, text: "Infrared oil level detection" },
              { icon: SpeakerXMarkIcon, text: "Quiet operation for comfort spaces" }
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
        
        <div className="grid gap-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Sculpted Floor-Standing Design</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                The AeroPillar Diffuser features a slim, vertical pillar form that fits naturally into modern interiors. Its metallic finish and clean lines allow it to function as both a fragrance system and a design element.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Living rooms", "Offices", "Reception areas", "Brand stores", "Hospitality interiors"].map((li, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 font-medium p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" /> {li}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2.5rem] bg-slate-100 p-8 order-1 md:order-2">
               <img src={AeroPillar2} alt="AeroPillar Design" className="w-full h-80 object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[2.5rem] bg-slate-100 p-8">
               <img src={AeroPillar3} alt="Advanced Technology" className="w-full h-80 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Durable Aluminum Alloy Body</h3>
              <p className="text-slate-500 leading-relaxed mb-6 font-light">Crafted with an aluminum alloy exterior, the diffuser offers long-term durability, heat resistance, and a premium visual appeal. The solid construction ensures reliable performance in both residential and commercial settings.</p>
              
              <div className="bg-slate-900 text-white p-8 rounded-3xl mt-8">
                <h4 className="text-xl font-serif mb-4 text-blue-400">Advanced Diffusion Technology</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-light mb-4 italic">High-Pressure Air Pump System</p>
                <p className="text-slate-300 text-sm font-light">AeroPillar Diffuser uses a large-flow, high-pressure air pump to atomize fragrance oil into ultra-fine particles, ensuring even distribution and no wet mist.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm">
              <h3 className="text-2xl font-serif mb-6">Precision Atomization</h3>
              <p className="text-slate-500 text-sm leading-relaxed">The advanced atomization system ensures fragrance particles remain stable in the air, delivering long-lasting presence and balanced intensity.</p>
            </div>
            <div className="bg-blue-600 text-white p-10 rounded-[3rem] shadow-xl">
              <h3 className="text-2xl font-serif mb-6">Infrared Oil Detection</h3>
              <p className="text-blue-100 text-sm leading-relaxed">Built-in infrared detection monitors fragrance levels accurately, helping users manage refills efficiently and avoid unexpected downtime.</p>
            </div>
            <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm">
              <h3 className="text-2xl font-serif mb-6">Hidden Fan System</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Built-in hidden fan enhances airflow efficiency while keeping noise levels low, suitable for offices and bedrooms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION: SMART CONTROL ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1200px] mx-auto text-center">
           <div className="inline-block p-4 bg-blue-50 rounded-full mb-8">
              <WifiIcon className="w-12 h-12 text-blue-600" />
           </div>
           <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Smart Control & User Convenience</h2>
           <h3 className="text-xl text-slate-400 uppercase tracking-widest font-black mb-10 text-[10px]">Wi-Fi & Bluetooth App Control</h3>
           <p className="text-slate-500 max-w-2xl mx-auto mb-12 font-light">The AeroPillar Diffuser supports remote control via mobile app, allowing users to adjust fragrance intensity, set working schedules, and manage scent output remotely.</p>
           <div className="flex flex-wrap justify-center gap-6">
              {["Adjust intensity", "Set working schedules", "Control operating time", "Remote management"].map((feature, i) => (
                <span key={i} className="px-6 py-3 bg-slate-50 border border-slate-100 rounded-full text-xs font-bold text-slate-600 uppercase tracking-wider">{feature}</span>
              ))}
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
                  ["Coverage Area", "Up to 2,000 m³"],
                  ["Fragrance Capacity", "500 ml"],
                  ["Power Supply", "DC 12V"],
                  ["Power Consumption", "12W"],
                  ["Weight", "Approx. 3.2 kg"],
                  ["Noise Level", "≤45 dB"],
                  ["Control Options", "Wi-Fi & Bluetooth App"],
                  ["Detection", "Infrared oil level detection"],
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

      {/* ================= SECTION 5: RECOMMENDED APPLICATIONS ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight">Recommended Applications</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Homes & living rooms", "Offices & corporate spaces", 
            "Bedrooms", "Brand showrooms", "Boutique stores", 
            "Interior-focused commercial spaces"
          ].map((item, i) => (
            <span key={i} className="px-8 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm text-sm font-bold text-slate-700">
              {item}
            </span>
          ))}
        </div>
        <p className="mt-12 text-slate-400 italic text-sm">It is especially suited for spaces where visual presence and scent quality are equally important.</p>
      </section>

      {/* ================= SECTION 6: HOW IT WORKS ================= */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight tracking-tight">How AeroPillar Diffuser Works</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6 font-light">
              The diffuser converts fragrance oil into micro-fine particles using cold-air atomization. These particles are then dispersed evenly with the help of a high-pressure air pump and hidden fan system.
            </p>
            <div className="space-y-4 font-black uppercase tracking-[0.2em] text-[10px] text-blue-400">
               <p className="flex items-center gap-3"><CheckCircleIcon className="w-4 h-4"/> No heat damage to fragrance oil</p>
               <p className="flex items-center gap-3"><CheckCircleIcon className="w-4 h-4"/> No water dilution</p>
               <p className="flex items-center gap-3"><CheckCircleIcon className="w-4 h-4"/> Pure, consistent scent diffusion</p>
            </div>
          </div>
          <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 text-center">
             <BeakerIcon className="w-16 h-16 text-blue-500 mb-8 mx-auto" />
             <h4 className="text-2xl font-serif text-center mb-4">Cold-Air Atomization Technology</h4>
             <img src={AeroPillar4} alt="Internal View" className="w-full h-48 object-contain rounded-2xl opacity-80" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center tracking-tight">Why Choose AeroPillar Diffuser</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Elegant floor-standing design",
            "Strong scent coverage without wall installation",
            "Smart app-based control",
            "Quiet and efficient operation",
            "Durable and premium build quality",
            "Suitable for both home and light commercial use"
          ].map((text, i) => (
            <div key={i} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-blue-600 transition-colors">
              <CheckCircleIcon className="w-8 h-8 text-blue-600 mb-6" />
              <p className="text-slate-700 font-medium leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-slate-500 font-medium">AeroPillar Diffuser is the perfect choice for customers who want a luxury floor-standing aroma diffuser with professional performance.</p>
      </section>

      {/* ================= SECTION 8: MAINTENANCE & SUPPORT ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12">
          <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3">Maintenance</h4>
            <ul className="space-y-4 text-slate-500">
               <li>• Simple fragrance bottle replacement</li>
               <li>• Oil level monitoring</li>
               <li>• Stable internal components</li>
            </ul>
          </div>
          <div className="p-12 bg-blue-600 text-white rounded-[3rem] shadow-xl">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3">Cool Max Support</h4>
            <ul className="space-y-4 text-blue-50">
               <li>• Product consultation</li>
               <li>• Fragrance selection guidance</li>
               <li>• Maintenance and refill assistance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: COLLECTION RANGE ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1400px] mx-auto text-center border-t border-slate-100 pt-24">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Part of Our Floor-Standing Aroma Diffusers Range</h2>
          <p className="text-slate-500 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            AeroPillar Diffuser belongs to Cool Max’s Floor-Standing Aroma Diffusers collection, developed for spaces that require strong fragrance diffusion without ceiling or wall installation.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["AirPole Pro Diffuser", "Titan Diffuser", "NanoPillar Diffuser"].map((range, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-[#FAF9F6] border border-slate-100 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[10px] text-slate-500 cursor-pointer">
                Explore {range}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 10: SPEAK WITH SPECIALISTS ================= */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10 tracking-tight">Speak with Our Scent Specialists</h2>
          <p className="text-slate-400 text-xl mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a floor-standing aroma diffuser that delivers performance with elegance? Our specialists are here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl">Get a Custom Recommendation</button>
            <button className="px-12 py-5 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all">Contact Cool Max Today</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AeroPillarPage;