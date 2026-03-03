import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


import { 
  CheckBadgeIcon, 
  ArrowRightIcon, 
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
  BeakerIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

// --- ASSET IMPORT ---
import P17 from "../../../asset/Aroma oils img/Sweet Oud.webp"; 

const SweetOudAromaOilDetail = () => {
  // Redirection Links
  const whatsappNumber = "+971509282702";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20Sweet%20Oud%20Aroma%20Oil%20(CM-0105-OR).`;
  const contactPath = "/contact/";

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="mt-16 bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-hidden tracking-tight text-left">
     
        <title>Sweet Oud Aroma Oil for Luxury Spaces | Cool Max Scent</title>
        <meta name="description" content="Explore Sweet Oud aroma oil by Cool Max Scent, a strong oriental fragrance with rich oud, praline, clove, and rose notes, ideal for hotels and premium spaces." />
        <link rel="canonical" href="https://www.coolmaxscent.com/oriental-aroma-oil/sweet-oud" />
 
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 pb-16 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp} className="order-2 lg:order-1 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 font-sans">
              <StarIcon className="w-4 h-4" /> Category: Oriental
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-950 mb-6 leading-[1.1] tracking-tighter uppercase text-left">
              Sweet Oud <span className="italic font-light text-slate-700 text-left">Aroma Oil</span>
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-4 uppercase tracking-wider font-sans text-left">
              Bold Oriental Fragrance for Luxurious & Statement Environments
            </p>
            <div className="flex gap-6 mb-8 text-[11px] font-bold uppercase tracking-widest text-slate-400 font-sans text-left">
                <span>Item Code: <span className="text-slate-900">CM-0105-OR</span></span>
                <span>Strength: <span className="text-blue-500 font-black">Strong</span></span>
            </div>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed font-light mb-8 font-sans text-left">
              Sweet Oud Aroma Oil is a deep, intense oriental fragrance crafted for spaces that demand a powerful and memorable scent presence. With rich oud at its core, softened by sweet praline and warm spice, this fragrance creates a bold atmosphere that feels luxurious, confident, and refined.
            </p>
            <p className="text-base text-slate-500 leading-relaxed font-light mb-10 italic font-sans text-left">
              Designed for premium environments, Sweet Oud delivers a long-lasting scent experience that leaves a strong impression without losing balance or elegance.
            </p>
            <div className="flex flex-wrap gap-5 font-sans text-left">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-slate-900 transition-all flex items-center gap-2 shadow-lg shadow-blue-100 text-left">
                <ChatBubbleLeftRightIcon className="w-4 h-4" /> Order Now
              </a>
              <Link to={contactPath} className="px-10 py-4 border border-slate-200 text-slate-900 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-blue-50 transition-all text-left">
                Contact Expert
              </Link>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="order-1 lg:order-2 flex justify-center text-left">
            <div className="relative group font-sans text-left">
                <div className="absolute -inset-4 bg-blue-100/50 rounded-[4rem] blur-2xl group-hover:bg-blue-200/50 transition-all duration-1000 text-left"></div>
                <img 
                    src={P17} 
                    alt="Sweet Oud Aroma Oil" 
                    className="relative w-full max-w-md rounded-[3rem] shadow-2xl z-10 group-hover:scale-105 transition-transform duration-700 object-cover text-left" 
                />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 1: FRAGRANCE PROFILE ================= */}
      <section className="py-24 bg-slate-50 px-6 lg:px-12 text-center text-left">
        <div className="max-w-[1200px] mx-auto font-sans text-left">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 text-slate-950 uppercase text-center text-left">
            Fragrance <span className="italic font-light text-blue-700 font-serif text-left">Profile</span>
          </h2>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400 font-bold mb-16 text-center text-left">Fragrance Notes Breakdown</p>
          <div className="grid md:grid-cols-3 gap-8 mb-16 font-sans text-left">
             {[
               { label: "Top Notes", notes: "Agarwood (Oud), Praline", color: "bg-blue-400" },
               { label: "Middle Notes", notes: "Clove", color: "bg-blue-600" },
               { label: "Base Notes", notes: "Rose", color: "bg-blue-800" }
             ].map((note, i) => (
               <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:border-blue-300 transition-all group font-sans text-left">
                 <div className={`w-12 h-12 rounded-full ${note.color} mx-auto mb-6 flex items-center justify-center text-white text-left`}>
                    <BeakerIcon className="w-6 h-6 text-left" />
                 </div>
                 <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 text-center text-left">{note.label}</h3>
                 <p className="text-xl font-serif text-slate-900 leading-snug text-center text-left">{note.notes}</p>
               </div>
             ))}
          </div>
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light italic font-sans text-center text-left">
            "The fragrance opens with the richness of oud blended with subtle sweetness from praline, moves into warm spicy clove, and settles into a smooth floral rose base that adds depth and sophistication."
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: EXPERIENCE ================= */}
      <section className="py-24 bg-white px-6 font-sans text-left">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center text-left">
           <div className="text-left">
             <h2 className="text-3xl md:text-5xl font-serif mb-10 text-slate-950 leading-tight uppercase text-left">
                Fragrance <br/><span className="italic font-light text-slate-700 font-serif text-left">Experience</span>
             </h2>
             <ul className="space-y-6 text-left">
                {[
                    "Strong and luxurious opening",
                    "Deep oriental character with sweet-spicy warmth",
                    "Long-lasting, bold finish with refined floral undertones"
                ].map((text, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg text-slate-700 font-light font-sans text-left">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)] text-left" /> {text}
                    </li>
                ))}
             </ul>
             <p className="mt-10 text-slate-500 leading-relaxed font-light font-sans text-left">
                Sweet Oud Aroma Oil is designed for spaces where fragrance plays a central role in defining identity and ambiance.
             </p>
           </div>
           
           <div className="text-left">
              <h2 className="text-2xl md:text-4xl font-serif mb-10 text-slate-950 uppercase text-left">
                Best <span className="italic font-light text-blue-700 text-left">Used For</span>
              </h2>
              <div className="grid grid-cols-2 gap-6 text-left">
                <div className="aspect-square bg-slate-950 rounded-[2.5rem] p-8 flex flex-col justify-end gap-3 group hover:bg-blue-700 transition-all duration-500 font-sans text-left">
                  <BuildingOffice2Icon className="w-12 h-12 text-blue-400 group-hover:text-white text-left" />
                  <span className="text-[11px] font-bold uppercase text-slate-200 text-left">Luxury Hotels</span>
                </div>
                <div className="aspect-square bg-blue-50 rounded-[2.5rem] p-8 flex flex-col justify-end gap-3 group hover:bg-blue-700 transition-all duration-500 font-sans text-left">
                  <UserGroupIcon className="w-12 h-12 text-blue-600 group-hover:text-white text-left" />
                  <span className="text-[11px] font-bold uppercase text-slate-400 group-hover:text-blue-100 text-left">Lounges & Areas</span>
                </div>
                <div className="aspect-square bg-slate-100 rounded-[2.5rem] p-8 flex flex-col justify-end gap-3 group hover:bg-blue-600 transition-all duration-500 font-sans text-left">
                  <ShoppingBagIcon className="w-12 h-12 text-blue-600 group-hover:text-white text-left" />
                  <span className="text-[11px] font-bold uppercase text-slate-400 group-hover:text-blue-50 text-left">High-end Retail</span>
                </div>
                <div className="aspect-square bg-blue-600 rounded-[2.5rem] p-8 flex flex-col justify-end gap-3 group hover:bg-slate-950 transition-all duration-500 font-sans text-left">
                  <BuildingOffice2Icon className="w-12 h-12 text-white text-left" />
                  <span className="text-[11px] font-bold uppercase text-blue-50 text-left">Showrooms</span>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* ================= SECTION 4: WHY CHOOSE ================= */}
      <section className="py-24 bg-slate-950 text-white px-6 font-sans text-left">
        <div className="max-w-[1200px] mx-auto text-center font-sans text-left">
            <h2 className="text-3xl md:text-5xl font-serif mb-20 tracking-tight text-blue-400 italic font-light uppercase text-center text-left">Why Choose Sweet Oud Aroma Oil?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                {[
                    { title: "Strong Strength", desc: "Strong fragrance strength for impactful diffusion in high-traffic or large spaces." },
                    { title: "Rich Composition", desc: "A sophisticated rich oud-based oriental composition tailored for luxury branding." },
                    { title: "Elite Formulation", desc: "Professional-grade aroma oil quality ensuring consistent and clean atomization." },
                    { title: "Impactful Diffusion", desc: "Ideal for large and premium spaces that require a statement olfactory presence." },
                    { title: "Proven Performance", desc: "Consistent performance with advanced Cool Max automated scent diffuser systems." }
                ].map((item, i) => (
                    <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col items-center gap-5 hover:bg-white/10 transition-colors text-left">
                        <CheckBadgeIcon className="w-10 h-10 text-blue-400 text-left" />
                        <h4 className="text-base font-bold uppercase tracking-widest text-white font-serif italic text-left">{item.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed font-sans font-light text-left">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* ================= SECTION 5: SAFETY & USAGE ================= */}
      <section className="py-28 bg-slate-50 px-6 font-sans text-left text-left">
        <div className="max-w-[1000px] mx-auto text-left">
            <div className="bg-white rounded-[3rem] p-12 md:p-16 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-12 items-center text-left">
                <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-left">
                    <ShieldCheckIcon className="w-12 h-12 text-blue-600 text-left" />
                </div>
                <div className="text-left">
                    <h2 className="text-2xl font-serif font-bold mb-4 uppercase text-slate-900 tracking-tight text-left">Professional Usage & <span className="italic font-light text-left">Safety</span></h2>
                    <p className="text-slate-500 font-light leading-relaxed font-sans text-left">
                      Sweet Oud Aroma Oil is a professional fragrance oil developed for use with automated scent diffuser machines. Diffusion intensity and coverage can be adjusted based on space size, airflow, and usage needs to ensure a controlled and comfortable scent experience.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* ================= SECTION 6: CTA ================= */}
      <section className="py-24 px-6 text-center text-left">
        <div className="max-w-[1200px] mx-auto bg-slate-950 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl font-sans text-left">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full text-left"></div>
          <h2 className="text-4xl md:text-7xl font-serif mb-10 relative z-10 tracking-tighter leading-tight uppercase text-slate-100 text-center text-left">Interested in <br/><span className="italic font-light text-slate-300 font-serif text-left">this fragrance?</span></h2>
          <p className="text-slate-400 text-lg md:text-2xl mb-12 relative z-10 max-w-3xl mx-auto leading-relaxed font-light font-sans text-center text-left">
            Our team can help you choose the right diffuser system and fine-tune the fragrance strength based on your space requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10 font-sans text-left">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white text-slate-900 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-3 text-left">
               <ChatBubbleLeftRightIcon className="w-5 h-5 text-left" /> WhatsApp Scent Expert
            </a>
            <Link to={contactPath} className="px-12 py-5 bg-white/5 text-white rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-white/10 border border-white/10 transition-all flex items-center gap-3 text-left">
              Consultation & Installation <ArrowRightIcon className="w-5 h-5 text-left" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SweetOudAromaOilDetail;