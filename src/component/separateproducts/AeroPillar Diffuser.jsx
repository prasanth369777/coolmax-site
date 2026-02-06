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
  SparklesIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import AeroPillar1 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/1.webp";
import AeroPillar2 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/2.webp";
import AeroPillar3 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/3.webp";
import AeroPillar4 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/4.webp";

const AeroPillarPage = () => {
  const [activeImg, setActiveImg] = useState(AeroPillar1);
  const gallery = [AeroPillar1, AeroPillar2, AeroPillar3, AeroPillar4];

  // Redirection Links
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20AeroPillar%20Floor%20Diffuser.`;
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
              Luxury Floor-Standing System
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
              AeroPillar Diffuser
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed">
              Premium Floor-Standing Aroma Diffuser for Elegant Commercial & Residential Spaces
            </p>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed font-light">
              The AeroPillar Diffuser is a modern floor-standing aroma diffuser designed to deliver powerful yet refined fragrance diffusion in spaces where both performance and aesthetics matter. Built with a sleek aluminum alloy body and advanced atomization technology, this diffuser blends seamlessly into interiors while providing consistent and controlled scent coverage.
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
              <img src={activeImg} alt="AeroPillar Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="variant-thumb" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 1: PRODUCT OVERVIEW ================= */}
      <section className="py-16 bg-white px-6 text-left">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight">Product Overview</h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
              AeroPillar Diffuser is engineered for environments that require visible elegance with professional scenting performance. Unlike wall-mounted or hidden systems, this floor-standing aroma diffuser becomes part of the interior design while delivering effective fragrance diffusion across medium to large spaces.
              With Wi-Fi and Bluetooth control, high-pressure air pump technology, and infrared oil detection, AeroPillar Diffuser offers reliability, convenience, and precise fragrance control for everyday use.
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
              { icon: SparklesIcon, text: "Premium floor-standing aroma diffuser" },
              { icon: BeakerIcon, text: "Covers up to 2,000 m³" },
              { icon: ShieldCheckIcon, text: "Elegant aluminum alloy pillar design" },
              { icon: WifiIcon, text: "Wi-Fi & Bluetooth app control" },
              { icon: BoltIcon, text: "High-pressure air pump for strong diffusion" },
              { icon: EyeIcon, text: "Infrared oil level detection" },
              { icon: SpeakerXMarkIcon, text: "Quiet operation for comfort spaces" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: DESIGN & BUILD ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight">Design & Build Quality</h2>
        <div className="grid gap-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 text-left">
              <h3 className="text-xl font-serif mb-4">Sculpted Floor-Standing Design</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                The AeroPillar Diffuser features a slim, vertical pillar form that fits naturally into modern interiors. Its metallic finish and clean lines allow it to function as both a fragrance system and a design element.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Living rooms", "Offices", "Reception areas", "Brand stores"].map((li, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium p-2 bg-white rounded-lg border border-slate-100 shadow-sm">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" /> {li}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-slate-100 p-6 order-1 md:order-2 h-64 flex items-center justify-center">
               <img src={AeroPillar2} alt="AeroPillar Design" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-slate-100 p-6 h-64 flex items-center justify-center">
               <img src={AeroPillar3} alt="Advanced Technology" className="w-full h-full object-contain" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-serif mb-4">Durable Aluminum Alloy Body</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">Crafted with an aluminum alloy exterior, the diffuser offers long-term durability, heat resistance, and a premium visual appeal.</p>
              <div className="bg-slate-900 text-white p-6 rounded-2xl">
                <h4 className="text-lg font-serif mb-2 text-blue-400">High-Pressure Air Pump</h4>
                <p className="text-slate-300 text-xs font-light">Uses a large-flow system to atomize fragrance oil into ultra-fine particles, ensuring even distribution and no wet mist.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm text-left">
              <h3 className="text-lg font-serif mb-4">Precision Atomization</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Delivers long-lasting presence and balanced intensity throughout expansive rooms.</p>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-[2rem] shadow-xl text-left">
              <h3 className="text-lg font-serif mb-4">Infrared Oil Detection</h3>
              <p className="text-blue-100 text-xs leading-relaxed">Monitors fragrance levels accurately to manage refills efficiently and avoid downtime.</p>
            </div>
            <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm text-left">
              <h3 className="text-lg font-serif mb-4">Hidden Fan System</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Enhances airflow efficiency while keeping noise levels low for sensitive environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION: SMART CONTROL ================= */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-[1200px] mx-auto text-center">
            <div className="inline-block p-3 bg-blue-50 rounded-full mb-6">
              <WifiIcon className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight">Smart Control & User Convenience</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mb-8 font-light text-sm">Supports remote control via Wi-Fi & Bluetooth, allowing intensity adjustments and scheduling via mobile app.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Adjust intensity", "Set schedules", "Remote management"].map((feature, i) => (
                <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-600 uppercase tracking-widest">{feature}</span>
              ))}
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
                  ["Coverage Area", "Up to 2,000 m³"],
                  ["Fragrance Capacity", "500 ml"],
                  ["Voltage / Power", "DC 12V / 12W"],
                  ["Noise Level", "≤45 dB"],
                  ["Detection", "Infrared oil level detection"],
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

      {/* ================= APPLICATIONS & HOW IT WORKS ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight">Recommended Applications</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {["Homes & living rooms", "Offices", "Brand showrooms", "Boutique stores", "Interior-focused commercial spaces"].map((item, i) => (
            <span key={i} className="px-5 py-3 bg-white border border-slate-100 rounded-xl shadow-sm text-[10px] font-bold text-slate-700 uppercase tracking-widest">
              {item}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center text-left bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white">
          <div>
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight">How it Works</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
              The diffuser converts fragrance oil into micro-fine particles using cold-air atomization, dispersed evenly with high-pressure air and hidden fans.
            </p>
            <div className="space-y-2 text-[10px] font-black uppercase tracking-widest text-blue-400">
               <p className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4"/> No heat damage to oil</p>
               <p className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4"/> No water dilution</p>
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 flex flex-col items-center">
             <BeakerIcon className="w-10 h-10 text-blue-500 mb-6" />
             <img src={AeroPillar4} alt="Internal View" className="w-full h-40 object-contain rounded-xl opacity-80" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight">Why Choose AeroPillar?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Elegant floor-standing design",
            "Strong scent coverage without wall installation",
            "Smart app-based control",
            "Quiet and efficient operation",
            "Durable and premium build quality",
            "Suitable for both home and light commercial use"
          ].map((text, i) => (
            <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
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
            <h4 className="text-lg font-bold mb-4">Maintenance</h4>
            <ul className="space-y-2 text-xs text-slate-500 font-light">
               <li>• Simple fragrance bottle replacement</li>
               <li>• Oil level monitoring & Stable components</li>
            </ul>
          </div>
          <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl">
            <h4 className="text-lg font-bold mb-4">Cool Max Support</h4>
            <ul className="space-y-2 text-xs text-blue-50 font-light">
               <li>• Product & Fragrance consultation</li>
               <li>• Maintenance and refill assistance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA (MASTER REDIRECT) ================= */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10 tracking-tight leading-tight">Speak with Our Scent Specialists</h2>
          <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a floor-standing aroma diffuser that delivers performance with elegance? Our specialists are here to help.
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

export default AeroPillarPage;