import React from "react";
import { motion } from "framer-motion";
import { 
  BuildingOffice2Icon, 
  
  CheckCircleIcon, 
  BuildingStorefrontIcon, 
  
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,

  Cog6ToothIcon,
  ShieldCheckIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

// --- UPDATED IMAGE IMPORTS ---
import HeroImg from "../../asset/productimg/CMwebpimg/AirPulse 150/1.webp"; 
import Product1 from "../../asset/productimg/CMwebpimg/AirPulse 150/2.webp"; 
import Product2 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/1.webp";  
import FeatureImg from "../../asset/productimg/CMwebpimg/AirPulse 150/4.webp"; 

export default function LargeAreaDiffusersPage() {
  const whatsappNumber = "971522286401";

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full lg:w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-full lg:w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[80vh] flex flex-col lg:flex-row items-center pt-24 lg:pt-12 pb-12 gap-12 text-left">
          <div className="w-full lg:w-1/2 flex flex-col items-start z-20">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
                <SparklesIcon className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">Powerful Scenting</span>
              </div>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif text-slate-900 tracking-tighter mb-6 leading-[0.95]">
                Large Area & <br />
                <span className="italic text-slate-400 font-light pr-2">HVAC Aroma</span> <br />
                Diffusers in UAE.
              </h1>
              <p className="text-lg md:text-xl text-slate-500 font-light max-w-xl mb-8 leading-relaxed">
                Powerful Scenting Solutions for Large Commercial Spaces
              </p>
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] mb-8 max-w-xl shadow-sm">
                <p className="text-sm md:text-base text-slate-600 leading-relaxed italic">
                  Large area and HVAC aroma diffusers from Cool Max are designed for environments that require wide fragrance coverage, high performance, and professional control. These scent diffuser machines are ideal for hotels, shopping malls, airports, large offices, showrooms, and other high-footfall commercial spaces.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#collection" className="px-8 py-4 bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl">Explore Collection</a>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3">
                  <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 relative flex items-center justify-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative w-full max-w-[500px] p-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[3rem] shadow-inner border border-slate-50" />
              <img src={HeroImg} alt="HVAC Scent Diffuser" className="w-full h-auto object-contain relative z-10 drop-shadow-2xl" />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: COLLECTION ================= */}
        <section className="py-16 border-t border-slate-100" id="collection">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-12 tracking-tighter text-center">Our Large Area & HVAC Diffuser Collection</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div whileHover={{ y: -10 }} className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 shadow-sm text-left">
              <div className="h-64 bg-white rounded-[2rem] mb-8 flex items-center justify-center p-8">
                <img src={Product1} alt="AeroBlack Pro" className="max-h-full object-contain" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">AeroBlack Pro – HVAC-Integrated Scent Diffuser</h3>
              <p className="text-slate-600 mb-6 font-light">A professional HVAC scent diffuser designed to distribute fragrance through central air-conditioning systems. Ensures uniform scent coverage across large areas.</p>
              <p className="text-[10px] font-black uppercase text-blue-600 tracking-widest mb-4">Best suited for: Hotels • Malls • Airports • Corporate buildings</p>
              <a href="/product/aeroblack-pro" className="inline-flex items-center gap-2 py-4 px-8 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest">View product details <ArrowRightIcon className="w-4 h-4"/></a>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 shadow-sm text-left">
              <div className="h-64 bg-white rounded-[2rem] mb-8 flex items-center justify-center p-8">
                <img src={Product2} alt="AirPulse 150" className="max-h-full object-contain" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">AirPulse 150 – Large Area Aroma Diffuser</h3>
              <p className="text-slate-600 mb-6 font-light">A powerful standalone scent diffuser designed for large open spaces where HVAC integration is not required.</p>
              <p className="text-[10px] font-black uppercase text-blue-600 tracking-widest mb-4">Best suited for: Showrooms • Event halls • Large lobbies • Exhibition spaces</p>
              <a href="/product/airpulse-150" className="inline-flex items-center gap-2 py-4 px-8 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest">View product details <ArrowRightIcon className="w-4 h-4"/></a>
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 2: WHY USE ================= */}
        <section className="py-16">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-left text-white overflow-hidden relative">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tighter">Why Use Large Area & HVAC Aroma Diffusers?</h2>
            <p className="text-slate-400 mb-12 text-lg max-w-3xl">Large commercial environments require specialized scenting solutions that can handle scale and airflow variations.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Wide Coverage Capability", desc: "Designed to scent thousands of square meters evenly." },
                { title: "Uniform Fragrance Distribution", desc: "HVAC integration ensures fragrance reaches every corner of the space." },
                { title: "Professional Scent Control", desc: "Adjust intensity, timing, and diffusion patterns as needed." },
                { title: "Designed for Heavy Usage", desc: "Built for continuous operation in high-traffic environments." }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center"><CheckCircleIcon className="w-6 h-6"/></div>
                  <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                  <p className="text-slate-400 text-sm font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHERE USED ================= */}
        <section className="py-16">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center">Where Large Area & HVAC Diffusers Are Used</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { title: "Hotels and hospitality spaces", icon: <BuildingOffice2Icon /> },
              { title: "Shopping malls and retail chains", icon: <BuildingStorefrontIcon /> },
              { title: "Airports and transportation hubs", icon: <GlobeAltIcon /> },
              { title: "Large office buildings", icon: <BuildingOffice2Icon /> },
              { title: "Showrooms and event venues", icon: <BuildingStorefrontIcon /> }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] flex items-center gap-6 border border-slate-100 hover:bg-white hover:border-blue-200 transition-all">
                <div className="w-12 h-12 text-blue-600">{item.icon}</div>
                <h3 className="font-bold text-slate-700">{item.title}</h3>
              </div>
            ))}
          </div>
          <p className="mt-12 text-slate-500 italic text-center">They are ideal for spaces where brand image and customer experience are critical.</p>
        </section>

        {/* ================= SECTION 4: HOW IT WORKS ================= */}
        <section className="py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">How HVAC Aroma Diffusers Work</h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-8">
                HVAC scent diffusers connect directly to the air-conditioning system, allowing fragrance to be dispersed through existing airflow. This method ensures even scent distribution without visible equipment in guest areas.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Precise fragrance control", "Efficient oil consumption", "Quiet and discreet operation", "Seamless integration with HVAC"].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                    <Cog6ToothIcon className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-bold text-slate-700">{f}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-slate-400 font-light">Standalone large area diffusers use powerful atomization technology to achieve similar coverage without duct connection.</p>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img src={FeatureImg} alt="HVAC technology" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: CHOOSING THE RIGHT ONE ================= */}
        <section className="py-16 border-t border-slate-100">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center">Choosing the Right Large Area or HVAC Diffuser</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { title: "Total Area Size", desc: "Larger spaces require higher output systems." },
              { title: "HVAC Availability", desc: "Choose HVAC integration when central air systems are present." },
              { title: "Foot Traffic Volume", desc: "High-traffic spaces need consistent scent performance." },
              { title: "Brand Experience Goals", desc: "Signature scents help reinforce brand identity." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <h3 className="text-blue-600 font-black text-xs uppercase mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-slate-600 font-medium">Our experts help assess your space and recommend the right solution.</p>
        </section>

        {/* ================= SECTION 6: WHY CHOOSE COOL MAX ================= */}
        <section className="py-16">
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 text-left">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-10 tracking-tighter">Why Choose Cool Max Large Area & HVAC Diffusers?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "UAE-based company with local expertise",
                "Professional HVAC scent diffuser systems",
                "Suitable for hotels, malls, and airports",
                "Ongoing maintenance and refill support",
                "Trusted by commercial and institutional clients"
              ].map((reason, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{reason}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-slate-500 font-light italic">We focus on reliability, efficiency, and real-world performance.</p>
          </div>
        </section>

        {/* ================= SECTION 7: RELATED ================= */}
        <section className="py-16 text-center">
           <h2 className="text-2xl md:text-4xl font-serif text-slate-900 mb-12 tracking-tighter">Related Scenting Solutions</h2>
           <div className="flex flex-wrap justify-center gap-6">
              {["Commercial Aroma Diffusers", "Floor-Standing Aroma Diffusers", "Scent Marketing Solutions"].map((sol, i) => (
                <div key={i} className="px-8 py-5 bg-white border border-slate-200 rounded-2xl text-sm font-black uppercase tracking-widest text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm cursor-pointer">{sol}</div>
              ))}
           </div>
           <p className="mt-8 text-slate-400 text-sm">These solutions work together to create a complete scenting strategy.</p>
        </section>

        {/* ================= SECTION 8: MASTER CTA ================= */}
        <section className="py-24 text-center relative px-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">
              Need a Large Area or <br /> <span className="italic text-blue-600 font-light">HVAC Scenting Solution?</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Whether you manage a hotel, shopping mall, airport, or large commercial facility, Cool Max offers reliable large area and HVAC aroma diffusers designed for professional use. Our team will evaluate your space and recommend the most effective solution.
            </p>
            <p className="text-sm font-black uppercase text-blue-600 tracking-widest mb-8">Looking for large area or HVAC aroma diffusers in UAE?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="w-full sm:w-auto px-10 py-6 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3">
                Contact Cool Max Today <ArrowRightIcon className="w-4 h-4"/>
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-6 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center justify-center gap-3">
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Expert
              </a>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}