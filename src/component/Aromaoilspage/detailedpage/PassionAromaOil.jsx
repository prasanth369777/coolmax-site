import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  SparklesIcon, 
  CheckBadgeIcon, 
  ArrowRightIcon, 
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
  BeakerIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  FireIcon,
} from "@heroicons/react/24/outline";

// --- CORRECTED ASSET IMPORT ---
import P13 from "../../../asset/Aroma oils img/TAJ SUNSET.webp"; 

const PassionAromaOilDetail = () => {
  // Redirection Links
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20Passion%20Aroma%20Oil%20(CM-0110-OR).`;
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
      <section className="relative pt-24 pb-16 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp} className="order-2 lg:order-1 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 font-sans">
              <SparklesIcon className="w-4 h-4" /> Category: Perfumers Choice
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-950 mb-6 leading-[1.1] tracking-tighter uppercase">
              PASSION <span className="italic font-light text-slate-700">AROMA OIL</span>
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-4 uppercase tracking-wider font-sans">
              Powerful Perfumers Choice Fragrance for Strong Impressions
            </p>
            <div className="flex gap-6 mb-8 text-[11px] font-bold uppercase tracking-widest text-slate-400 font-sans">
                <span>Item Code: <span className="text-slate-900">CM-0110-OR</span></span>
                <span>Strength: <span className="text-blue-700 font-black">Strong</span></span>
            </div>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed font-light mb-8 font-sans text-left">
              Passion Aroma Oil is a bold and expressive perfumers-style fragrance designed to create a strong and confident atmosphere. This fragrance is crafted for spaces that require a noticeable scent presence with a professional and refined character.
            </p>
            <p className="text-base text-slate-500 leading-relaxed font-light mb-10 italic font-sans text-left">
              It is ideal for environments where fragrance plays a key role in creating energy, confidence, and impact.
            </p>
            <div className="flex flex-wrap gap-5 font-sans">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-slate-900 transition-all flex items-center gap-2 shadow-lg shadow-blue-100 font-sans text-center">
                <ChatBubbleLeftRightIcon className="w-4 h-4" /> For Order Now
              </a>
              <Link to={contactPath} className="px-10 py-4 border border-slate-200 text-slate-900 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-blue-50 transition-all font-sans text-center">
                Contact Expert
              </Link>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
                <div className="absolute -inset-4 bg-blue-100/50 rounded-[4rem] blur-2xl group-hover:bg-blue-200/50 transition-all duration-1000"></div>
                <img 
                    src={P13} 
                    alt="Passion Aroma Oil" 
                    className="relative w-full max-w-md rounded-[3rem] shadow-2xl z-10 group-hover:scale-105 transition-transform duration-700 object-cover" 
                />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 1: FRAGRANCE PROFILE ================= */}
      <section className="py-24 bg-slate-50 px-6 lg:px-12 font-sans text-center">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-16 text-slate-950 uppercase text-center">
            Fragrance <span className="italic font-light text-blue-700">Profile</span>
          </h2>
          <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-sm border border-slate-100 max-w-4xl mx-auto">
             <div className="w-16 h-16 rounded-full bg-blue-600 mx-auto mb-8 flex items-center justify-center text-white">
                <BeakerIcon className="w-8 h-8" />
             </div>
             <h3 className="text-xl font-serif font-bold mb-6 text-slate-950 uppercase italic text-center">Fragrance Notes Overview</h3>
             <p className="text-lg text-slate-600 leading-relaxed font-light mb-8 text-center">
                Passion Aroma Oil is designed with a strong and impactful fragrance composition.
             </p>
             <p className="text-base text-slate-500 leading-relaxed font-light mb-8 italic text-center">
                Detailed fragrance note breakdown is available upon consultation or can be explored through the product experience itself.
             </p>
             <p className="text-base text-blue-600 font-medium text-center">
                This approach allows the fragrance to be professionally customized based on space size and scent diffusion requirements.
             </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: EXPERIENCE ================= */}
      <section className="py-24 bg-white px-6 font-sans">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
           <div className="text-left">
             <h2 className="text-3xl md:text-5xl font-serif mb-10 text-slate-950 leading-tight uppercase">
                Fragrance <br/><span className="italic font-light text-slate-700">Experience</span>
             </h2>
             <ul className="space-y-6">
                {[
                    "Strong and confident presence",
                    "Modern, bold perfumers-style character",
                    "Long-lasting and impactful finish"
                ].map((text, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg text-slate-700 font-light">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]" /> {text}
                    </li>
                ))}
             </ul>
             <p className="mt-10 text-slate-500 leading-relaxed font-light italic font-sans text-left">
                Passion Aroma Oil is best suited for spaces that want to leave a lasting impression.
             </p>
           </div>
           <div className="grid grid-cols-2 gap-6 text-left">
              <div className="aspect-square bg-slate-950 rounded-[2.5rem] p-8 flex flex-col justify-end gap-3 group hover:bg-blue-700 transition-all duration-500">
                <BuildingOffice2Icon className="w-12 h-12 text-blue-400 group-hover:text-white" />
                <span className="text-[11px] font-bold uppercase text-slate-200 font-sans">Corporate Offices</span>
              </div>
              <div className="aspect-square bg-blue-50 rounded-[2.5rem] p-8 flex flex-col justify-end gap-3 group hover:bg-blue-700 transition-all duration-500">
                <ShoppingBagIcon className="w-12 h-12 text-blue-600 group-hover:text-white" />
                <span className="text-[11px] font-bold uppercase text-slate-400 group-hover:text-blue-50 font-sans">Premium Retail</span>
              </div>
              <div className="aspect-square bg-slate-100 rounded-[2.5rem] p-8 flex flex-col justify-end gap-3 group hover:bg-blue-700 transition-all duration-500">
                <UserGroupIcon className="w-12 h-12 text-blue-600 group-hover:text-white" />
                <span className="text-[11px] font-bold uppercase text-slate-400 group-hover:text-blue-50 font-sans">Entrance Areas</span>
              </div>
              <div className="aspect-square bg-blue-600 rounded-[2.5rem] p-8 flex flex-col justify-end gap-3 group hover:bg-slate-950 transition-all duration-500">
                <FireIcon className="w-12 h-12 text-white" />
                <span className="text-[11px] font-bold uppercase text-blue-50 font-sans">High Impact Areas</span>
              </div>
           </div>
        </div>
      </section>

      {/* ================= SECTION 4: WHY CHOOSE ================= */}
      <section className="py-24 bg-slate-950 text-white px-6 font-sans text-left">
        <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif mb-20 tracking-tight text-blue-400 italic font-light uppercase text-center">Why Choose Passion Aroma?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "High-Impact Diffusion", desc: "Strong intensity designed to create a powerful aromatic statement in any space." },
                    { title: "Bold Modernity", desc: "A professional perfumers-style fragrance that projects confidence and energy." },
                    { title: "Premium Commercial Use", desc: "Specifically crafted for elite business and high-end retail environments." },
                    { title: "Consistent Quality", desc: "Professional-grade oil ensuring a long-lasting and reliable scent experience." },
                    { title: "System Ready", desc: "Optimized for use with all advanced automated Cool Max scent delivery systems." }
                ].map((item, i) => (
                    <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col items-center gap-5 hover:bg-white/10 transition-colors text-left">
                        <CheckBadgeIcon className="w-10 h-10 text-blue-400" />
                        <h4 className="text-base font-bold uppercase tracking-widest text-white font-serif italic text-left">{item.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed font-sans font-light text-left">{item.desc}</p>
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
                <div className="text-left">
                    <h2 className="text-2xl font-serif font-bold mb-4 uppercase text-slate-900 tracking-tight text-left">Professional Usage & <span className="italic font-light">Safety</span></h2>
                    <p className="text-slate-500 font-light leading-relaxed text-left">
                        Passion Aroma Oil is a professional fragrance oil intended for use with automated scent diffuser machines. Diffusion intensity can be adjusted according to space size and airflow to maintain an effective and comfortable scent experience.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* ================= SECTION 6: CTA ================= */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-[1200px] mx-auto bg-slate-950 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl font-sans">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full text-center" />
          <h2 className="text-4xl md:text-7xl font-serif mb-10 relative z-10 tracking-tighter leading-tight uppercase text-center text-slate-100">Interested in <br/><span className="italic font-light text-slate-300 font-serif">this fragrance?</span></h2>
          <p className="text-slate-400 text-lg md:text-2xl mb-12 relative z-10 max-w-3xl mx-auto leading-relaxed font-light text-center font-sans">
            Our team can help you select the right diffuser system and customize fragrance intensity based on your space needs.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10 font-sans">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white text-slate-900 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-3 text-center font-sans">
               <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Scent Expert
            </a>
            <Link to={contactPath} className="px-12 py-5 bg-white/5 text-white rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-white/10 border border-white/10 transition-all flex items-center gap-3 text-center font-sans">
              Consultation & Installation <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PassionAromaOilDetail;