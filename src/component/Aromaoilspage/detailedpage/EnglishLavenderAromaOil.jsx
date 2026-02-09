import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  SparklesIcon, 
  CheckBadgeIcon, 
  ArrowRightIcon, 
  HomeIcon,
  ChatBubbleLeftRightIcon,
  BeakerIcon,
  ShieldCheckIcon,
  HeartIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

// --- ASSET IMPORT ---
import P6 from "../../../asset/productimg/CMwebpimg/coolmax DriveMist Car Aroma Diffuser/1.webp"; 

const EnglishLavenderAromaOilDetail = () => {
  // Redirection Links
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20English%20Lavender%20Aroma%20Oil%20(CM-0118-FH).`;
  const contactPath = "/contact";

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="mt-16 bg-white text-slate-900 font-sans selection:bg-blue-50 overflow-hidden tracking-tight">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 pb-16 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp} className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              <SparklesIcon className="w-4 h-4" /> Category: Fresh
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-blue-900 mb-6 leading-[1.1] tracking-tighter uppercase">
              ENGLISH <span className="italic font-light text-slate-700">LAVENDER</span>
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-4 uppercase tracking-wider">
              Fresh Herbal Fragrance for Calm & Balanced Environments
            </p>
            <div className="flex gap-6 mb-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                <span>Item Code: <span className="text-slate-900">CM-0118-FH</span></span>
                <span>Strength: <span className="text-blue-700 font-black">Strong</span></span>
            </div>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed font-light mb-8">
              English Lavender Aroma Oil is a fresh and soothing fragrance inspired by classic lavender blends. With crisp herbal openings and a smooth floral heart, this fragrance creates a calm, clean, and comforting atmosphere.
            </p>
            <p className="text-base text-slate-500 leading-relaxed font-light mb-10 italic">
              It is ideal for spaces that require relaxation, freshness, and emotional balance.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-slate-900 transition-all flex items-center gap-2 shadow-lg shadow-blue-100">
                <ChatBubbleLeftRightIcon className="w-4 h-4" /> For Order Now
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
                    src={P6} 
                    alt="English Lavender Aroma Oil" 
                    className="relative w-full max-w-md rounded-[3rem] shadow-2xl z-10 group-hover:scale-105 transition-transform duration-700 object-cover" 
                />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 1: FRAGRANCE PROFILE ================= */}
      <section className="py-24 bg-slate-50 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-950 uppercase">
            Fragrance <span className="italic font-light text-blue-700">Profile</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
             {[
               { label: "Top Notes", notes: "Eucalyptus, Bergamot", color: "bg-blue-400" },
               { label: "Middle Notes", notes: "Geranium, Lavender", color: "bg-blue-600" },
               { label: "Base Notes", notes: "Patchouli, Tonka Bean, Musk", color: "bg-blue-800" }
             ].map((note, i) => (
               <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:border-blue-300 transition-all group">
                 <div className={`w-12 h-12 rounded-full ${note.color} mx-auto mb-6 flex items-center justify-center text-white`}>
                    <BeakerIcon className="w-6 h-6" />
                 </div>
                 <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
                    {note.label}
                 </h3>
                 <p className="text-xl font-serif text-slate-900 leading-snug">
                    {note.notes}
                 </p>
               </div>
             ))}
          </div>
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light italic">
            "This fragrance opens with a refreshing herbal-citrus note, develops into a soft lavender heart, and finishes with a warm, earthy base that feels grounding and pleasant."
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: EXPERIENCE ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="text-3xl md:text-5xl font-serif text-slate-950 leading-tight uppercase">
                Fragrance <br/><span className="italic font-light text-slate-700">Experience</span>
             </h2>
             <ul className="space-y-6 mt-10">
                {[
                    "Crisp and refreshing opening",
                    "Calm, floral-herbal character",
                    "Smooth, warm, long-lasting finish"
                ].map((text, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg text-slate-700 font-light">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)]" /> {text}
                    </li>
                ))}
             </ul>
             <p className="mt-10 text-slate-500 leading-relaxed font-light">
                English Lavender Aroma Oil provides a balanced fragrance experience suitable for continuous use.
             </p>
           </div>
           <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square bg-blue-50 rounded-[2.5rem] p-8 flex flex-col justify-end gap-3 group hover:bg-blue-600 transition-all duration-500">
                <HeartIcon className="w-12 h-12 text-blue-600 group-hover:text-white" />
                <span className="text-[11px] font-bold uppercase text-slate-400 group-hover:text-blue-50">Spas & Wellness</span>
              </div>
              <div className="aspect-square bg-slate-950 rounded-[2.5rem] p-8 flex flex-col justify-end gap-3 group hover:bg-blue-700 transition-all duration-500">
                <ShieldCheckIcon className="w-12 h-12 text-blue-400 group-hover:text-white" />
                <span className="text-[11px] font-bold uppercase text-slate-200">Clinics</span>
              </div>
              <div className="aspect-square bg-slate-100 rounded-[2.5rem] p-8 flex flex-col justify-end gap-3 group hover:bg-blue-600 transition-all duration-500">
                <HomeIcon className="w-12 h-12 text-blue-600 group-hover:text-white" />
                <span className="text-[11px] font-bold uppercase text-slate-400 group-hover:text-blue-50">Residential</span>
              </div>
              <div className="aspect-square bg-blue-100 rounded-[2.5rem] p-8 flex flex-col justify-end gap-3 group hover:bg-slate-950 transition-all duration-500">
                <SunIcon className="w-12 h-12 text-blue-600 group-hover:text-white" />
                <span className="text-[11px] font-bold uppercase text-slate-500 group-hover:text-blue-50">Yoga Spaces</span>
              </div>
           </div>
        </div>
      </section>

      {/* ================= SECTION 4: WHY CHOOSE ================= */}
      <section className="py-24 bg-slate-950 text-white px-6">
        <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-center tracking-tight text-blue-400 italic font-light uppercase">Why Choose English Lavender?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 text-center">
                {[
                    { title: "Balanced Strength", desc: "Strong yet comfortable intensity designed for consistent area coverage." },
                    { title: "Universal Appeal", desc: "A fresh and professional profile that is welcoming to all visitors." },
                    { title: "Elite Formulation", desc: "Professional-grade fragrance oil ensuring pure and clean diffusion." },
                    { title: "Long-Lasting Performance", desc: "Consistent aromatic character that settles beautifully in larger spaces." },
                    { title: "Automated Readiness", desc: "Fully compatible with all professional Cool Max automated scent diffuser systems." }
                ].map((item, i) => (
                    <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col items-center gap-5 hover:bg-white/10 transition-colors">
                        <CheckBadgeIcon className="w-10 h-10 text-blue-400" />
                        <h4 className="text-base font-bold uppercase tracking-widest text-white font-serif italic">{item.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* ================= SECTION 5: SAFETY & USAGE ================= */}
      <section className="py-28 bg-slate-50 px-6 text-left">
        <div className="max-w-[1000px] mx-auto">
            <div className="bg-white rounded-[3rem] p-12 md:p-16 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-12 items-center">
                <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <ShieldCheckIcon className="w-12 h-12 text-blue-600" />
                </div>
                <div>
                    <h2 className="text-2xl font-serif font-bold mb-4 uppercase text-slate-900 tracking-tight">Professional Usage & <span className="italic font-light">Safety</span></h2>
                    <p className="text-slate-500 font-light leading-relaxed">
                        English Lavender Aroma Oil is a professional fragrance oil designed for use with automated scent diffuser machines. Diffusion intensity can be adjusted according to space size and airflow for optimal comfort.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* ================= SECTION 6: CTA ================= */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto bg-slate-950 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
          <h2 className="text-4xl md:text-7xl font-serif mb-10 relative z-10 tracking-tighter leading-tight uppercase text-slate-100">Interested in <br/><span className="italic font-light text-slate-300">this fragrance?</span></h2>
          <p className="text-slate-400 text-lg md:text-2xl mb-12 relative z-10 max-w-3xl mx-auto leading-relaxed font-light">
            Our team can assist you in selecting the right diffuser system and customizing fragrance intensity for your space.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white text-slate-900 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-3">
               <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Scent Expert
            </a>
            <Link to={contactPath} className="px-12 py-5 bg-white/5 text-white rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-white/10 border border-white/10 transition-all flex items-center gap-3">
              Consultation & Installation <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EnglishLavenderAromaOilDetail;