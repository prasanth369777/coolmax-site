import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  SparklesIcon, 
  CheckCircleIcon,
  AdjustmentsHorizontalIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon,
  BeakerIcon,
  ShoppingBagIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ClockIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

// --- CORRECT IMAGE IMPORTS MAPPED TO PRODUCTS ---
import HeroImg from "../../asset/productimg/CMwebpimg/Mistbox X commercial Diffuser/7.webp"; 
import FeatureImg2 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/5.webp"; 

export default function CommercialDiffusersPage() {
  const whatsappNumber = "971522286401";

  // --- SEO Implementation ---
  useEffect(() => {
    document.title = "Commercial Aroma Diffusion Solutions in UAE | Cool Max";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Commercial aroma diffusion solutions in UAE for offices, hotels, & healthcare spaces. Explore professional scent diffusers and HVAC aroma systems by Cool Max.");
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      {/* Canonical URL */}
      <link rel="canonical" href="https://coolmaxscent.com/commercial-aroma-diffusion-solutions" />
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full lg:w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-full lg:w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[80vh] flex flex-col lg:flex-row items-center pt-24 lg:pt-12 pb-12 gap-12 text-left">
          
          <div className="w-full lg:w-1/2 flex flex-col items-start z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6 shadow-sm mt-16">
                <SparklesIcon className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">
                  Commercial Aroma Diffusion Solutions in UAE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl xl:text-6xl font-serif text-slate-900 tracking-tighter mb-6 leading-[0.95]">
                Commercial Aroma <br />
                <span className="italic text-slate-400 font-light pr-2">Diffusion in UAE</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-sans text-slate-600 mb-6 font-medium">
                Professional Scent Diffuser Machines for Offices & Business Spaces
              </h2>
              
              <p className="text-lg text-slate-500 font-light max-w-xl mb-8 leading-relaxed text-left">
                Our Commercial Aroma Diffusion Solutions in UAE from Cool Max are designed for professional environments where consistent fragrance, reliability, and controlled diffusion are essential. Each Commercial Scent Diffuser we provide is suitable for offices, clinics, retail stores, and educational institutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#collection" className="px-8 py-4 bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl">
                  Explore Collection
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[500px] p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[3rem] shadow-inner border border-slate-50" />
              <img 
                src={HeroImg} 
                alt="Commercial Scent Diffuser Machine" 
                className="w-full h-auto object-contain relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)]" 
              />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: COLLECTION ================= */}
        <section className="py-16 border-t border-slate-100" id="collection">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter leading-none text-center">Our Commercial Aroma Diffuser Collection</h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto font-light text-center">Explore our range of professional aroma diffusers and HVAC Aroma Diffusion Solutions designed for commercial environments.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Product 1 */}
            <motion.div whileHover={{ y: -10 }} className="bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm flex flex-col">
              <div className="h-80 bg-white m-4 rounded-[2.5rem] flex items-center justify-center p-12">
                <img src={FeatureImg2} alt="AeroBlack Med Commercial Diffuser" className="max-h-full w-auto object-contain" />
              </div>
              <div className="p-10 pt-4 text-left">
                <h3 className="text-3xl font-serif text-slate-900 mb-4">AeroBlack Med – Commercial Aroma Diffuser</h3>
                <p className="text-slate-600 mb-6 font-light leading-relaxed text-left">
                  A reliable Commercial Scent Diffuser designed for continuous use in offices and business interiors. Provides even fragrance distribution without overpowering the space.
                </p>
                <div className="mb-8">
                  <p className="text-[10px] font-black uppercase text-blue-600 tracking-widest mb-3">Best suited for:</p>
                  <div className="flex flex-wrap gap-2 text-left">
                    {["Offices", "Clinics", "Training centers", "Corporate spaces"].map((tag, i) => (
                      <span key={i} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs text-slate-500">{tag}</span>
                    ))}
                  </div>
                </div>
                <a href="/product/aeroblack-med" className="w-full py-4 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-md">
                  View product details <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Product 2 */}
            <motion.div whileHover={{ y: -10 }} className="bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm flex flex-col">
              <div className="h-80 bg-white m-4 rounded-[2.5rem] flex items-center justify-center p-12">
                <img src={HeroImg} alt="MistBox X Commercial Scent Diffuser" className="max-h-full w-auto object-contain" />
              </div>
              <div className="p-10 pt-4 text-left">
                <h3 className="text-3xl font-serif text-slate-900 mb-4 text-left">MistBox X – Mid-Size Commercial Diffuser</h3>
                <p className="text-slate-600 mb-6 font-light leading-relaxed text-left">
                  A compact yet powerful aroma diffuser suitable for medium-sized commercial areas. Designed for steady performance and easy maintenance.
                </p>
                <div className="mb-8">
                  <p className="text-[10px] font-black uppercase text-blue-600 tracking-widest mb-3">Best suited for:</p>
                  <div className="flex flex-wrap gap-2 text-left">
                    {["Retail stores", "Reception areas", "Waiting lounges", "Salons"].map((tag, i) => (
                      <span key={i} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs text-slate-500">{tag}</span>
                    ))}
                  </div>
                </div>
                <a href="/product/mistbox-x" className="w-full py-4 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-md">
                  View product details <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 2: WHY USE ================= */}
        <section className="py-16">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-left relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 tracking-tighter leading-none text-left">Why Use Commercial Aroma Diffusion Solutions in UAE?</h2>
            <p className="text-slate-400 mb-12 text-lg max-w-3xl text-left font-light leading-relaxed">Business environments require scenting solutions that go beyond basic air fresheners. Our Commercial Scent Diffuser systems are built for long-term reliability.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Consistent Fragrance Coverage", desc: "Ensures the space remains fresh from opening to closing time.", icon: <ClockIcon /> },
                { title: "Professional & Balanced Scenting", desc: "Subtle fragrance that enhances comfort without distraction.", icon: <SparklesIcon /> },
                { title: "Designed for Daily Use", desc: "Built to handle continuous operation in busy environments.", icon: <BoltIcon /> },
                { title: "Low Maintenance", desc: "Reduced need for frequent refills and manual intervention.", icon: <Cog6ToothIcon /> }
              ].map((item, idx) => (
                <div key={idx} className="space-y-4 text-left">
                  <div className="w-10 h-10 text-blue-400">{item.icon}</div>
                  <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed text-left">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHERE USED ================= */}
        <section className="py-16 text-left">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter leading-none text-left">Where Commercial Aroma Diffusion Solutions in UAE Are Used</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { title: "Corporate offices", icon: <BuildingOfficeIcon /> },
              { title: "Clinics and healthcare centers", icon: <BeakerIcon /> },
              { title: "Retail stores and showrooms", icon: <ShoppingBagIcon /> },
              { title: "Educational institutions", icon: <AcademicCapIcon /> },
              { title: "Business reception areas", icon: <UserGroupIcon /> }
            ].map((space, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex items-center gap-6 group hover:bg-white hover:border-blue-200 transition-all shadow-sm">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {React.cloneElement(space.icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-base font-bold text-slate-700 text-left">{space.title}</h3>
              </div>
            ))}
          </div>
          <p className="mt-12 text-slate-500 font-light italic border-l-4 border-slate-100 pl-6 text-left">These Commercial Scent Diffuser systems are ideal for spaces where customer experience and employee comfort are important.</p>
        </section>

        {/* ================= SECTION 4: HOW IT WORKS ================= */}
        <section className="py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tighter leading-none text-left">How Commercial Aroma Diffusion Solutions in UAE Work</h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-8 text-left">
                Our HVAC Aroma Diffusion Solutions use controlled atomization technology to disperse fragrance evenly across the space. The system releases fine fragrance particles that remain suspended in the air, ensuring uniform scent distribution.
              </p>
              <div className="space-y-4 text-left">
                {[
                  "Quiet operation suitable for workspaces",
                  "Adjustable fragrance intensity",
                  "Efficient fragrance oil consumption",
                  "Durable construction for long-term use"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 text-left">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-700 font-medium text-left">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-slate-400 font-light text-left">This technology ensures reliable and comfortable scenting for business environments through advanced HVAC Aroma Diffusion Solutions.</p>
            </div>
            <div className="relative p-12 bg-slate-50 rounded-[3rem] border border-slate-100">
               <AdjustmentsHorizontalIcon className="w-full h-auto text-blue-600/10" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <BoltIcon className="w-32 h-32 text-blue-600 opacity-20" />
               </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: CHOOSING THE RIGHT ONE ================= */}
        <section className="py-16 border-t border-slate-100">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center">Choosing the Right Commercial Scent Diffuser</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { title: "Space Size", desc: "Choose a diffuser that matches the area coverage requirement." },
              { title: "Foot Traffic", desc: "Higher traffic areas benefit from continuous fragrance diffusion." },
              { title: "Working Hours", desc: "Commercial diffusers are ideal for long operating hours." },
              { title: "Maintenance Preference", desc: "Low-maintenance systems reduce operational effort." }
            ].map((pref, idx) => (
              <div key={idx} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] text-left">
                <h3 className="text-xl font-bold text-blue-600 mb-3 text-left">{pref.title}</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed text-left">{pref.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-slate-600 font-medium">Our team can help you select the right Commercial Aroma Diffusion Solutions in UAE based on your business needs.</p>
        </section>

        {/* ================= SECTION 6: WHY COOL MAX ================= */}
        <section className="py-16">
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 text-left">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-10 tracking-tighter text-left">Why Choose Cool Max Commercial Aroma Diffusion Solutions in UAE?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {[
                "UAE-based company with local support",
                "Professional-grade commercial scent diffuser machines",
                "Suitable for offices, clinics, and retail spaces",
                "Maintenance and refill support available",
                "Trusted by businesses across multiple industries"
              ].map((reason, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-left">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium text-left">{reason}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-slate-500 font-light text-left">We focus on providing practical solutions that support real working environments.</p>
          </div>
        </section>

        {/* ================= SECTION 7: RELATED ================= */}
        <section className="py-16 text-center">
            <h2 className="text-2xl md:text-4xl font-serif text-slate-900 mb-12 tracking-tighter text-center">Related Scenting Solutions</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { title: "Large Area & HVAC Aroma Diffusers", link: "/hvac-scenting" },
                { title: "Wall-Mounted & Ceiling Diffusers", link: "/wall-mounted-diffusers" },
                { title: "Maintenance & Refill Support", link: "/Maintenance" }
              ].map((sol, i) => (
                <a key={i} href={sol.link} className="px-8 py-5 bg-white border border-slate-200 rounded-2xl text-sm font-black uppercase tracking-widest text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
                  {sol.title}
                </a>
              ))}
            </div>
            <p className="mt-8 text-slate-400 text-sm text-center">These solutions help create a complete setup for Commercial Aroma Diffusion Solutions in UAE.</p>
        </section>

        {/* ================= SECTION 8: MASTER CTA ================= */}
        <section className="py-24 text-center relative px-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tighter leading-none text-center">
              Need Help Choosing the <br /> <span className="italic text-blue-600 font-light text-center">Right Commercial Aroma Diffuser?</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto font-light leading-relaxed text-center">
              Whether you manage a single office or multiple commercial locations, Cool Max offers dependable Commercial Aroma Diffusion Solutions in UAE designed for professional use. Our team will help you select the right Commercial Scent Diffuser and ensure long-term performance.
            </p>
            
            <p className="text-sm font-black uppercase text-blue-600 tracking-widest mb-8 text-center">Looking for commercial aroma diffusers in UAE?</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="w-full sm:w-auto px-10 py-6 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3">
                Contact Cool Max Today <ArrowRightIcon className="w-4 h-4"/>
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-6 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center justify-center gap-3"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Expert
              </a>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}