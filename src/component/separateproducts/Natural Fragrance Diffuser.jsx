import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  SpeakerXMarkIcon, 
  SparklesIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  BeakerIcon,
  ArrowsPointingOutIcon,
  GlobeAmericasIcon,
  BoltSlashIcon,
  ViewColumnsIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import NaturalFragrance1 from "../../asset/productimg/CMwebpimg/Natural Fragrance Diffusion/1.webp";
import NaturalFragrance2 from "../../asset/productimg/CMwebpimg/Natural Fragrance Diffusion/2.webp";
import NaturalFragrance3 from "../../asset/productimg/CMwebpimg/Natural Fragrance Diffusion/3.webp";
import NaturalFragrance4 from "../../asset/productimg/CMwebpimg/Natural Fragrance Diffusion/4.webp";

const NaturalFragrancePage = () => {
  const [activeImg, setActiveImg] = useState(NaturalFragrance1);
  const gallery = [NaturalFragrance1, NaturalFragrance2, NaturalFragrance3, NaturalFragrance4];

  // Redirection Links
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20Natural%20Fragrance%20Diffuser.`;
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
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <GlobeAmericasIcon className="w-4 h-4" /> Passive / No-Power Series
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight text-slate-900">
              Natural Fragrance Diffuser
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed">
              Passive / No-Power Diffuser for Natural Scenting
            </p>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed font-light">
              The Natural Fragrance Diffuser is a passive aroma diffusion solution designed for users who prefer natural fragrance delivery without electricity, batteries, or noise. This diffuser works through natural air circulation, making it an eco-friendly and maintenance-free choice for small spaces.
            </p>
            <p className="text-sm text-slate-500 mb-8 italic border-l-4 border-green-600 pl-6 font-light">
              With a compact and elegant design, the Natural Fragrance Diffuser blends seamlessly into daily environments while delivering a clean and pleasant fragrance experience.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-green-700 transition-all flex items-center gap-3 shadow-lg">
                Talk to Scent Expert <ChatBubbleLeftRightIcon className="w-4 h-4" />
              </a>
              <a href={contactPath} className="px-6 py-3 border border-slate-200 text-slate-900 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2">
                Contact Cool Max <ArrowRightIcon className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-[4/3] bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center justify-center p-8 overflow-hidden">
              <img src={activeImg} alt="Natural Fragrance Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all ${activeImg === img ? "border-green-600 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="Natural variant thumb" />
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
              Natural Fragrance Diffuser is a zero-power scent diffuser that does not rely on electricity, batteries, heat, or fans. It uses natural fragrance diffusion technology, allowing scent to spread gently and continuously into the surrounding space.
              This diffuser is ideal for users seeking a simple, silent, and sustainable fragrance solution for everyday environments.
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
              { icon: BeakerIcon, text: "Passive fragrance diffusion (no electricity required)" },
              { icon: BoltSlashIcon, text: "Zero power consumption" },
              { icon: SpeakerXMarkIcon, text: "Completely silent operation" },
              { icon: GlobeAmericasIcon, text: "Eco-friendly scenting solution" },
              { icon: SparklesIcon, text: "Compact and elegant appearance" },
              { icon: CheckCircleIcon, text: "Easy placement and instant use" },
              { icon: ViewColumnsIcon, text: "Supports wall-mounted and freestanding placement" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center">
                <item.icon className="w-8 h-8 text-green-500 mx-auto mb-4" />
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
            <div className="order-2 md:order-1">
              <h3 className="text-xl font-serif mb-4 text-slate-900">Natural Fragrance Diffusion Technology</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">
                The Natural Fragrance Diffuser works through natural evaporation and air circulation, allowing fragrance to disperse evenly without mechanical assistance.
              </p>
              <div className="space-y-3">
                {["No motors", "No heating elements", "No power connections"].map((li, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-slate-600 font-bold uppercase tracking-widest p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <SpeakerXMarkIcon className="w-4 h-4 text-green-600 shrink-0" /> {li}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-slate-400 font-medium text-xs italic">The fragrance experience remains pure, gentle, and uninterrupted.</p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-6 order-1 md:order-2 h-64 flex items-center justify-center">
               <img src={NaturalFragrance2} alt="Diffusion Technology" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-slate-100 p-6 h-64 flex items-center justify-center">
               <img src={NaturalFragrance3} alt="Zero Power Design" className="w-full h-full object-contain" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-serif mb-4 text-slate-900">Zero Power, Zero Noise</h3>
              <p className="text-sm text-slate-500 mb-6 font-light">This diffuser operates with no electricity, no batteries, and absolutely no noise. Its silent nature makes it ideal for spaces where mechanical sounds are not welcome.</p>
              <div className="flex flex-wrap gap-2">
                 {["Bedrooms", "Personal spaces", "Quiet environments"].map((tag, i) => (
                   <span key={i} className="px-4 py-1.5 bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-widest rounded-lg border border-green-100">{tag}</span>
                 ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl text-left">
               <SparklesIcon className="w-10 h-10 text-green-400 mb-4" />
               <h3 className="text-xl font-serif mb-2">Compact & Exquisite Design</h3>
               <p className="text-slate-400 text-xs leading-relaxed font-light">Designed with a minimal and refined appearance, it complements both modern and classic interiors. Suitable for placement on desks, shelves, or walls.</p>
            </div>
            <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm flex flex-col justify-center text-left">
               <ArrowsPointingOutIcon className="w-10 h-10 text-green-600 mb-4" />
               <h3 className="text-xl font-serif mb-2">Easy Placement & Use</h3>
               <p className="text-slate-500 text-xs leading-relaxed mb-4 font-light italic">The all-in-one solid perfume cartridge design allows instant usage without setup or installation.</p>
               <div className="flex gap-4">
                  <span className="text-[9px] font-black uppercase text-slate-400 border border-slate-100 px-3 py-1 rounded-full">Wall-Mounted</span>
                  <span className="text-[9px] font-black uppercase text-slate-400 border border-slate-100 px-3 py-1 rounded-full">Freestanding</span>
               </div>
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
                  ["Product Name", "Natural Fragrance Diffuser"],
                  ["Product Category", "Passive / No-Power Diffusers"],
                  ["Net Weight", "0.18 kg"],
                  ["Dimensions", "W75 × D70 × H140 mm"],
                  ["Noise Level", "≤0 dB"],
                  ["Power Requirement", "None"],
                  ["Diffusion Method", "Natural fragrance diffusion"],
                  ["Color Options", "Black / White"]
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

      {/* ================= SECTION 5: IDEAL USAGE AREAS ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight">Ideal Usage Areas</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            "Small rooms", "Personal spaces", "Bedrooms", 
            "Study areas", "Work desks", "Shelves and countertops", "Entryways"
          ].map((item, i) => (
            <span key={i} className="px-6 py-3 bg-white border border-slate-100 rounded-xl shadow-sm text-[10px] font-bold text-slate-700 uppercase tracking-widest">
              {item}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-500 font-medium italic max-w-2xl mx-auto leading-relaxed">Designed to meet different scene needs, it provides gentle fragrance coverage for compact spaces.</p>
      </section>

      {/* ================= SECTION 6: ECO-FRIENDLY ================= */}
      <section className="py-16 bg-green-700 text-white px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight leading-tight">Eco-Friendly Scenting Solution</h2>
            <p className="text-green-100 text-base leading-relaxed mb-8 font-light">
              Because it requires no power and no electronic components, the Natural Fragrance Diffuser is an environmentally responsible choice. It produces zero emissions, consumes no energy, and operates without wasteful accessories.
            </p>
            <div className="inline-flex items-center gap-4 p-5 bg-white/10 rounded-2xl border border-white/20">
               <GlobeAmericasIcon className="w-10 h-10 text-white" />
               <p className="text-[10px] font-black uppercase tracking-[0.2em]">100% Sustainable Operation</p>
            </div>
          </div>
          <div className="relative h-80 flex items-center justify-center">
             <img src={NaturalFragrance4} alt="Eco Friendly Build" className="w-full h-full object-contain rounded-[2rem] opacity-90" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight">Why Choose Natural Fragrance Diffuser</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "No electricity or batteries required",
            "Completely silent operation",
            "Simple, maintenance-free usage",
            "Eco-friendly and sustainable",
            "Clean and natural fragrance delivery",
            "Elegant design for everyday environments"
          ].map((text, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <CheckCircleIcon className="w-6 h-6 text-green-600 mb-4" />
              <p className="text-slate-700 text-sm font-medium leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-slate-500 text-sm font-medium italic max-w-2xl mx-auto">This diffuser is ideal for users who value simplicity, sustainability, and natural scent experiences.</p>
      </section>

      {/* ================= SECTION 8: CTA (MASTER REDIRECT) ================= */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-600/10 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10 tracking-tight leading-tight uppercase">Experience Natural Scenting</h2>
          <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a natural fragrance diffuser that works silently and sustainably?
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-white text-slate-900 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-green-600 hover:text-white transition-all shadow-xl flex items-center gap-2">
               <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Expert
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

export default NaturalFragrancePage;