import React from "react";
import { motion } from "framer-motion";
import { 
  TruckIcon, 
  ComputerDesktopIcon, 
  BriefcaseIcon, 
  CheckCircleIcon, 
  UserIcon,
  HandThumbUpIcon,
  ArrowRightIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

// --- UPDATED PRODUCT IMAGES ---
import DriveMistHero from "../../asset/productimg/CMwebpimg/coolmax DriveMist Car Aroma Diffuser/1.webp"; 
import DriveMistProduct from "../../asset/productimg/CMwebpimg/coolmax DriveMist Car Aroma Diffuser/2.webp"; 
import VentoCarProduct from "../../asset/productimg/CMwebpimg/VentoCar/1.webp"; 
import DeskScentProduct from "../../asset/productimg/CMwebpimg/DeskScent/1.webp"; 
import NovaCarProduct from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/1.webp"; 
import FeatureImg from "../../asset/productimg/CMwebpimg/VentoCar/4.webp"; 

export default function CarAromaDiffusersPage() {
  const whatsappNumber = "971522286401";

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= HERO SECTION (SPLIT: TEXT LEFT, IMAGE RIGHT) ================= */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center pt-32 lg:pt-0 gap-16">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:w-1/2 flex flex-col items-start text-left z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-8">
                <SparklesIcon className="w-4 h-4 text-blue-600" />
                <span className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">
                  Smart, Compact Scent Solutions
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-7xl xl:text-9xl font-serif text-slate-900 tracking-tighter mb-8 leading-[0.95]">
                Car Aroma <br />
                <span className="italic text-slate-400 font-light">Diffusers.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-xl mb-10 leading-relaxed font-sans">
                Smart, Compact Scent Solutions for Cars & Personal Spaces in UAE.
              </p>

              <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] mb-10 max-w-xl shadow-sm">
                <p className="text-base text-slate-600 leading-relaxed italic font-sans">
                  Cool Max offers a premium range of car aroma diffusers in UAE, designed to keep vehicle interiors fresh, clean, and comfortable.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 font-sans">
                <a href="#collection" className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl">
                  View Collection
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-[#25D366] text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Expert
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: IMAGE STAGE (HIGH VISIBILITY) */}
          <div className="lg:w-1/2 relative flex items-center justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full aspect-square max-w-[600px] p-8"
            >
              {/* Background Plate to make product visible */}
              <div className="absolute inset-0 bg-slate-50 rounded-[4rem] border border-slate-200 shadow-inner" />
              <img 
                src={DriveMistHero} 
                alt="Car Aroma Diffuser" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_50px_50px_rgba(0,0,0,0.2)]" 
              />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: PRODUCT GRID (FIXED VISIBILITY) ================= */}
        <section id="collection" className="py-32 border-t border-slate-100">
          <div className="mb-24 text-left">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-6 font-sans">Premium Hardware</h2>
            <h3 className="text-5xl md:text-7xl font-serif text-slate-900 tracking-tighter">Our Collection</h3>
            <p className="text-xl text-slate-500 mt-6 font-light font-sans max-w-2xl">
              Each product is engineered for the unique UAE climate, focusing on safety and fragrance longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { img: DriveMistProduct, name: "DriveScent", tag: "Compact Car Aroma Diffuser", desc: "A sleek and portable car aroma diffuser designed for everyday driving. It delivers subtle, even fragrance and blends seamlessly into modern vehicle interiors.", checks: ["Personal cars", "Daily commuters", "Small cabins"] },
              { img: VentoCarProduct, name: "VentoCar", tag: "Advanced Car & Personal Space Diffuser", desc: "Designed for longer usage and consistent performance, this diffuser provides steady fragrance output throughout the day.", checks: ["Company vehicles", "Taxis", "Ride-sharing cars"] },
              { img: DeskScentProduct, name: "DeskScent", tag: "Multi-Use Personal Space Diffuser", desc: "A versatile aroma diffuser that works perfectly in both vehicles and office environments. Easy to move, easy to maintain, and visually minimal.", checks: ["Cars", "Office desks", "Meeting rooms"] },
              { img: NovaCarProduct, name: "NovaCar", tag: "Modern Vehicle Aroma Diffuser", desc: "A compact and efficient diffuser designed for shared and frequently used vehicles. Provides reliable fragrance diffusion with minimal attention.", checks: ["Fleet vehicles", "Service cars", "Commercial use"] },
            ].map((product, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-[4rem] bg-slate-50 border border-slate-200 transition-all duration-500 hover:bg-white hover:shadow-2xl"
              >
                {/* Image Container with high contrast */}
                <div className="h-80 w-full bg-white rounded-[3rem] mb-10 overflow-hidden flex items-center justify-center p-12 border border-slate-100 shadow-sm">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-xl" 
                  />
                </div>

                <div className="flex flex-col text-left px-4">
                  <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 font-sans">{product.tag}</span>
                  <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight leading-none">{product.name}</h3>
                  <p className="text-slate-500 mb-10 leading-relaxed font-light text-lg font-sans">
                    {product.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-12 font-sans">
                    {product.checks.map((check, i) => (
                      <span key={i} className="flex items-center gap-2 bg-white px-4 py-2 border border-slate-200 rounded-full text-[10px] font-black uppercase text-slate-700 shadow-sm">
                        <CheckCircleIcon className="w-4 h-4 text-blue-600"/> {check}
                      </span>
                    ))}
                  </div>

                  <a href="/products" className="w-full py-6 rounded-3xl bg-slate-900 text-white font-black tracking-widest uppercase text-[10px] group-hover:bg-blue-600 transition-all shadow-lg flex items-center justify-center gap-4 font-sans">
                    View product details <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-2 transition-transform"/>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 2: EDITORIAL CONTENT ================= */}
        <section className="py-24">
          <div className="relative rounded-[5rem] overflow-hidden bg-slate-900 text-white shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-24 flex flex-col justify-center text-left">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <h2 className="text-4xl md:text-7xl font-serif text-white mb-12 tracking-tighter leading-none">
                    Why Choose <br/>
                    <span className="italic text-slate-400 font-light">Professional?</span>
                  </h2>
                  <p className="text-slate-300 mb-12 leading-relaxed text-xl font-light font-sans max-w-md">
                    Most car fresheners only mask odors temporarily and fade quickly. Cool Max car aroma diffusers offer a smarter and cleaner solution.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-sans">
                    {[
                      { title: "Consistent & Controlled", desc: "Even scent diffusion without sudden strong smells." },
                      { title: "Long-Lasting Freshness", desc: "Designed for continuous use, not short bursts." },
                      { title: "Clean & Safe Design", desc: "No liquid spills, no hanging chemicals, no mess." },
                      { title: "Professional Appearance", desc: "Ideal for business and fleet vehicles." }
                    ].map((item, i) => (
                      <div key={i} className="group text-left">
                        <h4 className="font-black text-white text-[11px] uppercase tracking-widest mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" /> {item.title}
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              <div className="relative min-h-[600px] overflow-hidden">
                <img src={FeatureImg} alt="" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <div className="p-12 bg-white/10 backdrop-blur-2xl rounded-[3rem] text-center border border-white/20">
                      <p className="text-white font-serif text-3xl italic leading-tight">
                        "Subtle fragrance helps create a calm and welcoming atmosphere."
                      </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: APPLICATIONS ================= */}
        <section className="py-32">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-6 font-sans">Versatility</h2>
            <h3 className="text-5xl md:text-8xl font-serif text-slate-900 tracking-tighter">Common Applications</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { title: "Personal cars", icon: <TruckIcon /> },
              { title: "Taxis and ride-sharing", icon: <UserIcon /> },
              { title: "Company fleet vehicles", icon: <BriefcaseIcon /> },
              { title: "Office cabins & desks", icon: <ComputerDesktopIcon /> },
              { title: "Small meeting rooms", icon: <UserIcon /> }
            ].map((item, idx) => (
              <div key={idx} className="w-full md:w-[45%] lg:w-[18%] p-12 bg-slate-50 border border-slate-200 rounded-[3rem] flex flex-col items-center text-center hover:bg-white transition-all duration-500 font-sans shadow-sm">
                <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center text-blue-600 mb-8 border border-slate-100 shadow-sm">
                  {React.cloneElement(item.icon, { className: "w-10 h-10" })}
                </div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 leading-tight">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 8: MASTER CTA ================= */}
        <section className="py-32 text-center bg-slate-50 rounded-[5rem] mb-20 border border-slate-200">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto px-6">
            <h2 className="text-5xl md:text-8xl font-serif text-slate-900 mb-12 tracking-tighter leading-none">
              Need Help Choosing <br/> 
              <span className="italic text-blue-600 font-light">the Right Unit?</span>
            </h2>
            <p className="text-2xl text-slate-500 mb-16 leading-relaxed font-light max-w-2xl mx-auto font-sans">
              Whether for personal use or for multiple vehicles, Cool Max offers dependable solutions designed for comfort and consistency.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-sans">
              <a href="/contact" className="w-full sm:w-auto px-16 py-8 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.3em] rounded-3xl overflow-hidden transition-all hover:bg-blue-600 hover:shadow-2xl flex items-center justify-center gap-3">
                <span className="relative z-10">Contact Cool Max Today</span>
                <HandThumbUpIcon className="relative z-10 w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-16 py-8 bg-[#25D366] text-white font-black text-xs uppercase tracking-[0.3em] rounded-3xl overflow-hidden transition-all hover:bg-[#128C7E] hover:shadow-2xl flex items-center justify-center gap-3 shadow-xl"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Expert
              </a>
            </div>

            <p className="text-slate-400 font-bold mt-12 uppercase tracking-[0.3em] text-[10px] font-sans">
              Expert Guidance Available Across UAE
            </p>
          </motion.div>
        </section>

      </div>
    </div>
  );
}