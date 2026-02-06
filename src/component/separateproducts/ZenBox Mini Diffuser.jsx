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
  CursorArrowRaysIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import ZenBoxMini1 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/1.webp";
import ZenBoxMini2 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/2.webp";
import ZenBoxMini3 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/3.webp";
import ZenBoxMini4 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/4.webp";

const ZenBoxMiniPage = () => {
  const [activeImg, setActiveImg] = useState(ZenBoxMini1);
  const gallery = [ZenBoxMini1, ZenBoxMini2, ZenBoxMini3, ZenBoxMini4];

  // Redirection Links
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20ZenBox%20Mini%20Diffuser.`;
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
              Small Space & Versatility Series
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
              ZenBox Mini Diffuser
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed">
              Compact Desktop & Wall-Mounted Aroma Diffuser for Small Spaces
            </p>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed font-light">
              The ZenBox Mini Diffuser is a compact and lightweight desktop & wall-mounted aroma diffuser designed for small spaces that require reliable fragrance control without complex installation. With its battery-powered operation, four-button control panel, and dual desktop/wall-mount flexibility, ZenBox Mini delivers consistent scent diffusion in a clean, minimal form.
            </p>
            <p className="text-sm text-slate-500 mb-8 italic border-l-4 border-blue-600 pl-6 font-light">
              This diffuser is ideal for users looking for a simple home scent system or a small commercial aroma diffuser that is easy to operate, maintain, and install.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
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
              <img src={activeImg} alt="ZenBox Mini Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="ZenBox variant thumb" />
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
              ZenBox Mini Diffuser is built for practicality and everyday use. Its compact PP body, combined with a novel exterior design, makes it suitable for both visible wall placement and discreet desktop use. The diffuser runs on 3 AA batteries, eliminating the need for wired power connections and allowing flexible placement.
              Designed to balance aesthetics and performance, ZenBox Mini is a dependable solution for controlled fragrance diffusion in compact environments.
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
              { icon: ArrowsPointingOutIcon, text: "Desktop & wall-mounted aroma diffuser" },
              { icon: Battery100Icon, text: "Battery-powered operation (no wiring required)" },
              { icon: CursorArrowRaysIcon, text: "Four-button display panel control" },
              { icon: BoltIcon, text: "Customizable diffusion cycles" },
              { icon: Square3Stack3DIcon, text: "Compact, lightweight structure" },
              { icon: SpeakerXMarkIcon, text: "Quiet and stable operation" },
              { icon: SparklesIcon, text: "Minimalist modern exterior design" }
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
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight">Premium Design & Build Quality</h2>
        <div className="grid gap-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 text-left">
              <h3 className="text-xl font-serif mb-4 text-slate-900">Novel Exterior Design</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">
                The ZenBox Mini Diffuser features a clean, modern exterior that blends naturally into residential and professional interiors. Its compact form ensures it does not dominate the space.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {["Home interiors", "Office cabins", "Washrooms", "Small retail areas"].map((li, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium p-2 bg-white rounded-lg border border-slate-100 shadow-sm">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" /> {li}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-slate-100 p-6 order-1 md:order-2 h-64 flex items-center justify-center">
               <img src={ZenBoxMini2} alt="Novel Exterior Design" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-slate-100 p-6 h-64 flex items-center justify-center">
               <img src={ZenBoxMini3} alt="Four-Button Operation" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4 text-slate-900">Four-Button Display Panel</h3>
              <p className="text-sm text-slate-500 mb-4 font-light text-left">The built-in four-button control panel allows users to precisely manage their environment:</p>
              <ul className="space-y-2">
                 {["Adjust diffusion cycles", "Customize working time", "Control fragrance output"].map((li, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-bold text-[10px] uppercase tracking-widest text-left">
                       <BoltIcon className="w-5 h-5 text-blue-600 shrink-0" /> {li}
                    </li>
                 ))}
              </ul>
              <p className="mt-6 text-slate-400 text-[10px] italic text-left">Different gear settings regulate oil consumption based on user preference.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl text-left">
               <ArrowsPointingOutIcon className="w-10 h-10 text-blue-400 mb-4" />
               <h3 className="text-xl font-serif mb-2">Dual Placement Flexibility</h3>
               <p className="text-slate-400 text-xs leading-relaxed mb-4 font-light">Designed for dual placement to optimize fragrance based on space layout and airflow.</p>
               <div className="flex gap-4">
                  <div className="px-3 py-1 bg-white/5 rounded-lg border border-white/10 text-[9px] font-black uppercase tracking-widest text-blue-200">Wall-Mounted</div>
                  <div className="px-3 py-1 bg-white/5 rounded-lg border border-white/10 text-[9px] font-black uppercase tracking-widest text-blue-200">Desktop</div>
               </div>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-[2rem] shadow-xl text-left">
               <Battery100Icon className="w-10 h-10 text-white mb-4" />
               <h3 className="text-xl font-serif mb-2">Battery Convenience</h3>
               <p className="text-blue-100 text-xs leading-relaxed font-light italic">Powered by 3 AA batteries, ZenBox Mini Diffuser offers cable-free installation and easy replacement in any area.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
             <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm text-left">
                <SpeakerXMarkIcon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-serif mb-2">Quiet Operation</h3>
                <p className="text-slate-500 font-light text-xs leading-relaxed">Operating at ≤63 dB, delivers effective aroma diffusion while maintaining a stable and reliable operation.</p>
             </div>
             <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm text-left">
                <ShieldCheckIcon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-serif mb-2">Durable Build</h3>
                <p className="text-slate-500 font-light text-xs leading-relaxed">Made from high-quality PP material, the lightweight yet durable body is easy to clean and safe for operation.</p>
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
                  ["Product Type", "Desktop & Small Space Aroma Diffuser"],
                  ["Fragrance Capacity", "45 ml"],
                  ["Power Source", "3 AA Batteries"],
                  ["Power Consumption", "2W"],
                  ["Coverage Area", "100 m³"],
                  ["Oil Consumption", "0.5 g/h ±5% (variable settings)"],
                  ["Noise Level", "≤63 dB"],
                  ["Net Weight", "0.26 kg"],
                  ["Dimensions", "W90 × D41 × H152 mm"],
                  ["Material", "High-quality PP"]
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
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["Homes", "Offices", "Washrooms", "Clinics", "Small commercial interiors"].map((item, i) => (
            <span key={i} className="px-6 py-3 bg-white border border-slate-100 rounded-xl shadow-sm text-[10px] font-bold text-slate-700 uppercase tracking-widest">
              {item}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center text-left">
          <div className="relative h-80">
             <img src={ZenBoxMini4} alt="Placement Detail" className="w-full h-full object-contain rounded-[2rem] shadow-xl" />
             <div className="absolute -bottom-4 -right-4 p-6 bg-blue-600 text-white rounded-2xl shadow-xl">
                <span className="text-xl font-black italic uppercase">No Wires</span>
                <p className="text-[8px] font-bold uppercase tracking-widest">AA Battery Powered</p>
             </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight leading-tight">Why Choose ZenBox Mini Diffuser</h2>
            <div className="space-y-3">
              {[
                "Simple battery-powered installation",
                "Customizable fragrance control",
                "Desktop & wall-mount usability",
                "Compact and lightweight design",
                "Reliable performance for small spaces"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 text-xs font-medium">{text}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-slate-400 font-medium text-[11px] italic">A practical choice for users seeking a compact home diffuser with controlled output.</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: COLLECTION ================= */}
      <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-[1200px] mx-auto text-center border-t border-slate-100 pt-16">
          <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight">The Desktop & Small Space Collection</h2>
          <p className="text-sm text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            ZenBox Mini Diffuser belongs to Cool Max’s Desktop & Small Space Aroma Diffusers category — focused on simplicity, efficiency, and user convenience.
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {["OpalMist Clock", "LuxePanel Diffuser", "AeroCube Diffuser"].map((range, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[9px] text-slate-500 cursor-pointer">
                Explore {range}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: CTA (MASTER REDIRECT) ================= */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10 tracking-tight leading-tight">Bring Controlled Fragrance to Small Spaces</h2>
          <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a compact aroma diffuser that fits effortlessly into your space? Our specialists are here to guide you.
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

export default ZenBoxMiniPage;