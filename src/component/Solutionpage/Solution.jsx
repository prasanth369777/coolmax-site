import React from "react";
import { motion } from "framer-motion";
import { 
  CloudIcon, 
  BuildingOffice2Icon, 
  TruckIcon, 
  SparklesIcon, 
  WrenchScrewdriverIcon, 
  BoltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  Square3Stack3DIcon,
  ChatBubbleBottomCenterTextIcon,
  AdjustmentsHorizontalIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

// --- IMAGE IMPORTS (Updated Flagship Models) ---
import HVACImg from "../../asset/productimg/CMwebpimg/AirPulse 150/1.webp"; 
import CommercialImg from "../../asset/productimg/CMwebpimg/Mistbox X commercial Diffuser/3.webp";
import PersonalImg from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/1.webp";
import PassiveImg from "../../asset/productimg/CMwebpimg/Natural Fragrance Diffusion/1.webp";
import MaintenanceImg from "../../asset/productimg/CMwebpimg/Titan Diffuser/1.webp";
import MarketingImg from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/1.webp";

const solutionCategories = [
  {
    category: "Industrial & HVAC",
    items: [
      {
        id: "hvac",
        title: "HVAC Scenting",
        description: "Centralized fragrance distribution for large facilities like hotels, malls, and corporate buildings. Scent is delivered evenly through your existing AC ducts.",
        image: HVACImg,
        icon: <CloudIcon />,
        link: "/hvac-scenting",
        features: ["Covers 5000m³+", "Invisible installation", "Central control"]
      }
    ]
  },
  {
    category: "Professional Business",
    items: [
      {
        id: "commercial",
        title: "Commercial Diffusion",
        description: "Standalone professional scenting for showrooms, clinics, and offices. High-performance machines designed for reliability and consistent brand experience.",
        image: CommercialImg,
        icon: <BuildingOffice2Icon />,
        link: "/commercial-diffusion",
        features: ["Adjustable intensity", "Programmable timer", "Premium finish"]
      },
      {
        id: "marketing",
        title: "Scent Marketing",
        description: "Strategic sensory branding to improve customer dwell time and brand recall. We create signature atmospheres tailored to your business identity.",
        image: MarketingImg,
        icon: <SparklesIcon />,
        link: "/washroom-hygiene",
        features: ["Signature fragrances", "Emotional branding", "Customer loyalty"]
      }
    ]
  },
  {
    category: "Personal & Passive",
    items: [
      {
        id: "personal",
        title: "Car & Personal Space",
        description: "Compact, portable solutions for vehicles, private cabins, and home offices. Freshness that moves with you using USB or battery power.",
        image: PersonalImg,
        icon: <TruckIcon />,
        link: "/car-scenting",
        features: ["USB/Battery powered", "Anti-spill design", "Silent motor"]
      },
      {
        id: "passive",
        title: "Passive Scenting",
        description: "Zero-power, maintenance-free fragrance for washrooms, elevators, and corridors. Continuous freshness without electricity or batteries.",
        image: PassiveImg,
        icon: <BoltIcon />,
        link: "/solutions/passive-diffusers",
        features: ["No power needed", "Maintenance free", "Eco-friendly"]
      }
    ]
  },
  {
    category: "Lifecycle Support",
    items: [
      {
        id: "maintenance",
        title: "Refill & Support",
        description: "Full-service maintenance and timely fragrance refills to ensure your systems never go dry. We handle the labor while you focus on business.",
        image: MaintenanceImg,
        icon: <WrenchScrewdriverIcon />,
        link: "/Maintenance",
        features: ["Timely refills", "Deep cleaning", "Performance optimization"]
      }
    ]
  }
];

export default function AllSolutionsPage() {
  const whatsappNumber = "971522286401";

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= NEW HERO SECTION (SPLIT: TEXT LEFT, IMAGE RIGHT) ================= */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center pt-32 lg:pt-0 gap-16 text-left">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:w-1/2 flex flex-col items-start z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm">
                <Square3Stack3DIcon className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] font-sans">
                  End-to-End Scenting
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-7xl xl:text-8xl font-serif text-slate-900 tracking-tighter mb-8 leading-[0.95]">
                Professional <br />
                <span className="italic text-slate-400 font-light pr-2">Scenting Solutions</span> <br />
                for Every Space.
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-xl mb-10 leading-relaxed font-sans">
                At Cool Max, we go beyond simple fragrance. We provide engineered scent environments designed for the unique climates and commercial demands of the UAE.
              </p>

              <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] mb-10 max-w-xl shadow-sm text-left">
                <p className="text-base text-slate-600 leading-relaxed italic font-sans">
                  Explore our comprehensive range of specialized solutions, from industrial-grade HVAC systems to compact personal space diffusers.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 font-sans">
                <a href="#categories" className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl">
                  Browse Categories
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

          {/* RIGHT: IMAGE STAGE */}
          <div className="lg:w-1/2 relative flex items-center justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full aspect-square max-w-[650px] p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[4rem] shadow-inner border border-slate-50" />
              <img 
                src={HVACImg} 
                alt="Flagship HVAC Unit" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_50px_50px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-slate-900/5 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* ================= CATEGORY WISE SECTION ================= */}
        <section id="categories" className="py-24 border-t border-slate-100">
          {solutionCategories.map((cat, catIdx) => (
            <div key={catIdx} className="mb-32">
              <div className="flex items-center gap-6 mb-16 text-left">
                <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 font-sans whitespace-nowrap">{cat.category}</h2>
                <div className="h-px w-full bg-slate-100" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {cat.items.map((sol, idx) => (
                  <motion.div
                    key={sol.id}
                    whileHover={{ y: -10 }}
                    className="group bg-white border border-slate-100 rounded-[3.5rem] overflow-hidden hover:border-blue-200 transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] text-left"
                  >
                    <div className="h-64 relative bg-slate-50 overflow-hidden m-4 rounded-[2.5rem]">
                      <img 
                        src={sol.image} 
                        alt={sol.title} 
                        className="w-full h-full object-contain p-10 group-hover:scale-110 transition-all duration-1000" 
                      />
                      <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-slate-100">
                        {React.cloneElement(sol.icon, { className: "w-6 h-6" })}
                      </div>
                    </div>

                    <div className="p-10 pt-4">
                      <h3 className="text-3xl font-serif text-slate-900 mb-4 tracking-tight leading-none">{sol.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-8 h-20 line-clamp-4 font-sans">
                        {sol.description}
                      </p>

                      <div className="space-y-3 mb-10 font-sans">
                        {sol.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-3 text-[10px] uppercase font-black text-slate-400 tracking-wider">
                            <CheckCircleIcon className="w-4 h-4 text-blue-500" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <a href={sol.link} className="flex items-center justify-between w-full p-5 bg-slate-900 rounded-2xl group-hover:bg-blue-600 transition-all shadow-lg">
                        <span className="text-xs font-black uppercase tracking-widest text-white">Explore Solution</span>
                        <ArrowRightIcon className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ================= OUR APPROACH ================= */}
        <section className="py-24">
          <div className="bg-slate-50 rounded-[4rem] border border-slate-100 p-10 md:p-24 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-20 opacity-5">
              <AdjustmentsHorizontalIcon className="w-96 h-96 text-slate-900" />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10 text-left">
              <div>
                <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">Our Consultative <br /> <span className="italic text-slate-400 font-light">Approach.</span></h2>
                <p className="text-slate-500 text-xl mb-12 leading-relaxed font-light font-sans max-w-lg">
                  We don't just sell machines; we provide scent strategies. Our team in UAE works closely with facility managers and owners to ensure every drop of fragrance delivers maximum impact.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 font-sans">
                  {[
                    { title: "Site Assessment", desc: "Evaluating airflow and floor plans." },
                    { title: "Custom Blends", desc: "Fragment selection for brand identity." },
                    { title: "Pro Installation", desc: "Seamless setup for HVAC or wall units." },
                    { title: "Managed Service", desc: "Hassle-free refills and maintenance." }
                  ].map((item, i) => (
                    <div key={i} className="space-y-2 text-left">
                      <h4 className="text-blue-600 font-black text-[11px] uppercase tracking-widest">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                 <div className="relative bg-white/80 backdrop-blur-3xl border border-white p-12 rounded-[3.5rem] shadow-2xl text-center">
                    <ChatBubbleBottomCenterTextIcon className="w-16 h-16 text-blue-600 mb-8 mx-auto" />
                    <p className="text-slate-900 font-serif text-3xl italic leading-tight mb-8">
                      "We focus on creating environments where the scent is felt, not just smelled."
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="h-px w-12 bg-slate-200" />
                      <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em] font-sans">The Cool Max Promise</p>
                      <div className="h-px w-12 bg-slate-200" />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-32 text-center relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <h2 className="text-5xl md:text-8xl font-serif text-slate-900 mb-10 tracking-tighter leading-none">Ready to transform your <br /> <span className="italic text-blue-600 font-light">indoor environment?</span></h2>
            <p className="text-2xl text-slate-500 mb-16 leading-relaxed font-light font-sans max-w-2xl mx-auto">
              Contact our Dubai-based experts today for a free space assessment and fragrance trial.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-sans">
              <a href="/contact" className="w-full sm:w-auto px-16 py-8 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.3em] rounded-3xl overflow-hidden transition-all hover:bg-blue-600 hover:shadow-2xl flex items-center justify-center gap-3">
                Book Space Assessment <ArrowRightIcon className="w-4 h-4"/>
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
            
            <div className="mt-20 flex flex-wrap justify-center gap-12 font-sans">
               <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400"><ShieldCheckIcon className="w-5 h-5 text-blue-500"/> UAE Certified</div>
               <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400"><ShieldCheckIcon className="w-5 h-5 text-blue-500"/> 100% Non-Toxic</div>
               <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400"><ShieldCheckIcon className="w-5 h-5 text-blue-500"/> 24/7 Support</div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}