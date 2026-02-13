import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  SparklesIcon, 
  CheckBadgeIcon, 
  ArrowRightIcon, 
  BuildingOffice2Icon,
  ShoppingBagIcon,
  ChatBubbleLeftRightIcon,
  BeakerIcon,
  ShieldCheckIcon,
  StarIcon
} from "@heroicons/react/24/outline";

// --- CORRECTED ASSET IMPORT ---
import P2 from "../../../asset/Aroma oils img/ARABIAN PENSUILA.webp"; 

const ArabianPeninsulaAromaOilDetail = () => {
  // Redirection Links
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20Arabian%20Peninsula%20Aroma%20Oil%20(CM-0102-OR).`;
  const contactPath = "/contact";

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="mt-16 bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-hidden tracking-tight text-left">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 pb-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp} className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              <StarIcon className="w-4 h-4" /> Category: Oriental
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-950 mb-6 leading-[1.1] tracking-tighter uppercase">
              ARABIAN <span className="italic font-light text-slate-700">PENINSULA</span>
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-4 uppercase tracking-wider">
              Powerful Oriental Fragrance for Grand & Luxurious Environments
            </p>
            <div className="flex gap-6 mb-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                <span>Item Code: <span className="text-slate-900">CM-0102-OR</span></span>
                <span>Strength: <span className="text-blue-700 font-black">Strong</span></span>
            </div>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed font-light mb-8 font-sans">
              Arabian Peninsula Aroma Oil is a bold and luxurious oriental fragrance inspired by traditional Middle Eastern perfumery. With rich oud, warm spices, and deep woody accords, this fragrance creates a strong, premium, and long-lasting scent presence.
            </p>
            <p className="text-base text-slate-500 leading-relaxed font-light mb-10 italic">
              It is designed for large spaces that require a commanding and memorable fragrance experience.
            </p>
            <div className="flex flex-wrap gap-5 font-sans">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-slate-900 transition-all flex items-center gap-2 shadow-lg shadow-blue-100">
                <ChatBubbleLeftRightIcon className="w-4 h-4" /> Order via WhatsApp
              </a>
              <Link to={contactPath} className="px-10 py-4 border border-slate-200 text-slate-900 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-blue-50 transition-all">
                Request Samples
              </Link>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
                <div className="absolute -inset-4 bg-blue-100/50 rounded-[4rem] blur-2xl group-hover:bg-blue-200/50 transition-all duration-1000"></div>
                <img 
                    src={P2} 
                    alt="Arabian Peninsula Aroma Oil" 
                    className="relative w-full max-w-md rounded-[3rem] shadow-2xl z-10 group-hover:scale-105 transition-transform duration-700 object-cover" 
                />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 1: FRAGRANCE PROFILE ================= */}
      <section className="py-24 bg-slate-50 px-6 lg:px-12 text-center">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-16 text-slate-950 uppercase">
            Fragrance <span className="italic font-light">Profile</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
             {[
               { label: "Top Notes", notes: "Saffron, Oudh, Spiced Rose", color: "bg-blue-700" },
               { label: "Middle Notes", notes: "Amber, Frankincense, Sandalwood", color: "bg-blue-800" },
               { label: "Base Notes", notes: "Musk, Leather, Myrrh, Patchouli", color: "bg-blue-900" }
             ].map((note, i) => (
               <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:border-blue-300 transition-all group text-center">
                 <div className={`w-12 h-12 rounded-full ${note.color} mx-auto mb-6 flex items-center justify-center text-white`}>
                    <BeakerIcon className="w-6 h-6" />
                 </div>
                 <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 font-sans">{note.label}</h3>
                 <p className="text-xl font-serif text-slate-900 leading-snug">{note.notes}</p>
               </div>
             ))}
          </div>
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light italic">
            "This fragrance opens with intense spicy-oud notes, develops into a warm and resinous heart, and settles into a deep, leathery base that leaves a lasting impression."
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: EXPERIENCE ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
           <div className="text-left">
             <h2 className="text-3xl md:text-5xl font-serif mb-10 text-slate-950 leading-tight uppercase">
                Fragrance <br/><span className="italic font-light text-slate-700">Experience</span>
             </h2>
             <ul className="space-y-6">
                {[
                    "Strong and powerful opening",
                    "Deep oriental richness with woody warmth",
                    "Long-lasting, luxurious finish"
                ].map((text, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg text-slate-700 font-light font-sans">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]" /> {text}
                    </li>
                ))}
             </ul>
             <p className="mt-10 text-slate-500 leading-relaxed font-sans font-light">
                Arabian Peninsula Aroma Oil is ideal for spaces that want to express heritage, elegance, and prestige through scent.
             </p>
           </div>
           <div className="grid grid-cols-2 gap-6 text-left">
              <div className="aspect-square bg-slate-950 rounded-[2.5rem] p-8 flex flex-col justify-end gap-3 group hover:bg-blue-700 transition-all duration-500">
                <BuildingOffice2Icon className="w-12 h-12 text-blue-500 group-hover:text-white" />
                <span className="text-[11px] font-bold uppercase text-slate-200">Luxury Hotels</span>
              </div>
              <div className="aspect-square bg-blue-50 rounded-[2.5rem] p-8 flex flex-col justify-end gap-3 group hover:bg-blue-700 transition-all duration-500">
                <ShoppingBagIcon className="w-12 h-12 text-blue-600 group-hover:text-white" />
                <span className="text-[11px] font-bold uppercase text-slate-400 group-hover:text-blue-50">Premium Showrooms</span>
              </div>
              <div className="aspect-square bg-slate-100 rounded-[2.5rem] p-8 flex flex-col justify-end gap-3 group hover:bg-blue-700 transition-all duration-500">
                <BuildingOffice2Icon className="w-12 h-12 text-blue-600 group-hover:text-white" />
                <span className="text-[11px] font-bold uppercase text-slate-400 group-hover:text-blue-50">Large Commercial</span>
              </div>
              <div className="aspect-square bg-blue-600 rounded-[2.5rem] p-8 flex flex-col justify-end gap-3 group hover:bg-slate-950 transition-all duration-500">
                <SparklesIcon className="w-12 h-12 text-white" />
                <span className="text-[11px] font-bold uppercase text-blue-50">High-end Hospitality</span>
              </div>
           </div>
        </div>
      </section>

      {/* ================= SECTION 4: WHY CHOOSE ================= */}
      <section className="py-24 bg-slate-950 text-white px-6 text-left">
        <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif mb-20 text-center tracking-tight text-blue-400 italic font-light uppercase">Why Choose Arabian Peninsula?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "Commanding Intensity", desc: "Strong intensity specifically formulated for large-area diffusion." },
                    { title: "Deep Heritage", desc: "Rich oriental character inspired by authentic Middle Eastern perfumery." },
                    { title: "Elite Formulation", desc: "Professional-grade oil designed for consistent, long-lasting performance." },
                    { title: "Universal Compatibility", desc: "Works seamlessly with all advanced Cool Max automated scent systems." },
                    { title: "Prestige Presence", desc: "Leaves a memorable signature that expresses prestige and elegance." }
                ].map((item, i) => (
                    <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col gap-5 hover:bg-white/10 transition-colors">
                        <CheckBadgeIcon className="w-10 h-10 text-blue-500" />
                        <h4 className="text-base font-bold uppercase tracking-widest text-white font-serif italic">{item.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed font-sans font-light">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* ================= SECTION 5: SAFETY & USAGE ================= */}
      <section className="py-28 bg-slate-50 px-6 font-sans text-left">
        <div className="max-w-[1000px] mx-auto">
            <div className="bg-white rounded-[3rem] p-12 md:p-16 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-12 items-center">
                <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <ShieldCheckIcon className="w-12 h-12 text-blue-600" />
                </div>
                <div>
                    <h2 className="text-2xl font-serif font-bold mb-4 uppercase text-slate-900 tracking-tight text-left">Professional Usage & <span className="italic font-light">Safety</span></h2>
                    <p className="text-slate-500 font-light leading-relaxed text-left text-justify md:text-left">
                        Arabian Peninsula Aroma Oil is a professional fragrance oil intended for use with automated scent diffuser machines. Diffusion levels can be adjusted based on space size and airflow to ensure a controlled and pleasant scent experience.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* ================= SECTION 6: CTA ================= */}
      <section className="py-24 px-6 text-center font-sans">
        <div className="max-w-[1200px] mx-auto bg-slate-950 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
          <h2 className="text-4xl md:text-7xl font-serif mb-10 relative z-10 tracking-tighter leading-tight uppercase">Interested in <br/><span className="italic font-light text-slate-300">this fragrance?</span></h2>
          <p className="text-slate-400 text-lg md:text-2xl mb-12 relative z-10 max-w-3xl mx-auto leading-relaxed font-light">
            Our experts can help you select the right diffuser system and customize fragrance intensity for your space.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white text-slate-900 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-3">
               <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Scent Expert
            </a>
            <Link to={contactPath} className="px-12 py-5 bg-white/5 text-white rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-white/10 border border-white/10 transition-all flex items-center gap-3">
              Contact Cool Max <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ArabianPeninsulaAromaOilDetail;