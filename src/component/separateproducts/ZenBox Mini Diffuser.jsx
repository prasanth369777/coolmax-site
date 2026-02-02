import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  SpeakerXMarkIcon, 
  SparklesIcon, 
  BoltIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  Battery100Icon,
  ShieldCheckIcon,
  ArrowsPointingOutIcon,
  Square3Stack3DIcon,
  CursorArrowRaysIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import ZenBoxMini1 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/1.webp";
import ZenBoxMini2 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/2.webp";
import ZenBoxMini3 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/3.webp";
import ZenBoxMini4 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/4.webp";

const ZenBoxMiniPage = () => {
  const [activeImg, setActiveImg] = useState(ZenBoxMini1);
  const gallery = [ZenBoxMini1, ZenBoxMini2, ZenBoxMini3, ZenBoxMini4];

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
              Small Space & Versatility Series
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              ZenBox Mini Diffuser
            </h1>
            <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">
              Compact Desktop & Wall-Mounted Aroma Diffuser for Small Spaces
            </p>
            <p className="text-slate-500 mb-10 leading-relaxed font-light">
              The ZenBox Mini Diffuser is a compact and lightweight desktop & wall-mounted aroma diffuser designed for small spaces that require reliable fragrance control without complex installation. With its battery-powered operation, four-button control panel, and dual desktop/wall-mount flexibility, ZenBox Mini delivers consistent scent diffusion in a clean, minimal form.
            </p>
            <p className="text-slate-500 mb-10 italic border-l-4 border-blue-600 pl-6">
              This diffuser is ideal for users looking for a simple home scent system or a small commercial aroma diffuser that is easy to operate, maintain, and install.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg">
                Get Expert Guidance <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-square bg-white rounded-[3rem] border border-slate-100 shadow-xl flex items-center justify-center p-12 overflow-hidden">
              <img src={activeImg} alt="ZenBox Mini Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-16 h-20 rounded-xl border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-white opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="ZenBox variant thumb" />
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
              ZenBox Mini Diffuser is built for practicality and everyday use. Its compact PP body, combined with a novel exterior design, makes it suitable for both visible wall placement and discreet desktop use. The diffuser runs on 3 AA batteries, eliminating the need for wired power connections and allowing flexible placement.
              Designed to balance aesthetics and performance, ZenBox Mini is a dependable solution for controlled fragrance diffusion in compact environments.
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
              { icon: ArrowsPointingOutIcon, text: "Desktop & wall-mounted aroma diffuser" },
              { icon: Battery100Icon, text: "Battery-powered operation (no wiring required)" },
              { icon: CursorArrowRaysIcon, text: "Four-button display panel control" },
              { icon: BoltIcon, text: "Customizable diffusion cycles" },
              { icon: Square3Stack3DIcon, text: "Compact, lightweight structure" },
              { icon: SpeakerXMarkIcon, text: "Quiet and stable operation" },
              { icon: SparklesIcon, text: "Minimalist modern exterior design" }
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
        <h2 className="text-3xl md:text-5xl font-serif mb-20 text-center tracking-tight">Premium Design & Build Quality</h2>
        
        <div className="grid gap-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Novel Exterior Design</h3>
              <p className="text-slate-500 leading-relaxed mb-6 font-light">
                The ZenBox Mini Diffuser features a clean, modern exterior that blends naturally into residential and professional interiors. Its compact form ensures it does not dominate the space, while the minimalist surface finish enhances visual appeal.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Home interiors", "Office cabins", "Washrooms", "Small commercial areas"].map((li, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 font-medium p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" /> {li}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2.5rem] bg-slate-100 p-8 order-1 md:order-2 flex justify-center">
               <img src={ZenBoxMini2} alt="Novel Exterior Design" className="w-full h-80 object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[2.5rem] bg-slate-100 p-8 flex justify-center">
               <img src={ZenBoxMini3} alt="Four-Button Operation" className="w-full h-80 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Four-Button Display Panel Operation</h3>
              <p className="text-slate-500 mb-6 font-light">The built-in four-button control panel allows users to precisely manage their environment:</p>
              <ul className="space-y-4 mb-8">
                 <li className="flex items-center gap-4 text-slate-700 font-bold text-xs uppercase tracking-widest"><BoltIcon className="w-6 h-6 text-blue-600"/> Adjust diffusion cycles</li>
                 <li className="flex items-center gap-4 text-slate-700 font-bold text-xs uppercase tracking-widest"><BoltIcon className="w-6 h-6 text-blue-600"/> Customize working time</li>
                 <li className="flex items-center gap-4 text-slate-700 font-bold text-xs uppercase tracking-widest"><BoltIcon className="w-6 h-6 text-blue-600"/> Control fragrance output</li>
              </ul>
              <p className="text-slate-400 text-sm italic">Different gear settings regulate oil consumption, ensuring controlled fragrance delivery based on user preference.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-xl">
               <ArrowsPointingOutIcon className="w-12 h-12 text-blue-400 mb-6" />
               <h3 className="text-2xl font-serif mb-4">Desktop & Wall-Mounted Flexibility</h3>
               <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">Designed for dual placement to optimize fragrance based on space layout and airflow:</p>
               <div className="flex gap-4">
                  <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-[10px] font-black uppercase tracking-widest text-blue-400">Wall-Mounted</div>
                  <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-[10px] font-black uppercase tracking-widest text-blue-400">Desktop</div>
               </div>
            </div>
            <div className="bg-blue-600 text-white p-10 rounded-[3rem] shadow-xl shadow-blue-100">
               <Battery100Icon className="w-12 h-12 text-white mb-6" />
               <h3 className="text-2xl font-serif mb-4">Battery-Powered Convenience</h3>
               <p className="text-blue-50 text-sm leading-relaxed mb-6 font-light">Powered by 3 AA batteries, ZenBox Mini Diffuser offers cable-free installation and easy replacement in areas without direct power access.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
             <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm">
                <SpeakerXMarkIcon className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-2xl font-serif mb-4">Quiet & Efficient Performance</h3>
                <p className="text-slate-500 font-light leading-relaxed">Operating at ≤63 dB, ZenBox Mini delivers effective aroma diffusion while maintaining a stable and reliable operation suitable for daily use in small spaces.</p>
             </div>
             <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm">
                <ShieldCheckIcon className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-2xl font-serif mb-4">Durable & Safe Construction</h3>
                <p className="text-slate-500 font-light leading-relaxed">Made from high-quality PP material, the lightweight yet durable body is easy to clean and safe for continuous operation.</p>
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
                  ["Product Type", "Desktop & Small Space Aroma Diffuser"],
                  ["Fragrance Capacity", "45 ml"],
                  ["Power Source", "3 AA Batteries"],
                  ["Power Consumption", "2W"],
                  ["Coverage Area", "100 m³"],
                  ["Oil Consumption", "0.5 g/h ±5% (varies by gear setting)"],
                  ["Noise Level", "≤63 dB"],
                  ["Net Weight", "0.26 kg"],
                  ["Dimensions", "W90 × D41 × H152 mm"],
                  ["Color Options", "Black, White"],
                  ["Material", "High-quality PP"]
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
            "Homes", "Offices", "Washrooms", 
            "Clinics", "Small commercial interiors"
          ].map((item, i) => (
            <span key={i} className="px-8 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm text-sm font-bold text-slate-700 uppercase tracking-wider">
              {item}
            </span>
          ))}
        </div>
        <p className="text-slate-500 font-medium italic max-w-2xl mx-auto leading-relaxed">Its size and mounting flexibility make it especially effective in compact environments.</p>
      </section>

      {/* ================= SECTION 6: WHY CHOOSE ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <img src={ZenBoxMini4} alt="Placement Detail" className="w-full h-96 object-contain rounded-[3rem] shadow-2xl" />
             <div className="absolute -bottom-6 -right-6 p-8 bg-blue-600 text-white rounded-3xl shadow-xl">
                <span className="text-3xl font-black italic">No Wires</span>
                <p className="text-[10px] font-bold uppercase tracking-widest">AA Battery Powered</p>
             </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Why Choose ZenBox Mini Diffuser</h2>
            <div className="space-y-4">
              {[
                "Simple battery-powered installation",
                "Customizable fragrance control",
                "Desktop & wall-mount usability",
                "Compact and lightweight design",
                "Reliable performance for small spaces"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors">
                  <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                  <span className="text-slate-700 font-medium">{text}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-slate-400 font-medium text-sm italic">This diffuser is a practical choice for users seeking a compact home diffuser machine with controlled scent output.</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: COLLECTION ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-[1400px] mx-auto text-center border-t border-slate-100 pt-24">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Part of Our Desktop & Small Space Collection</h2>
          <p className="text-slate-500 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            ZenBox Mini Diffuser belongs to Cool Max’s Desktop & Small Space Aroma Diffusers category — focused on simplicity, efficiency, and user convenience.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["OpalMist Clock Diffuser", "LuxePanel Diffuser", "AeroCube Diffuser"].map((range, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[10px] text-slate-500 cursor-pointer">
                Explore {range}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: CTA ================= */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10 tracking-tight leading-tight">Bring Controlled Fragrance to Small Spaces</h2>
          <p className="text-slate-400 text-xl mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a compact aroma diffuser that fits effortlessly into your space? Our specialists are here to guide you.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl">Contact Cool Max for product details</button>
            <button className="px-12 py-5 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all">Get expert guidance for your application</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ZenBoxMiniPage;